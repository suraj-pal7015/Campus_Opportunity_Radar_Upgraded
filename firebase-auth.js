import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile,
  RecaptchaVerifier, signInWithPhoneNumber, sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import {
  getMessaging, getToken, isSupported
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging.js";
import { firebaseConfig, vapidKey } from "./firebase-config.js";

const $ = (id) => document.getElementById(id);
const configReady = firebaseConfig.apiKey !== "PASTE_API_KEY_HERE" &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID" && firebaseConfig.appId !== "PASTE_APP_ID";

const panel = $("accountPanel");
const message = $("authMessage");
let app, auth, db, recaptchaVerifier, confirmationResult, currentUser = null;
let messaging = null;

function showMessage(text, isError = false) {
  message.textContent = text;
  message.className = `auth-message ${isError ? "error" : "success"}`;
}
function setBusy(button, busy, label) {
  if (!button) return;
  button.disabled = busy;
  if (busy) { button.dataset.originalText = button.textContent; button.textContent = label || "Please wait…"; }
  else if (button.dataset.originalText) button.textContent = button.dataset.originalText;
}
function validConfig() {
  if (!configReady) {
    showMessage("Firebase is not configured yet. Follow FIREBASE_SETUP.md and add your Firebase web config first.", true);
    return false;
  }
  return true;
}
function openPanel() { panel.hidden = false; panel.scrollIntoView({ behavior: "smooth", block: "start" }); }
function closePanel() { panel.hidden = true; }

if (configReady) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  isSupported().then((supported) => { if (supported) messaging = getMessaging(app); }).catch(() => {});
  onAuthStateChanged(auth, async (user) => {
    currentUser = user;
    $("authForms").hidden = Boolean(user);
    $("signedInPanel").hidden = !user;
    $("accountButton").textContent = user ? (user.displayName || user.email || user.phoneNumber || "My Account") : "Login / Register";
    if (!user) return;
    await ensureUserProfile(user);
    await loadPreferences();
  });
}

async function ensureUserProfile(user) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      displayName: user.displayName || "Student",
      email: user.email || null,
      phoneNumber: user.phoneNumber || null,
      preferences: { email: true, push: false, reminderDays: [7, 3, 1] },
      skills: [], createdAt: serverTimestamp(), updatedAt: serverTimestamp()
    }, { merge: true });
  } else {
    await setDoc(ref, {
      email: user.email || null,
      phoneNumber: user.phoneNumber || null,
      updatedAt: serverTimestamp()
    }, { merge: true });
  }
}

async function loadPreferences() {
  if (!currentUser) return;
  const snap = await getDoc(doc(db, "users", currentUser.uid));
  const prefs = snap.data()?.preferences || {};
  $("prefEmail").checked = prefs.email !== false;
  $("prefPush").checked = prefs.push === true;
  $("notificationEmail").value = snap.data()?.notificationEmail || currentUser.email || "";
  const days = prefs.reminderDays || [7, 3, 1];
  document.querySelectorAll("[data-reminder-day]").forEach((el) => { el.checked = days.includes(Number(el.dataset.reminderDay)); });
  $("profileName").textContent = currentUser.displayName || currentUser.email || currentUser.phoneNumber || "Student";
  $("profileContact").textContent = [currentUser.email, currentUser.phoneNumber].filter(Boolean).join(" · ") || "Signed in";
}

$("accountButton").addEventListener("click", () => { openPanel(); });
$("closeAccountPanel").addEventListener("click", closePanel);
$("emailRegister").addEventListener("click", async () => {
  if (!validConfig()) return;
  const name = $("registerName").value.trim();
  const email = $("emailAddress").value.trim();
  const password = $("emailPassword").value;
  if (!name || !email || password.length < 6) return showMessage("Enter your name, a valid email and a password of at least 6 characters.", true);
  const btn = $("emailRegister"); setBusy(btn, true, "Creating account…");
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });
    await sendEmailVerification(result.user);
    await ensureUserProfile(result.user);
    showMessage("Account created. Please verify your email using the verification link we sent.");
  } catch (e) { showMessage(friendlyError(e), true); }
  finally { setBusy(btn, false); }
});
$("emailLogin").addEventListener("click", async () => {
  if (!validConfig()) return;
  const btn = $("emailLogin"); setBusy(btn, true, "Signing in…");
  try {
    await signInWithEmailAndPassword(auth, $("emailAddress").value.trim(), $("emailPassword").value);
    showMessage("Signed in successfully.");
  } catch (e) { showMessage(friendlyError(e), true); }
  finally { setBusy(btn, false); }
});
$("sendOtp").addEventListener("click", async () => {
  if (!validConfig()) return;
  const phone = $("phoneNumber").value.trim();
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) return showMessage("Enter the phone number in international format, e.g. +919876543210.", true);
  const btn = $("sendOtp"); setBusy(btn, true, "Sending OTP…");
  try {
    if (!recaptchaVerifier) recaptchaVerifier = new RecaptchaVerifier(auth, "recaptchaContainer", { size: "normal" });
    confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
    $("otpArea").hidden = false;
    showMessage("OTP sent. Check your phone and enter the code.");
  } catch (e) {
    if (recaptchaVerifier) { try { await recaptchaVerifier.clear(); } catch {} recaptchaVerifier = null; }
    showMessage(friendlyError(e), true);
  } finally { setBusy(btn, false); }
});
$("verifyOtp").addEventListener("click", async () => {
  if (!confirmationResult) return showMessage("Request an OTP first.", true);
  try {
    await confirmationResult.confirm($("otpCode").value.trim());
    $("otpArea").hidden = true;
    showMessage("Mobile number verified and signed in.");
  } catch (e) { showMessage(friendlyError(e), true); }
});
$("savePreferences").addEventListener("click", async () => {
  if (!currentUser) return showMessage("Please sign in first.", true);
  const days = [...document.querySelectorAll("[data-reminder-day]:checked")].map((el) => Number(el.dataset.reminderDay));
  if (!days.length) return showMessage("Choose at least one reminder day.", true);
  try {
    const notificationEmail = $("notificationEmail").value.trim();
    if ($("prefEmail").checked && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notificationEmail)) {
      return showMessage("Enter a valid email address for reminders, or turn off email reminders.", true);
    }
    await setDoc(doc(db, "users", currentUser.uid), {
      notificationEmail: notificationEmail || null,
      preferences: { email: $("prefEmail").checked, push: $("prefPush").checked, reminderDays: days },
      updatedAt: serverTimestamp()
    }, { merge: true });
    if ($("prefPush").checked) await enablePushNotifications();
    showMessage("Notification preferences saved.");
  } catch (e) { showMessage(friendlyError(e), true); }
});
$("enablePushNow").addEventListener("click", async () => {
  if (!currentUser) return showMessage("Please sign in first.", true);
  try { await enablePushNotifications(); showMessage("Push notifications enabled on this browser."); }
  catch (e) { showMessage(friendlyError(e), true); }
});
async function enablePushNotifications() {
  if (!messaging) throw new Error("Push messaging is not supported in this browser. Try Chrome on Android or desktop.");
  if (!vapidKey || vapidKey === "PASTE_PUBLIC_VAPID_KEY_HERE") throw new Error("Add your Firebase Web Push VAPID public key to firebase-config.js first.");
  if (!("serviceWorker" in navigator)) throw new Error("This browser does not support service workers.");
  const permission = await Notification.requestPermission();
  if (permission !== "granted") throw new Error("Notification permission was not granted.");
  const registration = await navigator.serviceWorker.register("./firebase-messaging-sw.js");
  const token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: registration });
  if (!token) throw new Error("Could not create a push token. Check Firebase Cloud Messaging setup.");
  const ref = doc(db, "users", currentUser.uid);
  const snap = await getDoc(ref);
  const tokens = snap.data()?.fcmTokens || [];
  if (!tokens.includes(token)) tokens.push(token);
  await setDoc(ref, { fcmTokens: tokens, updatedAt: serverTimestamp() }, { merge: true });
}
$("logoutButton").addEventListener("click", async () => { try { await signOut(auth); showMessage("You have signed out."); } catch (e) { showMessage(friendlyError(e), true); } });

function friendlyError(error) {
  const messages = {
    "auth/invalid-email": "That email address is not valid.",
    "auth/weak-password": "Use a password with at least 6 characters.",
    "auth/email-already-in-use": "An account already exists with this email. Try signing in.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/user-not-found": "No account found. Register first.",
    "auth/wrong-password": "Incorrect password.",
    "auth/too-many-requests": "Too many attempts. Wait a little and try again.",
    "auth/invalid-phone-number": "Enter a valid phone number with country code.",
    "auth/quota-exceeded": "SMS quota exceeded for this Firebase project.",
    "auth/captcha-check-failed": "reCAPTCHA verification failed. Refresh and try again."
  };
  return messages[error.code] || error.message || "Something went wrong. Please try again.";
}

if (!configReady) {
  $("authMessage").textContent = "Setup required: add your Firebase web configuration in firebase-config.js to activate registration, login and notifications.";
  $("authMessage").className = "auth-message error";
}

/* Firebase Cloud Messaging background service worker.
   Keep this file in the same directory as index.html. */
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCTxVb2kdR-zb0RuQkUpeYlVzsWQOU6LCQ",
  authDomain: "campus-opportunity-radar.firebaseapp.com",
  projectId: "campus-opportunity-radar",
  storageBucket: "campus-opportunity-radar.firebasestorage.app",
  messagingSenderId: "44973253738",
  appId: "1:44973253738:web:616d55318d045585561613",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Campus Opportunity Radar";
  const options = {
    body: payload.notification?.body || "You have an opportunity reminder.",
    data: { url: payload.data?.url || "./" }
  };
  self.registration.showNotification(title, options);
});
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = event.notification.data?.url || "./";
  event.waitUntil(clients.openWindow(target));
});

 /* =====================================
   CAMPUS OPPORTUNITY RADAR
   JAVASCRIPT
===================================== */


/* =====================================
   1. OPPORTUNITY DATA
===================================== */

// These are demonstration listings.
// They are not verified real opportunities.

const opportunities = [
    {
        id: 1,
        title: "SpectoV National Hackathon 2026",
        organizer: "SpectoV",
        category: "Hackathon",
        description:
            "Build an AI, web development, or mobile application project. Prizes and potential career opportunities are advertised.",
        skills: ["Web Development", "Python", "AI/ML"],
        level: "Beginner",
        deadline: "2026-11-30",
        mode: "Individual Entry",
        applyLink: "https://snh.hiringspectov.com/"
    },

    {
        id: 2,
        title: "SAARTHI-26 National Hackathon",
        organizer: "Graphic Era Hill University",
        category: "Hackathon",
        description:
            "Participate in a 36-hour national hackathon focused on building solutions to real-world problems.",
        skills: ["Web Development", "Java", "Problem Solving"],
        level: "Beginner",
        deadline: "2026-10-31",
        mode: "Dehradun, India",
        applyLink: "https://saarthi.gehu.ac.in/"
    },

    {
        id: 3,
        title: "Goldman Sachs India Hackathon 2026",
        organizer: "Goldman Sachs",
        category: "Competition",
        description:
            "Explore the official student hackathon, coding requirements, and participating-college eligibility.",
        skills: ["Java", "Problem Solving"],
        level: "Intermediate",
        deadline: "2026-11-30",
        mode: "Online",
        applyLink: "https://www.goldmansachs.com/careers/students/programs-and-internships/india/hackathon"
    },

    {
        id: 4,
        title: "AICTE–Internshala Internships",
        organizer: "AICTE Internship Portal",
        category: "Internship",
        description:
            "Explore internship listings across different fields. Eligibility, duration, and stipend depend on the individual listing.",
        skills: ["Web Development", "Python", "Design"],
        level: "Beginner",
        deadline: "2026-12-31",
        mode: "Various",
        applyLink: "https://internship.aicte-india.org/internships/internshala"
    },

    {
        id: 5,
        title: "Unstop Student Opportunities",
        organizer: "Unstop",
        category: "Competition",
        description:
            "Discover student competitions, coding challenges, hackathons, and other career-building opportunities.",
        skills: ["Problem Solving", "Python", "Web Development"],
        level: "Beginner",
        deadline: "2026-12-31",
        mode: "Online and Offline",
        applyLink: "https://unstop.com/"
    },
    
        
    {
        id: 6,
        title: "AI Kaushal Hackathon 2026",
        organizer: "InMobi & Department of IT and Electronics, Government of Uttar Pradesh",
        category: "Hackathon",

        description:
            "Build AI-powered solutions to solve real-world challenges identified by various Uttar Pradesh Government departments. Selected solutions may get an opportunity for deployment by the UP Government.",

        skills: [
            "Artificial Intelligence",
            "Machine Learning",
            "Python",
            "Data Science",
            "Problem Solving",
            "AI/ML Development"
        ],

        level: "All Levels",

        deadline: "2026-11-27",

        mode: "Offline (IIIT Lucknow)",

        location: "IIIT Lucknow, Uttar Pradesh",

        eventDate: "2026-12-08 to 2026-12-09",

        eligibility: "Open to Uttar Pradesh Residents",

       
        prize: "₹1,00,000 Each for Top 5 Teams",

        totalPrizes: "₹5,00,000",

       

        

        academicPartner: "IIIT Lucknow",

        applyLink: "https://www.inmobi.com/ai-kaushal",

       

        status: "Applications Open"
    },
   
    {
        id: 7,
        title: "Great Indian Hackathon 2026",
        organizer: "Internshala",
        category: "Hackathon",

        description:
            "Participate in an online, beginner-friendly hackathon featuring an Android and Kotlin learning sandbox. Build innovative solutions, improve your development skills, and compete for internship opportunities and exciting gadget rewards.",

        skills: [
            "Android Development",
            "Kotlin",
            "Java",
            "Mobile App Development",
            "Problem Solving",
            "UI/UX Design"
        ],

        level: "Beginner",

        deadline: "2026-12-30",

        mode: "Online",

        location: "Online",

       
        eligibility: "Check Official Website for Eligibility Criteria",

       
       

        

        importantDates: {
            submissionStart: "2026",
            applicationDeadline: "2026-12-30"
        },

        learningTracks: [
            "Android Development",
            "Kotlin Programming"
        ],

        applyLink: "https://internshala.com/competitions/great-indian-hackathon-2026/",

        additionalInfo: "https://startupfunds.in/funding/great-indian-hackathon-2026",

        status: "Applications Open"
    },

    {
        id: 8,
        title: "CodeCrafters India 2026 – National Hackathon",

        organizer: "HackWithPune",

        category: "Hackathon",

        description:
            "Participate in CodeCrafters India 2026, a national-level online hackathon. Build innovative coding solutions, showcase your technical skills, collaborate with developers, and compete with participants from across India.",

        skills: [
            "Web Development",
            "Java",
            "Python",
            "C++",
            "Artificial Intelligence",
            "Machine Learning",
            "Problem Solving",
            "Software Development"
        ],

        level: "Beginner to Advanced",

        deadline: "2026-12-02",

        mode: "Online",

        location: "Online - India",

       

        eligibility: "Check Official Registration Page",

        
        
       

        importantDates: {
            applicationDeadline: "2026-12-02",
            hackathonDate: "2026-12-03"
        },

        registrationFee: "Free",

        teamSize: "Up to 6 Members",

        applyLink:
            "https://unstop.com/hackathons/codecrafters-india-2026-national-hackathon-hackwithpune-1792826",

        additionalInfo:
            "https://techsnap.in/hackathons",

        status: "Applications Open"
    },
   
    {
        id: 9,

        title: "Java Developer Internship",

        organizer: "Codeatrix",

        category: "Internship",

        description:
            "Codeatrix is offering a remote Java Developer Internship for college students, freshers, and aspiring software developers. Interns will work on practical Java applications, backend development, database operations, and real-world software development tasks.",

        skills: [
            "Core Java",
            "Object-Oriented Programming (OOP)",
            "Java Collections",
            "Exception Handling",
            "SQL",
            "JDBC",
            "Spring Boot",
            "Hibernate",
            "Git & GitHub",
            "Backend Development"
        ],

        level: "Beginner",

        deadline: "2026-12-10",

        mode: "Work From Home",

        location: "Remote - India",

        duration: "2 Months",

        eligibility:
            "College Students, Undergraduate Students, Postgraduate Students and Freshers",

        experience: "No Prior Experience Required",

        stipend: "₹15,000 – ₹20,000 Per Month",

        workingDays: "5 Days a Week",

        benefits: [
            "Monthly Stipend of ₹15,000–₹20,000",
            "Work From Home",
            "Practical Java Development Experience",
            "Certificate of Completion",
            "Letter of Recommendation",
            "Flexible Working Hours",
            "Potential Pre-Placement Offer"
        ],

        responsibilities: [
            "Develop Java-Based Applications",
            "Write Clean and Maintainable Code",
            "Implement Object-Oriented Programming Concepts",
            "Work with SQL and Databases",
            "Develop Backend Functionality",
            "Debug and Test Applications",
            "Work on Real-World Projects"
        ],

        selectionProcess:
            "Application Screening → Shortlisting → Technical Assessment/Interview → Final Selection",

        applyLink:
            "https://unstop.com/internships/java-developer-internship-codeatrix-1804069",

        status: "Applications Open"
    },
   
    {
        id: 10,

        title: "Software Engineer Intern",

        organizer: "Coy",

        category: "Internship",

        description:
            "Coy is offering a Software Engineer Internship for aspiring developers. Selected candidates will work with the core technology team and founding team to build responsive web applications, develop scalable backend APIs, integrate third-party services, and work on real-world product features.",

        skills: [
            "JavaScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "HTML",
            "CSS",
            "REST APIs",
            "SQL",
            "NoSQL",
            "Git & GitHub",
            "Full Stack Development"
        ],

        level: "Beginner to Intermediate",

        deadline: "2026-11-27",

        mode: "Hybrid",

        location: "Gurgaon, Haryana, India",

        duration: "6 Months",

        eligibility:
            "Check Official Registration Page",

        experience: "0–1 Years (Entry Level)",

        stipend: "₹45,000 Per Month (Advertised)",

        compensation: "₹5 LPA",

        workingDays: "5 Days a Week",

        participation: "Individual Application",

        benefits: [
            "₹45,000 Monthly Compensation (Advertised)",
            "Hybrid Working Environment",
            "6 Months Internship",
            "Work Directly with Founding Team",
            "Real-World Software Development Experience",
            "Certificate of Completion",
            "Letter of Recommendation",
            "Potential Pre-Placement Offer (PPO)"
        ],

        responsibilities: [
            "Build Responsive Web Applications",
            "Develop React.js and Next.js Features",
            "Create Backend APIs Using Node.js",
            "Work with Express.js",
            "Integrate SMS, WhatsApp and Email Services",
            "Work with SQL and NoSQL Databases",
            "Improve Application Performance and Security",
            "Develop Real-World Product Features"
        ],

        selectionProcess:
            "Application Screening → Shortlisting → Selection Process",

        applyLink:
            "https://unstop.com/internships/software-engineer-intern-coy-1809143",

        status: "Applications Open"
    }
];




    


/* =====================================
   2. BEGINNER CHECKLIST DATA
===================================== */

const checklist = [

    {
        id: "goal",
        title: "Choose your goal",
        description:
            "Choose an opportunity, role or skill you want to pursue."
    },

    {
        id: "resume",
        title: "Prepare your resume",
        description:
            "Add your education, skills, projects and contact details."
    },

    {
        id: "project",
        title: "Build a small project",
        description:
            "Create a project that demonstrates your practical skills."
    },

    {
        id: "practice",
        title: "Practice technical skills",
        description:
            "Revise the topics related to your chosen opportunity."
    },

    {
        id: "apply",
        title: "Apply before the deadline",
        description:
            "Check the official listing and submit your application."
    }

];


/* =====================================
   3. LOCAL STORAGE SETTINGS
===================================== */

const BOOKMARK_KEY = "campusRadarBookmarks";
const CHECKLIST_KEY = "campusRadarChecklist";
const STUDENT_SKILLS_KEY = "campusRadarStudentSkills";
const APPLICATION_STATUS_KEY = "campusRadarApplicationStatus";


/* =====================================
   4. SELECT HTML ELEMENTS
===================================== */

const searchInput = document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const skillFilter =
    document.getElementById("skillFilter");

const levelFilter =
    document.getElementById("levelFilter");

const opportunityGrid =
    document.getElementById("opportunityGrid");

const emptyState =
    document.getElementById("emptyState");

const resultsText =
    document.getElementById("resultsText");

const deadlineList =
    document.getElementById("deadlineList");

const checklistItems =
    document.getElementById("checklistItems");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const toast =
    document.getElementById("toast");

let showingSaved = false;
let toastTimer;
let studentSkills = readStorage(STUDENT_SKILLS_KEY, []);
let applicationStatuses = readStorage(APPLICATION_STATUS_KEY, {});


/* =====================================
   5. LOCAL STORAGE FUNCTIONS
===================================== */

function readStorage(key, fallback) {

    try {

        const storedValue = localStorage.getItem(key);

        return storedValue
            ? JSON.parse(storedValue)
            : fallback;

    } catch (error) {

        console.error("Unable to read LocalStorage:", error);

        return fallback;

    }

}


function writeStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.error("Unable to save LocalStorage:", error);

        showToast("Unable to save changes in this browser.");

    }

}


function getBookmarks() {

    const bookmarks = readStorage(BOOKMARK_KEY, []);

    return Array.isArray(bookmarks)
        ? bookmarks
        : [];

}


function getChecklistState() {

    return readStorage(CHECKLIST_KEY, {});

}


/* =====================================
   6. HELPER FUNCTIONS
===================================== */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];

    });

}


function formatDate(dateString) {

    const date = new Date(dateString + "T12:00:00");

    return date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

}


function daysUntil(dateString) {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const deadline = new Date(dateString + "T00:00:00");

    return Math.ceil(
        (deadline - today) / (1000 * 60 * 60 * 24)
    );

}


function getDeadlineMessage(dateString) {

    const days = daysUntil(dateString);

    if (days < 0) {
        return "Deadline passed";
    }

    if (days === 0) {
        return "Deadline today";
    }

    if (days === 1) {
        return "1 day left";
    }

    return days + " days left";

}


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2300);

}


/* =====================================
   7. FIT SCORE AND APPLICATION HELPERS
===================================== */

function normalizeSkill(skill) {
    const value = String(skill).trim().toLowerCase();
    const aliases = {
        "ai/ml": "artificial intelligence",
        "ai/ml development": "artificial intelligence",
        "machine learning": "artificial intelligence",
        "artificial intelligence": "artificial intelligence",
        "html": "html",
        "css": "css",
        "javascript": "javascript",
        "js": "javascript",
        "core java": "java"
    };
    return aliases[value] || value;
}

function calculateFitScore(item) {
    const required = [...new Set((item.skills || []).map(normalizeSkill))];
    const learner = new Set((studentSkills || []).map(normalizeSkill));
    if (!required.length || !learner.size) return 0;
    const matched = required.filter(skill => learner.has(skill)).length;
    return Math.round((matched / required.length) * 100);
}

function getApplicationStatus(id) {
    return applicationStatuses[String(id)] || "Not Applied";
}

function updateApplicationStatus(id, status) {
    if (status === "Not Applied") delete applicationStatuses[String(id)];
    else applicationStatuses[String(id)] = status;
    writeStorage(APPLICATION_STATUS_KEY, applicationStatuses);
    showToast("Application status updated.");
    renderOpportunities();
}

function safeExternalUrl(value) {
    try {
        const url = new URL(value);
        return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
    } catch (_) {
        return "#";
    }
}

/* =====================================
   7. CREATE OPPORTUNITY CARDS
===================================== */

function createOpportunityCard(item, bookmarks) {
    const isSaved = bookmarks.includes(item.id);
    const days = daysUntil(item.deadline);
    const urgentClass = days >= 0 && days <= 7 ? "urgent" : "";
    const score = calculateFitScore(item);
    const status = getApplicationStatus(item.id);
    const statusOptions = ["Not Applied", "Saved", "Applied", "Shortlisted", "Rejected", "Selected"];

    return `
        <article class="opportunity-card">
            <div class="card-top">
                <span class="category-pill ${escapeHTML(String(item.category).toLowerCase())}">${escapeHTML(item.category)}</span>
                <button type="button" class="bookmark-button ${isSaved ? "saved" : ""}" data-bookmark="${item.id}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove bookmark" : "Bookmark"} ${escapeHTML(item.title)}">${isSaved ? "★" : "☆"}</button>
            </div>
            <h3>${escapeHTML(item.title)}</h3>
            <p class="organizer">${escapeHTML(item.organizer)} · ${escapeHTML(item.mode || "Details on official page")}</p>
            <p class="description">${escapeHTML(item.description)}</p>
            <div class="skill-tags">${(item.skills || []).map(skill => `<span class="skill-tag">${escapeHTML(skill)}</span>`).join("")}</div>
            <div class="fit-score-wrap">
                <div class="fit-score-heading"><span>Skill fit score</span><strong>${score}%</strong></div>
                <div class="fit-score-track"><span style="width:${score}%"></span></div>
                <small>${studentSkills.length ? (score >= 70 ? "Strong skill match" : score >= 40 ? "Partial skill match" : "Some skills to develop") : "Add your skills above to calculate your match"}</small>
            </div>
            <div class="card-footer">
                <div class="deadline-info">Deadline<strong class="${urgentClass}">${formatDate(item.deadline)}</strong>${getDeadlineMessage(item.deadline)}</div>
                <span class="level-label">${escapeHTML(item.level || "All Levels")}</span>
            </div>
            <label class="status-control">Application status
                <select data-status="${item.id}" aria-label="Application status for ${escapeHTML(item.title)}">
                    ${statusOptions.map(option => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("")}
                </select>
            </label>
            <div class="card-actions">
                <button type="button" class="details-button" data-details="${item.id}">View Details</button>
                <a href="${escapeHTML(safeExternalUrl(item.applyLink))}" class="apply-button" target="_blank" rel="noopener noreferrer">Official Listing ↗</a>
            </div>
        </article>
    `;
}


/* =====================================
   8. SEARCH AND FILTER LOGIC
===================================== */

function getFilteredOpportunities() {

    const query =
        searchInput.value.trim().toLowerCase();

    const selectedCategory =
        categoryFilter.value;

    const selectedSkill =
        skillFilter.value;

    const selectedLevel =
        levelFilter.value;

    const bookmarks = getBookmarks();

    return opportunities.filter(item => {

        const searchableText = [

            item.title,
            item.organizer,
            item.description,
            item.category,
            item.mode,
            ...item.skills

        ].join(" ").toLowerCase();


        const matchesSearch =
            !query || searchableText.includes(query);


        const matchesCategory =
            selectedCategory === "all" ||
            item.category === selectedCategory;


        const matchesSkill =
            selectedSkill === "all" ||
            item.skills.some(skill => normalizeSkill(skill) === normalizeSkill(selectedSkill));

        const levelText = String(item.level || "").toLowerCase();
        const matchesLevel = selectedLevel === "all" ||
            (selectedLevel === "Beginner" && (levelText.includes("beginner") || levelText.includes("all levels"))) ||
            (selectedLevel === "Intermediate" && (levelText.includes("intermediate") || levelText.includes("advanced"))) ||
            (selectedLevel === "Advanced" && levelText.includes("advanced"));


        const matchesSaved =
            !showingSaved ||
            bookmarks.includes(item.id);


        return (
            matchesSearch &&
            matchesCategory &&
            matchesSkill &&
            matchesLevel &&
            matchesSaved
        );

    });

}


/* =====================================
   9. DISPLAY OPPORTUNITIES
===================================== */

function renderOpportunities() {

    const filtered = getFilteredOpportunities();

    const bookmarks = getBookmarks();

    opportunityGrid.innerHTML = filtered
        .map(item => createOpportunityCard(item, bookmarks))
        .join("");


    resultsText.textContent =
        `Showing ${filtered.length} of ${opportunities.length} opportunities`;


    emptyState.classList.toggle(
        "hidden",
        filtered.length !== 0
    );

    opportunityGrid.classList.toggle(
        "hidden",
        filtered.length === 0
    );


    updateStatistics();

}


/* =====================================
   10. BOOKMARK FUNCTIONALITY
===================================== */

function toggleBookmark(id) {

    const bookmarks = getBookmarks();

    const numericId = Number(id);

    const alreadySaved = bookmarks.includes(numericId);

    let updatedBookmarks;

    if (alreadySaved) {

        updatedBookmarks = bookmarks.filter(
            itemId => itemId !== numericId
        );

        showToast("Removed from saved opportunities.");

    } else {

        updatedBookmarks = [
            ...bookmarks,
            numericId
        ];

        showToast("Opportunity saved successfully!");

    }


    writeStorage(BOOKMARK_KEY, updatedBookmarks);

    renderOpportunities();

    renderDeadlines();

}


/* Event delegation for bookmark buttons */

opportunityGrid.addEventListener("click", function(event) {

    const button = event.target.closest("[data-bookmark]");

    if (!button) {
        return;
    }

    toggleBookmark(button.dataset.bookmark);

});


/* =====================================
   11. DEADLINE TRACKER
===================================== */

function renderDeadlines() {

    const bookmarks = getBookmarks();

    const savedUpcoming = opportunities

        .filter(item =>
            bookmarks.includes(item.id) &&
            daysUntil(item.deadline) >= 0
        )

        .sort((a, b) =>
            a.deadline.localeCompare(b.deadline)
        )

        .slice(0, 4);


    if (savedUpcoming.length === 0) {

        deadlineList.innerHTML = `

            <p class="muted">

                No upcoming deadlines saved yet.

                Bookmark an opportunity to see
                its deadline here.

            </p>

        `;

        return;

    }


    deadlineList.innerHTML = savedUpcoming.map(item => {

        const date = new Date(
            item.deadline + "T12:00:00"
        );

        const day = date.getDate();

        const month = date.toLocaleDateString(
            "en-IN",
            { month: "short" }
        );


        return `

            <article class="deadline-item">

                <div class="date-box">

                    <strong>${day}</strong>

                    <span>${month}</span>

                </div>

                <div>

                    <h3>${escapeHTML(item.title)}</h3>

                    <p class="muted">
                        ${escapeHTML(getDeadlineMessage(item.deadline))}
                    </p>

                </div>

            </article>

        `;

    }).join("");

}


/* =====================================
   12. BEGINNER CHECKLIST
===================================== */

function renderChecklist() {

    const state = getChecklistState();

    const completed = checklist.filter(
        item => Boolean(state[item.id])
    ).length;

    const total = checklist.length;

    const percentage = Math.round(
        (completed / total) * 100
    );


    checklistItems.innerHTML = checklist.map(item => {

        const isChecked = Boolean(state[item.id]);

        return `

            <label class="check-item ${isChecked ? "done" : ""}">

                <input
                    type="checkbox"
                    data-checklist="${item.id}"
                    ${isChecked ? "checked" : ""}
                >

                <span>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <small>
                        ${escapeHTML(item.description)}
                    </small>

                </span>

            </label>

        `;

    }).join("");


    progressBar.style.width = percentage + "%";

    progressText.textContent =
        `${completed} of ${total} completed`;

    document.getElementById("progressCount").textContent =
        percentage + "%";

}


/* Save checklist changes */

checklistItems.addEventListener("change", function(event) {

    const checkbox = event.target.closest("[data-checklist]");

    if (!checkbox) {
        return;
    }

    const state = getChecklistState();

    state[checkbox.dataset.checklist] = checkbox.checked;

    writeStorage(CHECKLIST_KEY, state);

    renderChecklist();

    updateStatistics();

    showToast("Checklist progress saved.");

});


/* Reset checklist */

document.getElementById("resetChecklist")
    .addEventListener("click", function() {

        writeStorage(CHECKLIST_KEY, {});

        renderChecklist();

        updateStatistics();

        showToast("Checklist has been reset.");

    });


/* =====================================
   13. DASHBOARD STATISTICS
===================================== */

function updateStatistics() {

    const bookmarks = getBookmarks();

    const upcoming = opportunities.filter(
        item => daysUntil(item.deadline) >= 0
    );


    document.getElementById("totalCount").textContent =
        opportunities.length;

    document.getElementById("upcomingCount").textContent =
        upcoming.length;

    document.getElementById("bookmarkCount").textContent =
        bookmarks.length;

    document.getElementById("savedCount").textContent =
        bookmarks.length;

    const state = getChecklistState();

    const completed = checklist.filter(
        item => Boolean(state[item.id])
    ).length;

    const percentage = Math.round(
        (completed / checklist.length) * 100
    );

    document.getElementById("progressCount").textContent =
        percentage + "%";

}


/* =====================================
   14. FILTER EVENT LISTENERS
===================================== */

searchInput.addEventListener("input", renderOpportunities);

categoryFilter.addEventListener("change", renderOpportunities);

skillFilter.addEventListener("change", renderOpportunities);

levelFilter.addEventListener("change", renderOpportunities);


/* =====================================
   15. CLEAR FILTERS
===================================== */

function clearAllFilters() {

    searchInput.value = "";

    categoryFilter.value = "all";

    skillFilter.value = "all";

    levelFilter.value = "all";

    showingSaved = false;

    renderOpportunities();

}


document.getElementById("clearFilters")
    .addEventListener("click", clearAllFilters);


/* =====================================
   16. SHOW SAVED OPPORTUNITIES
===================================== */

function displaySavedOpportunities() {

    showingSaved = true;

    renderOpportunities();

    document.getElementById("opportunities")
        .scrollIntoView({
            behavior: "smooth"
        });

}


document.getElementById("showSaved")
    .addEventListener("click", displaySavedOpportunities);


document.getElementById("savedButton")
    .addEventListener("click", displaySavedOpportunities);


document.getElementById("allButton")
    .addEventListener("click", function() {

        showingSaved = false;

        renderOpportunities();

    });


/* =====================================
   17. PERSONAL SKILLS, DETAILS AND STATUS
===================================== */

const studentSkillsInput = document.getElementById("studentSkillsInput");
const saveSkillsButton = document.getElementById("saveSkillsButton");
const skillsSavedMessage = document.getElementById("skillsSavedMessage");
const opportunityDialog = document.getElementById("opportunityDialog");
const opportunityDialogContent = document.getElementById("opportunityDialogContent");

if (studentSkillsInput) studentSkillsInput.value = (studentSkills || []).join(", ");

if (saveSkillsButton) saveSkillsButton.addEventListener("click", () => {
    studentSkills = [...new Set(studentSkillsInput.value.split(",").map(x => x.trim()).filter(Boolean))];
    writeStorage(STUDENT_SKILLS_KEY, studentSkills);
    skillsSavedMessage.textContent = studentSkills.length ? `Saved ${studentSkills.length} skill(s). Fit Scores updated.` : "No skills entered. Fit Scores will show 0%.";
    renderOpportunities();
    showToast("Your skills have been saved.");
});

opportunityGrid.addEventListener("change", event => {
    const select = event.target.closest("[data-status]");
    if (select) updateApplicationStatus(select.dataset.status, select.value);
});

opportunityGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-details]");
    if (!button) return;
    const item = opportunities.find(opportunity => opportunity.id === Number(button.dataset.details));
    if (!item) return;
    const fields = [
        ["Organizer", item.organizer], ["Category", item.category],
        ["Eligibility", item.eligibility || "Check the official listing"],
        ["Required skills", (item.skills || []).join(", ")],
        ["Experience level", item.level || "Not specified"],
        ["Deadline", formatDate(item.deadline)], ["Mode", item.mode || "Not specified"],
        ["Location", item.location || "Not specified"], ["Duration", item.duration || "Not specified"],
        ["Stipend / Prize", item.stipend || item.prize || item.totalPrizes || "See official listing"],
        ["Team size", item.teamSize || "See official listing"], ["Additional information", item.description]
    ];
    opportunityDialogContent.innerHTML = `<h2>${escapeHTML(item.title)}</h2><p class="muted">Review the details and confirm all information on the organizer's official page.</p><dl class="details-list">${fields.map(([label, value]) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl><a class="apply-button" href="${escapeHTML(safeExternalUrl(item.applyLink))}" target="_blank" rel="noopener noreferrer">Open official listing ↗</a>`;
    if (typeof opportunityDialog.showModal === "function") opportunityDialog.showModal();
    else opportunityDialog.setAttribute("open", "");
});

const closeOpportunityDialog = document.getElementById("closeOpportunityDialog");
if (closeOpportunityDialog) closeOpportunityDialog.addEventListener("click", () => opportunityDialog.close ? opportunityDialog.close() : opportunityDialog.removeAttribute("open"));
if (opportunityDialog) opportunityDialog.addEventListener("click", event => {
    if (event.target === opportunityDialog) opportunityDialog.close();
});

/* =====================================
   17. INITIALIZE WEBSITE
===================================== */

function initializeWebsite() {

    if (!Array.isArray(studentSkills)) studentSkills = [];
    if (!applicationStatuses || typeof applicationStatuses !== "object" || Array.isArray(applicationStatuses)) applicationStatuses = {};
    renderOpportunities();

    renderDeadlines();

    renderChecklist();

    updateStatistics();

}


// Start the application.

initializeWebsite();
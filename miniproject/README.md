# Campus Opportunity Radar

A client-side student opportunity discovery and tracking website built with HTML5, CSS3, JavaScript ES6+, and browser LocalStorage.

## Run locally
1. Extract this folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or open `index.html` directly in a modern browser.

## Features
- Browse sample hackathon, competition, and internship listings.
- Search and filter by category, skill, and experience level.
- Bookmark opportunities and view saved listings.
- Track bookmarked opportunity deadlines.
- Save beginner checklist progress.
- Enter personal skills and calculate a transparent rule-based skill Fit Score.
- Track application status (Not Applied, Saved, Applied, Shortlisted, Rejected, Selected).
- Open an opportunity details dialog and follow the organizer's official listing.
- Responsive layout for desktop and mobile screens.

## Storage
Bookmarks, checklist progress, personal skills, and application statuses are saved in the current browser's LocalStorage. They do not sync between devices or browsers. Do not store passwords or sensitive personal information in LocalStorage.

## Important data note
The opportunity records included in this student project are demonstration listings. Verify the current deadline, eligibility, stipend/prize, and registration details on the organizer's official website before applying. A displayed application status is only a personal tracker; it does not submit an application to an organizer.

## Fit Score
The Fit Score is calculated as: matched required skills divided by total required skills, multiplied by 100. It is a simple rule-based comparison, not an AI recommendation or a guarantee of eligibility.

## Technology
- HTML5
- CSS3
- JavaScript (ES6+)
- Web Storage API (LocalStorage)

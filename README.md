# Md. Monirul Islam – Portfolio

React + Vite + Tailwind CSS recreation of the reference portfolio design, filled with content from the CV.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # serve the build
```
Requires Node 18+.

## Edit content
Everything personal is in **`src/data/content.js`** (profile, education, tech stack, experience, projects, services, updates).

## Replace the profile photo
Put your image at `src/assets/avatar.png` and change the import in `src/components/Sidebar.jsx`
(`import avatar from '../assets/avatar.svg'` → `'../assets/avatar.png'`). Use a square image (~320×320).

## Features
Hash navigation (`#education`, `#portfolio`, …), typing role animation, name pronunciation (speaker icon), dark/light toggle,
accent-colour picker (wand), CV download (`public/Monirul_Islam_CV.pdf`), sidebar collapse, content fullscreen,
filter tabs, auto-rotating update counters, contact form (opens your mail app via `mailto:`), mobile drawer menu.

## Items to double-check
- Email in `content.js`: CV image shows `monirul.cse@gmail.com`, its text layer shows `monirrul.cse@gmail.com`.
- StudyWithMoniRuL start date: CV says Feb 2024 in one place and Apr 2024 in another (Feb 2024 used).
- Phone number is shown on Contact; delete the entry from `ways` in `src/pages/Contact.jsx` if you prefer not to publish it.

## Layout / scaling
Every dimension is in `rem` and the root font size follows the viewport (`html` rule in `src/index.css`), so the whole UI scales
as one unit from the reference design (about 1900 x 935; checked at 1696 x 820). Below 1100px the sidebar becomes a drawer.

## Added in this version
- Light theme matching the reference (snowflake icon in the footer toggles back to dark).
- "Available for hire!" tooltip on the avatar (`profile.hireStatus` in `content.js`; set to `''` to hide).
- "Open link?" confirmation dialog for every external link (`src/components/Modals.jsx`).
- Real browser fullscreen (sidebar stays visible, "Exit fullscreen" hint on hover).
- "Get to know more" video dialog: add `video: { url: 'https://youtu.be/…', text: '…' }` to any education, experience or project item in `content.js` and a button appears. No videos are set because none are in your CV.
- Education cards now show the intro paragraph, bullets, tags and `year`; optional `logo: '/images/…'` replaces the initials circle.

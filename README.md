# NOB Rotana — Developer Portfolio

## Live site

- **Hosting:** [https://nobrotana.web.app](https://nobrotana.web.app) (Firebase — verify in your Firebase Console if you use a different project alias)

## Features

- **Latest Updates:** Added an **AI-Powered Development** section outlining workflow and use cases with AI tools. Updated Hero section to reflect "Software & Web App Builder" title. Integrated new major projects (**S Tech Store**, **Delight Fashion**, and **NRI Studio**), featuring full bilingual support and modern UI cards. Reorganized featured projects grid and updated media links.
- Responsive layout, dark/light theme, scroll effects, optional canvas weather + audio (user-triggered only)
- Contact form writes to Firestore collection **`messages`**
- Optional collections **`projects`** and **`certificates`** override static placeholder cards when documents exist
- `cleanUrls: true` → paths like `/test` instead of `/test.html`

## Project layout

```text
.
├── public/
│   ├── index.html      # Main portfolio (Firebase Hosting entry)
│   ├── 404.html
│   └── …
├── firebase.json       # Hosting + Firestore rules path
├── firestore.rules     # Security rules
├── .firebaserc         # Default Firebase project id
└── README.md
```

## Prerequisites

- [Node.js](https://nodejs.org/) (for `npx firebase-tools`)
- A [Firebase](https://console.firebase.google.com/) project with **Firestore** enabled

## Firebase configuration

1. In the Firebase Console, open your project → **Project settings** → **Your apps** → Web app config.
2. Ensure `public/index.html` uses the same **`projectId`** / config as `.firebaserc` (CLI uses this for deploy).

**Security:** the Web API key in `index.html` is normal for client apps; access is enforced by **`firestore.rules`**. Do not store secrets in Firestore documents that have public `read` rules.

## Deploy

From the repository root (where `firebase.json` lives):

```bash
# One-time / occasional login
firebase login

# Use your project (must match .firebaserc)
firebase use nobrotana

# Deploy Hosting + Firestore rules
firebase deploy --only firestore,hosting
```

Or without global install:

```bash
npx firebase-tools deploy --only firestore,hosting
```

## Firestore data model (optional)

| Collection       | Purpose        | Notes |
|-----------------|----------------|--------|
| `messages`      | Contact form   | Created by visitors; rules allow **create** only |
| `projects`      | Portfolio grid | Public **read**; manage documents in Console or Admin SDK |
| `certificates`  | Certificates   | Same as projects |

Example **`projects`** fields: `title`, `description`, `tags` (array), `mediaType` (`image` | `video` | `iframe`), `imageUrl`, `videoUrl`, `iframeUrl`, `githubUrl`, `liveUrl`.

Example **`certificates`** fields: `issuer`, `title`, `date`, `icon` (Font Awesome class string), `credentialUrl`, `previewImageUrl` (optional).

If a collection is empty, the page keeps the built-in static placeholders.

## Local preview

Open `public/index.html` in a browser, or use any static server pointed at `public/`:

```bash
npx serve public
```

Some Firestore calls require `http(s)` origins allowed in Firebase Console if you test from `file://`.

## GitHub

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

---

**Author:** NOB Rotana · Portfolio repository: [Nob_Rotana](https://github.com/Rotananob/Nob_Ro

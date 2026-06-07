# LiberWerk — Development Repository

**Engineering leadership advisory by Mark Hahn.**

🌐 **Live site: [liberwerk.github.io](https://liberwerk.github.io)**

---

## About

This is the **development repository** for the LiberWerk advisory site. All edits and feature work happen here. Changes pushed to `main` are automatically mirrored to the public site within ~2 minutes via GitHub Actions.

| Repo | Role |
|------|------|
| [`TangoEnSkai/tangoenskai.github.io`](https://github.com/TangoEnSkai/tangoenskai.github.io) | ✏️ Development — all edits happen here |
| [`LiberWerk/LiberWerk.github.io`](https://github.com/LiberWerk/LiberWerk.github.io) | 🌐 Public mirror — auto-synced on every push to `main` |

---

## Tech Stack

| Layer | Detail |
|-------|--------|
| Framework | Vanilla HTML / CSS / JavaScript (no build step) |
| Fonts | Inter, JetBrains Mono (Google Fonts) |
| i18n | Built-in JS translation layer (EN / JP / KR) |
| Hosting | GitHub Pages (via LiberWerk org) |

---

## Repository Structure

```
.
├── index.html        # Main site
├── contact.html      # Contact form
├── main.css          # Global styles
├── main.js           # i18n + interactions
├── contact.css       # Contact page styles
├── contact.js        # Contact form logic
├── assets/           # Images and static assets
├── sitemap.xml
├── index.xml
└── .github/
    └── workflows/
        └── sync-to-liberwerkio.yml   # Auto-sync to public mirror
```

---

## Open Issues

See the [issue tracker](https://github.com/TangoEnSkai/tangoenskai.github.io/issues) for planned improvements.

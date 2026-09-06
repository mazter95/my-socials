# Obsidian & Aurora — Personal Identity & Social Hub

A cinematic, modern, and high-performance single-page personal landing website designed to showcase your social channels and contact links (**Discord**, **Instagram**, **YouTube**, and **Email**) with an editorial aesthetic, smooth animations, and zero-framework simplicity.

Designed to be hosted directly on **GitHub Pages** with zero build configuration.

---

## ✨ Key Features

- **Cinematic Visual Language**: Deep obsidian dark mode (`#08090d`), dynamic ambient dust/star canvas, floating blurred orbs, and glassmorphic card surfaces (`backdrop-filter: blur(20px)`).
- **Interactive Bento Social Grid**:
  - **Discord**: Live-style status badge, direct invite link, and 1-click Discord tag copying.
  - **Instagram**: Curated editorial vignette tiles with 3D hover reaction and direct profile link.
  - **YouTube**: 16:9 cinematic video preview stage with play glow, UHD badges, and channel subscription CTA.
  - **Direct Email**: Response time indicator (< 24h), 1-click address copy with instant toast alert, and direct `mailto:` launcher.
- **Dynamic Micro-Interactions**:
  - **Cursor-Following Spotlight**: Interactive lighting across the cards following pointer movement.
  - **Magnetic Physics**: Subtle magnetic pull on primary buttons, avatar, and launcher dock.
  - **Smooth Scroll & Reveals**: Staggered entrance animations powered by GSAP & ScrollTrigger.
  - **Floating Glass Quick Dock**: Appears on scroll with quick launch icons and tooltips.
  - **Keyboard Navigation**: Press `1` for Discord, `2` for Instagram, `3` for YouTube, `4` for Email, `C` to copy email, and `Esc` to clear toasts.
- **Performance & Accessibility**:
  - Semantic HTML5, accessible ARIA attributes, keyboard focus states, and zero layout shift.
  - Full `@media (prefers-reduced-motion: reduce)` support.
  - No external build step required (pure HTML, CSS, JavaScript).

---

## 📁 Project Structure

```text
Socials/
├── index.html     # Semantic markup, preloaded fonts, inline sharp SVG icons
├── style.css      # Design tokens, obsidian dark theme, glassmorphism, responsive grid
├── script.js      # Centralized SITE_CONFIG, canvas particle system, GSAP, clipboard & keyboard
└── README.md      # Documentation and GitHub Pages deployment guide
```

---

## ⚙️ How to Personalize (Centralized Configuration)

All personal information and social links are centralized at the very top of [`script.js`](./script.js) in the `SITE_CONFIG` object:

```javascript
const SITE_CONFIG = {
  // Identity & Branding
  name: "YOUR NAME",
  handle: "@yourhandle",
  bio: "YOUR BIO / TAGLINE",
  status: "Available for Projects & Collaboration",
  avatarInitials: "YN",
  avatarImage: "", // Optional URL to your avatar picture (leave empty to use initials monogram)

  // Social & Contact Links
  links: {
    discord: "YOUR DISCORD LINK",           // e.g. "https://discord.gg/yourserver"
    discordTag: "YOUR_DISCORD_TAG#0000",    // e.g. "username#0000" or "@username"
    instagram: "YOUR INSTAGRAM LINK",       // e.g. "https://instagram.com/yourprofile"
    instagramHandle: "@your_instagram",
    youtube: "YOUR YOUTUBE LINK",           // e.g. "https://youtube.com/@yourchannel"
    youtubeChannel: "Your YouTube Channel",
    email: "YOUR EMAIL",                    // e.g. "contact@yourdomain.com"
  },

  // Focus pillars / Endeavors
  pillars: [
    { num: "01 // CRAFT", title: "Creative Direction", desc: "..." },
    { num: "02 // MEDIA", title: "Content Creation", desc: "..." },
    { num: "03 // NETWORK", title: "Community Building", desc: "..." },
    { num: "04 // ALLIANCES", title: "Partnerships", desc: "..." }
  ],

  // Live Timezone for header badge ("local", "UTC", or IANA like "America/New_York", "Europe/London")
  timezone: "local",
};
```

Simply update those fields and save! The script will automatically update all headers, titles, cards, links, copy actions, and footer info.

---

## 💻 Running Locally

Because this project uses vanilla web standards, you can preview it immediately:

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in any web browser.

### Option 2: Local HTTP Server (Recommended)
Using Python (pre-installed on most systems):
```bash
python -m http.server 3000
```
Or using Node.js:
```bash
npx serve .
```
Then visit `http://localhost:3000` in your browser.

---

## 🚀 Deploying to GitHub Pages (Step-by-Step)

This repository is structured for immediate, zero-build deployment through GitHub Pages:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g., `socials` or `<username>.github.io`)
   - Keep it Public and click **Create repository**

2. **Push your code to GitHub**:
   In your project directory terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: cinematic personal social hub"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, click on **Settings** (top navigation bar)
   - In the left sidebar, click on **Pages** (under "Code and automation")
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`
     - **Branch**: Select `main` and folder `/ (root)`
   - Click **Save**

4. **Your Site is Live!**:
   - Within 1–2 minutes, GitHub will publish your site at:
     `https://<your-username>.github.io/<your-repo-name>/`
   - (Or `https://<your-username>.github.io/` if using a special username repository)

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `1` | Open Discord link |
| `2` | Open Instagram link |
| `3` | Open YouTube link |
| `4` | Open Email (`mailto:`) |
| `C` | Copy Email address to clipboard |
| `Esc` | Dismiss active toasts |

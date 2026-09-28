# Personal Link Page

A responsive Linktree-style page matching the layout in the reference screenshot.

## Customize

Open `script.js` and change:
- `username`
- `bio`
- `profile`
- each link's `label`
- each link's `url`
- each link's `icon`

Replace `profile.png` with your own square profile picture.

## Included

- Mobile + desktop responsive layout
- Rounded social/link buttons
- Hover animation
- Share button
- Clipboard fallback
- Per-link local click counters
- No framework or dependencies
- Ready for static hosting

## Hosting

Upload `index.html`, `style.css`, `script.js`, and `profile.png` to any static host such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

### About `/username` URLs

Static hosting normally serves this page at `/`. A custom `/username` path requires host rewrite rules or a server/router. The exact configuration depends on your host.

### Admin editing

This version intentionally uses a local configuration file rather than storing admin credentials in browser code. For a real admin dashboard, use a backend/database and authentication; never put an admin password or API secret in `script.js`.

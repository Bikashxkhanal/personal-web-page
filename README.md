# Bikash Khanal — Portfolio

Personal site for **Network & Linux Engineer** positioning (Vite + React + Tailwind).

**Live:** [bikashkhanal07.com.np](https://bikashkhanal07.com.np)

## Edit content

All profile copy, boot lines, terminal script, projects, and contact text live in one file:

```
src/data/siteData.js
```

Look for `(EDIT)` comments for placeholders (LinkedIn URL, cert exam status, project GitHub links, email if needed).

## Contact form (EmailJS)

The form uses `@emailjs/browser`. Credentials are in `src/constants.js` (gitignored):

```js
YOUR_SERVICE_ID   // EmailJS service ID
YOUR_TEMPLATE_ID  // EmailJS template ID
YOUR_PUBLIC_KEY   // EmailJS public key
```

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an email service + template (fields: `from_name`, `user_email`, `subject`, `message`).
3. Put the IDs in `src/constants.js` (copy from an older deploy if you already have them).

## Scripts

```bash
npm run dev       # local
npm run build     # production build
npm run deploy    # GitHub Pages (gh-pages)
```

## Theme

Dark (terminal green) is default. Toggle in the navbar; choice is stored in `localStorage` (`portfolio-theme`) and respects `prefers-color-scheme` until the user picks manually.

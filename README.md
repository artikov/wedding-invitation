# Wedding Invitation

A mobile-first, fully responsive single-page wedding invitation built with React,
Vite, Tailwind CSS, and Framer Motion. Trilingual (Uzbek default, Russian,
English) with an always-visible language switcher.

## Highlights

- **Envelope intro** — an animated envelope with a wax-seal stamp button; clicking
  it folds the flap open, lifts the letter, and reveals the invitation.
- **Three scroll-animated sections**
  1. Couple, wedding date, and venue with script typography and floral ornaments.
  2. A decorative September 2026 calendar highlighting the wedding day, plus a live
     countdown.
  3. The venue with an embedded Google map, a styled location card, and the closing
     message "We will be waiting for you."
- **Full i18n** — every string lives in `src/i18n/translations.js`; nothing is
  hardcoded in components. Language choice persists in `localStorage`.

## Customizing the event

Names, date, venue, and copy: edit `src/i18n/translations.js`.
Wedding date, map embed/link: edit the `EVENT` object at the bottom of that file.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```
# wedding-invitation

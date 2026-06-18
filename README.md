# Wedding Invitation

A mobile-first, fully responsive single-page wedding invitation built with React,
Vite, Tailwind CSS, and Framer Motion. Trilingual (Uzbek default, Russian,
English) with an always-visible language switcher. Forest-green / ivory / rose
palette with a gilded wax seal and hand-drawn line-art illustrations.

## Highlights

- **Envelope intro** — a forest-green envelope with a gilded wax-seal button;
  clicking it folds the flap open, lifts the letter, and reveals the invitation.
- **Scroll-animated sections**
  1. **Names** — the couple inside an ornate lancet arch with a stacked wedding
     date and the two event date cards.
  2. **Dear guests** — a heartfelt address and a calendar with the wedding day
     marked by a heart, beside an engraved doorway.
  3. **Venues** — both events (girls' party + wedding) with embedded Google maps.
  4. **Quote**, **Wishes** (numbered, with a Telegram-chat invite), and a
     **Closing** section with organizer contacts, a live countdown to the wedding,
     interlocked rings, and the message "We will be waiting for you."
- **Two events** — a girls' party and the wedding day, each with its own date,
  venue, and map; the countdown and calendar track the wedding day.
- **Full i18n** — every string lives in `src/i18n/translations.js`; nothing is
  hardcoded in components. Language choice persists in `localStorage`.

## Customizing the event

Names, dates, venues, and copy: edit `src/i18n/translations.js`.
Event dates, map embeds/links, and contact URLs: edit the `EVENTS` and `CONTACTS`
objects at the bottom of that file.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```
# wedding-invitation

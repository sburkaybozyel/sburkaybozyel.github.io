# AEON investor brief

Bilingual, English-first investor microsite for Vent and Forge. The site is static and designed to publish directly through GitHub Pages.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. English is the default language; the Turkish version can be opened with `?lang=tr`.

## Structure

```text
index.html   investor narrative and product evidence
styles.css  responsive visual system
app.js      EN/TR content, navigation and subtle motion
assets/     product, founder and analytics imagery
```

The public page keeps investment structure and detailed diligence materials private. Those are shared directly with qualified investors.

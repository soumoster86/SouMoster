# Translations

Site text lives here, one folder per language and one JSON file per section:
`en` (source), `fr`, `es`, `pt-BR`, `hi` and `zh` (Simplified Chinese).

- **Change or add text:** edit `en/<section>.json`, then the same key in every other
  language folder. A key missing from a translation shows the English text.
- **Game descriptions** (`appContent.json`) translate the text in `data/apps.ts`,
  keyed by app slug, with `versionHistory` keyed by version number. When you add a
  version or a feature to `data/apps.ts`, add it here too, or that item shows in English.
- **Placeholders** like `{name}` and tags like `<strong>…</strong>` must stay exactly as in
  English. Run `npm run check:i18n` to catch missing keys and mismatched placeholders.
- **Kept in English on purpose:** the Privacy Policy, Terms and Delete-your-data pages
  (the English text is the official version) and blog posts.

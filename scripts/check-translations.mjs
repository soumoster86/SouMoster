// Compare every locale's messages with English: missing/extra keys, and
// {placeholders} / <tags> that differ (they must match for next-intl).
// Usage: node scripts/check-translations.mjs
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..", "messages");
const base = "en";
const locales = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== base)
  .map((entry) => entry.name);
const namespaces = readdirSync(join(root, base)).map((f) => f.replace(/\.json$/, ""));

function flatten(obj, prefix = "", out = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object") flatten(value, path, out);
    else out[path] = String(value);
  }
  return out;
}

const tokens = (text) =>
  [...text.matchAll(/\{(\w+)\}|<(\/?\w+)>/g)].map((m) => m[0]).sort().join(" ");

let problems = 0;
const report = (msg) => {
  problems++;
  console.log(msg);
};

for (const locale of locales) {
  for (const ns of namespaces) {
    const file = join(root, locale, `${ns}.json`);
    if (!existsSync(file)) {
      report(`${locale}/${ns}.json: missing file`);
      continue;
    }
    const en = flatten(JSON.parse(readFileSync(join(root, base, `${ns}.json`), "utf8")));
    const tr = flatten(JSON.parse(readFileSync(file, "utf8")));
    // appContent is a partial overlay of data/apps.ts; only check what it defines.
    if (ns === "appContent") continue;
    for (const key of Object.keys(en)) {
      if (!(key in tr)) report(`${locale}/${ns}: missing ${key}`);
      else if (tokens(en[key]) !== tokens(tr[key]))
        report(`${locale}/${ns}: ${key} placeholders/tags differ: "${tokens(en[key])}" vs "${tokens(tr[key])}"`);
    }
    for (const key of Object.keys(tr)) {
      if (!(key in en)) report(`${locale}/${ns}: extra ${key}`);
    }
  }
}

console.log(problems ? `\n${problems} problem(s)` : "All translations match English keys.");
process.exit(problems ? 1 : 0);

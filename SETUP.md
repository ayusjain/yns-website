# YNS Website — Setup Guide

## 1. Install Node.js

Download and install from https://nodejs.org (LTS version).

## 2. Install dependencies

```bash
cd /Users/ayushjain/Claude/Podcast/website
npm install
```

## 3. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial YNS website"
gh repo create yns-website --public --push --source .
```

## 5. Deploy to Vercel

1. Go to https://vercel.com → Import Git Repository → select `yns-website`
2. Vercel auto-detects Next.js — click Deploy
3. Connect your GoDaddy domain in Vercel → Settings → Domains → add `yourneighborhoodstories.com`
4. In GoDaddy DNS: add the CNAME record Vercel gives you

## 6. Set up Giscus comments

1. Enable GitHub Discussions on your `yns-website` repo (Settings → Features → Discussions)
2. Create a Discussion category called "Episode Comments"
3. Go to https://giscus.app, fill in your repo details, get your IDs
4. Update `components/GiscusComments.tsx` with your `data-repo-id` and `data-category-id`

## 7. Set up contact form (Resend — free tier)

1. Sign up at https://resend.com
2. Add and verify your domain `yourneighborhoodstories.com`
3. Create an API key
4. In Vercel → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your key
5. Update the `from:` address in `app/api/contact/route.ts` to use your verified domain

## 8. Set up newsletter (Mailchimp — free)

1. Sign up at https://mailchimp.com, create an audience list
2. Get your API key, list ID, and datacenter prefix (e.g. `us21`)
3. In Vercel → Settings → Environment Variables, add:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_LIST_ID`
   - `MAILCHIMP_DC`

## 9. Adding a new episode

Create a new `.mdx` file in `content/episodes/` following the existing format:

```bash
cp content/episodes/ep5-govind.mdx content/episodes/ep7-guestname.mdx
```

Update the frontmatter and content, then `git push` — Vercel auto-deploys.

## Environment Variables Summary

| Variable | Where to get it | Required |
|---|---|---|
| `RESEND_API_KEY` | resend.com | For contact form |
| `MAILCHIMP_API_KEY` | mailchimp.com | For newsletter |
| `MAILCHIMP_LIST_ID` | Mailchimp audience settings | For newsletter |
| `MAILCHIMP_DC` | e.g. `us21` | For newsletter |

# Yusuf Alagbe — DevOps Portfolio

Personal portfolio website for Yusuf Alagbe, Senior DevOps Engineer.

**Live site**: Deployed on Vercel  
**Stack**: Next.js 14 + Tailwind CSS  
**CI/CD**: GitHub Actions → Vercel

## Pages
- `/` — Hero, stats, quick intro
- `/about` — Bio, experience timeline, education
- `/skills` — Skill bars, full tech stack
- `/projects` — 6 featured DevOps projects
- `/contact` — Contact form + social links

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deployment

Automatically deploys to Vercel on every push to `main` via GitHub Actions.

Required GitHub Secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

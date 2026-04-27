# DETAILS Financials — Secure Deployment Package

## What's in this package

```
details-deploy/
├── public/
│   └── index.html          ← Your DETAILS app (keys removed)
├── netlify/
│   └── functions/
│       ├── ai-proxy.js     ← Anthropic AI proxy (key stored in Netlify env)
│       └── gas-proxy.js    ← Google Sheets proxy (URL stored in Netlify env)
├── netlify.toml             ← Security headers + routing config
├── .env.example             ← Template for environment variables
└── README.md                ← This file
```

## Deploy in 5 steps

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "DETAILS Financials secure deployment"
git remote add origin https://github.com/YOUR_USERNAME/details-financials.git
git push -u origin main
```

### Step 2 — Connect to Netlify
1. Go to app.netlify.com → Add new site → Import from Git
2. Select your GitHub repo
3. Build settings are auto-detected from netlify.toml
4. Click Deploy

### Step 3 — Add Environment Variables
In Netlify Dashboard → Site Settings → Environment Variables, add:

| Key | Value |
|-----|-------|
| `ANTHROPIC_API_KEY` | Your key from console.anthropic.com |
| `GAS_URL` | Your Google Apps Script Web App URL |
| `GAS_API_KEY` | Your DETAILS app API key (from GAS Config sheet) |
| `ALLOWED_ORIGIN` | https://your-site.netlify.app |

### Step 4 — Redeploy
Netlify Dashboard → Deploys → Trigger Deploy

### Step 5 — Verify
- Open your site, go to AI Analytics → Run Analysis
- If AI works without asking for a key → proxy is working ✅
- Check View Source → no API keys visible ✅

## What's secured

| Before | After |
|--------|-------|
| Anthropic API key in browser source | Key in Netlify server environment |
| GAS URL visible in source | URL hidden behind /api/sync proxy |
| GAS API key in source | Key injected server-side |
| No security headers | HSTS, CSP, X-Frame-Options all set |

## Local Development

For local testing, create a `.env.local` file (never commit this):
```
ANTHROPIC_API_KEY=sk-ant-...
GAS_URL=https://script.google.com/macros/s/...
GAS_API_KEY=your-api-key
```

Install Netlify CLI and run:
```bash
npm install -g netlify-cli
netlify dev
```

This runs the proxy functions locally so your local dev matches production exactly.

## Security checklist

- [ ] Old GAS API key regenerated (since it was in old HTML source)
- [ ] ANTHROPIC_API_KEY added to Netlify env vars
- [ ] GAS_URL added to Netlify env vars  
- [ ] GAS_API_KEY added to Netlify env vars
- [ ] ALLOWED_ORIGIN set to your actual domain
- [ ] Old API key cleared from any browser localStorage (DevTools → Application → Local Storage)


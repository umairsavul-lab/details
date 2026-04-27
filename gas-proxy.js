# DETAILS Financials — Environment Variables
# Copy this to .env.local for local dev, and add all these to Netlify Dashboard → Environment Variables

# Your Anthropic API key — get from console.anthropic.com
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxx

# Your Google Apps Script Web App URL
GAS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Your domain — used for CORS (e.g. https://detailsfinancials.com)
ALLOWED_ORIGIN=https://your-site.netlify.app

# Future: Supabase (when you migrate the database)
# SUPABASE_URL=https://xxxx.supabase.co
# SUPABASE_ANON_KEY=eyJxxxxxx
# SUPABASE_SERVICE_ROLE_KEY=eyJxxxxxx  (NEVER expose this in browser)

# Your DETAILS app API key (from Google Sheets Config tab cell A1)
GAS_API_KEY=b96bcd35-5fe8-499c-b041-8b5bc3f8898b

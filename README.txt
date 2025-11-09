Spanish Apartment Site - Quickstart

1) Install dependencies
   - npm i    (or yarn / pnpm)

2) Configure environment
   - Copy .env.example to .env
   - Set DATABASE_URL to a Postgres connection string (Vercel Postgres/Neon works great)
   - Set ADMIN_PASSWORD to your chosen password
   - Optionally set GOOGLE_MAPS_EMBED_URL for the Local page map

3) Initialize database (locally)
   - npx prisma migrate dev --name init

4) Run
   - npm run dev
   - Visit http://localhost:3000
   - Admin at /admin (login at /admin/login)

Deploy to Vercel
- Push to GitHub and import into Vercel
- Add env vars: DATABASE_URL, ADMIN_PASSWORD, GOOGLE_MAPS_EMBED_URL (optional)
- Vercel will run build; if needed run 'npx prisma migrate deploy' once

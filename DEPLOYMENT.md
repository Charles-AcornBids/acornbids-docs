# AcornBids docs deployment

This Docusaurus app is intended to deploy separately from the main AcornBids application.

## Recommended production setup

- Hostname: `docs.acornbids.com`
- Hosting: GitHub Pages
- Build command: `npm run build`
- Build output directory: `build`
- Node version: `20` or newer

## GitHub Pages checklist

1. Push this repository to `git@github.com:Charles-AcornBids/acornbids-docs.git`.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** source to **GitHub Actions**.
4. Confirm the workflow named **Deploy docs** runs successfully on `main`.
5. In **Settings > Pages**, set the custom domain to `docs.acornbids.com`.
6. Configure DNS for `docs.acornbids.com` as a `CNAME` to `Charles-AcornBids.github.io`.
7. Add a link to `https://docs.acornbids.com` from the AcornBids app.

## Local commands

```bash
npm start
npm run build
npm run serve
```

## Content workflow

Add or edit pages under `docs/`. Docusaurus uses Markdown and MDX, so most documentation updates should not require code changes.

# AcornBids Help Center

This is the standalone Docusaurus site for AcornBids user documentation.

The intended production URL is `https://docs.acornbids.com`. Keep this project deployable separately from the main AcornBids app, backend, workers, and infrastructure.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This starts a local development server. Most content changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This generates static content into the `build` directory.

## Deployment

See `DEPLOYMENT.md`. The recommended setup is a separate GitHub repository deployed with GitHub Pages and GitHub Actions:

- Build command: `npm run build`
- Build output directory: `build`
- Custom domain: `docs.acornbids.com`

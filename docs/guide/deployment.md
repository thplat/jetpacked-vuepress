# Deployment

This site is deployed on [Jetpacked.ai](https://jetpacked.ai) infrastructure.

## Stack

- **Framework:** VuePress 2
- **Output:** Static HTML / CSS / JS
- **Hosting:** Hetzner VPS via Jetpacked
- **SSL:** Automatic via Caddy

## How it works

Jetpacked detects that this is a VuePress project, runs `npm run build`, and serves the `docs/.vuepress/dist` output via nginx.

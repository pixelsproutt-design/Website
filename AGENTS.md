# AGENTS.md

Guidance for AI agents working in this repository.

## Repository status

**Pixel Sprout** marketing homepage (`pixelsproutt-design/Website`). MVP scope is defined in `pixel-sprout-build-spec-mvp.md`; full PRD in `pixel-sprout-website-prd.md`.

## Cursor Cloud specific instructions

### Services

| Service | Required | Command | Port |
|---------|----------|---------|------|
| Next.js dev server | Yes | `npm run dev` | 3000 |

### Setup

```bash
npm install
npm run dev
```

### Lint / test / build

| Command | Purpose |
|---------|---------|
| `npm run build` | Production build |
| `npm run lint` | ESLint |

### Brand assets (repo root)

- `logo.png` — icon mark (also copied to `public/logo-icon.png`)
- `logo and name.png` — full wordmark (also `public/logo-full.png`)

### Gotchas

- **Homepage only** for MVP — service sub-pages, About, Blog, etc. are out of scope per build spec (stub nav links only).
- **GSAP ScrollTrigger** drives scroll animations; test by scrolling the homepage, not just loading it.
- **Get Quote modal** logs form data to console on submit (no backend in MVP).
- **Docker is not installed** in the default Cloud VM.

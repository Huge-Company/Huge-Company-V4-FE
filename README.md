# Huge Company V4 Website

The V4 website is Huge Company’s React-based web experience. It brings together the company overview, platform information, services, products, market information, account screens, and contact paths.

## Run locally

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Setup

```bash
npm install
```

Copy `.env.example` to `.env.local` and set `VITE_API_URL` to the backend URL when one is available. The frontend can run without a connected backend for UI work.

```bash
npm run dev
```

Vite prints the local address when the development server starts.

## Useful commands

```bash
npm run build
npm run preview
npm run lint
```

## Project layout

- `src/Components` — shared page components and layout
- `src/Pages` — route-level pages
- `src/Assets` — local fonts and visual assets
- `public` — static files served as-is
- `references` — visual reference material

## Contributing

Bug reports and improvement ideas are welcome through GitHub Issues. Before contributing code or reusing project materials, read [CONTRIBUTING.md](CONTRIBUTING.md) and [LICENCE](LICENCE). The project is proprietary; a public repository does not grant permission to copy, modify, distribute, or use its code or assets. Written permission from Huge Company is required.

Please report security concerns privately using the process in [SECURITY.md](SECURITY.md), not in a public issue.

## Contact

[namastehuge@gmail.com](mailto:namastehuge@gmail.com)

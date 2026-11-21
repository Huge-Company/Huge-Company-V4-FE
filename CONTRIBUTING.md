# Contributing

Thank you for helping improve the Huge Company V4 website. Bug reports and ideas can be opened as GitHub Issues. Please keep reports focused and include enough detail for the team to understand the problem.

## Before making a change

This repository contains proprietary code, designs, copy, and assets. The terms in [LICENCE](LICENCE) apply. Please obtain written permission from Huge Company before copying, modifying, redistributing, or otherwise using repository materials. Opening a pull request does not grant that permission.

For an authorized contribution, first open or link the related issue and describe the intended change. Keep the change focused and avoid including secrets, local environment files, generated output, or unrelated formatting changes.

## Local workflow

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` if you need to point the frontend at a backend.
3. Run `npm run dev` to work on the site locally.
4. Run `npm run build` before submitting a change.
5. Run `npm run lint` when your change touches JavaScript or JSX.

## Pull requests

- Link the issue or written approval for the work.
- Explain what changed and how it was checked.
- Include screenshots for visible interface changes.
- Keep credentials and private customer data out of commits and screenshots.
- Do not add dependencies without explaining why they are needed.

Maintainers review submissions and may request changes or close contributions that do not fit the project or its permissions.

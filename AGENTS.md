# AGENTS.md — open-opc

## What this is

Open OPC: a studio operating workspace for small, AI-native software companies. Open Scaffold Labs LLC is described as Pilot #1. The app covers a morning cockpit, product portfolio, team and model-routing notes, and equity / distribution journals.

## Stack

- Node 20+
- Plain HTML, CSS, and browser ES modules — no bundler
- `server.mjs` for local serving
- Tests: Node's built-in test runner + jsdom (`tests/*.test.mjs`)
- Vercel (`vercel.json`)

## Install / run / test / build

```bash
npm ci
npm test
npm start    # open http://localhost:3000
```

There is no build step.

## CI

No GitHub Actions workflow is in the repo today. Run `npm test` locally and note the missing CI on the PR.

## Shared @openscaffold modules

None declared in `package.json`.

## OSL engineering rules

These apply to every Open Scaffold Labs repo:

- **PRs only.** Do not push to the default branch (`main` or `master`). Open a pull request.
- **CI must be green** before merge. Never merge over red.
- **zod `.strict()`** on every write route (POST / PUT / PATCH / DELETE bodies).
- **Attack harness** on every route: auth bypass, tenant crossover, oversized and unknown fields, injection. Required once the app has real users; recommended for prototypes.
- **`docs/security-decisions.md` entry** (reviewed) for any change to headers, auth, or deploys.
- **No competitor names** in code, seed data, comments, or UI copy.
- **Never commit secrets.** No API keys, tokens, credentials, cookies, or magic links. Keep `.env` and real values out of git, PR text, and chat. Commit only `.env.example` with placeholders.

A production deploy, paid account, env/credential change, or merge that auto-deploys to production needs Dale's own yes.

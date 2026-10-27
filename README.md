# Open OPC

The Operating System for OPCs & 2–4-Person AI-Native Software Companies. Open Scaffold Labs LLC is Pilot #1.

## Run locally

Requires Node.js 20 or newer.

```sh
npm ci
npm test
npm start
```

Open http://localhost:3000. The application is plain HTML, CSS, and browser ES modules; no build step is required. `jsdom` is a development dependency used to exercise the actual UI in the Node test suite. No runtime packages or external font services are required.

## Workspace

- Morning cockpit: partner targets, adoption simulator, tax reserve toggle, six decisions, and audit trail.
- Product portfolio: 17 apps, category/search filters, editable annual assumptions, and client-ledger pricing for OpenCPA.
- Human + AI team: human owners, executive and vertical bots, model routing policies, and copyable CLI commands.
- Equity & distributions: equity allocation, reserves, capital draw accounts, balanced monthly journals, printable estimates, and downloadable statements.
- Shared core & counsel: six reference modules and persistent legal review checklists.
- Studio wizard: identity, image/monogram, accessible brand accent, 1–4 founders, AI preferences, portfolio selection, and workspace launch.

Four presets and a custom studio are available. Switching studios archives the outgoing workspace on this browser and restores the incoming workspace, including pricing, decisions, and distributions. The global Look preference persists separately. Wizard edits are a draft until Apply & Launch. Applying again creates a fresh custom workspace.

## Financial assumptions

At 100% pilot adoption, modeled revenue is $3,551,550, operating costs are $497,217 (14%), and net partner income is $3,054,333. The 15,660 customers comprise 250 CPA firms, 11,610 direct vertical organizations, and 3,800 consumer passes. The 35,000 client ledger files add revenue without adding to the customer count.

Product customer targets and blended tier charges are planning assumptions chosen to reconcile the supplied aggregate. In particular, Open Dentist uses a blended charge of $453.785 across its practice tiers; monetary revenue totals round to cents. Prices, ledger counts, and targets are editable. Comparison cost ranges are illustrative, not verified vendor quotations. Public deployment destinations can change independently of this app.

The cockpit displays the requested equal-partner average ($1,018,111/year at target scale). Actual simulated payments use the partners’ 33.34%, 33.33%, and 33.33% equity. The largest remainder method allocates every cent. The optional 28% tax reserve applies to net income after operating costs. It is a planning policy, not a tax calculation or guarantee of safe-harbor compliance.

A payout simulates one month of the current annual model. It writes paired debit/credit lines per partner, produces statements, and prevents duplicate postings in the same calendar month. These are local simulations: no transfers, AI provider calls, signing services, production package integrations, or tax filings occur.

## Architecture and persistence

- `js/data.js`: reference portfolio, partners, presets, bot decisions, modules, and routing policies.
- `js/theme.js`: Open Dentist-derived flat palettes, root CSS-variable application, safe storage fallback, and look persistence at `open_opc.theme`.
- `js/engine.js`: independently testable revenue, allocation, validation, journal, and persistence logic.
- `js/app.js`: browser rendering, navigation, forms, actions, and studio switching.
- `css/styles.css`: responsive desktop/mobile workspace, five palette support, keyboard focus, reduced motion, and print layout.
- `tests/open-opc.test.mjs`: financial and schema unit tests, WCAG AA palette contrast checks, and real application interaction tests in a DOM.

Workspace data uses `open_opc.workspace.v1`; per-studio archives use `open_opc.studio.<id>`. Storage is local to a browser and origin. It is not an account-based shared database. Private browsing or quota restrictions can prevent persistence; the app reports failures and continues in memory. Do not use this local simulation as a system of record.

## Deploy to Vercel

Import this directory into Vercel as an **Other** framework project. No build command is needed; use the repository root as the output directory. `vercel.json` supplies clean URLs and security headers. Assign `open-opc.vercel.app` in the project's domain settings if available to your Vercel account. No credentials or environment variables are required. This repository prepares the deployment; it does not claim a deployed production URL.

The app uses semantic navigation and labels, instant themes, visible keyboard focus, responsive layouts, and native modal focus management. All five palettes have automated contrast checks for normal text, muted text, accent controls, rail text, and five status meanings. Browser-managed printing and clipboard operations may depend on the browser's permissions and secure-context requirements.

export const clone = value => JSON.parse(JSON.stringify(value));
export const partners = [
 {name:'Dale Raaen',role:'Managing Partner',ownership:'Strategy, Architecture, Open HOA, OpenCPA, Open Firehouse, Platform & Shared Core',equity:33.34,target:1000000,bots:16,initials:'DR'},
 {name:'José',role:'Partner · Clinical & Dental',ownership:'Open Dentist, ClearSight Dental, Healthcare & Vertical Engineering',equity:33.33,target:1000000,bots:13,initials:'J'},
 {name:'Matt Lavin',role:'Partner · Public Safety',ownership:'Fire Service, Open Firehouse, FireHazmat, Open Fire Investigator & Field Operations',equity:33.33,target:1000000,bots:13,initials:'ML'}
];
// Annual charges are blended across the listed tiers; prices and targets are editable assumptions.
const rows = [
 ['hoa','Open HOA','Community',29.99,3000,'$29.99 flat per association ($2.50/mo)','$8,800–$34,200/yr','open-hoa'],
 ['cpa','OpenCPA 2.0','Business',299,250,'$299 Firm Base + $29.99 per Client Ledger File ($2.50/mo)','$540–$2,700/yr per client','opencpa'],
 ['plants','Open Plants','Lifestyle',9.99,1000,'$9.99 Home / $29.99 Pro Landscape & Nursery','$120–$600/yr','open-plants'],
 ['match','The Match (Golfer App)','Lifestyle',9.99,2800,'$9.99 Golfer Pass / $29.99 League Organizer','$120–$1,200/yr','the-match'],
 ['tickets','Open Tickets','Community',49,1000,'$49 Community / Parish / VFD Unlimited Pass · $0 ticket markup / $149 Commercial Venue','$600–$5,000/yr','open-tickets'],
 ['firehouse','Open Firehouse & FireHazmat','Public safety',299,1000,'$99 Volunteer VFD / $299 Combination / $599 Career Municipal','$5,000–$30,000/yr','open-firehouse'],
 ['investigator','Open Fire Investigator','Public safety',299,400,'$199 Independent CFI / $499 Multi-Investigator Firm / SIU','$2,400–$12,000/yr','open-fire-investigator'],
 ['church','OpenChurch & OpenDiocese','Community',199,1500,'$99 Small Parish / $199 Medium / $399 Large Parish','$1,200–$12,000/yr','openchurch'],
 ['landscape','Open Landscape Business (OLB)','Field & property',199,900,'$199 1–2 Crews / $399 3–8 Crews / $799 Commercial','$2,400–$15,000/yr','open-landscape-business'],
 ['architect','Open Landscape Architect (OLA)','Field & property',299,400,'$199 Solo Studio / $399 Multi-Designer','$1,200–$6,000/yr','open-landscape-architect'],
 ['golf','Open Golf Course OS + Open Clubhouse','Lifestyle',499,300,'$299 9-Hole / $499 18-Hole / $999 Private Country Club','$6,000–$24,000/yr','open-golf-course-os'],
 ['dentist','Open Dentist & ClearSight Dental','Healthcare',453.785,800,'$299 Solo Practice / $599 Multi-Chair Practice','$6,000–$25,000/yr','open-dentist'],
 ['restaurant','Open Restaurant','Hospitality',399,700,'$199 Cafe / $399 Full-Service / $799 Multi-Unit','$2,400–$12,000/yr','open-restaurant'],
 ['caterer','Open Caterer & The Recipe Composer','Hospitality',299,400,'$199 Boutique Caterer / $399 Full-Service Event Caterer','$1,200–$6,000/yr','open-caterer'],
 ['developer','Open Property Developer','Field & property',399,210,'$299 Single-Project Builder / $599 Multi-SPE Commercial','$3,600–$18,000/yr','open-property-developer'],
 ['interior','Open Interior Design / Room Studio','Field & property',299,400,'$199 Solo Designer / $399 Multi-Designer Studio','$1,200–$6,000/yr','open-interior-design'],
 ['service','OpenService & Pro Suite','Field & property',199,600,'$149 Solo Trade Pro / $299 Multi-Tech / General Contractor Firm','$1,800–$12,000/yr','open-service']
];
export const portfolio = rows.map(([id,name,category,price,customers,tiers,legacy,slug])=>({id,name,category,price,customers,tiers,legacy,url:`https://${slug}.vercel.app`,ledgers:id==='cpa'?35000:0,ledgerPrice:29.99}));
export const presets = [
 {id:'pilot',label:'Pilot #1: Open Scaffold Labs LLC (3 Partners · 17 Vertical Apps · 42 AI Bots)',name:'Open Scaffold Labs LLC',tagline:'Your small team. Extraordinary scale.',partners,apps:17,bots:42,entity:'LLC'},
 {id:'solo',label:'Preset #2: Solo Founder OPC (1 Human · 3 Niche SaaS Apps · 9 AI Bots — $1,000,000/yr Solo Target)',name:'Solo Founder OPC',tagline:'One founder. A world of possibility.',partners:[{...partners[0],name:'Solo Founder',equity:100,initials:'SF',bots:9}],apps:3,bots:9,entity:'LLC'},
 {id:'duo',label:'Preset #3: 2-Partner Vertical Studio (2 Humans · 6 Apps · 16 AI Bots — $2,000,000/yr Target)',name:'2-Partner Vertical Studio',tagline:'Two partners. Shared ambition.',partners:partners.slice(0,2).map(p=>({...p,equity:50,bots:8})),apps:6,bots:16,entity:'LLC'},
 {id:'collective',label:'Preset #4: 4-Partner Product Collective (4 Humans · 12 Apps · 28 AI Bots — $4,000,000/yr Target)',name:'4-Partner Product Collective',tagline:'Independent minds. One collective.',partners:[...partners,{...partners[0],name:'Fourth Partner',initials:'FP'}].map(p=>({...p,equity:25,bots:7})),apps:12,bots:28,entity:'LLC'}
];
export const decisions = [
 ['d1','CTO','Release the shared ledger update','OpenCPA · 8 checks passed · ready for partner review','Review release'],
 ['d2','CFO','Approve the quarterly operating reserve','Studio finance · maintain 14% of annual revenue','Finance'],
 ['d3','Dental Lead','Review ClearSight onboarding flow','Open Dentist · patient intake improvements','Product'],
 ['d4','CMO','Choose the next association pilot cohort','Open HOA · 12 communities ready for outreach','Growth'],
 ['d5','General Counsel','Review shared IP assignment checklist','Counsel vault · partner sign-off required','Legal'],
 ['d6','COO','Prioritize fire service import tooling','Open Firehouse · field operations feedback','Operations']
].map(([id,officer,title,detail,type])=>({id,officer,title,detail,type,status:'Needs decision'}));
export const modules = [
 ['billing','2.0','Zero-markup payments & wholesale rails','Stripe Connect direct charges, raw PaymentIntents, Level 2/3 interchange, and $0.25 wholesale ACH across all 17 verticals'],
 ['scheduling','1.0','Unified calendars, tee sheets & crew dispatch','Multi-resource appointments, operatory chairs, dining tables, 8-minute tee sheets, 24/48/72-hr Kelly shifts, and crew dispatch'],
 ['books','3.3','Complete 100% QuickBooks replacement','4-Book Parallel Engine (Cash, GAAP Accrual, IRS Tax M-1, 60-Day Shadow Proof), Fixed Assets/MACRS, Inventory/BOM, Payroll & Zero-PBC Audit Portal'],
 ['kernel','1.0','Core auth, multi-tenant shell & primitives','Shared authentication, workspace tenancy, mobile/desktop responsive shell, data tables, and cross-vertical base primitives'],
 ['ops','1.2','Single action layer & exact-item approvals','Unified agent action layer, exact-item human approval cards, immutable action audit log, and 3-role Postgres Row-Level Security'],
 ['design','1.2','Top-bar look switcher & shared tokens','Upper-menu-bar 1-click Look Switcher (Open Scaffold Classic, Clinical Light, Midnight Dark, High Contrast) and responsive tokens'],
 ['bot-dashboard','1.4','Morning cockpit & partner decision queue','In-app Human + Bot Morning Cockpit and 17-vertical GM Scorecard Command Center'],
 ['crm','1.0','Leads, pipelines & Good/Better/Best proposals','Unified household/account pipeline, interactive Good/Better/Best proposals, treatment plans, and instant deposit handoff'],
 ['esign','1.1','Native tamper-evident e-signatures','Native pdf-lib sealer, AES-256-GCM signer tokens, SHA-256 Certificate of Completion, and closed-loop identity verification (no DocuSign tax)'],
 ['shop','1.1','Retail POS, variant SKUs & loaners','Point-of-sale checkout, variant matrix SKUs, barcode scanning, serialized demo/sample loaners, and member credit books'],
 ['messaging','1.1','Consent-first SMS, email & push outbox','Transactional SMS/Email/Push outbox with recipient-local quiet hours, automatic STOP opt-out, and send-ledger audit trail'],
 ['ai','0.3','Multi-model AI & low-credit router','Swappable router across ChatGPT/Codex, Kimi Code, Claude, and Grok with prompt caching, budget caps, and 3-layer markdown brains'],
 ['import-migrate','1.0','15-minute Day-1 import & shadow verifier','Competitor schema presets (QuickBooks, AppFolio, Toast, Dentrix, ServiceTitan), 1-click rollback, and 60-day $0.00 variance shadow sync'],
 ['payroll-time','1.0','GPS timeclock, tip pooling & 1099/W-2 bridge','Mobile crew clock-in with GPS geofencing, restaurant tip pooling, stylist commissions, FLSA 7(k) fire shifts, and W-2/1099-NEC ledger bridge'],
 ['licensing','2.1','Cross-platform annual plan entitlements','Store-agnostic entitlement engine across Web, Apple App Store, and Google Play with 14-day grace and downgrade-never-lockout'],
 ['tour','1.0','360° virtual tours & 3D spatial pins','Self-hosted 360° equirectangular panorama & 3D walkthrough viewer on Cloudflare R2 ($0 egress) with entity hotspot pinning'],
 ['vi','1.0','Voice command bar & clinical/field dictation','Deterministic Cmd-K voice command grammar plus floating mic dictation with verbatim-first verification'],
 ['measure','1.0','GPS lot, floorplan & DXF takeoffs','MeasureDrawer, QuickMeasure, FloorPlanMini, PhotoMeasureMini, DXF CAD parser, and GPS acreage/hydrant/yardage geometry'],
 ['catering','1.0','Banquet event orders (BEOs) & shotgun outings','Shared Catering, Banquet Event Orders, milestone deposits, and 144-player golf outing + awards banquet engine'],
 ['gift-cards','1.0','Multi-vertical gift cards & split-tender liability','Gift card issuance, holiday promo bonus campaigns, split-tender POS redemption, and unearned liability sub-ledger'],
 ['ticketing','1.2','Zero-markup community & venue ticketing','Public-utility ticketing with $0 platform fee, upfront all-in pricing, rotating anti-scalper QR codes, and face-value fan exchange'],
 ['website','1.0','Instant vertical websites & direct booking SEO','Platform-owned website builder, custom domains, SEO schema, and zero-commission online ordering/booking widgets'],
 ['fire-investigation','1.3','NFPA 921 Origin & Cause & chain of custody','NFPA 921 scientific-method hypothesis matrix, 3D scene evidence pinning, SHA-256 chain of custody, and Daubert/subrogation binders'],
 ['documents','1.1','SHA-256 document vault & local doc bridge','Tamper-evident SHA-256 deduplicated storage, local iOS/Mac/Web document bridge (@openscaffold/doc-bridge), and multi-page OCR extraction'],
 ['pdf','1.0','Brand-tokenized PDF statement & binder engine','Deterministic react-pdf and pdf-lib rendering for statements, BEOs, tax workpapers, fire origin reports, and board packets'],
 ['plants','1.2','North America botanical & weed catalog','USDA zone hardiness, toxicity, water/sun care schedules (@openscaffold/plants-ui), and AI leaf/weed diagnosis across Plants, OLA, OLB & Golf'],
 ['menu','1.1','Multi-tenant menu, recipe & allergen sync','Shared menu engineering, recipe yield scaling, wine/beverage pairing, 86-item sync, and allergen matrices across Restaurant, Caterer & Clubhouse'],
 ['estimating','1.1','Labor, material, equipment & bid assembly',' Assemblies, crew production rates, margin guardrails, and Good/Better/Best bid takeoffs across Landscape, Service, Architect & Developer'],
 ['oauth','1.0','Cross-vertical SSO, Passkeys & step-up MFA','OAuth 2.0 + OpenID Connect identity provider, RFC 6238 TOTP step-up authentication, and multi-org role delegation'],
 ['space-planner','1.0','2D/3D floorplan, seating & room study canvas','Measured room layouts, 3D spatial study views, dining/banquet table seating charts, and furniture/fixture placement'],
 ['payment','1.0','White-label Stripe replacement','OpenPay.js Checkout, $0.15 Direct Bank ACH/FedNow, Wholesale IC+ Card Switch, Auto Level 2/3 Enrichment & 2-Min KYB']
];
export const routing = {
 saver:{label:'Credit-Saver Mode',description:'ChatGPT + Kimi primary, Claude on-demand',coding:'ChatGPT / OpenAI Codex CLI',research:'Kimi Code CLI',review:'Claude · on demand'},
 balanced:{label:'Balanced Multi-Model',description:'Split work by context and review needs',coding:'ChatGPT / OpenAI Codex CLI',research:'Kimi Code CLI',review:'Claude · design & architecture'},
 burst:{label:'All-Kimi / Codex Burst',description:'Kimi for daily work, Codex for heavy builds',coding:'Kimi Code CLI → Codex burst',research:'Kimi Code CLI',review:'Partner review · Claude optional'}
};

// Verified destinations from the corresponding local project documentation.
const deploymentOverrides = {
 hoa:'https://open-hoa-preview.vercel.app',
 dentist:'https://open-dentist-assistant.vercel.app',
 landscape:'https://open-landscape-business.fly.dev',
 architect:'https://open-landscape-architect.fly.dev'
};
for (const app of portfolio) {
 app.url = deploymentOverrides[app.id] || app.url;
 app.deploymentStatus = ['restaurant','developer'].includes(app.id) ? 'Service unavailable' : app.id === 'interior' ? 'Pre-pilot · deployment pending' : 'Available';
 app.deploymentChecked = '2026-10-26';
}

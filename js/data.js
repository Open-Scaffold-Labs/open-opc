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
 ['books','3.1','One financial truth','Double-Entry Ledger, Trial Balance, Bank Rec, 1099/K-1'],
 ['esign','1.1','Sign with confidence','ESIGN / UETA SHA-256 Tamper-Evident Signing'],
 ['design','2.0','One familiar experience','Top-Bar Look Switcher & 5 WCAG Palettes'],
 ['bot-dashboard','1.4','Keep humans in the loop','Morning Cockpit & Decision Queue'],
 ['ticketing','1.2','Bring communities together','Zero-Markup QR Event & Pass Engine'],
 ['fire-investigation','1.3','Evidence with integrity','NFPA 921 & Evidence Chain-of-Custody']
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

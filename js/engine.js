import {clone, presets, portfolio, decisions, routing} from './data.js';
export const STATE_KEY = 'open_opc.workspace.v1';
export const money = (value, digits=0) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:digits,minimumFractionDigits:digits}).format(value);
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function createState(id='pilot') {
 const preset = presets.find(p=>p.id===id)||presets[0];
 return {version:1,studio:clone(preset),portfolio:clone(portfolio.slice(0,preset.apps)),decisions:clone(decisions),adoption:100,taxWithhold:false,route:'saver',executives:true,verticalBots:true,audit:[],journals:[],distributions:[]};
}
export function annualRevenue(app) { return Math.round((app.price*app.customers+(app.ledgers||0)*(app.ledgerPrice||0))*100)/100; }
export function financials(state) {
 const gross = Math.round(state.portfolio.reduce((sum,p)=>sum+annualRevenue(p),0)*state.adoption)/100;
 const overhead = Math.round(gross*14)/100;
 const net = Math.round((gross-overhead)*100)/100;
 const tax = state.taxWithhold ? Math.round(net*28)/100 : 0;
 const distributable = Math.round((net-tax)*100)/100;
 return {gross,overhead,net,tax,distributable,perPartner:distributable/state.studio.partners.length,monthly:distributable/state.studio.partners.length/12,customers:Math.round(state.portfolio.reduce((sum,p)=>sum+p.customers,0)*state.adoption/100)};
}
export function validatePartners(list) {
 if (!Array.isArray(list)||list.length<1||list.length>4) throw new Error('Add between 1 and 4 founders.');
 if (list.some(p=>!p.name?.trim()||!p.role?.trim()||!Number.isFinite(p.equity)||p.equity<=0||!Number.isFinite(p.target)||p.target<=0)) throw new Error('Each founder needs a name, role, positive equity, and income target.');
 if (Math.abs(list.reduce((s,p)=>s+p.equity,0)-100)>.001) throw new Error('Founder equity must total 100%.');
 return true;
}
export function validatePrice(price,customers,ledgers=0,ledgerPrice=0) {
 if (![price,customers,ledgers,ledgerPrice].every(Number.isFinite)||price<0||price>1000000||!Number.isInteger(customers)||customers<0||customers>10000000||!Number.isInteger(ledgers)||ledgers<0||ledgers>10000000||ledgerPrice<0||ledgerPrice>1000000) throw new Error('Enter valid non-negative prices and whole-number customer targets.');
}
export function audit(state,message,now=new Date()) { state.audit.unshift({message,time:now.toISOString()});state.audit=state.audit.slice(0,100); }
export function decide(state,id,action) {
 const item=state.decisions.find(d=>d.id===id);
 const statuses={approve:'Approved',codex:'Routed to ChatGPT/Codex',kimi:'Routed to Kimi',defer:'Deferred'};
 if (!item||!statuses[action]) throw new Error('Unknown decision or action.');
 item.status=statuses[action];audit(state,`${item.title} — ${item.status}`);return item;
}
export function allocateCents(amount,partners) {
 const cents=Math.round(amount*100);const parts=partners.map(p=>Math.floor(cents*p.equity/100));
 let remainder=cents-parts.reduce((s,p)=>s+p,0);
 const order=partners.map((p,i)=>({i,fraction:cents*p.equity/100-parts[i]})).sort((a,b)=>b.fraction-a.fraction);
 for(let i=0;i<remainder;i++) parts[order[i%order.length].i]++;
 return parts.map(p=>p/100);
}
export function runDistribution(state,now=new Date()) {
 validatePartners(state.studio.partners);
 const period=now.toISOString().slice(0,7);
 if(state.distributions.some(d=>d.period===period)) throw new Error('A simulated distribution has already been posted for this month.');
 const total=Math.round(financials(state).distributable/12*100)/100;
 if(total<=0) throw new Error('There is no distributable income at this adoption level.');
 const amounts=allocateCents(total,state.studio.partners);
 const id=`DIST-${period}-${state.distributions.length+1}`;
 const statements=state.studio.partners.map((p,i)=>({name:p.name,equity:p.equity,amount:amounts[i]}));
 const journal=statements.flatMap(p=>[{id,period,partner:p.name,account:'Partner Distribution Clearing',debit:p.amount,credit:0},{id,period,partner:p.name,account:'Operating Cash',debit:0,credit:p.amount}]);
 state.journals.push(...journal);
 const result={id,period,total,statements,taxWithheld:state.taxWithhold,createdAt:now.toISOString()};state.distributions.push(result);audit(state,`${id} · simulated monthly payout ${money(total,2)}`,now);return result;
}
export function statementText(state,distribution) {
 return `${state.studio.name}\nPartner Distribution Statement · SIMULATION\n${distribution.id} · ${distribution.period}\n${distribution.statements.map(p=>`${p.name} (${p.equity}%): ${money(p.amount,2)}`).join('\n')}\nTotal: ${money(distribution.total,2)}\nTax reserve withheld: ${distribution.taxWithheld?'28% of net income':'No'}\nPlanning estimate only; no funds were transferred. Schedule K-1 estimates require accountant review.`;
}
export function saveState(state,storage) { try {storage.setItem(STATE_KEY,JSON.stringify(state));return true;} catch {return false;} }
export function loadState(storage) {
 try {
 const saved=JSON.parse(storage.getItem(STATE_KEY));
 if (!saved||saved.version!==1||!saved.studio||!Array.isArray(saved.portfolio)||saved.portfolio.length>17||!Array.isArray(saved.decisions)||saved.decisions.length!==6||!Array.isArray(saved.audit)||!Array.isArray(saved.distributions)||!Array.isArray(saved.journals)||!routing[saved.route]||!Number.isFinite(saved.adoption)||saved.adoption<10||saved.adoption>150) return createState();
 validatePartners(saved.studio.partners);
 if (!['pilot','solo','duo','collective','custom'].includes(saved.studio.id) || typeof saved.studio.name !== 'string' || !saved.studio.name.trim() || typeof saved.studio.tagline !== 'string' || !Number.isFinite(saved.studio.bots) || typeof saved.taxWithhold !== 'boolean' || typeof saved.executives !== 'boolean' || typeof saved.verticalBots !== 'boolean') throw Error('Invalid workspace settings');
 if (saved.studio.logo && !/^data:image\/(png|jpeg|webp);base64,[a-z0-9+/=]+$/i.test(saved.studio.logo)) delete saved.studio.logo;
 if (new Set(saved.portfolio.map(p=>p.id)).size !== saved.portfolio.length) throw Error('Duplicate products');
 if (saved.decisions.some(d=>!decisions.some(item=>item.id===d.id)||typeof d.status !== 'string') || new Set(saved.decisions.map(d=>d.id)).size!==6) throw Error('Invalid decision queue');
 if (saved.audit.some(a=>typeof a.message!=='string'||!Number.isFinite(Date.parse(a.time)))) throw Error('Invalid audit trail');
 if (saved.journals.some(j=>!Number.isFinite(j.debit)||!Number.isFinite(j.credit)||j.debit<0||j.credit<0)) throw Error('Invalid journals');
 if (saved.distributions.some(d=>!Array.isArray(d.statements)||!Number.isFinite(d.total)||d.statements.some(p=>typeof p.name!=='string'||!Number.isFinite(p.amount)))) throw Error('Invalid statements');
 saved.portfolio.forEach(p=>{if(!portfolio.some(a=>a.id===p.id))throw Error();validatePrice(p.price,p.customers,p.ledgers,p.ledgerPrice);});
 return saved;
 } catch {return createState();}
}

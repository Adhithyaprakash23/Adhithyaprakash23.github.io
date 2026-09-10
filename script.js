document.getElementById("year").textContent = new Date().getFullYear();

const cases = {
  aegis: {
    tag:"CASE 001 / CLOUD SECURITY",
    title:"AegisCloud Autonomous Security",
    intro:"A portfolio-grade security engineering concept for converting cloud telemetry and control state into prioritized, explainable response.",
    sections:[
      ["Problem","Cloud environments produce abundant signals, but security value comes from correlating identity, asset context, exposure and control evidence into an actionable decision."],
      ["Engineering approach","Ingest security context → normalize evidence → score risk → map control coverage → generate response recommendations → retain evidence for review."],
      ["What to inspect","Architecture, threat model, detection logic, automation decisions, guardrails and repository documentation."],
      ["Repository",'<a href="https://github.com/Adhithyaprakash23/aegiscloud-autonomous-security" target="_blank" rel="noopener">Open AegisCloud on GitHub ↗</a>']
    ]
  },
  soc: {
    tag:"CASE 002 / DETECTION ENGINEERING",
    title:"Enterprise SOC Detection Engineering Lab",
    intro:"A detection-focused repository built around the full analyst loop: attack behavior, telemetry, detection, mapping, investigation and response.",
    sections:[
      ["Problem","Alerts without context create noise. Useful detection engineering connects suspicious behavior to observable evidence and a repeatable investigation path."],
      ["Engineering approach","Model attacker behavior → define telemetry → build KQL/Sigma detections → map MITRE ATT&CK → document triage → define escalation and response."],
      ["Evidence","Detection content, attack mappings and workflows are organized as inspectable artifacts rather than résumé claims."],
      ["Repository",'<a href="https://github.com/Adhithyaprakash23/enterprise-soc-detection-lab" target="_blank" rel="noopener">Open SOC Detection Lab on GitHub ↗</a>']
    ]
  },
  vm: {
    tag:"CASE 003 / VULNERABILITY MANAGEMENT",
    title:"Risk-Based Vulnerability Program",
    intro:"A methodology for moving beyond raw vulnerability counts and prioritizing remediation based on business-relevant risk.",
    sections:[
      ["Decision model","Combine severity with exploitability, exposure, asset criticality and compensating controls."],
      ["Lifecycle","Discover → validate → prioritize → assign → remediate → retest → report trend and residual risk."],
      ["Portfolio evidence to add","Sanitized prioritization matrix, SLA model, remediation workflow and before/after metrics from a lab or demonstrable project."]
    ]
  },
  devsec: {
    tag:"CASE 004 / APPLICATION SECURITY",
    title:"Secure Delivery Pipeline",
    intro:"A DevSecOps reference workflow that makes security feedback part of software delivery instead of a final-stage gate.",
    sections:[
      ["Control points","Secrets scanning, SAST, dependency/SCA checks, DAST and policy gates at appropriate stages."],
      ["Developer experience","Findings should be deduplicated, severity-aware and accompanied by actionable remediation context."],
      ["Portfolio evidence to add","Pipeline diagram, sample safe findings, policy logic and a demonstration repository."]
    ]
  }
};

const modal = document.getElementById("caseModal");
const content = document.getElementById("modalContent");
document.querySelectorAll("[data-modal]").forEach(card => card.addEventListener("click", () => {
  const c = cases[card.dataset.modal];
  content.innerHTML = `<div class="kicker">${c.tag}</div><h2>${c.title}</h2><p>${c.intro}</p>` +
    c.sections.map(([h,b])=>`<h4>${h}</h4><p>${b}</p>`).join("");
  modal.showModal();
}));
document.querySelector(".close").onclick=()=>modal.close();
modal.addEventListener("click",e=>{ if(e.target===modal) modal.close(); });

const run = document.getElementById("runInvestigation");
const lines = document.getElementById("consoleLines");
const sequence = [
  ["cyan","$ ingest --alert impossible_travel --user privileged.account"],
  ["","[14:31:08] Signal: authentication from new geography + unfamiliar device"],
  ["ok","[14:31:12] Identity context enriched: privileged role detected"],
  ["","[14:31:15] Querying sign-in, endpoint and session telemetry..."],
  ["warn","[14:31:18] Correlation: anomalous session + token activity"],
  ["cyan","[14:31:22] MITRE ATT&CK mapping: T1078 Valid Accounts"],
  ["","[14:31:25] Control check: MFA present; session risk remains elevated"],
  ["warn","[14:31:27] VERDICT: escalate for containment and credential/session review"],
  ["ok","[14:31:31] Evidence package generated. Investigation complete."]
];
run.addEventListener("click", async ()=>{
  run.disabled=true; lines.innerHTML="";
  for(const [cls,text] of sequence){
    const p=document.createElement("p"); p.className=cls; p.textContent=text; lines.appendChild(p);
    await new Promise(r=>setTimeout(r,420));
  }
  run.disabled=false;
});

const canvas=document.getElementById("mesh"),ctx=canvas.getContext("2d");
let pts=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(60,Math.floor(innerWidth/22))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12}));}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;}for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){let a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<145){ctx.strokeStyle=`rgba(92,225,230,${(1-d/145)*.12})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}ctx.fillStyle="rgba(111,168,255,.25)";pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,1.2,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();

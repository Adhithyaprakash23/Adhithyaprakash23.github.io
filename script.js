const tools = [
  {name:"Microsoft Sentinel",cat:"soc",symbol:"SIEM",desc:"Cloud-native SIEM for analytics, incident correlation, KQL hunting and SOC workflows."},
  {name:"Splunk",cat:"soc",symbol:"SPL",desc:"Security log analysis, search, dashboards, alert triage and investigation."},
  {name:"Defender XDR",cat:"soc",symbol:"XDR",desc:"Endpoint and identity investigation through alerts, device timelines and hunting."},
  {name:"KQL",cat:"soc",symbol:"KQL",desc:"Detection and hunting queries for Microsoft security telemetry."},
  {name:"Sigma",cat:"soc",symbol:"Σ",desc:"Portable detection-rule logic mapped across SIEM environments."},
  {name:"MITRE ATT&CK",cat:"soc",symbol:"ATT&CK",desc:"Adversary behavior framework used for detection mapping and coverage analysis."},
  {name:"AWS",cat:"cloud",symbol:"AWS",desc:"Cloud security across IAM, logging, network controls, findings and workload protection."},
  {name:"Azure",cat:"cloud",symbol:"AZ",desc:"Microsoft cloud security, identity, monitoring and security operations integration."},
  {name:"GuardDuty",cat:"cloud",symbol:"GD",desc:"AWS managed threat detection for anomalous cloud and workload activity."},
  {name:"Security Hub",cat:"cloud",symbol:"SH",desc:"Centralized AWS security findings and posture aggregation."},
  {name:"Wiz",cat:"cloud",symbol:"WIZ",desc:"Cloud security posture and exposure-context concepts across workloads and identities."},
  {name:"Terraform",cat:"cloud devsecops",symbol:"TF",desc:"Infrastructure-as-code for repeatable cloud security guardrails."},
  {name:"Entra ID",cat:"identity",symbol:"ID",desc:"Identity security, authentication, MFA, RBAC and conditional-access concepts."},
  {name:"IAM / RBAC",cat:"identity",symbol:"IAM",desc:"Least-privilege access design, role governance and identity-risk reduction."},
  {name:"MFA",cat:"identity",symbol:"MFA",desc:"Authentication hardening and account-compromise risk reduction."},
  {name:"Qualys VMDR",cat:"vuln",symbol:"VM",desc:"Vulnerability discovery, prioritization, remediation tracking and validation."},
  {name:"CVSS",cat:"vuln",symbol:"CVSS",desc:"Technical severity scoring combined with asset and exposure context."},
  {name:"Python",cat:"devsecops ai",symbol:"PY",desc:"Security automation, enrichment, parsing, scoring, reporting and AI-oriented workflows."},
  {name:"PowerShell",cat:"devsecops",symbol:"PS",desc:"Windows endpoint automation, investigation and security administration."},
  {name:"GitHub Actions",cat:"devsecops",symbol:"CI",desc:"CI/CD automation and security checks as code."},
  {name:"CodeQL",cat:"devsecops",symbol:"QL",desc:"Static code-analysis workflows in secure development pipelines."},
  {name:"Trivy",cat:"devsecops",symbol:"TR",desc:"Container and dependency scanning for DevSecOps workflows."},
  {name:"Checkov",cat:"devsecops",symbol:"CK",desc:"Infrastructure-as-code security and misconfiguration scanning."},
  {name:"Gitleaks",cat:"devsecops",symbol:"GL",desc:"Secret detection integrated into source-control workflows."},
  {name:"NIST CSF",cat:"grc",symbol:"NIST",desc:"Cybersecurity program and control alignment across identify, protect, detect, respond and recover."},
  {name:"CIS Controls",cat:"grc",symbol:"CIS",desc:"Prioritized technical security controls and hardening guidance."},
  {name:"ISO 27001",cat:"grc",symbol:"ISO",desc:"Information-security management system and control-assurance concepts."},
  {name:"SOC 2",cat:"grc",symbol:"SOC2",desc:"Security control evidence, audit readiness and assurance mapping."},
  {name:"Drata",cat:"grc",symbol:"DR",desc:"Compliance evidence and control-monitoring workflow concepts."},
  {name:"ServiceNow GRC",cat:"grc",symbol:"GRC",desc:"Risk, issue and governance workflow concepts for security assurance."},
  {name:"LLM Security",cat:"ai",symbol:"LLM",desc:"Prompt-injection awareness, data boundaries, output validation and secure tool-use."},
  {name:"RAG Guardrails",cat:"ai",symbol:"RAG",desc:"Grounding, context controls and validation around AI-assisted security workflows."},
  {name:"Agentic Security",cat:"ai",symbol:"AGT",desc:"Controlled sense-reason-act workflows with explicit permissions and human approval."}
];

const projectData = {
  aegis:{
    kicker:"FLAGSHIP / CLOUD SECURITY",
    title:"AegisCloud — Autonomous Cloud Security & Incident Response",
    intro:"A portfolio implementation of an event-driven AWS defense platform that normalizes findings, scores contextual risk, chooses a response policy and produces safe containment plans with evidence integrity.",
    architecture:"AWS workloads → GuardDuty / Security Hub / CloudTrail → normalization → contextual risk engine → policy decision → response plan → evidence artifact.",
    bullets:[
      "Explainable risk model combining severity, business criticality, exposure and confidence.",
      "Resource-specific response planning for EC2, S3 and IAM scenarios.",
      "Terraform security baseline for GuardDuty, Security Hub, KMS, S3 and EventBridge.",
      "Evidence hashing with SHA-256 to bind decisions to the original synthetic finding.",
      "CI tests for Python decision logic and Terraform validation.",
      "Safe-by-default public design: live cloud mutation intentionally disabled."
    ],
    tools:["AWS","Python","Terraform","GuardDuty","Security Hub","EventBridge","KMS","GitHub Actions"],
    link:"https://github.com/Adhithyaprakash23/aegiscloud-autonomous-security"
  },
  soc:{
    kicker:"DETECTION ENGINEERING",
    title:"Enterprise SOC Detection Engineering Lab",
    intro:"A simulated enterprise SOC engineering portfolio focused on detections that can be explained, tuned and investigated — not just copied queries.",
    architecture:"Identity + endpoint + cloud telemetry → Sentinel analytics → ATT&CK mapping → alert triage → investigation → containment / remediation.",
    bullets:[
      "10 ATT&CK-aligned detection scenarios across authentication, endpoint, cloud identity and defense evasion.",
      "Microsoft Sentinel KQL analytics with documented investigation logic.",
      "Sigma equivalents where portable event logic is practical.",
      "Threat-hunting queries for unusual PowerShell parents, RDP sources and privileged changes.",
      "Incident-response playbooks for password spray, suspicious PowerShell and role changes.",
      "Synthetic telemetry plus a GitHub Actions validation workflow."
    ],
    tools:["Microsoft Sentinel","KQL","Sigma","MITRE ATT&CK","Defender","Windows Security Events","Python"],
    link:"https://github.com/Adhithyaprakash23/enterprise-soc-detection-lab"
  },
  ai:{
    kicker:"AI × CYBERSECURITY",
    title:"AI Security Triage Copilot — Architecture Concept",
    intro:"An explainable security-assistant architecture designed to accelerate analyst triage without giving an LLM uncontrolled authority over containment.",
    architecture:"SIEM alert → evidence retrieval → enrichment → grounded context → LLM summary → confidence + policy checks → analyst-approved action.",
    bullets:[
      "RAG-style retrieval to ground summaries in known security evidence.",
      "Structured output validation instead of trusting free-form model responses.",
      "Prompt-injection and untrusted-log-content awareness.",
      "Separation between recommendation and privileged action.",
      "Human approval for isolation, credential revocation and other high-impact changes.",
      "Designed for auditability: evidence, model output and analyst decision remain distinct."
    ],
    tools:["Python","LLM Security","RAG","Prompt Injection Defense","Security Operations","Guardrails"]
  },
  agentic:{
    kicker:"AGENTIC AUTOMATION",
    title:"Agentic Security Monitoring — Design Pattern",
    intro:"A controlled sense-reason-act monitoring pattern for security and operational telemetry where automation can recommend and escalate without silently changing high-impact systems.",
    architecture:"Telemetry → thresholds/anomaly context → policy reasoning → recommendation → approval gate → action / escalation → audit trail.",
    bullets:[
      "Continuous telemetry ingestion and health-state evaluation.",
      "Threshold and context-based prioritization before alert creation.",
      "Agentic workflow separated into sensing, reasoning and action permissions.",
      "Human review gates for high-impact changes.",
      "Audit-friendly decision path showing why an action was recommended.",
      "Applicable to SOC automation, cloud monitoring and industrial telemetry prototypes."
    ],
    tools:["Python","Agentic AI","Automation","Telemetry","Risk Scoring","Human-in-the-loop"]
  }
};

function renderTools(filter="all"){
  const grid=document.getElementById("toolGrid");
  grid.innerHTML="";
  tools.filter(t=>filter==="all"||t.cat.split(" ").includes(filter)).forEach(t=>{
    const el=document.createElement("button");
    el.className="tool";
    el.innerHTML=`<span class="tool-symbol">${t.symbol}</span><b>${t.name}</b><small>${t.cat.replaceAll(" "," · ")}</small>`;
    el.addEventListener("click",()=>showModal({
      kicker:"TECHNOLOGY / WORKFLOW",
      title:t.name,
      intro:t.desc,
      architecture:"Click-through skill detail: how this technology fits into detection, investigation, cloud security, automation or security assurance.",
      bullets:[
        "Used in the portfolio as part of a broader security workflow rather than as an isolated keyword.",
        "Connected to related security domains shown throughout this site.",
        "Depth varies by technology and project; portfolio projects show the most concrete implementations."
      ],
      tools:[t.name]
    }));
    grid.appendChild(el);
  });
}
renderTools();

document.querySelectorAll("#stackTabs button").forEach(b=>b.addEventListener("click",()=>{
  document.querySelectorAll("#stackTabs button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active"); renderTools(b.dataset.filter);
}));

function showModal(data){
  const m=document.getElementById("detailModal");
  const c=document.getElementById("modalContent");
  c.innerHTML=`<div class="modal-body">
    <span class="kicker">${data.kicker||"DETAIL"}</span>
    <h2>${data.title}</h2>
    <p>${data.intro}</p>
    <div class="modal-section"><h4>Architecture / approach</h4><p>${data.architecture||""}</p></div>
    <div class="modal-section"><h4>What this demonstrates</h4><ul class="modal-list">${(data.bullets||[]).map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="modal-section"><h4>Technology</h4><div class="modal-tools">${(data.tools||[]).map(x=>`<span>${x}</span>`).join("")}</div></div>
    ${data.link?`<div class="modal-section"><a class="btn primary" target="_blank" rel="noopener" href="${data.link}">Open GitHub Repository ↗</a></div>`:""}
  </div>`;
  m.showModal();
}
document.querySelectorAll(".project-open").forEach(b=>b.addEventListener("click",e=>{e.stopPropagation();showModal(projectData[b.dataset.project])}));
document.querySelectorAll(".responsibility-card").forEach(b=>b.addEventListener("click",()=>showModal({
  kicker:"ROLE / RESPONSIBILITY",title:b.dataset.title,intro:b.dataset.text,
  architecture:"Security responsibility translated into telemetry, investigation, engineering controls and documented outcomes.",
  bullets:["Understand the environment and risk context.","Use the relevant telemetry/tools to investigate or implement controls.","Document decisions, tuning considerations and remediation.","Coordinate with engineering, IT or business stakeholders when the issue crosses team boundaries."],
  tools:b.dataset.tools.split(", ")
})));
document.getElementById("modalClose").onclick=()=>document.getElementById("detailModal").close();
document.getElementById("detailModal").addEventListener("click",e=>{if(e.target.id==="detailModal")e.target.close()});

document.querySelectorAll(".principle").forEach(p=>p.addEventListener("click",()=>{
  document.querySelectorAll(".principle").forEach(x=>x.classList.remove("active"));p.classList.add("active");
  document.getElementById("principleDetail").textContent=p.dataset.detail;
}));

const revealObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.13});
document.querySelectorAll(".reveal").forEach(x=>revealObs.observe(x));

const countObs=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(!e.isIntersecting)return;
  document.querySelectorAll(".counter").forEach(el=>{
    const end=+el.dataset.target;let n=0;const step=Math.max(1,Math.ceil(end/25));
    const id=setInterval(()=>{n=Math.min(end,n+step);el.textContent=n;if(n>=end)clearInterval(id)},45)
  });countObs.disconnect();
}),{threshold:.3});
countObs.observe(document.querySelector(".quick-stats"));

const lines=[
  "sentinel.hunt('suspicious_identity_activity')",
  "aegiscloud.score(finding)  // 92/100 → CONTAIN",
  "python automate_triage.py --safe-mode",
  "ai_guardrail.verify(action)  // HUMAN_APPROVAL_REQUIRED",
  "terraform plan  // security controls as code"
];
let li=0,ci=0,del=false;
function typeTerminal(){
  const el=document.getElementById("terminalText"),s=lines[li];
  if(!del){ci++;el.textContent=s.slice(0,ci);if(ci===s.length){del=true;setTimeout(typeTerminal,1300);return}}
  else{ci--;el.textContent=s.slice(0,ci);if(ci===0){del=false;li=(li+1)%lines.length}}
  setTimeout(typeTerminal,del?18:35)
}
typeTerminal();

document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1000px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*5).toFixed(2)}deg) translateY(-2px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});

const navToggle=document.getElementById("navToggle"),navLinks=document.getElementById("navLinks");
navToggle.onclick=()=>navLinks.classList.toggle("open");
navLinks.querySelectorAll("a").forEach(a=>a.onclick=()=>navLinks.classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();

const canvas=document.getElementById("networkCanvas"),ctx=canvas.getContext("2d");
let pts=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(75,Math.floor(innerWidth/20))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18}))}
function animate(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;
    ctx.fillStyle="rgba(88,210,255,.3)";ctx.beginPath();ctx.arc(p.x,p.y,1.1,0,Math.PI*2);ctx.fill();
    for(let j=i+1;j<pts.length;j++){const q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);if(d<120){ctx.strokeStyle=`rgba(80,151,204,${(1-d/120)*.08})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
  });requestAnimationFrame(animate)
}
addEventListener("resize",resize);resize();animate();

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}
}));

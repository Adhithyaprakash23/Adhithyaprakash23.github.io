
const toolData = [
  {name:"Splunk",cat:"SIEM",tag:"SIEM",icon:"splunk",desc:"Search, correlation and investigation of security telemetry across enterprise log sources.",work:["Built focused searches for authentication, endpoint and network events.","Used field extraction and correlation to reduce investigation time.","Supported alert triage with evidence-driven pivots across related events."]},
  {name:"Microsoft Sentinel",cat:"SIEM",tag:"SIEM · CLOUD",icon:"sentinel",desc:"Cloud-native SIEM workflows for analytics, hunting and incident investigation.",work:["Created and tuned KQL analytics for suspicious identity and endpoint behavior.","Used incidents, entities and workbooks to structure triage.","Mapped detections to MITRE ATT&CK for clearer coverage."]},
  {name:"CrowdStrike",cat:"Endpoint",tag:"ENDPOINT",icon:"crowdstrike",desc:"Endpoint visibility, investigation and containment-oriented response workflows.",work:["Reviewed endpoint detections and process trees.","Correlated host activity with identity and network evidence.","Supported containment decisions using validated endpoint context."]},
  {name:"ELK Stack",cat:"SIEM",tag:"SIEM",icon:"elk",desc:"Search, dashboards and event exploration across Elasticsearch-oriented telemetry.",work:["Used indexed log data to investigate anomalies.","Built focused views for security-relevant activity.","Structured searches around incident hypotheses."]},
  {name:"Qualys VMDR",cat:"Vulnerability",tag:"VULN",icon:"qualys",desc:"Asset-aware vulnerability management, prioritization and remediation tracking.",work:["Reviewed vulnerability findings in business context.","Prioritized remediation using severity, exposure and asset criticality.","Tracked remediation and validation through closure."]},
  {name:"KQL",cat:"SIEM",tag:"SIEM · CLOUD",icon:"kql",desc:"Detection, hunting and investigation queries for Microsoft security telemetry.",work:["Wrote joins, summaries and time-windowed correlation queries.","Converted investigation logic into repeatable detections.","Used entity pivots to connect identity, device and cloud evidence."]},
  {name:"AWS",cat:"Cloud",tag:"CLOUD",icon:"aws",desc:"Cloud-security engineering across visibility, identity, configuration and detection controls.",work:["Worked with GuardDuty and Security Hub findings.","Applied least-privilege IAM and cloud logging principles.","Used Terraform-oriented controls in public security projects."]},
  {name:"Azure",cat:"Cloud",tag:"CLOUD",icon:"azure",desc:"Cloud and identity security with Microsoft security services and access controls.",work:["Worked with cloud identity and access patterns.","Used Microsoft security telemetry for investigation.","Applied conditional-access and least-privilege concepts."]},
  {name:"PowerShell",cat:"Automation",tag:"AUTOMATION · PACKAGING",icon:"powershell",desc:"Automation for Windows administration, endpoint workflows and repeatable operations.",work:["Automated repetitive endpoint and packaging tasks.","Used scripted validation and remediation steps.","Produced readable operational output for troubleshooting."]},
  {name:"MSI / MSIX",cat:"Endpoint Engineering",tag:"PACKAGING",icon:"msi",desc:"Enterprise application packaging and deployment-oriented engineering.",work:["Worked with installation behavior, parameters and detection logic.","Validated application deployment and uninstall behavior.","Focused on repeatable, supportable endpoint delivery."]},
  {name:"SCCM / MECM",cat:"Endpoint Engineering",tag:"PACKAGING · ENDPOINT",icon:"mecm",desc:"Enterprise endpoint application deployment, detection and lifecycle management.",work:["Worked with application/package deployment concepts.","Validated detection logic and deployment outcomes.","Used logs and client-side troubleshooting to isolate failures."]},
  {name:"Microsoft Intune",cat:"Endpoint Engineering",tag:"PACKAGING · ENDPOINT · CLOUD",icon:"intune",desc:"Modern endpoint management and cloud-managed application deployment.",work:["Worked with managed application deployment concepts.","Applied detection and remediation logic.","Used endpoint configuration and compliance context in troubleshooting."]},
  {name:"Python",cat:"Automation",tag:"AUTOMATION · AI",icon:"python",desc:"Security automation, parsing, normalization and project engineering.",work:["Used Python for normalized security data workflows.","Automated repetitive processing and evidence handling.","Built security-focused public project components."]},
  {name:"Terraform",cat:"Cloud",tag:"CLOUD · AUTOMATION",icon:"terraform",desc:"Infrastructure-as-code for repeatable security controls and cloud configuration.",work:["Defined reproducible cloud controls.","Used code review and versioning for infrastructure changes.","Applied Terraform in the AegisCloud public project."]},
  {name:"MITRE ATT&CK",cat:"Endpoint",tag:"SIEM · ENDPOINT",icon:"attack",desc:"Threat-behavior mapping for detections, hunts and coverage communication.",work:["Mapped detections to relevant techniques.","Used ATT&CK to explain why a signal matters.","Structured detection coverage around adversary behavior."]},
  {name:"AI Security",cat:"AI Security",tag:"AI",icon:"ai",desc:"AI-assisted analyst workflows with validation, policy boundaries and human approval.",work:["Use AI for summarization and repetitive analyst support.","Keep high-impact response actions human-reviewed.","Treat model output as evidence to validate, not authority to trust blindly."]}
];

const roleData = {
  holiday:{kicker:"CURRENT ROLE",title:"Security Engineer — Holiday Channel",text:"Hands-on security engineering across operational visibility, detection, cloud and response workflows.",bullets:["Security monitoring and investigation across identity, endpoint and cloud signals.","Detection tuning, incident triage and evidence-driven escalation.","Automation and repeatable operational workflows to reduce analyst friction."],stack:["Security Operations","Detection","Cloud","Automation"]},
  keerambadi:{kicker:"CYBERSECURITY ENGINEERING",title:"Cybersecurity Engineer — Keerambadi Cyberspace",text:"Engineering-focused security work across endpoint, vulnerability and identity controls.",bullets:["Vulnerability review, prioritization and remediation tracking.","Endpoint and identity-focused investigation workflows.","Security-control implementation with operational documentation."],stack:["Endpoint","Vulnerability Management","Identity","Cloud"]},
  cognizant:{kicker:"ENTERPRISE DELIVERY",title:"Programmer Analyst — Cognizant Technology Solutions",text:"Enterprise technology work combining automation, operational troubleshooting and security-aware delivery.",bullets:["Supported repeatable enterprise technology workflows.","Used scripting and structured troubleshooting for operational issues.","Worked within documented processes, change controls and support expectations."],stack:["Automation","Enterprise IT","Security","Operations"]},
  spark:{kicker:"CLOUD SECURITY",title:"Cloud Security Engineer — Spark Invotech",text:"Cloud-focused security responsibilities centered on identity, visibility and configuration.",bullets:["Worked with cloud security configuration and access-control concepts.","Applied logging and monitoring for cloud visibility.","Supported secure operational practices across cloud environments."],stack:["AWS","Azure","IAM","Cloud Security"]}
};

const projectData = {
  aegis:{kicker:"PROJECT CASE STUDY",title:"AegisCloud",text:"An event-driven cloud security project designed to turn findings into normalized, contextual and reviewable response plans.",bullets:["Ingest and normalize cloud security findings.","Add contextual risk signals before prioritization.","Create safe response plans rather than blind auto-remediation.","Preserve evidence integrity and infrastructure-as-code controls."],stack:["AWS","Python","Terraform","GuardDuty","Security Hub"]},
  soc:{kicker:"PROJECT CASE STUDY",title:"Enterprise SOC Detection Lab",text:"A detection-engineering lab focused on reproducible detections, ATT&CK mapping and analyst-ready incident workflows.",bullets:["Develop Sentinel KQL and Sigma detections.","Map detection logic to MITRE ATT&CK.","Use synthetic telemetry so the project stays safe and reproducible.","Document threat-hunting and incident-response workflows."],stack:["Microsoft Sentinel","KQL","Sigma","MITRE ATT&CK"]}
};

function iconSVG(type){
  const common='fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const wrap = p => `<svg viewBox="0 0 48 48" aria-hidden="true">${p}</svg>`;
  const text = (t,size=12) => wrap(`<text x="24" y="28" text-anchor="middle" fill="currentColor" font-family="ui-monospace,monospace" font-weight="800" font-size="${size}">${t}</text>`);
  const icons = {
    splunk: wrap(`<path ${common} d="M8 15h8l8 9-8 9H8l8-9zM24 15h8l8 9-8 9h-8l8-9z"/>`),
    sentinel: wrap(`<path ${common} d="M8 33 18 11l8 8 6-5 8 19-15 7z"/><path ${common} d="m18 11 7 29M26 19l-1 21M32 14l-7 26"/>`),
    crowdstrike:wrap(`<path ${common} d="M7 20c8-8 18-10 34-6-8 2-13 5-17 10 8-4 13-4 17-2-8 2-13 6-18 13-3-6-8-10-16-15z"/>`),
    elk:wrap(`<rect ${common} x="8" y="8" width="13" height="10" rx="2"/><rect ${common} x="27" y="8" width="13" height="14" rx="2"/><rect ${common} x="8" y="24" width="13" height="16" rx="2"/><rect ${common} x="27" y="28" width="13" height="12" rx="2"/>`),
    qualys:wrap(`<circle ${common} cx="24" cy="23" r="13"/><path ${common} d="m29 29 10 10M17 18c3-4 9-5 14-1"/>`),
    kql:wrap(`<path ${common} d="M9 10v28M9 25l13-15M9 25l13 13M27 10h12v28H27z"/><path ${common} d="M30 16h6M30 23h6M30 30h6"/>`),
    aws:wrap(`<text x="24" y="23" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif" font-weight="800" font-size="13">aws</text><path ${common} d="M12 30c8 6 18 6 25 0M33 29l5 1-3 4"/>`),
    azure:wrap(`<path ${common} d="M18 8 6 36h12l6-10 7 10h11L27 8z"/><path ${common} d="m18 36 8-15 5 15"/>`),
    powershell:wrap(`<rect ${common} x="6" y="9" width="36" height="30" rx="6"/><path ${common} d="m14 17 8 7-8 7M25 32h10"/>`),
    msi:wrap(`<path ${common} d="m10 16 14-8 14 8v17l-14 7-14-7z"/><path ${common} d="m10 16 14 8 14-8M24 24v16"/>`),
    mecm:wrap(`<circle ${common} cx="24" cy="11" r="5"/><circle ${common} cx="11" cy="33" r="5"/><circle ${common} cx="37" cy="33" r="5"/><path ${common} d="M21 15 14 29M27 15l7 14M16 33h16"/>`),
    intune:wrap(`<path ${common} d="M12 14c4-7 18-7 22 0 3 5-1 9-6 10-6 2-10 4-10 9 0 4 4 7 9 7 6 0 10-4 10-9"/><circle ${common} cx="13" cy="13" r="4"/>`),
    python:wrap(`<path ${common} d="M24 7c-8 0-9 4-9 9v5h15v4H12c-5 0-7 4-7 9s3 8 8 8h5v-7c0-5 3-8 8-8h8c5 0 8-3 8-8v-5c0-4-3-7-8-7z"/><circle cx="31" cy="13" r="1.6" fill="currentColor"/><circle cx="17" cy="35" r="1.6" fill="currentColor"/>`),
    terraform:wrap(`<path ${common} d="m8 10 10 6v12L8 22zM20 17l10 6v12l-10-6zM32 11l8 5v11l-8-5z"/>`),
    attack:wrap(`<path ${common} d="M24 7v34M7 24h34M12 12l24 24M36 12 12 36"/><circle ${common} cx="24" cy="24" r="7"/>`),
    ai:wrap(`<circle ${common} cx="24" cy="24" r="6"/><circle ${common} cx="24" cy="8" r="4"/><circle ${common} cx="39" cy="17" r="4"/><circle ${common} cx="36" cy="35" r="4"/><circle ${common} cx="12" cy="35" r="4"/><circle ${common} cx="9" cy="17" r="4"/><path ${common} d="M24 12v6M35 19l-6 3M32 32l-5-4M16 32l5-4M13 19l6 3"/>`)
  };
  return icons[type] || text("SEC",9);
}

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
document.getElementById("modalClose").onclick=()=>modal.close();
modal.addEventListener("click",e=>{ if(e.target===modal) modal.close(); });

function openModal(data){
  modalContent.innerHTML = `
    <div class="modal-kicker">${data.kicker || "TECHNICAL DETAIL"}</div>
    <h2>${data.title || data.name}</h2>
    <p>${data.text || data.desc}</p>
    <ul>${(data.bullets || data.work || []).map(x=>`<li>${x}</li>`).join("")}</ul>
    <div class="stack">${(data.stack || [data.tag]).map(x=>`<span>${x}</span>`).join("")}</div>`;
  modal.showModal();
}

document.querySelectorAll(".role-open").forEach(b=>b.addEventListener("click",()=>openModal(roleData[b.dataset.role])));
document.querySelectorAll(".project-open").forEach(b=>b.addEventListener("click",()=>openModal(projectData[b.dataset.project])));

const cats = ["All",...new Set(toolData.map(x=>x.cat))];
const filters = document.getElementById("filters"), grid = document.getElementById("toolGrid");
function renderFilters(active="All"){
  filters.innerHTML = cats.map(c=>`<button class="${c===active?"active":""}" data-cat="${c}">${c}</button>`).join("");
  filters.querySelectorAll("button").forEach(b=>b.onclick=()=>{renderFilters(b.dataset.cat);renderTools(b.dataset.cat)});
}
function renderTools(cat="All"){
  const rows = toolData.filter(x=>cat==="All"||x.cat===cat);
  grid.innerHTML=rows.map((t,i)=>`
    <article class="tool-card reveal visible" tabindex="0" role="button" aria-label="Open ${t.name} experience" data-index="${toolData.indexOf(t)}">
      <div><div class="tool-icon" style="color:${["#70e9d5","#6ea8ff","#ff668f","#ffd277","#b38cff"][i%5]}">${iconSVG(t.icon)}</div><h3>${t.name}</h3><div class="tool-meta">${t.tag}</div></div>
      <div class="tool-foot"><span></span><span>OPEN EXPERIENCE ↗</span></div>
    </article>`).join("");
  grid.querySelectorAll(".tool-card").forEach(el=>{
    const open=()=>openModal(toolData[+el.dataset.index]);
    el.onclick=open;el.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}};
  });
}
renderFilters();renderTools();

const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.13});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));

const progress=document.getElementById("progress");
addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${h?scrollY/h*100:0}%`});

const menuBtn=document.getElementById("menuBtn"), navLinks=document.getElementById("navLinks");
menuBtn.onclick=()=>{const o=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",o)};
navLinks.querySelectorAll("a").forEach(a=>a.onclick=()=>navLinks.classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();

const terminalLines=[
"› telemetry stream connected",
"› identity anomaly correlated with endpoint context",
"› KQL hunt completed — no active compromise",
"› GuardDuty finding normalized → risk context attached",
"› analyst approval required for containment",
"› detection coverage mapped to ATT&CK"
];
let ti=0;setInterval(()=>{document.getElementById("terminalText").textContent=terminalLines[ti++%terminalLines.length];document.getElementById("alertCount").textContent=10+Math.floor(Math.random()*7)},2600);

const canvas=document.getElementById("bg-canvas"),ctx=canvas.getContext("2d");let pts=[];
function size(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;canvas.style.width=innerWidth+"px";canvas.style.height=innerHeight+"px";ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(55,Math.floor(innerWidth/24))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12}))}
function animate(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,1,0,Math.PI*2);ctx.fillStyle="rgba(112,165,220,.22)";ctx.fill()}requestAnimationFrame(animate)}
size();animate();addEventListener("resize",size);

const command=document.getElementById("command"), commandInput=document.getElementById("commandInput"), commandResults=document.getElementById("commandResults");
const commands=[
  ["Experience","#experience","SECTION"],["Tools","#tools","SECTION"],["Projects","#projects","SECTION"],["AI Security","#ai","SECTION"],["Contact","#contact","SECTION"],
  ...toolData.map((t,i)=>[t.name,`tool:${i}`,"TOOL"])
];
function renderCommand(q=""){const f=commands.filter(x=>x[0].toLowerCase().includes(q.toLowerCase())).slice(0,10);commandResults.innerHTML=f.map((x,i)=>`<div class="cmd-item" data-target="${x[1]}"><span>${x[0]}</span><span>${x[2]}</span></div>`).join("");commandResults.querySelectorAll(".cmd-item").forEach(el=>el.onclick=()=>{const t=el.dataset.target;command.close();if(t.startsWith("tool:"))openModal(toolData[+t.split(":")[1]]);else document.querySelector(t)?.scrollIntoView({behavior:"smooth"})})}
function openCommand(){renderCommand();command.showModal();setTimeout(()=>commandInput.focus(),30)}
document.getElementById("commandHint").onclick=openCommand;
commandInput.oninput=e=>renderCommand(e.target.value);
addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();command.open?command.close():openCommand()}if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)){e.preventDefault();openCommand()}});

// Pointer-responsive ambient motion. Decorative only; disabled for reduced motion users.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const scene = document.querySelector(".motion-scene");
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / innerWidth - .5);
    const y = (e.clientY / innerHeight - .5);
    scene.style.transform = `translate3d(${x * 10}px,${y * 10}px,0)`;
    document.querySelectorAll(".cyber-orb").forEach((orb, i) => {
      const m = (i + 1) * 5;
      orb.style.marginLeft = `${x * m}px`;
      orb.style.marginTop = `${y * m}px`;
    });
  }, {passive:true});
}

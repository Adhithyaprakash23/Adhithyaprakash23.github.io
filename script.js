const roleData = {
 holiday:{
  date:"SEP 2025 — PRESENT",title:"Security Engineer",company:"Holiday Channel",
  lead:"My work combines security operations with enterprise endpoint engineering. On the security side, I use Splunk for monitoring, alert review and investigation, support incident response from triage through remediation, and work with security assessments and control improvements. I also support Windows application packaging and deployment across enterprise desktop environments.",
  responsibilities:[
   "Monitor security events and investigate alerts in Splunk, reviewing user, endpoint, application and infrastructure context before escalation.",
   "Perform alert triage and incident investigation, documenting findings, response actions and remediation steps for traceability.",
   "Tune logging and alerting logic, map detections to MITRE ATT&CK concepts and maintain response/playbook documentation.",
   "Support internal and external security assessments, vulnerability testing and implementation of security improvements.",
   "Package, test, deploy and troubleshoot Windows applications for enterprise desktop environments.",
   "Support application updates and production releases using MSI, MSIX, App-V, SCCM/MECM, Intune, InstallShield and PowerShell."
  ],
  workflows:["Telemetry / request","Triage or package analysis","Technical investigation / build","Validation & testing","Deployment / containment","Documentation & follow-up"],
  tools:["Splunk","MITRE ATT&CK","PowerShell","MSI / MSIX","App-V","SCCM / MECM","Microsoft Intune","InstallShield","Windows 10/11"]
 },
 keerambadi:{
  date:"MAY 2024 — SEP 2025",title:"Cybersecurity Engineer",company:"Keerambadi Cyberspace",
  lead:"I worked across endpoint detection and response, threat investigations, vulnerability response and security reviews. CrowdStrike was a central endpoint tool for investigating suspicious activity, malware behavior and potential lateral movement.",
  responsibilities:[
   "Use CrowdStrike EDR telemetry to investigate endpoint alerts, suspicious processes, malware activity and unauthorized access.",
   "Review process trees, endpoint events and related activity to understand scope and determine whether escalation or containment is required.",
   "Perform threat hunting and security reviews across enterprise environments, including excessive access and cloud-threat conditions.",
   "Support vulnerability response by prioritizing findings, coordinating remediation and validating that high-risk exposure is reduced.",
   "Map investigations and response workflows to MITRE ATT&CK concepts for consistent analysis and reporting.",
   "Prepare security reports and support vendor/security-control assessments and audit-readiness activities."
  ],
  workflows:["EDR alert","Endpoint context","Process / user analysis","Scope & risk review","Response / remediation","Security report"],
  tools:["CrowdStrike","EDR","MITRE ATT&CK","Threat Hunting","Vulnerability Management","Cloud Security Reviews"]
 },
 cognizant:{
  date:"DEC 2023 — MAY 2024",title:"Programmer Analyst",company:"Cognizant Technology Solutions",
  lead:"My work focused on centralized log analysis, application/server monitoring, security investigations and secure engineering support. I used the ELK Stack to improve visibility into system and application events and supported query-driven investigations and technical documentation.",
  responsibilities:[
   "Use ELK Stack for centralized log review and security monitoring across applications and servers.",
   "Investigate anomalous events by correlating timestamps, source context, application behavior and system activity.",
   "Monitor network and system-access activity and support threat-intelligence analysis for suspicious behavior.",
   "Write and review scripts, authentication logic and secure-code changes that support detection and security engineering.",
   "Document incident findings, troubleshooting notes, remediation actions and technical risks for engineering and business stakeholders.",
   "Create query-driven investigation steps that make recurring analysis more consistent and repeatable."
  ],
  workflows:["Log ingestion","Search / query","Anomaly correlation","Technical validation","Remediation recommendation","Incident / risk documentation"],
  tools:["ELK Stack","Elasticsearch","Kibana","Log Analysis","Python","Secure Code Review","Authentication Review"]
 },
 spark:{
  date:"JUL 2022 — DEC 2023",title:"Cloud Security Engineer",company:"Spark Invotech",
  lead:"I worked on cloud SIEM, identity monitoring, security-event correlation and cloud-security reviews across Azure, Microsoft 365 and AWS. Microsoft Sentinel and KQL were central to investigation and cloud monitoring workflows.",
  responsibilities:[
   "Use Microsoft Sentinel for cloud SIEM, security-event correlation and investigation across Azure, Microsoft 365 and AWS-connected environments.",
   "Write and refine KQL queries to investigate suspicious sign-ins, identity activity and cloud security events.",
   "Review cloud-security configurations and detection rules, focusing on identity, access and misconfiguration risk.",
   "Support DLP workflows and SaaS security reviews to strengthen data-protection controls.",
   "Contribute to SOAR process improvements and response automation for repeatable cloud-security tasks.",
   "Use AI-assisted documentation for cloud incident-response reporting while keeping technical review and final decisions analyst-owned."
  ],
  workflows:["Cloud telemetry","Sentinel correlation","KQL investigation","Identity / configuration review","Response workflow","Cloud incident report"],
  tools:["Microsoft Sentinel","KQL","Azure","AWS","Microsoft 365","DLP","SOAR","AI-assisted Documentation"]
 }
};

const logos = {
 "Splunk":"https://cdn.simpleicons.org/splunk/ffffff",
 "CrowdStrike":"", "ELK Stack":"https://cdn.simpleicons.org/elastic/00BFB3",
 "Elasticsearch":"https://cdn.simpleicons.org/elasticsearch/005571",
 "Kibana":"https://cdn.simpleicons.org/kibana/005571",
 "Microsoft Sentinel":"https://cdn.simpleicons.org/microsoftazure/0078D4",
 "Azure":"https://cdn.simpleicons.org/microsoftazure/0078D4",
 "AWS":"https://cdn.simpleicons.org/amazonwebservices/FF9900",
 "Microsoft 365":"https://cdn.simpleicons.org/microsoft/5E5E5E",
 "Python":"https://cdn.simpleicons.org/python/3776AB",
 "PowerShell":"https://cdn.simpleicons.org/powershell/5391FE",
 "Terraform":"https://cdn.simpleicons.org/terraform/844FBA",
 "GitHub Actions":"https://cdn.simpleicons.org/githubactions/2088FF",
 "Qualys VMDR":"", "Microsoft Intune":"https://cdn.simpleicons.org/microsoft/5E5E5E",
 "MITRE ATT&CK":"", "KQL":"", "SCCM / MECM":"", "MSI / MSIX":"", "App-V":"", "InstallShield":"",
 "Security Hub":"https://cdn.simpleicons.org/amazonwebservices/FF9900","GuardDuty":"https://cdn.simpleicons.org/amazonwebservices/FF9900",
 "Entra ID":"https://cdn.simpleicons.org/microsoftentra/0078D4","NIST CSF":"","ISO 27001":"","SOC 2":"","DLP":"","SOAR":"","AI Security":""
};

const tools = [
 {name:"Splunk",cat:"siem",abbr:"SPL",roles:["Holiday Channel"],color:"#ff725c",
  work:["Monitored enterprise security events and reviewed alerts for suspicious user, endpoint, application and infrastructure activity.","Performed alert triage and investigation by correlating log context and documenting findings for incident response.","Supported detection tuning, ATT&CK mapping and response-playbook documentation."],
  workflow:["Security event","Search / SPL analysis","Context correlation","Triage decision","Incident response","Documentation"],related:["MITRE ATT&CK","Incident Response","Security Monitoring"]},
 {name:"Microsoft Sentinel",cat:"siem cloud",abbr:"SIEM",roles:["Spark Invotech","Enterprise SOC project"],color:"#38c8ff",
  work:["Used Sentinel as a cloud SIEM for identity monitoring, security-event correlation and cloud investigations.","Investigated Azure, Microsoft 365 and AWS-connected security activity using Sentinel data and KQL.","In my public SOC project, I also built ATT&CK-aligned KQL detections and hunting queries with synthetic telemetry."],
  workflow:["Cloud telemetry","Sentinel analytics","KQL investigation","Entity correlation","Response workflow","Incident report"],related:["KQL","Azure","Microsoft 365","AWS"]},
 {name:"CrowdStrike",cat:"endpoint",abbr:"CS",roles:["Keerambadi Cyberspace"],color:"#ff375f",
  work:["Used EDR telemetry for endpoint alert investigation, malware analysis and suspicious-process review.","Investigated process trees and endpoint activity to understand possible unauthorized access and lateral movement.","Supported threat response and endpoint visibility during security investigations."],
  workflow:["EDR alert","Process tree","User / host context","Scope review","Response","Closure notes"],related:["EDR","Threat Hunting","MITRE ATT&CK"]},
 {name:"ELK Stack",cat:"siem",abbr:"ELK",roles:["Cognizant Technology Solutions"],color:"#00bfb3",
  work:["Used centralized logging to monitor application and server events and investigate anomalies.","Searched and correlated events across Elasticsearch/Kibana to support technical investigations.","Documented suspicious events, troubleshooting steps and remediation findings for engineering stakeholders."],
  workflow:["Log ingestion","Index / search","Correlation","Investigation","Remediation recommendation","Documentation"],related:["Elasticsearch","Kibana","Log Analysis"]},
 {name:"Qualys VMDR",cat:"vuln",abbr:"VMDR",roles:["Enterprise vulnerability-management project"],color:"#e11b22",
  work:["Used vulnerability data for risk analysis, prioritization and remediation tracking.","Reviewed technical severity together with asset and business context to determine remediation priority.","Tracked findings through remediation and validation and used reporting to communicate exposure."],
  workflow:["Asset / scan","Finding review","Risk prioritization","Owner assignment","Remediation","Validation / report"],related:["CVSS","Risk Analysis","Remediation Tracking"]},
 {name:"KQL",cat:"siem cloud",abbr:"KQL",roles:["Spark Invotech","Enterprise SOC project"],color:"#4ec5ff",
  work:["Wrote queries for cloud and identity investigations in Microsoft Sentinel.","Used filtering, summarization and entity context to investigate suspicious sign-in and security events.","Built public portfolio detections and threat-hunting queries around identity, PowerShell, RDP and cloud activity."],
  workflow:["Hypothesis","Table / field selection","Query","Entity pivot","False-positive review","Investigation"],related:["Microsoft Sentinel","MITRE ATT&CK","Threat Hunting"]},
 {name:"AWS",cat:"cloud",abbr:"AWS",roles:["Spark Invotech","AegisCloud project"],color:"#ff9900",
  work:["Supported cloud-security monitoring and configuration review in cloud-first environments.","Reviewed identity/access and cloud-security context as part of threat-detection and incident workflows.","Built AegisCloud as a public AWS security project using GuardDuty, Security Hub, KMS, S3, EventBridge and Terraform."],
  workflow:["Cloud asset","Telemetry / finding","Context review","Risk decision","Response plan","Evidence"],related:["GuardDuty","Security Hub","Terraform","IAM"]},
 {name:"Azure",cat:"cloud",abbr:"AZ",roles:["Spark Invotech"],color:"#1685ff",
  work:["Worked with Azure-connected telemetry and identity activity through Microsoft Sentinel.","Supported cloud configuration reviews, identity monitoring and security-event correlation.","Investigated suspicious cloud activity using KQL and Microsoft security data."],
  workflow:["Azure event","Sentinel","KQL","Identity / resource context","Response","Report"],related:["Microsoft Sentinel","KQL","Entra ID"]},
 {name:"Microsoft 365",cat:"cloud",abbr:"M365",roles:["Spark Invotech"],color:"#f25022",
  work:["Supported security monitoring and cloud incident investigations involving Microsoft 365-connected telemetry.","Worked with DLP and SaaS security-review workflows to strengthen data protection.","Correlated cloud and identity activity through Sentinel during investigations."],
  workflow:["M365 telemetry","Correlation","Identity review","DLP / SaaS review","Response","Report"],related:["DLP","Microsoft Sentinel","Entra ID"]},
 {name:"PowerShell",cat:"automation packaging",abbr:"PS",roles:["Holiday Channel","Endpoint packaging work"],color:"#5391fe",
  work:["Used PowerShell to automate repeatable checks and orchestration in Windows application packaging/deployment workflows.","Supported prerequisite checks, unattended execution, detection validation, file/registry/service checks and logging.","Used PowerShell within Windows administration and troubleshooting workflows."],
  workflow:["Input / package","Prerequisite check","Execution","Detection validation","Logging","Result handling"],related:["MSI / MSIX","SCCM / MECM","Microsoft Intune"]},
 {name:"MSI / MSIX",cat:"packaging",abbr:"MSI",roles:["Holiday Channel"],color:"#a77bff",
  work:["Prepared and tested application packages for enterprise Windows desktop environments.","Supported silent-install behavior, prerequisites, detection logic, upgrade/update handling and production readiness.","Validated package behavior across test stages before deployment."],
  workflow:["Installer intake","Package build","Silent install","Detection logic","Testing","Release"],related:["PowerShell","InstallShield","SCCM / MECM"]},
 {name:"App-V",cat:"packaging",abbr:"APPV",roles:["Holiday Channel"],color:"#a77bff",
  work:["Supported virtualized application packaging and deployment workflows for Windows environments.","Validated application behavior, dependencies and deployment readiness.","Troubleshot installation/deployment issues and documented fixes."],
  workflow:["Application intake","Sequence / package","Dependency review","Test","Deploy","Troubleshoot"],related:["SCCM / MECM","PowerShell","Windows 10/11"]},
 {name:"SCCM / MECM",cat:"packaging endpoint",abbr:"MECM",roles:["Holiday Channel"],color:"#5b8cff",
  work:["Supported enterprise application deployment through application/package workflows.","Worked with deployment types, collections, detection rules and controlled production releases.","Troubleshot deployment failures by reviewing package state, detection and endpoint conditions."],
  workflow:["Package","Deployment type","Collection","Detection","Client deployment","Troubleshooting"],related:["MSI / MSIX","App-V","PowerShell"]},
 {name:"Microsoft Intune",cat:"packaging endpoint cloud",abbr:"INT",roles:["Holiday Channel"],color:"#37a9ff",
  work:["Supported endpoint application deployment and update workflows through Microsoft Intune.","Worked with detection, install context and production deployment considerations for Windows applications.","Used Intune as part of modern endpoint-management workflows alongside traditional packaging tools."],
  workflow:["Win32 app","Install command","Detection","Assignment","Deployment","Monitoring"],related:["PowerShell","Windows 10/11","MSI / MSIX"]},
 {name:"InstallShield",cat:"packaging",abbr:"IS",roles:["Holiday Channel"],color:"#f2a93b",
  work:["Used packaging tooling for Windows installer preparation and deployment readiness.","Supported installer configuration, package changes and troubleshooting during application packaging work.","Validated package behavior and documentation before release."],
  workflow:["Installer source","Package configuration","Build","Test","Fix","Release"],related:["MSI / MSIX","PowerShell","Windows"]},
 {name:"Python",cat:"automation ai",abbr:"PY",roles:["Cognizant","Security automation projects"],color:"#3776ab",
  work:["Used Python and scripting concepts for security automation, parsing and repeatable analysis.","Supported query-driven investigations and secure engineering workflows.","Used Python in public projects for security finding normalization, risk scoring, evidence generation and repository validation."],
  workflow:["Input","Parse / normalize","Logic / enrichment","Decision","Output / report","Validation"],related:["Automation","AegisCloud","Security Operations"]},
 {name:"Terraform",cat:"cloud automation",abbr:"TF",roles:["AegisCloud project"],color:"#844fba",
  work:["Used Terraform in the AegisCloud public project to model AWS security controls as code.","Defined security resources for GuardDuty, Security Hub, KMS, protected S3 logging and event routing.","Validated Terraform through GitHub Actions to keep infrastructure changes reviewable."],
  workflow:["Security requirement","Terraform code","Plan / validate","Review","Apply in lab","Version control"],related:["AWS","GitHub Actions","GuardDuty"]},
 {name:"MITRE ATT&CK",cat:"siem endpoint assurance",abbr:"ATT&CK",roles:["Holiday Channel","Keerambadi","Enterprise SOC project"],color:"#ff6987",
  work:["Used ATT&CK concepts to structure detection and investigation coverage.","Mapped suspicious behavior and response logic to adversary techniques during detection engineering and threat-analysis work.","Maintained ATT&CK coverage mapping in my public SOC detection project."],
  workflow:["Observed behavior","Technique mapping","Detection coverage","Investigation","Response","Gap review"],related:["KQL","CrowdStrike","Splunk"]},
 {name:"DLP",cat:"cloud assurance",abbr:"DLP",roles:["Spark Invotech"],color:"#5df2af",
  work:["Supported data-loss-prevention workflows in cloud-first environments.","Reviewed security controls around data handling and SaaS/cloud usage.","Integrated data-protection considerations into cloud-security reviews and reporting."],
  workflow:["Data / policy","Control check","Event review","Investigation","Remediation","Report"],related:["Microsoft 365","Cloud Security","Security Assurance"]},
 {name:"SOAR",cat:"automation siem",abbr:"SOAR",roles:["Spark Invotech"],color:"#49e5ff",
  work:["Supported improvements to repeatable security-response workflows.","Focused on reducing manual steps in cloud incident handling and reporting.","Used automation concepts while preserving analyst review for security decisions."],
  workflow:["Alert","Enrichment","Decision point","Automated step","Analyst review","Closure"],related:["Microsoft Sentinel","Automation","Incident Response"]},
 {name:"AI Security",cat:"ai",abbr:"AI",roles:["AI-assisted documentation","Independent AI-security work"],color:"#ff63c5",
  work:["Use AI-assisted documentation to organize cloud incident context and reduce repetitive reporting work.","Focus on prompt-injection awareness, output validation, data boundaries and least-privilege tool access.","Keep high-impact security actions behind explicit human approval rather than allowing autonomous destructive changes."],
  workflow:["Security context","Grounded input","Model assistance","Validation","Human approval","Documented action"],related:["Python","SOAR","Security Operations"]}
];

const projectData = {
 aegis:{
  title:"AegisCloud — Autonomous Cloud Security & Incident Response",
  subtitle:"Public GitHub engineering project",
  lead:"AegisCloud processes synthetic GuardDuty-style findings, normalizes security context, calculates an explainable risk score and creates resource-specific response plans. The public build intentionally blocks live cloud mutation while retaining the decision and evidence workflow.",
  bullets:["Finding normalization in Python for cloud-security events.","Contextual risk scoring using severity, business criticality, internet exposure and confidence.","Response plans for EC2, S3 and IAM scenarios.","SHA-256 evidence integrity for original findings.","Terraform security baseline covering GuardDuty, Security Hub, KMS, protected S3 logging and EventBridge.","GitHub Actions tests and Terraform validation."],
  workflow:["AWS finding","Normalize","Risk score","Policy decision","Response plan","Evidence artifact"],
  tools:["AWS","Python","Terraform","GuardDuty","Security Hub","KMS","EventBridge"],
  note:"Independent public project. Uses synthetic findings and safe-by-default response planning."
 },
 soc:{
  title:"Enterprise SOC Detection Engineering Lab",
  subtitle:"Public GitHub detection-engineering project",
  lead:"A defensive detection repository containing ten ATT&CK-aligned scenarios across identity, endpoint, Windows authentication and cloud telemetry. Each detection includes query logic, investigation guidance and false-positive considerations.",
  bullets:["Ten KQL detections for password spray, encoded PowerShell, suspicious process chains, admin changes, scheduled tasks, privileged cloud changes, mass download, RDP and security-tool tampering.","Sigma equivalents for portable event logic where appropriate.","Threat-hunting queries for unusual PowerShell parents, new RDP sources, rare admin tools and cloud role changes.","Incident-response playbooks for password spraying, suspicious PowerShell and privileged role changes.","Synthetic telemetry and repository validation through GitHub Actions."],
  workflow:["Threat behavior","Telemetry","KQL / Sigma","ATT&CK map","Triage","Response playbook"],
  tools:["Microsoft Sentinel","KQL","Sigma","MITRE ATT&CK","Python"],
  note:"Independent public project. All incident data and identities are synthetic."
 },
 vuln:{
  title:"Enterprise Risk & Vulnerability Management",
  subtitle:"Vulnerability-management experience / project",
  lead:"A vulnerability-management workflow centered on turning scanner findings into prioritized remediation. The work includes risk analysis, vulnerability testing, remediation tracking, reporting and validation.",
  bullets:["Review vulnerability findings and technical severity.","Add asset and business context to determine which findings require faster remediation.","Track remediation ownership and status rather than treating the scan as the end of the process.","Validate fixes and use dashboards/reports to communicate remaining exposure.","Support risk reporting and security-assurance activities around outstanding findings."],
  workflow:["Asset / scan","Finding analysis","Risk prioritization","Remediation tracking","Validation","Reporting"],
  tools:["Qualys VMDR","CVSS","Risk Analysis","Remediation Tracking"],
  note:"Based on documented vulnerability-management work and project experience."
 },
 packaging:{
  title:"Enterprise Application Packaging & Deployment",
  subtitle:"Documented endpoint engineering experience",
  lead:"Enterprise Windows application packaging, testing, deployment and troubleshooting work focused on reliable production releases and repeatable deployment behavior.",
  bullets:["Prepare and test Windows application packages using MSI, MSIX and App-V.","Support SCCM/MECM and Intune deployment workflows including detection logic and deployment readiness.","Use InstallShield and PowerShell for package changes, repeatable checks, automation and troubleshooting.","Validate prerequisites, silent execution, file/registry/service conditions, logging and return codes.","Support application updates, deployment issues, documentation and controlled production releases."],
  workflow:["Application intake","Package / automation","Detection","Test","Deploy","Troubleshoot / document"],
  tools:["MSI / MSIX","App-V","SCCM / MECM","Microsoft Intune","InstallShield","PowerShell","Windows 10/11"],
  note:"Based on documented reference-check details for enterprise packaging and deployment work."
 }
};

function getLogo(t){
 const url=logos[t.name];
 if(url) return `<img src="${url}" alt="${t.name} logo" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span style="display:none">${t.abbr}</span>`;
 return `<span>${t.abbr}</span>`;
}

function renderTools(filter="all"){
 const grid=document.getElementById("toolGrid"); grid.innerHTML="";
 tools.filter(t=>filter==="all"||t.cat.split(" ").includes(filter)).forEach(t=>{
  const b=document.createElement("button"); b.className="tool-card"; b.style.setProperty("--tool",t.color);b.style.setProperty("--glow",t.color);
  b.innerHTML=`<div class="tool-logo">${getLogo(t)}</div><h3>${t.name}</h3><p>${t.cat.replaceAll(" "," · ")}</p><span class="role-count">${t.roles.length} experience${t.roles.length>1?"s":""}</span>`;
  b.onclick=()=>openTool(t); grid.appendChild(b);
 })
}
renderTools();

document.querySelectorAll(".tool-filter").forEach(b=>b.onclick=()=>{
 document.querySelectorAll(".tool-filter").forEach(x=>x.classList.remove("active")); b.classList.add("active"); renderTools(b.dataset.filter)
});

function showModal(content){
 document.getElementById("modalBody").innerHTML=content;
 document.getElementById("experienceModal").showModal();
}
function tags(arr){return `<div class="modal-tags">${arr.map(x=>`<span>${x}</span>`).join("")}</div>`}
function workflow(arr){return `<div class="workflow">${arr.map((x,i)=>`${i?'<i>→</i>':''}<span>${x}</span>`).join("")}</div>`}

function openRole(key){
 const d=roleData[key];
 showModal(`<div class="modal-wrap">
   <span class="modal-kicker">${d.date}</span><h2>${d.title}</h2><div class="modal-sub">${d.company}</div>
   <p class="modal-lead">${d.lead}</p>
   <div class="modal-grid">
    <section class="modal-panel"><h4>Core responsibilities</h4><ul>${d.responsibilities.map(x=>`<li>${x}</li>`).join("")}</ul></section>
    <section class="modal-panel"><h4>Tools & technologies</h4>${tags(d.tools)}<h4 style="margin-top:20px">Typical workflow</h4>${workflow(d.workflows)}</section>
   </div>
  </div>`);
}
document.querySelectorAll(".role-open").forEach(b=>b.onclick=()=>openRole(b.dataset.role));

function openTool(t){
 const logo=logos[t.name]?`<img src="${logos[t.name]}" alt="${t.name} logo" onerror="this.remove()">`:t.abbr;
 showModal(`<div class="modal-wrap">
   <div class="tool-detail-head"><div class="big-tool-logo">${logo}</div><div><span class="modal-kicker">TOOL EXPERIENCE</span><h2 style="margin-bottom:3px">${t.name}</h2><div class="modal-sub">${t.roles.join(" · ")}</div></div></div>
   <p class="modal-lead">How I used ${t.name} in my security work:</p>
   <div class="modal-grid">
    <section class="modal-panel"><h4>Work performed</h4><ul>${t.work.map(x=>`<li>${x}</li>`).join("")}</ul></section>
    <section class="modal-panel"><h4>Workflow</h4>${workflow(t.workflow)}<h4 style="margin-top:20px">Related technologies</h4>${tags(t.related)}</section>
   </div>
   <div class="evidence-note">Experience details are tied to the roles and project work shown in this portfolio. Public project usage is identified separately from employer work.</div>
  </div>`);
}
document.querySelectorAll(".project-open").forEach(b=>b.onclick=()=>{
 const d=projectData[b.dataset.project];
 showModal(`<div class="modal-wrap"><span class="modal-kicker">${d.subtitle}</span><h2>${d.title}</h2>
 <p class="modal-lead">${d.lead}</p><div class="modal-grid"><section class="modal-panel"><h4>Technical work</h4><ul>${d.bullets.map(x=>`<li>${x}</li>`).join("")}</ul></section>
 <section class="modal-panel"><h4>Workflow</h4>${workflow(d.workflow)}<h4 style="margin-top:20px">Technology</h4>${tags(d.tools)}</section></div>
 <div class="evidence-note">${d.note}</div></div>`)
});

document.querySelectorAll(".radar-node").forEach(n=>n.onclick=()=>{
 const key=n.dataset.mini;
 const t=tools.find(x=>x.name===key||x.name.includes(key));
 if(t)openTool(t);
});

document.getElementById("closeModal").onclick=()=>document.getElementById("experienceModal").close();
document.getElementById("experienceModal").addEventListener("click",e=>{if(e.target.id==="experienceModal")e.target.close()});

const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));

document.querySelectorAll(".tilt").forEach(card=>{
 card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1100px) rotateX(${(-y*3.5).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-3px)`});
 card.addEventListener("mouseleave",()=>card.style.transform="")
});

const feed=[
 "[SIEM] reviewing correlated security events...",
 "[EDR] endpoint process context loaded...",
 "[CLOUD] identity and configuration activity correlated...",
 "[VM] risk prioritized with asset context...",
 "[AUTO] repeatable workflow ready for analyst review..."
];
let fi=0;const feedEl=document.getElementById("consoleFeed");
function updateFeed(){feedEl.innerHTML=feed.slice(Math.max(0,fi-2),fi+1).map(x=>`<div class="feed-line">> ${x}</div>`).join("");fi=(fi+1)%feed.length}
updateFeed();setInterval(updateFeed,1800);

const canvas=document.getElementById("bgCanvas"),ctx=canvas.getContext("2d");let pts=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);pts=Array.from({length:Math.min(80,Math.floor(innerWidth/18))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16}))}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);pts.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>innerWidth)p.vx*=-1;if(p.y<0||p.y>innerHeight)p.vy*=-1;ctx.fillStyle="rgba(73,229,255,.28)";ctx.beginPath();ctx.arc(p.x,p.y,1,0,Math.PI*2);ctx.fill();for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){ctx.strokeStyle=`rgba(91,140,255,${(1-d/120)*.07})`;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}});requestAnimationFrame(draw)}
addEventListener("resize",resize);resize();draw();

document.getElementById("menuBtn").onclick=()=>document.getElementById("navLinks").classList.toggle("open");
document.querySelectorAll("#navLinks a").forEach(a=>a.onclick=()=>document.getElementById("navLinks").classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();

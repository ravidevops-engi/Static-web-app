export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const behavioralSections = [
  {
    title: "1. Personal Introduction & Role Summary",
    questions: [
      {
        question: "Tell me about yourself and your DevOps experience.",
        answerHtml: `
      <div class="answer-rich">
        <h3>👋 <strong>Personal Introduction</strong></h3>
        <p>
          Hi, I’m <strong>Ritesh Sharma</strong>, a DevOps Engineer with around <strong>5 years of hands-on experience</strong> in automation, CI/CD pipelines, and infrastructure management across <strong>Azure Cloud</strong> and on-prem environments.
        </p>
        <p>
          I specialize in <strong>Azure DevOps, Terraform, Docker, Kubernetes, Jenkins, and GitHub Actions</strong>.  
          Currently, I’m working at <strong>Litmus Information Systems LLP</strong>, where I manage build and release pipelines, VM provisioning, NFS setup, monitoring, and patching for a healthcare client in Europe.
        </p>
        <p>
          I focus on <strong>end-to-end delivery automation</strong> — from code commit to deployment, ensuring reliability, consistency, and security in every stage.
        </p>
      </div>`
      },
      {
        question: "Introduce yourself — describe your roles and responsibilities.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Roles & Responsibilities</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Designing and managing <strong>CI/CD pipelines</strong> using Azure DevOps (YAML & Classic).</li>
          <li>☁️ Building and deploying infrastructure using <strong>Terraform (IaC)</strong>.</li>
          <li>🐳 Containerizing applications using <strong>Docker</strong> and orchestrating through <strong>Kubernetes</strong>.</li>
          <li>🔍 Implementing <strong>SonarQube, Checkov, and Prometheus-Grafana</strong> for quality and monitoring.</li>
          <li>🛠️ Performing patching, upgrades, and <strong>offline leapp migrations</strong> for RHEL servers.</li>
          <li>📦 Managing <strong>Azure Repos</strong>, branching, approvals, and deployment gates.</li>
          <li>🧠 Collaborating with development and QA teams for smooth release cycles.</li>
        </ul>
        <p><strong>In short:</strong> My role ensures that software delivery is fast, secure, and reproducible with zero manual dependency.</p>
      </div>`
      },
      {
        question: "What are your day-to-day activities in your current project?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📅 <strong>Day-to-Day DevOps Activities</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Monitoring daily <strong>CI/CD pipeline executions</strong> and resolving failed builds.</li>
          <li>🔹 Managing <strong>Terraform deployments</strong> for new environments (DEV/QA/UAT/PROD).</li>
          <li>🔹 Reviewing and merging PRs on <strong>Azure Repos</strong> with proper branch policies.</li>
          <li>🔹 Configuring <strong>service connections</strong> and secrets via Azure Key Vault.</li>
          <li>🔹 Performing <strong>Linux server patching and monitoring</strong> using Grafana & Prometheus.</li>
          <li>🔹 Coordinating with developers to optimize Dockerfiles and deployments.</li>
          <li>🔹 Documenting infrastructure changes and release notes for every sprint.</li>
        </ul>
        <p><strong>In Practice:</strong> I start the day by checking pipeline dashboards, reviewing alerts, and ensuring the previous night’s deployments were successful.</p>
      </div>`
      },
      {
        question: "How do you get tasks assigned (Jira, ServiceNow, or other tools)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗂️ <strong>Task Management</strong></h3>
        <p>
          In our team, we primarily use <strong>ServiceNow</strong> for ticketing and <strong>Jira</strong> for sprint planning.  
          DevOps activities are tracked under Jira stories or ServiceNow change requests.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📥 I pick tickets assigned to DevOps from the daily sprint board.</li>
          <li>🔧 Each task has a clear description, acceptance criteria, and linked PR.</li>
          <li>📆 Daily stand-up updates progress and blockers.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain both operational (ServiceNow) and project (Jira) tasks so that changes are traceable for compliance audits.</p>
      </div>`
      },
      {
        question: "How do you communicate updates to your team, developers, and testers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💬 <strong>Communication & Collaboration</strong></h3>
        <p>
          We follow a structured communication flow:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧭 Daily stand-ups and sprint reviews through <strong>Microsoft Teams</strong>.</li>
          <li>📩 Share deployment status via automated Teams webhook from Azure Pipelines.</li>
          <li>🧱 Maintain shared Confluence pages for environment setup and infra changes.</li>
          <li>📋 Post-release reports and build summaries go to all stakeholders.</li>
        </ul>
        <p><strong>In Practice:</strong> I keep developers and testers updated on pipeline readiness or rollback actions instantly via Teams integrations.</p>
      </div>`
      },
      {
        question: "What was your biggest achievement in your last project?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏆 <strong>Major Achievement</strong></h3>
        <p>
          Successfully automated the entire infrastructure provisioning and deployment for a multi-region healthcare system using <strong>Terraform + Azure DevOps YAML pipelines</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Reduced manual deployment time from 3 hours to 15 minutes.</li>
          <li>Integrated <strong>SonarQube, Checkov, and Key Vault</strong> into CI/CD pipelines.</li>
          <li>Built <strong>reusable YAML templates</strong> for DEV, QA, and PROD pipelines.</li>
        </ul>
        <p><strong>Impact:</strong> It improved consistency, reduced human error, and increased deployment frequency by 4x.</p>
      </div>`
      },
      {
        question: "What was your biggest learning from your DevOps journey?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📘 <strong>Key Learnings from DevOps Journey</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>💡 Always automate repetitive tasks — it reduces human error.</li>
          <li>🔐 Security should be part of pipeline design, not an afterthought.</li>
          <li>📈 Observability is as important as deployment — always monitor before and after release.</li>
          <li>🧠 Clear documentation and communication are the foundation of smooth CI/CD.</li>
        </ul>
        <p><strong>In Practice:</strong> I learned that DevOps success is 30% tools and 70% process, discipline, and collaboration.</p>
      </div>`
      },
      {
        question: "What made you interested in DevOps as a career?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Why DevOps?</strong></h3>
        <p>
          I’ve always been passionate about automation and problem-solving.  
          When I saw how DevOps bridges the gap between development and operations — I knew this was my path.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💻 I love building solutions that reduce manual work and speed up delivery.</li>
          <li>🔄 DevOps gives end-to-end ownership — from code to production.</li>
          <li>☁️ Working with cloud, containers, and automation gives me daily challenges and learning.</li>
        </ul>
        <p><strong>In Practice:</strong> I started with system administration and gradually evolved into full DevOps because I enjoy seeing automation bring teams together and deliver faster with quality.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Project Explanation & Tools",
    questions: [
      {
        question: "Describe your current or previous project in detail.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏥 <strong>Project Overview — Centralized Patient Monitoring System (Healthcare Client, Europe)</strong></h3>
        <p>
          I’m currently working on a <strong>Centralized Patient Monitoring System</strong> for a European healthcare provider.  
          The project involves collecting, processing, and visualizing real-time patient data from IoT-enabled medical devices hosted on Azure.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>☁️ Infrastructure is built using <strong>Terraform</strong> with <strong>Azure as the cloud provider</strong>.</li>
          <li>🐳 Applications are containerized using <strong>Docker</strong> and deployed on <strong>Azure Kubernetes Service (AKS)</strong>.</li>
          <li>🔁 CI/CD implemented through <strong>Azure DevOps YAML pipelines</strong>.</li>
          <li>📊 Monitoring with <strong>Azure Monitor, Grafana, and Prometheus</strong>.</li>
          <li>🔐 Secrets stored securely in <strong>Azure Key Vault</strong>.</li>
          <li>🧩 Logging handled via <strong>Log Analytics + Application Insights</strong>.</li>
        </ul>
        <p><strong>Objective:</strong> Achieve 99.9% uptime with automated deployment, infrastructure reproducibility, and continuous monitoring.</p>
      </div>`
      },
      {
        question: "What DevOps tools are you using and why?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Tools & Technologies Stack</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🟦 <strong>Azure DevOps</strong> — for CI/CD pipelines, Repos, and Artifacts.</li>
          <li>🌍 <strong>Terraform</strong> — for infrastructure provisioning (IaC).</li>
          <li>🐳 <strong>Docker</strong> — for application containerization and portability.</li>
          <li>☸️ <strong>AKS (Kubernetes)</strong> — for container orchestration and scaling.</li>
          <li>📦 <strong>SonarQube</strong> — for code quality analysis and static scanning.</li>
          <li>🔐 <strong>Azure Key Vault</strong> — for secrets and credential management.</li>
          <li>📊 <strong>Grafana & Prometheus</strong> — for monitoring and alerting.</li>
          <li>🧠 <strong>Jira</strong> — for sprint planning and tracking.</li>
          <li>📄 <strong>Confluence</strong> — for project documentation and RCA reports.</li>
        </ul>
        <p><strong>In Practice:</strong> I chose Azure DevOps as the central automation platform because it integrates tightly with Azure and supports Terraform, Docker, and SonarQube plugins natively.</p>
      </div>`
      },
      {
        question: "Explain your project architecture (Azure, Terraform, AKS, etc.).",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Project Architecture — Azure Cloud & DevOps Flow</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>👷 <strong>Infrastructure:</strong> Created using Terraform — resource groups, VNets, subnets, NSGs, storage, AKS, and ACR.</li>
          <li>🐳 <strong>App Deployment:</strong> Docker images built in pipeline → pushed to ACR → deployed to AKS.</li>
          <li>🧱 <strong>State Management:</strong> Terraform backend stored in Azure Storage Account.</li>
          <li>📦 <strong>Artifact Flow:</strong> Code → Build → SonarQube scan → Docker build → Push to ACR → Deploy via Helm.</li>
          <li>📊 <strong>Monitoring:</strong> Azure Monitor + Prometheus integrated with Grafana dashboard.</li>
          <li>🔐 <strong>Security:</strong> Secrets fetched dynamically from Azure Key Vault during deployment.</li>
        </ul>
        <p><strong>In Practice:</strong> Each deployment follows the GitOps model — once code is merged, pipeline triggers infra + app deployment automatically to target environment.</p>
      </div>`
      },
      {
        question: "What environments do you manage (DEV, UAT, PROD)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Environment Management</strong></h3>
        <p>
          We maintain four key environments: <strong>DEV → QA → UAT → PROD</strong>.  
          Each has its own variable group and state backend for isolation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧱 DEV — Feature testing, runs multiple times daily.</li>
          <li>🔎 QA — Integration testing + SonarQube & Checkov scans.</li>
          <li>🧪 UAT — Pre-prod with limited data and manual approvals.</li>
          <li>🚀 PROD — Fully automated, triggered only after approvals + gates pass.</li>
        </ul>
        <p><strong>In Practice:</strong> Terraform state and YAML variable groups are environment-specific to ensure isolation and prevent accidental overwrites.</p>
      </div>`
      },
      {
        question: "What branching strategy do you follow, and why?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching Strategy — Trunk-Based + Feature Branch</strong></h3>
        <p>
          We follow a <strong>Trunk-based branching strategy</strong> with short-lived feature branches.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✨ <code>main</code> — always stable and production-ready.</li>
          <li>🧩 <code>feature/*</code> — for individual features and bug fixes.</li>
          <li>🚀 <code>release/*</code> — for staging or UAT builds.</li>
          <li>⚙️ <code>hotfix/*</code> — for emergency production patches.</li>
        </ul>
        <p><strong>In Practice:</strong> Every PR triggers a build validation pipeline and requires at least one reviewer before merge — this ensures quality and compliance.</p>
      </div>`
      },
      {
        question: "How do you integrate Terraform with pipelines in your project?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Terraform Integration with Azure DevOps Pipelines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧾 Terraform scripts stored under <code>/infra</code> folder in Azure Repos.</li>
          <li>🔁 Pipeline uses stages — Init → Validate → Plan → Apply.</li>
          <li>🗂️ Remote backend configured with Azure Storage Account for state file.</li>
          <li>🔐 Secrets like clientId, subscriptionId, etc. pulled from Azure Key Vault.</li>
          <li>✅ Plan output uploaded as an artifact for manual approval before apply.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: TerraformTaskV4@4
  inputs:
    provider: 'azurerm'
    command: 'apply'
    environmentServiceNameAzureRM: 'my-service-connection'</code></pre>
        <p><strong>In Practice:</strong> I modularized Terraform — each module represents a resource stack (network, compute, storage) to improve reusability and pipeline efficiency.</p>
      </div>`
      },
      {
        question: "Which tools do you use for tracking, collaboration, and documentation (Jira, Confluence, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>Tracking & Collaboration Tools</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📌 <strong>Jira</strong> — sprint planning, tracking DevOps tasks, and bug tickets.</li>
          <li>🧠 <strong>Confluence</strong> — maintaining SOPs, RCA reports, and environment documentation.</li>
          <li>💬 <strong>Microsoft Teams</strong> — daily stand-ups and incident alerts via webhook.</li>
          <li>🔔 <strong>ServiceNow</strong> — managing change requests and release approvals.</li>
        </ul>
        <p><strong>In Practice:</strong> I automate ticket creation via Azure Monitor → Logic App → ServiceNow integration — so alerts generate tickets automatically.</p>
      </div>`
      },
      {
        question: "How do you ensure CI/CD pipelines are secure and compliant?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Pipeline Security & Compliance</strong></h3>
        <p>
          Security is integrated at every stage of our CI/CD lifecycle.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔑 Use <strong>Azure Key Vault</strong> for secrets — no hard-coded credentials.</li>
          <li>🧱 Enable <strong>RBAC & least privilege</strong> on all service connections.</li>
          <li>🧪 Run <strong>SonarQube</strong> and <strong>Checkov</strong> scans before deployment.</li>
          <li>📜 Audit trails & logs retained for every release (ServiceNow change linked).</li>
          <li>✅ All PROD pipelines have manual approvals + environment gates.</li>
          <li>⚙️ Use <strong>branch policies + build validation</strong> before PR merge.</li>
        </ul>
        <p><strong>In Practice:</strong> Our pipelines comply with healthcare data standards (HIPAA) — ensuring security, traceability, and zero secret leakage across builds.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. Production Challenges & Troubleshooting",
    questions: [
      {
        question: "What challenges have you faced in production deployments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Common Production Challenges</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚧 Pipeline failures due to expired service principal credentials or missing Key Vault secrets.</li>
          <li>🐳 Docker image pull failures from ACR because of authentication timeout.</li>
          <li>🔐 Permission issues — incorrect RBAC roles or locked Terraform state.</li>
          <li>🌐 Network latency between Azure regions causing AKS pod restarts.</li>
          <li>📦 Terraform drift — manual infra changes not reflected in state file.</li>
          <li>⚡ VM patch reboots impacting application uptime.</li>
        </ul>
        <p><strong>In Practice:</strong> I always maintain pre-deployment checklists — verifying service connections, storage backend, and pipeline agents before triggering PROD release.</p>
      </div>`
      },
      {
        question: "Describe a production issue you handled under pressure.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Real Production Incident</strong></h3>
        <p>
          One night, our healthcare API gateway went down due to an expired SSL certificate — impacting all patient monitoring dashboards.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔍 Identified failure via Azure Application Gateway health probe alerts.</li>
          <li>🔑 Renewed certificate in Key Vault and re-imported into the Gateway listener.</li>
          <li>♻️ Restarted gateway services and validated health probes.</li>
          <li>✅ Application came online within 15 minutes, minimizing downtime.</li>
        </ul>
        <p><strong>Post-fix:</strong> I added an automated Azure Monitor alert for certificate expiry 15 days prior — preventing future impact.</p>
      </div>`
      },
      {
        question: "How do you handle deployment failures in CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Handling CI/CD Deployment Failures</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Check pipeline logs → identify which stage or task failed.</li>
          <li>Validate variables, service connections, or environment access.</li>
          <li>Re-run failed job with <code>system.debug=true</code> enabled for verbose logs.</li>
          <li>Rollback last successful artifact automatically (if configured).</li>
          <li>Update stakeholders via Teams webhook or ServiceNow ticket.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>condition: failed()
steps:
  - script: echo "Rolling back to previous stable release"</code></pre>
        <p><strong>In Practice:</strong> I implemented rollback stages in YAML pipelines — so if PROD deploy fails, pipeline redeploys last green build automatically.</p>
      </div>`
      },
      {
        question: "Tell me about a mistake you made in production and how you handled it.",
        answerHtml: `
      <div class="answer-rich">
        <h3>😅 <strong>Owning a Production Mistake</strong></h3>
        <p>
          Once, I applied Terraform changes without reviewing the plan properly — which accidentally deleted a storage account used for diagnostic logs.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚑 Immediately stopped the apply job.</li>
          <li>🔄 Restored the deleted resource using Recovery Vault snapshot.</li>
          <li>📊 Validated all pipelines and monitoring connections.</li>
          <li>🧾 Documented the RCA and added mandatory “plan approval” stage before apply.</li>
        </ul>
        <p><strong>Lesson:</strong> Never skip manual review of <code>terraform plan</code> output, especially in shared infra.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot a pipeline or infrastructure issue?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Systematic Troubleshooting Approach</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Identify whether failure is <strong>code, pipeline, or environment-related</strong>.</li>
          <li>2️⃣ Enable <code>system.debug=true</code> and re-run failed job.</li>
          <li>3️⃣ Check Azure Activity Logs and agent job logs.</li>
          <li>4️⃣ Validate resource health (VMs, AKS nodes, App Service) via Azure Portal.</li>
          <li>5️⃣ Compare configuration with last successful run.</li>
          <li>6️⃣ Document RCA in Confluence and implement preventive measure.</li>
        </ul>
        <p><strong>In Practice:</strong> My thumb rule — never guess; always reproduce, isolate, verify, then fix.</p>
      </div>`
      },
      {
        question: "If a VM shows running but RDP not working, how will you resolve it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>RDP Troubleshooting for Running VM</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>✅ Check NSG rules — ensure port 3389 inbound rule exists and public IP is reachable.</li>
          <li>⚙️ Use <strong>Serial Console</strong> from Azure Portal to check firewall or RDP service.</li>
          <li>🔍 Run <strong>Network Watcher → IP Flow Verify</strong> to confirm port access.</li>
          <li>🪟 Restart RDP service from serial console:
            <pre style="background:#111;padding:.5rem;border-radius:.4rem;"><code>net start termservice</code></pre>
          </li>
          <li>♻️ If still blocked, reset NIC or create a new NIC and attach.</li>
        </ul>
        <p><strong>In Practice:</strong> I resolved similar cases by enabling Boot Diagnostics and resetting RDP config using Azure Run Command.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot VM startup or connectivity issues?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>VM Startup / Connectivity Troubleshooting</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Verify Boot Diagnostics screenshots — check if stuck on update or login screen.</li>
          <li>⚙️ Review Activity Logs for recent power actions.</li>
          <li>🪛 Use Serial Console or Run Command (<code>Get-Service</code>, <code>ipconfig</code>).</li>
          <li>📶 Check NIC health, public IP, and NSG inbound/outbound rules.</li>
          <li>🔁 Restart the VM or redeploy it (preserves disk and NIC).</li>
        </ul>
        <p><strong>In Practice:</strong> A VM in our environment boot-looped due to OS corruption; I attached its OS disk to another healthy VM, fixed registry, and redeployed successfully.</p>
      </div>`
      },
      {
        question: "Describe your approach to solving complex issues during downtime.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Handling Downtime Under Pressure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📞 Immediately notify stakeholders and create an incident bridge (Teams/War room).</li>
          <li>🔎 Identify scope — which services or users are affected.</li>
          <li>🧠 Divide troubleshooting — infra, app, DB, and network teams in parallel.</li>
          <li>🧰 Use logs, Application Insights, and alerts to locate root cause.</li>
          <li>⏱️ Apply quick workaround (rollback or scale out) to restore service.</li>
          <li>🧾 Post-incident — document RCA and preventive measures.</li>
        </ul>
        <p><strong>In Practice:</strong> During an AKS outage, I scaled the app via backup cluster and rerouted traffic via Front Door — restoring user access within 10 minutes.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Automation, Scripting & Optimization",
    questions: [
      {
        question: "Describe a situation where you automated a manual process.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Automating a Repetitive Manual Task</strong></h3>
        <p>
          I automated the nightly snapshot & cleanup process for non-prod VMs and unattached disks which was earlier done manually every morning.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔁 Built an Azure Automation Runbook (PowerShell) that:
            <ul>
              <li>Finds VMs tagged <code>env:dev</code> and takes snapshots.</li>
              <li>Deletes snapshots older than retention period (30 days).</li>
              <li>Writes status to a Log Analytics custom table and posts summary to Teams.</li>
            </ul>
          </li>
          <li>✅ Scheduled runbook via TimeTrigger and secured automation account with managed identity.</li>
          <li>📈 Result: Reduced manual work by weekly 6 hours and cut storage cost by removing stale snapshots.</li>
        </ul>
        <p><strong>In Practice:</strong> I always include idempotency and safe-guards (dry-run flag) for automation that modifies infra.</p>
      </div>`
      },
      {
        question: "What scripting languages have you used (Bash, PowerShell, Python)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Scripting Languages I Use</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🐚 <strong>Bash</strong> — quick automation on Linux agents, Docker build helpers, and small utilities.</li>
          <li>💻 <strong>PowerShell</strong> — Azure Automation runbooks, VM management, and Windows-specific tasks.</li>
          <li>🐍 <strong>Python</strong> — complex orchestration scripts, API integrations, and log parsing (with rich libraries).</li>
        </ul>
        <p><strong>In Practice:</strong> I pick the language based on platform: Bash for Linux CI tasks, PowerShell for Azure/Windows automation, Python when parsing or structured logic is needed.</p>
      </div>`
      },
      {
        question: "How do you automate patching in Linux or Windows VMs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩹 <strong>Automated Patching Strategy</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Windows:
            <ul>
              <li>Use <strong>Update Management</strong> in Azure Automation to schedule patch deployments.</li>
              <li>Define maintenance windows, pre/post scripts, and deployment targets via tags.</li>
            </ul>
          </li>
          <li>Linux:
            <ul>
              <li>Use Azure Automation or Ansible playbooks triggered by pipelines for controlled patch runs.</li>
              <li>Run pre-checks (disk, services) and post-verification (health probe, restart service).</li>
            </ul>
          </li>
          <li>General:
            <ul>
              <li>Perform patching in rings (canary hosts → rest) and run health checks after patch.</li>
              <li>Notify stakeholders and allow maintenance mode gating to avoid business impact.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> For production, I run weekly patch windows with canary VMs first and auto-rollback playbooks if smoke-tests fail.</p>
      </div>`
      },
      {
        question: "How do you ensure cost optimization in Azure environments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💰 <strong>Cost Optimization Steps</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Enable <strong>Cost Analysis</strong> and set budgets with alerts (80%/90% thresholds).</li>
          <li>Tagging policy: enforce cost-center/project tags to attribute spend.</li>
          <li>Right-size VMs — schedule auto-shutdown for non-prod using Automation or DevTest Labs.</li>
          <li>Use Reserved Instances / Savings Plans for steady-state workloads and Spot instances for batch jobs.</li>
          <li>Implement lifecycle rules for blobs (Hot → Cool → Archive) and delete unattached disks automatically.</li>
        </ul>
        <p><strong>In Practice:</strong> A combination of auto-shutdown + RI purchases reduced monthly bill by ~30% on one project.</p>
      </div>`
      },
      {
        question: "What steps do you take for resource utilization monitoring?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Resource Utilization Monitoring</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Collect metrics (CPU, memory, disk I/O, network) using Azure Monitor and Prometheus for Kubernetes.</li>
          <li>Create dashboards in Grafana / Azure Workbooks showing 1h/24h/7d trends and heatmaps for hot resources.</li>
          <li>Set actionable alerts (not noisy) — e.g., CPU > 85% for 10 mins triggers scale or investigation.</li>
          <li>Run monthly review to identify idle or underutilized resources and schedule right-sizing or termination.</li>
        </ul>
        <p><strong>In Practice:</strong> I automate reports (cost + utilization) and create tickets for owners when resources are idle for > 14 days.</p>
      </div>`
      },
      {
        question: "How do you ensure post-deployment validation after automation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Post-Deployment Validation</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Run smoke tests (HTTP endpoints, DB connectivity, auth) using test runners or curl scripts immediately after deploy.</li>
          <li>Verify health checks and readiness probes (AKS) and application metrics (latency, error rate).</li>
          <li>Use deployment gates to block promotion if validation fails — and attach automatic rollback runbooks.</li>
          <li>Store validation results as pipeline artifacts and publish a summary to Teams / ServiceNow.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Example smoke step
- script: |
    STATUS=&dollar;(curl -s -o /dev/null -w "%{http_code}" https://myapp/health)
    if [ "&dollar;STATUS" -ne 200 ]; then
      echo "Health failed" && exit 1
    fi</code></pre>
        <p><strong>In Practice:</strong> I gate UAT → PROD promotion with automated smoke tests + manual approval for final sanity.</p>
      </div>`
      },
      {
        question: "How do you make your pipelines efficient (faster, secure, and reusable)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Pipeline Efficiency & Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Modularize pipelines into templates (build.yml, deploy.yml) and reuse across projects.</li>
          <li>Use caching (npm, pip, Docker layer cache) to reduce build times.</li>
          <li>Parallelize tests with matrix strategies and run slower integration tests in separate stage.</li>
          <li>Store secrets in Key Vault and reference via service connections (no secrets in repo).</li>
          <li>Run heavy scans (Checkov/SonarQube) in PR validation but in parallel to avoid blocking builds unnecessarily.</li>
          <li>Measure pipeline duration and set SLAs; continuously optimize the slowest steps.</li>
        </ul>
        <p><strong>In Practice:</strong> By adding caching and splitting unit vs integration tests, we cut build time from ~20m to ~7m and increased developer feedback loop speed.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Collaboration & Communication",
    questions: [
      {
        question: "How do you coordinate with developers and testers during release?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤝 <strong>Coordinating Releases</strong></h3>
        <p>
          Release coordination is all about preparation, visibility and a single source of truth during the window.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🗂️ Plan the release in <strong>Jira</strong> with clear owners, acceptance criteria and rollback plan.</li>
          <li>✅ Pre-release checklist: service connections, infra health, Key Vault secrets, smoke-tests, and DB migrations.</li>
          <li>📣 Create a temporary release channel (Teams/Slack) — pipeline posts, manual approvals, and quick decisions happen here.</li>
          <li>🧪 Keep developers & testers on standby for immediate validation and hotfixes; testers run a defined test pack right after deployment.</li>
          <li>📄 Post-deploy report: summary of steps, success criteria and any follow-ups shared in channel and Confluence.</li>
        </ul>
        <p><strong>In Practice:</strong> For PROD releases I always run a pre-check runbook automatically, open a war-room channel, and only proceed if all checks pass.</p>
      </div>`
      },
      {
        question: "How do you handle escalations from clients or managers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📞 <strong>Handling Escalations</strong></h3>
        <p>
          Fast acknowledgement, clear ownership and continuous updates — that’s the triage mantra.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⏱️ Acknowledge immediately and create an incident with priority, impact and owner in ServiceNow (or the ticketing tool).</li>
          <li>🔍 Share initial findings and ETA on the same channel where stakeholders escalated (call or Teams) — set expectations.</li>
          <li>🛠️ Contain first (rollback/scale/route traffic), then troubleshoot root cause in parallel.</li>
          <li>📦 Provide frequent concise status (every 10–15 mins for P1) until resolution and follow with formal RCA.</li>
        </ul>
        <p><strong>In Practice:</strong> I always name a single point-of-contact for stakeholder communication and a technical lead for remediation — keeps updates consistent and reliable.</p>
      </div>`
      },
      {
        question: "How do you manage cross-team dependencies?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Managing Cross-Team Dependencies</strong></h3>
        <p>
          Make dependencies explicit early, own the coordination and automate verification where possible.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📌 Capture dependencies in Jira stories and mark owners & SLAs for each dependency.</li>
          <li>🧭 Use integration tests and contract tests in CI to detect breaks early (API schema checks, consumer-driven contracts).</li>
          <li>📆 Schedule syncs for high-risk changes and use pre-deploy sign-offs from dependent teams.</li>
          <li>🔔 Automate readiness checks (gates) — pipeline waits until dependent service health or a manual sign-off is present.</li>
        </ul>
        <p><strong>In Practice:</strong> For infra changes touching network or DB I require sign-off from Network and DBA owners before the apply step is allowed.</p>
      </div>`
      },
      {
        question: "What is your approach to working with multiple teams (Dev, QA, Ops, Network)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Cross-Team Collaboration Approach</strong></h3>
        <p>
          Align on roles, make processes repeatable and automate handoffs to reduce friction.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧭 Define RACI for major activities (who’s Responsible / Accountable / Consulted / Informed).</li>
          <li>🔁 Automate handoffs: CI pipeline artifacts, test triggers, and deployment notifications to reduce manual steps.</li>
          <li>📚 Keep shared documentation (runbooks, diagrams) in Confluence and link them in pipeline steps and tickets.</li>
          <li>🤝 Run regular cross-team retros and pre-release walkthroughs to surface blockers early.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer contract tests and smoke tests as the “API” between teams — if tests pass, the consumer team can proceed confidently.</p>
      </div>`
      },
      {
        question: "How do you handle team conflicts or disagreements?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧘 <strong>Resolving Conflicts</strong></h3>
        <p>
          Focus on data, experiments and blameless collaboration — not opinions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔍 Bring evidence: logs, metrics, risk assessment, and small prototypes to validate approaches.</li>
          <li>🧪 Propose a short experiment (A/B or PoC) to prove which approach works in practice.</li>
          <li>🗳️ If still ambiguous, follow an escalation path — involve leads and pick the safer option for production.</li>
          <li>🤝 Keep it blameless and document the decision rationale for future reference.</li>
        </ul>
        <p><strong>In Practice:</strong> I resolve many conflicts by running a quick canary and making decisions based on observed behavior rather than assumptions.</p>
      </div>`
      },
      {
        question: "How do you convince stakeholders to adopt a new tool or process?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Driving Tool / Process Adoption</strong></h3>
        <p>
          Start small, demonstrate ROI, reduce perceived risk and support the team through the transition.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔬 Run a focused PoC with measurable KPIs (time saved, error reduction, cost). </li>
          <li>📊 Present results with concrete metrics and a migration/rollback plan.</li>
          <li>🧑‍🏫 Offer training, templates and documentation to lower adoption friction.</li>
          <li>🤝 Pilot with a friendly team and gather testimonials — then expand gradually.</li>
        </ul>
        <p><strong>In Practice:</strong> For CI template adoption, I provided ready-to-use YAML templates and a migration checklist — adoption jumped because devs could copy & paste and run immediately.</p>
      </div>`
      },
      {
        question: "How do you ensure transparency and communication during critical releases?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔦 <strong>Transparency During Critical Releases</strong></h3>
        <p>
          Clear roles, live communication channels and regular precise updates are key to trust and smooth execution.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📢 Open a dedicated war-room (Teams) with stakeholders and operators present for the window.</li>
          <li>🧾 Share a short runbook at the start: success criteria, rollback steps, owner contacts and monitoring dashboards links.</li>
          <li>⏱️ Post structured updates at regular intervals (start, during critical milestones, end) — keep messages short and status-focused.</li>
          <li>🧾 After the release publish a concise post-mortem / summary with any follow-ups and timelines.</li>
        </ul>
        <p><strong>In Practice:</strong> During high-risk releases I appoint one communicator (not the implementer) to send scheduled status updates — it keeps the engineering team focused on execution.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Leadership, Responsibility & Pressure Handling",
    questions: [
      {
        question: "How do you prioritize tasks during a sprint?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Task Prioritization Strategy</strong></h3>
        <p>
          I prioritize tasks based on <strong>business impact, dependencies, and risk level</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📊 Use sprint planning to classify work: P1 (critical production), P2 (pipeline improvement), P3 (tech debt).</li>
          <li>🔁 Break large tasks into small deliverables so value is delivered incrementally.</li>
          <li>📅 Keep buffer (~10–15%) for urgent incidents or hotfixes.</li>
          <li>🤝 Sync daily with dev & QA to adjust priorities dynamically if new blockers appear.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow the WSJF (Weighted Shortest Job First) logic — high-impact & short-duration tasks get picked first to show faster results.</p>
      </div>`
      },
      {
        question: "How do you handle tight deadlines or unplanned releases?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏱️ <strong>Managing Tight Deadlines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🎯 Identify critical path — what’s mandatory vs what can be deferred.</li>
          <li>🧭 Increase communication frequency — quick syncs, no long meetings.</li>
          <li>⚙️ Automate repetitive steps (build/test/deploy) to save manual time.</li>
          <li>🛠️ Use feature flags or staged rollout if the release is risky.</li>
          <li>💬 Keep all stakeholders informed on ETA and known risks to avoid surprises.</li>
        </ul>
        <p><strong>In Practice:</strong> During a sudden compliance fix, I created a hotfix pipeline using an existing YAML template — it went live in 4 hours without bypassing checks.</p>
      </div>`
      },
      {
        question: "How do you ensure deployment quality under pressure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧪 <strong>Ensuring Quality Under Pressure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧰 Never skip mandatory checks — run smoke & health tests post-deploy.</li>
          <li>🟢 Keep rollback scripts & canary deployments pre-configured.</li>
          <li>⚠️ Deploy smaller changes more frequently instead of one big risky push.</li>
          <li>💡 Use automated gates (like build validation, approvers) even under tight windows.</li>
        </ul>
        <p><strong>In Practice:</strong> I once split a risky production change into 3 smaller patches, validated each with smoke tests, and avoided downtime entirely.</p>
      </div>`
      },
      {
        question: "What actions do you take to maintain stability after a major change?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Maintaining Stability Post-Change</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📈 Monitor key metrics (CPU, latency, errors, queue length) for 24–48 hours after deployment.</li>
          <li>📋 Keep rollback plan & one-click restore ready if metrics deviate beyond threshold.</li>
          <li>🧠 Run regression tests and keep alerting slightly more aggressive post-deploy.</li>
          <li>💬 Schedule post-change review (mini RCA) to capture learnings.</li>
        </ul>
        <p><strong>In Practice:</strong> After a DB schema update, I enabled query-level insights in App Insights — caught a slow query early before it impacted users.</p>
      </div>`
      },
      {
        question: "How do you handle on-call or escalation situations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📟 <strong>Handling On-Call Escalations</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚨 Acknowledge within minutes and check dashboards/logs before making any change.</li>
          <li>🧰 Apply predefined runbooks (restart service, recycle pod, clear queue) — avoid ad-hoc fixes.</li>
          <li>🧾 Update incident ticket regularly with steps & observations — transparency builds trust.</li>
          <li>💬 Once stable, conduct RCA to improve monitoring & automation.</li>
        </ul>
        <p><strong>In Practice:</strong> I keep automated self-heal scripts for common issues (like service restarts or disk cleanup) — reduces manual intervention drastically.</p>
      </div>`
      },
      {
        question: "How do you ensure proper documentation of your work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📚 <strong>Documentation Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧾 Maintain up-to-date runbooks, architecture diagrams & SOPs in Confluence.</li>
          <li>🔗 Embed documentation links directly in pipelines and alert messages.</li>
          <li>🧠 Update docs as part of “definition of done” — no task is closed without notes.</li>
          <li>📋 Conduct peer-reviews for runbooks to ensure clarity and accuracy.</li>
        </ul>
        <p><strong>In Practice:</strong> Every new pipeline I create has a linked wiki page with setup, variables, and rollback steps — new team members onboard faster.</p>
      </div>`
      },
      {
        question: "Describe a time when you had to learn a new tool quickly to solve a business problem.",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Quick Learning Example</strong></h3>
        <p>
          During a production compliance audit, I had to integrate <strong>Azure Sentinel</strong> logs with ServiceNow in under 3 days.  
          I quickly learned Sentinel's Log Analytics & Logic Apps, built a custom playbook to auto-create ServiceNow tickets when security alerts triggered.
        </p>
        <p>✅ Result — incidents got logged automatically and response time reduced by 40%. The team continued using that flow permanently.</p>
        <p><strong>In Practice:</strong> My learning approach is hands-on: read docs → build PoC → test → document → productionize.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Security, Compliance & Governance",
    questions: [
      {
        question: "How do you ensure security compliance in your DevOps pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Ensuring Security Compliance in DevOps Pipelines</strong></h3>
        <p>
          Security compliance starts right inside the CI/CD workflow — not after deployment.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔐 Store all secrets in <strong>Azure Key Vault</strong>, never in plain YAML or code.</li>
          <li>🧩 Integrate <strong>SonarQube</strong> for code quality, <strong>Checkov</strong> or <strong>TFLint</strong> for IaC policy checks, and <strong>Trivy</strong> for image scans.</li>
          <li>🚫 Use pipeline gates to block merges when quality gates or security scans fail.</li>
          <li>📄 Maintain signed build artifacts and enforce <strong>approvals</strong> for production deployments.</li>
          <li>🧠 Apply branch protection rules in Git — no direct commits to main/master.</li>
        </ul>
        <p><strong>In Practice:</strong> Every pipeline I build has static analysis, container scanning, and a mandatory approval gate before PROD deployment — ensuring compliance by design.</p>
      </div>`
      },
      {
        question: "How do you handle access control and permissions (RBAC, IAM, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Access Control & Permissions (RBAC/IAM)</strong></h3>
        <p>
          Follow the principle of <strong>least privilege</strong> — only grant what’s required.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔑 Use <strong>Azure RBAC</strong> roles like Reader, Contributor, Owner — assigned only at the lowest possible scope (resource-group or specific resource).</li>
          <li>👤 For automation, use <strong>Managed Identities</strong> or short-lived Service Principals instead of shared credentials.</li>
          <li>🕵️‍♂️ Periodically review access assignments and remove stale permissions via <strong>Access Reviews</strong>.</li>
          <li>⚙️ Audit changes using Azure Activity Logs & enable <strong>Privileged Identity Management (PIM)</strong> for just-in-time admin access.</li>
        </ul>
        <p><strong>In Practice:</strong> My pipelines run using managed identities bound to a resource group — no static credentials and full audit visibility.</p>
      </div>`
      },
      {
        question: "What’s your process for managing secrets, credentials, or tokens securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Managing Secrets & Credentials Securely</strong></h3>
        <p>
          Secrets lifecycle is handled using <strong>Azure Key Vault</strong> + <strong>pipeline integration</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏦 Store all sensitive data (keys, passwords, tokens) in <strong>Key Vault</strong> with RBAC access policies.</li>
          <li>🔄 Rotate secrets automatically using Key Vault rotation policies or Azure Automation runbooks.</li>
          <li>🔗 Link Key Vault secrets directly into Azure DevOps Library variables.</li>
          <li>🧾 Disable variable logging — use masked variables so secrets never appear in build logs.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain Key Vault per environment (DEV/QA/PROD) and connect it using service connection — secrets are injected dynamically at runtime only.</p>
      </div>`
      },
      {
        question: "How do you monitor policy compliance in Azure environments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>Monitoring Policy Compliance</strong></h3>
        <p>
          Azure Policy and Blueprints ensure resources stay within organizational governance.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏗️ Use <strong>Azure Policy</strong> to enforce allowed SKUs, regions, and mandatory tags.</li>
          <li>⚙️ Enable <strong>DeployIfNotExists</strong> rules to auto-remediate missing configs like Diagnostic Logs or Encryption.</li>
          <li>📊 Track compliance score via <strong>Azure Policy dashboard</strong> or export to Log Analytics for reports.</li>
          <li>🔔 Configure alerts for non-compliance and integrate them with Logic Apps or Teams channels.</li>
        </ul>
        <p><strong>In Practice:</strong> I have automated remediation for missing diagnostics — if any resource violates policy, the fix runs automatically via a Logic App.</p>
      </div>`
      },
      {
        question: "What are your steps to ensure audit readiness in CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📑 <strong>Ensuring CI/CD Audit Readiness</strong></h3>
        <p>
          Every change in the pipeline must be traceable, authorized, and reproducible.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧾 Enable <strong>build retention</strong> and store pipeline run logs & artifacts for at least 6–12 months.</li>
          <li>👥 Maintain approval history — capture who approved deployments, with timestamps.</li>
          <li>🔍 Use <strong>ServiceNow Change IDs</strong> or ticket links within pipeline metadata for traceability.</li>
          <li>📦 Keep all IaC and pipeline YAMLs version-controlled in Git for audit review.</li>
          <li>🧠 Periodic internal audits ensure that each pipeline aligns with organizational policy (e.g., no direct PROD deploys).</li>
        </ul>
        <p><strong>In Practice:</strong> For healthcare projects, I link every production deployment to a ServiceNow Change ID and retain the logs for 1 year.</p>
      </div>`
      },
      {
        question: "How do you implement change management for sensitive deployments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Change Management for Sensitive Deployments</strong></h3>
        <p>
          Sensitive deployments go through strict control — change tickets, approvals, and rollback readiness.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🗓️ All major releases are tied to <strong>ServiceNow change records</strong> with CAB approvals.</li>
          <li>🔐 Define <strong>pre-deploy checklist</strong>: backup confirmation, DR readiness, approval status, and rollback tested.</li>
          <li>⚙️ Pipeline integration ensures deploy job only triggers if change ID is “Approved”.</li>
          <li>📢 Communicate change window, risk, and rollback steps to all stakeholders before the window starts.</li>
          <li>📘 After deployment, update the change record with outcome & attach logs for audit trail.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve integrated Azure Pipelines with ServiceNow — the deploy stage automatically checks for approved Change ID before executing any PROD step.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Behavioral & Soft Skills",
    questions: [
      {
        question: "Tell me about a time you handled pressure calmly.",
        answerHtml: `
      <div class="answer-rich">
        <h3>😌 <strong>Handling Pressure Calmly</strong></h3>
        <p>
          During a critical production outage, an app went down during peak hours. Instead of rushing, I followed our incident process — identified that the backend API was hitting a quota limit.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧠 I quickly enabled autoscaling and temporarily increased limits to restore service.</li>
          <li>📊 After stabilization, performed RCA, created a new alert rule and documented preventive action.</li>
          <li>🤝 Stayed calm, communicated clearly to the team, and kept stakeholders updated every 10 minutes.</li>
        </ul>
        <p><strong>In Practice:</strong> I believe calm communication during pressure reduces mistakes and keeps the team aligned.</p>
      </div>`
      },
      {
        question: "How do you balance multiple priorities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Balancing Multiple Priorities</strong></h3>
        <p>
          I manage priorities using clear visibility and impact-based planning.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🗓️ Maintain a daily task board — separate P1s (urgent) from P2s (important but not urgent).</li>
          <li>📢 Communicate early if new high-priority work appears — re-align tasks transparently with my lead.</li>
          <li>✅ Use short bursts of focus (Pomodoro) for high-cognitive work and automate repetitive tasks to save time.</li>
        </ul>
        <p><strong>In Practice:</strong> I never multitask on critical items; instead, I schedule them and execute one at a time with full focus.</p>
      </div>`
      },
      {
        question: "Describe a time when you disagreed with your manager — how did you handle it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤝 <strong>Disagreement Handled Professionally</strong></h3>
        <p>
          Once my manager wanted to skip automated security scans to meet a deployment deadline.  
          I respectfully disagreed because it could expose compliance risk.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📄 I presented scan history data showing 2 prior issues caught only by automation.</li>
          <li>💬 Suggested a middle path — parallel scan with staged release instead of full skip.</li>
          <li>✅ The compromise worked — no delay, and the pipeline remained compliant.</li>
        </ul>
        <p><strong>In Practice:</strong> I believe respectful disagreement backed by data leads to trust and better outcomes.</p>
      </div>`
      },
      {
        question: "What motivates you the most at work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Motivation at Work</strong></h3>
        <p>
          My motivation comes from <strong>impact and learning</strong> — seeing automation make real business difference.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💡 Building something that saves time or reduces errors keeps me driven.</li>
          <li>📈 Continuous learning — mastering new tools like Terraform, Checkov, or Sentinel excites me.</li>
          <li>🤝 Appreciating collaboration — when a team ships a release smoothly after a long sprint, it’s the best feeling.</li>
        </ul>
        <p><strong>In Practice:</strong> I stay motivated by tracking small wins — every automation I build adds value and satisfaction.</p>
      </div>`
      },
      {
        question: "How do you maintain focus and quality during repetitive work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Maintaining Focus in Repetitive Work</strong></h3>
        <p>
          Repetitive work is an opportunity to automate and improve. I ensure quality through consistency and systemization.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Automate wherever possible — scripts, templates, and standard tasks.</li>
          <li>📋 Use checklists for repeat tasks to avoid human error.</li>
          <li>🧘 Take small breaks and track work visually — keeps mind fresh and focused.</li>
        </ul>
        <p><strong>In Practice:</strong> I automated 70% of a manual VM patching task; it turned a boring routine into a smooth monitored job.</p>
      </div>`
      },
      {
        question: "Tell me about a time you collaborated remotely or across time zones.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Remote Collaboration Across Time Zones</strong></h3>
        <p>
          In my current project, I work with teams in India and Europe. We follow a <strong>“follow-the-sun”</strong> model.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📅 Maintain a shared task tracker (Azure Boards) and daily async updates to bridge time difference.</li>
          <li>💬 Use Teams for structured handoffs — each region leaves end-of-day notes for the next shift.</li>
          <li>📊 Record meetings or use summary notes so no one misses context.</li>
        </ul>
        <p><strong>In Practice:</strong> Clear documentation and async updates ensured 24×7 progress without waiting on others — especially during releases.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. HR & Career-Related Questions",
    questions: [
      {
        question: "Why do you want to switch from your current organization?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Reason for Switching</strong></h3>
        <p>
          I’ve learned a lot in my current role, especially in infrastructure automation and CI/CD pipeline management.  
          However, I’m now looking for an opportunity where I can work on <strong>more complex DevOps environments</strong> — including advanced Azure services, Kubernetes, and security automation.
        </p>
        <p><strong>In short:</strong> My goal is to take on larger-scale challenges and grow technically, rather than just stay within maintenance tasks.</p>
      </div>`
      },
      {
        question: "What are your career goals for the next 2–3 years?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Career Goals</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Build expertise in <strong>Cloud DevOps & Infrastructure as Code</strong> with tools like Terraform, Helm, and Azure DevOps.</li>
          <li>🧠 Get certified in <strong>Azure DevOps Engineer Expert</strong> and <strong>CKA (Kubernetes Admin)</strong>.</li>
          <li>🤝 Contribute to building end-to-end CI/CD ecosystems and lead a small automation team.</li>
        </ul>
        <p><strong>In Practice:</strong> I want to grow from an executor to a solution designer who can own the full DevOps delivery pipeline.</p>
      </div>`
      },
      {
        question: "What kind of company culture do you prefer?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏢 <strong>Preferred Company Culture</strong></h3>
        <p>
          I value a culture that encourages <strong>learning, ownership, and collaboration</strong>.  
          I like teams where communication is open, mistakes are treated as learning, and automation & process improvement are appreciated.
        </p>
        <p><strong>In short:</strong> I enjoy working in a transparent, DevOps-driven culture where innovation and continuous improvement are part of daily work.</p>
      </div>`
      },
      {
        question: "What are your salary expectations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💰 <strong>Salary Expectation</strong></h3>
        <p>
          Based on my experience in Azure, Terraform, and DevOps pipelines, I’m looking for a <strong>competitive salary aligned with market standards</strong> and the responsibilities of the role.
        </p>
        <p>I’m flexible as long as the overall opportunity supports my technical growth and career progression.</p>
      </div>`
      },
      {
        question: "Are you open to relocation or hybrid work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Relocation & Work Mode</strong></h3>
        <p>
          Yes, I’m open to both relocation and hybrid work models if the project requires physical collaboration.  
          I believe face-to-face interaction helps during major releases and cross-team coordination.
        </p>
        <p>For regular operations, I’m equally comfortable working remotely with clear communication and process tracking.</p>
      </div>`
      },
      {
        question: "How do you evaluate job satisfaction beyond salary?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Evaluating Job Satisfaction</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📈 Learning and growth opportunities — chance to work on new tools and architectures.</li>
          <li>👥 Healthy work culture — where feedback and recognition exist.</li>
          <li>⚙️ Technical ownership — freedom to suggest and implement automation improvements.</li>
          <li>🎯 Clear goals and appreciation for impactful work.</li>
        </ul>
        <p><strong>In Practice:</strong> For me, the right work culture and learning curve matter more than just the compensation.</p>
      </div>`
      },
      {
        question: "Why should we hire you instead of other candidates?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔥 <strong>Why Me?</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>💪  Hands-on experience in <strong>Azure, Terraform, YAML Pipelines, and Docker/Kubernetes</strong>.</li>
          <li>⚙️ Strong CI/CD mindset — I build reusable, secure, and auditable pipelines.</li>
          <li>🧠 Analytical thinking — I focus on root-cause and optimization, not just quick fixes.</li>
          <li>🤝 Collaborative approach — I work seamlessly with dev, QA, and infra teams under tight deadlines.</li>
        </ul>
        <p><strong>In Practice:</strong> I can contribute from day one — not just in execution but also in improving pipeline efficiency, automation, and monitoring practices.</p>
      </div>`
      },
      {
        question: "Are you currently working somewhere?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Current Employment</strong></h3>
        <p>
          Yes, I’m currently working at <strong>Litmus Information Systems LLP</strong> as a DevOps Engineer.  
          My responsibilities include VM management, patching, CI/CD pipeline automation, and infrastructure provisioning using Terraform and Azure.
        </p>
        <p><strong>In Practice:</strong> I’ve been managing production-grade pipelines and ensuring stability and compliance across multiple environments.</p>
      </div>`
      },
      {
        question: "What was the reason for leaving your last organization?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Reason for Leaving Previous Organization</strong></h3>
        <p>
          I left my previous organization to explore more modern DevOps practices.  
          My earlier role was stable but limited in terms of automation, containerization, and cloud-native exposure.
        </p>
        <p><strong>In Practice:</strong> I wanted to move from traditional system administration to full DevOps lifecycle work — which I’m now doing and want to take further.</p>
      </div>`
      },
      {
        question: "Do you have any questions for us?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💬 <strong>You can ask following questions to the Interviewer</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚀 How mature is your current DevOps setup — are you using YAML pipelines or classic?</li>
          <li>🧩 What cloud automation tools are primarily used (Terraform, Bicep, ARM)?</li>
          <li>👥 What kind of team structure and collaboration model do you follow for releases?</li>
          <li>📈 How does the organization measure success in DevOps initiatives?</li>
        </ul>
        <p><strong>In Practice:</strong> Asking these shows curiosity and practical interest — not just in the role, but in improving their environment.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Scenario-Based Problem Solving",
    questions: [
      {
        question: "A developer accidentally deleted a resource from production — how would you fix and prevent this permanently?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Recover & Prevent Accidental Deletion</strong></h3>
        <p>
          Immediate recovery + long-term prevention are both required. Act fast to restore service, then close the process gaps.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Immediate steps:</strong>
            <ul>
              <li>1️⃣ Identify scope using <code>Azure Activity Logs</code> (who/what/time).</li>
              <li>2️⃣ Check for soft-delete / recovery point (Storage soft-delete, Key Vault soft-delete, Recovery Services Vault snapshots).</li>
              <li>3️⃣ If backup exists -> restore from snapshot/backup. If not, attempt <code>terraform import</code> to re-adopt resource or recreate from IaC (apply last known good plan).</li>
              <li>4️⃣ Communicate clearly to stakeholders: impact, ETA, and mitigation steps (open incident/ServiceNow ticket).</li>
            </ul>
          </li>
          <li><strong>Post-incident prevention:</strong>
            <ul>
              <li>🛡️ Apply <strong>resource locks</strong> (CanNotDelete / ReadOnly) to critical resources.</li>
              <li>🔐 Enforce <strong>least-privilege RBAC</strong> and use <strong>PIM</strong> for elevated access.</li>
              <li>📦 Keep all infra in <strong>Terraform</strong> (or IaC) and require plan approval before apply — block manual production changes.</li>
              <li>🧭 Add pre-apply validation: require ServiceNow Change ID and manual approver for destructive changes.</li>
              <li>📚 Run a short training and publish a checklist on safe production operations.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> Restore from Recovery Vault if available; otherwise re-create using IaC and then lock the resource and tighten RBAC so it cannot reoccur.</p>
      </div>`
      },
      {
        question: "You found an API failing due to a WAF rule — how do you approach the fix?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Fixing WAF-Related API Failures</strong></h3>
        <p>
          Diagnose first, then implement the minimum-risk corrective action while maintaining security posture.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Investigate:</strong>
            <ul>
              <li>Query WAF logs in Log Analytics: <code>AzureDiagnostics | where Category == \"ApplicationGatewayFirewallLog\"</code> to get ruleId and sample requests.</li>
              <li>Reproduce the request (safe test) to confirm false positive vs real attack.</li>
            </ul>
          </li>
          <li><strong>Mitigate:</strong>
            <ul>
              <li>Temporarily change rule action to <code>Log</code> (not Disabled) or add a scoped exclusion for the specific rule/URI/client IP after risk assessment.</li>
              <li>Create a custom rule or request exception scoped to known good traffic rather than turning off the rule globally.</li>
            </ul>
          </li>
          <li><strong>Harden & Monitor:</strong>
            <ul>
              <li>Tune WAF rules, add positive security rules for known safe paths, and monitor blocked request trends.</li>
              <li>Document the change, add a regression test, and add an alert for repeated false positives.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I log and analyze offending requests, add precise exclusions or custom rules, then monitor for side effects — always preferring narrow changes over global disables.</p>
      </div>`
      },
      {
        question: "You deployed a new version and noticed performance degradation — what steps do you take?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📉 <strong>Performance Regression Handling</strong></h3>
        <p>
          Quick containment, data-driven diagnosis, and safe rollback or fix-and-verify workflow.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Contain:</strong>
            <ul>
              <li>If impact is severe, immediately revert to last known good release (automatic rollback job or manual redeploy of previous artifact).</li>
              <li>Enable additional instances / scale-out temporarily if resource-constrained.</li>
            </ul>
          </li>
          <li><strong>Diagnose:</strong>
            <ul>
              <li>Compare metrics (App Insights traces, request rate, p95 latency, DB query times) between versions.</li>
              <li>Pinpoint slow components using distributed tracing and flamegraphs; inspect recent code changes, third-party library upgrades, and config changes.</li>
            </ul>
          </li>
          <li><strong>Fix & Verify:</strong>
            <ul>
              <li>Deploy targeted fixes to a canary group; run synthetic tests and load tests to validate improvement.</li>
              <li>Promote to full traffic once metrics stabilize.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use canary → monitor → promote flow. If rollback was performed, I run postmortem and create a checklist to catch similar regressions earlier (pre-merge perf smoke).</p>
      </div>`
      },
      {
        question: "How would you plan a zero-downtime deployment for a production application?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🟢 <strong>Zero-Downtime Deployment Plan</strong></h3>
        <p>
          Use traffic-routing strategies, compatibility patterns, and automated validation to avoid service disruption.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Architecture & Compatibility:</strong> Ensure backward-compatible API changes or use feature flags for new behavior.</li>
          <li><strong>Deployment Strategy:</strong>
            <ul>
              <li>Blue-Green or Canary with weighted routing (Front Door, Traffic Manager, App Gateway, or service mesh).</li>
              <li>For DB schema changes, use backward-compatible migrations (expand-contract pattern) and run migrations in two phases.</li>
            </ul>
          </li>
          <li><strong>Validation & Safety:</strong>
            <ul>
              <li>Run automated smoke tests and synthetic transactions after each partial rollout.</li>
              <li>Use health gates and automatic rollback triggers based on error rate / latency thresholds.</li>
            </ul>
          </li>
          <li><strong>Communication & Rollback:</strong>
            <ul>
              <li>Open a deployment war-room, have rollback steps ready, and keep stakeholders informed.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I prefer canary with auto-promote on health metrics. For DB changes, I stage migration and switch flags after verification — ensuring zero downtime for users.</p>
      </div>`
      },
      {
        question: "You need to migrate VMs to the latest SKU due to Azure retirement — what’s your plan?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>VM SKU Migration Plan</strong></h3>
        <p>
          Plan, test, automate, and execute staged migrations with rollback and verification steps.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Assessment:</strong>
            <ul>
              <li>Inventory VMs, dependencies, OS compatibility, drivers, and performance profiles.</li>
              <li>Identify critical apps requiring high-availability handling or special drivers.</li>
            </ul>
          </li>
          <li><strong>Proof-of-Concept:</strong>
            <ul>
              <li>Create test VMs with new SKU and run smoke and performance tests (boot, disk I/O, app tests).</li>
            </ul>
          </li>
          <li><strong>Automation & Execution:</strong>
            <ul>
              <li>Prefer replacement strategy: provision new VM with new SKU, install app/config using scripts or image, join to load balancer, drain old VM, and decommission.</li>
              <li>For stateful VMs, snapshot OS/data disks and attach to new VM if needed (test carefully).</li>
            </ul>
          </li>
          <li><strong>Cutover & Validation:</strong>
            <ul>
              <li>Use staged rollouts (canary VMs) and monitor for 24–48 hours, then proceed in waves.</li>
              <li>Automate the process in pipelines to ensure repeatability and logs for audit.</li>
            </ul>
          </li>
          <li><strong>Communication:</strong> Schedule maintenance windows for stateful migrations and notify stakeholders.</li>
        </ul>
        <p><strong>In Practice:</strong> I avoid in-place resize for critical servers; instead spin up new instances (immutable approach) to test and cut over safely.</p>
      </div>`
      },
      {
        question: "A pipeline is failing due to a service connection issue — how would you debug it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Debugging Service Connection Failures</strong></h3>
        <p>
          Service connection failures are usually auth or permission related — validate credentials, scope, and token state.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Check Logs:</strong> Inspect pipeline logs for HTTP codes (401/403) and error messages.</li>
          <li><strong>Validate Credentials:</strong>
            <ul>
              <li>Confirm service principal / PAT / certificate not expired; rotate if expired.</li>
              <li>Test connection locally via <code>az login --service-principal -u &lt;id&gt; -p &lt;secret&gt; --tenant &lt;tid&gt;</code>.</li>
            </ul>
          </li>
          <li><strong>Verify Permissions & Scope:</strong> Ensure the service principal has required RBAC roles (Contributor/Custom) at the correct scope (subscription/resource group).</li>
          <li><strong>Agent Environment:</strong> Ensure agent can reach the resource (network/NSG, firewall) and environment variables (tenant id, client id) are set correctly.</li>
          <li><strong>Fix & Test:</strong> Update service connection, re-run pipeline, and monitor success. Add synthetic test step in pipeline to validate auth early in job.</li>
        </ul>
        <p><strong>In Practice:</strong> I add a small auth-check job at the start of sensitive pipelines that fails fast with a clear error if the service connection is broken — saves wasted build minutes.</p>
      </div>`
      },
      {
        question: "Your manager asks to reduce monthly Azure cost by 20% — how do you proceed?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Cost Reduction Plan (20%)</strong></h3>
        <p>
          Combine quick wins with medium-term architectural changes: measure first, then optimize.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Discovery:</strong>
            <ul>
              <li>Run Cost Analysis to identify top spenders (VMs, storage, networking, SQL).</li>
              <li>Group costs by project/team for accountability.</li>
            </ul>
          </li>
          <li><strong>Quick Wins (0–30 days):</strong>
            <ul>
              <li>Enable auto-shutdown for non-prod VMs and enforce schedules.</li>
              <li>Delete unattached disks and old snapshots; enable blob lifecycle policies.</li>
              <li>Move infrequently accessed data to Cool/Archive tiers.</li>
            </ul>
          </li>
          <li><strong>Mid-term (30–90 days):</strong>
            <ul>
              <li>Right-size VMs and move steady workloads to Reserved Instances / Savings Plans.</li>
              <li>Use Spot instances for ephemeral batch jobs.</li>
              <li>Consolidate underutilized databases or move to serverless offerings where applicable.</li>
            </ul>
          </li>
          <li><strong>Governance:</strong>
            <ul>
              <li>Set budgets and alerts, enable cost tagging, and implement chargeback/showback per team.</li>
              <li>Automate reports and require justification for new high-cost resources.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> Quick wins often deliver 8–12% savings. Combined with RIs and right-sizing, 20% is achievable within 1–3 months while keeping performance SLAs intact.</p>
      </div>`
      }
    ]
  }

];

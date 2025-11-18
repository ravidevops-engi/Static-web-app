export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const miscellaneousSections = [
{
  title: "1. Cloud Fundamentals",
  questions: [
    {
      question: "What is Cloud Computing in simple terms?",
      answerHtml: `<div class="answer-rich">
        <h3>☁️ <strong>Understanding Cloud Computing</strong></h3>
        <p>Cloud computing means accessing IT resources like servers, storage, databases, or apps over the internet instead of running them on your local machine or data center.</p>
        <p><strong>Simple example:</strong> Instead of buying and maintaining your own server, you rent compute and storage from Azure or AWS and pay only for usage.</p>
        <p><strong>Key idea:</strong> It converts CapEx (hardware) into OpEx (pay-as-you-go service).</p>
      </div>`
    },
    {
      question: "What are the different cloud service models — IaaS, PaaS, SaaS?",
      answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Cloud Service Models</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>IaaS (Infrastructure as a Service):</strong> Provides virtualized infrastructure — VMs, networking, storage. Example: Azure VM, Azure Virtual Network.</li>
          <li><strong>PaaS (Platform as a Service):</strong> Provides platform for app development & deployment. Example: Azure App Service, Azure SQL DB, AKS.</li>
          <li><strong>SaaS (Software as a Service):</strong> End-user ready applications hosted by provider. Example: Office 365, Salesforce.</li>
        </ol>
        <p><strong>In practice:</strong> For DevOps work, I mostly deal with IaaS (VMs, VNets) and PaaS (App Services, AKS).</p>
      </div>`
    },
    {
      question: "What is the difference between Public Cloud, Private Cloud, and Hybrid Cloud?",
      answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Cloud Deployment Models</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Public Cloud:</strong> Shared infrastructure, managed by providers like Azure or AWS. Pay-as-you-go, best for scalability.</li>
          <li><strong>Private Cloud:</strong> Dedicated environment for one organization (on-prem or hosted). Offers more control and compliance.</li>
          <li><strong>Hybrid Cloud:</strong> Mix of public + private. Commonly used for DR or sensitive workloads.</li>
        </ol>
        <p><strong>Example:</strong> I’ve used Hybrid Cloud setups where on-prem AD syncs with Azure AD via Azure AD Connect.</p>
      </div>`
    },
    {
      question: "What are the advantages of cloud computing?",
      answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>Key Benefits of Cloud</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Scalability:</strong> Scale resources up/down easily.</li>
          <li><strong>High Availability:</strong> Redundancy across zones/regions.</li>
          <li><strong>Cost Efficiency:</strong> Pay only for what you use.</li>
          <li><strong>Security & Compliance:</strong> Built-in identity, encryption, RBAC.</li>
          <li><strong>Automation:</strong> Infrastructure as Code (Terraform, ARM, Bicep).</li>
        </ul>
        <p><strong>In real use:</strong> I often scale AKS clusters and VMs dynamically using auto-scaling to optimize cost.</p>
      </div>`
    },
    {
      question: "What is the difference between compute, network, and storage services in cloud?",
      answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Core Cloud Components</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Compute:</strong> Runs your workloads — VMs, App Services, Containers, Functions.</li>
          <li><strong>Network:</strong> Connects resources — VNets, Subnets, Load Balancers, Firewalls.</li>
          <li><strong>Storage:</strong> Persists data — Blob, Disk, File, Queue, Table.</li>
        </ol>
        <p><strong>Example:</strong> In a web app, I use Azure VM (compute), VNet + NSG (network), and Azure Disk or Blob Storage for persistence.</p>
      </div>`
    },
    {
      question: "What are all the Azure compute and network services you’ve worked on?",
      answerHtml: `<div class="answer-rich">
        <h3>💼 <strong>Hands-on Azure Services</strong></h3>
        <p><strong>Compute:</strong> Azure Virtual Machines, App Services, Azure Kubernetes Service (AKS), Function Apps, VM Scale Sets.</p>
        <p><strong>Networking:</strong> Virtual Networks, Subnets, NSGs, Application Gateway, Load Balancer, Private Endpoints, NAT Gateway, VPN Gateway, ExpressRoute.</p>
        <p><strong>Real use:</strong> In a production setup, I used AKS with Azure Application Gateway Ingress Controller (AGIC) and NSGs for fine-grained traffic control.</p>
      </div>`
    },
    {
      question: "What is a Function App, and when is it used?",
      answerHtml: `<div class="answer-rich">
        <h3>⚡ <strong>Azure Function App (Serverless Compute)</strong></h3>
        <p>Function App is a serverless service that runs code in response to events (HTTP requests, timers, queue messages, etc.) without managing infrastructure.</p>
        <p><strong>When to use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>For lightweight automation or event-driven workflows.</li>
          <li>To replace cron jobs or backend triggers.</li>
          <li>To integrate alerts, storage, or API responses quickly.</li>
        </ul>
        <p><strong>Example:</strong> I used Function App to trigger a cleanup task daily based on Storage queue events in a monitoring pipeline.</p>
      </div>`
    },
    {
      question: "What is the purpose of a NAT Gateway or Internet Gateway?",
      answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>NAT Gateway / Internet Gateway</strong></h3>
        <p><strong>NAT Gateway:</strong> Allows private subnet resources (like VMs in private VNets) to access the internet securely for outbound traffic, while keeping them inaccessible from outside.</p>
        <p><strong>Internet Gateway (AWS term):</strong> Enables resources in public subnets to communicate with the internet directly (used in public subnets).</p>
        <p><strong>In Azure:</strong> NAT Gateway = Outbound internet for private subnets, Public IP or App Gateway = inbound access.</p>
        <p><strong>Practical use:</strong> In my setup, AKS nodes in private subnet used NAT Gateway for image pulls from ACR securely.</p>
      </div>`
    },
    {
      question: "What are the redundancy options in Azure for high availability?",
      answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Azure Redundancy & HA Options</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Availability Sets:</strong> Protect VMs from host-level failures.</li>
          <li><strong>Availability Zones:</strong> Isolate resources across physical datacenters in same region.</li>
          <li><strong>Geo-Redundant Storage (GRS):</strong> Replicates data to another region.</li>
          <li><strong>Load Balancers & Traffic Manager:</strong> Distribute workloads globally.</li>
        </ul>
        <p><strong>Real-world:</strong> I deployed production VMs in Availability Zones + used Azure Standard Load Balancer for failover.</p>
      </div>`
    },
    {
      question: "How do you ensure high availability and fault tolerance in the cloud?",
      answerHtml: `<div class="answer-rich">
        <h3>🏆 <strong>Ensuring HA & Fault Tolerance</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Deploy across <strong>Availability Zones / Regions</strong>.</li>
          <li>Use <strong>Load Balancers</strong> for traffic distribution.</li>
          <li>Keep <strong>stateless apps</strong> where possible — use shared backend.</li>
          <li>Implement <strong>auto-scaling</strong> for compute and AKS nodes.</li>
          <li>Enable <strong>backup & replication</strong> (Azure Backup, GRS storage).</li>
        </ol>
        <p><strong>Example:</strong> My AKS setup used multi-zone node pools with Application Gateway and Azure Monitor alerts to auto-scale and maintain 99.9% uptime.</p>
      </div>`
    }
  ]
}
,
{
  title: "2. CI/CD Concepts",
  questions: [
    {
      question: "What is Continuous Integration vs Continuous Deployment?",
      answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>CI vs CD — Core DevOps Flow</strong></h3>
        <p><strong>Continuous Integration (CI):</strong> Developers frequently merge code changes into a shared repo, and automated builds + tests run to validate the code.</p>
        <p><strong>Continuous Deployment (CD):</strong> Extends CI by automatically deploying tested builds to environments (Dev, QA, Prod).</p>
        <p><strong>Example:</strong> In Azure DevOps, my CI pipeline builds code and publishes an artifact, while the CD pipeline picks that artifact and deploys it to AKS or VM via release stages.</p>
        <p><strong>Goal:</strong> Faster releases, consistent quality, and reduced human error.</p>
      </div>`
    },
    {
      question: "What are Environment Variables in CI/CD pipelines?",
      answerHtml: `<div class="answer-rich">
        <h3>🌍 <strong>Environment Variables in Pipelines</strong></h3>
        <p>Environment variables are dynamic values used across pipeline stages or jobs to control behavior without hardcoding values.</p>
        <p><strong>Types:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Pipeline-level variables (global)</li>
          <li>Stage/job-level variables (scoped)</li>
          <li>Secret variables (stored securely in Library or Key Vault)</li>
        </ul>
        <p><strong>Example (YAML):</strong></p>
        <pre><code>variables:
  environment: 'dev'
  app_name: 'my-api'
steps:
  - script: echo "Deploying to &dollar;(environment)"</code></pre>
        <p><strong>In practice:</strong> I maintain variable groups per environment and link them to pipeline stages to keep configurations centralized and secure.</p>
      </div>`
    },
    {
      question: "What is a Rollback and why is it important?",
      answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Rollback — Safety Mechanism</strong></h3>
        <p><strong>Rollback</strong> means reverting the system to a previous stable version when a new deployment fails or causes issues.</p>
        <p><strong>Why important:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Ensures uptime and service reliability.</li>
          <li>Minimizes impact of faulty releases.</li>
          <li>Critical for production-grade CI/CD pipelines.</li>
        </ul>
        <p><strong>Example:</strong> I use versioned artifacts in Azure DevOps — if a deployment fails, CD pipeline redeploys the last successful build automatically.</p>
      </div>`
    },
    {
      question: "What are Artifacts and what is an Artifact Repository?",
      answerHtml: `<div class="answer-rich">
        <h3>📦 <strong>Artifacts in CI/CD</strong></h3>
        <p><strong>Artifact:</strong> A versioned output (build result) that gets passed between pipeline stages — e.g., a .zip, .jar, Docker image, or Helm chart.</p>
        <p><strong>Artifact Repository:</strong> A centralized storage for artifacts — ensures versioning, traceability, and reusability.</p>
        <p><strong>Examples:</strong> Azure Artifacts, Nexus, JFrog Artifactory, or Azure Container Registry (for Docker images).</p>
        <p><strong>In practice:</strong> I use Azure DevOps to publish build outputs and push Docker images to ACR, which are then deployed by CD pipelines.</p>
      </div>`
    },
    {
      question: "Why do we use multiple stages in pipelines?",
      answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Multi-stage Pipelines — Structured Delivery</strong></h3>
        <p>Stages break down a pipeline into logical parts like Build → Test → Deploy → Validate, providing better control and visibility.</p>
        <p><strong>Benefits:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Isolation between environments (Dev/QA/Prod).</li>
          <li>Manual approvals between critical transitions.</li>
          <li>Parallel execution for faster delivery.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>stages:
  - stage: Build
  - stage: Deploy_Dev
  - stage: Deploy_Prod</code></pre>
        <p><strong>In real projects:</strong> My pipelines promote builds through Dev → QA → Prod, each with dedicated variable groups and approvals.</p>
      </div>`
    },
    {
      question: "How do you promote changes from lower to production environment safely?",
      answerHtml: `<div class="answer-rich">
        <h3>🧱 <strong>Safe Promotion Strategy</strong></h3>
        <p><strong>Goal:</strong> Move tested builds from Dev to Prod without re-building or re-packaging.</p>
        <p><strong>Strategy I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Use <strong>artifacts</strong> from CI — never rebuild for prod.</li>
          <li>Deploy sequentially: Dev → QA → UAT → Prod.</li>
          <li>Enable <strong>manual approvals</strong> for critical environments.</li>
          <li>Use <strong>variable groups</strong> or Key Vault for environment-specific configs.</li>
          <li>Run <strong>smoke tests</strong> and health checks before marking deployment successful.</li>
        </ol>
        <p><strong>Example:</strong> In my Azure DevOps pipeline, only approved builds from UAT stage are promoted to Prod using same artifact version to ensure consistency.</p>
      </div>`
    },
    {
      question: "How do you handle secrets and configurations across pipeline environments?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Secure Secrets & Config Management</strong></h3>
        <p><strong>Best practices I follow:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Key Vault</strong> for secrets like passwords, tokens, and keys.</li>
          <li>Integrate Key Vault with variable groups in Azure DevOps pipelines.</li>
          <li>Mark secrets as “hidden” or “locked” so they don’t appear in logs.</li>
          <li>Use environment variables to inject secrets dynamically at runtime.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>env:
  DB_PASS: &dollar;(dbPassword)  # fetched from Key Vault
steps:
  - script: echo "Deploying using secret safely"</code></pre>
        <p><strong>In practice:</strong> I always segregate secrets by environment and use RBAC to restrict access in prod pipelines.</p>
      </div>`
    },
    {
      question: "What is the difference between Self-hosted and Microsoft-hosted agents?",
      answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Agent Types in Azure Pipelines</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>Microsoft-hosted</th><th>Self-hosted</th></tr>
          <tr><td>Hosted by</td><td>Azure DevOps (ephemeral)</td><td>Your own server/VM</td></tr>
          <tr><td>Custom Tools</td><td>Limited (preinstalled set)</td><td>Full control over tools & versions</td></tr>
          <tr><td>Speed</td><td>Slower for large builds</td><td>Faster (persistent caching)</td></tr>
          <tr><td>Security</td><td>Runs in shared pool</td><td>Private network, isolated execution</td></tr>
          <tr><td>Cost</td><td>Free limited minutes</td><td>Runs on your infra (no minute limit)</td></tr>
        </table>
        <p><strong>In real projects:</strong> I use self-hosted agents for private VNet deployments and Microsoft-hosted for public code builds.</p>
      </div>`
    },
    {
      question: "Why do you prefer Self-hosted agents over Microsoft-hosted?",
      answerHtml: `<div class="answer-rich">
        <h3>💪 <strong>Why Self-hosted Agents</strong></h3>
        <p><strong>Reasons I prefer self-hosted agents:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Direct access to private VNets and internal services.</li>
          <li>Faster builds — agents reuse cached dependencies.</li>
          <li>Full control over installed tools, versions, and runtime.</li>
          <li>No dependency on Microsoft-hosted capacity or build queue delays.</li>
          <li>Can manage custom runners for secure environments.</li>
        </ul>
        <p><strong>Example:</strong> For my healthcare client, I deployed self-hosted Linux agents in a secured subnet to build Docker images and deploy directly to AKS without exposing any endpoint publicly.</p>
      </div>`
    }
  ]
}
,
{
  title: "3. Deployment Strategies & Testing",
  questions: [
    {
      question: "What is Blue-Green Deployment strategy?",
      answerHtml: `<div class="answer-rich">
        <h3>🔵🟢 <strong>Blue-Green Deployment — Zero-Downtime Release</strong></h3>
        <p><strong>Blue-Green Deployment</strong> maintains two identical environments — one active (Blue) and one idle (Green). The new version is deployed to Green, tested, and then traffic is switched from Blue → Green instantly.</p>
        <p><strong>Benefits:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Zero downtime deployment.</li>
          <li>Instant rollback (just redirect traffic back).</li>
          <li>No impact on end-users during deployment.</li>
        </ul>
        <p><strong>Example:</strong> In Azure, I use two App Service slots (Production = Blue, Staging = Green). After validation, I swap slots to release instantly.</p>
        <pre><code>az webapp deployment slot swap --resource-group myrg --name myapp --slot staging --target-slot production</code></pre>
      </div>`
    },
    {
      question: "What is Canary Deployment?",
      answerHtml: `<div class="answer-rich">
        <h3>🐤 <strong>Canary Deployment — Controlled Rollout</strong></h3>
        <p><strong>Canary Deployment</strong> releases the new version to a small percentage of users first (like 5–10%), monitors performance, and then gradually increases rollout if stable.</p>
        <p><strong>Benefits:</strong> Reduces risk — any issue affects only a subset of users.</p>
        <p><strong>Example:</strong> I implemented canary rollout in AKS using ingress rules — routing 10% of traffic to new pod version and gradually scaling it up via Helm values.</p>
        <pre><code>annotations:
  nginx.ingress.kubernetes.io/canary: "true"
  nginx.ingress.kubernetes.io/canary-weight: "10"</code></pre>
      </div>`
    },
    {
      question: "How do you ensure zero-downtime deployments?",
      answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Zero-Downtime Deployment Strategy</strong></h3>
        <p><strong>Steps I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Use <strong>load balancers</strong> or traffic managers to shift traffic gradually.</li>
          <li>Implement <strong>Blue-Green or Rolling deployments</strong> for AKS or App Services.</li>
          <li>Run <strong>health probes</strong> to ensure new version is live before switching traffic.</li>
          <li>Leverage <strong>readiness/liveness probes</strong> in Kubernetes for pod validation.</li>
          <li>Keep database migrations backward-compatible.</li>
        </ol>
        <p><strong>Example:</strong> My production AKS used RollingUpdate strategy — always kept 2 pods running while updating one, ensuring 100% uptime.</p>
      </div>`
    },
    {
      question: "What is Load Testing vs Stress Testing?",
      answerHtml: `<div class="answer-rich">
        <h3>📊 <strong>Load vs Stress Testing</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>Load Testing</th><th>Stress Testing</th></tr>
          <tr><td>Purpose</td><td>Check performance under expected traffic</td><td>Check system behavior under extreme load</td></tr>
          <tr><td>Goal</td><td>Measure response time & throughput</td><td>Find breaking point or failure threshold</td></tr>
          <tr><td>Outcome</td><td>Optimized resource usage</td><td>Improved stability & recovery</td></tr>
        </table>
        <p><strong>Example:</strong> I used JMeter for load testing API performance and stressed it using Locust to verify AKS auto-scaling triggers correctly under peak load.</p>
      </div>`
    },
    {
      question: "Name some testing tools you have used (JMeter, Postman, Selenium, etc.).",
      answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>Testing Tools I've Worked With</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Postman:</strong> API functional testing & environment automation.</li>
          <li><strong>JMeter:</strong> Load and stress testing for APIs & microservices.</li>
          <li><strong>Selenium:</strong> UI automation for web apps.</li>
          <li><strong>k6 / Locust:</strong> Cloud-native performance testing.</li>
          <li><strong>SonarQube:</strong> Code quality & static analysis integrated in CI pipeline.</li>
        </ul>
        <p><strong>In practice:</strong> I integrate Postman collections and JMeter scripts directly in Azure DevOps CI/CD for automated testing after deployment.</p>
      </div>`
    },
    {
      question: "What is SAST and DAST in security testing?",
      answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>SAST vs DAST</strong></h3>
        <p><strong>SAST (Static Application Security Testing):</strong> Analyzes source code or binaries without running the app — finds vulnerabilities early (e.g., SQL Injection, hardcoded secrets).</p>
        <p><strong>DAST (Dynamic Application Security Testing):</strong> Tests the running app externally — mimics real attack behavior.</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>SAST</th><th>DAST</th></tr>
          <tr><td>When</td><td>During development (CI phase)</td><td>After deployment (staging/prod)</td></tr>
          <tr><td>Input</td><td>Source code</td><td>Running application</td></tr>
          <tr><td>Tools</td><td>SonarQube, Checkov</td><td>OWASP ZAP, Burp Suite</td></tr>
        </table>
        <p><strong>Example:</strong> I run SonarQube (SAST) during CI for code checks and OWASP ZAP (DAST) post-deploy for endpoint vulnerabilities.</p>
      </div>`
    },
    {
      question: "How do you test and validate infrastructure post-deployment?",
      answerHtml: `<div class="answer-rich">
        <h3>🧾 <strong>Infrastructure Validation After Deployment</strong></h3>
        <p><strong>Validation checks I perform:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Verify resources via Terraform output or Azure CLI (e.g., subnets, NSGs, IPs).</li>
          <li>Run <strong>smoke tests</strong> for connectivity (ping, curl, port checks).</li>
          <li>Validate <strong>monitoring & logging</strong> (Log Analytics, Grafana, Azure Monitor).</li>
          <li>Use <strong>automated scripts</strong> or Function Apps for post-deploy health checks.</li>
          <li>Cross-verify tags, policies, and RBAC roles applied correctly.</li>
        </ul>
        <p><strong>Example:</strong> After each deployment, I trigger a PowerShell script in pipeline to validate that all VMs are reporting to Log Analytics workspace.</p>
      </div>`
    },
    {
      question: "How do you troubleshoot if your web app is slow — list 5 checks you’ll perform.",
      answerHtml: `<div class="answer-rich">
        <h3>🐢 <strong>Troubleshooting a Slow Web App</strong></h3>
        <p><strong>Top 5 checks I perform:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Application Metrics:</strong> Check CPU, memory, and request latency in Azure Monitor or App Insights.</li>
          <li><strong>Database Performance:</strong> Look for slow queries or DTU utilization in SQL Insights.</li>
          <li><strong>Network Latency:</strong> Use NSG flow logs and Application Gateway metrics for slow hops.</li>
          <li><strong>Dependency Calls:</strong> Analyze API dependency map in Application Insights for slow downstream services.</li>
          <li><strong>Code & Logs:</strong> Review logs for exceptions or blocking calls; integrate with Log Analytics / Grafana.</li>
        </ol>
        <p><strong>Example:</strong> Once I reduced app latency by 40% by optimizing a backend API call identified via Application Insights dependency tracking.</p>
      </div>`
    }
  ]
}
,
{
  title: "4. DevSecOps & Security",
  questions: [
    {
      question: "What is DevSecOps and why is it important?",
      answerHtml: `<div class="answer-rich">
        <h3>🛡️ <strong>DevSecOps — Security Shift-Left</strong></h3>
        <p><strong>DevSecOps</strong> means integrating security practices into every phase of the DevOps lifecycle — from coding to deployment — instead of treating it as a separate process.</p>
        <p><strong>Why it’s important:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Detects vulnerabilities early (cheaper to fix).</li>
          <li>Ensures compliance & governance (e.g., HIPAA, ISO, GDPR).</li>
          <li>Protects infrastructure, code, and data from breaches.</li>
        </ul>
        <p><strong>In practice:</strong> I integrate tools like SonarQube (code scan), Trivy (image scan), and Checkov (IaC scan) directly into CI/CD pipelines to catch issues before production.</p>
      </div>`
    },
    {
      question: "How do you integrate security scanning in CI/CD pipelines?",
      answerHtml: `<div class="answer-rich">
        <h3>🔍 <strong>Integrating Security Scans in CI/CD</strong></h3>
        <p><strong>Approach I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Code scanning (SAST):</strong> SonarQube integrated in build stage.</li>
          <li><strong>Dependency scanning:</strong> Use tools like Snyk or Trivy to check vulnerable libraries.</li>
          <li><strong>Container image scanning:</strong> Trivy runs after Docker build to check OS and package CVEs.</li>
          <li><strong>Infrastructure scanning:</strong> Checkov scans Terraform or ARM templates before apply.</li>
          <li><strong>DAST scanning:</strong> OWASP ZAP runs after deployment to test live endpoints.</li>
        </ol>
        <p><strong>Example (YAML snippet):</strong></p>
        <pre><code>- task: trivy@1
  inputs:
    command: 'image'
    imageName: '&dollar;(ACR_NAME).azurecr.io/app:&dollar;(Build.BuildId)'</code></pre>
        <p><strong>Outcome:</strong> Pipeline fails automatically if CVEs exceed critical threshold.</p>
      </div>`
    },
    {
      question: "What is the difference between SAST (Static) and DAST (Dynamic) analysis?",
      answerHtml: `<div class="answer-rich">
        <h3>🔎 <strong>SAST vs DAST</strong></h3>
        <p><strong>SAST (Static Application Security Testing):</strong> Analyzes code or binaries before execution — identifies insecure code patterns, hardcoded credentials, etc.</p>
        <p><strong>DAST (Dynamic Application Security Testing):</strong> Scans the running app externally to simulate attacks and detect runtime vulnerabilities.</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>SAST</th><th>DAST</th></tr>
          <tr><td>Stage</td><td>During Build (Pre-deployment)</td><td>During Runtime (Post-deployment)</td></tr>
          <tr><td>Focus</td><td>Source code weaknesses</td><td>Runtime vulnerabilities</td></tr>
          <tr><td>Tools</td><td>SonarQube, Checkov</td><td>OWASP ZAP, Burp Suite</td></tr>
        </table>
        <p><strong>In practice:</strong> I run SonarQube (SAST) in CI and OWASP ZAP (DAST) automatically after app deployment in staging.</p>
      </div>`
    },
    {
      question: "How do you secure private databases or storage accounts in Azure?",
      answerHtml: `<div class="answer-rich">
        <h3>🔐 <strong>Securing Databases & Storage Accounts</strong></h3>
        <p><strong>Steps I follow for securing data services:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Disable public access completely.</li>
          <li>Use <strong>Private Endpoints</strong> or <strong>Service Endpoints</strong> to connect securely within VNet.</li>
          <li>Enable <strong>Firewall Rules</strong> to allow only trusted IPs or VNets.</li>
          <li>Use <strong>Azure RBAC</strong> and Managed Identities instead of credentials.</li>
          <li>Enable <strong>Encryption:</strong> at-rest (Storage Service Encryption) and in-transit (TLS/SSL).</li>
        </ul>
        <p><strong>Example:</strong> I connect AKS pods to Azure SQL via Private Endpoint — no public exposure, all traffic stays inside VNet.</p>
      </div>`
    },
    {
      question: "How do you give Reader access for Cosmos DB, and what’s the role name?",
      answerHtml: `<div class="answer-rich">
        <h3>📘 <strong>Cosmos DB — Reader Access</strong></h3>
        <p>Access control in Cosmos DB is managed using Azure RBAC roles.</p>
        <p><strong>To give read-only access:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Go to <strong>Azure Portal → Cosmos DB → Access Control (IAM)</strong>.</li>
          <li>Click <strong>Add Role Assignment</strong>.</li>
          <li>Select role: <strong>Cosmos DB Account Reader Role</strong>.</li>
          <li>Assign it to the target user, group, or service principal.</li>
        </ol>
        <pre><code>az role assignment create \\
  --assignee user@domain.com \\
  --role "Cosmos DB Account Reader Role" \\
  --scope /subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.DocumentDB/databaseAccounts/{account}</code></pre>
        <p><strong>In real use:</strong> I grant this role to automation service principals to read DB metadata without write permissions.</p>
      </div>`
    },
    {
      question: "How do you ensure DB access is private and not publicly accessible?",
      answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>Private Database Access — No Public Exposure</strong></h3>
        <p><strong>Steps I implement:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Disable “Allow public network access”.</li>
          <li>Create <strong>Private Endpoint</strong> in same VNet/subnet as app.</li>
          <li>Restrict inbound rules using <strong>NSGs</strong>.</li>
          <li>Use <strong>Managed Identity</strong> for authentication — no secrets.</li>
          <li>Validate via <code>nslookup</code> — should resolve to <code>privatelink.database.windows.net</code>.</li>
        </ul>
        <p><strong>Example:</strong> My AKS and App Service connect to Azure SQL only via Private Endpoint — all internet ingress blocked at NSG level.</p>
      </div>`
    },
    {
      question: "What are the best practices for key management and network isolation?",
      answerHtml: `<div class="answer-rich">
        <h3>🗝️ <strong>Key Management & Network Isolation Best Practices</strong></h3>
        <p><strong>Key Management:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Store keys and secrets in <strong>Azure Key Vault</strong>.</li>
          <li>Enable <strong>Soft Delete</strong> and <strong>Purge Protection</strong> for Key Vault.</li>
          <li>Use <strong>Managed Identity</strong> to access Key Vault — no plaintext secrets.</li>
        </ul>
        <p><strong>Network Isolation:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Deploy workloads inside <strong>VNets</strong> and use <strong>NSGs</strong> to control traffic.</li>
          <li>Use <strong>Private Links</strong> for PaaS resources like Storage, DB, and Key Vault.</li>
          <li>Block all inbound 0.0.0.0/0 traffic unless explicitly required.</li>
        </ul>
        <p><strong>Example:</strong> I configured Key Vault with private endpoint + RBAC-only access; app retrieves secrets using its system-assigned identity over private VNet.</p>
      </div>`
    },
    {
      question: "What are the five pillars of the Azure Well-Architected Framework?",
      answerHtml: `<div class="answer-rich">
        <h3>🏛️ <strong>Azure Well-Architected Framework — 5 Pillars</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Reliability:</strong> Design for high availability, redundancy, and disaster recovery.</li>
          <li><strong>Security:</strong> Implement least privilege, encryption, and network isolation.</li>
          <li><strong>Cost Optimization:</strong> Use budgets, auto-scaling, and right-sizing.</li>
          <li><strong>Operational Excellence:</strong> Automate, monitor, and define clear runbooks.</li>
          <li><strong>Performance Efficiency:</strong> Choose right SKUs, caching, and scaling strategies.</li>
        </ol>
        <p><strong>In practice:</strong> I apply these pillars as design checks before production rollout — especially around reliability, cost, and security validations.</p>
      </div>`
    }
  ]
}
,
{
  title: "5. Architecture, Networking & Azure Setup",
  questions: [
    {
      question: "What is a Hub-and-Spoke Architecture and which services are required to build it?",
      answerHtml: `<div class="answer-rich">
        <h3>🧭 <strong>Hub-and-Spoke — Centralized Network Topology</strong></h3>
        <p>Hub-and-Spoke is a recommended Azure network pattern where a central <strong>hub VNet</strong> hosts shared services (firewall, VPN/ExpressRoute, DNS, monitoring) and multiple <strong>spoke VNets</strong> host workloads. Spokes peer with hub and not with each other (traffic flows via hub).</p>
        <p><strong>Core services typically deployed in the hub:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Azure Firewall / NVA (centralized egress, filtering, logging)</li>
          <li>VPN Gateway or ExpressRoute Gateway (on-prem connectivity)</li>
          <li>Azure Bastion (secure RDP/SSH access)</li>
          <li>Private DNS / Azure DNS forwarding</li>
          <li>Shared monitoring & logging (Log Analytics, Sentinel)</li>
        </ul>
        <p><strong>Why use it:</strong> Centralised security, consistent egress control, scale, and easier governance across subscriptions/environments.</p>
      </div>`
    },
    {
      question: "When you set up a hub-spoke model, what key components must you deploy?",
      answerHtml: `<div class="answer-rich">
        <h3>🔧 <strong>Key Components for Hub-Spoke Setup</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Hub VNet:</strong> Host shared services and gateways.</li>
          <li><strong>Spoke VNets:</strong> Each environment/app in its own spoke for isolation.</li>
          <li><strong>VNet Peering:</strong> Peer spokes to hub (use hub as central transit).</li>
          <li><strong>Azure Firewall / NVA:</strong> Centralized policy, NAT, logging to Log Analytics.</li>
          <li><strong>Gateway (VPN/ExpressRoute):</strong> On-prem connectivity.</li>
          <li><strong>Route Tables (UDR):</strong> Direct traffic to firewall/NVA for inspection.</li>
          <li><strong>Monitoring & DNS:</strong> Log Analytics workspace, private DNS zones with forwarding.</li>
        </ol>
        <p><strong>Implementation tip:</strong> Use automation (Terraform/ARM/Bicep) to enforce consistent naming, NSG rules, and UDRs across spokes.</p>
      </div>`
    },
    {
      question: "What is Azure CNI Overlay, and why do we use it?",
      answerHtml: `<div class="answer-rich">
        <h3>🌐 <strong>Azure CNI Overlay — Container Networking Option</strong></h3>
        <p><strong>Azure CNI</strong> provides pod IPs that are routable in the VNet (each pod gets an IP from VNet). <strong>Azure CNI Overlay</strong> is an overlay-mode variant used to reduce VNet IP consumption by encapsulating pod traffic and allowing more flexible IP management.</p>
        <p><strong>Why use overlay:</strong> When your VNet IP space is constrained or you want to run large clusters without exhausting subnet IPs — overlay gives you an encapsulated network plane so pods do not require unique VNet IPs for every pod.</p>
        <p><strong>Practical note:</strong> Choose overlay when addressing is tight and you still need network policies and VNet connectivity — otherwise default Azure CNI (native) gives simpler routing and easier VNet integration.</p>
      </div>`
    },
    {
      question: "Why Azure CNI Overlay and not other networking models?",
      answerHtml: `<div class="answer-rich">
        <h3>⚖️ <strong>Choosing Azure CNI Overlay — Trade-offs</strong></h3>
        <p><strong>When overlay is preferred:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Subnet IP exhaustion is a real constraint (large number of pods).</li>
          <li>You still need network policies but cannot allocate huge VNet ranges.</li>
          <li>Want to limit allocation of VNet IPs per pod for cost/management reasons.</li>
        </ul>
        <p><strong>When not to use overlay:</strong> If you need full native IP visibility (easier troubleshooting) or simple VNet routing, native Azure CNI or kubenet can be a better fit.</p>
        <p><strong>In practice:</strong> I evaluate IP requirements, security controls, and operational complexity — choose overlay only if it solves IP-scarcity without adding too much troubleshooting overhead.</p>
      </div>`
    },
    {
      question: "What is an API Gateway, and how does it differ from Application Gateway?",
      answerHtml: `<div class="answer-rich">
        <h3>🔁 <strong>API Gateway vs Application Gateway</strong></h3>
        <p><strong>API Gateway (e.g., Azure API Management):</strong> Focused on API lifecycle — routing, versioning, request transformation, authentication, rate-limiting, usage plans, analytics and developer portal.</p>
        <p><strong>Application Gateway (Layer 7 load balancer + WAF):</strong> Provides HTTP/HTTPS load balancing, SSL termination, path-based routing, Web Application Firewall. Not focused on API management features like policies or developer portal.</p>
        <p><strong>When to use which:</strong> Use API Gateway when you need API policies, monetization, quotas, and developer experience. Use Application Gateway when you need L7 load balancing + WAF for web apps.</p>
      </div>`
    },
    {
      question: "What are Private Endpoints and how do they improve security?",
      answerHtml: `<div class="answer-rich">
        <h3>🔒 <strong>Private Endpoints — Private Link Connectivity</strong></h3>
        <p>Private Endpoints (Azure Private Link) assign a private IP in your VNet to a PaaS resource (Storage, SQL, Cosmos DB, Key Vault). Traffic between your VNet and the service traverses the Azure backbone — no public internet.</p>
        <p><strong>Security benefits:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Eliminates public exposure of PaaS endpoints.</li>
          <li>Works with NSGs and private DNS (full traffic control).</li>
          <li>Better compliance posture (data plane stays inside VNet).</li>
        </ul>
        <p><strong>Example:</strong> I attach private endpoint for Azure SQL so only app subnets can reach DB; public network access is disabled.</p>
      </div>`
    },
    {
      question: "What is a NAT Gateway, and how does it differ from a Load Balancer?",
      answerHtml: `<div class="answer-rich">
        <h3>📡 <strong>NAT Gateway vs Load Balancer</strong></h3>
        <p><strong>NAT Gateway:</strong> Provides outbound internet connectivity for resources in a private subnet using a set of public IPs — ideal for predictable, scalable SNAT and preserving source IP mapping.</p>
        <p><strong>Load Balancer (Standard):</strong> Distributes inbound (and optionally outbound) traffic across backend instances; used for high-availability and scaling of services.</p>
        <p><strong>Key difference:</strong> NAT Gateway is primarily for controlled outbound SNAT from private resources. Load Balancer is for distributing inbound traffic and health-probing backends (and can do outbound SNAT in some configurations, but not its principal purpose).</p>
        <p><strong>Practical use:</strong> I use NAT Gateway for clusters in private subnets to pull images and call external APIs; Application Gateway / Load Balancer handles incoming client traffic.</p>
      </div>`
    },
    {
      question: "What is the purpose of a Function App in Azure architecture?",
      answerHtml: `<div class="answer-rich">
        <h3>⚡ <strong>Function App — Serverless / Event-driven Compute</strong></h3>
        <p>Function App hosts serverless functions to run small units of code in response to events (HTTP, queue, timer, Event Grid). Use when you need quick glue logic, light ETL, or event-driven automation without managing servers.</p>
        <p><strong>Common uses:</strong> Webhook handlers, scheduled jobs, automated remediation, message processing, or lightweight data transformations.</p>
        <p><strong>Example:</strong> I use Function Apps to process Service Bus messages, run nightly housekeeping, and trigger autoscaling decisions based on custom metrics.</p>
      </div>`
    },
    {
      question: "What message services have you used in Azure (Event Grid, Service Bus, etc.)?",
      answerHtml: `<div class="answer-rich">
        <h3>📨 <strong>Azure Messaging Services — Real Use</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Event Grid:</strong> Pub/sub for lightweight event routing (serverless triggers, reactive integrations).</li>
          <li><strong>Service Bus:</strong> Enterprise messaging with queues/topics, FIFO, transactions — good for guaranteed delivery and complex workflows.</li>
          <li><strong>Event Hubs:</strong> Big data / telemetry ingestion (high-throughput streaming).</li>
          <li><strong>Storage Queues:</strong> Simple queueing for lightweight background jobs.</li>
        </ul>
        <p><strong>In practice:</strong> I used Event Grid to trigger Function Apps on blob creation, Service Bus topics for order processing across microservices, and Event Hubs for telemetry ingestion into Stream Analytics.</p>
      </div>`
    },
    {
      question: "How do you manage access and permissions across Azure subscriptions?",
      answerHtml: `<div class="answer-rich">
        <h3>🛂 <strong>Access & Permission Management Across Subscriptions</strong></h3>
        <p><strong>Controls and patterns I use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure AD RBAC:</strong> Assign roles at subscription / resource-group / resource scope with least privilege.</li>
          <li><strong>Management Groups:</strong> Group subscriptions for policy and role inheritance.</li>
          <li><strong>Azure Policy & Blueprints:</strong> Enforce guardrails and deploy baseline resources across subscriptions.</li>
          <li><strong>Privileged Identity Management (PIM):</strong> Time-bound elevation for critical roles.</li>
          <li><strong>Cross-tenant / delegated ops:</strong> Azure Lighthouse for managing customer tenants securely.</li>
        </ul>
        <p><strong>Quick CLI example — assign role to a service principal at subscription scope:</strong></p>
        <pre><code>az role assignment create \\
  --assignee <appId-or-objectId> \\
  --role "Contributor" \\
  --scope /subscriptions/{subscriptionId}</code></pre>
        <p><strong>Operational tip:</strong> Keep platform/service principals in a central identity subscription and use managed identities for resource-to-resource access to avoid credential sprawl.</p>
      </div>`
    }
  ]
}
,
{
  title: "6. Monitoring, Performance & Optimization",
  questions: [
    {
      question: "How do you troubleshoot performance issues in microservices?",
      answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Troubleshooting Microservices Performance</strong></h3>
        <p><strong>Approach I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Check application metrics:</strong> CPU, memory, thread count, request latency per service via Application Insights or Prometheus.</li>
          <li><strong>Trace inter-service calls:</strong> Use distributed tracing (Application Insights, Jaeger, or OpenTelemetry) to identify slow dependencies.</li>
          <li><strong>Review logs:</strong> Use centralized logging (Log Analytics / ELK) for exceptions or high-latency endpoints.</li>
          <li><strong>Database layer:</strong> Analyze query execution time, missing indexes, connection pool saturation.</li>
          <li><strong>Network latency:</strong> Inspect API Gateway or ingress rules, DNS resolution, or misconfigured load balancers.</li>
        </ol>
        <p><strong>Example:</strong> Once I isolated a bottleneck where one microservice’s API retries caused cascading delays — fixed using proper circuit breaker and retry policies in code.</p>
      </div>`
    },
    {
      question: "What are the key metrics to monitor for production health?",
      answerHtml: `<div class="answer-rich">
        <h3>📊 <strong>Production Health Monitoring Metrics</strong></h3>
        <p><strong>Key Metrics I always track:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Availability:</strong> Uptime, failed requests, service response codes.</li>
          <li><strong>Performance:</strong> Response time (P50, P95, P99), latency, throughput (req/sec).</li>
          <li><strong>Resource Utilization:</strong> CPU, memory, disk I/O, network I/O.</li>
          <li><strong>App Health:</strong> Dependency calls, queue backlog, error rates.</li>
          <li><strong>Business KPIs:</strong> Transaction rate, user sessions, conversion drop.</li>
        </ul>
        <p><strong>Tools:</strong> Azure Monitor, Application Insights, Grafana dashboards, and Prometheus exporters for deep visibility.</p>
      </div>`
    },
    {
      question: "How do you identify and fix bottlenecks in web applications?",
      answerHtml: `<div class="answer-rich">
        <h3>🚦 <strong>Finding & Fixing Web App Bottlenecks</strong></h3>
        <p><strong>Step-by-step approach:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Measure end-to-end latency:</strong> Use Application Insights “Performance” blade or APM tools.</li>
          <li><strong>Analyze dependencies:</strong> Check DB queries, external API latency, or cache misses.</li>
          <li><strong>Profile code:</strong> Use Application Insights Profiler or VS Code profiling tools for method-level delays.</li>
          <li><strong>Enable caching:</strong> Add Redis or CDN to offload heavy static content.</li>
          <li><strong>Scale out:</strong> Introduce horizontal scaling or load balancing if CPU/memory saturation is consistent.</li>
        </ol>
        <p><strong>Example:</strong> Optimized an Azure Web App by enabling Redis caching + indexing key DB columns, reducing response time from 1.8s → 400ms.</p>
      </div>`
    },
    {
      question: "How do you integrate monitoring and alerting for performance degradation?",
      answerHtml: `<div class="answer-rich">
        <h3>🔔 <strong>Monitoring & Alert Integration</strong></h3>
        <p><strong>Typical setup I use:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Collect metrics:</strong> Application Insights, Azure Monitor, or Prometheus scrape targets.</li>
          <li><strong>Create Alerts:</strong> Define thresholds (e.g., CPU > 80%, latency > 2s, error rate > 5%).</li>
          <li><strong>Action Groups:</strong> Send alerts to Teams, email, webhook, or Logic App for automation.</li>
          <li><strong>Visual Dashboards:</strong> Use Grafana or Azure Dashboards for real-time visibility.</li>
          <li><strong>Integrate with CI/CD:</strong> Stop deployment if alert state is critical (health gate).</li>
        </ol>
        <p><strong>Example:</strong> I configured Azure Monitor alerts that call a Logic App webhook → triggers Function App → scales up AKS nodes dynamically on sustained CPU > 75%.</p>
      </div>`
    },
    {
      question: "Can we configure auto-scaling vertically in Azure?",
      answerHtml: `<div class="answer-rich">
        <h3>📈 <strong>Vertical Auto-scaling in Azure</strong></h3>
        <p>Vertical scaling = increasing resource capacity (CPU/RAM) of an existing instance.</p>
        <p><strong>Azure limitation:</strong> Azure doesn’t support true automatic vertical scaling for VMs — resizing requires a restart.</p>
        <p><strong>However:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>For <strong>App Services:</strong> You can auto-scale vertically using scale-up rules in portal (manual trigger or automation runbook).</li>
          <li>For <strong>VMs:</strong> Use Azure Automation or Logic Apps to resize during off-peak hours based on metrics.</li>
        </ul>
        <p><strong>In practice:</strong> I prefer horizontal scaling (VMSS / AKS) since it’s faster and zero-downtime compared to vertical resize.</p>
      </div>`
    },
    {
      question: "How do you ensure cost optimization for resources?",
      answerHtml: `<div class="answer-rich">
        <h3>💰 <strong>Cost Optimization Strategies</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Right-sizing:</strong> Review usage metrics monthly; downsize underutilized VMs.</li>
          <li><strong>Auto-shutdown:</strong> Enable auto-shutdown for non-prod environments.</li>
          <li><strong>Reserved Instances:</strong> Buy RIs or Savings Plans for predictable workloads.</li>
          <li><strong>Spot VMs:</strong> Use for non-critical workloads or build agents.</li>
          <li><strong>Storage tiering:</strong> Move cold data to Cool or Archive tier.</li>
          <li><strong>Budgets & Alerts:</strong> Create budgets in Azure Cost Management with thresholds.</li>
        </ul>
        <p><strong>Example:</strong> Reduced cost by 30% by enabling auto-shutdown on Dev/Test VMs and moving logs to archive tier after 30 days.</p>
      </div>`
    },
    {
      question: "What tools do you use for performance testing (e.g., K6, JMeter)?",
      answerHtml: `<div class="answer-rich">
        <h3>🧪 <strong>Performance Testing Tools I Use</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>JMeter:</strong> For API load & stress testing (simulates concurrent users).</li>
          <li><strong>K6:</strong> Lightweight CLI-based load testing integrated with CI pipelines.</li>
          <li><strong>Locust:</strong> Python-based load generator for distributed testing.</li>
          <li><strong>Azure Load Testing:</strong> Native managed service to execute JMeter/K6 scripts at scale.</li>
        </ul>
        <p><strong>In practice:</strong> I integrate K6 tests in my pipeline post-deployment to validate that the service handles expected load before marking deployment successful.</p>
      </div>`
    },
    {
      question: "What is the difference between horizontal and vertical scaling?",
      answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Horizontal vs Vertical Scaling</strong></h3>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>Horizontal Scaling</th><th>Vertical Scaling</th></tr>
          <tr><td>Definition</td><td>Add more instances</td><td>Increase size of existing instance</td></tr>
          <tr><td>Downtime</td><td>No downtime (load balanced)</td><td>May require restart</td></tr>
          <tr><td>Cost</td><td>Pay per instance (scalable)</td><td>Limited by max VM SKU</td></tr>
          <tr><td>Examples</td><td>VM Scale Sets, AKS node pools</td><td>Changing VM size from B2s → D4s</td></tr>
        </table>
        <p><strong>In practice:</strong> I design production systems with horizontal scaling first for resilience, then plan vertical scaling only when performance tuning demands stronger compute nodes.</p>
      </div>`
    }
  ]
}
,
{
  title: "7. Reliability & SRE Concepts",
  questions: [
    {
      question: "What is Site Reliability Engineering (SRE)?",
      answerHtml: `<div class="answer-rich">
        <h3>🧠 <strong>Understanding Site Reliability Engineering (SRE)</strong></h3>
        <p><strong>SRE</strong> is the discipline of applying software engineering practices to IT operations — with the goal of achieving high reliability, scalability, and automation in production systems.</p>
        <p><strong>Core idea:</strong> Treat operations like code — automate, measure, and continuously improve.</p>
        <p><strong>Key focus areas:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Service availability & uptime.</li>
          <li>Performance & latency optimization.</li>
          <li>Incident management & automated recovery.</li>
          <li>Error budget and release stability balance.</li>
        </ul>
        <p><strong>In practice:</strong> I maintain defined SLOs for all critical services and integrate them with Azure Monitor dashboards for proactive alerting and auto-remediation.</p>
      </div>`
    },
    {
      question: "What are the main principles of SRE (SLI, SLO, SLA)?",
      answerHtml: `<div class="answer-rich">
        <h3>📏 <strong>SRE Metrics — SLI, SLO, SLA</strong></h3>
        <p><strong>SLI (Service Level Indicator):</strong> Quantitative metric that measures reliability — e.g., uptime %, latency, error rate.</p>
        <p><strong>SLO (Service Level Objective):</strong> Target for SLIs — defines acceptable performance, e.g., 99.9% uptime, <200ms latency.</p>
        <p><strong>SLA (Service Level Agreement):</strong> Business contract with users/customers that defines penalties if SLOs are not met.</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Term</th><th>Purpose</th><th>Example</th></tr>
          <tr><td>SLI</td><td>What we measure</td><td>Request success rate = 99.95%</td></tr>
          <tr><td>SLO</td><td>What we aim for</td><td>Availability target = 99.9%</td></tr>
          <tr><td>SLA</td><td>What we promise</td><td>Compensation if uptime <99.9%</td></tr>
        </table>
        <p><strong>In practice:</strong> My Azure dashboards show SLIs from App Insights & Log Analytics — if we breach the SLO, the pipeline blocks further deployments until issue resolution.</p>
      </div>`
    },
    {
      question: "How do you handle incident response and postmortems?",
      answerHtml: `<div class="answer-rich">
        <h3>🚨 <strong>Incident Response & Postmortems</strong></h3>
        <p><strong>Incident Response Process I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Detection:</strong> Alerts from Azure Monitor, Grafana, or Prometheus trigger incident ticket.</li>
          <li><strong>Classification:</strong> Assign severity (SEV1–SEV3) and notify on-call team via Teams/PagerDuty.</li>
          <li><strong>Mitigation:</strong> Apply temporary fix or rollback to restore service quickly.</li>
          <li><strong>Root Cause Analysis (RCA):</strong> Identify exact failure point using logs, metrics, and traces.</li>
          <li><strong>Postmortem:</strong> Document cause, timeline, and action items to prevent recurrence.</li>
        </ol>
        <p><strong>Tools I use:</strong> Azure Monitor Alerts → Logic App for on-call notifications + Confluence templates for postmortem tracking.</p>
      </div>`
    },
    {
      question: "What tools do you use for monitoring reliability?",
      answerHtml: `<div class="answer-rich">
        <h3>🧩 <strong>Reliability Monitoring Stack</strong></h3>
        <p><strong>Tools & Services I use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Monitor:</strong> Centralized metrics & alerts for VMs, AKS, and App Services.</li>
          <li><strong>Application Insights:</strong> Telemetry, request traces, and availability tests.</li>
          <li><strong>Grafana + Prometheus:</strong> Custom dashboards and SLO tracking via SLIs.</li>
          <li><strong>Log Analytics:</strong> Unified query-based troubleshooting for logs across environments.</li>
          <li><strong>Azure Service Health:</strong> Tracks outages and maintenance at region/subscription level.</li>
        </ul>
        <p><strong>Example:</strong> I built a Grafana dashboard pulling Prometheus metrics to visualize request latency (SLI) vs target (SLO) — auto-alerts if breach probability >5%.</p>
      </div>`
    },
    {
      question: "How do you ensure high uptime and error budget tracking?",
      answerHtml: `<div class="answer-rich">
        <h3>📈 <strong>High Uptime & Error Budget Management</strong></h3>
        <p><strong>Process:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Define SLOs:</strong> For example, 99.9% uptime = 43.2 min downtime/month.</li>
          <li><strong>Track SLIs continuously:</strong> Application Insights availability tests every 5 mins.</li>
          <li><strong>Maintain error budget:</strong> If consumed >50%, freeze feature deployments.</li>
          <li><strong>Auto-healing & redundancy:</strong> Use AKS self-healing, zone-redundant deployments, and auto-scaling.</li>
          <li><strong>Review monthly reports:</strong> RCA and optimization if SLOs repeatedly breached.</li>
        </ol>
        <p><strong>Example:</strong> In one setup, I automated error budget tracking using KQL queries in Log Analytics that alert when downtime exceeds allowed thresholds.</p>
      </div>`
    },
    {
      question: "How do you automate recovery or failover?",
      answerHtml: `<div class="answer-rich">
        <h3>🤖 <strong>Automated Recovery & Failover</strong></h3>
        <p><strong>Mechanisms I use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Health Probes & Load Balancers:</strong> Route traffic to healthy instances automatically.</li>
          <li><strong>Auto-Healing:</strong> Use AKS or VMSS with health extension — auto-restarts unhealthy nodes/pods.</li>
          <li><strong>Azure Traffic Manager / Front Door:</strong> Global DNS failover based on endpoint health.</li>
          <li><strong>Runbook Automation:</strong> Azure Automation or Logic Apps triggered on alert to restart services or redeploy pods.</li>
          <li><strong>DR Strategy:</strong> Geo-redundant resources + failover group for databases.</li>
        </ul>
        <p><strong>Example:</strong> Configured an Azure Automation Runbook that automatically reboots unhealthy VMs when CPU stuck >95% for 10 min, restoring service in <2 min without manual action.</p>
      </div>`
    },
    {
      question: "What is observability, and how is it different from monitoring?",
      answerHtml: `<div class="answer-rich">
        <h3>👁️ <strong>Observability vs Monitoring</strong></h3>
        <p><strong>Monitoring:</strong> Collects and alerts on predefined metrics and logs — tells you <em>when</em> something is wrong.</p>
        <p><strong>Observability:</strong> Gives deep insight into <em>why</em> something is wrong — combines metrics, logs, and traces to understand system behavior holistically.</p>
        <table border="1" cellpadding="6" style="border-collapse:collapse;">
          <tr><th>Aspect</th><th>Monitoring</th><th>Observability</th></tr>
          <tr><td>Purpose</td><td>Detect known issues</td><td>Explore unknown issues</td></tr>
          <tr><td>Data Types</td><td>Metrics, basic logs</td><td>Metrics, structured logs, traces</td></tr>
          <tr><td>Focus</td><td>Reactive</td><td>Proactive / Diagnostic</td></tr>
        </table>
        <p><strong>In practice:</strong> I use Azure Monitor for metrics (monitoring) and Application Insights + OpenTelemetry tracing for observability — together, they shorten MTTR drastically.</p>
      </div>`
    }
  ]
}
,
{
  title: "8. Cloud Tools, Commands & Troubleshooting",
  questions: [
    {
      question: "What command would you use to find files larger than 100MB in Linux?",
      answerHtml: `<div class="answer-rich">
        <h3>🐧 <strong>Finding Large Files in Linux</strong></h3>
        <p>To find files larger than 100MB recursively from a directory, use the <code>find</code> command with <code>-size</code> flag:</p>
        <pre><code>find / -type f -size +100M -exec ls -lh {} \; | sort -k 5 -h</code></pre>
        <p><strong>Explanation:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>-type f</code> → search for files only.</li>
          <li><code>-size +100M</code> → files greater than 100MB.</li>
          <li><code>ls -lh</code> → show human-readable size & permissions.</li>
          <li><code>sort -k 5 -h</code> → sort output by file size.</li>
        </ul>
        <p><strong>In practice:</strong> I use this command during disk utilization alerts to identify logs or dump files causing high storage usage on build or application servers.</p>
      </div>`
    },
    {
      question: "What access level do you have in your Azure environment?",
      answerHtml: `<div class="answer-rich">
        <h3>🔑 <strong>My Azure Access Level</strong></h3>
        <p><strong>Role:</strong> Contributor-level access across project subscriptions, with limited Owner rights in non-production environments.</p>
        <p><strong>Practical permissions include:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Create/manage VNets, VMs, Storage Accounts, and AKS clusters.</li>
          <li>Deploy and manage resources via Terraform and Azure DevOps pipelines.</li>
          <li>Access to Azure Key Vault (read/secrets) and ACR for image pulls.</li>
          <li>View-only access on production resources (via Reader or custom role with restricted write permissions).</li>
        </ul>
        <p><strong>In practice:</strong> This segregation ensures production stability — I can troubleshoot and validate configs, but deployments happen only via pipelines with approvals.</p>
      </div>`
    },
    {
      question: "What are the resources you’ve created in your project?",
      answerHtml: `<div class="answer-rich">
        <h3>🏗️ <strong>Resources I’ve Created & Managed</strong></h3>
        <p>In my current project, I’ve provisioned complete infrastructure using Terraform and Azure DevOps pipelines. Major resources include:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Compute:</strong> Azure VMs, App Services, AKS Clusters.</li>
          <li><strong>Networking:</strong> VNets, Subnets, NSGs, NAT Gateway, Load Balancer, Application Gateway.</li>
          <li><strong>Storage:</strong> Blob Storage, File Shares, Managed Disks.</li>
          <li><strong>Security:</strong> Key Vault, Private Endpoints, RBAC roles.</li>
          <li><strong>Monitoring:</strong> Log Analytics, Azure Monitor, Alerts, Action Groups.</li>
          <li><strong>Automation:</strong> Function Apps, Logic Apps, and Azure Automation Accounts.</li>
        </ul>
        <p><strong>In real deployment:</strong> I used Terraform modules to create reusable infrastructure stacks — separate for dev, QA, and production environments.</p>
      </div>`
    },
    {
      question: "How do you update latest GitHub changes to previous branches?",
      answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Updating Older Branches with Latest Changes</strong></h3>
        <p>When I need to sync an older branch (e.g., <code>release/qa</code>) with latest main branch updates:</p>
        <ol style="margin-left:1.2rem;">
          <li>Checkout the older branch:<br><code>git checkout release/qa</code></li>
          <li>Fetch latest changes:<br><code>git fetch origin</code></li>
          <li>Merge or rebase from main:<br><code>git merge origin/main</code> or <code>git rebase origin/main</code></li>
          <li>Resolve conflicts if any, test locally, and push:<br><code>git push origin release/qa</code></li>
        </ol>
        <p><strong>In practice:</strong> I prefer <code>merge</code> for team sync branches (to preserve history) and <code>rebase</code> only for feature branches before PR submission.</p>
      </div>`
    },
    {
      question: "How do you handle technologies you haven’t worked on before?",
      answerHtml: `<div class="answer-rich">
        <h3>📘 <strong>Approach to New Technologies</strong></h3>
        <p><strong>My process:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Start with official documentation or Microsoft Learn tutorials.</li>
          <li>Set up a small lab / sandbox to get hands-on experience.</li>
          <li>Integrate the tool in a test CI/CD pipeline for real-time understanding.</li>
          <li>Read blogs and watch quickstart videos to understand best practices.</li>
          <li>Finally, apply it in non-prod first, then scale to production with automation.</li>
        </ol>
        <p><strong>Example:</strong> I learned Docker and AKS by building a local container lab and later deploying the same setup through Terraform + Azure DevOps in real projects.</p>
      </div>`
    },
    {
      question: "How do you approach tight deadlines and limited resources?",
      answerHtml: `<div class="answer-rich">
        <h3>⏱️ <strong>Handling Tight Deadlines Effectively</strong></h3>
        <p><strong>My approach:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Prioritize:</strong> Break tasks into must-have vs good-to-have items.</li>
          <li><strong>Automate repetitive steps:</strong> Use scripts or templates to save time.</li>
          <li><strong>Parallelize work:</strong> Delegate tasks to team or run multiple builds simultaneously.</li>
          <li><strong>Stay transparent:</strong> Keep stakeholders updated about progress or blockers.</li>
          <li><strong>Focus on quality first:</strong> Avoid shortcuts that cause rework later.</li>
        </ul>
        <p><strong>Example:</strong> During an AKS migration with a strict timeline, I automated provisioning with Terraform and CI/CD pipeline triggers, saving nearly 40% deployment time.</p>
      </div>`
    },
    {
      question: "Describe the most challenging technical issue you’ve solved.",
      answerHtml: `<div class="answer-rich">
        <h3>🔥 <strong>Most Challenging Issue — Real Scenario</strong></h3>
        <p><strong>Scenario:</strong> We had intermittent downtime in a microservices-based application hosted on AKS. The issue wasn’t visible at pod level — everything showed healthy.</p>
        <p><strong>Diagnosis:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Used Application Insights to trace dependency latency — found spikes at ingress layer.</li>
          <li>Checked logs — identified that NAT Gateway SNAT port exhaustion was occurring under load.</li>
          <li>Analyzed VNet flows and found multiple pods sharing limited outbound ports.</li>
        </ul>
        <p><strong>Fix:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Implemented Azure NAT Gateway scaling + connection reuse policy.</li>
          <li>Added proper connection pooling at app level to avoid exhausting ephemeral ports.</li>
        </ul>
        <p><strong>Outcome:</strong> Reduced connection failures by 95% and improved response latency by 300ms. This fix became a reference design across multiple environments.</p>
      </div>`
    }
  ]
}
,
{
  title: "9. Miscellaneous Scenarios & Behavioral Add-ons",
  questions: [
    {
      question: "How would you explain Cloud vs On-Premises to a non-technical person?",
      answerHtml: `<div class="answer-rich">
        <h3>☁️ <strong>Explaining Cloud vs On-Premises (Simple Analogy)</strong></h3>
        <p><strong>On-Premises:</strong> Like owning a personal car — you buy it, maintain it, and pay even when not using it.</p>
        <p><strong>Cloud:</strong> Like using a taxi — pay only when you need it, maintenance and upgrades handled by provider.</p>
        <p><strong>In short:</strong> Cloud gives flexibility, scalability, and zero maintenance overhead — perfect for businesses that want to focus on growth, not infrastructure upkeep.</p>
      </div>`
    },
    {
      question: "How would you work with cross-functional teams under tight deadlines?",
      answerHtml: `<div class="answer-rich">
        <h3>🤝 <strong>Collaboration Under Pressure</strong></h3>
        <p><strong>My approach:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Clearly define priorities and ownership upfront.</li>
          <li>Set up daily syncs or quick stand-ups with Dev, QA, Security, and Infra teams.</li>
          <li>Use shared dashboards (Azure Boards or Jira) to track blockers transparently.</li>
          <li>Automate handoff steps (CI/CD triggers, notifications) to reduce manual dependency.</li>
          <li>Keep escalation channels ready for critical blockers.</li>
        </ul>
        <p><strong>Example:</strong> During a release crunch, I aligned Dev + QA via daily 15-min syncs and used pipeline gates to auto-notify test completion — we met the release deadline 2 days early.</p>
      </div>`
    },
    {
      question: "How would you handle a technology shift in an ongoing project?",
      answerHtml: `<div class="answer-rich">
        <h3>🔄 <strong>Managing a Technology Shift</strong></h3>
        <p><strong>Steps I follow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Assess business impact — identify what must change and what can stay.</li>
          <li>Plan phased adoption — run pilot in non-prod to validate stability.</li>
          <li>Upskill the team quickly with internal sessions or vendor training.</li>
          <li>Refactor CI/CD pipelines and IaC modules for new components.</li>
          <li>Keep rollback or hybrid path ready until new stack stabilizes.</li>
        </ol>
        <p><strong>Example:</strong> We migrated a legacy Jenkins setup to Azure DevOps YAML — I created reusable pipeline templates, trained the team, and completed transition in 4 sprints without downtime.</p>
      </div>`
    },
    {
      question: "What would be your deployment strategy to ensure production stability?",
      answerHtml: `<div class="answer-rich">
        <h3>🚀 <strong>Stable Deployment Strategy</strong></h3>
        <p><strong>Key points I ensure:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Use <strong>staged pipelines</strong> — Dev → QA → UAT → Prod with approvals.</li>
          <li>Implement <strong>Blue-Green or Canary deployment</strong> for zero downtime.</li>
          <li><strong>Automate health checks</strong> post-deployment via scripts or Function Apps.</li>
          <li>Enable <strong>auto rollback</strong> on failed health probes or high error rate.</li>
          <li><strong>Monitor error budget</strong> — halt future releases if SLOs breached.</li>
        </ol>
        <p><strong>Example:</strong> I configured health probes and load balancer checks — failed rollout auto-triggered rollback using pipeline logic, saving a major outage.</p>
      </div>`
    },
    {
      question: "What are key DevOps tools you’ve used in the last two years?",
      answerHtml: `<div class="answer-rich">
        <h3>🧰 <strong>My DevOps Toolchain</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>CI/CD:</strong> Azure DevOps, GitHub Actions, Jenkins.</li>
          <li><strong>IaC:</strong> Terraform, ARM/Bicep.</li>
          <li><strong>Containers:</strong> Docker, Kubernetes (AKS).</li>
          <li><strong>Monitoring:</strong> Grafana, Prometheus, Azure Monitor, Application Insights.</li>
          <li><strong>Security:</strong> SonarQube, Trivy, Checkov, OWASP ZAP.</li>
          <li><strong>Version Control:</strong> Git, GitHub, Azure Repos.</li>
        </ul>
        <p><strong>In practice:</strong> I combine these in an end-to-end Azure DevOps workflow — Terraform builds infra, pipelines deploy app code, and monitoring triggers alerts for any anomaly.</p>
      </div>`
    },
    {
      question: "Describe a time when you had to work with limited resources but ensured delivery.",
      answerHtml: `<div class="answer-rich">
        <h3>⚙️ <strong>Delivering with Limited Resources</strong></h3>
        <p><strong>Scenario:</strong> Our project had budget limits — no new licenses or cloud nodes could be added.</p>
        <p><strong>My solution:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Reused existing self-hosted agents to run parallel CI/CD jobs.</li>
          <li>Consolidated environments (merged QA + Staging) with controlled branching.</li>
          <li>Implemented Infrastructure-as-Code to rebuild resources quickly when needed.</li>
          <li>Automated non-critical tasks (backups, validations) via Function Apps.</li>
        </ul>
        <p><strong>Result:</strong> Delivered all planned releases on time while reducing monthly compute cost by 25%.</p>
      </div>`
    },
    {
      question: "Describe a critical production issue and how you resolved it end-to-end.",
      answerHtml: `<div class="answer-rich">
        <h3>🔥 <strong>Critical Production Issue — Real Example</strong></h3>
        <p><strong>Issue:</strong> Production API service started returning 5xx intermittently during high traffic — impacting customer orders.</p>
        <p><strong>Actions taken:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Checked App Insights — found thread pool exhaustion under load.</li>
          <li>Scaled out App Service instances via pipeline trigger.</li>
          <li>Added queue-based buffering between API and downstream DB calls.</li>
          <li>Configured alert rules and autoscale thresholds for CPU & latency.</li>
          <li>Performed postmortem to fine-tune thread pool and DB connection limits.</li>
        </ol>
        <p><strong>Outcome:</strong> Reduced error rate from 12% → &lt;0.5% within 30 minutes; added permanent alert-based auto-scaling rule for future prevention.</p>
      </div>`
    },
    {
      question: "Tell me about your project contributions and impact in your last role.",
      answerHtml: `<div class="answer-rich">
        <h3>🏆 <strong>My Contributions & Impact</strong></h3>
        <p><strong>Highlights from my last project:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Built complete Azure infrastructure using Terraform modules (VMs, AKS, VNets, NAT, Storage, Monitoring).</li>
          <li>Implemented end-to-end CI/CD pipelines in Azure DevOps integrating Terraform + Docker + ACR + AKS.</li>
          <li>Configured centralized monitoring with Grafana + Log Analytics + alerting to Teams.</li>
          <li>Set up Blue-Green deployments for API layer ensuring zero downtime releases.</li>
          <li>Enabled cost optimization through automation — 30% resource savings.</li>
        </ul>
        <p><strong>Impact:</strong> Reduced manual deployment effort from 2 hours → 15 minutes and improved release reliability across environments.</p>
      </div>`
    }
  ]
}

];

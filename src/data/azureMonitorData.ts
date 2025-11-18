export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const azureMonitorSections = [
  {
    title: "Azure Monitor & Observability",
    questions: [
      {
        question: "What is Azure Monitor and what does it do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Azure Monitor Overview</strong></h3>
        <p>
          <strong>Azure Monitor</strong> is a centralized service that collects, analyzes, and visualizes telemetry data from Azure resources, applications, and infrastructure.  
          It helps track performance, diagnose issues, and trigger alerts automatically.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Collects <strong>metrics</strong> (performance counters) and <strong>logs</strong> (activity + diagnostic data).</li>
          <li>Integrates with Log Analytics, Application Insights, and Azure Alerts.</li>
          <li>Visualizes data via Dashboards, Workbooks, and Grafana.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Monitor to track AKS node health, VM CPU, and application latency with alerting integrated into Teams and ServiceNow.</p>
      </div>`
      },
      {
        question: "What are Metrics and Logs in Azure Monitor?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Metrics vs Logs</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Metrics</th><th>Logs</th></tr>
          <tr><td>Type</td><td>Numeric data over time</td><td>Detailed event or trace data</td></tr>
          <tr><td>Storage</td><td>Time-series database</td><td>Log Analytics Workspace</td></tr>
          <tr><td>Use Case</td><td>Quick performance monitoring</td><td>Deep diagnostics and auditing</td></tr>
        </table>
        <p><strong>Example:</strong> Metrics track VM CPU %; Logs capture system events, errors, and audit trails.</p>
      </div>`
      },
      {
        question: "What is a Log Analytics Workspace and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Log Analytics Workspace</strong></h3>
        <p>
          A <strong>Log Analytics Workspace</strong> is a centralized repository where Azure Monitor stores log data from resources, agents, and diagnostics.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Used to run <strong>Kusto Query Language (KQL)</strong> queries.</li>
          <li>Enables correlation of logs across multiple resources.</li>
          <li>Integrates with Sentinel, Application Insights, and custom dashboards.</li>
        </ul>
        <p><strong>In Practice:</strong> All our VMs, AKS, and Application Insights send logs to a single workspace for centralized query and alerting.</p>
      </div>`
      },
      {
        question: "What is Application Insights and how is it used for application monitoring?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Application Insights (App Insights)</strong></h3>
        <p>
          <strong>App Insights</strong> is an APM (Application Performance Monitoring) service under Azure Monitor that tracks request performance, dependencies, exceptions, and user behavior.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Collects telemetry via SDK or agent.</li>
          <li>Shows real-time response times, failure rates, and request traces.</li>
          <li>Supports distributed tracing for microservices.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate App Insights with AKS pods to trace API latency and backend dependency failures in real time.</p>
      </div>`
      },
      {
        question: "How do you configure Diagnostic Settings in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Configuring Diagnostic Settings</strong></h3>
        <p>
          Diagnostic settings define <strong>where and what</strong> monitoring data gets sent — Metrics, Logs, or both.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Navigate → Resource → Monitoring → Diagnostic Settings.</li>
          <li>Select categories (Activity Logs, Audit Logs, Performance).</li>
          <li>Send data to: Log Analytics Workspace / Event Hub / Storage Account.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure Diagnostic Settings on resource groups to automatically route all logs to a centralized workspace for compliance.</p>
      </div>`
      },
      {
        question: "What are retention policies in Log Analytics?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕒 <strong>Retention Policy</strong></h3>
        <p>
          Retention policies control how long log data is stored in Log Analytics before being purged automatically.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Default retention: 30 days (free tier) — can be increased up to 2 years.</li>
          <li>Used to manage cost and comply with data policies.</li>
        </ul>
        <p><strong>In Practice:</strong> I keep 90 days retention for normal logs and 365 days for audit logs, using export rules for long-term archive to Blob Storage.</p>
      </div>`
      },
      {
        question: "What is the difference between metrics-based and log-based alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Metrics-based vs Log-based Alerts</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Metrics Alert</th><th>Log Alert</th></tr>
          <tr><td>Source</td><td>Real-time metrics</td><td>Queried log data (KQL)</td></tr>
          <tr><td>Latency</td><td>Near real-time</td><td>Depends on query schedule</td></tr>
          <tr><td>Example</td><td>CPU > 80%</td><td>Errors > 10 in last 5 mins</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use metrics alerts for VM health and log alerts for application exceptions or failed deployments.</p>
      </div>`
      },
      {
        question: "How do you monitor the health of AKS clusters and nodes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Monitoring AKS Clusters</strong></h3>
        <p>
          AKS integrates directly with Azure Monitor for Containers — collects performance metrics, logs, and container insights.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Monitor CPU/memory utilization of nodes & pods.</li>
          <li>Track pod restarts, failures, and image pull errors.</li>
          <li>Visualize with Container Insights dashboard.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable “Container Insights” for AKS — it sends all container telemetry to Log Analytics for real-time analysis.</p>
      </div>`
      },
      {
        question: "What are the common use cases of Azure Monitor in production?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏭 <strong>Common Production Use Cases</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Alerting on infrastructure health (CPU, memory, disk).</li>
          <li>Application telemetry via Application Insights.</li>
          <li>Security event correlation with Sentinel.</li>
          <li>Centralized logging for audit and compliance.</li>
          <li>Custom dashboards for business KPIs.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Monitor dashboards to show uptime %, deployment status, and error trends for management visibility.</p>
      </div>`
      },
      {
        question: "How do you monitor Azure resources like VMs (CPU, memory, disk)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>VM Performance Monitoring</strong></h3>
        <p>
          Azure Monitor collects VM metrics and agent-based performance data.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Enable Azure Monitor Agent (AMA) or Diagnostic Extension.</li>
          <li>Collect CPU %, Memory %, Disk I/O, and network stats.</li>
          <li>Create metric alerts and visualize via Workbooks.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor VM CPU and memory with metric alerts (threshold >80%) and integrate those with Teams for incident alerts.</p>
      </div>`
      },
      {
        question: "What tools do you use for centralized monitoring and logging?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Centralized Monitoring Stack</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Azure Monitor + Log Analytics Workspace.</li>
          <li>Application Insights for APM data.</li>
          <li>Grafana for custom dashboards and visual correlation.</li>
          <li>Prometheus for Kubernetes metrics scraping.</li>
          <li>Splunk for organization-wide log ingestion.</li>
        </ul>
        <p><strong>In Practice:</strong> Logs go to Log Analytics → visualized in Grafana → alerts routed via Logic App to ServiceNow or Teams.</p>
      </div>`
      },
      {
        question: "How do you integrate Azure Monitor alerts with external systems like Slack or ServiceNow?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔔 <strong>Integrating Alerts with Slack / ServiceNow</strong></h3>
        <p>
          Azure Monitor alerts can be routed to external tools using <strong>Action Groups</strong> and <strong>Logic Apps</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Create an <strong>Action Group</strong> → choose “Logic App” as action type.</li>
          <li>Design a Logic App with HTTP or built-in connectors (Slack, ServiceNow, Teams).</li>
          <li>Pass alert payload (JSON) to send incident notifications or create ServiceNow tickets automatically.</li>
        </ul>
        <p><strong>In Practice:</strong> I use a Logic App flow → whenever a critical alert triggers, it posts a message to our <code>#devops-alerts</code> Slack channel and simultaneously opens a ServiceNow incident.</p>
      </div>`
      },
      {
        question: "How do you configure automated notifications for Azure Monitor alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📨 <strong>Automated Alert Notifications</strong></h3>
        <p>
          Use <strong>Action Groups</strong> in Azure Monitor to define how notifications are sent when an alert fires.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Go to <em>Monitor → Alerts → Action Groups → New</em>.</li>
          <li>Add Email, SMS, Push, or Webhook recipients.</li>
          <li>Attach this Action Group to any metric or log alert rule.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain separate action groups for Infra (Teams), App (Slack), and Security (ServiceNow) to route alerts to the correct team automatically.</p>
      </div>`
      },
      {
        question: "How do you visualize and correlate monitoring data using Grafana or Workbooks?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Visualization & Correlation</strong></h3>
        <p>
          Azure Monitor data can be visualized in both <strong>Azure Workbooks</strong> and <strong>Grafana dashboards</strong> for cross-platform analysis.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Workbooks:</strong> Interactive dashboards built directly in Azure portal using KQL queries and charts.</li>
          <li><strong>Grafana:</strong> Connect via the “Azure Monitor Data Source” plugin to visualize metrics, logs, and App Insights telemetry together.</li>
          <li>Combine metrics from multiple subscriptions or AKS clusters in a single Grafana dashboard.</li>
        </ul>
        <p><strong>In Practice:</strong> I created Grafana dashboards showing AKS node health, error rate from App Insights, and VM performance — one screen gives a full environment view.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. KQL (Kusto Query Language)",
    questions: [
      {
        question: "What is KQL (Kusto Query Language)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Introduction to KQL</strong></h3>
        <p>
          <strong>KQL (Kusto Query Language)</strong> is a read-only query language used to analyze large volumes of structured, semi-structured, and unstructured log data in Azure services like <strong>Log Analytics</strong>, <strong>Application Insights</strong>, and <strong>Azure Sentinel</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Optimized for fast log exploration and real-time analytics.</li>
          <li>Syntax is SQL-like but designed for big data and time-series logs.</li>
          <li>Used for filtering, aggregation, correlation, and visualization of telemetry data.</li>
        </ul>
        <p><strong>In Practice:</strong> I use KQL daily in Log Analytics to investigate failed deployments, WAF block patterns, and AKS pod crash trends.</p>
      </div>`
      },
      {
        question: "Where do we use KQL in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Where KQL is Used</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Log Analytics Workspace</strong> — for querying VM, AKS, and resource logs.</li>
          <li><strong>Application Insights</strong> — to analyze request telemetry, failures, and performance.</li>
          <li><strong>Azure Sentinel</strong> — for threat detection, SIEM correlation, and hunting queries.</li>
          <li><strong>Diagnostics and Activity Logs</strong> — to trace infrastructure changes and access logs.</li>
        </ul>
        <p><strong>In Practice:</strong> I use KQL in Sentinel to detect repeated failed logins and in App Insights to analyze API latency.</p>
      </div>`
      },
      {
        question: "How do you query WAF logs using KQL?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Querying WAF Logs with KQL</strong></h3>
        <p>
          WAF logs are stored in the Log Analytics workspace under the table <code>AzureDiagnostics</code>.  
          You can filter them using <strong>category</strong> and <strong>action_s</strong> fields.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where Category == "ApplicationGatewayFirewallLog"
| where action_s == "Blocked"
| project TimeGenerated, clientIP_s, requestUri_s, ruleSetType_s, ruleId_s</code></pre>
        <p><strong>In Practice:</strong> I use this query to identify top IPs blocked by WAF and visualize them in a time chart.</p>
      </div>`
      },
      {
        question: "What is the difference between summarize, project, and extend in KQL?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>KQL Commands — Summarize vs Project vs Extend</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Command</th><th>Purpose</th><th>Example</th></tr>
          <tr><td><strong>summarize</strong></td><td>Aggregates data (count, avg, sum)</td><td><code>| summarize count() by clientIP_s</code></td></tr>
          <tr><td><strong>project</strong></td><td>Selects specific columns</td><td><code>| project TimeGenerated, clientIP_s</code></td></tr>
          <tr><td><strong>extend</strong></td><td>Adds new calculated columns</td><td><code>| extend region = tostring(split(requestUri_s, "/")[2])</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <code>summarize</code> to count blocked requests, <code>project</code> to limit output columns, and <code>extend</code> to enrich logs with derived fields.</p>
      </div>`
      },
      {
        question: "What are the best practices for writing KQL queries for performance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>KQL Performance Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Always <strong>filter early</strong> with <code>where</code> to reduce dataset size.</li>
          <li>Use <strong>project</strong> to limit unnecessary columns.</li>
          <li>Apply <strong>summarize</strong> after filtering to optimize aggregation.</li>
          <li>Use <strong>bin()</strong> for time grouping (e.g., 5m intervals).</li>
          <li>Avoid wildcards like <code>contains</code> — prefer <code>startswith</code> or <code>==</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I tune long queries from 40s → 8s using early filters and targeted projections.</p>
      </div>`
      },
      {
        question: "Can you give an example KQL query to fetch blocked WAF requests?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Example — Fetch Blocked WAF Requests</strong></h3>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where Category == "ApplicationGatewayFirewallLog"
| where action_s == "Blocked"
| summarize BlockCount = count() by bin(TimeGenerated, 5m), clientIP_s
| sort by BlockCount desc</code></pre>
        <p><strong>In Practice:</strong> I export this result to a workbook to visualize IP-wise attack spikes over time.</p>
      </div>`
      },
      {
        question: "Have you used KQL in Log Analytics or Azure Sentinel?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕵️‍♂️ <strong>KQL in Log Analytics & Sentinel</strong></h3>
        <p>
          Yes, extensively — KQL is the backbone of both <strong>Log Analytics</strong> and <strong>Azure Sentinel</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Log Analytics:</strong> Investigate performance, deployment logs, or custom app telemetry.</li>
          <li><strong>Azure Sentinel:</strong> Write detection rules, hunting queries, and incident correlation logic.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve built Sentinel queries to detect brute-force login attempts and correlate them with WAF attack logs for unified incident tracking.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. Alerts & Automation",
    questions: [
      {
        question: "What is an Action Group in Azure Alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔔 <strong>Action Group in Azure Alerts</strong></h3>
        <p>
          An <strong>Action Group</strong> defines <em>who gets notified</em> and <em>what actions are triggered</em> when an alert fires.  
          It is a reusable notification and automation container for all alert rules.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Includes actions like Email, SMS, Push, Voice, Logic App, Webhook, or Function.</li>
          <li>Can be attached to multiple alert rules across resources.</li>
          <li>Supports grouping by team — e.g., Infra, App, or Security teams.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain three Action Groups — <code>Infra-Alerts</code> (Teams + SMS), <code>App-Alerts</code> (Slack + Email), and <code>SecOps</code> (ServiceNow via Logic App).</p>
      </div>`
      },
      {
        question: "How do you create an alert rule in Azure Monitor?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Creating an Alert Rule</strong></h3>
        <p>
          Alert rules define <strong>what condition triggers an alert</strong> and <strong>what action follows</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Navigate to <em>Azure Monitor → Alerts → Create → Alert Rule</em>.</li>
          <li>Select resource (VM, AKS, App Service, etc.).</li>
          <li>Define <strong>signal type</strong> — Metric, Log, or Activity.</li>
          <li>Set threshold (e.g., CPU > 80% for 10 minutes).</li>
          <li>Attach <strong>Action Group</strong> and set severity (Sev 0–4).</li>
        </ul>
        <p><strong>In Practice:</strong> I create alert rules using Terraform for consistent deployment — ensures same logic across DEV, QA, and PROD.</p>
      </div>`
      },
      {
        question: "How do you send Azure Monitor alerts to email, Teams, or Webhook?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📨 <strong>Sending Alerts to Email, Teams, or Webhook</strong></h3>
        <p>
          Alerts are delivered using <strong>Action Groups</strong>.  
          Each notification method is configured within an Action Group.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Email:</strong> Add user/group email under notification type.</li>
          <li><strong>Teams:</strong> Use <em>Logic App</em> or <em>Webhook</em> connector to post adaptive card messages.</li>
          <li><strong>Webhook:</strong> Send alert payload (JSON) to external systems like ServiceNow or Slack.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>{
  "alertRule": "HighCPU",
  "resource": "VM-Prod01",
  "severity": "Sev2",
  "message": "CPU usage above 85% for 10 minutes"
}</code></pre>
        <p><strong>In Practice:</strong> I send critical alerts to Teams via Logic App (with card summary + runbook link) and all Sev3 alerts via email.</p>
      </div>`
      },
      {
        question: "What are custom alert rules and when do you create them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Custom Alert Rules</strong></h3>
        <p>
          Custom alert rules are user-defined queries or logic used to monitor non-default scenarios that metrics can’t capture.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Created using <strong>KQL queries</strong> on log data.</li>
          <li>Used for application-level or security event detection.</li>
          <li>Can include complex filters, joins, and pattern detection.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where Category == "ApplicationGatewayFirewallLog"
| where action_s == "Blocked"
| summarize count() by bin(TimeGenerated, 10m)
| where count_ > 20</code></pre>
        <p><strong>In Practice:</strong> I use custom log alerts to detect repeated WAF block events or high 5xx error spikes from API logs.</p>
      </div>`
      },
      {
        question: "How do you use alert severity levels (Critical, Warning, Informational)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>Alert Severity Levels</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Severity</th><th>Meaning</th><th>Typical Action</th></tr>
          <tr><td>Sev 0</td><td>Critical — service down</td><td>Immediate incident, notify on-call</td></tr>
          <tr><td>Sev 1</td><td>High — major degradation</td><td>Urgent triage, partial outage</td></tr>
          <tr><td>Sev 2</td><td>Warning — performance issues</td><td>Monitor trend, alert team</td></tr>
          <tr><td>Sev 3</td><td>Informational</td><td>Log for reference, no action</td></tr>
        </table>
        <p><strong>In Practice:</strong> We map Sev0–1 alerts to PagerDuty on-call, Sev2 to Teams channels, and Sev3 to daily summary reports.</p>
      </div>`
      },
      {
        question: "How do you handle auto-remediation of triggered alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Auto-Remediation of Alerts</strong></h3>
        <p>
          Auto-remediation means automatically executing corrective actions when an alert fires — eliminating manual response time.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Attach <strong>Automation Runbooks</strong> or <strong>Azure Functions</strong> in Action Groups.</li>
          <li>Logic App can run workflows to restart VMs, scale AKS, or recycle App Services.</li>
          <li>Use tags or metadata to scope the automation only to relevant resources.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Example Runbook Script
param([string]$VMName)
Write-Output "Restarting VM: $VMName"
Restart-AzVM -Name $VMName -ResourceGroup "ProdRG"</code></pre>
        <p><strong>In Practice:</strong> When a “CPU > 95%” alert triggers, my attached Runbook auto-scales the VM size and updates the incident with the action log.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Prometheus & Grafana (Container Monitoring)",
    questions: [
      {
        question: "What is Prometheus and how does it work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📡 <strong>Prometheus Overview</strong></h3>
        <p>
          <strong>Prometheus</strong> is an open-source monitoring system designed for time-series data collection and alerting.  
          It scrapes metrics from configured endpoints (usually on <code>/metrics</code> URL) at regular intervals.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Uses a pull-based model — Prometheus server pulls data from exporters.</li>
          <li>Stores data in its own time-series database (TSDB).</li>
          <li>Supports PromQL (Prometheus Query Language) for querying and alerting.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy Prometheus inside AKS using Helm; it scrapes node, pod, and application-level metrics for real-time insights.</p>
      </div>`
      },
      {
        question: "How do you integrate Prometheus with AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Prometheus Integration with AKS</strong></h3>
        <p>
          Integration is done using the <strong>Prometheus Operator</strong> or <strong>kube-prometheus-stack Helm chart</strong>.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack -n monitoring</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Scrapes metrics from <code>kubelet</code>, <code>cAdvisor</code>, and <code>kube-state-metrics</code>.</li>
          <li>Uses ServiceMonitors and PodMonitors to auto-discover metrics endpoints.</li>
          <li>Stores data locally in Prometheus TSDB or remote storage like Azure Blob.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy Prometheus using Helm + custom values to scrape both system and application exporters inside AKS.</p>
      </div>`
      },
      {
        question: "What kind of metrics can Prometheus collect from containers and pods?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Prometheus Metrics Types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>CPU and memory usage per container and node.</li>
          <li>Pod restarts, uptime, and status (Pending, Running, CrashLoopBackOff).</li>
          <li>Network I/O, disk read/write, and storage utilization.</li>
          <li>Application metrics via exporters — e.g., HTTP requests, latency, queue depth.</li>
        </ul>
        <p><strong>In Practice:</strong> I use node-exporter for infrastructure metrics, cAdvisor for container stats, and custom app metrics exposed via <code>/metrics</code> endpoint.</p>
      </div>`
      },
      {
        question: "What is Grafana and how is it used for visualization?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Grafana Overview</strong></h3>
        <p>
          <strong>Grafana</strong> is an open-source analytics and visualization platform that connects to data sources like Prometheus, InfluxDB, or Azure Monitor.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Provides interactive dashboards and charts for metrics visualization.</li>
          <li>Allows alerting, annotations, and templating for dynamic dashboards.</li>
          <li>Integrates with Teams, Slack, and email for alert notifications.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Grafana dashboards to visualize AKS pod resource utilization, latency, and error rate trends.</p>
      </div>`
      },
      {
        question: "What are the main features of Grafana?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✨ <strong>Grafana Key Features</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Multiple data sources (Prometheus, Loki, Elastic, Azure Monitor).</li>
          <li>Dashboard templating — dynamic filters by cluster, namespace, pod.</li>
          <li>Alerting system with thresholds and rules.</li>
          <li>User authentication and role-based access control (RBAC).</li>
          <li>Shareable dashboard links and snapshot exports.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain Grafana dashboard folders by environment — DEV, QA, PROD — with variable filters for microservice-level visibility.</p>
      </div>`
      },
      {
        question: "How do you set up dashboards in Grafana?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Setting up Dashboards</strong></h3>
        <p>
          Grafana dashboards can be imported from prebuilt templates or built manually using panels and PromQL queries.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Go to <em>+ → Dashboard → Add Panel</em>.</li>
          <li>Select data source → enter PromQL query.</li>
          <li>Choose visualization type (Graph, Gauge, Table).</li>
          <li>Save and tag dashboard for environment/team.</li>
        </ul>
        <p><strong>In Practice:</strong> I use imported dashboards for Kubernetes clusters (ID: 315 or 6417) and customize panels for app-specific metrics.</p>
      </div>`
      },
      {
        question: "How do you connect Grafana with Prometheus data source?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Connecting Grafana with Prometheus</strong></h3>
        <p>
          Grafana connects to Prometheus as a data source via HTTP API.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Navigate to <em>Configuration → Data Sources → Add data source</em>.</li>
          <li>Select <strong>Prometheus</strong> and set URL (e.g., <code>http://prometheus-server.monitoring.svc:9090</code>).</li>
          <li>Click <strong>Save & Test</strong> to validate connection.</li>
        </ul>
        <p><strong>In Practice:</strong> I connect multiple Prometheus instances (DEV/PROD) in one Grafana to compare performance trends across clusters.</p>
      </div>`
      },
      {
        question: "What are the benefits of using Prometheus and Grafana together?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Prometheus + Grafana = Perfect Monitoring Stack</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Prometheus handles metric collection; Grafana handles visualization.</li>
          <li>Open-source and cloud-agnostic — works on any Kubernetes cluster.</li>
          <li>Supports real-time alerting and dashboard sharing.</li>
          <li>High scalability — scrape thousands of metrics with low overhead.</li>
        </ul>
        <p><strong>In Practice:</strong> Prometheus feeds time-series data, Grafana turns it into actionable dashboards — ideal for microservice observability.</p>
      </div>`
      },
      {
        question: "How do you create custom dashboards in Grafana?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎨 <strong>Creating Custom Dashboards</strong></h3>
        <p>
          Custom dashboards are built using <strong>PromQL queries</strong> and Grafana panels.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use variables for dynamic filters (e.g., namespace, pod).</li>
          <li>Combine multiple visualizations (CPU, memory, latency) in one view.</li>
          <li>Apply thresholds, transformations, and alert rules per panel.</li>
        </ul>
        <p><strong>In Practice:</strong> I build dashboards showing microservice health, API latency, and error rate per namespace in AKS.</p>
      </div>`
      },
      {
        question: "How do you configure alert rules in Grafana?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Grafana Alerting</strong></h3>
        <p>
          Grafana allows alert configuration per panel or via the unified alerting system.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Navigate → <em>Alert → Create Rule</em> and select data source.</li>
          <li>Define expression using PromQL and threshold (e.g., CPU > 80%).</li>
          <li>Attach <strong>Contact Points</strong> (Email, Teams, Slack, Webhook).</li>
        </ul>
        <p><strong>In Practice:</strong> I route Grafana alerts to Teams via webhook and auto-create ServiceNow tickets for critical AKS node failures.</p>
      </div>`
      },
      {
        question: "Can you explain your Prometheus + Grafana monitoring setup for AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>My Prometheus + Grafana AKS Setup</strong></h3>
        <p>
          In my project, I implemented a full container monitoring stack for Azure Kubernetes Service (AKS) using <strong>Prometheus + Grafana + Alertmanager</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Deployed Prometheus and Grafana using <code>kube-prometheus-stack</code> Helm chart.</li>
          <li>Scrapes metrics from <code>kubelet</code>, <code>cAdvisor</code>, and custom app exporters.</li>
          <li>Alertmanager sends notifications to Teams and Slack.</li>
          <li>Grafana visualizes cluster resource usage, pod health, and app latency.</li>
        </ul>
        <p><strong>In Practice:</strong> I built custom Grafana dashboards per environment and configured auto-scaling alerts via Prometheus rules for proactive issue resolution.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Azure Defender / Security Center / Sentinel",
    questions: [
      {
        question: "What is Microsoft Defender for Cloud (formerly Azure Security Center)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Microsoft Defender for Cloud Overview</strong></h3>
        <p>
          <strong>Microsoft Defender for Cloud</strong> (previously Azure Security Center) is a cloud-native security management platform that helps you:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Continuously assess security posture across Azure, AWS, and GCP.</li>
          <li>Detect and remediate vulnerabilities in workloads.</li>
          <li>Protect servers, containers, and databases from active threats.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Defender to track recommendations like “Enable MFA,” “Encrypt disks,” and “Restrict NSG ports” — improving overall Secure Score for the subscription.</p>
      </div>`
      },
      {
        question: "How does it help identify and remediate security vulnerabilities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Identifying & Remediating Vulnerabilities</strong></h3>
        <p>
          Defender for Cloud scans all Azure resources and correlates data from vulnerability assessment tools to detect misconfigurations and threats.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Integrates with <strong>Microsoft Defender for Endpoint</strong> to detect malware or anomalous activity.</li>
          <li>Uses <strong>recommendations</strong> and <strong>Secure Score</strong> to prioritize remediation.</li>
          <li>Supports <strong>Quick Fix</strong> actions directly from the portal or via automation scripts.</li>
        </ul>
        <p><strong>In Practice:</strong> When “Unrestricted NSG rule” alert appears, Defender auto-triggers a Logic App to disable the rule and notify the SecOps channel.</p>
      </div>`
      },
      {
        question: "How do you secure Log Analytics Workspace?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Securing Log Analytics Workspace</strong></h3>
        <p>
          Log Analytics stores sensitive telemetry data, so securing it is essential for compliance and data protection.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Restrict access using <strong>RBAC roles</strong> (Reader, Contributor, Log Analytics Contributor).</li>
          <li>Enable <strong>Customer-Managed Keys (CMK)</strong> for data encryption at rest.</li>
          <li>Use <strong>Private Endpoints</strong> to block public network access.</li>
          <li>Configure <strong>Diagnostic Settings</strong> to send logs securely to Sentinel or Storage.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve implemented workspace isolation — only monitoring service accounts can query logs; developers get read-only dashboards via Grafana.</p>
      </div>`
      },
      {
        question: "What is Azure Sentinel, and how is it different from Azure Monitor?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕵️‍♂️ <strong>Azure Sentinel vs Azure Monitor</strong></h3>
        <p>
          <strong>Azure Sentinel</strong> is a <strong>SIEM + SOAR</strong> solution (Security Information & Event Management + Security Orchestration Automation Response).  
          It extends <strong>Azure Monitor</strong> to provide threat detection, investigation, and automated response.
        </p>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Feature</th><th>Azure Monitor</th><th>Azure Sentinel</th></tr>
          <tr><td>Purpose</td><td>Operational monitoring</td><td>Security analytics & automation</td></tr>
          <tr><td>Data Source</td><td>Performance & logs</td><td>Security events & threat intel</td></tr>
          <tr><td>Automation</td><td>Basic alert rules</td><td>Playbooks (Logic Apps)</td></tr>
          <tr><td>Scope</td><td>Health & metrics</td><td>Attack detection & correlation</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Sentinel for incident correlation (WAF + Defender logs) and automate ticket creation when multiple threat indicators match.</p>
      </div>`
      },
      {
        question: "How do you configure Key Vault logging, and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Key Vault Logging Configuration</strong></h3>
        <p>
          Enabling Key Vault diagnostics ensures visibility into access and operation logs for auditing and threat detection.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Go to <em>Key Vault → Diagnostic Settings → Add Diagnostic Setting</em>.</li>
          <li>Send logs to <strong>Log Analytics</strong>, <strong>Storage Account</strong>, or <strong>Event Hub</strong>.</li>
          <li>Monitor operations like <code>GetSecret</code>, <code>ListKeys</code>, and failed authentication attempts.</li>
        </ul>
        <p><strong>Why it’s Important:</strong> Detects unauthorized access attempts or unusual key retrievals — critical for PCI and ISO compliance.</p>
        <p><strong>In Practice:</strong> I route Key Vault logs to Sentinel and use KQL queries to detect abnormal access from new IPs or service principals.</p>
      </div>`
      },
      {
        question: "What are security alerts in Defender for Cloud, and how do you handle them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Security Alerts in Defender for Cloud</strong></h3>
        <p>
          Security alerts are threat signals generated when suspicious or malicious activity is detected in Azure resources.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Examples: Brute-force login attempts, malicious script execution, or privilege escalation.</li>
          <li>Alerts are classified by severity (High, Medium, Low).</li>
          <li>Integrated with Sentinel and Logic Apps for incident automation.</li>
        </ul>
        <p><strong>In Practice:</strong> When Defender detects “Multiple failed logins from IP,” Sentinel triggers a Logic App that blocks the IP and notifies the SOC via Teams.</p>
      </div>`
      },
      {
        question: "How do you investigate and remediate alerts automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Automated Alert Investigation & Remediation</strong></h3>
        <p>
          Azure Sentinel supports <strong>Playbooks</strong> (Logic Apps) for automated investigation and response.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Triggered by Sentinel incidents or Defender alerts.</li>
          <li>Performs automated actions — isolate VM, disable user, revoke token.</li>
          <li>Enriches incident with threat intelligence or IP reputation info.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Example: Sentinel Playbook Steps
1️⃣ Trigger: Alert “Multiple Failed Logins”
2️⃣ Run: Logic App → Check IP Reputation API
3️⃣ If malicious → Add IP to NSG Deny Rule
4️⃣ Notify: SOC channel with summary card</code></pre>
        <p><strong>In Practice:</strong> I implemented an auto-remediation flow that disables compromised accounts and logs remediation details in Sentinel.</p>
      </div>`
      },
      {
        question: "What are the key security controls you implement while designing Azure networks?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Key Azure Network Security Controls</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>NSGs</strong> and <strong>ASGs</strong> to restrict inbound/outbound traffic.</li>
          <li>Enable <strong>Azure Firewall</strong> and <strong>DDoS Protection Standard</strong>.</li>
          <li>Use <strong>Private Endpoints</strong> to access PaaS services securely.</li>
          <li>Apply <strong>Just-In-Time (JIT)</strong> VM access for RDP/SSH control.</li>
          <li>Enforce <strong>Network Policies</strong> on AKS for pod-level isolation.</li>
        </ul>
        <p><strong>In Practice:</strong> My production networks use a hub-spoke model with central firewall, NSG-based isolation, and Defender-integrated alerts for any misconfigurations.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Backup, Recovery, and Disaster Recovery (DR)",
    questions: [
      {
        question: "What is a Backup Vault in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Azure Backup Vault</strong></h3>
        <p>
          A <strong>Backup Vault</strong> in Azure is a storage entity that securely stores backup data such as VMs, disks, and file shares.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>It is a modern, ARM-based replacement for Recovery Services Vault (RSV).</li>
          <li>Supports <strong>Azure Backup Center</strong> for centralized backup management.</li>
          <li>Stores backup data encrypted at rest using Azure-managed or customer-managed keys (CMK).</li>
        </ul>
        <p><strong>In Practice:</strong> I use Backup Vaults for new workloads and RSV for legacy ones — both integrated with Azure Policy for auto-onboarding of new VMs.</p>
      </div>`
      },
      {
        question: "What is the difference between Recovery Services Vault and Backup Vault?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Recovery Services Vault vs Backup Vault</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Feature</th><th>Recovery Services Vault (RSV)</th><th>Backup Vault</th></tr>
          <tr><td>Architecture</td><td>Classic</td><td>Modern (ARM-based)</td></tr>
          <tr><td>Supported Workloads</td><td>VMs, SQL, SAP HANA</td><td>VMs, Blob Backup, Azure Files</td></tr>
          <tr><td>Management</td><td>Per vault</td><td>Centralized via Backup Center</td></tr>
          <tr><td>Encryption</td><td>Azure-managed</td><td>Supports Customer-Managed Keys (CMK)</td></tr>
        </table>
        <p><strong>In Practice:</strong> For new Azure regions and workloads, I always prefer <strong>Backup Vault</strong> for its better integration with Azure Backup policies and automation APIs.</p>
      </div>`
      },
      {
        question: "How do you configure VM backups in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Configuring VM Backups</strong></h3>
        <p>VM backups are configured using Azure Backup policies and Vault association.</p>
        <ul style="margin-left:1.2rem;">
          <li>Create or select a <strong>Backup Vault / RSV</strong>.</li>
          <li>Define a <strong>Backup Policy</strong> (frequency, retention, schedule).</li>
          <li>Associate policy with VM → Azure installs the backup extension.</li>
          <li>Initial backup is a full snapshot; subsequent backups are incremental.</li>
        </ul>
        <p><strong>In Practice:</strong> I use daily backups with 30-day retention for production VMs and weekly backups with 15-day retention for non-prod workloads.</p>
      </div>`
      },
      {
        question: "How do you monitor and validate successful backups?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Monitoring Backup Jobs</strong></h3>
        <p>
          Azure provides built-in reports and alerts via Backup Center and Log Analytics.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Backup Center</strong> → “Jobs” view for backup status.</li>
          <li>Enable diagnostic settings → send logs to <strong>Log Analytics Workspace</strong>.</li>
          <li>Create alert rules for failed or missed backups.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor backup compliance using Azure Monitor dashboards and a weekly email summary of failed jobs.</p>
      </div>`
      },
      {
        question: "How do you perform VM restore or file-level recovery?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>VM Restore & File-Level Recovery</strong></h3>
        <p>
          Azure Backup supports both full VM restore and file-level recovery directly from the vault.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Full VM Restore:</strong> Restore point → Select region → Create new VM or replace existing one.</li>
          <li><strong>File Recovery:</strong> Download script → Mount recovery volume → Copy files from snapshot.</li>
        </ul>
        <p><strong>In Practice:</strong> For production, I restore to a sandbox network for verification before switching over to the restored VM.</p>
      </div>`
      },
      {
        question: "What is Azure Site Recovery (ASR) and how is it used for DR?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌩️ <strong>Azure Site Recovery (ASR)</strong></h3>
        <p>
          <strong>ASR</strong> is Azure’s native <strong>Disaster Recovery as a Service (DRaaS)</strong> that replicates workloads across regions for business continuity.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Continuously replicates VM disks to a secondary region.</li>
          <li>Enables one-click failover and failback.</li>
          <li>Supports DR for Azure VMs, on-prem VMs, and physical servers.</li>
        </ul>
        <p><strong>In Practice:</strong> I use ASR to replicate critical production VMs from Central India → South India with 15-min RPO and DR drills every quarter.</p>
      </div>`
      },
      {
        question: "What are RPO and RTO in Disaster Recovery planning?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📏 <strong>RPO vs RTO</strong></h3>
        <p>
          <strong>RPO (Recovery Point Objective)</strong> — Maximum acceptable data loss (time between last backup and failure).  
          <strong>RTO (Recovery Time Objective)</strong> — Maximum acceptable downtime to restore service.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>RPO Example:</strong> 15 minutes → ASR replication every 15 mins.</li>
          <li><strong>RTO Example:</strong> 1 hour → DR site should be up within 60 minutes.</li>
        </ul>
        <p><strong>In Practice:</strong> For mission-critical healthcare apps, we maintain RPO ≤ 15 min and RTO ≤ 45 min.</p>
      </div>`
      },
      {
        question: "How do you perform DR drills in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧪 <strong>Performing DR Drills</strong></h3>
        <p>
          DR drills verify the readiness of your disaster recovery plan without impacting production.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>In ASR → Select replicated items → “Test Failover.”</li>
          <li>Use isolated virtual network to prevent production impact.</li>
          <li>Validate data, app connectivity, and DNS failover.</li>
          <li>After verification → “Cleanup Test Failover.”</li>
        </ul>
        <p><strong>In Practice:</strong> We run DR drills every 3 months and document results as part of business continuity compliance.</p>
      </div>`
      },
      {
        question: "How do you manage cross-region replication for business continuity?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Cross-Region Replication</strong></h3>
        <p>
          Azure provides multiple replication mechanisms for data resiliency and continuity.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Enable <strong>Geo-Redundant Storage (GRS)</strong> or <strong>RA-GRS</strong> for backup data.</li>
          <li>Use <strong>ASR</strong> for VM-level replication between paired regions.</li>
          <li>Deploy critical services in <strong>paired regions</strong> (e.g., East US ↔ West US).</li>
          <li>Leverage <strong>Traffic Manager</strong> or <strong>Front Door</strong> for regional failover.</li>
        </ul>
        <p><strong>In Practice:</strong> I replicate production workloads from Central India to South India and configure Traffic Manager for automatic DNS-based failover.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Cost Optimization & Governance",
    questions: [
      {
        question: "What is cost optimization in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💰 <strong>Cost Optimization in Azure</strong></h3>
        <p>
          <strong>Cost optimization</strong> in Azure means ensuring you're paying only for what you need — by right-sizing resources, automating idle shutdowns, and using reserved or spot instances efficiently.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Monitor and analyze spending patterns regularly.</li>
          <li>Eliminate unused or idle resources (stopped VMs, unattached disks).</li>
          <li>Apply auto-scaling to handle dynamic workloads.</li>
          <li>Use reserved instances (RI) or Azure Hybrid Benefit for savings.</li>
        </ul>
        <p><strong>In Practice:</strong> I reduced ~30% monthly Azure cost by enforcing VM auto-shutdown policies and moving long-running workloads to reserved instances.</p>
      </div>`
      },
      {
        question: "What tools or strategies do you use for cost management (Cost Analysis, Budgets)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Azure Cost Management Tools & Strategies</strong></h3>
        <p>
          Azure provides built-in cost management capabilities to analyze, plan, and control cloud spend.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Cost Analysis:</strong> Visualize spend per resource group, service, or tag.</li>
          <li><strong>Budgets:</strong> Set monthly or quarterly budget limits with alerts.</li>
          <li><strong>Advisor Recommendations:</strong> Get AI-driven insights for right-sizing and idle resources.</li>
          <li><strong>Tags:</strong> Allocate costs by department, project, or owner.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <em>Azure Cost Analysis</em> to track project-level expenses and configure budget alerts to trigger Teams notifications when spending hits 80%.</p>
      </div>`
      },
      {
        question: "Have you used any third-party tools for cost monitoring?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Third-Party Cost Monitoring Tools</strong></h3>
        <p>
          Yes, for enterprise-scale cost visibility and automation beyond native Azure tools.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>CloudHealth</strong> — detailed multi-cloud reporting and automation.</li>
          <li><strong>Spot.io</strong> — automatic workload optimization and autoscaling for savings.</li>
          <li><strong>Kubecost</strong> — Kubernetes-level cost breakdown by namespace and pod.</li>
          <li><strong>Datadog Cloud Cost Monitor</strong> — unified monitoring + billing insights.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Kubecost to track per-namespace AKS costs and trigger scaling recommendations for idle microservices.</p>
      </div>`
      },
      {
        question: "What is the Azure Well-Architected Framework?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Azure Well-Architected Framework (WAF)</strong></h3>
        <p>
          The <strong>Azure Well-Architected Framework</strong> provides a set of best practices and design principles to build secure, efficient, and resilient cloud solutions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Helps review architecture across key pillars like cost, performance, and security.</li>
          <li>Guides design decisions aligned with Microsoft’s cloud reliability standards.</li>
        </ul>
        <p><strong>In Practice:</strong> We used the Well-Architected Review to align our healthcare app with best practices — improving performance and reducing cost by 25%.</p>
      </div>`
      },
      {
        question: "What are the five pillars of the Well-Architected Framework?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Five Pillars of Azure Well-Architected Framework</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔒 <strong>Security</strong> — Protect data and systems using least privilege and defense in depth.</li>
          <li>⚙️ <strong>Reliability</strong> — Design for high availability, failover, and DR readiness.</li>
          <li>📊 <strong>Performance Efficiency</strong> — Optimize workloads and scaling strategies.</li>
          <li>💰 <strong>Cost Optimization</strong> — Balance performance with operational expenses.</li>
          <li>🔄 <strong>Operational Excellence</strong> — Automate and continuously improve processes.</li>
        </ul>
        <p><strong>In Practice:</strong> I use these pillars as a checklist before every production release or architecture review.</p>
      </div>`
      },
      {
        question: "How do you use Azure Policy for governance and compliance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Azure Policy for Governance & Compliance</strong></h3>
        <p>
          <strong>Azure Policy</strong> enforces organizational standards and compliance automatically across subscriptions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Define rules — e.g., “Allow only specific VM sizes” or “Require tagging.”</li>
          <li>Assign policy to management group, subscription, or resource group.</li>
          <li>Monitor compliance status via Azure Policy dashboard.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve implemented policies that enforce mandatory cost tags, restrict public IPs, and ensure diagnostics are enabled on all VMs.</p>
      </div>`
      },
      {
        question: "How do you identify underutilized resources in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Identifying Underutilized Resources</strong></h3>
        <p>
          Underutilized resources increase unnecessary cost — Azure provides insights to identify and optimize them.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Advisor</strong> recommendations for idle VMs or unattached disks.</li>
          <li>Monitor low CPU/memory utilization using <strong>Azure Monitor Metrics</strong>.</li>
          <li>Leverage <strong>Cost Analysis + Tags</strong> to isolate non-critical resources.</li>
        </ul>
        <p><strong>In Practice:</strong> I use automation scripts to shut down non-prod VMs nightly and deallocate unused dev resources over weekends.</p>
      </div>`
      },
      {
        question: "How do you optimize storage, compute, and network costs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Optimization Across Storage, Compute, and Network</strong></h3>
        <p>
          Cost optimization focuses on reducing waste while maintaining performance and reliability.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💾 <strong>Storage:</strong> Use lifecycle management — move old blobs to Cool/Archive tier, delete unattached disks.</li>
          <li>🖥️ <strong>Compute:</strong> Right-size VMs, use spot instances for non-critical workloads, enable auto-shutdown.</li>
          <li>🌐 <strong>Network:</strong> Use Azure Front Door or CDN to reduce egress costs, and peer VNets efficiently.</li>
        </ul>
        <p><strong>In Practice:</strong> After analyzing cost reports, I applied blob lifecycle rules and switched 20% of workloads to spot instances — cutting monthly spend by 40%.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. SonarQube & Code Quality",
    questions: [
      {
        question: "What is SonarQube and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>SonarQube Overview</strong></h3>
        <p>
          <strong>SonarQube</strong> is a static code analysis tool used to continuously inspect code quality, detect bugs, code smells, and security vulnerabilities in your codebase.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Performs <strong>static code analysis</strong> for 25+ languages (Java, .NET, Python, etc.).</li>
          <li>Evaluates metrics like code coverage, duplications, complexity, and maintainability.</li>
          <li>Integrates seamlessly into CI/CD pipelines for automated scanning during builds.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate SonarQube in Azure DevOps pipelines to ensure every PR meets quality gates before merging.</p>
      </div>`
      },
      {
        question: "How do you integrate SonarQube with CI/CD pipelines (Azure DevOps, Jenkins)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Integrating SonarQube with CI/CD</strong></h3>
        <p>
          Integration involves running SonarQube scanner as part of your build pipeline.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Install <strong>SonarQube extension</strong> from Azure DevOps marketplace.</li>
          <li>2️⃣ Create <strong>Service Connection</strong> to your SonarQube server.</li>
          <li>3️⃣ Add pipeline tasks:
            <ul>
              <li>🔹 Prepare analysis configuration</li>
              <li>🔹 Run build/test tasks</li>
              <li>🔹 Publish analysis results to SonarQube</li>
            </ul>
          </li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarServiceConn'
    scannerMode: 'MSBuild'
    projectKey: 'myproject'
- task: MSBuild@1
- task: SonarQubeAnalyze@5
- task: SonarQubePublish@5</code></pre>
        <p><strong>In Practice:</strong> I automate SonarQube scans in every pull request pipeline — code merges only if the analysis passes the quality gate.</p>
      </div>`
      },
      {
        question: "What are Quality Gates in SonarQube?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>SonarQube Quality Gates</strong></h3>
        <p>
          A <strong>Quality Gate</strong> is a set of conditions that define whether code meets your organization's quality standards.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Ensures new code is maintainable and free of critical issues.</li>
          <li>Default conditions include:
            <ul>
              <li>Code coverage > 80%</li>
              <li>No blocker or critical bugs</li>
              <li>Duplications < 3%</li>
              <li>Security vulnerabilities = 0</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I configured pipelines to fail automatically if the SonarQube quality gate fails — preventing low-quality code merges.</p>
      </div>`
      },
      {
        question: "How do you enforce code coverage thresholds in pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Enforcing Code Coverage</strong></h3>
        <p>
          Code coverage ensures sufficient test coverage for each build. SonarQube integrates with test tools like <code>JUnit</code>, <code>JaCoCo</code>, <code>DotCover</code>, or <code>Cobertura</code> to measure this.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Integrate your test framework output with SonarQube analysis.</li>
          <li>Define threshold (e.g., 80%) under Quality Gate.</li>
          <li>Fail build automatically when coverage drops below threshold.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>sonar.coverage.exclusions=**/tests/**
sonar.coverage.minimum=80</code></pre>
        <p><strong>In Practice:</strong> I maintain 85% coverage in microservices projects — pipeline fails if test coverage falls short.</p>
      </div>`
      },
      {
        question: "How do you manage static code analysis and security scanning?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Static Code & Security Scanning</strong></h3>
        <p>
          SonarQube performs static code analysis during build to detect vulnerabilities and non-compliant patterns.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Integrate scans in CI pipelines for early detection.</li>
          <li>Combine SonarQube with tools like <strong>Checkov</strong> or <strong>Trivy</strong> for IaC & container security.</li>
          <li>Tag critical issues and auto-assign to developers in SonarQube dashboard.</li>
        </ul>
        <p><strong>In Practice:</strong> Our CI pipeline runs SonarQube + Checkov scans together — blocking deployments with high or critical vulnerabilities.</p>
      </div>`
      },
      {
        question: "What is the difference between SonarQube and SonarCloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>SonarQube vs SonarCloud</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Feature</th><th>SonarQube</th><th>SonarCloud</th></tr>
          <tr><td>Hosting</td><td>Self-hosted (on-prem/cloud VM)</td><td>Fully managed SaaS</td></tr>
          <tr><td>Setup</td><td>Manual installation & maintenance</td><td>No setup — hosted by SonarSource</td></tr>
          <tr><td>Access</td><td>Private network</td><td>Public cloud (good for GitHub integration)</td></tr>
          <tr><td>Best For</td><td>Enterprise & on-prem environments</td><td>Cloud-native CI/CD pipelines</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use SonarCloud for GitHub-hosted projects — easy integration and auto-analysis without managing servers.</p>
      </div>`
      },
      {
        question: "How do you configure SonarQube extensions in YAML pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Configuring SonarQube in YAML Pipelines</strong></h3>
        <p>
          You can use the official <code>SonarQubePrepare</code>, <code>SonarQubeAnalyze</code>, and <code>SonarQubePublish</code> tasks directly in your YAML pipelines.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarQubeServiceConn'
    projectKey: 'MyApp'
    projectName: 'MyApp'
- script: |
    dotnet build
    dotnet test --collect:"XPlat Code Coverage"
- task: SonarQubeAnalyze@5
- task: SonarQubePublish@5
  inputs:
    pollingTimeoutSec: '300'</code></pre>
        <p><strong>In Practice:</strong> I parameterize project key and token in pipeline variables, ensuring secure reuse across multiple projects.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Logging & Diagnostics",
    questions: [
      {
        question: "What are diagnostic settings and why are they important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Azure Diagnostic Settings</strong></h3>
        <p>
          <strong>Diagnostic settings</strong> in Azure define how and where platform and resource logs are collected, stored, and analyzed.  
          They’re crucial for monitoring, compliance, and troubleshooting.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Capture platform metrics and resource logs (activity logs, audit, and performance data).</li>
          <li>Send data to <strong>Log Analytics</strong>, <strong>Storage Account</strong>, or <strong>Event Hub</strong>.</li>
          <li>Enable end-to-end visibility across infrastructure and applications.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable diagnostic settings on every production resource — Application Gateway, Key Vault, and AKS — to centralize logs for analysis.</p>
      </div>`
      },
      {
        question: "How do you enable diagnostic logs for Application Gateway, Key Vault, or Storage Accounts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Enabling Diagnostic Logs</strong></h3>
        <p>
          You can enable diagnostic logs via the Azure Portal, CLI, or Terraform.  
          Diagnostic logs provide detailed operational and audit data for each resource.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Example using Azure CLI
az monitor diagnostic-settings create \\
  --name "appgw-logs" \\
  --resource "/subscriptions/xxxx/resourceGroups/rg/providers/Microsoft.Network/applicationGateways/myAppGw" \\
  --workspace "/subscriptions/xxxx/resourcegroups/log-rg/providers/microsoft.operationalinsights/workspaces/log-ws" \\
  --logs '[{"category": "ApplicationGatewayAccessLog", "enabled": true}]'</code></pre>
        <p><strong>In Practice:</strong> I send Application Gateway, Key Vault, and Storage Account logs to a single Log Analytics workspace for centralized monitoring.</p>
      </div>`
      },
      {
        question: "How do you monitor WAF blocked requests in Log Analytics?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Monitoring WAF Blocked Requests</strong></h3>
        <p>
          You can query Application Gateway WAF logs in <strong>Log Analytics Workspace</strong> using <strong>KQL (Kusto Query Language)</strong>.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where Category == "ApplicationGatewayFirewallLog"
| where action_s == "Blocked"
| summarize count() by bin(TimeGenerated, 1h), clientIp_s, ruleGroup_s, ruleId_s</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Filter blocked requests by IP, country, or rule ID.</li>
          <li>Identify false positives and tune custom WAF rules.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor WAF blocks daily — any unusual spike triggers a Teams alert for security investigation.</p>
      </div>`
      },
      {
        question: "What tools are used for centralized logging (e.g., Log Analytics, ELK, Splunk)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Centralized Logging Tools</strong></h3>
        <p>
          Centralized logging helps consolidate logs from multiple Azure services and environments.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📊 <strong>Azure Log Analytics</strong> — native tool for collecting, querying, and visualizing logs.</li>
          <li>🐘 <strong>ELK Stack (Elasticsearch, Logstash, Kibana)</strong> — open-source analytics stack for large-scale logging.</li>
          <li>🔍 <strong>Splunk</strong> — enterprise-grade SIEM for log correlation and threat detection.</li>
          <li>🧱 <strong>Grafana Loki</strong> — lightweight log aggregation for Kubernetes workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Log Analytics for platform logs and Splunk for enterprise-wide log correlation with security alerts.</p>
      </div>`
      },
      {
        question: "What is a log retention policy, and how do you manage it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Log Retention Policy</strong></h3>
        <p>
          A <strong>log retention policy</strong> defines how long logs are stored before automatic deletion — ensuring compliance and cost control.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Default retention: 30 days (can be increased up to 2 years in Log Analytics).</li>
          <li>Adjust per compliance (GDPR, HIPAA, PCI-DSS).</li>
          <li>Automate cleanup using <strong>Azure Policy</strong> or PowerShell.</li>
        </ul>
        <p><strong>In Practice:</strong> I set 90-day retention for app logs and 365 days for security logs — balancing audit compliance and storage cost.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot backend health issues using logs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩺 <strong>Troubleshooting Backend Health</strong></h3>
        <p>
          Application Gateway and App Service logs help identify backend health issues such as failed probes or timeouts.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Query <strong>ApplicationGatewayAccessLog</strong> or <strong>Performance Logs</strong> in Log Analytics.</li>
          <li>Filter on <code>BackendStatus_s != "Healthy"</code> or HTTP 5xx codes.</li>
          <li>Correlate results with VM or container health metrics.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where Category == "ApplicationGatewayAccessLog"
| where BackendStatus_s != "Healthy"
| project TimeGenerated, BackendServer_s, ResponseStatus_s</code></pre>
        <p><strong>In Practice:</strong> I built alerts that auto-notify the team when backend health degrades beyond threshold.</p>
      </div>`
      },
      {
        question: "How do you analyze Activity Logs for security auditing?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Analyzing Activity Logs for Auditing</strong></h3>
        <p>
          Azure <strong>Activity Logs</strong> record all control-plane operations like resource creation, deletion, and access changes.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Query logs via <strong>Azure Portal → Monitor → Activity Log</strong>.</li>
          <li>Send Activity Logs to <strong>Log Analytics</strong> for KQL analysis.</li>
          <li>Filter by operation name, caller, or resource group.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureActivity
| where OperationNameValue == "Microsoft.Compute/virtualMachines/delete"
| project Caller, ResourceGroup, Resource, TimeGenerated</code></pre>
        <p><strong>In Practice:</strong> I use these logs for security audits — identifying unauthorized deletions or role changes in production.</p>
      </div>`
      },
      {
        question: "What are resource-specific logs, and where are they stored?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Resource-Specific Logs</strong></h3>
        <p>
          Resource-specific logs are detailed logs generated by individual Azure services — different from activity logs which track control-plane actions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Examples: Application Gateway access logs, Key Vault audit logs, SQL diagnostic logs.</li>
          <li>They provide operational visibility (traffic, errors, requests).</li>
          <li>Stored in <strong>Log Analytics Workspace</strong>, <strong>Storage Account</strong>, or forwarded to <strong>Event Hub</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I centralize all resource logs into one Log Analytics workspace and use KQL queries to correlate issues across App Gateway, AKS, and App Service layers.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Best Practices & Real-World Scenarios",
    questions: [
      {
        question: "How do you ensure end-to-end observability for your environment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Ensuring End-to-End Observability</strong></h3>
        <p>
          Observability ensures full visibility into the health, performance, and reliability of your environment across apps, infra, and network.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ <strong>Metrics:</strong> Use Azure Monitor and Prometheus for real-time metrics (CPU, memory, request latency).</li>
          <li>📄 <strong>Logs:</strong> Send logs to Log Analytics, Splunk, or ELK for central analysis.</li>
          <li>📊 <strong>Tracing:</strong> Enable Application Insights distributed tracing for microservices.</li>
          <li>🚨 <strong>Alerting:</strong> Create action groups that route alerts to Teams or ServiceNow.</li>
        </ul>
        <p><strong>In Practice:</strong> I combine Application Insights (APM) + Azure Monitor + Grafana dashboards to trace user requests from frontend to backend in real time.</p>
      </div>`
      },
      {
        question: "How do you maintain security posture for your resources?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Maintaining Security Posture</strong></h3>
        <p>
          Security posture is maintained through continuous assessments, alerts, and compliance enforcement.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Enable <strong>Microsoft Defender for Cloud</strong> for real-time vulnerability scanning.</li>
          <li>Apply <strong>Azure Policy</strong> for tagging, encryption, and region compliance.</li>
          <li>Integrate with <strong>Key Vault</strong> for secret management.</li>
          <li>Automate patching via Azure Update Management or Azure Automation.</li>
        </ul>
        <p><strong>In Practice:</strong> I review Defender Secure Score weekly and enforce baseline policies via Policy Assignments across subscriptions.</p>
      </div>`
      },
      {
        question: "How do you configure alerting for backend down or high latency?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Alerting for Backend Failures or Latency</strong></h3>
        <p>
          Backend health and latency alerts are configured using <strong>Application Insights</strong> and <strong>Azure Monitor Metrics</strong>.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureMetrics
| where Resource == "my-appservice"
| where MetricName == "ServerResponseTime"
| summarize avg(Total) by bin(TimeGenerated, 5m)</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Create metric alert: “Avg Response Time > 2 sec” for 5 mins.</li>
          <li>Add action group → Notify via Teams and ServiceNow.</li>
        </ul>
        <p><strong>In Practice:</strong> Our rule detects 502/503 spikes — triggering a Teams alert and automatic restart via Logic App if failure persists.</p>
      </div>`
      },
      {
        question: "How do you automate backup validation and report compliance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Automating Backup Validation & Compliance</strong></h3>
        <p>
          Backup validation ensures your backup data is recoverable and compliant with retention policies.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Automation</strong> runbooks to check backup status daily.</li>
          <li>Query Recovery Services Vault via PowerShell or Azure CLI.</li>
          <li>Send compliance report to Teams or email using Logic Apps.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>Get-AzRecoveryServicesBackupJob | 
Where-Object { $_.Status -ne "Completed" } |
Export-Csv backup-status.csv</code></pre>
        <p><strong>In Practice:</strong> I automated daily backup validation — if any job fails, a ServiceNow ticket auto-generates for investigation.</p>
      </div>`
      },
      {
        question: "How do you monitor and remediate high CPU utilization alerts automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Auto-Remediation for High CPU Alerts</strong></h3>
        <p>
          Combine <strong>Azure Monitor Alerts</strong> with <strong>Logic Apps</strong> or <strong>Runbooks</strong> for auto-remediation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Create metric alert → “CPU > 85% for 10 mins”.</li>
          <li>Trigger Logic App that restarts the VM or scales out the App Service Plan.</li>
          <li>Post remediation status to Teams or ServiceNow.</li>
        </ul>
        <p><strong>In Practice:</strong> I use an Azure Monitor alert linked with a Logic App — it scales AKS nodes automatically when CPU hits threshold.</p>
      </div>`
      },
      {
        question: "How do you link Azure Monitor to ServiceNow for ticketing?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎟️ <strong>Integrating Azure Monitor with ServiceNow</strong></h3>
        <p>
          Azure Monitor can trigger incident creation in ServiceNow using <strong>Action Groups</strong> and <strong>Logic Apps</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Create an <strong>Action Group</strong> → choose “Logic App” as action type.</li>
          <li>In Logic App, use ServiceNow connector → “Create Incident.”</li>
          <li>Pass alert payload (severity, resource, message) as input.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>{
  "short_description": "Azure VM High CPU",
  "urgency": "1",
  "impact": "2",
  "assignment_group": "CloudOps"
}</code></pre>
        <p><strong>In Practice:</strong> Every critical Azure alert auto-creates a ServiceNow ticket — ensuring SLA-driven response tracking.</p>
      </div>`
      },
      {
        question: "How do you ensure governance and security compliance across environments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Governance & Security Compliance</strong></h3>
        <p>
          Governance ensures consistency, compliance, and security across DEV → UAT → PROD environments.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Management Groups</strong> for environment-level control.</li>
          <li>Apply <strong>Azure Policies</strong> to restrict disallowed resources or public IPs.</li>
          <li>Assign <strong>RBAC roles</strong> to enforce least-privilege access.</li>
          <li>Continuously assess via <strong>Defender for Cloud Secure Score</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I applied policies to enforce tagging, restrict regions, and auto-deploy Defender for Cloud to all new subscriptions.</p>
      </div>`
      },
      {
        question: "What are your recommended best practices for monitoring in production?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>Production Monitoring Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📊 Combine metrics, logs, and traces — enable full-stack observability.</li>
          <li>🔔 Set actionable alerts with context (don’t alert on every small event).</li>
          <li>🧠 Use automation (Logic Apps / Runbooks) for remediation.</li>
          <li>🛡️ Integrate monitoring with ITSM (ServiceNow / Jira) for tracking incidents.</li>
          <li>📈 Build Grafana dashboards for real-time visualization.</li>
          <li>📅 Conduct weekly “alert review” meetings to reduce noise and improve signal quality.</li>
        </ul>
        <p><strong>In Practice:</strong> We follow a “monitor-everything, alert-intelligently” strategy — combining Azure Monitor + App Insights + Grafana for unified visibility.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Terraform + Security Scanning (Checkov, TFLint, OPA, Sentinel Policies)",
    questions: [
      {
        question: "What is Checkov and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Checkov Overview</strong></h3>
        <p>
          <strong>Checkov</strong> is an open-source static analysis tool that scans Terraform, Kubernetes, and CloudFormation templates for security and compliance misconfigurations <em>before</em> deployment.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Detects 1000+ CIS, NIST, and Azure Security Benchmark violations.</li>
          <li>Runs in CI/CD pipelines to block unsafe infrastructure changes.</li>
          <li>Works offline and does not require cloud access.</li>
        </ul>
        <p><strong>In Practice:</strong> I run Checkov in Azure DevOps and GitHub Actions before <code>terraform plan</code> — to ensure no public IP or unencrypted storage gets deployed.</p>
      </div>`
      },
      {
        question: "How do you integrate Checkov in Azure DevOps pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Integrating Checkov in ADO Pipelines</strong></h3>
        <p>
          Integration is done by adding a Checkov scan task in the build stage of the Terraform pipeline.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- task: Bash@3
  displayName: "Run Checkov Scan"
  inputs:
    targetType: 'inline'
    script: |
      pip install checkov
      checkov -d ./Terraform --soft-fail --framework terraform</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><code>--soft-fail</code> → warns but doesn’t break build (for testing).</li>
          <li>Remove flag for enforcing strict compliance.</li>
        </ul>
        <p><strong>In Practice:</strong> I store scan reports in artifacts and send summary to Teams channel for visibility.</p>
      </div>`
      },
      {
        question: "What is TFLint and how is it different from Checkov?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>TFLint vs Checkov</strong></h3>
        <p>
          Both analyze Terraform code but serve different purposes:
        </p>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Tool</th><th>Purpose</th><th>Focus Area</th></tr>
          <tr><td>TFLint</td><td>Linting & best-practice checks</td><td>Syntax, naming, unused vars, deprecated APIs</td></tr>
          <tr><td>Checkov</td><td>Security & compliance validation</td><td>CIS, NIST, policy violations</td></tr>
        </table>
        <p><strong>In Practice:</strong> I run TFLint first to catch code quality issues, then Checkov for deep security analysis before approval.</p>
      </div>`
      },
      {
        question: "What is Open Policy Agent (OPA) and how is it used with Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>OPA (Open Policy Agent)</strong></h3>
        <p>
          OPA is a policy-as-code engine that evaluates custom rules (“Rego policies”) to enforce compliance on Terraform plans and Kubernetes deployments.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Policies written in Rego language.</li>
          <li>Checks Terraform plan output before apply.</li>
          <li>Blocks non-compliant resources (e.g. unencrypted disks).</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>package terraform

deny[msg] {
  input.resource_type == "azurerm_storage_account"
  not input.values.enable_https_traffic_only
  msg = "Storage Account must have HTTPS only enabled"
}</code></pre>
        <p><strong>In Practice:</strong> I use OPA with Conftest in pipeline — it scans <code>terraform plan -out</code> JSON to enforce custom rules before deployment.</p>
      </div>`
      },
      {
        question: "What are Sentinel Policies and how are they used in Terraform Enterprise?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Sentinel Policies (Terraform Enterprise)</strong></h3>
        <p>
          <strong>Sentinel</strong> is HashiCorp’s policy-as-code framework built into Terraform Cloud/Enterprise for governance and compliance.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Runs after <code>terraform plan</code> to evaluate compliance rules.</li>
          <li>Can enforce mandatory policy checks before approval.</li>
          <li>Used for governance like tagging, cost limits, region restrictions.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>import "tfplan/v2" as tfplan

main = rule {
  all tfplan.resources.azurerm_storage_account as _, r {
    r.applied.tags.Environment is "prod"
  }
}</code></pre>
        <p><strong>In Practice:</strong> We use Sentinel in Terraform Cloud to block any plan missing mandatory tags or deploying to non-approved regions.</p>
      </div>`
      },
      {
        question: "How do you combine Checkov, TFLint, and OPA in one Azure DevOps pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Combined IaC Security Pipeline</strong></h3>
        <p>
          You can chain these tools in a single CI/CD pipeline for multi-layered IaC validation:
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>stages:
- stage: Validate
  jobs:
  - job: StaticAnalysis
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: pip install checkov tflint conftest -q
        displayName: Install Tools
      - script: tflint --init && tflint
        displayName: Run TFLint
      - script: checkov -d . --quiet
        displayName: Run Checkov
      - script: conftest test plan.json
        displayName: Run OPA Policies</code></pre>
        <p><strong>In Practice:</strong> I execute all three tools before Terraform apply — only compliant infrastructure gets provisioned to Azure.</p>
      </div>`
      },
      {
        question: "What are your best practices for secure Terraform pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Terraform Pipeline Security Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔒 Store state files in encrypted Azure Storage Account with RBAC.</li>
          <li>🚫 Never store secrets in code — use Azure Key Vault integration.</li>
          <li>✅ Scan Terraform code with TFLint & Checkov in every PR.</li>
          <li>🧩 Enforce tagging and naming standards via Sentinel or OPA policies.</li>
          <li>📜 Maintain version-locked Terraform providers to avoid breaking changes.</li>
        </ul>
        <p><strong>In Practice:</strong> Our DevOps pipeline uses TFLint + Checkov + OPA before <code>terraform plan</code>, then auto-applies only if all policies pass — ensuring zero drift and full compliance.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Incident Management & Root Cause Analysis (RCA)",
    questions: [
      {
        question: "What is Incident Management in DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Incident Management Overview</strong></h3>
        <p>
          <strong>Incident Management</strong> is the process of identifying, analyzing, and resolving unexpected disruptions in production systems to restore normal operations quickly.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📟 Detect incidents via monitoring tools (Azure Monitor, Grafana, App Insights).</li>
          <li>🎯 Prioritize based on severity (P1 - Critical, P2 - Major, etc.).</li>
          <li>🧰 Notify on-call engineers via ServiceNow, PagerDuty, or Teams alerts.</li>
          <li>🛠️ Use runbooks or automation scripts for quick recovery.</li>
        </ul>
        <p><strong>In Practice:</strong> I handle production incidents through a ServiceNow workflow linked to Azure Alerts — ensuring fast response and accountability.</p>
      </div>`
      },
      {
        question: "What is Root Cause Analysis (RCA) and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Understanding Root Cause Analysis (RCA)</strong></h3>
        <p>
          <strong>RCA</strong> is a structured process to identify the underlying cause of an incident — not just fix the symptom.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔍 Investigate logs, metrics, and timeline of the issue.</li>
          <li>🧩 Identify what failed — code, infra, or configuration.</li>
          <li>🧾 Document the root cause and preventive measures.</li>
        </ul>
        <p><strong>In Practice:</strong> After each major outage, I prepare a formal RCA document within 24 hours — reviewed in the weekly ops sync to ensure permanent fixes.</p>
      </div>`
      },
      {
        question: "How do you handle a production incident?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Production Incident Handling Steps</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Detection — Monitoring tools trigger alerts (Azure Monitor / Grafana).</li>
          <li>2️⃣ Acknowledgement — On-call engineer gets notified via Teams / PagerDuty.</li>
          <li>3️⃣ Containment — Isolate the failing component to reduce blast radius.</li>
          <li>4️⃣ Mitigation — Apply workaround or rollback last deployment.</li>
          <li>5️⃣ Communication — Update stakeholders via incident channel.</li>
          <li>6️⃣ RCA — Analyze logs and identify the failure cause post recovery.</li>
        </ul>
        <p><strong>In Practice:</strong> For AKS outage incidents, I immediately scale backup pods, notify QA via Teams, and initiate rollback through YAML pipeline within 5 minutes.</p>
      </div>`
      },
      {
        question: "How do you document and present an RCA report?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Documenting RCA Reports</strong></h3>
        <p>
          RCA documentation ensures transparency and learning from incidents.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>📄 RCA Template Example:
Incident ID: INC-2025-0421
Date: 2025-11-07
Impact: 25% users unable to access App Service
Root Cause: Application Gateway backend probe failure due to expired SSL certificate
Resolution: Updated SSL binding and restarted App Service
Preventive Action: Added SSL expiry alert (7-day threshold)</code></pre>
        <p><strong>In Practice:</strong> I maintain all RCA reports in Confluence and review monthly to identify recurring issues and automate prevention.</p>
      </div>`
      },
      {
        question: "How do you automate incident detection and response?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤖 <strong>Automated Incident Response</strong></h3>
        <p>
          Automation reduces MTTR (Mean Time to Recovery) and ensures faster resolutions.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Monitor</strong> + <strong>Logic Apps</strong> for alert-triggered actions.</li>
          <li>Auto-create incidents in <strong>ServiceNow</strong> or <strong>Jira</strong>.</li>
          <li>Trigger <strong>Runbooks</strong> to restart VMs, scale AKS nodes, or recycle App Services.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Example Logic App Trigger
When Azure Alert fires:
→ Check resource tag “auto-remediate”
→ Run PowerShell to restart resource
→ Post message in Teams channel</code></pre>
        <p><strong>In Practice:</strong> I built a Logic App flow where high CPU alerts automatically restart the VM and post status updates in our Teams war room channel.</p>
      </div>`
      },
      {
        question: "How do you perform post-incident analysis and continuous improvement?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Post-Incident Analysis & Continuous Improvement</strong></h3>
        <p>
          Post-incident reviews help identify systemic issues and build preventive culture.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Review incident trend metrics (MTTR, incident frequency).</li>
          <li>💬 Conduct blameless post-mortems for collaborative learning.</li>
          <li>📅 Create action items for long-term fixes and track completion.</li>
        </ul>
        <p><strong>In Practice:</strong> After a 2025 AKS network outage, we introduced health probes + pre-deployment checks to avoid similar issues in the future.</p>
      </div>`
      },
      {
        question: "What are your best practices for managing incidents effectively?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Incident Management Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>⏱️ Define SLAs for each alert severity (P1 = 15 mins response).</li>
          <li>🔁 Automate repetitive runbooks for common incidents (restart, cleanup).</li>
          <li>📞 Maintain 24x7 on-call rotation with proper escalation matrix.</li>
          <li>🧠 Keep all incident SOPs and RCAs documented in one knowledge base.</li>
          <li>📊 Measure KPIs: MTTA (Mean Time to Acknowledge) & MTTR (Mean Time to Resolve).</li>
        </ul>
        <p><strong>In Practice:</strong> Our DevOps team reduced MTTR by 40% after automating VM and App Service restart workflows through Azure Automation.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Real-World Azure DevOps Troubleshooting Use Cases (Project-Level Scenarios)",
    questions: [
      {
        question: "Terraform apply failed in Azure DevOps — how did you fix it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform Apply Failure</strong></h3>
        <p>
          Once, <strong>terraform apply</strong> failed in pipeline due to state file lock and missing RBAC permissions on the storage account used for backend.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Checked <code>terraform plan</code> output — verified backend state path.</li>
          <li>🔑 Used <code>az role assignment list</code> to ensure SPN had “Storage Blob Contributor” role.</li>
          <li>🗝️ Ran <code>terraform force-unlock</code> to clear stale lock.</li>
          <li>♻️ Re-ran pipeline and validated state consistency.</li>
        </ul>
        <p><strong>In Practice:</strong> I automated state unlock and permission verification script before apply to prevent this recurring issue.</p>
      </div>`
      },
      {
        question: "Docker image build was failing in Azure DevOps — what was your approach?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Docker Build Failure Case</strong></h3>
        <p>
          Build failed with error <code>failed to pull base image: unauthorized</code> due to ACR authentication issue.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Verified that <strong>Service Connection</strong> had ACR push/pull permissions.</li>
          <li>🔄 Re-authenticated using <code>az acr login --name &lt;registry&gt;</code>.</li>
          <li>⚙️ Added <strong>ACR credentials</strong> under pipeline variables (secret).</li>
          <li>✅ Finally ran <code>docker build</code> with <code>--pull</code> flag to refresh cache.</li>
        </ul>
        <p><strong>In Practice:</strong> I added a pre-step in pipeline to auto-login ACR before any docker command — eliminating manual authentication errors.</p>
      </div>`
      },
      {
        question: "Pipeline got stuck on 'Initialize job' — what did you do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Job Initialization Stuck</strong></h3>
        <p>
          The job hung during <code>Initialize job</code> phase due to unavailable build agents and queue saturation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>👀 Checked Agent Pool → found only 1 self-hosted agent, busy with long-running job.</li>
          <li>🚀 Scaled agent pool from 1 → 3 VMs using auto-scale logic in Azure VMSS.</li>
          <li>🧩 Configured concurrency limit (max parallel = 2) to avoid overload.</li>
        </ul>
        <p><strong>In Practice:</strong> I automated agent scaling via Azure Automation script — ensuring no job waits longer than 2 minutes in queue.</p>
      </div>`
      },
      {
        question: "Release pipeline failed during deployment to App Service — what was root cause?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>App Service Deployment Failure</strong></h3>
        <p>
          The deployment failed with 403 Forbidden — cause was incorrect publishing profile and expired Service Principal secret.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔑 Rotated SPN secret in Azure AD and updated service connection.</li>
          <li>📁 Regenerated App Service publish profile.</li>
          <li>🧰 Validated using <code>az webapp deployment list-publishing-profiles</code>.</li>
          <li>✅ Re-triggered release and verified success in deployment logs.</li>
        </ul>
        <p><strong>In Practice:</strong> Now we store SPN secrets in Azure Key Vault and fetch dynamically at runtime to prevent secret expiry failures.</p>
      </div>`
      },
      {
        question: "Build pipeline failed due to missing NuGet dependencies — what did you do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>NuGet Dependency Failure</strong></h3>
        <p>
          Build failed as private NuGet feed was inaccessible from build agent.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Added NuGet feed credentials under <strong>Service Connection → NuGet</strong>.</li>
          <li>🔄 Updated YAML to restore packages using auth token.</li>
          <li>📜 Example:</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: NuGetAuthenticate@1
- script: dotnet restore MyApp.sln</code></pre>
        <p><strong>In Practice:</strong> I implemented <code>NuGetAuthenticate@1</code> as a reusable template across projects — fixing 90% package restore issues.</p>
      </div>`
      },
      {
        question: "Terraform state drift detected in pipeline — what steps did you take?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Terraform State Drift Resolution</strong></h3>
        <p>
          Drift occurred because manual resource modification in Azure Portal caused mismatch between infra and state file.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔍 Ran <code>terraform plan -refresh-only</code> to identify drift.</li>
          <li>🗂️ Imported unmanaged resources using <code>terraform import</code>.</li>
          <li>🧹 Educated team to never manually change cloud resources.</li>
          <li>✅ Enforced Policy-as-Code via Azure Policy and OPA to block direct portal changes.</li>
        </ul>
        <p><strong>In Practice:</strong> We enabled Azure Activity Logs integration — any manual infra change now triggers an alert and RCA task.</p>
      </div>`
      },
      {
        question: "Artifact publishing failed — what’s your approach to debug?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📁 <strong>Artifact Publishing Failure</strong></h3>
        <p>
          Failure happened due to incorrect artifact path and missing permissions to pipeline workspace.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧾 Verified correct path in <code>publish</code> step.</li>
          <li>🧠 Checked if <code>$(Build.ArtifactStagingDirectory)</code> exists before publish.</li>
          <li>✅ Fixed by adding:</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'</code></pre>
        <p><strong>In Practice:</strong> I also added cleanup task post-build to remove large temp files — preventing storage overflows on agents.</p>
      </div>`
      },
      {
        question: "YAML variable substitution failed during deployment — how did you fix it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>YAML Variable Substitution Issue</strong></h3>
        <p>
          Pipeline failed to replace environment variables in <code>appsettings.json</code> because variable names didn’t match case sensitivity.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Verified variables and replaced syntax using <code>$(variableName)</code>.</li>
          <li>📜 Used variable groups and linked correctly to pipeline.</li>
          <li>✅ Added explicit replacement task:</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: FileTransform@2
  inputs:
    folderPath: '$(System.DefaultWorkingDirectory)'
    fileType: 'json'</code></pre>
        <p><strong>In Practice:</strong> I created environment-specific variable groups (DEV, QA, PROD) and automated linking via templates to eliminate manual mismatches.</p>
      </div>`
      },
      {
        question: "Long-running build failed due to agent timeout — how to handle it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏱️ <strong>Build Timeout Issue</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Checked build duration → exceeded default 60 mins agent limit.</li>
          <li>Split large jobs into smaller stages — parallelized tasks (build, test, scan).</li>
          <li>Increased timeout using <code>timeoutInMinutes: 120</code> in YAML.</li>
        </ul>
        <p><strong>In Practice:</strong> After splitting large monolithic builds, total build time dropped from 95 mins to 34 mins — with zero timeouts.</p>
      </div>`
      },
      {
        question: "How do you perform RCA after a failed deployment in production?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>RCA for Failed Production Deployment</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📜 Collected pipeline logs and Application Insights telemetry.</li>
          <li>🔎 Compared last successful and failed commit diffs.</li>
          <li>🧩 Identified config drift — missing Key Vault secret reference.</li>
          <li>🛠️ Fixed YAML template and added validation job before deploy.</li>
          <li>🧾 Documented RCA in Confluence with preventive actions.</li>
        </ul>
        <p><strong>In Practice:</strong> I built an automated validation stage to check secret injection and service connectivity before deploying to PROD.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "15. Azure DevOps Advanced Topics — Approvals, Environments, Gates & Deployment Strategies",
    questions: [
      {
        question: "What are Environments in Azure DevOps and why use them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏷️ <strong>Azure DevOps Environments</strong></h3>
        <p>
          <strong>Environments</strong> represent deployment targets (DEV, QA, UAT, PROD, AKS cluster, VM, etc.) in Azure DevOps.  
          They provide a single place to model targets, deploy using deployment jobs, and attach approvals, checks, and resource protections.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Track deployment history and who deployed what and when.</li>
          <li>Attach environment-specific secrets and service connections.</li>
          <li>Use environment-level checks (approvals, gates) to control deployments.</li>
        </ul>
        <p><strong>In Practice:</strong> I create Environments for each stage (dev/qa/uat/prod) and attach required service connections and post-deploy checks so PROD never gets an automated blind deploy.</p>
      </div>`
      },
      {
        question: "What are Approvals & Checks for Environments and how do they work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Approvals & Checks</strong></h3>
        <p>
          Approvals and checks are governance controls you attach to an environment to gate deployments. They include:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Approvals</strong> — manual approval by individuals/groups before deployment proceeds.</li>
          <li><strong>Gates</strong> — automated checks like ARM template validation, Azure Resource Health, REST API checks, or required work items.</li>
          <li><strong>Branch controls</strong> and required reviewers can also be enforced via pipeline policies.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure 2 approvers for PROD (on-call + manager) and add an automated gate that validates App Insights health and successful smoke test endpoint before traffic is switched.</p>
      </div>`
      },
      {
        question: "How do you configure environment approvals in YAML pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Environment Approvals in YAML Flow</strong></h3>
        <p>
          Approvals are configured in the Azure DevOps UI on the Environment itself (Approvals & checks) — YAML references the environment name.  
          The pipeline uses a <code>deployment</code> job that targets the environment, so checks are enforced automatically.
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>stages:
- stage: DeployProd
  jobs:
  - deployment: DeployToProd
    environment: 'prod'
    strategy:
      runOnce:
        deploy:
          steps:
            - script: echo "Deploying to PROD"</code></pre>
        <p><strong>In Practice:</strong> I keep approval logic outside YAML (in environment settings) so non-dev teams (PMs, SecOps) can manage approvers without code changes.</p>
      </div>`
      },
      {
        question: "What are Deployment Gates and common gate types?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⛩️ <strong>Deployment Gates</strong></h3>
        <p>
          Gates are automated pre-deployment checks that must pass before an approval is considered complete. Common types:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>REST API check (call a health endpoint or external system).</li>
          <li>Azure Resource Health / ARM template validation.</li>
          <li>Query-based checks (work items linked, successful smoke test results in DB).</li>
          <li>Invoke Logic Apps or Azure Functions for custom validation.</li>
        </ul>
        <p><strong>In Practice:</strong> I use a Gate that calls a smoke-test endpoint after the staging deploy; it returns pass/fail and only then the PROD approver sees a green check to approve.</p>
      </div>`
      },
      {
        question: "Explain Blue-Green deployment and how you implement it in Azure.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔵🟢 <strong>Blue-Green Deployment</strong></h3>
        <p>
          Blue-Green maintains two identical environments: <em>Blue</em> (current) and <em>Green</em> (new). Deploy to Green, test, then switch traffic to Green — rollback is just switch back.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Zero-downtime cutover by switching load balancer / DNS / Traffic Manager.</li>
          <li>Use health probes and smoke tests before switching traffic.</li>
          <li>Keep previous environment for quick rollback and post-deploy validation.</li>
        </ul>
        <p><strong>In Practice:</strong> For web apps I deploy to a slot (or separate App Service), run automated smoke tests, then swap slots or change Traffic Manager profile to cut traffic to the green environment.</p>
      </div>`
      },
      {
        question: "Explain Canary deployment and rollout strategies.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐤 <strong>Canary Deployment</strong></h3>
        <p>
          Canary is a progressive rollout to a small portion of users initially, monitor metrics, then increase rollout percentage. Good for catching issues early without full blast.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Start 1-5% traffic → monitor errors, latency, resource usage.</li>
          <li>Use weighted routing (Ingress, App Gateway, Front Door, or service mesh) to control percentages.</li>
          <li>Automate promotion based on health metrics or manual approvals between steps.</li>
        </ul>
        <p><strong>In Practice:</strong> I implement canary using Argo Rollouts / Istio for AKS or Azure Front Door weights for App Services, with automatic rollback if error rate crosses threshold.</p>
      </div>`
      },
      {
        question: "What is Rolling / Ring deployment, and where is it useful?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Rolling / Ring Deployment</strong></h3>
        <p>
          Rolling updates replace instances in batches (e.g., 10% at a time) until all are updated — reduces risk while maintaining capacity. Ring deployments are staged rollouts across user groups or regions (ring0 = internal, ring1 = beta, ring2 = prod).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use for stateful services or when gradual capacity change is required.</li>
          <li>Combine with health checks and min-availability to avoid service disruption.</li>
        </ul>
        <p><strong>In Practice:</strong> For large clusters I use rolling updates with maxUnavailable set to maintain N replicas and ring deployments for staged customer exposure (internal → staging → global).</p>
      </div>`
      },
      {
        question: "How do you implement automated rollback and health checks?",
        answerHtml: `
      <div class="answer-rich">
        <h3>↩️ <strong>Automated Rollback & Health Checks</strong></h3>
        <p>
          Key elements: automated health validation, alert thresholds, and a rollback action if health degrades.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Run smoke tests (synthetic) immediately after deploy stage; gate promotion on pass.</li>
          <li>Monitor metrics (error rate, latency, CPU) for a short observation window post-deploy.</li>
          <li>If thresholds breached, trigger rollback job (re-deploy previous artifact or switch traffic back).</li>
        </ul>
        <p><strong>In Practice:</strong> I wire Application Insights and Prometheus metrics into deployment gates — if errorRate &gt; 1% for 5 mins, a Logic App triggers a rollback stage in the pipeline and notifies the incident channel.</p>
      </div>`
      },
      {
        question: "How do you secure deployments and enforce approvals programmatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Securing Deployments & Programmatic Approvals</strong></h3>
        <p>
          Security controls are enforced at environment-level and via pipeline policies:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Environment checks</strong> (approvals, ARM validation, required work items).</li>
          <li>Enforce branch policies (required reviewers, build validation) for pipeline-as-code changes.</li>
          <li>Use service principals with least privilege and rotate credentials via Key Vault.</li>
          <li>Require manual approval for deployments to sensitive environments and log every approver action for audit.</li>
        </ul>
        <p><strong>In Practice:</strong> I combine branch policies, environment approvals, and required gates (smoke tests + security scan) so no code can reach PROD without multi-party validation.</p>
      </div>`
      },
      {
        question: "What deployment strategy would you choose for a high-risk change and why?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Choosing a Deployment Strategy</strong></h3>
        <p>
          For a high-risk change (DB migration, critical API update), I prefer a staged approach:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Canary or ring deployment to expose change to small audience first.</li>
          <li>2️⃣ Run extensive automated integration and end-to-end tests in staging.</li>
          <li>3️⃣ Use feature flags for runtime toggle and rapid rollback without redeploy.</li>
          <li>4️⃣ If schema changes required, use backward-compatible migrations first and schedule final cutover in low-traffic window.</li>
        </ul>
        <p><strong>In Practice:</strong> For DB changes I deploy code that supports both old & new schema, rollout the schema migration using controlled scripts, then switch traffic after validation — minimizing outage and rollback complexity.</p>
      </div>`
      }
    ]
  }

];

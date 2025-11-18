




export interface QuestionAnswer {
  question: string;
  answer?: string;
  answerHtml?: string;
}

export const azureSections = [
  {
    title: "1. Azure Fundamentals – Resource Groups, ARM & Governance",
    questions: [
      {
        question: "What is a Resource Group in Azure and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Azure Resource Group (RG)</strong></h3>
        <p>
          A <strong>Resource Group</strong> is a logical container that holds related Azure resources (VMs, networks, storage, etc.) for unified management.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Simplifies management — deploy, monitor, and delete as one unit.</li>
          <li>🔹 Enables consistent <strong>RBAC, policies, and tagging</strong> across all resources inside.</li>
          <li>🔹 Supports lifecycle grouping — e.g., each environment (DEV/UAT/PROD) in its own RG.</li>
        </ul>
        <p><strong>In Practice:</strong> I group resources per environment or per application to apply role-based permissions and cost tracking easily.</p>
      </div>`
      },
      {
        question: "What is Azure Resource Manager (ARM)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Azure Resource Manager (ARM)</strong></h3>
        <p>
          ARM is the <strong>deployment and management layer</strong> in Azure that provides a consistent way to create, update, and manage resources using templates or API calls.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📄 Uses <strong>ARM templates (JSON)</strong> for declarative IaC.</li>
          <li>🔐 Supports <strong>RBAC, locks, and tags</strong> through the same control plane.</li>
          <li>🧩 Enables <strong>idempotent deployments</strong> — the same template ensures consistent infra every time.</li>
        </ul>
        <p><strong>In Practice:</strong> Terraform or Bicep both use the ARM API behind the scenes to provision Azure resources consistently.</p>
      </div>`
      },
      {
        question: "How do you control access to Azure resources (RBAC)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Role-Based Access Control (RBAC)</strong></h3>
        <p>
          RBAC manages who can access what at which scope (subscription, RG, or resource level).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>👤 Assign roles like <code>Owner</code>, <code>Contributor</code>, <code>Reader</code> or <code>Custom</code>.</li>
          <li>🌳 Scope hierarchy: <strong>Management Group → Subscription → Resource Group → Resource</strong>.</li>
          <li>🧩 Supports <strong>Azure AD groups</strong> for enterprise-wide control.</li>
        </ul>
        <p><strong>Best Practice:</strong> Apply least-privilege at RG level; use Azure AD PIM for temporary elevated access.</p>
      </div>`
      },
      {
        question: "What are Azure Blueprints and why are they useful?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Azure Blueprints</strong></h3>
        <p>
          Blueprints define a repeatable set of <strong>governance and configuration artifacts</strong> — like policies, RBAC roles, ARM templates, and resource groups.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🎯 Used to deploy <strong>standardized environments</strong> across subscriptions.</li>
          <li>🔐 Ensures compliance by automatically applying policies and access controls.</li>
          <li>🚀 Great for creating Landing Zones aligned with enterprise standards.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Blueprints to deploy baseline configurations (naming, tagging, policies) for new environments automatically.</p>
      </div>`
      },
      {
        question: "What is Azure Policy and how do you enforce it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Azure Policy</strong></h3>
        <p>
          Azure Policy enforces organizational standards and compliance at scale.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Defines allowed or denied configurations — e.g., “Only East US region allowed.”</li>
          <li>🔍 Can <strong>audit, deny, or remediate</strong> non-compliant resources automatically.</li>
          <li>📊 Evaluates compliance continuously via <strong>Policy Insights</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I assign policies at subscription or RG level — e.g., enforce tags, restrict VM SKUs, or require diagnostic logs.</p>
      </div>`
      },
      {
        question: "What tools are used for Azure governance and policy management?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Azure Governance Tools</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🏛️ <strong>Management Groups</strong> – Organize subscriptions for hierarchical policy/RBAC control.</li>
          <li>📜 <strong>Azure Policy</strong> – Enforce compliance at resource or subscription level.</li>
          <li>🧱 <strong>Blueprints</strong> – Combine policies, roles, and templates for environment deployment.</li>
          <li>💰 <strong>Cost Management + Budgets</strong> – Track and control cloud spend.</li>
          <li>🧮 <strong>Tags</strong> – Standardize resource identification for chargeback/showback.</li>
        </ul>
        <p><strong>In Practice:</strong> Combine Policy + Management Groups to ensure consistent compliance across 100+ subscriptions.</p>
      </div>`
      },
      {
        question: "What are the Azure Well-Architected Framework pillars?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Azure Well-Architected Framework (WAF) Pillars</strong></h3>
        <p>
          The framework helps design reliable, secure, and cost-effective cloud solutions.  
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔒 <strong>Security</strong> – Protect data, identity, and network.</li>
          <li>⚙️ <strong>Operational Excellence</strong> – Automate, monitor, and improve processes.</li>
          <li>🧩 <strong>Reliability</strong> – Ensure resilience and disaster recovery.</li>
          <li>💰 <strong>Cost Optimization</strong> – Maximize efficiency, eliminate waste.</li>
          <li>🚀 <strong>Performance Efficiency</strong> – Optimize scale and resource use.</li>
        </ul>
        <p><strong>In Practice:</strong> I use these pillars to review Azure workloads quarterly for performance, cost, and resilience improvements.</p>
      </div>`
      },
      {
        question: "What are the key design principles for an Azure Landing Zone?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure Landing Zone Design Principles</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🏛️ Use <strong>management groups</strong> for scalable governance.</li>
          <li>🔐 Implement <strong>RBAC, policies, and tagging</strong> at every level.</li>
          <li>📦 Define <strong>Hub-and-Spoke</strong> networking for shared services (firewall, DNS, VPN).</li>
          <li>🧰 Enable <strong>centralized logging & monitoring</strong> via Log Analytics.</li>
          <li>📈 Plan <strong>subscription separation</strong> by environment or workload.</li>
        </ul>
        <p><strong>In Practice:</strong> A good Landing Zone enforces security, scalability, and governance before workloads are deployed.</p>
      </div>`
      },
      {
        question: "Setting up an Azure Landing Zone with Hub-and-Spoke Architecture — explain the best-practice design.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Hub-and-Spoke Landing Zone – Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Hub:</strong> Shared services — Azure Firewall, Bastion, DNS, ExpressRoute, and monitoring agents.</li>
          <li><strong>Spokes:</strong> Individual workloads (Dev, QA, Prod) isolated via peering to the hub.</li>
          <li>🔐 Use <strong>NSGs and Azure Firewall</strong> for layered security.</li>
          <li>🧱 Centralize identity with <strong>Azure AD + RBAC</strong>.</li>
          <li>💡 Use <strong>Azure Policy</strong> and <strong>Blueprints</strong> to enforce configuration standards.</li>
          <li>📊 Connect all spokes to a <strong>central Log Analytics Workspace</strong> for unified monitoring.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy Landing Zones using Terraform with separate state files for each spoke, ensuring consistent hub integration and controlled access boundaries.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Virtual Networks – VNet, Subnetting, Peering & Name Resolution",
    questions: [
      {
        question: "What is a Virtual Network (VNet) in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure Virtual Network (VNet)</strong></h3>
        <p>
          A <strong>VNet</strong> is a logically isolated private network in Azure that connects resources securely — similar to a LAN in on-prem environments.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏗️ Enables secure communication between Azure resources like VMs, AKS, and App Services.</li>
          <li>🔐 Supports inbound/outbound traffic control through NSGs, UDRs, and Firewalls.</li>
          <li>🌍 Allows <strong>hybrid connectivity</strong> with on-prem via VPN or ExpressRoute.</li>
        </ul>
        <p><strong>In Practice:</strong> I use VNets to segment workloads — for example, one per environment (Dev/UAT/Prod) with controlled peering between them.</p>
      </div>`
      },
      {
        question: "What is a subnet and how is it used inside a VNet?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Azure Subnet</strong></h3>
        <p>
          A <strong>subnet</strong> is a logical partition of a VNet’s IP range. It helps organize and secure workloads by function or role.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Subnets allow resource isolation — e.g., frontend, backend, and database subnets.</li>
          <li>🔹 NSGs and Route Tables are assigned at subnet level for traffic control.</li>
          <li>🔹 Subnets also reserve IPs for Azure services like Private Endpoints or Gateways.</li>
        </ul>
        <p><strong>In Practice:</strong> I keep separate subnets for AKS nodes, jumpboxes, and databases — improves security and network performance.</p>
      </div>`
      },
      {
        question: "Given CIDR 192.168.1.0/24, how would you create two subnets (address planning)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📏 <strong>Subnetting Example: 192.168.1.0/24</strong></h3>
        <p>
          CIDR <code>/24</code> gives <strong>256 IPs</strong> (0–255). To split into 2 equal subnets:
        </p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>Subnet A: 192.168.1.0/25 → 128 IPs (0–127)
Subnet B: 192.168.1.128/25 → 128 IPs (128–255)</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Azure reserves 5 IPs per subnet (network, broadcast, and internal use).</li>
          <li>🔹 Plan address space to leave room for growth — avoid over-allocating small CIDRs.</li>
        </ul>
        <p><strong>In Practice:</strong> I use /25 for frontend and /25 for backend — keeping room for scaling later without overlap.</p>
      </div>`
      },
      {
        question: "What is VNet peering and how is it configured?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>VNet Peering</strong></h3>
        <p>
          VNet Peering connects two VNets for private communication using the Azure backbone — no public internet involved.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Steps to configure:
            <ul>
              <li>1️⃣ Go to VNet → Peerings → Add Peering.</li>
              <li>2️⃣ Select remote VNet and configure traffic settings.</li>
              <li>3️⃣ Enable <strong>“Allow forwarded traffic”</strong> and <strong>“Use remote gateway”</strong> if needed for hybrid routing.</li>
            </ul>
          </li>
          <li>🔐 Traffic between peered VNets stays within Microsoft’s private network.</li>
        </ul>
        <p><strong>In Practice:</strong> I peer Dev ↔ Shared Services VNet for monitoring and identity access, but block Prod ↔ Dev for isolation.</p>
      </div>`
      },
      {
        question: "What are network peering limitations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>VNet Peering Limitations</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>❌ Overlapping IP ranges are <strong>not supported</strong>.</li>
          <li>❌ Peering is <strong>non-transitive</strong> — VNet A ↔ B and B ↔ C doesn’t mean A ↔ C.</li>
          <li>🔒 Cannot use Azure Firewall across unpeered VNets without routing setup.</li>
          <li>⚙️ Bandwidth is limited by VM NIC capacity, not by peering link.</li>
        </ul>
        <p><strong>Best Practice:</strong> Use Hub-and-Spoke model with a shared hub for central routing and inspection.</p>
      </div>`
      },
      {
        question: "What is Azure DNS? How do you configure DNS zones (Public vs Private)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure DNS Overview</strong></h3>
        <p>
          Azure DNS is a cloud-based DNS hosting service that provides name resolution for your domains.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Public DNS Zone:</strong> Resolves names over the Internet (e.g., <code>myapp.com</code>).</li>
          <li><strong>Private DNS Zone:</strong> Resolves names only inside your VNets (e.g., <code>db.internal.cloud</code>).</li>
          <li>🔧 You can link private DNS zones to one or multiple VNets for internal name resolution.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure private zones for service discovery (AKS, databases) and public zones for app domains.</p>
      </div>`
      },
      {
        question: "I have a Public DNS Zone and a Private DNS Zone — what’s the difference?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Public vs Private DNS Zones</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th style="text-align:left;">Aspect</th><th>Public DNS Zone</th><th>Private DNS Zone</th></tr>
          <tr><td>Scope</td><td>Accessible over Internet</td><td>Accessible only inside linked VNets</td></tr>
          <tr><td>Use Case</td><td>Websites, APIs, external endpoints</td><td>Internal services (AKS, DB, VMs)</td></tr>
          <tr><td>Security</td><td>Public exposure (needs HTTPS/WAF)</td><td>Internal and isolated</td></tr>
        </table>
        <p><strong>In Practice:</strong> Public zone: <code>app.company.com</code> → WAF IP; Private zone: <code>db.internal.company.local</code> → internal IP.</p>
      </div>`
      },
      {
        question: "User sees DNS resolution errors and slow response for an app hosted on AKS — how would you troubleshoot and fix?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐛 <strong>DNS Resolution & Latency Troubleshooting (AKS)</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔍 Check Pod DNS config:
            <ul>
              <li>Run <code>kubectl exec &lt;pod&gt; -- cat /etc/resolv.conf</code> to verify DNS server (usually kube-dns or CoreDNS).</li>
              <li>Ensure CoreDNS pods are running and healthy in <code>kube-system</code> namespace.</li>
            </ul>
          </li>
          <li>⚙️ Validate name resolution:
            <ul>
              <li><code>nslookup myservice.default.svc.cluster.local</code> inside pod.</li>
              <li>Check for CoreDNS ConfigMap misconfiguration or forwarding loops.</li>
            </ul>
          </li>
          <li>💡 Optimize:
            <ul>
              <li>Increase CoreDNS replica count and enable caching.</li>
              <li>If using Private DNS Zone → ensure VNet link exists and firewall not blocking UDP/53.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> Most DNS slowness in AKS comes from CoreDNS overload or missing private DNS link — fix by scaling CoreDNS and validating zone linkage.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot connectivity between VNets?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>VNet Connectivity Troubleshooting</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Check IP Addressing:</strong> Ensure no overlapping CIDRs.</li>
          <li>2️⃣ <strong>Verify Peering:</strong> Confirm “Allow traffic both ways” and “Use remote gateway” enabled if needed.</li>
          <li>3️⃣ <strong>NSGs:</strong> Check inbound/outbound rules allow required ports between subnets/VNets.</li>
          <li>4️⃣ <strong>Route Tables (UDRs):</strong> Verify routes aren’t forcing traffic away (e.g., via VPN gateway incorrectly).</li>
          <li>5️⃣ <strong>Firewall/NSG Flow Logs:</strong> Review logs for drops (use Network Watcher → Connection Troubleshoot).</li>
        </ul>
        <p><strong>In Practice:</strong> I use <code>Network Watcher Connection Troubleshoot</code> between private IPs — it pinpoints if packet drops occur at NSG, route, or peering layer.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. Secure Connectivity – VPN, ExpressRoute, Site-to-Site",
    questions: [
      {
        question: "What information is required to establish a site-to-site VPN connection?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Site-to-Site VPN — Prerequisites</strong></h3>
        <p>
          A Site-to-Site (S2S) VPN securely connects your on-prem network with Azure VNet via IPsec tunnel over the Internet.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏢 <strong>On-prem details:</strong> Public IP of the on-prem VPN device (no NAT, static IP).</li>
          <li>📶 <strong>Address space:</strong> On-prem subnet range (e.g., 10.0.0.0/16).</li>
          <li>☁️ <strong>Azure details:</strong> Azure VNet address space (e.g., 10.1.0.0/16).</li>
          <li>🔐 <strong>Shared key (Pre-Shared Key – PSK)</strong> for IPsec authentication.</li>
          <li>⚙️ <strong>IKE/IPsec parameters:</strong> Encryption algorithms, lifetime, and protocol (IKEv2).</li>
          <li>🧱 <strong>Azure VPN Gateway:</strong> Created in a dedicated Gateway Subnet (<code>10.1.255.0/27</code> typical).</li>
        </ul>
        <p><strong>In Practice:</strong> I verify both sides’ IPsec parameters match — mismatched PSK or lifetime often causes tunnel failures.</p>
      </div>`
      },
      {
        question: "What is an ExpressRoute circuit and how is it different from VPN Gateway?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>ExpressRoute vs VPN Gateway</strong></h3>
        <p>
          <strong>ExpressRoute</strong> provides a private, dedicated connection between on-prem datacenter and Azure via a service provider — not over the Internet.
        </p>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;">
          <tr><th style="text-align:left;">Feature</th><th>ExpressRoute</th><th>VPN Gateway</th></tr>
          <tr><td>Connectivity</td><td>Private (through MPLS)</td><td>Public Internet (IPsec)</td></tr>
          <tr><td>Performance</td><td>High bandwidth (up to 100 Gbps)</td><td>Moderate (up to 1.25 Gbps)</td></tr>
          <tr><td>Latency</td><td>Low and consistent</td><td>Variable</td></tr>
          <tr><td>Security</td><td>Private, not encrypted</td><td>Encrypted via IPsec</td></tr>
          <tr><td>Use Case</td><td>Enterprise hybrid setup</td><td>SMB or temporary connectivity</td></tr>
        </table>
        <p><strong>In Practice:</strong> I recommend ExpressRoute for production-grade hybrid setups where latency and SLA matter — VPN for smaller, flexible connections.</p>
      </div>`
      },
      {
        question: "How do you connect on-prem resources to Azure via VPN Gateway?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Connecting On-Prem to Azure via VPN Gateway</strong></h3>
        <p>
          VPN Gateway establishes an IPsec tunnel between Azure VNet and on-prem router/firewall.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Create a <strong>VNet</strong> and a dedicated <code>GatewaySubnet</code> (e.g., 10.1.255.0/27).</li>
          <li>2️⃣ Deploy an <strong>Azure VPN Gateway</strong> in that subnet.</li>
          <li>3️⃣ Create a <strong>Local Network Gateway (LNG)</strong> with your on-prem public IP and local address range.</li>
          <li>4️⃣ Create a <strong>Connection</strong> between the VPN Gateway and LNG using a shared PSK.</li>
          <li>5️⃣ Configure matching tunnel parameters on the on-prem VPN device (Cisco, FortiGate, etc.).</li>
        </ul>
        <p><strong>Verification:</strong> Use <code>Get-AzVirtualNetworkGatewayConnection</code> or Azure Portal → “Connection status: Connected”.</p>
        <p><strong>In Practice:</strong> I always test with <code>Test-AzNetworkWatcherConnectivity</code> to verify reachability before production rollout.</p>
      </div>`
      },
      {
        question: "Define Hub & Spoke Architecture — brief the design and when to use it.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Hub & Spoke Network Architecture</strong></h3>
        <p>
          A <strong>Hub-and-Spoke</strong> model centralizes shared services in one VNet (Hub) and connects workload VNets (Spokes) to it via peering.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏛️ <strong>Hub:</strong> Contains shared resources like Firewall, VPN Gateway, DNS, Bastion, Log Analytics.</li>
          <li>🔹 <strong>Spokes:</strong> Separate VNets per workload or environment (Dev, QA, Prod).</li>
          <li>🔄 Communication:
            <ul>
              <li>Spokes → Hub → On-prem via VPN/ExpressRoute.</li>
              <li>Inter-spoke traffic flows via hub (transit peering).</li>
            </ul>
          </li>
          <li>🔐 Enhances security by isolating workloads and enforcing centralized traffic inspection.</li>
        </ul>
        <p><strong>When to Use:</strong> Multi-environment or multi-team setups needing centralized connectivity and governance.</p>
        <p><strong>In Practice:</strong> I use Hub-Spoke in enterprise projects — Hub has the VPN/Firewall, each Spoke connects via peering for clean separation.</p>
      </div>`
      },
      {
        question: "In hub–spoke peering, which options do you select on the hub to peer with the remote/spoke VNet?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Peering Configuration — Hub to Spoke</strong></h3>
        <p>
          When setting up peering from Hub → Spoke, choose options carefully to allow routing and inspection:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ <strong>Allow Virtual Network Access</strong> – Enables traffic flow between VNets.</li>
          <li>✅ <strong>Allow Forwarded Traffic</strong> – Needed if Hub firewall routes traffic between spokes.</li>
          <li>✅ <strong>Allow Gateway Transit</strong> – So Hub’s VPN Gateway can be used by spokes.</li>
          <li>⛔ On spoke side → select <strong>Use Remote Gateway</strong> instead of creating its own.</li>
        </ul>
        <p><strong>In Practice:</strong> I always enable “Allow Forwarded Traffic” + “Allow Gateway Transit” on Hub; “Use Remote Gateway” on Spokes — ensures central routing works.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Load Balancing & Traffic – LB, App Gateway, WAF, Front Door, Traffic Manager, CDN",
    questions: [
      {
        question: "What are the types of Load Balancers in Azure (internal/external)? Use cases?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Azure Load Balancer Types</strong></h3>
        <p>
          Azure Load Balancer operates at <strong>Layer 4 (TCP/UDP)</strong> and comes in two types:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Public Load Balancer (External):</strong>
            <ul>
              <li>Routes traffic from Internet → Azure VMs via public IP.</li>
              <li>Use Case: Internet-facing apps (e.g., web frontend VMs).</li>
            </ul>
          </li>
          <li>🏠 <strong>Internal Load Balancer (Private):</strong>
            <ul>
              <li>Balances traffic inside VNets (no public IP).</li>
              <li>Use Case: Internal services (DB tiers, backend APIs, AKS pods).</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use internal LBs behind Application Gateway for microservice load balancing within private subnets.</p>
      </div>`
      },
      {
        question: "Difference between Load Balancer (L4) and Application Gateway (L7)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure Load Balancer vs Application Gateway</strong></h3>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;">
          <tr><th>Feature</th><th>Azure Load Balancer (L4)</th><th>Application Gateway (L7)</th></tr>
          <tr><td>OSI Layer</td><td>Layer 4 (TCP/UDP)</td><td>Layer 7 (HTTP/HTTPS)</td></tr>
          <tr><td>Routing</td><td>Based on IP/Port</td><td>Based on URL, Host, or Header</td></tr>
          <tr><td>SSL Termination</td><td>❌ No</td><td>✅ Yes (TLS offloading)</td></tr>
          <tr><td>WAF Support</td><td>❌ No</td><td>✅ Yes</td></tr>
          <tr><td>Health Probes</td><td>Port/Protocol level</td><td>Path-based (HTTP/HTTPS)</td></tr>
        </table>
        <p><strong>In Practice:</strong> Use Load Balancer for backend/internal tiers and Application Gateway for web layer traffic inspection + SSL termination.</p>
      </div>`
      },
      {
        question: "What is Application Gateway, and what are its core components?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Azure Application Gateway (L7 Load Balancer)</strong></h3>
        <p>
          Application Gateway distributes HTTP/HTTPS traffic using Layer 7 intelligence, providing WAF protection, SSL offload, and URL-based routing.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Frontend IP Config</strong> – Public or private endpoint for client access.</li>
          <li>🔹 <strong>Listeners</strong> – Detect incoming traffic (port, protocol, hostname).</li>
          <li>🔹 <strong>Backend Pools</strong> – VM, VMSS, App Service, or IPs.</li>
          <li>🔹 <strong>HTTP Settings</strong> – Defines backend port, protocol, and cookie-based affinity.</li>
          <li>🔹 <strong>Routing Rules</strong> – Map listener → backend pool.</li>
          <li>🔹 <strong>WAF Policy</strong> – Protects against OWASP top 10 vulnerabilities.</li>
        </ul>
        <p><strong>In Practice:</strong> I usually host multiple apps behind a single gateway using path-based routing and custom WAF policies per app.</p>
      </div>`
      },
      {
        question: "How do you configure routing rules in Application Gateway?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Configuring Routing Rules</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Create <strong>Listener</strong> – Define frontend port (80/443), hostname, and SSL cert.</li>
          <li>2️⃣ Configure <strong>HTTP Settings</strong> – Backend port, protocol, and timeout.</li>
          <li>3️⃣ Define <strong>Backend Pool</strong> – Add backend VMs, IPs, or App Services.</li>
          <li>4️⃣ Create <strong>Routing Rule</strong> – Link listener → HTTP setting → backend pool.</li>
          <li>5️⃣ For advanced setups – Use <strong>Path-based routing</strong> or <strong>Multi-site listeners</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure routing like <code>/api/*</code> → backend API pool and <code>/ui/*</code> → frontend pool using separate listeners.</p>
      </div>`
      },
      {
        question: "What is WAF (Web Application Firewall)? Difference between Detection and Prevention modes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Azure WAF (Web Application Firewall)</strong></h3>
        <p>
          WAF protects web apps from OWASP Top 10 attacks like SQL injection, XSS, and request smuggling.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Detection Mode:</strong> Logs and monitors suspicious traffic but doesn’t block.</li>
          <li><strong>Prevention Mode:</strong> Actively blocks requests that match WAF rules.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy in Detection Mode initially to analyze false positives, then switch to Prevention once stable.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot 403 WAF block errors?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Troubleshooting WAF 403 Block Errors</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Check <strong>WAF Logs</strong> in Log Analytics (Category: ApplicationGatewayFirewallLog).</li>
          <li>2️⃣ Identify <strong>RuleId</strong> causing block — often false positive.</li>
          <li>3️⃣ Verify request path and headers — rule might trigger on JSON payload or query string.</li>
          <li>4️⃣ <strong>Mitigation:</strong>
            <ul>
              <li>Exclude affected parameter or request body via WAF exclusion.</li>
              <li>Switch rule to <code>Log</code> mode if required temporarily.</li>
              <li>Avoid disabling full rule sets globally.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use KQL to find blocked client IPs quickly and adjust rules at location or parameter level for precision tuning.</p>
      </div>`
      },
      {
        question: "What’s the difference between Azure Front Door and Traffic Manager?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Front Door vs Traffic Manager</strong></h3>
        <table style="width:100%;border-collapse:collapse;margin-top:8px;">
          <tr><th>Feature</th><th>Azure Front Door</th><th>Traffic Manager</th></tr>
          <tr><td>Layer</td><td>L7 (HTTP/HTTPS)</td><td>DNS-based routing</td></tr>
          <tr><td>Routing Type</td><td>Real-time, anycast-based</td><td>DNS name resolution based</td></tr>
          <tr><td>Failover Speed</td><td>Instant (<1 sec)</td><td>Depends on DNS TTL</td></tr>
          <tr><td>Features</td><td>CDN, WAF, SSL, Caching</td><td>Geographic, Weighted, Priority routing</td></tr>
          <tr><td>Best For</td><td>Global app acceleration + security</td><td>Simple geo or performance routing</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Front Door for global web app delivery (with WAF) and Traffic Manager for backend failover scenarios.</p>
      </div>`
      },
      {
        question: "What routing methods does Traffic Manager provide?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Traffic Manager Routing Methods</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🎯 <strong>Priority Routing</strong> – Failover to secondary endpoint if primary fails.</li>
          <li>🌎 <strong>Geographic Routing</strong> – Route users based on their region.</li>
          <li>⚡ <strong>Performance Routing</strong> – Send to endpoint with lowest latency.</li>
          <li>🎲 <strong>Weighted Routing</strong> – Distribute traffic based on weights.</li>
          <li>🔁 <strong>Multivalue</strong> – Return multiple healthy endpoints for resilience.</li>
        </ul>
        <p><strong>In Practice:</strong> I commonly use <em>Priority</em> for DR failover and <em>Performance</em> for user latency optimization.</p>
      </div>`
      },
      {
        question: "What is a CDN? Why and where would you create Azure CDN?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Azure CDN (Content Delivery Network)</strong></h3>
        <p>
          CDN caches static content (images, JS, CSS, videos) closer to users to reduce latency and offload backend servers.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌎 Delivers content from edge POPs worldwide.</li>
          <li>📦 Integrated with Azure Storage, Web Apps, or Front Door.</li>
          <li>⚙️ Reduces bandwidth, improves load time, and adds DDoS resilience.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure CDN for global static assets in SPAs and integrate it with Front Door for unified routing + caching.</p>
      </div>`
      },
      {
        question: "In Kubernetes, when you need an L7 load balancer (App Gateway Ingress Controller), what must you configure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>AKS with Application Gateway Ingress Controller (AGIC)</strong></h3>
        <p>
          To use Application Gateway as L7 load balancer for AKS:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Deploy AKS in same VNet or peered VNet as the Application Gateway.</li>
          <li>2️⃣ Assign <strong>Managed Identity</strong> to AKS for App Gateway access.</li>
          <li>3️⃣ Install AGIC via Helm or add-on:
            <pre style="background:#111;padding:.4rem;border-radius:.4rem;"><code>az aks enable-addons --addons ingress-appgw --appgw-id &lt;appgw-id&gt;</code></pre>
          </li>
          <li>4️⃣ Create <code>Ingress</code> resources in Kubernetes — AGIC automatically updates routing rules.</li>
          <li>5️⃣ Ensure proper DNS mapping for external ingress endpoint.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer AGIC for enterprise AKS — it gives full WAF + SSL termination + path-based routing natively.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Private Access & Perimeter Security – Private Endpoints, Bastion, NSG, Firewall",
    questions: [
      {
        question: "What is a Private Endpoint and when do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Private Endpoint – Secure Private Access</strong></h3>
        <p>
          A <strong>Private Endpoint (PE)</strong> provides a private IP in your VNet for an Azure PaaS service (Storage, Key Vault, SQL, etc.), removing public exposure.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Enables access over Azure backbone instead of Internet.</li>
          <li>🔐 Prevents data exfiltration risks from public endpoints.</li>
          <li>🌐 DNS resolves service FQDN to private IP through a <strong>Private DNS Zone</strong>.</li>
        </ul>
        <p><strong>Use Case:</strong> Secure communication between AKS/VMs and services like Storage or SQL without public IPs.</p>
        <p><strong>In Practice:</strong> I always use Private Endpoints in production for compliance — specially for finance/healthcare workloads.</p>
      </div>`
      },
      {
        question: "Have you created a Private Endpoint for a Storage Account? Steps and validation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Creating Private Endpoint for Azure Storage</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Go to Storage Account → Networking → Private Endpoint Connections → Create.</li>
          <li>2️⃣ Choose <strong>Target Sub-resource</strong> (Blob, File, Queue, or Table).</li>
          <li>3️⃣ Select <strong>VNet + Subnet</strong> where endpoint IP will reside.</li>
          <li>4️⃣ Link with <strong>Private DNS Zone</strong> (e.g., <code>privatelink.blob.core.windows.net</code>).</li>
          <li>5️⃣ Once deployed, Storage FQDN resolves to private IP.</li>
        </ul>
        <h4>✅ Validation:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Run <code>nslookup mystorageaccount.blob.core.windows.net</code> → should return private IP.</li>
          <li>Check <code>az network private-endpoint-connection show</code> for “Approved” state.</li>
          <li>Ensure NSG allows outbound port 443 to Storage private IP.</li>
        </ul>
        <p><strong>In Practice:</strong> I always validate both DNS and route — most failures happen when private DNS zone is not linked properly.</p>
      </div>`
      },
      {
        question: "VM, Storage Account, SQL DB, App Service are in the same subnet and Storage has a Private Endpoint — how will the VM resolve the Storage FQDN privately?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Private DNS Resolution for Private Endpoint</strong></h3>
        <p>
          When a Private Endpoint is created, Azure automatically associates a <strong>Private DNS Zone</strong> (like <code>privatelink.blob.core.windows.net</code>) and links it with the VNet.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 The Storage Account FQDN resolves to the private IP through the linked DNS zone.</li>
          <li>🧭 If VM is in same VNet → DNS resolution happens automatically.</li>
          <li>🔗 If in peered VNet → you must link the private DNS zone manually.</li>
          <li>🚫 If not linked → VM will resolve public IP and fail due to firewall restrictions.</li>
        </ul>
        <p><strong>In Practice:</strong> I always verify this via <code>nslookup &lt;storage&gt;.blob.core.windows.net</code> to confirm private IP resolution.</p>
      </div>`
      },
      {
        question: "What is Azure Bastion and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>Azure Bastion – Secure VM Access Without Public IP</strong></h3>
        <p>
          Azure Bastion provides <strong>RDP/SSH access</strong> to VMs directly through the Azure Portal using private IPs — no public exposure required.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔐 Removes need for opening RDP (3389) or SSH (22) ports to Internet.</li>
          <li>🌍 Access happens via HTML5 browser session inside Azure Portal.</li>
          <li>⚙️ Deployed in <strong>Bastion subnet (AzureBastionSubnet)</strong> inside VNet.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Bastion for jumpbox-less environments — especially in production where public RDP/SSH is not allowed.</p>
      </div>`
      },
      {
        question: "Explain NSG (Network Security Group) — priorities and rule design.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Network Security Group (NSG)</strong></h3>
        <p>
          NSG filters inbound/outbound traffic at subnet or NIC level using 5-tuple rules (Source, Destination, Port, Protocol, Action).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚦 Rule Priority: <strong>100–4096</strong> (lower number = higher priority).</li>
          <li>📥 Default Inbound: Deny all (except Azure platform rules).</li>
          <li>📤 Default Outbound: Allow all.</li>
          <li>⚙️ Each rule defines: Source, Destination, Protocol, Port Range, Action, and Priority.</li>
        </ul>
        <h4>🧩 Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AllowHTTP:
  Priority: 100
  Source: Internet
  Destination: Any
  Port: 80
  Action: Allow</code></pre>
        <p><strong>In Practice:</strong> I design NSGs per subnet, applying least privilege — only allow app ports and deny others explicitly.</p>
      </div>`
      },
      {
        question: "Application Security Group (ASG) vs NSG — explain and compare.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>ASG vs NSG</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>NSG</th><th>ASG</th></tr>
          <tr><td>Purpose</td><td>Traffic filtering (rules)</td><td>Grouping of VMs logically</td></tr>
          <tr><td>Scope</td><td>Subnet or NIC level</td><td>Attached to VMs within NSG rule</td></tr>
          <tr><td>Example</td><td>Allow port 443 from Internet</td><td>Allow traffic from ASG “WebServers” to “DBServers”</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use ASGs to simplify NSG management — e.g., instead of managing 50 IPs, I define ASG groups for web, app, and DB tiers.</p>
      </div>`
      },
      {
        question: "What is the difference between NSG and Azure Firewall? When do you use each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔥 <strong>NSG vs Azure Firewall</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>NSG</th><th>Azure Firewall</th></tr>
          <tr><td>Layer</td><td>Layer 3 & 4</td><td>Layer 3–7 (stateful inspection)</td></tr>
          <tr><td>Function</td><td>Basic allow/deny filtering</td><td>Advanced filtering, logging, FQDN filtering, NAT</td></tr>
          <tr><td>Use Case</td><td>Micro-segmentation inside VNets</td><td>Centralized perimeter control (north-south traffic)</td></tr>
          <tr><td>Integration</td><td>Applied on subnets or NICs</td><td>Deployed in Hub VNet</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use NSGs for internal isolation and Azure Firewall at perimeter to control outbound/inbound Internet access.</p>
      </div>`
      },
      {
        question: "How do you configure Firewall rules in Azure (threat-intel, DNAT/SNAT, FQDN tags)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Azure Firewall Rules Configuration</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Application Rules:</strong> Allow outbound HTTP/S to specific FQDNs (e.g., <code>*.microsoft.com</code>).</li>
          <li>🧱 <strong>Network Rules:</strong> Allow/deny IP, port-based traffic (TCP/UDP).</li>
          <li>📦 <strong>DNAT Rules:</strong> Map public IP → internal VM for inbound traffic.</li>
          <li>🔁 <strong>SNAT:</strong> Automatically translates private IP → Firewall public IP for outbound access.</li>
          <li>🧩 <strong>Threat Intelligence:</strong> Blocks known malicious IPs and domains (Alert/Deny modes).</li>
          <li>🎯 <strong>FQDN Tags:</strong> Predefined trusted domains like <code>WindowsUpdate</code> or <code>AzureMonitor</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I always log traffic in Log Analytics and integrate Firewall alerts with Sentinel for threat detection.</p>
      </div>`
      },
      {
        question: "End-to-end: how would you manage Firewall and DNS setup for a secure application?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>End-to-End Secure Network Setup</strong></h3>
        <p>
          To design a secure perimeter for Azure applications:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Hub-Spoke model — Azure Firewall in Hub, apps in Spokes.</li>
          <li>2️⃣ NSGs for internal subnet control (least privilege).</li>
          <li>3️⃣ Private Endpoints for all PaaS services (Storage, Key Vault, DB).</li>
          <li>4️⃣ Private DNS Zones linked to Spokes for resolution.</li>
          <li>5️⃣ Azure Firewall forced tunneling for outbound traffic.</li>
          <li>6️⃣ Logs → Log Analytics → Sentinel for SIEM monitoring.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow “Deny by default, allow explicitly” — combining NSG + Firewall + Private DNS gives full east-west and north-south isolation.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Identities, Keys & Secrets – Managed Identity, Key Vault, RBAC",
    questions: [
      {
        question: "What are Managed Identities in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Managed Identities — Passwordless Authentication for Azure Resources</strong></h3>
        <p>
          Managed Identity is an automatically managed service principal provided by Azure AD, allowing Azure resources (like VMs, Functions, AKS, Pipelines) to authenticate securely to other Azure services — <strong>without storing credentials</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>System-Assigned MI:</strong> Tied to a specific resource; lifecycle matches the resource (auto-deleted when resource is deleted).</li>
          <li>🔹 <strong>User-Assigned MI:</strong> Standalone identity that can be shared across multiple resources.</li>
          <li>🔑 Used to access Azure services like Key Vault, Storage, SQL, or REST APIs securely.</li>
        </ul>
        <h4>💡 Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az vm identity assign --name myVM --resource-group rg-demo</code></pre>
        <p>Then assign Key Vault <code>get/list</code> permissions to that MI via RBAC.</p>
        <p><strong>In Practice:</strong> I always use Managed Identity instead of service principals to eliminate credential rotation and reduce attack surface.</p>
      </div>`
      },
      {
        question: "What is Azure Key Vault and how do you integrate it with applications and pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Azure Key Vault — Central Secrets Store</strong></h3>
        <p>
          Azure Key Vault securely stores and manages <strong>secrets, keys, and certificates</strong> used by apps, infrastructure, and CI/CD pipelines.
        </p>
        <h4>⚙️ Integration Approaches:</h4>
        <ul style="margin-left:1.2rem;">
          <li>🔸 <strong>Applications:</strong> Use Managed Identity + SDK (or REST API) to fetch secrets securely.</li>
          <li>🔸 <strong>Azure Pipelines:</strong> 
            <ul>
              <li>Use Key Vault task in YAML pipeline.</li>
              <li>Or connect via Service Connection using RBAC + Managed Identity.</li>
            </ul>
          </li>
          <li>🔸 <strong>Terraform:</strong> Fetch secrets dynamically using <code>azurerm_key_vault_secret</code> data block.</li>
        </ul>
        <h4>🧩 Example (YAML Pipeline):</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
  - group: KeyVaultSecrets

steps:
- task: AzureKeyVault@2
  inputs:
    azureSubscription: 'myServiceConnection'
    KeyVaultName: 'my-keyvault'
    SecretsFilter: '*'
    RunAsPreJob: true</code></pre>
        <p><strong>In Practice:</strong> I configure all pipeline credentials (like SP passwords, storage keys) in Key Vault for centralized control and rotation tracking.</p>
      </div>`
      },
      {
        question: "Purpose of Key Vault — typical use cases (keys, secrets, certificates).",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗝️ <strong>Key Vault — Core Use Cases</strong></h3>
        <p>
          Key Vault is a cloud-based vault for securely storing cryptographic keys, app secrets, and SSL certificates.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔑 <strong>Secrets:</strong> Store passwords, API tokens, connection strings (for pipelines and apps).</li>
          <li>🧩 <strong>Keys:</strong> Manage encryption keys for SQL TDE, disk encryption, and Azure Storage SSE.</li>
          <li>📜 <strong>Certificates:</strong> Store and auto-renew TLS/SSL certificates with Azure App Service or CDN.</li>
        </ul>
        <h4>💡 Real-World Use Case:</h4>
        <ul style="margin-left:1.2rem;">
          <li>VM Disk Encryption (uses Key Vault to hold KEK/BEK).</li>
          <li>AKS Pod Secrets fetched from Key Vault via CSI driver.</li>
          <li>Central credential store for CI/CD pipelines across environments.</li>
        </ul>
        <p><strong>In Practice:</strong> I always restrict Key Vault access via private endpoints + RBAC and disable public network access for compliance.</p>
      </div>`
      },
      {
        question: "How do you implement role-based access control (RBAC) for least-privilege?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>RBAC — Role-Based Access Control in Azure</strong></h3>
        <p>
          RBAC allows fine-grained access management using predefined or custom roles applied to users, groups, or Managed Identities.
        </p>
        <h4>⚙️ Best Practices for Least Privilege:</h4>
        <ul style="margin-left:1.2rem;">
          <li>🎯 Assign roles at the lowest necessary scope (Resource → RG → Subscription).</li>
          <li>🔐 Use built-in roles like:
            <ul>
              <li><code>Reader</code> – view only</li>
              <li><code>Contributor</code> – modify but no access control</li>
              <li><code>Key Vault Secrets User</code> – for fetching secrets only</li>
            </ul>
          </li>
          <li>🚫 Avoid using Owner unless required.</li>
          <li>🧱 Combine RBAC with PIM (Privileged Identity Management) for just-in-time elevation.</li>
        </ul>
        <p><strong>In Practice:</strong> I assign Managed Identities <code>Key Vault Reader</code> role instead of full access — keeps pipeline secure and auditable.</p>
      </div>`
      },
      {
        question: "How would you integrate Azure Key Vault with AKS for pod secrets (CSI driver/Secret Store)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Integrating Key Vault with AKS (CSI Driver)</strong></h3>
        <p>
          The <strong>Secrets Store CSI Driver</strong> mounts Key Vault secrets as volumes or Kubernetes secrets inside AKS pods — removing hardcoded secrets.
        </p>
        <h4>⚙️ Setup Steps:</h4>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Enable Managed Identity for AKS.</li>
          <li>2️⃣ Grant that MI access to Key Vault (<code>get/list</code> permissions).</li>
          <li>3️⃣ Install CSI Driver:
            <pre style="background:#111;padding:.4rem;border-radius:.4rem;"><code>az aks enable-addons --addons azure-keyvault-secrets-provider --resource-group rg --name aks-cluster</code></pre>
          </li>
          <li>4️⃣ Create a SecretProviderClass manifest:
            <pre style="background:#111;padding:.4rem;border-radius:.4rem;"><code>apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: kv-secrets
spec:
  provider: azure
  parameters:
    keyvaultName: my-keyvault
    objects: |
      array:
        - objectName: db-password
          objectType: secret
    tenantId: &lt;tenant-guid&gt;</code></pre>
          </li>
          <li>5️⃣ Reference it in a pod spec:
            <pre style="background:#111;padding:.4rem;border-radius:.4rem;"><code>volumeMounts:
- name: secrets-store
  mountPath: /mnt/secrets
volumes:
- name: secrets-store
  csi:
    driver: secrets-store.csi.k8s.io
    readOnly: true
    volumeAttributes:
      secretProviderClass: kv-secrets</code></pre>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use CSI for all AKS workloads — no credentials inside YAML, rotation auto-updates pods seamlessly.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Storage – Accounts, Security, Tiers & Access",
    questions: [
      {
        question: "How do you secure Storage Accounts (public access disable, TLS, private endpoints, SAS policies)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Securing Azure Storage Accounts</strong></h3>
        <p>
          Azure Storage security revolves around <strong>network isolation, encryption, and controlled access</strong>.  
          I always apply these hardening steps in production:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚫 <strong>Disable Public Access:</strong> Turn off “Allow blob public access” at account level.</li>
          <li>🔒 <strong>Use Private Endpoints:</strong> Connect via private IP — traffic stays within Azure backbone.</li>
          <li>📜 <strong>Restrict Network Access:</strong> “Selected networks” mode + Firewall rules for VNet/subnet.</li>
          <li>🧾 <strong>Use SAS (Shared Access Signatures):</strong> Granular, time-bound access instead of keys.</li>
          <li>🧰 <strong>Enforce TLS 1.2:</strong> Disable older protocols under “Minimum TLS version”.</li>
          <li>🪪 <strong>Use Managed Identity:</strong> Replace key-based access with RBAC-based identity access.</li>
        </ul>
        <h4>💡 CLI Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az storage account update \
  --name mystorage \
  --resource-group rg-demo \
  --https-only true \
  --allow-blob-public-access false</code></pre>
        <p><strong>In Practice:</strong> I always combine private endpoints + SAS + RBAC for a complete zero-trust storage design.</p>
      </div>`
      },
      {
        question: "What are the network access settings for a Storage Account? Explain options.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Storage Account Network Access Settings</strong></h3>
        <p>
          You can control who can reach your storage account using the <strong>Networking</strong> blade. Three modes exist:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔓 <strong>All Networks:</strong> Fully open — accessible from Internet (not recommended).</li>
          <li>🧱 <strong>Selected Networks:</strong> Only specific VNets, subnets, or IP ranges allowed.</li>
          <li>🚫 <strong>Deny All:</strong> Access only via Private Endpoint (no public route).</li>
        </ul>
        <h4>🧩 Tip:</h4>
        <p>Always pair “Selected Networks” with <strong>Private Endpoints</strong> to enforce private-only access.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az storage account network-rule add \
  --resource-group rg-demo \
  --account-name mystorage \
  --vnet-name myvnet \
  --subnet mysubnet</code></pre>
        <p><strong>In Practice:</strong> I apply “Deny All” + Private Endpoint in PROD, and “Selected Networks” in DEV/UAT for controlled testing.</p>
      </div>`
      },
      {
        question: "How do you configure firewall rules for Storage Accounts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Configuring Storage Firewall Rules</strong></h3>
        <p>
          Firewall rules let you allow or block specific public IP ranges for your Storage Account.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Go to <strong>Storage Account → Networking → Firewalls and virtual networks</strong>.</li>
          <li>2️⃣ Choose “Selected Networks”.</li>
          <li>3️⃣ Add <strong>Client IPs</strong> or <strong>Virtual Networks</strong> that should have access.</li>
          <li>4️⃣ Optionally, allow trusted Microsoft services like Azure DevOps or Backup.</li>
        </ul>
        <h4>💡 CLI Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az storage account network-rule add \
  --account-name mystorage \
  --ip-address 103.21.22.5</code></pre>
        <p><strong>In Practice:</strong> I restrict firewall access to jump servers or private endpoints only — never open to “All Networks”.</p>
      </div>`
      },
      {
        question: "What is Blob Storage and what are its access tiers (Hot/Cool/Archive)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗄️ <strong>Azure Blob Storage – Object Store with Access Tiers</strong></h3>
        <p>
          Blob Storage stores unstructured data (images, logs, backups) and offers <strong>cost-optimized access tiers</strong> based on data usage patterns.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔥 <strong>Hot Tier:</strong> For frequently accessed data — higher storage cost, lower access latency.</li>
          <li>❄️ <strong>Cool Tier:</strong> For infrequently accessed data — lower storage cost, slightly higher access cost.</li>
          <li>🪶 <strong>Archive Tier:</strong> For long-term retention — cheapest storage, but retrieval takes hours.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Hot for app logs, Cool for monthly backups, and Archive for compliance or audit data.</p>
      </div>`
      },
      {
        question: "How can you restrict public access to your Storage Account?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Restricting Public Access</strong></h3>
        <p>
          You can disable anonymous access to prevent anyone from accessing blobs without authentication.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Go to <strong>Configuration</strong> → Set “Allow Blob Public Access” = <code>Disabled</code>.</li>
          <li>2️⃣ Set <strong>Network Access</strong> to “Selected Networks” or “Deny All”.</li>
          <li>3️⃣ Use <strong>Azure RBAC</strong> or SAS tokens for controlled access.</li>
          <li>4️⃣ Disable Shared Key authorization if using Managed Identity or AAD.</li>
        </ul>
        <h4>💡 Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az storage account update \
  --name mystorage \
  --resource-group rg-demo \
  --allow-blob-public-access false</code></pre>
        <p><strong>In Practice:</strong> I make this setting part of policy — so even new storage accounts inherit “public access disabled” by default.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Compute & App Platform – VM, VMSS, App Service, AKS (Access & Scale)",
    questions: [
      {
        question: "What resources do you create when provisioning a VM (NIC, NSG, Disk, VNet/Subnet, PIP)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Resources Created When Provisioning a VM</strong></h3>
        <p>
          Deploying a Virtual Machine in Azure automatically provisions several dependent resources:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 <strong>NIC (Network Interface):</strong> Connects VM to a VNet/Subnet.</li>
          <li>🌐 <strong>VNet & Subnet:</strong> Defines private IP range and logical isolation.</li>
          <li>🔒 <strong>NSG:</strong> Filters inbound/outbound traffic (acts like a firewall).</li>
          <li>💾 <strong>OS Disk:</strong> Boot disk attached to the VM (managed disk).</li>
          <li>📦 <strong>Data Disks:</strong> Additional storage for app/data.</li>
          <li>🌍 <strong>Public IP (optional):</strong> For Internet access or RDP/SSH.</li>
          <li>🪪 <strong>Availability Options:</strong> Zone/Set for redundancy.</li>
        </ul>
        <p><strong>In Practice:</strong> I often deploy VMs using Terraform — all these components are declared as resources in the same module.</p>
      </div>`
      },
      {
        question: "What is an Availability Set vs Availability Zone?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Set vs Availability Zone</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Availability Set</th><th>Availability Zone</th></tr>
          <tr><td>Level</td><td>Logical grouping within a data center</td><td>Physically separate data centers</td></tr>
          <tr><td>Fault Tolerance</td><td>Protects from rack/power failures</td><td>Protects from entire zone failure</td></tr>
          <tr><td>Placement</td><td>2+ Fault + Update domains</td><td>Zone 1, Zone 2, Zone 3 (physical separation)</td></tr>
          <tr><td>SLA</td><td>99.95%</td><td>99.99%</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <strong>Availability Zones</strong> for production workloads requiring true regional resiliency.</p>
      </div>`
      },
      {
        question: "What is VMSS and when would you prefer it over individual VMs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Virtual Machine Scale Sets (VMSS)</strong></h3>
        <p>
          VMSS lets you deploy and manage identical VMs as a single group — ideal for scalable and load-balanced workloads.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Auto-scales up/down based on CPU, memory, or custom metrics.</li>
          <li>⚙️ Integrated with Load Balancer or Application Gateway.</li>
          <li>📦 Supports rolling upgrades and OS image updates.</li>
          <li>🧰 Uses a single VM model (SKU, OS, extensions) across instances.</li>
        </ul>
        <p><strong>When to prefer:</strong> High-traffic, stateless web tiers or API servers that need scale and automation.</p>
        <p><strong>In Practice:</strong> I use VMSS with custom images + autoscale rules linked to Azure Monitor metrics.</p>
      </div>`
      },
      {
        question: "If you need two VMs and two databases — when would you choose VMSS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>When to Choose VMSS Over Individual VMs</strong></h3>
        <p>
          VMSS is used only when multiple identical instances are required.  
          For example:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Web/App servers → can use VMSS (stateless, scalable).</li>
          <li>🚫 Databases → avoid VMSS (stateful workloads, data consistency issues).</li>
        </ul>
        <p><strong>In Practice:</strong> I use 2 DB VMs (manual HA) and deploy app layer via VMSS for scaling and auto-healing.</p>
      </div>`
      },
      {
        question: "How do you patch your VMs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩹 <strong>VM Patching in Azure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔸 Use <strong>Azure Update Management</strong> (Automation Account + Log Analytics) for scheduling patches.</li>
          <li>🔸 Windows: Apply updates via <code>az vm run-command invoke</code> or ADO pipeline PowerShell tasks.</li>
          <li>🔸 Linux: Use <code>apt</code> or <code>yum</code> commands in patch jobs, or cron-based automation.</li>
          <li>🔸 Combine with <strong>Maintenance Configurations</strong> for reboot control.</li>
        </ul>
        <p><strong>In Practice:</strong> I schedule patching via Automation Account hybrid worker group — sends compliance report post patch window.</p>
      </div>`
      },
      {
        question: "What is swap space in a Linux VM?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Linux VM Swap Space</strong></h3>
        <p>
          Swap space acts as overflow memory when physical RAM is full. It allows Linux to temporarily move inactive pages from RAM to disk.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📦 Can be a <strong>swap file</strong> or <strong>swap partition</strong>.</li>
          <li>🧠 Avoids OOM (Out of Memory) errors under heavy load.</li>
          <li>⚙️ Azure automatically configures it for some distributions using ephemeral disks.</li>
        </ul>
        <p><strong>In Practice:</strong> I manually tune swap size for memory-heavy apps — e.g., double RAM size for smaller VMs.</p>
      </div>`
      },
      {
        question: "How do you connect to a VM with only a private IP (Bastion/Jumpbox/PE)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Accessing Private VMs Securely</strong></h3>
        <p>
          To connect to a VM without public IP:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🖥️ <strong>Azure Bastion:</strong> Connect directly via Azure Portal using RDP/SSH over private IP.</li>
          <li>🪪 <strong>Jumpbox VM:</strong> Connect to a single hardened VM that has access to private subnet.</li>
          <li>🔗 <strong>Private Endpoint/VPN:</strong> Access through private IP using VPN or ExpressRoute.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer Bastion for corporate access (no key exposure) and jumpbox for limited DevOps SSH use.</p>
      </div>`
      },
      {
        question: "How will you horizontally scale your App Services?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Scaling Azure App Services</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Manual Scaling:</strong> Increase instance count from App Service Plan → Scale Out.</li>
          <li>🔹 <strong>Autoscaling:</strong> Configure rules based on CPU %, memory, HTTP queue length, or custom metrics.</li>
          <li>🔹 <strong>Scale Up:</strong> Move to higher plan (B1 → P1V3) for more CPU/RAM.</li>
          <li>🔹 <strong>Scale Out:</strong> Add more instances horizontally behind Azure Load Balancer.</li>
        </ul>
        <h4>💡 Example Rule:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>If CPU > 70% for 10 min → add 1 instance
If CPU < 40% for 15 min → remove 1 instance</code></pre>
        <p><strong>In Practice:</strong> I use autoscale profiles + Application Insights metrics for predictive scaling.</p>
      </div>`
      },
      {
        question: "How will you make AKS private (private cluster, private endpoints, UDRs, DNS)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Private AKS Cluster Design</strong></h3>
        <p>
          To make AKS private, you isolate both API server and node traffic:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔒 <strong>Private Cluster:</strong> Deploy with <code>--enable-private-cluster</code> — no public API endpoint.</li>
          <li>🌐 <strong>Private Endpoint:</strong> Control-plane exposed via private IP inside your VNet.</li>
          <li>🧭 <strong>User Defined Routes (UDRs):</strong> Force egress traffic through Firewall or NVA.</li>
          <li>🧩 <strong>Private DNS Zone:</strong> AKS registers control plane DNS here.</li>
          <li>🔐 <strong>RBAC & Managed Identity:</strong> Secure access to ACR, Key Vault, etc., using MI-based tokens.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy private AKS with UDR + Firewall + Private DNS — no Internet traffic allowed directly from pods.</p>
      </div>`
      },
      {
        question: "What compute services do you commonly use in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Common Azure Compute Services I Use</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧱 <strong>Azure Virtual Machines (VMs):</strong> Core compute for OS-level control.</li>
          <li>📦 <strong>VM Scale Sets (VMSS):</strong> Auto-scaling web/API workloads.</li>
          <li>🚀 <strong>App Services:</strong> PaaS hosting for web apps & APIs.</li>
          <li>🐳 <strong>AKS (Azure Kubernetes Service):</strong> Containerized app orchestration.</li>
          <li>🧰 <strong>Azure Functions:</strong> Serverless event-driven compute.</li>
          <li>⚙️ <strong>Azure Container Apps:</strong> Lightweight microservice platform for small workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> I mix AKS + App Services for scalability and Functions for automation or event-driven triggers.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Availability, BCDR & Backup",
    questions: [
      {
        question: "What is Azure Site Recovery (ASR)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌀 <strong>Azure Site Recovery (ASR) — Disaster Recovery as a Service</strong></h3>
        <p>
          Azure Site Recovery (ASR) replicates workloads (VMs, servers) from a primary site to a secondary Azure region for <strong>business continuity during outages</strong>.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌍 Continuous replication of VM disks to target region.</li>
          <li>⚙️ Supports both <strong>on-prem → Azure</strong> and <strong>Azure → Azure</strong> replication.</li>
          <li>🔄 Enables failover, failback, and test failover (DR drills).</li>
          <li>📋 Policy-driven: replication frequency, retention, app-consistency checkpoints.</li>
        </ul>
        <h4>💡 CLI Example:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az backup vault create --name DRVault --resource-group rg-prod
az backup policy create --vault-name DRVault --name DRPolicy --policy '{"schedule":{"frequency":"Daily"}}'</code></pre>
        <p><strong>In Practice:</strong> I configure ASR for all PROD VMs using paired region and quarterly failover drills to validate readiness.</p>
      </div>`
      },
      {
        question: "Define RPO and RTO in DR design.",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏱️ <strong>RPO vs RTO — Key DR Metrics</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📦 <strong>RPO (Recovery Point Objective):</strong> 
            Maximum acceptable data loss (how old the last available backup can be). Example: RPO = 15 min means last 15 min of data may be lost.</li>
          <li>⚡ <strong>RTO (Recovery Time Objective):</strong>
            Maximum acceptable downtime (how long it takes to restore service after failure).</li>
        </ul>
        <p><strong>In Practice:</strong> For production workloads I target <strong>RPO ≤ 15 min</strong> and <strong>RTO ≤ 1 hour</strong> using ASR + automation runbooks.</p>
      </div>`
      },
      {
        question: "What is BCDR in Azure? Difference between BCDR and DR?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏢 <strong>BCDR — Business Continuity & Disaster Recovery</strong></h3>
        <p>
          <strong>BCDR</strong> is a comprehensive strategy ensuring business operations continue during disasters.  
          It combines two key components:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📋 <strong>Business Continuity (BC):</strong> Process planning — how business keeps running (alternate sites, manual operations).</li>
          <li>🌀 <strong>Disaster Recovery (DR):</strong> Technical recovery — restoring systems, VMs, and data after an outage.</li>
        </ul>
        <p><strong>In Practice:</strong> I define DR using ASR + Backup Vault and align BC via runbooks and alert escalation in Azure Monitor.</p>
      </div>`
      },
      {
        question: "How do you perform DR drills in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧪 <strong>DR Drills (Test Failover)</strong></h3>
        <p>
          Azure Site Recovery supports <strong>non-disruptive test failovers</strong> to verify DR readiness.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Go to <strong>Recovery Vault → Replicated Items → Test Failover</strong>.</li>
          <li>2️⃣ Choose target VNet (isolated test environment).</li>
          <li>3️⃣ Validate app functionality and connectivity.</li>
          <li>4️⃣ Cleanup test environment post validation.</li>
        </ul>
        <p><strong>In Practice:</strong> We schedule DR drills quarterly and share validation reports for audit compliance.</p>
      </div>`
      },
      {
        question: "How have you configured VM backups — what policies do you apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Azure VM Backup Configuration</strong></h3>
        <p>
          VM backups are configured via <strong>Recovery Services Vault</strong> with policy-based retention.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📅 Daily backup with 30-day retention (standard for PROD).</li>
          <li>🧱 Weekly full backup for long-term retention (90 days).</li>
          <li>🌐 Backup triggered during non-peak hours.</li>
          <li>🔐 Stored in geo-redundant storage (GRS) for regional resiliency.</li>
        </ul>
        <p><strong>In Practice:</strong> I tag critical VMs and assign auto-backup policy via Azure Policy for compliance enforcement.</p>
      </div>`
      },
      {
        question: "If a VM has crashed and is inaccessible, how will you take/restore a backup?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧯 <strong>VM Restore After Crash</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Open Recovery Vault → “Backed-up Items”.</li>
          <li>2️⃣ Select VM → “Restore VM” or “Restore Disks”.</li>
          <li>3️⃣ Choose restore point → Create new VM or attach disk to a healthy VM for data recovery.</li>
          <li>4️⃣ Validate boot and connectivity post-restore.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer “Restore Disks” method — faster and safer for forensic analysis or partial recovery.</p>
      </div>`
      },
      {
        question: "MABS vs MARS agent — when to use which?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>MABS vs MARS Agent</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>MABS (Azure Backup Server)</th><th>MARS (Azure Recovery Services Agent)</th></tr>
          <tr><td>Use Case</td><td>Centralized on-prem backup (VMs, SQL, Hyper-V)</td><td>Single server/file-level backup</td></tr>
          <tr><td>Dependency</td><td>Needs System Center DPM or local storage</td><td>No dependency — direct to Vault</td></tr>
          <tr><td>Best For</td><td>Enterprise workloads</td><td>Standalone servers or clients</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use MABS for data center-level protection and MARS for dev/test or file-server backups.</p>
      </div>`
      },
      {
        question: "Where are your DR servers located (region pair considerations)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Region Pair Considerations for DR</strong></h3>
        <p>
          Azure uses <strong>paired regions</strong> to ensure cross-region data durability and DR readiness.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📦 Each Azure region is paired with another region in the same geography (e.g., East US ↔ West US).</li>
          <li>🔁 Replication (GRS/RA-GRS) automatically targets the paired region.</li>
          <li>🚫 Azure never updates both regions simultaneously — ensures availability during maintenance.</li>
          <li>🗺️ DR workloads (ASR, backups) are always hosted in the paired region for compliance.</li>
        </ul>
        <p><strong>In Practice:</strong> For “Central India” workloads, I configure DR in “South India” — both part of the same region pair.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Monitoring, Logs & Security Alerts",
    questions: [
      {
        question: "What is Azure Monitor and how does it help track performance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Azure Monitor – Centralized Monitoring Platform</strong></h3>
        <p>
          Azure Monitor collects, analyzes, and acts on telemetry from Azure and on-prem environments.  
          It helps detect, visualize, and respond to performance or availability issues across infrastructure and applications.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📊 <strong>Metrics:</strong> Real-time numeric performance data (CPU %, memory, latency).</li>
          <li>🧾 <strong>Logs:</strong> Detailed event data (activity logs, diagnostics, security events).</li>
          <li>📈 <strong>Visualizations:</strong> Dashboards and Workbooks for custom KPIs.</li>
          <li>🔔 <strong>Alerts:</strong> Triggered on metric thresholds or log query results.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate Azure Monitor with Log Analytics and Application Insights for full-stack visibility of AKS, App Services, and VMs.</p>
      </div>`
      },
      {
        question: "What are metrics and logs in Azure Monitor?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Metrics vs Logs – Key Difference</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📈 <strong>Metrics:</strong> Numeric data collected at fixed intervals (e.g., CPU %, memory, disk IOPS).  
          Stored for 93 days and used for real-time dashboards or alerts.</li>
          <li>🧾 <strong>Logs:</strong> Detailed event data like audit trails, request traces, errors, and activity events.  
          Stored in <strong>Log Analytics workspace</strong> and queried using <strong>KQL (Kusto Query Language)</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> Metrics show <em>what</em> is wrong, Logs explain <em>why</em>.</p>
      </div>`
      },
      {
        question: "What are Diagnostic Settings and common log categories?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Diagnostic Settings – Enabling Deep Visibility</strong></h3>
        <p>
          Diagnostic settings define where Azure resource logs and metrics are sent (Log Analytics, Event Hub, Storage).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧾 <strong>Categories:</strong> 
            <ul>
              <li>Administrative (control-plane actions)</li>
              <li>Security (auth, key access, failed attempts)</li>
              <li>Service Health (availability, SLA)</li>
              <li>Audit Logs (policy/compliance actions)</li>
              <li>Performance Logs (metrics like latency, throughput)</li>
            </ul>
          </li>
          <li>📤 Sent to: Log Analytics → for KQL query and alerts.</li>
        </ul>
        <p><strong>In Practice:</strong> I always enable Diagnostic Settings via Terraform for key services like App Gateway, Key Vault, and Storage.</p>
      </div>`
      },
      {
        question: "How do you analyze Activity Logs and Security Alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Analyzing Activity Logs & Security Alerts</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📋 <strong>Activity Logs:</strong> Show who did what — e.g., resource creation, deletion, or RBAC change.</li>
          <li>🔔 <strong>Security Alerts:</strong> Generated by Defender for Cloud or Azure Monitor when suspicious actions occur.</li>
        </ul>
        <p>Use <strong>Log Analytics → Activity Log</strong> and filter by <code>OperationName</code> or <code>Caller</code> to find root cause.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureActivity
| where OperationName == "Delete Virtual Machine"
| project Caller, ResourceGroup, Resource, ActivityStatus, TimeGenerated</code></pre>
        <p><strong>In Practice:</strong> I integrate these alerts with Teams and ServiceNow for immediate triage by the security team.</p>
      </div>`
      },
      {
        question: "How do you monitor Application Gateway logs in Log Analytics (WAF logs, access logs)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Monitoring Application Gateway Logs</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Enable <strong>Diagnostic Settings</strong> on the App Gateway → send to Log Analytics.</li>
          <li>2️⃣ Key logs:
            <ul>
              <li>Access Logs – client request data</li>
              <li>Performance Logs – backend response times</li>
              <li>Firewall Logs – WAF rule matches and blocked requests</li>
            </ul>
          </li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>AzureDiagnostics
| where ResourceType == "APPLICATIONGATEWAYS"
| where Category == "ApplicationGatewayFirewallLog"
| summarize count() by clientIP_s, ruleId_s, action_s</code></pre>
        <p><strong>In Practice:</strong> I visualize top WAF blocks in Workbooks to spot frequent attacker IPs or misconfigured rules.</p>
      </div>`
      },
      {
        question: "What is Application Insights and when do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Application Insights – APM for Azure</strong></h3>
        <p>
          Application Insights monitors the performance and availability of web apps, APIs, and microservices.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📡 Tracks request rate, response time, failures, dependencies.</li>
          <li>🧠 Detects anomalies using AI-based smart detection.</li>
          <li>🔗 Integrates with Azure Monitor and Log Analytics.</li>
          <li>⚙️ Connected via SDK or App Service instrumentation key.</li>
        </ul>
        <p><strong>In Practice:</strong> I use it with App Services and AKS APIs to track latency, response codes, and dependency bottlenecks.</p>
      </div>`
      },
      {
        question: "What are options to monitor network traffic (NSG flow logs, NPM/Workbooks)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Monitoring Network Traffic in Azure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔸 <strong>NSG Flow Logs:</strong> Capture inbound/outbound traffic metadata, stored in Storage Account or Log Analytics.</li>
          <li>🔸 <strong>Traffic Analytics (via NPM):</strong> Visualizes flow logs to show top talkers, ports, and regions.</li>
          <li>🔸 <strong>Network Watcher:</strong> Run packet capture, connection monitor, and topology views.</li>
          <li>🔸 <strong>Workbooks:</strong> Custom dashboards for NSG/Firewall visualization.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable NSG flow logs v2 + Traffic Analytics in every production subscription for deep visibility.</p>
      </div>`
      },
      {
        question: "There are certain security alerts in Azure — how would you triage and remediate them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Triage & Remediation of Security Alerts</strong></h3>
        <p>
          When a security alert is generated by Defender for Cloud or Sentinel:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Review Alert:</strong> Identify severity and impacted resource.</li>
          <li>2️⃣ <strong>Investigate Root Cause:</strong> Use Log Analytics or Activity Logs.</li>
          <li>3️⃣ <strong>Containment:</strong> Disable public IP, revoke credentials, or apply NSG rules.</li>
          <li>4️⃣ <strong>Remediation:</strong> Patch or rotate secrets.</li>
          <li>5️⃣ <strong>Prevent Recurrence:</strong> Implement policy or automation (Logic App or Sentinel playbook).</li>
        </ul>
        <p><strong>In Practice:</strong> I use Sentinel playbooks to auto-disable VMs showing brute-force SSH attempts.</p>
      </div>`
      },
      {
        question: "Suppose Microsoft announces new Azure services — where do you get official updates?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📢 <strong>Staying Updated on Azure Announcements</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <a href="https://azure.microsoft.com/updates" target="_blank"><strong>Azure Updates Portal</strong></a> – Official list of all new releases & previews.</li>
          <li>📧 <strong>Azure Blog & Tech Community</strong> – Deep-dive posts and architecture updates.</li>
          <li>🎧 <strong>Microsoft Learn & Channel 9</strong> – Feature walk-throughs and demos.</li>
          <li>🧠 <strong>Azure Advisor & Service Health</strong> – Personalized impact and new service alerts inside portal.</li>
        </ul>
        <p><strong>In Practice:</strong> I subscribe to Azure Updates RSS feed and follow Microsoft’s Cloud Advocate teams on LinkedIn for insider previews.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Cost, Architecture & Landing Zone Readiness",
    questions: [
      {
        question: "What is cost optimization and which Azure tools help (Cost Management, Advisor, Reservations, Spot, Autoscale)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💰 <strong>Cost Optimization in Azure</strong></h3>
        <p>Cost optimization means reducing unnecessary spend while maintaining performance and reliability.</p>
        <ul style="margin-left:1.2rem;">
          <li>📊 <strong>Azure Cost Management + Budgets:</strong> Tracks real-time costs and sends alerts when thresholds are reached.</li>
          <li>🧠 <strong>Azure Advisor:</strong> Recommends VM right-sizing, idle resource cleanup, and reserved instance opportunities.</li>
          <li>🎯 <strong>Reservations:</strong> Commit 1/3-year term for predictable workloads — save up to 70%.</li>
          <li>⚙️ <strong>Autoscaling:</strong> Scale VMs/App Services dynamically based on CPU/memory to prevent over-provisioning.</li>
          <li>☁️ <strong>Spot VMs:</strong> Run non-critical workloads at huge discounts (up to 90%).</li>
        </ul>
        <p><strong>In Practice:</strong> I use a mix of <em>Autoscale</em> + <em>Budget Alerts</em> + <em>Azure Policy</em> to optimize cost across dev/test environments.</p>
      </div>`
      },
      {
        question: "What are Availability Zones and their benefits?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Zones – Fault Isolation Units</strong></h3>
        <p>Availability Zones (AZs) are physically separate datacenters within an Azure region, each with independent power, cooling, and networking.</p>
        <ul style="margin-left:1.2rem;">
          <li>⚡ <strong>High Availability:</strong> Protects apps from datacenter-level failures.</li>
          <li>🔁 <strong>Zone Redundancy:</strong> Replicates resources across zones for SLA up to 99.99%.</li>
          <li>🧱 <strong>Example Services:</strong> VMs, Disks, App Gateway, AKS, SQL Managed Instance.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy production workloads (App GW + AKS + SQL MI) across Zone 1/2/3 for true regional resiliency.</p>
      </div>`
      },
      {
        question: "What services of Azure have you used (VMs, VNets, NSGs, LB, Storage, App GW, AKS, App Service)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Core Azure Services I Use Regularly</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🖥️ <strong>Compute:</strong> VMs, VMSS, App Service, AKS (container orchestration).</li>
          <li>🌐 <strong>Networking:</strong> VNets, Subnets, NSGs, UDRs, Load Balancer, Application Gateway (with WAF).</li>
          <li>💾 <strong>Storage:</strong> Blob, File Share, Managed Disks, SAS policies, private endpoints.</li>
          <li>🧱 <strong>Security:</strong> Azure Firewall, Key Vault, Defender for Cloud.</li>
          <li>🧠 <strong>Monitoring:</strong> Log Analytics, Application Insights, Azure Monitor, Alerts.</li>
        </ul>
        <p><strong>In Practice:</strong> I build end-to-end landing zones with AKS + ACR + App GW + Key Vault + Azure Monitor integration.</p>
      </div>`
      },
      {
        question: "What are the pillars of the Well-Architected Framework?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏛️ <strong>Azure Well-Architected Framework – 5 Pillars</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ <strong>Operational Excellence:</strong> Monitoring, CI/CD automation, Infrastructure as Code.</li>
          <li>🔒 <strong>Security:</strong> Identity protection, network isolation, secret management.</li>
          <li>🧱 <strong>Reliability:</strong> Backup, redundancy, failover, auto-healing systems.</li>
          <li>💰 <strong>Cost Optimization:</strong> Autoscaling, right-sizing, reserved instances, budgets.</li>
          <li>🚀 <strong>Performance Efficiency:</strong> Autoscaling, caching, CDN, optimized queries.</li>
        </ul>
        <p><strong>In Practice:</strong> I evaluate my deployments against these pillars during architecture reviews and cost audits.</p>
      </div>`
      },
      {
        question: "What are the key design principles for an enterprise Landing Zone (policy, guardrails, identity, networking, management)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Enterprise Landing Zone – Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🪪 <strong>Identity:</strong> Centralized Azure AD, RBAC, and Conditional Access policies.</li>
          <li>🧱 <strong>Networking:</strong> Hub-Spoke model with private DNS, Firewall, and UDR-based routing.</li>
          <li>🔐 <strong>Security Guardrails:</strong> Azure Policy, Defender for Cloud, and Log Analytics integration.</li>
          <li>📋 <strong>Governance:</strong> Management Groups and Blueprints for policy enforcement.</li>
          <li>🪣 <strong>Management:</strong> Centralized Log Analytics, Update Management, and Monitor Workbooks.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy landing zones via Terraform modules + Azure Policy Assignments to ensure compliance by design.</p>
      </div>`
      },
      {
        question: "How will you secure your frontend deployment (WAF, Front Door, Private Link, Managed Identity, secret scanning)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Securing Frontend Deployment</strong></h3>
        <p>Frontend security focuses on protecting web apps from external threats and data leakage.</p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Azure Front Door + WAF:</strong> Provides global load balancing with layer-7 threat protection.</li>
          <li>🔒 <strong>Private Link:</strong> Restrict frontend-to-backend traffic over private network.</li>
          <li>🧠 <strong>Managed Identity:</strong> Replace credentials with identity-based access (no secrets in code).</li>
          <li>🔍 <strong>Secret Scanning:</strong> Enable GitHub Advanced Security / ADO Secret Scanning to prevent key leaks.</li>
          <li>🚫 <strong>HTTPS Only:</strong> Enforce TLS 1.2+, use managed certificates in App Gateway.</li>
        </ul>
        <p><strong>In Practice:</strong> I host frontends behind Front Door + WAF with Private Endpoint connectivity to backend APIs.</p>
      </div>`
      },
      {
        question: "How will you work across multi-environment setups in Azure (dev/test/prod isolation, subscriptions, policies)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Managing Multi-Environment Setups</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📦 <strong>Environment Isolation:</strong> Separate subscriptions or resource groups for Dev, QA, UAT, and Prod.</li>
          <li>⚙️ <strong>Azure Policy:</strong> Enforce naming conventions, location restrictions, and tagging.</li>
          <li>🔒 <strong>RBAC:</strong> Restrict access — DevOps team: Dev/Test; Ops team: Prod-only permissions.</li>
          <li>🧰 <strong>CI/CD Variables:</strong> Parameterize YAML pipelines to deploy per environment.</li>
          <li>🔄 <strong>Terraform Workspaces:</strong> Use environment-specific state files and variable sets.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow a strict environment segregation model using Management Groups + YAML pipeline parameters for smooth multi-stage deployments.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Migration & Platform Operations",
    questions: [
      {
        question: "What are the steps to migrate on-prem servers/VMs to Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚚 <strong>On-Prem to Azure Migration (Lift & Shift Approach)</strong></h3>
        <p>Azure Migrate is the primary tool used for assessing, replicating, and migrating on-prem servers to Azure.</p>
        <h4>🧭 Step-by-Step:</h4>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Discovery & Assessment:</strong> Install <em>Azure Migrate Appliance</em> on-prem to collect VM inventory, performance, and readiness.</li>
          <li>2️⃣ <strong>Sizing & Cost Estimation:</strong> Use Azure Migrate to generate right-sized VM recommendations and pricing estimates.</li>
          <li>3️⃣ <strong>Replication Setup:</strong> Enable replication via <em>Azure Migrate: Server Migration</em> (uses ASR in background).</li>
          <li>4️⃣ <strong>Testing:</strong> Run test migrations to validate boot and app connectivity in Azure.</li>
          <li>5️⃣ <strong>Final Migration:</strong> Perform planned failover, validate workloads, and decommission on-prem servers.</li>
        </ul>
        <p><strong>In Practice:</strong> I perform discovery → replicate → test → migrate using <code>Azure Migrate + ASR</code> with DNS update and firewall rule validation post migration.</p>
      </div>`
      },
      {
        question: "What are the steps to migrate on-prem VMs to Azure with minimal downtime?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Near-Zero Downtime Migration</strong></h3>
        <p>
          For minimal downtime migrations, we use <strong>continuous replication + planned failover</strong> via Azure Site Recovery.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Step 1 – Prepare:</strong> Install ASR Mobility agent on source VMs and connect to Recovery Vault.</li>
          <li>🔹 <strong>Step 2 – Continuous Replication:</strong> ASR replicates disks to target Azure region in near real-time.</li>
          <li>🔹 <strong>Step 3 – Test Failover:</strong> Validate functionality in Azure sandbox (non-disruptive).</li>
          <li>🔹 <strong>Step 4 – Planned Failover:</strong> During cutover window, sync delta changes and start Azure VM.</li>
          <li>🔹 <strong>Step 5 – DNS Switch:</strong> Redirect user traffic to new Azure endpoint.</li>
        </ul>
        <p><strong>In Practice:</strong> I usually plan failover during low-traffic hours and keep rollback option ready via reverse replication.</p>
      </div>`
      },
      {
        question: "How do you handle platform updates in Azure Infra (patches, reboots, host OS updates)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩹 <strong>Azure Platform Update & Patch Management</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🧠 <strong>Azure Updates:</strong> Host OS updates and patches are managed automatically by Microsoft for PaaS services (AKS, App Service, Functions).</li>
          <li>💻 <strong>VM Patch Management:</strong> Use <strong>Azure Update Management</strong> (Automation Account + Log Analytics) for scheduling patches.</li>
          <li>🔁 <strong>Maintenance Configurations:</strong> Define patch windows for grouped resources to control reboots.</li>
          <li>🚨 <strong>Notification:</strong> Service Health Alerts for planned Azure maintenance events.</li>
          <li>🧰 <strong>Automation:</strong> Use Runbooks to patch VMs automatically and send compliance reports.</li>
        </ul>
        <p><strong>In Practice:</strong> I patch PROD via <em>maintenance configurations</em> and use <em>custom scripts</em> to validate app health post-patch.</p>
      </div>`
      },
      {
        question: "What’s the process to move workloads between regions or subscriptions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Workload Movement Between Regions or Subscriptions</strong></h3>
        <p>
          There are multiple ways to move resources depending on type and criticality.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>1. Move Between Subscriptions:</strong>  
            Use <em>Resource Move</em> (portal or CLI) → Resources must support move operation and remain in same region.
            <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>az resource move --destination-subscription-id "xxxx" --destination-group "rg-new" --ids /subscriptions/.../resources/...</code></pre>
          </li>
          <li>🔹 <strong>2. Move Between Regions:</strong>  
            - Use <strong>Azure Resource Mover</strong> for supported resources.  
            - Or use <strong>ARM template export + redeploy</strong> (Infra as Code approach).  
            - For VMs: use snapshot → copy to new region → recreate VM from disk.</li>
          <li>🔹 <strong>3. Networking & Dependencies:</strong>  
            Recreate VNet, NSG, Private Endpoints, and Service Connections manually.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer <strong>Resource Mover</strong> for region migrations and <strong>Terraform automation</strong> for subscription transitions to ensure identical infra rebuilds.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "13. Storage, Backup & Region Placement – Practical Checks",
    questions: [
      {
        question: "How do you configure Azure Backup and retention policies?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Azure Backup Configuration & Retention Strategy</strong></h3>
        <p>Azure Backup provides reliable, policy-based protection for VMs, files, and workloads using <strong>Recovery Services Vault</strong>.</p>

        <h4>🧭 Step-by-Step Configuration:</h4>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Create a <strong>Recovery Services Vault</strong> in the same region as the VMs.</li>
          <li>2️⃣ Enable <strong>Azure Backup</strong> on the selected VMs.</li>
          <li>3️⃣ Define a <strong>Backup Policy</strong> – includes schedule and retention settings.</li>
          <li>4️⃣ Configure storage replication type:
            <ul>
              <li>🌐 <strong>GRS (Geo-Redundant Storage):</strong> For production workloads requiring cross-region durability.</li>
              <li>📍 <strong>LRS (Locally Redundant Storage):</strong> For non-critical dev/test workloads.</li>
            </ul>
          </li>
        </ul>

        <h4>📅 Typical Retention Policy:</h4>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Daily backups retained for 30 days</li>
          <li>🔹 Weekly full backups retained for 12 weeks</li>
          <li>🔹 Monthly backups retained for 12 months</li>
          <li>🔹 Yearly retention for long-term archival</li>
        </ul>

        <p><strong>In Practice:</strong> I tag critical VMs with <em>“backup:enabled”</em> and auto-assign retention via <em>Azure Policy</em> so compliance reports are consistent across environments.</p>
      </div>`
      },
      {
        question: "Where are your VMs located — which region and why?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Region Selection Strategy for VMs</strong></h3>
        <p>Choosing the right Azure region depends on performance, cost, data residency, and redundancy needs.</p>
        <ul style="margin-left:1.2rem;">
          <li>📍 <strong>Primary Region:</strong> Chosen closest to end-users to minimize latency (e.g., Central India for Indian clients, East US for global workloads).</li>
          <li>⚙️ <strong>Compliance Requirement:</strong> Data residency laws (e.g., healthcare or finance) may mandate specific region usage.</li>
          <li>💸 <strong>Cost Optimization:</strong> Evaluate region pricing — some zones (like North Europe) are 10–15% cheaper than others.</li>
          <li>🧱 <strong>Availability Zones:</strong> Used for high availability and fault tolerance.</li>
        </ul>
        <p><strong>In Practice:</strong> I host most production workloads in <em>Central India</em> with Availability Zones enabled, ensuring minimal latency and maximum uptime.</p>
      </div>`
      },
      {
        question: "Where are your DR servers located — region pair and compliance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌀 <strong>DR Server Placement & Region Pairing</strong></h3>
        <p>Azure provides <strong>paired regions</strong> to ensure high availability and disaster recovery capability across geographically separated data centers.</p>
        <ul style="margin-left:1.2rem;">
          <li>🔁 <strong>Region Pair Concept:</strong> Each Azure region is paired with another (e.g., Central India ↔ South India) to ensure asynchronous replication.</li>
          <li>📦 <strong>Backup & ASR Replication:</strong> All recovery vaults use the paired region automatically for geo-redundant data storage.</li>
          <li>⚙️ <strong>Failover Strategy:</strong> Azure Site Recovery replicates VMs from primary region to its pair for DR readiness.</li>
          <li>🔐 <strong>Compliance Consideration:</strong> Data remains within the same geographic boundary — essential for industries like BFSI and healthcare.</li>
        </ul>
        <p><strong>In Practice:</strong> For workloads in <em>Central India</em>, I configure ASR failover to <em>South India</em> and perform quarterly DR drills to validate readiness and RTO/RPO targets.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Quickfire: Clarifications & Choose the Right Service",
    questions: [
      {
        question: "Difference between Availability Zone and Availability Set?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Zone vs Availability Set</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th style="text-align:left;">Feature</th><th>Availability Zone</th><th>Availability Set</th></tr>
          <tr><td>Scope</td><td>Physically separate datacenters in same region</td><td>Logical grouping within same datacenter</td></tr>
          <tr><td>Fault Tolerance</td><td>Protects from full datacenter outage</td><td>Protects from host/server failure only</td></tr>
          <tr><td>Uptime SLA</td><td>99.99%</td><td>99.95%</td></tr>
          <tr><td>Use Case</td><td>Critical production workloads</td><td>Basic redundancy for non-critical workloads</td></tr>
        </table>
        <p><strong>In Practice:</strong> I always choose <em>Availability Zones</em> for production workloads — they provide true datacenter-level isolation.</p>
      </div>`
      },
      {
        question: "Difference between Azure DNS and Azure Front Door?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure DNS vs Azure Front Door</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure DNS:</strong> Provides domain name resolution (maps FQDN → IP). It’s a DNS hosting service only.</li>
          <li><strong>Azure Front Door:</strong> Acts as a global layer-7 load balancer with WAF, caching, SSL offloading, and routing.</li>
        </ul>
        <p><strong>Example:</strong> DNS just tells users where your site is; Front Door ensures it’s fast, secure, and globally available.</p>
      </div>`
      },
      {
        question: "Azure Front Door vs Traffic Manager — when to use which?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>Front Door vs Traffic Manager</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Front Door</th><th>Traffic Manager</th></tr>
          <tr><td>Layer</td><td>Layer 7 (HTTP/HTTPS)</td><td>Layer 4 (DNS-based)</td></tr>
          <tr><td>Routing Method</td><td>Application-level routing</td><td>DNS-level redirection</td></tr>
          <tr><td>Performance</td><td>Faster (edge caching, SSL termination)</td><td>DNS TTL-based, slower updates</td></tr>
          <tr><td>Use Case</td><td>Global web applications</td><td>Global failover and endpoint health checks</td></tr>
        </table>
        <p><strong>Rule of Thumb:</strong> Use <em>Front Door</em> for HTTP(S) traffic optimization, <em>Traffic Manager</em> for global failover or non-HTTP apps.</p>
      </div>`
      },
      {
        question: "CDN vs Traffic Manager — main differences and placement in architecture?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>CDN vs Traffic Manager</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>CDN (Content Delivery Network):</strong> Caches static content (images, videos, JS) at edge POPs for faster delivery.</li>
          <li><strong>Traffic Manager:</strong> Routes users to the nearest or healthiest endpoint using DNS-based redirection.</li>
        </ul>
        <p><strong>Placement:</strong> CDN sits in front of app/web layer → improves latency.  
        Traffic Manager sits above multiple app endpoints → controls routing.</p>
        <p><strong>In Practice:</strong> I often use CDN + Front Door together — CDN for static content, Front Door for dynamic routing & WAF.</p>
      </div>`
      },
      {
        question: "Types of Load Balancer — explain internal vs external scenarios.",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Internal vs External Load Balancer</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌍 <strong>External Load Balancer:</strong> Has public IP, routes traffic from internet to backend pool (used for web apps, public endpoints).</li>
          <li>🏠 <strong>Internal Load Balancer:</strong> Has private IP, routes only internal (intranet) traffic between VNets/subnets (used for DB/app tiers).</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy a public-facing App GW and an internal Load Balancer for backend microservices within the same VNet.</p>
      </div>`
      },
      {
        question: "Application Gateway (Standard vs WAF SKU) — differences and selection.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Application Gateway SKUs</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Standard_v2</th><th>WAF_v2</th></tr>
          <tr><td>Purpose</td><td>Load balancing (L7)</td><td>Load balancing + Web Application Firewall</td></tr>
          <tr><td>Security</td><td>No WAF protection</td><td>OWASP protection, SQLi/XSS defense</td></tr>
          <tr><td>Mode</td><td>Detection only</td><td>Detection or Prevention mode</td></tr>
          <tr><td>Cost</td><td>Lower</td><td>Higher (due to WAF engine)</td></tr>
        </table>
        <p><strong>In Practice:</strong> I always choose <em>WAF_v2</em> for internet-facing applications to meet compliance and OWASP security standards.</p>
      </div>`
      },
      {
        question: "Private Endpoint vs Service Endpoint — differences and selection.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Private Endpoint vs Service Endpoint</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Private Endpoint</th><th>Service Endpoint</th></tr>
          <tr><td>Connection Type</td><td>Private IP within VNet (via NIC)</td><td>Public IP secured at network level</td></tr>
          <tr><td>Access Path</td><td>Traffic stays within Azure backbone</td><td>Uses public IP but restricted via VNet ACL</td></tr>
          <tr><td>Security</td><td>Highest (private IP)</td><td>Moderate (depends on NSG rules)</td></tr>
          <tr><td>Use Case</td><td>When you need full private access to PaaS (e.g., Key Vault, Storage)</td><td>When you just want secure public access from specific VNets</td></tr>
        </table>
        <p><strong>Rule of Thumb:</strong> Always use <em>Private Endpoint</em> for sensitive workloads — eliminates internet exposure completely.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "15. Real-World Scenarios",
    questions: [
      {
        question: "“We have VM, Storage Account, SQL DB, App Service in one subnet, and a Private Endpoint on Storage” — how will the VM resolve the Storage FQDN privately?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Private DNS Resolution with Private Endpoint</strong></h3>
        <p>
          When you create a <strong>Private Endpoint</strong> for a Storage Account, Azure automatically creates a Private DNS Zone (e.g., <code>privatelink.blob.core.windows.net</code>)
          and links it to the VNet. This ensures that the VM in the same VNet resolves the Storage FQDN privately.
        </p>
        <h4>🧭 Step-by-Step:</h4>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ Create Private Endpoint for the Storage Account (blob/file/table as needed).</li>
          <li>2️⃣ Azure auto-creates DNS zone: <code>privatelink.blob.core.windows.net</code>.</li>
          <li>3️⃣ Link that DNS zone to the VNet where the VM resides.</li>
          <li>4️⃣ VM DNS lookup for <code>storageaccount.blob.core.windows.net</code> → resolves to Private IP of the PE.</li>
        </ul>
        <p><strong>In Practice:</strong> I always verify using <code>nslookup</code> or <code>Resolve-DnsName</code> from the VM — it must show a private IP (10.x or 172.x).</p>
      </div>`
      },
      {
        question: "“AKS app is slow and has DNS resolution errors” — walk through end-to-end troubleshooting (CoreDNS, Private DNS Zone links, NSGs/UDRs, health probes).",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>AKS DNS & Performance Troubleshooting</strong></h3>
        <h4>🧩 Step-by-Step Debug Flow:</h4>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Check CoreDNS:</strong> Run <code>kubectl logs -n kube-system -l k8s-app=kube-dns</code> — look for timeouts or failures.</li>
          <li>2️⃣ <strong>Validate DNS Zone Link:</strong> Ensure AKS VNet is linked to the Private DNS Zone if workloads resolve internal endpoints (e.g., Storage PE).</li>
          <li>3️⃣ <strong>NSG & UDR Check:</strong> Confirm no NSG rules or UDRs are blocking port 53 (DNS) or outbound internet access if needed.</li>
          <li>4️⃣ <strong>Node Health:</strong> Run <code>kubectl get nodes -o wide</code> and verify Ready status and outbound connectivity.</li>
          <li>5️⃣ <strong>App Gateway / Load Balancer:</strong> Check backend health probes — unhealthy backends often show DNS resolution delay.</li>
          <li>6️⃣ <strong>Resource Saturation:</strong> If CoreDNS pods are throttled (CPU), increase replica count.</li>
        </ul>
        <p><strong>Root Cause Examples:</strong> Missing private DNS link or throttled CoreDNS pods.  
        <strong>Fix:</strong> Re-link private DNS zone and scale CoreDNS deployment via <code>kubectl scale</code>.</p>
      </div>`
      },
      {
        question: "“How have you used Azure Load Balancers (internal/external) and Application Gateway?” Give examples.",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Load Balancer & App Gateway Use Cases</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌍 <strong>External Load Balancer:</strong> Used for exposing app endpoints (e.g., NGINX ingress controller in AKS) to internet.</li>
          <li>🏠 <strong>Internal Load Balancer:</strong> Used for backend microservices or DB tier — accessible only within the VNet.</li>
          <li>🧱 <strong>Application Gateway (WAF_v2):</strong> Used as a layer-7 reverse proxy with WAF — TLS termination, routing, and security.</li>
        </ul>
        <p><strong>Example:</strong> App Gateway (public) → AKS ingress (internal LB) → microservices.  
        This gives complete control + isolation with zero public exposure to pods.</p>
      </div>`
      },
      {
        question: "“How do you secure Storage Account access?” (Private endpoints, deny public, SAS, scoped tokens, firewall, RBAC)",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Storage Account Security Model</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>1️⃣ <strong>Disable Public Access:</strong> Set <code>AllowPublicAccess = false</code> for all containers.</li>
          <li>2️⃣ <strong>Private Endpoint:</strong> Access via private IP inside VNet (no internet exposure).</li>
          <li>3️⃣ <strong>RBAC:</strong> Grant least-privilege roles like <em>Storage Blob Data Reader</em>.</li>
          <li>4️⃣ <strong>Firewall:</strong> Restrict to specific VNets or IP ranges.</li>
          <li>5️⃣ <strong>SAS Tokens:</strong> Issue time-bound and permission-scoped access links.</li>
          <li>6️⃣ <strong>Managed Identity:</strong> Use for automation and apps instead of keys.</li>
        </ul>
        <p><strong>In Practice:</strong> My standard policy: “no storage without PE + firewall + RBAC”.  
        Every pipeline fetches secrets using Managed Identity, not shared keys.</p>
      </div>`
      },
      {
        question: "“Tell me where you used NSG and Virtual Network Gateway in your project.”",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌉 <strong>NSG & Virtual Network Gateway — Real Project Example</strong></h3>
        <p>Both play key roles in Azure hybrid connectivity and traffic control.</p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>NSG (Network Security Group):</strong>
            <ul>
              <li>Applied on subnets and NICs to control inbound/outbound rules.</li>
              <li>Used for restricting app-tier to DB-tier (only 1433 allowed).</li>
              <li>Blocked all outbound internet traffic except updates.</li>
            </ul>
          </li>
          <li>🔹 <strong>Virtual Network Gateway:</strong>
            <ul>
              <li>Configured for site-to-site VPN to connect on-prem datacenter.</li>
              <li>Used with ExpressRoute for private connectivity.</li>
              <li>In project: Hybrid healthcare setup → Azure VNet ↔ On-prem EMR servers via VPN Gateway.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> NSG handles east-west isolation, and VPN Gateway handles north-south connectivity to on-prem.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "16. Cross-Cloud & Edge Case (Bonus)",
    questions: [
      {
        question: "Your EC2 instance in a private subnet must download packages but no NAT Gateway exists — what alternatives (VPC endpoints, Instance Connect, proxy, S3/Dynamo endpoints) apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Accessing Internet from Private EC2 without NAT Gateway</strong></h3>
        <p>
          Normally, private subnets use a <strong>NAT Gateway</strong> to reach the internet for OS/package updates.
          But when NAT isn’t available, we can use the following alternatives depending on the requirement:
        </p>

        <h4>🧭 <strong>1️⃣ VPC Interface Endpoints (AWS PrivateLink)</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Use AWS <strong>VPC Endpoints</strong> for essential services like <em>S3, ECR, DynamoDB, Systems Manager</em>.</li>
          <li>These allow private access via AWS backbone — no internet routing needed.</li>
        </ul>

        <h4>🔐 <strong>2️⃣ SSM Agent (AWS Systems Manager)</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Install <strong>SSM Agent</strong> on EC2 and use <em>Session Manager</em> for secure remote access without SSH/public IP.</li>
          <li>It can also push patches or pull packages via AWS internal APIs.</li>
        </ul>

        <h4>🧩 <strong>3️⃣ HTTP/HTTPS Proxy</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Configure a <strong>proxy server</strong> (like Squid or corporate proxy) in a public subnet.</li>
          <li>Route private EC2 outbound traffic through that proxy for package downloads.</li>
        </ul>

        <h4>📦 <strong>4️⃣ S3 & DynamoDB Gateway Endpoints</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Gateway Endpoints</strong> for S3 or DynamoDB access — fully private and free of data transfer cost.</li>
        </ul>

        <p><strong>In Practice:</strong> I avoid NAT in non-production to save cost — instead use VPC endpoints + SSM Session Manager for controlled patching and connectivity.</p>
      </div>`
      },
      {
        question: "What is the difference between PaaS, IaaS, and SaaS in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>PaaS vs IaaS vs SaaS in Azure</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <th>Category</th>
            <th>Responsibility</th>
            <th>Examples</th>
            <th>Use Case</th>
          </tr>
          <tr>
            <td><strong>IaaS</strong></td>
            <td>User manages OS, runtime, security, and scaling.</td>
            <td>Azure VM, VNet, Load Balancer, Storage Account.</td>
            <td>Full control — ideal for legacy apps or custom infra.</td>
          </tr>
          <tr>
            <td><strong>PaaS</strong></td>
            <td>Azure manages platform, user manages app code/config.</td>
            <td>App Service, AKS, SQL Database, Functions.</td>
            <td>Focus on app development — no server management.</td>
          </tr>
          <tr>
            <td><strong>SaaS</strong></td>
            <td>Everything managed by provider — user just consumes service.</td>
            <td>Microsoft 365, Power BI, Azure DevOps, Salesforce.</td>
            <td>End-user ready services — no infra or patching required.</td>
          </tr>
        </table>
        <p><strong>In Practice:</strong> I use a mix — IaaS for custom tools, PaaS for app hosting, and SaaS for collaboration (ADO, M365). The balance depends on control vs convenience needs.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "17. Misc / Screening (Non-Tech)",
    questions: [
      {
        question: "Are you open to working from office 3 days a week and relocation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏢 <strong>Work Mode & Relocation Preference</strong></h3>
        <p>
          Yes, I’m open to a hybrid work model — working from the office a few days a week is perfectly fine for collaboration and project alignment.  
          I understand that DevOps often requires close coordination with development and operations teams, so being on-site part-time is productive.
        </p>
        <p>
          Regarding relocation — I’m flexible based on project needs and company policy.  
          My main focus is on contributing effectively to the project and ensuring smooth CI/CD operations,  
          so if relocation adds value to that, I’m absolutely open to it.
        </p>
        <p><strong>In Practice:</strong> I’ve already worked in both remote and hybrid setups — adapting to either isn’t a problem for me as long as communication and delivery stay efficient.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "18. Azure Infrastructure & Networking",
    questions: [
      {
        question: "How can we connect to VPN securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Connecting to VPN Securely in Azure</strong></h3>
        <p>
          In Azure, a <strong>VPN Gateway</strong> allows secure, encrypted communication between on-premises networks and Azure VNets using IPsec/IKE protocols.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Point-to-Site (P2S):</strong> Used by individual clients to connect securely to Azure using certificates or Azure AD authentication.</li>
          <li>🏢 <strong>Site-to-Site (S2S):</strong> Establishes a tunnel between on-premises firewall/VPN device and Azure VPN Gateway.</li>
          <li>🧩 <strong>ExpressRoute + VPN:</strong> For hybrid setups, adds an encrypted overlay on top of private connections.</li>
          <li>🔒 <strong>Security:</strong> IPsec encryption (AES256/SHA256), certificate-based authentication, and enforced MFA for client VPNs.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure Site-to-Site VPN for hybrid setups using BGP dynamic routing and certificate-based P2S VPN for remote developer access with conditional MFA.</p>
      </div>`
      },
      {
        question: "What is VNet Peering?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>VNet Peering — Network Connectivity Between VNets</strong></h3>
        <p>
          <strong>VNet Peering</strong> allows direct, low-latency private communication between two Azure VNets using Microsoft’s backbone network (no public internet).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Enables resource communication across VNets as if they were in the same network.</li>
          <li>🔁 Supports peering across regions (Global VNet Peering).</li>
          <li>🧭 No bandwidth bottleneck — uses Azure backbone, not VPN.</li>
          <li>⚙️ Can enable/disable traffic forwarding, gateway transit, and remote access.</li>
        </ul>
        <pre><code># Example - Create VNet peering
az network vnet peering create \\
  --name hub-to-spoke \\
  --resource-group rg-network \\
  --vnet-name hub-vnet \\
  --remote-vnet spoke-vnet \\
  --allow-vnet-access</code></pre>
        <p><strong>In Practice:</strong> I use hub-spoke architecture with VNet peering — hub hosts shared services (firewall, jumpbox), spokes contain isolated app environments.</p>
      </div>`
      },
      {
        question: "Explain Basic Load Balancer (Layer 4).",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Azure Load Balancer (Layer 4 - Transport Layer)</strong></h3>
        <p>
          The <strong>Azure Load Balancer</strong> operates at Layer 4 (TCP/UDP) and distributes traffic among backend resources like VMs or VMSS based on IP and port.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Two types: <strong>Public</strong> (internet-facing) and <strong>Internal</strong> (private network only).</li>
          <li>🔹 Uses <strong>health probes</strong> to detect unhealthy instances.</li>
          <li>🔹 Supports inbound NAT rules for RDP/SSH access.</li>
          <li>🔹 Provides ultra-low latency and high throughput.</li>
        </ul>
        <pre><code># Example: Create public Load Balancer
az network lb create --resource-group rg-prod --name myLB --sku Basic --frontend-ip-name myFront --backend-pool-name myBackPool</code></pre>
        <p><strong>In Practice:</strong> I use Basic Load Balancer for internal non-critical workloads, while Standard SKU with zone redundancy for production-grade deployments.</p>
      </div>`
      },
      {
        question: "Explain Application Gateway (Layer 7).",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Azure Application Gateway — Layer 7 Load Balancer</strong></h3>
        <p>
          <strong>Application Gateway</strong> works at the <strong>Application Layer (HTTP/HTTPS)</strong> and routes traffic based on URL path or hostname.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔸 Supports SSL termination, cookie-based affinity, and session persistence.</li>
          <li>🧩 Components include Frontend IP, Listener, Routing Rules, Backend Pools, and Health Probes.</li>
          <li>🔒 Can be deployed with <strong>WAF (Web Application Firewall)</strong> for OWASP threat protection.</li>
          <li>⚙️ Integrates natively with AKS as an <strong>Ingress Controller</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Application Gateway WAF_v2 for web applications to handle HTTPS routing, enforce SSL policies, and protect from SQLi/XSS attacks.</p>
      </div>`
      },
      {
        question: "What is an Application Gateway and what are its components?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Application Gateway — Key Components</strong></h3>
        <p>
          The <strong>Application Gateway</strong> is a Layer 7 load balancer with intelligent routing capabilities. Its main components are:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Frontend IP Configuration:</strong> Public or private endpoint for client access.</li>
          <li>🔔 <strong>Listener:</strong> Listens on a port/protocol (e.g., HTTPS:443) and maps requests to routing rules.</li>
          <li>⚙️ <strong>Routing Rules:</strong> Define how traffic is routed to backend pools.</li>
          <li>🧱 <strong>Backend Pool:</strong> Set of targets (VMs, App Services, or AKS ingress pods).</li>
          <li>💓 <strong>Health Probes:</strong> Periodically check backend health to ensure routing only to healthy instances.</li>
          <li>🧰 <strong>WAF Policy (optional):</strong> Protects against Layer 7 attacks.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure separate listeners for each app domain (e.g., API, frontend) and route them via URL path-based rules to backend microservices running in AKS.</p>
      </div>`
      },
      {
        question: "How do you apply NSG (Network Security Group) in your network?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚧 <strong>Applying Network Security Groups (NSG) in Azure</strong></h3>
        <p>
          <strong>NSGs</strong> control inbound and outbound traffic to Azure resources at subnet or NIC level based on defined security rules.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Rules include source/destination IP, port, protocol, and priority (100–4096).</li>
          <li>🔹 Applied at <strong>Subnet level</strong> for group control or <strong>NIC level</strong> for fine-grained access.</li>
          <li>🔹 Can integrate with Azure Firewall for multi-layer protection.</li>
        </ul>
        <pre><code># Example: Apply NSG to Subnet
az network vnet subnet update --vnet-name myVnet --name backend-subnet --network-security-group myNSG</code></pre>
        <p><strong>In Practice:</strong> I create NSG per subnet (web, app, db) and apply rules following least-privilege principle — e.g., only app subnet can talk to DB subnet on 1433.</p>
      </div>`
      },
      {
        question: "Did you implement firewall with NSG?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Combining Azure Firewall with NSGs</strong></h3>
        <p>
          Yes — I use both <strong>Azure Firewall</strong> and <strong>NSGs</strong> together for layered network security.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>NSG:</strong> Controls basic traffic filtering at subnet/NIC level (Layer 3 & 4).</li>
          <li>🔥 <strong>Azure Firewall:</strong> Provides centralized Layer 7 protection, application rules, FQDN filtering, and logging.</li>
          <li>🚀 Combined via <strong>Hub-Spoke</strong> model — spokes route outbound traffic to firewall using <strong>UDRs (User Defined Routes)</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy Azure Firewall in the hub VNet and associate NSGs to spoke subnets, ensuring both perimeter and subnet-level isolation.</p>
      </div>`
      },
      {
        question: "What resources have you used to enhance network security? (Subnets, NSG, Firewall)",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Network Security Design in Azure</strong></h3>
        <p>
          To enhance network security, I implement a layered defense approach combining Azure networking resources:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 <strong>Subnets:</strong> Segmented by tiers — Web, App, DB — for traffic isolation.</li>
          <li>🚧 <strong>NSGs:</strong> Enforce inbound/outbound rules per subnet (e.g., only App → DB on 1433).</li>
          <li>🔥 <strong>Azure Firewall:</strong> Centralized control for FQDN filtering, logging, and threat intelligence.</li>
          <li>🛡️ <strong>Private Endpoints:</strong> Secure access to PaaS services without public exposure.</li>
          <li>🔒 <strong>UDRs:</strong> Direct outbound traffic through Firewall for inspection.</li>
          <li>🧠 <strong>Azure DDoS Protection:</strong> Shields VNets from volumetric and protocol attacks.</li>
        </ul>
        <p><strong>In Practice:</strong> I architect networks using a <strong>Hub-Spoke model</strong> — hub hosts shared security controls (Firewall, Bastion), while spokes host application subnets protected by NSGs and private endpoints.</p>
      </div>`
      },
      {
        question: "Difference between Service Endpoints and Private Endpoints?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Service Endpoint vs Private Endpoint — Key Differences</strong></h3>
        <p>Both enhance security by keeping Azure PaaS traffic within the Azure backbone network, but their implementation differs fundamentally:</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Service Endpoint</th><th>Private Endpoint</th></tr>
          <tr><td>Network Access</td><td>Extends VNet identity to Azure services</td><td>Creates a private IP inside the VNet for the service</td></tr>
          <tr><td>Public Exposure</td><td>Service still has a public IP</td><td>No public exposure — accessed only via private IP</td></tr>
          <tr><td>Isolation Level</td><td>Network-level isolation</td><td>Full data-plane isolation (private connectivity)</td></tr>
          <tr><td>DNS Handling</td><td>Uses public DNS</td><td>Uses private DNS zone for name resolution</td></tr>
          <tr><td>Best For</td><td>Low-risk, internal PaaS traffic</td><td>High-security workloads needing strict isolation</td></tr>
        </table>
        <p><strong>In Practice:</strong> I prefer <strong>Private Endpoints</strong> for databases and Key Vaults in production, while <strong>Service Endpoints</strong> are suitable for internal, non-critical services.</p>
      </div>`
      },
      {
        question: "What is the role of Azure Bastion in network security?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Azure Bastion — Secure Remote Access</strong></h3>
        <p>
          <strong>Azure Bastion</strong> provides <strong>secure RDP/SSH access</strong> to Azure VMs directly from the Azure portal, without exposing any public IPs.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔒 Eliminates the need for inbound port 22/3389 on VMs.</li>
          <li>🌐 Connections occur over SSL via Azure portal (no local client needed).</li>
          <li>🧩 Deployed in a dedicated subnet named <code>AzureBastionSubnet</code>.</li>
          <li>⚙️ Integrates seamlessly with RBAC and NSG rules for granular access control.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Bastion for admin access to production VMs — it ensures zero public IP exposure and enforces corporate access policies (MFA + RBAC).</p>
      </div>`
      },
      {
        question: "Can you elaborate on Availability Zones in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏙️ <strong>Azure Availability Zones — High Availability Design</strong></h3>
        <p>
          <strong>Availability Zones (AZs)</strong> are physically separate data centers within a single Azure region — each with independent power, cooling, and networking.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💪 Protects workloads from datacenter-level failures.</li>
          <li>📦 Each zone is identified as Zone 1, Zone 2, Zone 3.</li>
          <li>🔗 Provides high availability for critical apps via zone-redundant deployments (e.g., ZRS storage, zone-aware VMSS).</li>
          <li>🧭 Supports cross-zone load balancing and replication.</li>
        </ul>
        <p><strong>In Practice:</strong> I distribute VMs and AKS node pools across multiple zones to ensure resiliency and maintain 99.99% SLA for production environments.</p>
      </div>`
      },
      {
        question: "What is an Availability Set in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Set — Fault & Update Domain Protection</strong></h3>
        <p>
          An <strong>Availability Set</strong> is a logical grouping of VMs that ensures they’re distributed across multiple <strong>fault domains</strong> (hardware racks) and <strong>update domains</strong> (software maintenance groups).
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Fault Domains → Protect from hardware/power failures.</li>
          <li>🔄 Update Domains → Prevent downtime during system updates.</li>
          <li>🔒 Recommended for single-region HA setups.</li>
        </ul>
        <pre><code># Create VM in an Availability Set
az vm create --resource-group rg-prod --name appVM1 --availability-set as-prod</code></pre>
        <p><strong>In Practice:</strong> I use Availability Sets for critical workloads in single-zone regions, while preferring Zones for higher fault isolation in multi-zone regions.</p>
      </div>`
      },
      {
        question: "What arguments are required when creating a Resource Group?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Required Parameters for Resource Group Creation</strong></h3>
        <p>
          A Resource Group (RG) acts as a logical container for related Azure resources. Only two key arguments are mandatory during creation:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Name:</strong> Unique identifier within the subscription (e.g., <code>rg-prod</code>).</li>
          <li>🌍 <strong>Location:</strong> Azure region where metadata will be stored (e.g., <code>eastus</code>).</li>
        </ul>
        <pre><code>az group create --name rg-prod --location eastus</code></pre>
        <p><strong>In Practice:</strong> I follow naming conventions like <code>rg-&lt;env&gt;-&lt;app&gt;</code> and apply tags (Owner, CostCenter, Env) to maintain governance and cost visibility.</p>
      </div>`
      },
      {
        question: "What resources do you use when creating a VM in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Azure VM — Dependent Resources</strong></h3>
        <p>
          Creating a VM in Azure automatically provisions several dependent network and storage resources:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔸 <strong>VNet & Subnet:</strong> Provides network isolation and IP addressing.</li>
          <li>🔸 <strong>NIC (Network Interface):</strong> Connects VM to subnet.</li>
          <li>🔸 <strong>NSG (Network Security Group):</strong> Manages inbound/outbound rules.</li>
          <li>🔸 <strong>Public IP (optional):</strong> For external access.</li>
          <li>🔸 <strong>OS Disk + Data Disks:</strong> Storage for system and application data.</li>
          <li>🔸 <strong>Availability Options:</strong> Availability Set or Zone (for HA).</li>
        </ul>
        <p><strong>In Practice:</strong> I define these resources in Terraform or ARM templates to ensure consistent VM provisioning with tagging and security configurations baked in.</p>
      </div>`
      },
      {
        question: "Difference between VM and VMSS (Virtual Machine Scale Sets).",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>VM vs VMSS — Comparison</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>VM (Virtual Machine)</th><th>VMSS (Virtual Machine Scale Set)</th></tr>
          <tr><td>Type</td><td>Single compute instance</td><td>Group of identical, auto-scalable VMs</td></tr>
          <tr><td>Scaling</td><td>Manual scaling only</td><td>Automatic scaling based on metrics (CPU, memory, etc.)</td></tr>
          <tr><td>Load Balancing</td><td>Configured manually</td><td>Integrated with Azure Load Balancer or App Gateway</td></tr>
          <tr><td>Management</td><td>Individual</td><td>Centralized (template-based)</td></tr>
          <tr><td>Use Case</td><td>Custom workloads, stateful apps</td><td>Web servers, API services, stateless workloads</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use VMSS for web tiers that need horizontal scaling and traditional VMs for stateful backend systems like DB servers.</p>
      </div>`
      },
      {
        question: "If you need to create two VMs and two databases, which approach will you follow: VM or VMSS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Choosing Between VM and VMSS for Mixed Workloads</strong></h3>
        <p>
          The choice depends on workload characteristics — stateless vs stateful:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>💡 <strong>VMSS:</strong> For the two application VMs (web/app servers). Enables auto-scaling, LB integration, and uniform configuration.</li>
          <li>🧱 <strong>Standalone VMs:</strong> For the two databases. Databases are stateful, require persistent data and cannot be auto-scaled.</li>
        </ul>
        <p><strong>Architecture Example:</strong>  
          <ul style="margin-left:1.2rem;">
            <li>App Tier → VMSS behind Load Balancer</li>
            <li>DB Tier → VMs in Availability Set with Managed Disks</li>
          </ul>
        </p>
        <p><strong>In Practice:</strong> I follow a layered approach — VMSS for front-end scaling, dedicated HA VMs for databases, and secure both tiers with NSGs and private endpoints.</p>
      </div>`
      },
      {
        question: "How do you manage multiple Azure subscriptions in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Managing Multiple Azure Subscriptions in Azure DevOps</strong></h3>
        <p>
          When managing multiple Azure subscriptions, we use <strong>Service Connections</strong> and <strong>Service Principals</strong> in Azure DevOps to securely authenticate pipelines.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Create one <strong>Service Connection</strong> per subscription, linked via a Service Principal (SPN).</li>
          <li>🔹 Assign least-privilege RBAC roles (Contributor / Reader / Custom) per subscription.</li>
          <li>🔹 Use variable groups or pipeline parameters to dynamically target subscriptions.</li>
          <li>🔹 Optionally use a <strong>Management Group</strong> for policy and billing hierarchy.</li>
        </ul>
        <pre><code># Example: Use different service connections in YAML
- task: AzureCLI@2
  inputs:
    azureSubscription: 'Prod-Sub-Connection'
    scriptType: 'bash'
    scriptLocation: 'inlineScript'
    inlineScript: |
      az account show
      az group list</code></pre>
        <p><strong>In Practice:</strong> I use service connection naming standards (e.g., <code>sc-sub-prod</code>, <code>sc-sub-dev</code>) and store subscription IDs in variable groups to easily switch contexts between subscriptions during pipeline runs.</p>
      </div>`
      },
      {
        question: "How would you manage 1500 subscriptions from Azure DevOps level?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Managing 1500 Subscriptions — Scalable Approach</strong></h3>
        <p>
          Handling 1500 subscriptions manually is not scalable. I use a combination of <strong>Azure Management Groups</strong>, <strong>Service Principals with broad scope</strong>, and automation scripts.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 Organize subscriptions under <strong>Management Groups</strong> — by environment (Prod/Dev/Test).</li>
          <li>🔐 Use a single <strong>Service Principal</strong> with delegated access to multiple management groups.</li>
          <li>⚙️ Use <strong>Terraform or ARM templates</strong> for bulk operations.</li>
          <li>🚀 Automate onboarding using Azure REST APIs via pipelines (create, assign, audit subscriptions).</li>
          <li>📋 Centralize policies, RBAC roles, and tagging via Azure Policy or Blueprints.</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve used a single ADO pipeline with parameterized loops to deploy diagnostic settings, NSGs, and policies across hundreds of subscriptions in parallel using a single SPN token.</p>
      </div>`
      },
      {
        question: "What is a Service Principal and Managed Identity?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Service Principal vs Managed Identity — Authentication in Azure</strong></h3>
        <p>
          Both are used for non-interactive authentication between Azure resources and services, without using user credentials.
        </p>
        <h4>🔹 <strong>Service Principal:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Created in Azure AD to represent apps or automation tools.</li>
          <li>Requires <strong>App ID, Tenant ID, and Client Secret</strong> or certificate.</li>
          <li>Used by Terraform, pipelines, or CLI to deploy/manage Azure resources.</li>
        </ul>
        <h4>🔹 <strong>Managed Identity (MI):</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Automatically created and managed by Azure for resources like VMs, AKS, Functions.</li>
          <li>No secret rotation — Azure handles authentication internally.</li>
          <li>Ideal for secure resource-to-resource access (e.g., VM to Key Vault).</li>
        </ul>
        <p><strong>In Practice:</strong> I use Service Principals for DevOps pipelines and Managed Identities for runtime authentication from AKS or Function Apps to Key Vaults or Storage Accounts.</p>
      </div>`
      },
      {
        question: "What is Least Privilege Access?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Principle of Least Privilege Access</strong></h3>
        <p>
          The <strong>Least Privilege Principle</strong> means giving users, apps, or services the minimal level of permissions required to perform their job — nothing more.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Enforced via Azure RBAC and custom roles.</li>
          <li>🔹 Reduces the blast radius in case of a security breach.</li>
          <li>🔹 Often combined with <strong>Azure AD Privileged Identity Management (PIM)</strong> for just-in-time access.</li>
          <li>🔹 Prevents overprivileged Service Principals and users.</li>
        </ul>
        <p><strong>In Practice:</strong> I assign contributor access at resource group level only where required, create custom roles for pipelines, and review permissions monthly using Access Reviews.</p>
      </div>`
      },
      {
        question: "What is the difference between public and private IPs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Public IP vs Private IP — Azure Networking</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Public IP</th><th>Private IP</th></tr>
          <tr><td>Scope</td><td>Global — accessible from the Internet</td><td>Local — only within VNets or on-prem</td></tr>
          <tr><td>Usage</td><td>Used for internet-facing resources</td><td>Used for internal communication</td></tr>
          <tr><td>Example</td><td>Load Balancer frontend, Bastion, Application Gateway</td><td>VMs, Databases, Private Endpoints</td></tr>
          <tr><td>Security</td><td>Needs NSG/firewall restrictions</td><td>Inherently more secure (non-routable over internet)</td></tr>
        </table>
        <p><strong>In Practice:</strong> I assign public IPs only via front-end load balancers and keep all backend VMs and databases strictly on private IPs for zero external exposure.</p>
      </div>`
      },
      {
        question: "What is a Service Endpoint and Private Link?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Service Endpoint vs Private Link</strong></h3>
        <p>
          Both secure access to Azure PaaS services, but the isolation level differs:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Service Endpoint:</strong> Extends your VNet’s identity to Azure services, ensuring traffic stays within Microsoft backbone, but service still uses a public IP.</li>
          <li>🔹 <strong>Private Link (Private Endpoint):</strong> Maps the PaaS resource directly to a private IP within your VNet — full data isolation with no public internet access.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Private Links for SQL, Key Vault, and Storage Accounts in production; Service Endpoints for low-risk services like Event Hub or Service Bus in dev/test.</p>
      </div>`
      },
      {
        question: "What is Bastion Host and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Azure Bastion Host — Secure VM Access</strong></h3>
        <p>
          <strong>Bastion Host</strong> is a managed service that allows secure RDP/SSH access to Azure VMs directly through the Azure portal, without requiring public IPs.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔒 Eliminates inbound port exposure (22/3389).</li>
          <li>🌐 Connections occur over HTTPS (port 443) through Azure portal.</li>
          <li>🧩 Deployed in dedicated <code>AzureBastionSubnet</code> within the VNet.</li>
          <li>⚙️ Integrates with RBAC and NSG for access control.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy Bastion in the hub VNet of a hub-spoke architecture — it gives secure remote access to private VMs in spoke VNets via peering, without exposing any public IPs.</p>
      </div>`
      },
      {
        question: "What is Azure Function?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Azure Function — Event-driven Serverless Compute</strong></h3>
        <p>
          <strong>Azure Functions</strong> allow you to run small pieces of code ("functions") in response to events without provisioning or managing servers.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Triggers: HTTP requests, Timer schedules, Blob/Queue events, or Service Bus messages.</li>
          <li>🔹 Auto-scales based on event volume.</li>
          <li>🔹 Supports multiple languages (C#, Python, PowerShell, Node.js).</li>
          <li>🔹 Integrates seamlessly with Azure services like Key Vault, Event Grid, and Logic Apps.</li>
        </ul>
        <p><strong>Use Cases:</strong> Automation, scheduled cleanup jobs, event-based notifications, and CI/CD integration.</p>
        <p><strong>In Practice:</strong> I use Azure Functions to trigger resource cleanup after deployments, rotate secrets automatically, and notify teams post-deployment via Teams webhook.</p>
      </div>`
      },
      {
        question: "How do you horizontally scale your app services?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Horizontal Scaling of Azure App Services</strong></h3>
        <p>
          Horizontal scaling (Scale-Out) in Azure App Services means adding more instances to handle increased traffic and load. It improves availability and performance without changing app configuration.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Manual Scaling:</strong> Manually increase instance count from the Azure portal or CLI.</li>
          <li>🔹 <strong>Autoscaling:</strong> Configure rules based on CPU %, memory, HTTP queue length, or custom metrics (from Application Insights).</li>
          <li>🔹 <strong>Scale-Up (Vertical):</strong> Change App Service Plan SKU (e.g., B1 → P2V3) to get more CPU/RAM.</li>
          <li>🔹 <strong>Integration:</strong> Use App Service Environments (ASE) for enterprise-grade isolation and scaling.</li>
        </ul>
        <h4>💡 Example Autoscale Rule:</h4>
        <pre><code>If CPU > 70% for 10 minutes → Add 1 instance
If CPU < 40% for 15 minutes → Remove 1 instance</code></pre>
        <p><strong>In Practice:</strong> I configure autoscale profiles for working hours (higher limits) and off-hours (lower instance count) to optimize cost and performance using Azure Monitor metrics.</p>
      </div>`
      },
      {
        question: "What are the different replication types in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Azure Storage Replication Types</strong></h3>
        <p>
          Azure provides multiple replication options for durability and high availability of storage data. Each option offers different fault tolerance levels:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>LRS (Locally Redundant Storage):</strong> 3 copies of data within a single datacenter.</li>
          <li>🔹 <strong>ZRS (Zone-Redundant Storage):</strong> Data replicated across 3 availability zones in a region.</li>
          <li>🔹 <strong>GRS (Geo-Redundant Storage):</strong> Copies data to a paired region (6 total copies).</li>
          <li>🔹 <strong>RA-GRS (Read-Access Geo-Redundant Storage):</strong> Same as GRS but with read access from secondary region.</li>
          <li>🔹 <strong>GZRS / RA-GZRS:</strong> Zone-redundant + geo-redundant combo for mission-critical workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <strong>ZRS</strong> for AKS logs/state and <strong>GZRS</strong> for production backups ensuring zero data loss even during regional failures.</p>
      </div>`
      },
      {
        question: "What is Azure Key Vault and how do you secure secrets?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Azure Key Vault — Secrets Management</strong></h3>
        <p>
          <strong>Azure Key Vault (AKV)</strong> securely stores and manages secrets, encryption keys, and certificates for applications and pipelines.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧩 <strong>Secrets:</strong> API keys, passwords, connection strings.</li>
          <li>🔑 <strong>Keys:</strong> Encryption/decryption keys for apps and databases.</li>
          <li>📜 <strong>Certificates:</strong> SSL/TLS management with auto-renewal.</li>
        </ul>
        <h4>🛡️ <strong>Securing Secrets:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>✅ Enable <strong>Soft Delete</strong> and <strong>Purge Protection</strong> for accidental deletion prevention.</li>
          <li>🔐 Access control via <strong>RBAC</strong> or <strong>Access Policies</strong>.</li>
          <li>🔗 Integrate with <strong>Managed Identity</strong> — no need to expose credentials.</li>
          <li>🧠 Audit all access using <strong>Azure Monitor Logs</strong> and <strong>Diagnostic Settings</strong>.</li>
        </ul>
        <pre><code># Example: Get a secret securely
az keyvault secret show --vault-name myVault --name sqlPassword</code></pre>
        <p><strong>In Practice:</strong> I integrate AKV with DevOps pipelines and AKS using Managed Identity — ensuring no plaintext secrets are stored in code or variables.</p>
      </div>`
      },
      {
        question: "What is Azure Storage Account and how to secure it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Azure Storage Account — Secure Cloud Storage</strong></h3>
        <p>
          An <strong>Azure Storage Account</strong> provides durable, scalable storage for data objects like Blobs, Files, Queues, and Tables.
        </p>
        <h4>🧱 <strong>Storage Types:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>📦 Blob Storage – for unstructured data (images, logs, backups).</li>
          <li>📁 File Shares – for SMB/NFS file storage.</li>
          <li>📬 Queue Storage – for async messaging between components.</li>
          <li>📊 Table Storage – for NoSQL structured data.</li>
        </ul>
        <h4>🛡️ <strong>Securing a Storage Account:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>🔒 Disable public network access — use <strong>Private Endpoints</strong>.</li>
          <li>🔑 Enforce <strong>Azure AD-based authentication</strong> (avoid SAS tokens where possible).</li>
          <li>🌍 Restrict traffic via <strong>VNet service endpoints</strong> or <strong>firewall rules</strong>.</li>
          <li>🧩 Enable <strong>Soft Delete</strong> for blob recovery.</li>
          <li>🧠 Use <strong>Encryption at Rest (AES-256)</strong> and customer-managed keys from Key Vault.</li>
          <li>📜 Enable <strong>Diagnostic Logging</strong> and access logs for audit.</li>
        </ul>
        <pre><code># Example: Disable public access
az storage account update --name mystorage --resource-group rg-prod --public-network-access Disabled</code></pre>
        <p><strong>In Practice:</strong> I always integrate storage accounts with private endpoints and Key Vault CMK encryption — ensuring full compliance with security and governance standards.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "19. Azure Services & Serverless",
    questions: [
      {
        question: "Have you used Azure Function App? What is its role?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Azure Function App — Event-driven Serverless Compute</strong></h3>
        <p>
          Yes — I’ve used <strong>Azure Function Apps</strong> for automation and event-based tasks in CI/CD and infrastructure automation.  
          Function Apps run code without managing infrastructure — scaling automatically based on event triggers.
        </p>
        <h4>🧩 <strong>Core Triggers:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>📬 HTTP Trigger — for webhooks, REST APIs.</li>
          <li>📦 Blob Trigger — runs when a file is uploaded to Azure Blob.</li>
          <li>🕒 Timer Trigger — scheduled jobs (like CRON).</li>
          <li>📨 Service Bus / Event Hub Trigger — for message processing.</li>
        </ul>
        <h4>⚙️ <strong>Common Use Cases:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Automating resource cleanup or tagging.</li>
          <li>🔹 Running small micro-jobs post-deployment.</li>
          <li>🔹 Integrating with pipelines or alerting via webhooks.</li>
          <li>🔹 Auto-scaling or triggering workflows (via Logic Apps).</li>
        </ul>
        <p><strong>In Practice:</strong> I created a Function App to rotate Key Vault secrets automatically and send notifications to Teams via a webhook whenever a new deployment completed.</p>
      </div>`
      },
      {
        question: "Which Azure resource is used to distribute static and dynamic content?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Azure CDN (Content Delivery Network) — Global Content Distribution</strong></h3>
        <p>
          <strong>Azure CDN</strong> is used to distribute static (HTML, CSS, JS, images) and dynamic content globally with low latency and high performance by caching content at edge locations.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📦 Works with Storage, Web Apps, and Front Door.</li>
          <li>🚀 Reduces latency by serving requests from nearest edge node.</li>
          <li>🧩 Supports dynamic site acceleration (DSA) for APIs.</li>
          <li>🔒 Integrated with WAF for content-level protection.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate CDN with App Service for static content caching and route traffic through Azure Front Door for global load balancing with SSL offloading.</p>
      </div>`
      },
      {
        question: "Have you used Azure App Service?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>Azure App Service — Managed PaaS for Web Applications</strong></h3>
        <p>
          Yes — I use <strong>Azure App Service</strong> to host APIs, web apps, and backend microservices in a fully managed environment.  
          It abstracts the OS and runtime management while providing continuous deployment and scaling.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Supports multiple stacks — .NET, Node.js, Python, Java, PHP.</li>
          <li>🔄 Integrated CI/CD with Azure DevOps and GitHub.</li>
          <li>🔒 Built-in SSL, authentication (AAD, OAuth), and VNet integration.</li>
          <li>📈 Scalable — vertical and horizontal scaling supported.</li>
        </ul>
        <p><strong>In Practice:</strong> I deployed backend APIs via App Service integrated with ACR for image-based deployment, and configured staging slots for zero-downtime release promotion.</p>
      </div>`
      },
      {
        question: "What is difference between App Service and VM Service?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>App Service vs Virtual Machine — Comparison</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>App Service</th><th>Virtual Machine (VM)</th></tr>
          <tr><td>Type</td><td>PaaS (Managed platform)</td><td>IaaS (Full OS control)</td></tr>
          <tr><td>Management</td><td>Azure handles OS, scaling, patching</td><td>User responsible for configuration, updates, patching</td></tr>
          <tr><td>Scaling</td><td>Auto-scale (horizontal/vertical)</td><td>Manual or script-based scaling</td></tr>
          <tr><td>Use Case</td><td>Web apps, APIs, microservices</td><td>Custom software, databases, legacy apps</td></tr>
          <tr><td>Cost</td><td>Pay per plan tier</td><td>Pay per VM resource allocation</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use App Service for stateless web workloads and VMs for backend or middleware requiring OS-level configurations and persistent state.</p>
      </div>`
      },
      {
        question: "What is Azure Front Door?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Azure Front Door — Global Layer 7 Load Balancer</strong></h3>
        <p>
          <strong>Azure Front Door</strong> provides global HTTP/HTTPS load balancing, intelligent routing, caching, and security features for web applications.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Uses Microsoft’s global edge network for high availability and low latency.</li>
          <li>🔒 Offers <strong>Web Application Firewall (WAF)</strong> and SSL offloading.</li>
          <li>📍 Routes based on latency, geo-location, or URL path.</li>
          <li>⚙️ Supports custom domains and CDN-style acceleration.</li>
        </ul>
        <h4>💡 Example Use Case:</h4>
        <ul style="margin-left:1.2rem;">
          <li>Front Door routes <code>api.app.com</code> → AKS service in East US.</li>
          <li>Routes <code>ui.app.com</code> → App Service in West Europe.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Front Door for global failover — routing traffic to backup region automatically if primary backend fails, ensuring 99.99% uptime.</p>
      </div>`
      },
      {
        question: "What is Azure Dashboard?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Azure Dashboard — Unified Visibility</strong></h3>
        <p>
          <strong>Azure Dashboard</strong> is a customizable, interactive surface in the Azure Portal to monitor and manage your environment visually.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📈 Combine tiles from Monitor, Application Insights, and Metrics.</li>
          <li>🔍 Useful for viewing CPU usage, cost analysis, and alerts in one place.</li>
          <li>🧩 Share dashboards with team members via RBAC access.</li>
          <li>⚙️ Supports JSON export/import for IaC versioning.</li>
        </ul>
        <pre><code># Export dashboard JSON for automation
az portal dashboard show --name ProdDashboard</code></pre>
        <p><strong>In Practice:</strong> I create dashboards combining AKS node metrics, App Service performance, and budget utilization — all in a single operational view for DevOps and management teams.</p>
      </div>`
      },
      {
        question: "How do you configure auto-scaling for AKS using Azure native tools?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>AKS Auto-Scaling — Native Azure Tools</strong></h3>
        <p>
          Azure Kubernetes Service (AKS) supports auto-scaling at both <strong>pod level</strong> and <strong>node level</strong> using native Azure and Kubernetes mechanisms.
        </p>
        <h4>🧩 <strong>Pod Level — Horizontal Pod Autoscaler (HPA):</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Scales pods based on CPU/memory utilization or custom metrics.</li>
          <li>Defined in YAML (minReplicas, maxReplicas, targetCPUUtilization).</li>
        </ul>
        <pre><code>kubectl autoscale deployment webapp --cpu-percent=70 --min=2 --max=10</code></pre>
        <h4>🧱 <strong>Node Level — Cluster Autoscaler:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Automatically adjusts node count in a node pool based on pending pods.</li>
          <li>Enabled via Azure CLI or ARM during cluster creation.</li>
        </ul>
        <pre><code>az aks update --resource-group rg-aks --name prod-aks --enable-cluster-autoscaler --min-count 3 --max-count 10</code></pre>
        <p><strong>In Practice:</strong> I use both HPA and Cluster Autoscaler together — HPA scales pods dynamically, and Cluster Autoscaler ensures adequate nodes for workload demand.  
        Monitoring and scaling thresholds are tracked using Azure Monitor with alert-based actions for proactive scaling.</p>
      </div>`
      }
    ]
  }
  ,

];

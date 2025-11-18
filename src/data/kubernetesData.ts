export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}


export const kubernetesSections = [
  {
    title: "1. Kubernetes Fundamentals",
    questions: [
      {
        question: "What is Kubernetes and why is it used in production?",
        answerHtml: `<div class='answer-rich'> 
      <h3>☸️ <strong>What & Why of Kubernetes</strong></h3> 
      <p><strong>Kubernetes (K8s)</strong> is a powerful <strong>container orchestration platform</strong> that automates deployment, scaling, and management of containerized applications.</p> 
      <p><strong>In production:</strong> it provides auto-scaling, self-healing, zero-downtime deployments, and efficient resource utilization.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Automates container scheduling across cluster nodes.</li>
        <li>Restarts failed containers automatically (self-healing).</li>
        <li>Load balances incoming traffic via Services & Ingress.</li>
        <li>Supports rolling updates and rollbacks.</li>
        <li>Integrates easily with CI/CD, monitoring, and service mesh.</li>
      </ul>
      <p><strong>Real-world use:</strong> In AKS, I deploy microservices via YAML manifests, expose via LoadBalancer services, and scale pods automatically based on CPU/memory metrics.</p>
      </div>`
      },
      {
        question: "What problem does Kubernetes solve compared to VMs or Docker Compose?",
        answerHtml: `<div class='answer-rich'> 
      <h3>⚙️ <strong>Problem Kubernetes Solves</strong></h3> 
      <p>Before Kubernetes, managing multiple Docker containers manually or via Docker Compose was painful — especially in production.</p>
      <p><strong>Problems solved:</strong></p>
      <ul style='margin-left:1.2rem;'>
        <li><strong>Scalability:</strong> Kubernetes auto-scales pods based on load (unlike static Compose setup).</li>
        <li><strong>High Availability:</strong> Automatically reschedules failed pods on healthy nodes.</li>
        <li><strong>Zero-Downtime Deployments:</strong> Handles rolling updates natively.</li>
        <li><strong>Resource Efficiency:</strong> Schedules containers dynamically to best use CPU/RAM across nodes.</li>
        <li><strong>Service Discovery:</strong> DNS-based internal service communication — Compose lacks this level of automation.</li>
      </ul>
      <p><strong>Example:</strong> In AKS, I’ve replaced multiple VM-hosted apps with a single Kubernetes cluster — managing scaling, updates, and health checks centrally.</p>
      </div>`
      },
      {
        question: "What are Pods, Deployments, and ReplicaSets?",
        answerHtml: `<div class='answer-rich'> 
      <h3>🧩 <strong>Pods, Deployments & ReplicaSets</strong></h3> 
      <p><strong>Pod:</strong> Smallest deployable unit in Kubernetes — usually runs one container (or tightly coupled containers).</p>
      <p><strong>ReplicaSet:</strong> Ensures a specific number of Pod replicas are running at all times.</p>
      <p><strong>Deployment:</strong> Manages ReplicaSets and defines desired application state — handles rollout, rollback, and versioning.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Pod = Single running instance.</li>
        <li>ReplicaSet = Maintains desired pod count.</li>
        <li>Deployment = Declarative management layer over ReplicaSet.</li>
      </ul>
      <pre><code>kubectl get pods
kubectl get deployments
kubectl get rs
      </code></pre>
      <p><strong>In my workflow:</strong> I define Deployments in YAML with rolling update strategy, ensuring zero downtime during releases.</p>
      </div>`
      },
      {
        question: "Explain the difference between Deployment and StatefulSet.",
        answerHtml: `<div class='answer-rich'> 
      <h3>🏗️ <strong>Deployment vs StatefulSet</strong></h3> 
      <p><strong>Deployment:</strong> Used for stateless workloads — all pods are identical and can be replaced freely.</p>
      <p><strong>StatefulSet:</strong> Used for stateful workloads — pods have stable identities, network names, and persistent storage.</p>
      <table style='width:100%; border-collapse:collapse; margin:1rem 0;'>
        <tr><th style='text-align:left;'>Feature</th><th style='text-align:left;'>Deployment</th><th style='text-align:left;'>StatefulSet</th></tr>
        <tr><td>Use Case</td><td>Web apps, APIs</td><td>Databases, Kafka, Redis</td></tr>
        <tr><td>Pod Identity</td><td>Random</td><td>Fixed (pod-0, pod-1...)</td></tr>
        <tr><td>Storage</td><td>Ephemeral</td><td>PersistentVolumeClaim per pod</td></tr>
      </table>
      <p><strong>Example:</strong> I use Deployments for stateless microservices and StatefulSets for MongoDB or Redis with persistent storage in AKS.</p>
      </div>`
      },
      {
        question: "What is a DaemonSet and why is it used?",
        answerHtml: `<div class='answer-rich'> 
      <h3>🧠 <strong>DaemonSet — Cluster-wide Background Pods</strong></h3> 
      <p><strong>DaemonSet</strong> ensures that a copy of a Pod runs on <strong>every node</strong> in the cluster (or selected nodes).</p>
      <p><strong>Use cases:</strong></p>
      <ul style='margin-left:1.2rem;'>
        <li>Running logging agents (Fluentd, Filebeat).</li>
        <li>Running monitoring agents (Node Exporter, Datadog, Prometheus node-exporter).</li>
        <li>Custom network plugins or security agents on each node.</li>
      </ul>
      <pre><code>kubectl get daemonsets -n kube-system</code></pre>
      <p><strong>Real-world:</strong> I deploy Prometheus Node Exporter as a DaemonSet to collect node-level metrics from every AKS node.</p>
      </div>`
      },
      {
        question: "What are Namespaces in Kubernetes and why are they important?",
        answerHtml: `<div class='answer-rich'> 
      <h3>📂 <strong>Namespaces — Logical Isolation</strong></h3> 
      <p><strong>Namespace</strong> logically separates resources within a cluster.</p>
      <p><strong>Why important:</strong></p>
      <ul style='margin-left:1.2rem;'>
        <li>Segregates environments (dev, qa, prod) in the same cluster.</li>
        <li>Applies role-based access control (RBAC) per team or project.</li>
        <li>Enables resource quotas and network policies for isolation.</li>
      </ul>
      <pre><code>kubectl create namespace dev
kubectl get all -n prod
      </code></pre>
      <p><strong>In my setup:</strong> Each project team gets its own namespace in AKS with defined resource limits and RBAC policies.</p>
      </div>`
      },
      {
        question: "What are Labels and Selectors? How do they relate to Pods and Services?",
        answerHtml: `<div class='answer-rich'> 
      <h3>🏷️ <strong>Labels & Selectors — The Glue of Kubernetes</strong></h3> 
      <p><strong>Labels:</strong> Key-value pairs attached to Kubernetes objects (like pods, nodes, services) to organize and select them.</p>
      <p><strong>Selectors:</strong> Used by Services, ReplicaSets, or Deployments to filter and manage objects with specific labels.</p>
      <p><strong>Example:</strong></p>
      <pre><code>labels:
  app: frontend
  env: prod

selector:
  matchLabels:
    app: frontend
      </code></pre>
      <p><strong>In action:</strong> My frontend service uses selector <code>app=frontend</code> to automatically route traffic to all matching pods. This decouples pod naming from service configuration.</p>
      </div>`
      },
      {
        question: "What are your day-to-day activities in Azure Kubernetes Service (AKS)?",
        answerHtml: `<div class='answer-rich'> 
      <h3>🧑‍💻 <strong>Day-to-Day in AKS</strong></h3> 
      <p>I manage and maintain multiple AKS clusters for microservices-based applications. Typical daily tasks include:</p>
      <ul style='margin-left:1.2rem;'>
        <li>Monitoring cluster health via Azure Monitor & Grafana dashboards.</li>
        <li>Deploying apps via YAML manifests and Azure DevOps CI/CD pipelines.</li>
        <li>Managing secrets and configs using <strong>Azure Key Vault</strong> & Kubernetes Secrets.</li>
        <li>Scaling deployments using <strong>Horizontal Pod Autoscaler (HPA)</strong>.</li>
        <li>Rolling updates and canary deployments via Azure DevOps pipelines.</li>
        <li>Debugging pod logs using <code>kubectl logs</code> and checking events.</li>
        <li>Integrating Prometheus + Grafana for metrics and alerting.</li>
      </ul>
      <p><strong>Hands-on example:</strong> Recently implemented a pipeline to deploy backend API to AKS with automatic scaling and health probes, reducing downtime during peak traffic.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Kubernetes – Cluster, Pods, Deployments & Scaling",
    questions: [
      {
        question: "What is Kubernetes?",
        answerHtml: `<div class='answer-rich'>
          <h3>☸️ < strong > Overview < /strong></h3 >
      <p><strong>Kubernetes(K8s) < /strong> is an open-source container orchestration platform developed by Google. It automates <strong>deployment, scaling, load balancing, and self-healing</strong > of containerized applications.</p>
      < p > <strong>In Production: </strong> It ensures zero downtime, high availability, and smooth CI/CD rollouts.I use Kubernetes primarily for microservice orchestration in Azure AKS.</p>
        < ul style='margin-left:1.2rem;' >
        <li>Automatic scaling and rolling updates.</li>
          < li > Load balancing through Services and Ingress.</li>
            < li > Efficient resource scheduling across nodes.</li>
              < li > Self - healing(failed pods auto - recreated).</li>
              </ul>
              </div>`
      },
      {
        question: "Explain Kubernetes architecture.",
        answerHtml: `<div class='answer-rich'>
      <h3>🏗️ < strong > Kubernetes Architecture < /strong></h3 >
  <p>Kubernetes follows a < strong > Master–Worker(Control Plane–Node) < /strong> architecture.</p >
  <ul style='margin-left:1.2rem;' >
  <li><strong>Control Plane: </strong> Manages cluster state, scheduling, API, and controller logic.</li >
  <li><strong>Worker Nodes: </strong> Run the actual application pods.</li >
  </ul>
  < p > <strong>Main components: </strong></p >
  <ul style='margin-left:1.2rem;' >
  <li><strong>API Server: </strong> Central communication hub between users and cluster.</li >
  <li><strong>etcd: </strong> Key-value store maintaining cluster state.</li >
  <li><strong>Controller Manager: </strong> Ensures desired state (e.g., ReplicaSet count).</li >
  <li><strong>Scheduler: </strong> Assigns pods to nodes based on resource availability.</li >
  <li><strong>Kubelet: </strong> Node agent ensuring pod containers run correctly.</li >
  <li><strong>Kube - proxy: </strong> Manages network routing and load balancing on nodes.</li >
  </ul>
  < p > <strong>In AKS: </strong> Control plane is managed by Azure; we manage worker nodes only.</p >
  </div>`
      },
      {
        question: "What are master and worker nodes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧠 <strong>Master & Worker Nodes < /strong></h3 >
        <p><strong>Master(Control Plane): </strong> Responsible for cluster decisions — scheduling, health checks, desired state management.</p >
          <p><strong>Worker Node: </strong> Hosts Pods. Each node runs Kubelet, container runtime (like containerd), and kube-proxy.</p >
            <p><strong>In AKS: </strong> Control plane is abstracted — we interact via <code>kubectl</code > or Azure Portal; worker nodes scale automatically via Node Pools.</p>
              </div>`
      },
      {
        question: "What is a Pod in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>📦 <strong>Pod Basics < /strong></h3 >
        <p>A < strong > Pod < /strong> is the smallest deployable unit in Kubernetes. It encapsulates one or more tightly coupled containers that share the same network and storage.</p >
        <ul style='margin-left:1.2rem;' >
          <li>Each Pod gets a unique IP within the cluster.</li>
            < li > Containers inside a Pod communicate via localhost.</li>
              < li > Pods are ephemeral — recreated if they crash or during updates.</li>
                </ul>
                < p > <strong>In AKS: </strong> I usually deploy one container per Pod to isolate services and simplify autoscaling.</p >
                  </div>`
      },
      {
        question: "How many containers can you run in a Pod?",
        answerHtml: `<div class='answer-rich'>
      < p > You can run multiple containers in a Pod, but the < strong > best practice < /strong> is to keep <strong>one container per Pod</strong > unless containers are tightly coupled(like sidecar pattern).</p>
        < p > <strong>Example: </strong> A main app container and a sidecar container (like a logging or metrics agent).</p >
          </div>`
      },
      {
        question: "What are ReplicaSets and Deployments?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧩 <strong>ReplicaSets & Deployments < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li><strong>ReplicaSet: </strong> Ensures a specified number of Pod replicas are running at all times.</li >
            <li><strong>Deployment: </strong> Higher-level object that manages ReplicaSets, enabling rolling updates and rollbacks.</li >
              </ul>
              < p > <strong>Example: </strong> I define Deployments in YAML — set replicas, image version, and update strategy (rolling update) to ensure smooth zero-downtime releases.</p >
                </div>`
      },
      {
        question: "What is the difference between Stateful and Stateless applications?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧮 <strong>Stateful vs Stateless < /strong></h3 >
        <p><strong>Stateless apps: </strong> Don’t maintain session/data locally(e.g., APIs, web frontends).Any replica can handle a request.</p>
          < p > <strong>Stateful apps: </strong> Maintain state/data consistency(e.g., Databases, Kafka).Each pod has its own identity and storage.</p>
            < p > <strong>In Kubernetes: </strong> Stateless apps → Deployments; Stateful apps → StatefulSets with Persistent Volumes.</p >
              </div>`
      },
      {
        question: "What is a StatefulSet in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>💾 <strong>StatefulSet — For Stateful Workloads < /strong></h3 >
        <p>Manages deployment of stateful applications that require < strong > stable network identity and persistent storage < /strong>.</p >
          <ul style='margin-left:1.2rem;' >
            <li>Pods have unique names(e.g., db - 0, db - 1).</li>
              < li > Each Pod has its own < strong > Persistent Volume Claim(PVC) < /strong>.</li >
                <li>Used for databases like MySQL, MongoDB, Cassandra.</li>
                  </ul>
                  < p > <strong>Example: </strong> I deployed MongoDB replica sets using StatefulSet with Azure Disk as persistent volume.</p >
                    </div>`
      },
      {
        question: "What is a DaemonSet?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧠 <strong>DaemonSet < /strong></h3 >
        <p>Ensures one Pod runs on < strong > every node < /strong> in the cluster (or selected nodes).</p >
          <p><strong>Use cases: </strong></p >
            <ul style='margin-left:1.2rem;' >
              <li>Node monitoring(Node Exporter).</li>
                < li > Logging(Fluent Bit / Filebeat).</li>
                < li > Security scanning or network plugins.</li>
                  </ul>
                  < p > <strong>In AKS: </strong> I run Fluent Bit as a DaemonSet to collect logs from all worker nodes.</p >
                    </div>`
      },
      {
        question: "What is a Namespace in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>📂 <strong>Namespace < /strong></h3 >
        <p>Provides logical isolation between resources in the same cluster.</p>
          < ul style = 'margin-left:1.2rem;' >
            <li>Separates environments like dev, qa, prod.</li>
              < li > Allows applying resource quotas and network policies.</li>
                < li > Supports RBAC for team - level access control.</li>
                  </ul>
                  < p > <strong>Example: </strong> I create separate namespaces per environment and assign roles using ClusterRoleBinding.</p >
                    </div>`
      },
      {
        question: "What is ClusterRole and ClusterRoleBinding?",
        answerHtml: `<div class='answer-rich'>
      <h3>🔐 <strong>ClusterRole & ClusterRoleBinding < /strong></h3 >
        <p><strong>ClusterRole: </strong> Defines permissions (verbs like get, list, create) at the cluster level.</p >
          <p><strong>ClusterRoleBinding: </strong> Binds that role to a user, group, or service account.</p >
            <pre><code>kubectl create clusterrolebinding dev - admin \\
  --clusterrole=cluster - admin \\
  --user=devops @company.com</code></pre >
    <p><strong>In AKS: </strong> I use ClusterRoles for admin-level access across namespaces and normal Roles for namespace-specific tasks.</p >
      </div>`
      },
      {
        question: "What are ConfigMaps and Secrets?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧾 <strong>ConfigMaps & Secrets < /strong></h3 >
        <p><strong>ConfigMaps: </strong> Store non-confidential configuration data (key-value pairs).</p >
          <p><strong>Secrets: </strong> Store sensitive data (passwords, tokens, certificates) — base64 encoded.</p >
            <p><strong>In Practice: </strong> I mount ConfigMaps as environment variables or volumes for app configs, and Secrets for credentials.</p >
              </div>`
      },
      {
        question: "How do you manage secrets in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🔒 <strong>Managing Secrets Securely < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li>Create secrets using < code > kubectl create secret generic < /code>.</li >
            <li>Use < strong > Azure Key Vault < /strong> integration with AKS for secure secret injection.</li >
              <li>Mount secrets as environment variables or files in Pods.</li>
                < li > Enable < strong > Encryption at Rest < /strong> for secret data.</li >
                  </ul>
                  < p > <strong>Example: </strong> I use Azure Key Vault CSI driver to sync secrets directly into Pods — no plain YAML exposure.</p >
                    </div>`
      },
      {
        question: "What is a Headless Service and when is it used?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧭 <strong>Headless Service — Direct Pod Access < /strong></h3 >
        <p>Headless Service(ClusterIP = None) allows clients to directly access individual Pods instead of load - balancing traffic.</p>
          < p > <strong>Used when: </strong></p >
            <ul style='margin-left:1.2rem;' >
              <li>Pods need to communicate directly(like StatefulSets).</li>
                < li > Applications like databases(MongoDB, Cassandra) need stable DNS names for each Pod.</li>
                  </ul>
                  < p > <strong>Example: </strong> I used headless service for MongoDB StatefulSet, allowing replica pods to discover each other using DNS entries like <code>mongo-0.db-svc.default.svc.cluster.local</code >.</p>
                    </div>`
      },
      {
        question: "What is the difference between ClusterIP, NodePort, and LoadBalancer services?",
        answerHtml: `<div class='answer-rich'>
      <h3>🌐 <strong>Service Types Comparison < /strong></h3 >
        <table style='width:100%; border-collapse:collapse; margin:1rem 0;' >
          <tr><th>Type < /th><th>Scope</th > <th>Use Case < /th></tr >
            <tr><td><strong>ClusterIP < /strong></td > <td>Accessible only within cluster < /td><td>Internal microservice communication</td > </tr>
              < tr > <td><strong>NodePort < /strong></td > <td>Exposes service on each node IP: Port < /td><td>For local or limited external testing</td > </tr>
                < tr > <td><strong>LoadBalancer < /strong></td > <td>Creates external load balancer(Azure LB) < /td><td>Expose apps publicly with stable IP</td > </tr>
                  </table>
                  < p > <strong>In AKS: </strong> I use LoadBalancer for external APIs, ClusterIP for backend services, and NodePort only for debugging.</p >
                    </div>`
      },
      {
        question: "What is Ingress Controller and Ingress resource?",
        answerHtml: `<div class='answer-rich'>
      <h3>🚦 <strong>Ingress — Smart HTTP Routing < /strong></h3 >
        <p><strong>Ingress Controller < /strong> manages inbound HTTP/HTTPS traffic and routes it to services based on rules defined in <strong>Ingress resources < /strong>.</p >
          <p><strong>Example: </strong></p >
            <pre><code>host: api.company.com
              / app1 -> service app1
                / app2 -> service app2 < /code></pre >
                  <p><strong>Popular Ingress Controllers: </strong> NGINX, Azure Application Gateway (AGIC), Traefik.</p >
                    <p><strong>In AKS: </strong> I use NGINX Ingress Controller for path-based routing and SSL termination. It’s integrated with Azure DNS and certificates via cert-manager.</p >
                      </div>`
      },
      {
        question: "How do you debug a Pod not running or in pending state?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧩 <strong>Debugging Pods < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li>Check pod events and describe details: </li>
            < pre > <code>kubectl describe pod < pod - name > </code></pre >
              <li>Check logs for errors: </li>
                < pre > <code>kubectl logs < pod - name > </code></pre >
                  <li>Check node status and resources: </li>
                    < pre > <code>kubectl get nodes - o wide < /code></pre >
                      <li>Use ephemeral debug container: </li>
                        < pre > <code>kubectl debug pod / <pod-name > -it--image = busybox < /code></pre >
                          </ul>
                          < p > <strong>In real cases: </strong> I mostly found pending pods due to insufficient CPU/memory or node taints.For CrashLoopBackOff, logs usually show wrong config / env issue.</p>
                            </div>`
      },
      {
        question: "What are possible reasons for Pod stuck in Pending state?",
        answerHtml: `<div class='answer-rich'>
      < ul style = 'margin-left:1.2rem;' >
        <li>Insufficient cluster resources(CPU / RAM).</li>
          < li > Node selector or affinity mismatch.</li>
            < li > PersistentVolumeClaim not bound.</li>
              < li > Taints on nodes preventing scheduling.</li>
                < li > Network or image pull issues.</li>
                  </ul>
                  < p > <strong>Real Example: </strong> In AKS, my pod was pending due to missing node pool label that Deployment selector required — fixed by adding correct labels.</p >
                    </div>`
      },
      {
        question: "How do you check Pod logs and events?",
        answerHtml: `<div class='answer-rich'>
      < pre > <code>kubectl logs < pod - name >
        kubectl logs < pod - name > -c < container - name >
          kubectl describe pod < pod - name > </code></pre >
            <p><strong>In practice: </strong> I also integrate <strong>Azure Monitor + Log Analytics</strong > with AKS, so I can query logs using KQL or view real-time logs from Grafana.</p>
              </div>`
      },
      {
        question: "What is Horizontal Pod Autoscaler (HPA)?",
        answerHtml: `<div class='answer-rich'>
      <h3>⚙️ <strong>Horizontal Pod Autoscaler(HPA) < /strong></h3 >
        <p>Automatically scales the number of pods based on CPU / memory usage or custom metrics.</p>
          < pre > <code>kubectl autoscale deployment webapp--min = 2 --max = 5 --cpu - percent=70 < /code></pre >
            <p><strong>In AKS: </strong> I use HPA with Azure Monitor metrics to handle traffic spikes dynamically — for example, scaling API pods from 3 → 10 during load testing.</p >
              </div>`
      },
      {
        question: "How does Kubernetes perform service discovery?",
        answerHtml: `<div class='answer-rich'>
      <h3>🔍 <strong>Service Discovery in Kubernetes < /strong></h3 >
        <p>Kubernetes uses < strong > CoreDNS < /strong> for service discovery. Every service gets a DNS entry inside the cluster.</p >
          <p><strong>Example: </strong> <code>backend.default.svc.cluster.local</code > resolves to backend service’s ClusterIP.</p>
            < p > <strong>In AKS: </strong> I often use internal DNS for microservice-to-microservice communication without hardcoding IPs.</p >
              </div>`
      },
      {
        question: "How does auto-scaling work in AKS?",
        answerHtml: `<div class='answer-rich'>
      <h3>📈 <strong>AKS Auto - Scaling < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li><strong>Pod - level scaling: </strong> via HPA.</li >
            <li><strong>Node - level scaling: </strong> via Cluster Autoscaler — adds/removes worker nodes based on workload demand.</li>
              </ul>
              < p > <strong>Example: </strong> In production, I configured AKS autoscaler to scale node pool between 3–10 nodes automatically when HPA increases replicas.</p >
                </div>`
      },
      {
        question: "How to configure AKS in Azure Portal?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧑‍💻 <strong>Configuring AKS in Portal < /strong></h3 >
        <ol style='margin-left:1.2rem;' >
          <li>Go to < strong > Azure Portal → Kubernetes Services → + Create.< /strong></li >
            <li>Specify resource group, cluster name, and region.</li>
              < li > Choose < strong > Node Size < /strong>, node count, and enable auto-scaling.</li >
                <li>Enable monitoring with <strong>Azure Monitor + Log Analytics.< /strong></li >
                  <li>Integrate with <strong>Azure AD < /strong> for RBAC.</li >
                    </ol>
                    < p > <strong>Pro Tip: </strong> I always use separate node pools for system and user workloads — helps manage scaling efficiently.</p >
                      </div>`
      },
      {
        question: "What is Taint and Toleration?",
        answerHtml: `<div class='answer-rich'>
      <h3>🚫 <strong>Taints & Tolerations < /strong></h3 >
        <p><strong>Taints: </strong> Applied on nodes to restrict pod scheduling.</p >
          <p><strong>Tolerations: </strong> Applied on pods to allow them to be scheduled on tainted nodes.</p >
            <pre><code>kubectl taint nodes node1 key = value: NoSchedule < /code></pre >
              <p><strong>Example: </strong> I taint GPU nodes so only ML workloads with proper tolerations can schedule there.</p >
                </div>`
      },
      {
        question: "What are Liveness and Readiness probes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🩺 <strong>Probes for Health Checks < /strong></h3 >
        <p><strong>Liveness Probe: </strong> Checks if container is healthy — restarts if failed.</p >
          <p><strong>Readiness Probe: </strong> Checks if container is ready to receive traffic.</p >
            <pre><code>livenessProbe:
  httpGet:
  path: /health
  port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5 < /code></pre >
    <p><strong>In my workloads: </strong> Proper probes ensure zero-downtime rollouts — AKS waits until pods are fully ready before routing traffic.</p >
      </div>`
      },
      {
        question: "What is Helm in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧰 <strong>Helm — Kubernetes Package Manager < /strong></h3 >
        <p><strong>Helm < /strong> simplifies app deployment by packaging YAML manifests into reusable charts.</p >
        <p><strong>Benefits: </strong></p >
          <ul style='margin-left:1.2rem;' >
            <li>Version - controlled deployments.</li>
              < li > Parameterization via < code > values.yaml < /code>.</li >
                <li>Easy rollback and upgrades.</li>
                  </ul>
                  < p > <strong>Example: </strong> I deploy NGINX Ingress and Prometheus using official Helm charts with custom values files.</p >
                    </div>`
      },
      {
        question: "What are Helm charts and their types?",
        answerHtml: `<div class='answer-rich'>
      < p > <strong>Helm Chart: </strong> A collection of templates + configuration files for deploying an app.</p >
        <p><strong>Types: </strong></p >
          <ul style='margin-left:1.2rem;' >
            <li><strong>Official Charts: </strong> Maintained by community (e.g., prometheus-community).</li >
              <li><strong>Custom Charts: </strong> Built in-house for internal apps.</li >
                </ul>
                < pre > <code>helm install myapp./ mychart - f values.yaml < /code></pre >
                  </div>`
      },
      {
        question: "What is a Replica in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      < p > <strong>Replica: </strong> Refers to a running instance of a Pod. Kubernetes maintains replicas using ReplicaSets to ensure desired count.</p >
        <p><strong>Example: </strong> If replica count = 3, Kubernetes ensures 3 pods are always running even if one crashes.</p >
          </div>`
      },
      {
        question: "What is a deployment strategy (Rolling, Recreate, Blue-Green, Canary)?",
        answerHtml: `<div class='answer-rich'>
      <h3>🚀 <strong>Deployment Strategies < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li><strong>Rolling Update: </strong> Replaces pods gradually — zero downtime (default in AKS).</li >
            <li><strong>Recreate: </strong> Deletes old pods first — short downtime.</li >
              <li><strong>Blue - Green: </strong> Run two environments (blue=current, green=new), then switch traffic.</li >
                <li><strong>Canary: </strong> Release new version to a small subset first.</li >
                  </ul>
                  < p > <strong>In AKS: </strong> I often use rolling updates and canary via Azure DevOps pipeline with traffic splitting in Ingress.</p >
                    </div>`
      },
      {
        question: "What is Persistent Volume (PV) and Persistent Volume Claim (PVC)?",
        answerHtml: `<div class='answer-rich'>
      <h3>💽 <strong>Persistent Storage in Kubernetes < /strong></h3 >
        <ul style='margin-left:1.2rem;' >
          <li><strong>PV: </strong> Actual storage provisioned in cluster (e.g., Azure Disk, NFS).</li >
            <li><strong>PVC: </strong> Request by a Pod to use specific PV.</li >
              </ul>
              < p > <strong>Example: </strong> In AKS, I use PVCs to attach Azure Managed Disks for stateful applications like databases.</p >
                </div>`
      },
      {
        question: "What is a NodePort service?",
        answerHtml: `<div class='answer-rich'>
      < p > <strong>NodePort < /strong> exposes a service on a static port (30000–32767) across all nodes, allowing external access via <code>NodeIP:NodePort</code >.</p>
      < p > <strong>In practice: </strong> I use NodePort for internal debugging or temporary access, not for production traffic.</p >
        </div>`
      },
      {
        question: "How do you perform rolling update and rollback?",
        answerHtml: `<div class='answer-rich'>
      < pre > <code>kubectl rollout status deployment / webapp
kubectl rollout undo deployment / webapp < /code></pre >
    <p><strong>Rolling update: </strong> Gradually replaces old pods with new ones.</p >
      <p><strong>Rollback: </strong> Returns to previous ReplicaSet version instantly.</p >
        <p><strong>In CI / CD: </strong> I trigger rolling updates via pipeline; AKS automatically handles rollback if health probes fail.</p >
          </div>`
      },
      {
        question: "How do you monitor Kubernetes clusters?",
        answerHtml: `<div class='answer-rich'>
      <h3>📊 <strong>Monitoring Clusters < /strong></h3 >
        <p><strong>Tools used: </strong> Prometheus, Grafana, Azure Monitor, Kube-State-Metrics.</p >
          <ul style='margin-left:1.2rem;' >
            <li>Monitor CPU, memory, pod restarts, and node health.</li>
              < li > Set alerts via Prometheus or Azure Alerts.</li>
                < li > Use Grafana dashboards for visual trends.</li>
                  </ul>
                  < p > <strong>In AKS: </strong> Integrated Azure Monitor and custom Grafana dashboards per namespace and service.</p >
                    </div>`
      },
      {
        question: "How do you integrate Prometheus and Grafana for monitoring?",
        answerHtml: `<div class='answer-rich'>
      <h3>📈 <strong>Prometheus + Grafana Integration < /strong></h3 >
        <ol style='margin-left:1.2rem;' >
          <li>Deploy Prometheus via Helm chart.</li>
            < li > Expose metrics endpoints using ServiceMonitors.</li>
              < li > Deploy Grafana and configure Prometheus datasource.</li>
                < li > Import pre - built dashboards(CPU, pod status, etc.).</li>
                  </ol>
                  < p > <strong>In practice: </strong> I use Helm for both and integrate with Azure AD SSO for dashboard authentication.</p >
                    </div>`
      },
      {
        question: "What command checks resource usage in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      < pre > <code>kubectl top nodes
kubectl top pods - n < namespace > </code></pre >
    <p><strong>In AKS: </strong> Metrics Server must be installed — I use it with HPA and custom dashboards for real-time resource visibility.</p >
      </div>`
      },
      {
        question: "What is the smallest component in AKS?",
        answerHtml: `<div class='answer-rich'>
      < p > <strong>Pod < /strong> is the smallest deployable component in AKS — it runs one or more containers with shared network and storage context.</p >
      </div>`
      },
      {
        question: "How do you manage network policies in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🛡️ <strong>Network Policies — Pod - level Firewall < /strong></h3 >
        <p>Used to control communication between pods and namespaces(based on labels and ports).</p>
          < pre > <code>apiVersion: networking.k8s.io / v1
  kind: NetworkPolicy
  metadata:
  name: allow - frontend
  spec:
  podSelector:
  matchLabels:
  app: frontend
  ingress:
  - from:
  - podSelector:
  matchLabels:
  app: backend < /code></pre >
    <p><strong>In AKS: </strong> I enable Azure CNI and apply NetworkPolicies to restrict inter-service communication, improving cluster security.</p >
      </div>`
      }

    ]
  }
  ,
  {
    title: "3. Kubernetes (AKS / K8s)",
    questions: [
      {
        question: "What is Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>☸️ <strong>Kubernetes — The Container Orchestrator</strong></h3>
      <p><strong>Kubernetes (K8s)</strong> is an open-source platform that automates deployment, scaling, and management of containerized applications.</p>
      <p><strong>Why it's used:</strong></p>
      <ul style='margin-left:1.2rem;'>
        <li>Manages containerized workloads across multiple nodes.</li>
        <li>Provides self-healing (restarts crashed pods automatically).</li>
        <li>Handles service discovery, load balancing, and auto-scaling.</li>
        <li>Enables rolling updates and zero-downtime deployments.</li>
      </ul>
      <p><strong>In AKS:</strong> I use Kubernetes for hosting microservices, managing deployments through YAML and Azure DevOps pipelines, and auto-scaling with metrics.</p>
      </div>`
      },
      {
        question: "What is the architecture of Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🏗️ <strong>Kubernetes Architecture — Control Plane & Worker Nodes</strong></h3>
      <p>Kubernetes has a <strong>Control Plane (Master)</strong> that manages the cluster and <strong>Worker Nodes</strong> that run the actual workloads.</p>
      <h4>🔹 Control Plane Components:</h4>
      <ul style='margin-left:1.2rem;'>
        <li><strong>API Server:</strong> The entry point for all cluster operations (<code>kubectl</code> commands interact here).</li>
        <li><strong>etcd:</strong> Key-value store maintaining the cluster’s desired and current state.</li>
        <li><strong>Controller Manager:</strong> Ensures desired state (like number of replicas) is maintained.</li>
        <li><strong>Scheduler:</strong> Assigns pods to appropriate nodes based on resource availability.</li>
      </ul>
      <h4>🔹 Worker Node Components:</h4>
      <ul style='margin-left:1.2rem;'>
        <li><strong>Kubelet:</strong> Node agent ensuring that pods are running as expected.</li>
        <li><strong>Kube-proxy:</strong> Handles networking and service routing inside the cluster.</li>
        <li><strong>Container Runtime:</strong> (Docker / containerd) runs the containers themselves.</li>
      </ul>
      <p><strong>In AKS:</strong> Azure manages the Control Plane — I only manage Worker Nodes, Deployments, and Networking.</p>
      </div>`
      },
      {
        question: "What are different services in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🌐 <strong>Types of Kubernetes Services</strong></h3>
      <p>Kubernetes Services expose applications running on Pods to internal or external traffic.</p>
      <ul style='margin-left:1.2rem;'>
        <li><strong>ClusterIP:</strong> Default type; internal access only (used for service-to-service communication).</li>
        <li><strong>NodePort:</strong> Exposes service on a static port on all nodes (<code>NodeIP:NodePort</code>).</li>
        <li><strong>LoadBalancer:</strong> Integrates with cloud load balancer (like Azure Load Balancer) for external access.</li>
        <li><strong>Headless Service:</strong> No load balancing, DNS resolves directly to Pod IPs — used with StatefulSets.</li>
      </ul>
      <p><strong>In AKS:</strong> I generally use LoadBalancer for APIs and ClusterIP for internal microservices.</p>
      </div>`
      },
      {
        question: "What is stateless vs stateful in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧮 <strong>Stateless vs Stateful Workloads</strong></h3>
      <p><strong>Stateless:</strong> Applications that don’t maintain session or data locally. Any replica can handle any request.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Examples: Web frontends, APIs, microservices.</li>
        <li>Managed using Deployments.</li>
      </ul>
      <p><strong>Stateful:</strong> Applications that need persistent data and stable network identity.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Examples: Databases (MySQL, MongoDB), Kafka.</li>
        <li>Managed using StatefulSets and PersistentVolumes.</li>
      </ul>
      <p><strong>In AKS:</strong> I deploy stateless microservices as Deployments and databases using StatefulSets with Azure Disks.</p>
      </div>`
      },
      {
        question: "What is a StatefulSet in Kubernetes?",
        answerHtml: `<div class='answer-rich'>
      <h3>💾 <strong>StatefulSet — Managing Stateful Applications</strong></h3>
      <p><strong>StatefulSet</strong> provides stable, persistent Pod identity and storage. Each Pod has its own <strong>Persistent Volume Claim (PVC)</strong> and stable hostname.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Used for databases, queues, or storage systems.</li>
        <li>Pods follow a strict startup/termination order (pod-0, pod-1, etc.).</li>
        <li>Supports persistent data through PVCs even after restarts.</li>
      </ul>
      <p><strong>In AKS:</strong> I use StatefulSets for PostgreSQL and Redis deployments with Azure Managed Disks for data durability.</p>
      </div>`
      },
      {
        question: "What is a Deployment Set?",
        answerHtml: `<div class='answer-rich'>
      <h3>📦 <strong>Deployment — Declarative Pod Management</strong></h3>
      <p><strong>Deployment</strong> defines the desired state for stateless applications. It manages ReplicaSets and handles rolling updates, scaling, and rollbacks automatically.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Ensures a specified number of replicas are always running.</li>
        <li>Performs zero-downtime rolling updates.</li>
        <li>Allows easy rollback to previous versions.</li>
      </ul>
      <pre><code>kubectl rollout status deployment/webapp
kubectl rollout undo deployment/webapp</code></pre>
      <p><strong>In practice:</strong> I deploy microservices as Deployments using Azure DevOps YAML pipelines and manage blue-green or rolling deployments via AKS.</p>
      </div>`
      },
      {
        question: "What is a Namespace in K8s?",
        answerHtml: `<div class='answer-rich'>
      <h3>📂 <strong>Namespace — Logical Segmentation</strong></h3>
      <p><strong>Namespace</strong> helps in logically isolating resources (Pods, Services, Deployments) inside a cluster.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Commonly used for separating environments — dev, qa, prod.</li>
        <li>Supports applying resource quotas and access controls per team or project.</li>
        <li>Improves resource visibility and security.</li>
      </ul>
      <pre><code>kubectl create namespace staging
kubectl get all -n prod</code></pre>
      <p><strong>In AKS:</strong> I maintain separate namespaces for different environments and link each with unique Azure AD RBAC permissions.</p>
      </div>`
      },
      {
        question: "What is ClusterRoleBinding?",
        answerHtml: `<div class='answer-rich'>
      <h3>🔐 <strong>ClusterRoleBinding — Cluster-wide Access Control</strong></h3>
      <p><strong>ClusterRoleBinding</strong> assigns a <strong>ClusterRole</strong> (set of permissions) to a user, group, or service account at the cluster level.</p>
      <pre><code>kubectl create clusterrolebinding devops-admin \\
  --clusterrole=cluster-admin \\
  --user=ritesh@ritti.com</code></pre>
      <p><strong>Example:</strong> I use ClusterRoleBinding to grant cluster-admin access to DevOps team members while restricting developers to specific namespaces.</p>
      </div>`
      },
      {
        question: "What is ReplicaSet?",
        answerHtml: `<div class='answer-rich'>
      <h3>🧩 <strong>ReplicaSet — Ensuring Desired Pod Count</strong></h3>
      <p><strong>ReplicaSet</strong> ensures that a specified number of identical Pods are running at all times. If a Pod fails, it creates a new one automatically.</p>
      <ul style='margin-left:1.2rem;'>
        <li>Used by Deployments under the hood for scaling and versioning.</li>
        <li>Can be manually created for simple workloads, but Deployments are preferred for lifecycle management.</li>
      </ul>
      <pre><code>kubectl get rs
kubectl scale rs webapp --replicas=5</code></pre>
      <p><strong>In my AKS environment:</strong> ReplicaSets handle pod redundancy for high availability and work together with HPA for auto-scaling during peak load.</p>
      </div>`
      },
      {
        question: "What is Pod?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Pod – Smallest Deployable Unit in Kubernetes</strong></h3>
        <p>A <strong>Pod</strong> is the smallest deployable object in Kubernetes that can host one or more containers sharing the same network namespace, storage, and lifecycle.</p>
        <p><strong>In Practice:</strong> Each Pod has its own IP; containers inside a Pod communicate via localhost, making them tightly coupled (useful for sidecar patterns).</p>
      </div>`
      },
      {
        question: "What is a Headless Service?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Headless Service – Direct Pod-to-Pod Discovery</strong></h3>
        <p>A <strong>Headless Service</strong> (created with <code>clusterIP: None</code>) exposes Pod IPs directly instead of load-balancing traffic.</p>
        <p><strong>Use Case:</strong> Stateful apps (like databases) where client needs to directly resolve individual Pod endpoints using DNS (e.g., StatefulSets).</p>
      </div>`
      },
      {
        question: "What is a DaemonSet?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>DaemonSet – Runs Pod on Every Node</strong></h3>
        <p>A <strong>DaemonSet</strong> ensures a copy of a specific Pod runs on all (or selected) nodes in the cluster.</p>
        <ul style="margin-left:1.2rem;">
          <li>Used for cluster-level agents like log collectors (Fluentd), monitoring (Prometheus Node Exporter), or networking (CNI).</li>
          <li>Automatically deploys Pods on new nodes as they join the cluster.</li>
        </ul>
      </div>`
      },
      {
        question: "What is Taint and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Taints & Tolerations – Scheduling Control</strong></h3>
        <p><strong>Taints</strong> are applied on nodes to repel certain Pods unless they have matching <strong>tolerations</strong>.</p>
        <pre><code>kubectl taint nodes node1 key=value:NoSchedule</code></pre>
        <p><strong>In Practice:</strong> Used to isolate workloads — e.g., run production-only Pods on dedicated nodes and block dev Pods.</p>
      </div>`
      },
      {
        question: "What is the smallest component in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Pod – Smallest Executable Unit</strong></h3>
        <p>In AKS (Azure Kubernetes Service), the smallest schedulable component is a <strong>Pod</strong> — it runs one or more containers as a logical unit.</p>
        <p><strong>Note:</strong> Containers are not scheduled directly; Pods abstract container lifecycle & resource management.</p>
      </div>`
      },
      {
        question: "How do you manage secrets in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Managing Secrets Securely</strong></h3>
        <p>Kubernetes <strong>Secrets</strong> are used to store sensitive data like passwords, tokens, and keys (base64 encoded by default).</p>
        <pre><code>kubectl create secret generic db-secret --from-literal=DB_PASS='P@ssw0rd'</code></pre>
        <p><strong>Best Practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use external secret stores (Azure Key Vault, HashiCorp Vault).</li>
          <li>Integrate with <strong>Secrets Store CSI Driver</strong> for runtime injection.</li>
          <li>Restrict RBAC access to Secrets API.</li>
        </ul>
      </div>`
      },
      {
        question: "What is Helm?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚓ <strong>Helm – Package Manager for Kubernetes</strong></h3>
        <p><strong>Helm</strong> simplifies deployment by packaging K8s manifests into versioned bundles called <strong>charts</strong>.</p>
        <p><strong>In Practice:</strong> I use Helm to deploy complex apps (NGINX, Prometheus, ArgoCD) using parameterized <code>values.yaml</code> for different environments.</p>
      </div>`
      },
      {
        question: "What are Helm Charts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Helm Charts – Reusable Deployment Templates</strong></h3>
        <p>Helm charts are directories containing templates, values, and metadata for deploying Kubernetes resources in a repeatable way.</p>
        <pre><code>helm install myapp ./chart --values values-prod.yaml</code></pre>
        <p><strong>Benefit:</strong> Enables consistent, parameterized deployments across environments (dev, QA, prod).</p>
      </div>`
      },
      {
        question: "What is Stateful Deployment in K8s?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>StatefulSet – Persistent & Ordered Deployment</strong></h3>
        <p>Used for applications requiring stable network identities, persistent storage, and ordered scaling (e.g., databases, Kafka).</p>
        <p><strong>In Practice:</strong> Each Pod gets a predictable DNS name (e.g., <code>mysql-0.mysql</code>), and volumes are preserved across restarts.</p>
      </div>`
      },
      {
        question: "Have you deployed Kubernetes clusters? What all did you deploy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Hands-on with AKS Deployments</strong></h3>
        <p>Yes, deployed and managed multiple AKS clusters for production workloads.</p>
        <ul style="margin-left:1.2rem;">
          <li>Set up AKS with Azure CNI, AAD integration, and managed identities.</li>
          <li>Deployed apps using Helm & GitHub Actions CI/CD.</li>
          <li>Configured Ingress (NGINX) + cert-manager for SSL automation.</li>
          <li>Integrated monitoring with Azure Monitor + Prometheus + Grafana.</li>
        </ul>
      </div>`
      },
      {
        question: "How do you maintain a Kubernetes cluster?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Cluster Maintenance – Keeping AKS Healthy</strong></h3>
        <p>I focus on proactive maintenance to keep the cluster secure, performant, and compliant:</p>
        <ul style="margin-left:1.2rem;">
          <li>Regularly apply <strong>node OS patches</strong> and <strong>Kubernetes version upgrades</strong>.</li>
          <li>Monitor cluster health via <strong>Azure Monitor, Prometheus, and Grafana</strong>.</li>
          <li>Use <strong>Cluster Autoscaler</strong> and <strong>Horizontal Pod Autoscaler</strong> to balance workloads.</li>
          <li>Audit RBAC, network policies, and secrets for security drift.</li>
          <li>Perform periodic <strong>etcd snapshot backups</strong> for disaster recovery.</li>
        </ul>
        <p><strong>In Practice:</strong> I automate node image upgrades and apply policy validation using <strong>Azure Policy for AKS</strong>.</p>
      </div>`
      },
      {
        question: "How to upgrade a Kubernetes cluster?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⬆️ <strong>Cluster Upgrades – Safe Rolling Strategy</strong></h3>
        <p>Upgrades in AKS are handled via Azure CLI or Portal with zero-downtime strategy:</p>
        <pre><code>az aks upgrade --resource-group myRG --name myAKS --kubernetes-version 1.30.2</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Upgrade <strong>control plane</strong> first, then <strong>node pools</strong>.</li>
          <li>Use <strong>staging environments</strong> to test workload compatibility.</li>
          <li>Monitor during upgrade via <code>kubectl get nodes -w</code> and Azure portal logs.</li>
        </ul>
        <p><strong>Tip:</strong> Always use <strong>maintenance windows</strong> and <strong>node image auto-upgrade</strong> for controlled rollouts.</p>
      </div>`
      },
      {
        question: "How to configure AKS with Azure Portal?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>AKS Setup via Azure Portal</strong></h3>
        <p>Through Azure Portal → “Create Kubernetes Service” wizard:</p>
        <ol style="margin-left:1.2rem;">
          <li>Select subscription & resource group.</li>
          <li>Configure node pools (VM size, scaling, OS type).</li>
          <li>Enable AAD integration & managed identity.</li>
          <li>Choose network model (Azure CNI / Kubenet).</li>
          <li>Integrate with <strong>Azure Monitor</strong> for logging & metrics.</li>
        </ol>
        <p><strong>In Practice:</strong> I also integrate <strong>Azure Key Vault CSI driver</strong> and link ACR during creation.</p>
      </div>`
      },
      {
        question: "How does Kubernetes handle service discovery?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Service Discovery – DNS & ClusterIP</strong></h3>
        <p>Kubernetes uses an internal <strong>DNS service (CoreDNS)</strong> to resolve service names to ClusterIPs.</p>
        <ul style="margin-left:1.2rem;">
          <li>Each Service gets a stable virtual IP (ClusterIP).</li>
          <li>Pods can reach other services via <code>myservice.mynamespace.svc.cluster.local</code>.</li>
          <li>For external access, use <strong>LoadBalancer</strong> or <strong>Ingress Controller</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> DNS is auto-managed; I validate using <code>kubectl exec -it pod -- nslookup service-name</code>.</p>
      </div>`
      },
      {
        question: "How to integrate AKS with ACR (Azure Container Registry)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>AKS + ACR Integration</strong></h3>
        <p>Grant AKS permission to pull images from ACR using role assignment:</p>
        <pre><code>az aks update -n myAKS -g myRG --attach-acr myACR</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>This creates a Managed Identity link between AKS and ACR.</li>
          <li>No manual docker login or secret creation needed.</li>
        </ul>
        <p><strong>In Practice:</strong> For multi-tenant environments, I use separate ACRs and scoped RBAC for image access.</p>
      </div>`
      },
      {
        question: "How to troubleshoot a pod in Pending state?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Troubleshooting Pending Pods</strong></h3>
        <p>Common causes: insufficient resources, missing node selector match, or scheduling taints.</p>
        <pre><code>kubectl describe pod &lt;pod-name&gt;</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Check <strong>Events</strong> section for errors like “0/3 nodes available”.</li>
          <li>Verify node capacity (<code>kubectl get nodes -o wide</code>).</li>
          <li>Ensure correct <strong>tolerations</strong> or <strong>storage class</strong> availability.</li>
        </ul>
        <p><strong>In Practice:</strong> I usually scale node pool or adjust resource requests to resolve Pending Pods.</p>
      </div>`
      },
      {
        question: "How much should be the ideal pod-to-container ratio?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Pod-to-Container Ratio – Design Best Practice</strong></h3>
        <p>Typically, a Pod hosts <strong>1–2 containers</strong> (main app + sidecar). Avoid overpacking containers in a Pod.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>1 container:</strong> independent microservices.</li>
          <li><strong>2 containers:</strong> sidecar pattern (e.g., Envoy proxy, Fluent Bit).</li>
          <li><strong>Never</strong> mix unrelated containers inside a single Pod.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow “one responsibility per Pod” rule for observability and scaling clarity.</p>
      </div>`
      },
      {
        question: "How to monitor a Kubernetes cluster?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Cluster Monitoring & Observability</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Monitor for Containers</strong> for AKS integration.</li>
          <li>Install <strong>Prometheus + Grafana</strong> via Helm for custom metrics dashboards.</li>
          <li>Enable <strong>Container Insights</strong> for CPU, memory, and node-level metrics.</li>
          <li>Use <strong>kubectl top</strong> or <strong>metrics-server</strong> for quick checks.</li>
        </ul>
        <p><strong>In Practice:</strong> I set up alert rules for Pod restarts, node pressure, and resource thresholds integrated with Slack or Teams via webhooks.</p>
      </div>`
      }, {
        question: "What are ConfigMaps and Secrets?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>ConfigMaps & Secrets – Managing App Configs</strong></h3>
        <p>They externalize configuration from container images.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>ConfigMap:</strong> Stores non-sensitive data (like URLs, env vars).</li>
          <li><strong>Secret:</strong> Stores sensitive data (like passwords, tokens) in base64 format.</li>
        </ul>
        <pre><code>kubectl create configmap app-config --from-literal=env=prod
kubectl create secret generic db-secret --from-literal=password=Pass@123</code></pre>
        <p><strong>In Practice:</strong> I mount them as env vars or volumes, and integrate Secrets with <strong>Azure Key Vault CSI driver</strong> for auto-sync.</p>
      </div>`
      },
      {
        question: "What is Horizontal Pod Autoscaler (HPA)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>HPA – Scaling Pods Automatically</strong></h3>
        <p>HPA automatically scales the number of pods based on CPU, memory, or custom metrics.</p>
        <pre><code>kubectl autoscale deployment myapp --cpu-percent=70 --min=2 --max=10</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Uses <strong>metrics-server</strong> to fetch real-time utilization.</li>
          <li>Continuously adjusts pod replicas based on defined thresholds.</li>
        </ul>
        <p><strong>In Practice:</strong> I use <strong>Prometheus Adapter</strong> for custom metrics-based autoscaling (like QPS or latency).</p>
      </div>`
      },
      {
        question: "What is the use of Network Policies?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Network Policies – Controlling Pod Communication</strong></h3>
        <p>They define how pods communicate with each other and external resources within the cluster.</p>
        <pre><code>kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
spec:
  podSelector:
    matchLabels:
      app: frontend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Restrict lateral movement & isolate workloads.</li>
          <li>Implemented using CNI plugins (like Calico or Azure CNI).</li>
        </ul>
        <p><strong>In Practice:</strong> I enforce default-deny rules and allow only required ingress/egress paths.</p>
      </div>`
      },
      {
        question: "How do you perform canary deployment in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Canary Deployment – Gradual Rollout of New Version</strong></h3>
        <p>Deploys new version of app to small subset of users before full rollout.</p>
        <pre><code>apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 10
  selector:
    matchLabels: app: myapp
  template:
    metadata:
      labels:
        version: v2</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Use two Deployments (stable + canary) with <strong>weighted services</strong>.</li>
          <li>Managed via <strong>Ingress Controller (NGINX/Traefik)</strong> or <strong>Service Mesh (Istio/Linkerd)</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Helm hooks or Argo Rollouts for controlled traffic shifting & auto rollback.</p>
      </div>`
      },
      {
        question: "Have you worked with auto-scaling in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>AKS Auto-Scaling – Node & Pod Levels</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Cluster Autoscaler:</strong> Scales node pools when pods can’t be scheduled.</li>
          <li><strong>HPA:</strong> Scales pods based on resource usage.</li>
          <li><strong>VPA:</strong> (Vertical Pod Autoscaler) Adjusts pod resource requests.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable cluster-autoscaler via Azure CLI and configure HPA for microservices — both work together seamlessly.</p>
      </div>`
      },
      {
        question: "How does auto-scaling work internally?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Autoscaling Internals – HPA & Cluster Autoscaler</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Metrics Server</strong> collects CPU/memory data from Kubelet.</li>
          <li><strong>HPA Controller</strong> compares actual metrics vs target.</li>
          <li>If pods exceed target utilization → increase replicas.</li>
          <li>If pods can’t schedule → <strong>Cluster Autoscaler</strong> adds new nodes automatically.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor these via <strong>Azure Monitor Insights</strong> and tune scaling thresholds per workload type.</p>
      </div>`
      },
      {
        question: "What is kubectl and some useful commands?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>kubectl – The Kubernetes CLI Tool</strong></h3>
        <p>kubectl interacts with the Kubernetes API server for managing cluster resources.</p>
        <ul style="margin-left:1.2rem;">
          <li><code>kubectl get pods</code> – list all pods</li>
          <li><code>kubectl describe pod &lt;name&gt;</code> – show details/events</li>
          <li><code>kubectl logs &lt;pod&gt;</code> – view logs</li>
          <li><code>kubectl exec -it &lt;pod&gt; -- /bin/bash</code> – shell into pod</li>
          <li><code>kubectl apply -f file.yaml</code> – create/update resource</li>
          <li><code>kubectl top pods</code> – show pod resource usage</li>
        </ul>
        <p><strong>In Practice:</strong> I create aliases like <code>k get po</code> or use <strong>kubectx + kubens</strong> for faster context switching.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Services, Networking & Ingress in Kubernetes",
    questions: [
      {
        question: "What are Services in Kubernetes and what types exist?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Services – Stable Networking for Pods</strong></h3>
        <p>Services provide a stable IP and DNS name to access pods, even if pod IPs change dynamically.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>ClusterIP:</strong> Default type – exposes service within cluster only.</li>
          <li><strong>NodePort:</strong> Exposes service on a static port of each node.</li>
          <li><strong>LoadBalancer:</strong> Provisions external LB (e.g., Azure LB or AWS ELB).</li>
          <li><strong>ExternalName:</strong> Maps service to external DNS name.</li>
        </ul>
        <p><strong>In Practice:</strong> I use ClusterIP for internal microservices, LoadBalancer for public APIs.</p>
      </div>`
      },
      {
        question: "Explain ClusterIP, NodePort, and LoadBalancer — when do you use each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚪 <strong>Service Types – Internal vs External Exposure</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>ClusterIP:</strong> Internal-only communication (default).</li>
          <li><strong>NodePort:</strong> Opens a port (30000–32767) on each node for external access.</li>
          <li><strong>LoadBalancer:</strong> Integrates with cloud LB (Azure/AWS/GCP) for public endpoint.</li>
        </ul>
        <p><strong>Usage:</strong> ClusterIP → backend, NodePort → dev/test, LoadBalancer → production apps.</p>
      </div>`
      },
      {
        question: "What happens behind the scenes when you choose “Service type = LoadBalancer” in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>AKS LoadBalancer – Behind the Scenes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>AKS talks to <strong>Azure Resource Manager</strong> via cloud controller manager.</li>
          <li>Automatically provisions an <strong>Azure Load Balancer</strong> and assigns a public IP.</li>
          <li>Creates backend pool entries pointing to each node.</li>
          <li>kube-proxy ensures requests are routed to correct pod on that node.</li>
        </ul>
        <p><strong>In Practice:</strong> I often combine LoadBalancer + Ingress for better path-based routing.</p>
      </div>`
      },
      {
        question: "What is the difference between Ingress and Ingress Controller?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Ingress vs Ingress Controller</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Ingress:</strong> Kubernetes object that defines routing rules (like /api → backend-svc).</li>
          <li><strong>Ingress Controller:</strong> The actual implementation (e.g., NGINX, Traefik, Azure Application Gateway) that reads Ingress rules and configures routing.</li>
        </ul>
        <p><strong>In Practice:</strong> I use NGINX Ingress Controller with TLS, rewrite rules, and path-based routing.</p>
      </div>`
      },
      {
        question: "Why do we use Ingress Controller and what is its purpose?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>Ingress Controller – The Traffic Manager</strong></h3>
        <p>It manages external HTTP/HTTPS traffic and routes it to services inside the cluster based on rules.</p>
        <ul style="margin-left:1.2rem;">
          <li>Enables domain-based & path-based routing.</li>
          <li>Handles SSL/TLS termination.</li>
          <li>Supports rewrite, rate limiting, auth, etc.</li>
        </ul>
        <p><strong>In Practice:</strong> It replaces multiple LBs → single entry point for all microservices.</p>
      </div>`
      },
      {
        question: "How do you expose a Kubernetes application to external traffic?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Expose Kubernetes App Externally</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Option 1:</strong> Service of type <code>LoadBalancer</code>.</li>
          <li><strong>Option 2:</strong> Ingress + Ingress Controller (preferred for many apps).</li>
          <li><strong>Option 3:</strong> NodePort (temporary/testing use).</li>
        </ul>
        <p><strong>In Practice:</strong> I expose APIs via Ingress with NGINX controller and Azure public IP.</p>
      </div>`
      },
      {
        question: "What is kube-proxy and how does it route traffic?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>kube-proxy – Service Networking Layer</strong></h3>
        <p>kube-proxy runs on each node and maintains network rules (iptables/ipvs) to forward traffic to correct pod endpoints.</p>
        <ul style="margin-left:1.2rem;">
          <li>Watches API server for Service & Endpoint changes.</li>
          <li>Implements load-balancing across pods.</li>
          <li>Supports three modes: <strong>userspace, iptables, ipvs</strong>.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer ipvs mode for high-performance clusters.</p>
      </div>`
      },
      {
        question: "Explain complete traffic flow: from user → Ingress → Service → Pod.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Traffic Flow – From User to Pod</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>User sends request to app DNS (e.g., myapp.com).</li>
          <li>Request hits <strong>Ingress Controller</strong> (e.g., NGINX).</li>
          <li>Ingress routes based on rules → forwards to <strong>Service</strong>.</li>
          <li>Service forwards to a <strong>Pod endpoint</strong> (via kube-proxy).</li>
          <li>Response flows back same path.</li>
        </ol>
        <p><strong>In Practice:</strong> I visualize this flow using Azure Network Watcher + Kiali dashboards.</p>
      </div>`
      },
      {
        question: "How would you secure application traffic (TLS termination, HTTPS redirection)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Securing Application Traffic</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Enable <strong>TLS termination</strong> at Ingress Controller using a secret (cert + key).</li>
          <li>Use <strong>cert-manager</strong> for auto-renewal via Let's Encrypt.</li>
          <li>Force HTTPS redirection with Ingress annotations.</li>
        </ul>
        <pre><code>tls:
- hosts:
  - myapp.com
  secretName: myapp-cert</code></pre>
        <p><strong>In Practice:</strong> I integrate cert-manager + Azure DNS for full auto-cert provisioning.</p>
      </div>`
      },
      {
        question: "If your AKS cluster is private, how can you connect to it securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Securely Connecting to Private AKS</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Bastion</strong> or <strong>Jumpbox VM</strong> inside same VNet.</li>
          <li>Configure <strong>Private Endpoint</strong> for AKS API Server.</li>
          <li>Access via <strong>Azure VPN Gateway</strong> or <strong>ExpressRoute</strong>.</li>
          <li>kubectl uses local kubeconfig with private FQDN.</li>
        </ul>
        <p><strong>In Practice:</strong> I connect via Azure Bastion + managed identity authentication.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Configuration, Secrets & Environment Management",
    questions: [
      {
        question: "What are ConfigMaps and Secrets?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>ConfigMaps & Secrets – Externalized Configuration</strong></h3>
        <p><strong>ConfigMaps</strong> store non-sensitive data like environment configs, URLs, or feature flags.</p>
        <p><strong>Secrets</strong> store sensitive data like passwords, tokens, or certificates (Base64 encoded).</p>
        <ul style="margin-left:1.2rem;">
          <li>ConfigMap → plaintext configuration.</li>
          <li>Secret → encoded & access-controlled via RBAC.</li>
        </ul>
        <p><strong>In Practice:</strong> I use ConfigMaps for app settings and Secrets for connection strings or API keys.</p>
      </div>`
      },
      {
        question: "What is the difference between ConfigMap and Secret?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>ConfigMap vs Secret</strong></h3>
        <table class="table-auto border-collapse border border-gray-300">
          <tr><th>Aspect</th><th>ConfigMap</th><th>Secret</th></tr>
          <tr><td>Data Type</td><td>Plain text config</td><td>Sensitive (Base64 encoded)</td></tr>
          <tr><td>Access Control</td><td>Normal RBAC</td><td>Strict RBAC with secret resource type</td></tr>
          <tr><td>Encryption</td><td>No encryption</td><td>Encrypted at rest (if enabled)</td></tr>
        </table>
        <p><strong>In Practice:</strong> Use ConfigMap for config, Secret for credentials — never mix them.</p>
      </div>`
      },
      {
        question: "How do you inject ConfigMap and Secret values into Pods?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Injecting ConfigMaps & Secrets into Pods</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>As environment variables:</strong>
            <pre><code>envFrom:
  - configMapRef:
      name: app-config
  - secretRef:
      name: app-secret</code></pre>
          </li>
          <li><strong>As mounted files:</strong>
            <pre><code>volumeMounts:
  - name: config
    mountPath: /app/config</code></pre>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I mount secrets read-only and rotate them via Key Vault references.</p>
      </div>`
      },
      {
        question: "How do you secure Secrets in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Securing Secrets in Kubernetes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Enable <strong>encryption at rest</strong> for Secrets via KMS provider (Azure Key Vault).</li>
          <li>Restrict access via <strong>RBAC</strong> – only apps or namespaces that need it.</li>
          <li>Use <strong>Secrets Store CSI Driver</strong> for direct Key Vault integration.</li>
          <li>Avoid printing secrets in logs or kubectl outputs.</li>
        </ul>
        <p><strong>In Practice:</strong> I disable plaintext secret access and rely on CSI driver-managed secrets.</p>
      </div>`
      },
      {
        question: "How do you fetch secrets from Azure Key Vault into AKS Pods?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Integrating Azure Key Vault with AKS</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Deploy <strong>Azure Key Vault CSI Driver</strong> and <strong>Secrets Store Provider for Azure</strong>.</li>
          <li>Create a <strong>SecretProviderClass</strong> manifest mapping Key Vault secrets to pod volume.</li>
          <li>Use <strong>Managed Identity</strong> to authenticate AKS to Key Vault.</li>
          <li>Mount secrets into pods as files or environment variables.</li>
        </ol>
        <pre><code>volumeMounts:
  - name: secrets-store
    mountPath: "/mnt/secrets"</code></pre>
        <p><strong>In Practice:</strong> This approach removes the need to store credentials in Kubernetes at all.</p>
      </div>`
      },
      {
        question: "What are best practices for storing sensitive configuration in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Best Practices – Sensitive Config Management</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Azure Key Vault</strong> + CSI driver (no plaintext in cluster).</li>
          <li>Enable <strong>Encryption at Rest</strong> for Secrets.</li>
          <li>Use <strong>Managed Identities</strong> instead of storing credentials.</li>
          <li>Limit access via <strong>RBAC + Network Policies</strong>.</li>
          <li>Audit access via Azure Monitor + Defender for Cloud.</li>
        </ul>
        <p><strong>In Practice:</strong> I standardize all AKS environments with Key Vault-based secret retrieval to meet compliance.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Probes, Health Checks & Scaling",
    questions: [
      {
        question: "What are Liveness and Readiness Probes in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>❤️‍🔥 <strong>Liveness & Readiness Probes – Application Health Checks</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Liveness Probe:</strong> Checks if the container is alive. If it fails, Kubelet restarts the container.</li>
          <li><strong>Readiness Probe:</strong> Checks if the container is ready to serve traffic. If it fails, pod is removed from Service endpoints.</li>
        </ul>
        <pre><code>livenessProbe:
  httpGet:
    path: /health
    port: 8080
readinessProbe:
  httpGet:
    path: /ready
    port: 8080</code></pre>
        <p><strong>In Practice:</strong> I always set both probes for production workloads — liveness for crash recovery, readiness for load balancing.</p>
      </div>`
      },
      {
        question: "What types of health probes exist (HTTP, TCP, Exec)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Probe Types in Kubernetes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>HTTP Probe:</strong> Calls an HTTP endpoint (common for web apps).</li>
          <li><strong>TCP Probe:</strong> Checks if a TCP socket is open (useful for DB or services without HTTP).</li>
          <li><strong>Exec Probe:</strong> Executes a command inside the container and checks exit code 0/1.</li>
        </ul>
        <p><strong>In Practice:</strong> I use HTTP for APIs, TCP for Redis/MQ, and Exec for internal scripts or agents.</p>
      </div>`
      },
      {
        question: "Have you worked on configuring readiness and liveness probes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Hands-on: Configuring Probes</strong></h3>
        <p>Yes — I define both probes in my Deployment manifests with proper delay and threshold values to avoid false restarts.</p>
        <pre><code>livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 20
  periodSeconds: 10
  failureThreshold: 3</code></pre>
        <p><strong>In Practice:</strong> For .NET and Node apps, I tune probe delays to match app startup time (avoid premature restarts).</p>
      </div>`
      },
      {
        question: "What is HPA (Horizontal Pod Autoscaler) and how does it work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Horizontal Pod Autoscaler (HPA)</strong></h3>
        <p>HPA automatically scales the number of pod replicas based on observed metrics like CPU or memory usage.</p>
        <pre><code>kubectl autoscale deployment webapp \\
  --cpu-percent=70 --min=2 --max=10</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Uses <strong>metrics-server</strong> for resource metrics.</li>
          <li>Continuously monitors and updates replicas to maintain target utilization.</li>
          <li>Can integrate with custom metrics (Prometheus, KEDA).</li>
        </ul>
        <p><strong>In Practice:</strong> I use HPA + KEDA combo for event-driven scaling in AKS.</p>
      </div>`
      },
      {
        question: "How do you scale deployments manually and automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Manual vs Automatic Scaling</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Manual Scaling:</strong> <code>kubectl scale deployment webapp --replicas=5</code></li>
          <li><strong>Automatic Scaling:</strong> via <strong>HPA</strong> or <strong>KEDA</strong> (based on metrics or events).</li>
          <li><strong>Cluster Autoscaler:</strong> scales node pools when pods cannot be scheduled.</li>
        </ul>
        <p><strong>In Practice:</strong> I combine HPA for pod scaling and Cluster Autoscaler for node scaling on AKS.</p>
      </div>`
      },
      {
        question: "How do you host a highly available, auto-scalable web app on AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Hosting HA & Auto-Scalable Web App on AKS</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Deploy app as a <strong>Deployment</strong> with min 3 replicas.</li>
          <li>Expose via <strong>Service (LoadBalancer)</strong> + Ingress for routing.</li>
          <li>Enable <strong>HPA</strong> for pod scaling and <strong>Cluster Autoscaler</strong> for nodes.</li>
          <li>Distribute workloads across multiple zones (availability zones in AKS).</li>
          <li>Use <strong>readiness/liveness probes</strong> for self-healing.</li>
        </ol>
        <p><strong>In Practice:</strong> I design multi-zone AKS clusters with managed identities + Key Vault + auto-scaling for peak resilience.</p>
      </div>`
      },
      {
        question: "What is kubectl rollout undo used for?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏪ <strong>kubectl rollout undo – Rollback to Previous Deployment</strong></h3>
        <p>Used to revert to the last known stable version of a deployment after a failed release.</p>
        <pre><code>kubectl rollout undo deployment/webapp</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Maintains revision history for each rollout.</li>
          <li>Useful for immediate rollback during CI/CD failures.</li>
        </ul>
        <p><strong>In Practice:</strong> I automate rollbacks via GitHub Actions using <code>kubectl rollout undo</code> after failed smoke tests.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Deployments & Strategies",
    questions: [
      {
        question: "What is a Deployment in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Deployment – Declarative Management of Pods</strong></h3>
        <p>A <strong>Deployment</strong> in Kubernetes is a higher-level abstraction that manages ReplicaSets and ensures the desired number of pods are running with the correct version.</p>
        <ul style="margin-left:1.2rem;">
          <li>Enables rolling updates, rollback, and scaling.</li>
          <li>Ensures self-healing — restarts unhealthy pods automatically.</li>
          <li>Declarative model — define desired state in YAML, K8s reconciles it continuously.</li>
        </ul>
        <pre><code>kubectl apply -f deployment.yaml
kubectl get deployments</code></pre>
        <p><strong>In Practice:</strong> I use Deployments for stateless services — APIs, frontends, or workers — with HPA and probes for reliability.</p>
      </div>`
      },
      {
        question: "What are different deployment strategies available in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Deployment Strategies in Kubernetes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Recreate:</strong> Stops old pods before starting new ones (downtime possible).</li>
          <li><strong>Rolling Update:</strong> Default strategy — gradually replaces old pods with new ones.</li>
          <li><strong>Blue-Green Deployment:</strong> Two environments (blue & green) — one live, one standby.</li>
          <li><strong>Canary Deployment:</strong> Gradually routes traffic to new version (controlled rollout).</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer rolling updates for APIs, blue-green for critical backend changes, and canary for production experiments.</p>
      </div>`
      },
      {
        question: "What is a Rolling Update and how do you perform rollback?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Rolling Update & Rollback</strong></h3>
        <p>Rolling update replaces pods gradually — ensuring zero downtime during deployment.</p>
        <pre><code>kubectl rollout status deployment/webapp
kubectl rollout undo deployment/webapp</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>New pods are created before old ones are terminated.</li>
          <li>If an update fails, use <strong>rollback</strong> to revert to previous stable version.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate rolling updates with Azure DevOps pipelines using <code>kubectl apply</code> and post-deployment checks.</p>
      </div>`
      },
      {
        question: "What is a Blue-Green Deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🟦🟩 <strong>Blue-Green Deployment – Zero Downtime Rollouts</strong></h3>
        <p>Two identical environments (Blue = current, Green = new). After verification, traffic switches to Green.</p>
        <ul style="margin-left:1.2rem;">
          <li>Blue stays active until Green is fully validated.</li>
          <li>Rollback is instant — just redirect traffic back to Blue.</li>
          <li>Useful for production-critical apps with strict uptime SLAs.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Nginx Ingress + Azure Traffic Manager for blue-green routing in AKS.</p>
      </div>`
      },
      {
        question: "What is a Canary Deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐤 <strong>Canary Deployment – Gradual Rollout of New Version</strong></h3>
        <p>Releases new versions to a small subset of users first, monitoring performance before full rollout.</p>
        <ul style="margin-left:1.2rem;">
          <li>Canary pods run alongside stable ones.</li>
          <li>Traffic gradually increases from 5% → 50% → 100%.</li>
          <li>Metrics and alerts decide if rollout continues or reverts.</li>
        </ul>
        <p><strong>In Practice:</strong> I combine Canary with Prometheus metrics or Azure Monitor alerts to automate safe rollout decisions.</p>
      </div>`
      },
      {
        question: "What happens if deployment fails midway? How do you recover or rollback?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Failure Handling & Rollback</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Deployment pauses if pods fail health checks.</li>
          <li>Use <code>kubectl rollout undo</code> to revert to last stable version.</li>
          <li>Logs and <code>kubectl describe deployment</code> show root cause (CrashLoop, imagePull errors, etc.).</li>
          <li>HPA + probes minimize downtime during recovery.</li>
        </ul>
        <p><strong>In Practice:</strong> My CI/CD pipelines detect failure & trigger rollback jobs automatically in Azure DevOps.</p>
      </div>`
      },
      {
        question: "How do you manage CI/CD integration for AKS deployments (with Azure DevOps)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>CI/CD Integration with Azure DevOps</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>CI:</strong> Build Docker image → push to ACR.</li>
          <li><strong>CD:</strong> Pipeline applies manifests via <code>kubectl</code> or Helm.</li>
          <li>Use Azure service connection for secure kubeconfig authentication.</li>
          <li>Post-deployment validation via probes & smoke tests.</li>
        </ol>
        <p><strong>In Practice:</strong> My YAML pipeline includes rollback, HPA verification, and tag-based release triggers.</p>
      </div>`
      },
      {
        question: "What are the application deployment types you’ve worked with (YAML, Helm, pipeline)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Application Deployment Types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>YAML Manifests:</strong> Direct <code>kubectl apply -f</code> (used for quick testing or PoCs).</li>
          <li><strong>Helm Charts:</strong> Parameterized and reusable deployment templates for consistent releases.</li>
          <li><strong>CI/CD Pipelines:</strong> Full automation via Azure DevOps with versioned artifacts and rollback steps.</li>
        </ul>
        <p><strong>In Practice:</strong> I maintain a hybrid model — Helm for config-driven apps, pipelines for multi-env deployments (Dev → QA → Prod).</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Storage & Volumes",
    questions: [
      {
        question: "What are Persistent Volumes (PV) and Persistent Volume Claims (PVC)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Persistent Volumes (PV) & Persistent Volume Claims (PVC)</strong></h3>
        <p><strong>PV (Persistent Volume):</strong> Cluster-level resource representing a piece of storage provisioned either manually or dynamically.</p>
        <p><strong>PVC (Persistent Volume Claim):</strong> Request made by a pod to use a PV — similar to how a pod requests CPU/RAM resources.</p>
        <pre><code>kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: mypvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: managed-premium</code></pre>
        <p><strong>In Practice:</strong> I use dynamic provisioning with Azure Disk/Files using <code>storageClassName</code> for automated PV creation.</p>
      </div>`
      },
      {
        question: "How do you mount Azure Disk or Azure File Share in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Mounting Azure Disk or File Share in AKS</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Disk:</strong> Block storage, used for single-pod attach (ReadWriteOnce). Ideal for databases or stateful pods.</li>
          <li><strong>Azure File:</strong> SMB-based file share, supports multiple pods (ReadWriteMany).</li>
        </ul>
        <pre><code>volumeMounts:
- name: mydisk
  mountPath: /data
volumes:
- name: mydisk
  persistentVolumeClaim:
    claimName: azure-disk-pvc</code></pre>
        <p><strong>In Practice:</strong> I prefer Azure File for shared access (web pods) and Azure Disk for stateful DB components.</p>
      </div>`
      },
      {
        question: "How do you protect data from accidental pod deletion?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Protecting Data from Pod Deletion</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>PVs are independent of pod lifecycle — data persists even if the pod is deleted.</li>
          <li>Use <strong>PersistentVolumeClaim</strong> — it ensures data survives pod recreation.</li>
          <li>Set <strong>reclaimPolicy</strong> to <code>Retain</code> (default is Delete).</li>
          <li>For critical workloads — use StatefulSet with PVC templates.</li>
        </ul>
        <pre><code>reclaimPolicy: Retain</code></pre>
        <p><strong>In Practice:</strong> I ensure all DB and backend pods use PVCs with Retain policy + scheduled snapshot backups in Azure.</p>
      </div>`
      },
      {
        question: "What happens when a StatefulSet Pod restarts — how is its data preserved?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>StatefulSet Pod Restart – Data Persistence</strong></h3>
        <p>Each StatefulSet Pod gets its own unique, stable storage through <strong>volumeClaimTemplates</strong>.</p>
        <ul style="margin-left:1.2rem;">
          <li>When a pod restarts, it reattaches to the same volume claim.</li>
          <li>Pod identity and data are maintained — ideal for databases or message queues.</li>
          <li>Kubernetes ensures volume mount consistency even during node rescheduling.</li>
        </ul>
        <pre><code>volumeClaimTemplates:
- metadata:
    name: data
  spec:
    accessModes: [ "ReadWriteOnce" ]
    resources:
      requests:
        storage: 10Gi</code></pre>
        <p><strong>In Practice:</strong> I use StatefulSets for MySQL, MongoDB, and Kafka to preserve unique pod identities with persistent data.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Node Pools, Scheduling & Cluster Management",
    questions: [
      {
        question: "What is a Node Pool in AKS and how do you manage it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Node Pools in AKS — Overview & Management</strong></h3>
        <p>A <strong>Node Pool</strong> is a set of nodes (VMs) within an AKS cluster that share the same configuration — OS type, VM size, and scaling policies.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Default Node Pool:</strong> Created automatically during cluster setup. Hosts system-critical Pods (e.g., CoreDNS, kube-proxy).</li>
          <li><strong>User Node Pools:</strong> Custom pools used for application workloads, can be Linux/Windows, GPU-enabled, or spot instances.</li>
        </ul>
        <p><strong>Management Commands:</strong></p>
        <pre><code>az aks nodepool list -g myRG --cluster-name myAKS
az aks nodepool add -g myRG --cluster-name myAKS -n apppool --node-count 3
az aks nodepool delete -g myRG --cluster-name myAKS -n oldpool
az aks nodepool scale -g myRG --cluster-name myAKS -n apppool --node-count 5</code></pre>
        <p><strong>In Practice:</strong> I use separate pools for system vs app workloads, e.g.:
        <br>🟦 systempool (Core components)
        <br>🟩 apppool (Web/API workloads)
        <br>🟨 gpupool (AI/ML inference)</p>
      </div>`
      },
      {
        question: "What are Taints and Tolerations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Taints & Tolerations — Controlling Pod Placement</strong></h3>
        <p><strong>Taints</strong> are applied on nodes to repel Pods unless those Pods have a matching <strong>Toleration</strong>.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Taint Example:</strong> <code>kubectl taint nodes node1 key=value:NoSchedule</code></li>
          <li><strong>Toleration Example (Pod spec):</strong></li>
        </ul>
        <pre><code>tolerations:
  - key: "key"
    operator: "Equal"
    value: "value"
    effect: "NoSchedule"</code></pre>
        <p><strong>Use Case:</strong> Isolate workloads — e.g., GPU workloads only run on GPU node pool, not on system nodes.</p>
        <p><strong>In Practice:</strong> I taint system nodes with <code>CriticalAddonsOnly=true:NoSchedule</code> and apply tolerations to system Pods only.</p>
      </div>`
      },
      {
        question: "What are common issues with pod scheduling (Pending state, Evicted Pods)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Pod Scheduling Issues — Causes & Fixes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Pending Pods:</strong> Scheduler can’t find a suitable node.
            <ul>
              <li>🔹 Not enough CPU/Memory.</li>
              <li>🔹 Node taints without matching tolerations.</li>
              <li>🔹 PVC can’t bind (storage issue).</li>
              <li>🔹 Node selectors/affinities too restrictive.</li>
            </ul>
          </li>
          <li><strong>Evicted Pods:</strong> Node runs out of resources or disk.
            <ul>
              <li>🔹 Check <code>kubectl describe pod</code> for eviction reason.</li>
              <li>🔹 Increase node size or add more nodes.</li>
              <li>🔹 Clean up unused images/logs on node.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Monitor and <code>kubectl get events --sort-by=.metadata.creationTimestamp</code> to trace exact scheduling bottlenecks.</p>
      </div>`
      },
      {
        question: "How do you monitor the health of AKS nodes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩺 <strong>Node Health Monitoring in AKS</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>kubectl get nodes -o wide</strong> and <strong>kubectl describe node</strong> for status.</li>
          <li>Check node metrics in <strong>Azure Monitor for Containers</strong> or <strong>Log Analytics</strong>.</li>
          <li>Enable <strong>Azure Policy</strong> for node compliance and drift detection.</li>
          <li>Use <strong>Node Problem Detector (NPD)</strong> DaemonSet for kernel/disk/network issues.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor node CPU/memory pressure alerts in Azure Monitor and trigger auto-scaling or draining scripts accordingly.</p>
      </div>`
      },
      {
        question: "How do you upgrade AKS clusters safely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⬆️ <strong>Safe AKS Cluster Upgrades</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Review available versions:
            <pre><code>az aks get-upgrades -n myAKS -g myRG</code></pre>
          </li>
          <li>Backup manifests & verify CI/CD rollback support.</li>
          <li>Drain and upgrade node pools one by one:
            <pre><code>az aks nodepool upgrade --cluster-name myAKS -g myRG -n apppool --kubernetes-version 1.30.3</code></pre>
          </li>
          <li>Validate workloads post-upgrade and check node health.</li>
        </ol>
        <p><strong>In Practice:</strong> I perform upgrades in non-prod first, use <strong>Blue-Green node pools</strong> for production zero-downtime upgrades.</p>
      </div>`
      },
      {
        question: "How do you drain nodes safely before upgrade?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Safe Node Draining</strong></h3>
        <p>Before upgrading or decommissioning a node, drain workloads safely:</p>
        <pre><code>kubectl drain node-name --ignore-daemonsets --delete-emptydir-data</code></pre>
        <ul style="margin-left:1.2rem;">
          <li><strong>--ignore-daemonsets:</strong> Keeps system Pods running (e.g., kube-proxy).</li>
          <li><strong>--delete-emptydir-data:</strong> Deletes ephemeral storage data safely.</li>
        </ul>
        <p>After upgrade, uncordon the node to allow scheduling:</p>
        <pre><code>kubectl uncordon node-name</code></pre>
        <p><strong>In Practice:</strong> I drain nodes in rolling batches and use <strong>PodDisruptionBudgets (PDB)</strong> to avoid downtime.</p>
      </div>`
      },
      {
        question: "How do you handle image caching and OS patching in AKS nodes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Image Caching & OS Patching</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Image Caching:</strong>
            <ul>
              <li>Use <strong>Azure Container Registry (ACR)</strong> close to AKS region for faster pulls.</li>
              <li>Leverage <strong>AKS Node Image Cache</strong> or <code>crictl pull</code> preloads.</li>
              <li>For CI/CD: pre-pull base images during deployment warmup jobs.</li>
            </ul>
          </li>
          <li><strong>OS Patching:</strong>
            <ul>
              <li>AKS automatically handles <strong>node OS security updates</strong> via Azure-managed images.</li>
              <li>For manual patching:
                <pre><code>az aks nodepool upgrade --node-image-only</code></pre>
              </li>
              <li>Recreates VMs with the latest patched OS image without affecting K8s version.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In Practice:</strong> I schedule monthly OS image upgrades and automate image pulls in pipelines to reduce cold-start latency.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. RBAC & Security",
    questions: [
      {
        question: "What is RBAC (Role-Based Access Control) in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>RBAC — Role-Based Access Control</strong></h3>
        <p>RBAC is Kubernetes' authorization model that grants permissions to users, groups, or service accounts by binding them to <strong>Roles</strong> or <strong>ClusterRoles</strong>. It enforces <em>who</em> can do <em>what</em> on which resources.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Role</strong> – namespaced permissions (e.g., allow pods in namespace foo).</li>
          <li><strong>ClusterRole</strong> – cluster-wide permissions (e.g., view nodes).</li>
          <li><strong>RoleBinding</strong> / <strong>ClusterRoleBinding</strong> – attach role to subject (user/serviceAccount/group).</li>
        </ul>
        <p><strong>In Practice:</strong> I use RBAC to separate CI/CD bot permissions (deploy only) from human admin permissions (cluster-level ops).</p>
      </div>`
      },
      {
        question: "How do you configure RBAC roles and bindings?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Configure Roles & Bindings</strong></h3>
        <p>Define a Role or ClusterRole YAML and bind it to subjects using RoleBinding/ClusterRoleBinding.</p>
        <pre><code># Role (namespace-scoped)
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-deployer
  namespace: prod
rules:
- apiGroups: [""]
  resources: ["pods","services","deployments"]
  verbs: ["get","list","create","update","patch"]

# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: bind-deployer
  namespace: prod
subjects:
- kind: ServiceAccount
  name: ci-bot
  namespace: ci
roleRef:
  kind: Role
  name: app-deployer
  apiGroup: rbac.authorization.k8s.io
</code></pre>
        <p><strong>Tip:</strong> Use <code>kubectl auth can-i</code> to validate permissions.</p>
      </div>`
      },
      {
        question: "How do you implement least privilege access in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Least Privilege — Practical Steps</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Apply the principle of least privilege: grant only required verbs (e.g., <code>get,list,watch</code> vs <code>create,delete</code>).</li>
          <li>Use <strong>namespaces</strong> to isolate teams/environments.</li>
          <li>Use <strong>service accounts</strong> for automation (CI/CD) and avoid using user tokens.</li>
          <li>Prefer <strong>ClusterRoles</strong> only when truly necessary — otherwise use namespaced Roles.</li>
          <li>Use Azure AD integration (or Azure RBAC) to manage human access centrally and enforce MFA/SSO.</li>
          <li>Regularly audit (via Azure Monitor / Kubernetes audit logs) and review role bindings.</li>
        </ul>
        <p><strong>In Practice:</strong> I create scoped roles for pipelines (image-pull, deploy to a specific namespace) and rotate service account tokens or use federated identities.</p>
      </div>`
      },
      {
        question: "What are Network Policies and how do you use them to restrict Pod-to-Pod communication?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Network Policies — Network-level Access Control</strong></h3>
        <p>NetworkPolicy objects define allowed ingress/egress traffic for selected pods. They are implemented by the cluster CNI (e.g., Calico, Azure CNI).</p>
        <pre><code>kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: deny-by-default
  namespace: prod
spec:
  podSelector: {}        # selects all pods
  policyTypes:
  - Ingress
  - Egress
  ingress: []           # deny all ingress by default</code></pre>
        <p><strong>Usage:</strong> Start with default-deny and explicitly allow needed traffic (namespace-to-namespace or pod-to-pod).</p>
      </div>`
      },
      {
        question: "What kind of network policies have you implemented for security?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Practical NetworkPolicy Patterns I've Used</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Default-deny:</strong> Deny all traffic, then open only required ports/endpoints.</li>
          <li><strong>Namespace isolation:</strong> Allow traffic only from specific namespaces (eg. <code>frontend</code> → <code>backend</code>).</li>
          <li><strong>DB access control:</strong> Only allow queries from specific service accounts or backend pods to DB pods.</li>
          <li><strong>Egress restrictions:</strong> Block external internet access from sensitive workloads; allow via proxy instead.</li>
          <li><strong>Calico advanced policies:</strong> Use Calico network sets and globalNetworkPolicy for cross-namespace rules.</li>
        </ul>
        <p><strong>In Practice:</strong> I implemented default-deny + selective ingress for PCI-sensitive workloads and enforced policies via CI validation (policy-as-code).</p>
      </div>`
      },
      {
        question: "How do you integrate Azure AD authentication with AKS for RBAC?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Azure AD Integration with AKS (User Authentication)</strong></h3>
        <p>Integrating AKS with Azure AD centralizes user authentication (SSO) and lets you map Azure AD identities to Kubernetes RBAC.</p>
        <ol style="margin-left:1.2rem;">
          <li>Create an AKS cluster with AAD enabled or enable AAD on an existing cluster (<code>--enable-aad</code> / managed AAD).</li>
          <li>Grant Azure AD users/groups cluster roles using <code>kubectl create clusterrolebinding</code> or via Azure RBAC for Kubernetes.</li>
          <li>Use Azure CLI or kubectl with Azure AD tokens to authenticate; leverage Azure AD conditional access and MFA.</li>
        </ol>
        <pre><code># Example: bind an AAD group to cluster-admin (not recommended for prod)
az aks create ... --enable-aad

kubectl create clusterrolebinding aad-admin-binding \\
  --clusterrole=cluster-admin \\
  --user="AzureADGroupObjectId" </code></pre>
        <p><strong>Best Practice:</strong> Use Azure AD groups → map to minimally scoped Kubernetes Roles, avoid granting broad cluster-admin.</p>
        <p><strong>In Practice:</strong> I use managed AAD and Azure RBAC integration so admins are managed in Azure AD, and Kubernetes permissions are assigned via role bindings and Azure policies.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Logging, Monitoring & Troubleshooting",
    questions: [
      {
        question: "What command is used to check Pod logs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Checking Pod Logs</strong></h3>
        <p>Use <code>kubectl logs</code> to view container logs inside a Pod.</p>
        <pre><code># Logs of a running Pod
kubectl logs my-pod

# Logs of a specific container inside Pod
kubectl logs my-pod -c container-name

# Stream logs (real-time)
kubectl logs -f my-pod</code></pre>
        <p><strong>In Practice:</strong> I often use <code>-n namespace</code> and <code>--previous</code> to debug recently crashed containers.</p>
      </div>`
      },
      {
        question: "What are commands to troubleshoot Pod-related issues?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Troubleshooting Pod Issues</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>kubectl describe pod &lt;pod&gt;</code> → Inspect events, status, and reasons for failure.</li>
          <li><code>kubectl get pods -o wide</code> → Check node assignment and status.</li>
          <li><code>kubectl exec -it &lt;pod&gt; -- /bin/sh</code> → Debug inside container.</li>
          <li><code>kubectl get events --sort-by='.metadata.creationTimestamp'</code> → See recent events.</li>
        </ul>
        <p><strong>In Practice:</strong> I start with <code>kubectl describe</code> to identify scheduling or image errors, then exec for runtime debugging.</p>
      </div>`
      },
      {
        question: "How do you debug a Pod stuck in CrashLoopBackOff?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💥 <strong>CrashLoopBackOff Debugging</strong></h3>
        <p>This happens when a container repeatedly crashes after startup.</p>
        <ol style="margin-left:1.2rem;">
          <li>Check logs using <code>kubectl logs --previous</code>.</li>
          <li>Describe Pod (<code>kubectl describe pod &lt;pod&gt;</code>) for reasons/events.</li>
          <li>Inspect startup scripts, env vars, config mounts for issues.</li>
          <li>Increase restart delay or probe thresholds if initialization takes time.</li>
          <li>Temporarily override command using <code>kubectl debug</code> or edit deployment.</li>
        </ol>
        <p><strong>In Practice:</strong> I usually find env misconfigurations or missing secrets behind CrashLoopBackOffs.</p>
      </div>`
      },
      {
        question: "How do you debug a Pod stuck in ImagePullBackOff?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖼️ <strong>ImagePullBackOff Debugging</strong></h3>
        <p>Occurs when Kubernetes cannot pull the container image from the registry.</p>
        <ul style="margin-left:1.2rem;">
          <li>Check <code>kubectl describe pod</code> → Look for “Failed to pull image” reason.</li>
          <li>Verify image name/tag correctness.</li>
          <li>Ensure registry credentials (imagePullSecrets) are correct.</li>
          <li>Check network connectivity to registry (firewall/proxy).</li>
          <li>For ACR → ensure AKS is linked with proper permissions (<code>az aks update --attach-acr</code>).</li>
        </ul>
        <p><strong>In Practice:</strong> Most issues stem from missing imagePullSecrets or typo in image tags.</p>
      </div>`
      },
      {
        question: "What is your approach when Pods are being Evicted due to node pressure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Handling Pod Evictions (Node Pressure)</strong></h3>
        <p>Evictions occur when a node runs out of CPU, memory, or disk.</p>
        <ul style="margin-left:1.2rem;">
          <li>Check reason using <code>kubectl describe pod</code> (e.g., “Evicted: node had memory pressure”).</li>
          <li>Inspect node usage via <code>kubectl top nodes</code> or Azure Monitor.</li>
          <li>Scale cluster or add node pools.</li>
          <li>Set <strong>resource requests/limits</strong> to prevent overcommit.</li>
          <li>Use <strong>PodPriority</strong> to protect critical workloads.</li>
        </ul>
        <p><strong>In Practice:</strong> I enable cluster autoscaler and define QoS classes to avoid frequent evictions.</p>
      </div>`
      },
      {
        question: "How do you integrate Prometheus and Grafana with AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Prometheus & Grafana Integration</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Install using Helm charts or kube-prometheus-stack.</li>
          <li>Expose Prometheus via ServiceMonitor and scrape metrics.</li>
          <li>Connect Grafana to Prometheus as data source.</li>
          <li>Use prebuilt dashboards for node, pod, and namespace-level metrics.</li>
        </ol>
        <pre><code>helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring</code></pre>
        <p><strong>In Practice:</strong> I use Grafana dashboards to monitor pod CPU/memory and set alerts integrated with Slack or Azure Monitor.</p>
      </div>`
      },
      {
        question: "How do you configure monitoring using Azure Monitor for Containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Azure Monitor for Containers</strong></h3>
        <p>Azure Monitor automatically collects metrics and logs from AKS when enabled during cluster creation or later via CLI/portal.</p>
        <ul style="margin-left:1.2rem;">
          <li>Enable using <code>az aks enable-addons --addons monitoring</code>.</li>
          <li>Stores logs in Log Analytics Workspace.</li>
          <li>Provides metrics: CPU, memory, node utilization, container restarts.</li>
          <li>Supports alerts and workbooks for visualization.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate it with Application Insights and enable container-level log collection.</p>
      </div>`
      },
      {
        question: "How do you check metrics and alerts for Pod performance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📉 <strong>Pod Performance Metrics</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>kubectl top pod</code> – for real-time CPU/memory.</li>
          <li>Prometheus/Grafana dashboards – for trends and alerts.</li>
          <li>Azure Monitor Metrics – for cluster-wide visibility.</li>
          <li>Define alerts for high CPU/memory, restarts, or latency.</li>
        </ul>
        <p><strong>In Practice:</strong> I create Grafana alerts on sustained high CPU for autoscaling and integrate alerts via Teams or Slack.</p>
      </div>`
      },
      {
        question: "How do you analyze logs in a multi-namespace cluster?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📂 <strong>Log Analysis Across Namespaces</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <code>kubectl logs -n &lt;namespace&gt;</code> for individual namespaces.</li>
          <li>Aggregate logs with tools like <strong>ELK Stack (ElasticSearch, Logstash, Kibana)</strong> or <strong>Fluent Bit</strong>.</li>
          <li>Azure Monitor / Log Analytics → Query across namespaces using KQL.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Fluent Bit → Log Analytics to centralize all pod logs and query by namespace, app, or severity.</p>
      </div>`
      },
      {
        question: "How do you investigate 503 or timeout errors from Kubernetes services?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕵️‍♂️ <strong>Investigating 503 / Timeout Issues</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Check service endpoints (<code>kubectl get endpoints svc-name</code>).</li>
          <li>Ensure pods are healthy and passing readiness probes.</li>
          <li>Verify Ingress and DNS routing (Ingress logs, kube-proxy status).</li>
          <li>Look for network policy blocks or node-level connection drops.</li>
          <li>Check backend app logs for connection timeouts or thread pool exhaustion.</li>
        </ol>
        <p><strong>In Practice:</strong> Most 503s occur due to readiness probe failures or misconfigured Ingress path matching.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Integration with Azure Services",
    questions: [
      {
        question: "How do you connect AKS with ACR (Azure Container Registry)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Connecting AKS with ACR</strong></h3>
        <p>To allow AKS to pull container images from Azure Container Registry securely, you link the cluster with ACR permissions.</p>
        <ol style="margin-left:1.2rem;">
          <li>Assign ACR Pull Role using CLI:</li>
        </ol>
        <pre><code>az aks update \\ 
  --name myAKSCluster \\ 
  --resource-group myResourceGroup \\ 
  --attach-acr myACRName</code></pre>
        <p>This grants AKS-managed identity the <strong>AcrPull</strong> role on the registry.</p>
        <p><strong>In Practice:</strong> I prefer using <code>--attach-acr</code> for simplicity, but for enterprise setups, I create dedicated identities with least privileges.</p>
      </div>`
      },
      {
        question: "How do you integrate AKS with Azure Key Vault for secret injection?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Integrating AKS with Azure Key Vault</strong></h3>
        <p>Use <strong>Secrets Store CSI Driver</strong> + <strong>Azure Key Vault Provider</strong> to mount Key Vault secrets directly into AKS pods.</p>
        <ol style="margin-left:1.2rem;">
          <li>Enable add-on or install via Helm:</li>
        </ol>
        <pre><code>az aks enable-addons \\
  --addons azure-keyvault-secrets-provider \\
  --name myAKSCluster \\
  --resource-group myRG</code></pre>
        <p>Then define a <strong>SecretProviderClass</strong> YAML to specify Key Vault and secrets to mount.</p>
        <pre><code>secretObjects:
- secretName: app-secrets
  type: Opaque
  data:
  - objectName: db-password
    key: db-password</code></pre>
        <p><strong>In Practice:</strong> I mount secrets as volumes or sync them as Kubernetes secrets depending on app design.</p>
      </div>`
      },
      {
        question: "How do you integrate Azure Monitor or Log Analytics for cluster health?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Monitoring AKS with Azure Monitor</strong></h3>
        <p>Azure Monitor for Containers provides deep visibility into AKS cluster performance and logs.</p>
        <ol style="margin-left:1.2rem;">
          <li>Enable monitoring during or after cluster creation:</li>
        </ol>
        <pre><code>az aks enable-addons \\
  --addons monitoring \\
  --name myAKSCluster \\
  --resource-group myRG</code></pre>
        <p>Logs and metrics flow into <strong>Log Analytics Workspace</strong>, which can be queried using KQL.</p>
        <p><strong>In Practice:</strong> I integrate it with custom alerts (CPU > 80%, Pod restarts, latency spikes) and dashboards for proactive ops.</p>
      </div>`
      },
      {
        question: "How do you configure Azure Policy for AKS compliance?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Azure Policy for AKS Compliance</strong></h3>
        <p>Azure Policy enforces governance across AKS — e.g., restricting privileged pods, enforcing TLS, or requiring approved images.</p>
        <ol style="margin-left:1.2rem;">
          <li>Enable the add-on:</li>
        </ol>
        <pre><code>az aks enable-addons \\
  --addons azure-policy \\
  --name myAKSCluster \\
  --resource-group myRG</code></pre>
        <p>Policies can be assigned at subscription or cluster scope via Azure Portal or Policy as Code (ARM/Bicep).</p>
        <p><strong>In Practice:</strong> I use built-in AKS policy initiatives and monitor non-compliant resources in Defender for Cloud.</p>
      </div>`
      },
      {
        question: "How did you integrate CI/CD pipelines with AKS deployments?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>CI/CD Integration with AKS</strong></h3>
        <p>Integrate AKS with Azure DevOps or GitHub Actions for automated build, test, and deploy workflows.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>CI Stage:</strong> Build & push Docker image to ACR.</li>
          <li><strong>CD Stage:</strong> Deploy manifests/Helm charts to AKS using service connection.</li>
        </ul>
        <pre><code># Example (Azure DevOps YAML)
- task: Kubernetes@1
  displayName: Deploy to AKS
  inputs:
    connectionType: 'Azure Resource Manager'
    azureSubscription: 'MySub'
    azureResourceGroup: 'myRG'
    kubernetesCluster: 'myAKSCluster'
    namespace: 'prod'
    command: 'apply'
    useConfigurationFile: true
    configuration: 'manifests/deployment.yaml'</code></pre>
        <p><strong>In Practice:</strong> I integrate Helm in pipelines for versioned, parameterized AKS deployments with rollback support.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "13. Real-World Scenarios",
    questions: [
      {
        question: "A critical production AKS cluster is having multiple issues — Pods in ImagePullBackOff, Evicted, users getting 503. → What troubleshooting steps would you follow?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🆘 <strong>Immediate Troubleshooting Playbook (Triage → Fix → Validate)</strong></h3>
        <p>When multiple symptoms appear (ImagePullBackOff, Evicted pods, and 503s) follow a structured triage:</p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Establish scope & impact:</strong> Which namespaces / services are affected? Check ingress/controller status and alerting channels.</li>
          <li><strong>Check cluster-wide health:</strong>
            <pre><code>kubectl get nodes
kubectl get pods --all-namespaces -o wide</code></pre>
            Determine node NotReady, many CrashLoopBackOffs, or resource pressure.
          </li>
          <li><strong>Investigate ImagePullBackOff:</strong>
            <pre><code>kubectl describe pod <pod> -n <ns>    # look for Failed to pull image
kubectl get secret -n <ns>                      # check imagePullSecrets</code></pre>
            Common causes: wrong image name/tag, missing imagePullSecrets, ACR auth missing, registry outage, or network egress blocked.
          </li>
          <li><strong>Investigate Evicted pods:</strong>
            <pre><code>kubectl describe pod <evicted-pod> -n <ns></code></pre>
            Check events for node pressure reasons (memory/disk). Inspect node DiskPressure / MemoryPressure via <code>kubectl describe node</code> and <code>kubectl top nodes</code>.
          </li>
          <li><strong>Investigate 503 / user-facing errors:</strong>
            <pre><code>kubectl get endpoints svc-name -n <ns>
kubectl describe ingress <ingress> -n <ns>
kubectl logs <ingress-controller-pod> -n ingress-nginx</code></pre>
            503s often due to no healthy endpoints (readiness failed), ingress misconfiguration, or upstream pods crashing.
          </li>
          <li><strong>Correlate timing & metrics:</strong> Use Prometheus / Azure Monitor to see spikes in CPU/memory, pod restarts, node scale events, or network issues around the incident time.</li>
          <li><strong>Fix order (quick wins first):</strong>
            <ul style="margin-left:1.2rem;">
              <li>If ImagePullBackOff due to auth → re-attach ACR or fix imagePullSecrets (temporary: manually docker login on node for testing).</li>
              <li>If eviction due to node pressure → cordon & drain problematic nodes, scale node pool or increase capacity.</li>
              <li>If readiness probes failing → check app logs, env/config, or missing secrets; fix and let readiness restore endpoints.</li>
            </ul>
          </li>
          <li><strong>Validate & close:</strong> Confirm endpoints healthy, ingress returns 200, monitor alerts for stabilization.</li>
          <li><strong>Post-mortem:</strong> Capture root causes, timeline, and follow-up actions (capacity, image pipeline, secrets, network).</li>
        </ol>
        <p><strong>Example quick commands:</strong></p>
        <pre><code>kubectl get pods --all-namespaces -o custom-columns=NAMESPACE:.metadata.namespace,NAME:.metadata.name,STATUS:.status.phase,RESTARTS:.status.containerStatuses[*].restartCount
kubectl describe pod <pod> -n <ns>
kubectl logs <pod> -c <container> -n <ns> --previous</code></pre>
      </div>`
      },
      {
        question: "A critical production AKS cluster is having multiple issues — Pods in ImagePullBackOff, Evicted, users getting 503. → How do you prevent this in the future?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Preventive Measures & Hardening</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Authentication & image pipeline:</strong> Use managed identities / <code>az aks update --attach-acr</code> or ensure imagePullSecrets are rotated and stored in Key Vault; implement image promotion pipeline to avoid bad tags in prod.</li>
          <li><strong>Resource management:</strong> Enforce requests & limits for all pods; use Quality of Service classes; set appropriate Horizontal Pod Autoscaler and Cluster Autoscaler configs.</li>
          <li><strong>Node sizing & capacity planning:</strong> Use node pools for workload isolation (system vs app vs GPU); sustain buffer capacity for spikes and have scale-up cooldowns tuned.</li>
          <li><strong>Readiness & liveness tuning:</strong> Configure realistic initialDelaySeconds/periodSeconds/failureThreshold to avoid premature evictions or routing to unhealthy pods.</li>
          <li><strong>Monitoring & alerting:</strong> Alerts for image pull failures, node disk/ memory pressure, high pod restart rate, and zero endpoints for services.</li>
          <li><strong>Immutability & image tagging:</strong> Use immutable tags (sha digest) for prod, avoid :latest; enforce CI gates that test image pullability and security scanning.</li>
          <li><strong>Network resilience:</strong> Ensure required egress to registries, use retry/backoff in apps, and implement circuit-breakers in ingress or service mesh.</li>
          <li><strong>Backups & runbooks:</strong> Automate etcd snapshots and keep runbooks for common failure modes (ImagePullBackOff, Evictions, 503s) with concrete commands and escalation paths.</li>
        </ol>
        <p><strong>In Practice:</strong> I combine policy-as-code (validate manifests), image scanning, proactive capacity scaling, and runbook drills to reduce recurrence.</p>
      </div>`
      },
      {
        question: "You haven’t used NodePort before — can you explain how it works?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔌 <strong>NodePort — Exposing Service on Node Ports</strong></h3>
        <p><strong>What it is:</strong> NodePort opens a static port (range 30000–32767) on every cluster node and forwards traffic to the Service → Pod.</p>
        <p><strong>How it works:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Kubernetes allocates a port on each node. Traffic to NodeIP:NodePort is forwarded to the Service's backend pods via kube-proxy.</li>
          <li>Useful for simple access during development or when external load balancer is not available.</li>
        </ul>
        <p><strong>When to use:</strong> Temporary testing, bare-metal clusters without cloud LB, or for debugging when you want to hit a node directly.</p>
        <p><strong>Limitations:</strong> Not ideal for production — no built-in external LB, port management overhead, and potential security exposure. Prefer Ingress/LoadBalancer for production.</p>
      </div>`
      },
      {
        question: "What resources have you created in Kubernetes (Deployments, Services, Ingress, PVCs, ConfigMaps, Secrets, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Common Resources I Create & Manage</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Workloads:</strong> Deployments, StatefulSets, DaemonSets, CronJobs</li>
          <li><strong>Networking:</strong> Services (ClusterIP, NodePort, LoadBalancer), Ingress resources, Ingress Controllers (NGINX/Traefik), NetworkPolicies</li>
          <li><strong>Storage:</strong> PersistentVolumeClaims (PVC), StorageClasses, volumeClaimTemplates in StatefulSets</li>
          <li><strong>Configuration:</strong> ConfigMaps, Secrets (and Secrets Store CSI integrations)</li>
          <li><strong>Infra & ops:</strong> ServiceAccounts, RBAC Roles & RoleBindings, PodDisruptionBudgets, HorizontalPodAutoscalers</li>
          <li><strong>Observability:</strong> ServiceMonitors, Prometheus CRs, Fluent Bit/Fluentd DaemonSets</li>
        </ul>
        <p><strong>In Practice:</strong> I design manifests + Helm charts to manage these resources consistently across environments with parameterized values.yaml.</p>
      </div>`
      },
      {
        question: "You are asked to restrict traffic between namespaces — how do you design the policy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Designing Namespace-Isolation NetworkPolicy</strong></h3>
        <p>Goal: default-deny cross-namespace communication, allow only explicit flows.</p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Start default-deny:</strong> Apply a default deny NetworkPolicy in each namespace.</li>
          <li><strong>Define required allow rules:</strong> Create namespace-scoped NetworkPolicies that allow ingress only from specific namespaces or label selectors (e.g., frontend → backend).</li>
          <li><strong>Use labels & service accounts:</strong> Allow by podSelector or by namespace + pod labels to be precise.</li>
          <li><strong>Test incrementally:</strong> Apply policies in staging first and run integration tests.</li>
          <li><strong>Guard with CI validation:</strong> Lint network policies and run conformance tests as part of CI to avoid breaking deployments.</li>
        </ol>
        <pre><code>kind: NetworkPolicy
apiVersion: networking.k8s.io/v1
metadata:
  name: allow-frontend-to-backend
  namespace: backend
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: frontend</code></pre>
        <p><strong>In Practice:</strong> I implement a policy matrix (who can talk to whom) and codify it in Git for reviews and audits.</p>
      </div>`
      },
      {
        question: "You need to deploy a backend API and a frontend app with secure communication — how do you design it in AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure Backend + Frontend Design on AKS</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Architecture:</strong>
            <ul style="margin-left:1.2rem;">
              <li>Frontend deployed as Deployment + Service (ClusterIP) behind an Ingress for external traffic.</li>
              <li>Backend deployed as Deployment + Service (ClusterIP) — only reachable from frontend namespace or specific clients.</li>
            </ul>
          </li>
          <li><strong>Ingress & TLS:</strong> Use Ingress Controller (NGINX/AGIC) + cert-manager to provision TLS via Let's Encrypt or use Azure Front Door for WAF and global LB. Terminate TLS at Ingress and optionally re-encrypt to backend.</li>
          <li><strong>Authentication & Secrets:</strong> Store DB credentials, API keys in Azure Key Vault and mount via Secrets Store CSI Driver. Use managed identities for AKS to access Key Vault.</li>
          <li><strong>Network security:</strong> Enforce NetworkPolicies: allow ingress to backend only from frontend pods. Use private AKS + private ACR if required.</li>
          <li><strong>Service-to-service auth:</strong> Use mTLS with service mesh (Istio/Linkerd) or JWT tokens validated by backend. Prefer short-lived tokens and OIDC providers.</li>
          <li><strong>CI/CD & image security:</strong> Build images in CI, scan them (Snyk/Trivy), push to ACR, and deploy via Helm with image tags pinned to digests.</li>
          <li><strong>Observability & resilience:</strong> Add readiness/liveness probes, HPA, resource requests/limits, Prometheus metrics, centralized logging, and alerting for latency/5xx rates.</li>
        </ol>
        <p><strong>Example points of configuration:</strong></p>
        <pre><code># Ingress TLS (snippet)
tls:
- hosts:
  - app.example.com
  secretName: app-tls

# NetworkPolicy: allow only frontend namespace
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: frontend</code></pre>
        <p><strong>In Practice:</strong> I deploy frontend + backend in separate namespaces, use Ingress for TLS, Key Vault for secrets, NetworkPolicies for isolation, and add automated CI gates and canary rollouts for safe deployment.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Common Azure-Specific Scenarios",
    questions: [
      {
        question: "How do you deploy K8s on Azure AKS (basic flow)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>AKS Deployment Flow (End-to-End)</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Create resource group:</strong> <code>az group create --name aks-rg --location eastus</code></li>
          <li><strong>Create AKS cluster:</strong> 
            <pre><code>az aks create \
  --resource-group aks-rg \
  --name myAKSCluster \
  --node-count 2 \
  --enable-addons monitoring \
  --generate-ssh-keys</code></pre>
          </li>
          <li><strong>Get kubeconfig:</strong> <code>az aks get-credentials --resource-group aks-rg --name myAKSCluster</code></li>
          <li><strong>Verify connection:</strong> <code>kubectl get nodes</code></li>
          <li><strong>Deploy apps:</strong> Apply YAML manifests or Helm charts using <code>kubectl apply -f</code> or <code>helm install</code>.</li>
          <li><strong>Expose services:</strong> Use <code>Service type=LoadBalancer</code> or <code>Ingress</code> for external access.</li>
        </ol>
        <p><strong>In Practice:</strong> I automate this via Terraform or Azure DevOps pipeline for consistent and repeatable provisioning.</p>
      </div>`
      },
      {
        question: "Where do you scale App Service or VMs, and why do we specify default instance count?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📈 <strong>Scaling in Azure — App Service vs VMs</strong></h3>
        <p><strong>App Service Scaling:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Scaling happens in the <strong>App Service Plan</strong>.</li>
          <li>Supports <strong>manual</strong> and <strong>auto-scaling</strong> based on metrics like CPU, memory, HTTP queue length, etc.</li>
          <li><strong>Default instance count</strong> ensures minimum availability — even when scale-down occurs.</li>
        </ul>
        <p><strong>VM Scale Sets (VMSS):</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>VMSS auto-scales based on rules or Azure Monitor metrics.</li>
          <li>Default instance count defines base capacity (to handle normal load).</li>
        </ul>
        <p><strong>In Practice:</strong> I keep 2–3 minimum instances in prod to ensure HA, then autoscale based on load.</p>
      </div>`
      },
      {
        question: "Suppose you select Service type = LoadBalancer — which Azure Load Balancer (Basic or Standard) is created in the background?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Azure Load Balancer Type behind AKS Services</strong></h3>
        <p>By default, AKS (new clusters) uses the <strong>Standard Load Balancer</strong> when you expose a service as <code>type: LoadBalancer</code>.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Standard LB</strong> → Default for all AKS clusters (since 2020+). Supports HA, multiple backend pools, and secure IP-based access.</li>
          <li><strong>Basic LB</strong> → Deprecated for AKS; used only in older clusters or explicitly configured.</li>
        </ul>
        <p><strong>Verification:</strong></p>
        <pre><code>az network lb list --resource-group MC_*_aks-rg --output table</code></pre>
        <p><strong>In Practice:</strong> Always prefer Standard LB — it supports zones, private IPs, and better SLAs.</p>
      </div>`
      },
      {
        question: "How do you configure Azure Monitor with AKS?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>AKS Monitoring via Azure Monitor</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Enable monitoring during cluster creation:</strong>
            <pre><code>az aks create --enable-addons monitoring --workspace-resource-id &lt;LogAnalyticsWorkspaceId&gt;</code></pre>
          </li>
          <li><strong>Or enable later:</strong>
            <pre><code>az aks enable-addons -a monitoring -n myAKSCluster -g aks-rg</code></pre>
          </li>
          <li><strong>Azure Monitor collects:</strong>
            <ul style="margin-left:1.2rem;">
              <li>Container logs (stdout/stderr)</li>
              <li>Node metrics (CPU, memory, disk, network)</li>
              <li>Kubernetes events and health states</li>
            </ul>
          </li>
          <li><strong>Access:</strong> Go to <em>Azure Portal → AKS → Insights</em> to view cluster, node, and container health dashboards.</li>
          <li><strong>Custom alerts:</strong> Create alerts in Log Analytics using Kusto queries (e.g., pod restarts, high CPU, etc.).</li>
        </ol>
        <p><strong>In Practice:</strong> I pair Azure Monitor with Prometheus/Grafana for custom dashboards and fine-grained alerting.</p>
      </div>`
      },
      {
        question: "How do you recover from a partial deployment failure in AKS via DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Recovery Strategy for Partial AKS Deployment Failures</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Detect failure early:</strong> CI/CD pipeline should fail fast — use exit codes and <code>kubectl rollout status</code> checks.</li>
          <li><strong>Rollback:</strong> Use Helm rollback or kubectl rollout undo:
            <pre><code>kubectl rollout undo deployment/my-app -n prod</code></pre>
          </li>
          <li><strong>Validate previous version:</strong> Check application health, logs, and endpoints post-rollback.</li>
          <li><strong>Fix pipeline issue:</strong> Identify YAML error, image issue, or resource conflict from pipeline logs.</li>
          <li><strong>Redeploy safely:</strong> Re-run pipeline with corrected manifests or Helm chart values.</li>
          <li><strong>Prevent future issues:</strong>
            <ul style="margin-left:1.2rem;">
              <li>Use <strong>helm --atomic</strong> (auto rollback on failure)</li>
              <li>Enable pipeline checkpoints and artifact versioning</li>
              <li>Apply changes via canary or blue-green strategy</li>
            </ul>
          </li>
        </ol>
        <p><strong>In Practice:</strong> My pipelines validate manifests (with kubeval/kube-linter) and use Helm atomic installs to self-recover safely.</p>
      </div>`
      },
      {
        question: "How do you load balance applications running in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Load Balancing in Kubernetes (AKS)</strong></h3>
        <p><strong>Internal Load Balancing:</strong> Within cluster via kube-proxy — Service type <code>ClusterIP</code> balances traffic to Pods using round robin.</p>
        <p><strong>External Load Balancing:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Service type=LoadBalancer</strong> → Creates Azure Load Balancer (Standard) automatically.</li>
          <li><strong>Ingress Controller</strong> → Handles HTTP/HTTPS load balancing, routing based on host/path rules.</li>
        </ul>
        <p><strong>Best Practice:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Ingress</strong> for web apps (layer 7)</li>
          <li>Use <strong>Service type=LoadBalancer</strong> for TCP/UDP workloads</li>
          <li>For internal-only services, use <code>internal: true</code> annotation on LoadBalancer Service</li>
        </ul>
        <p><strong>In Practice:</strong> I typically use AGIC (Azure Application Gateway Ingress Controller) for secure HTTPS traffic and path-based routing.</p>
      </div>`
      },
      {
        question: "What is the difference between Azure Web Apps and AKS for container hosting?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Azure Web Apps vs AKS — Container Hosting Comparison</strong></h3>
        <table border="1" style="border-collapse:collapse; margin:1rem 0;">
          <tr><th>Feature</th><th>Azure Web App (for Containers)</th><th>Azure Kubernetes Service (AKS)</th></tr>
          <tr><td><strong>Use Case</strong></td><td>Single container or lightweight microservice hosting</td><td>Large-scale microservices, orchestrated workloads</td></tr>
          <tr><td><strong>Scaling</strong></td><td>Built-in auto-scale (App Service Plan)</td><td>Pod/Node auto-scaling via HPA/CA</td></tr>
          <tr><td><strong>Management</strong></td><td>Fully managed (PaaS)</td><td>User-managed control plane (CaaS)</td></tr>
          <tr><td><strong>Networking</strong></td><td>Basic VNet integration</td><td>Advanced — CNI, Network Policies, Ingress, Private endpoints</td></tr>
          <tr><td><strong>CI/CD</strong></td><td>Simple — GitHub or DevOps push triggers</td><td>Complex — Helm charts, pipelines, canary rollouts</td></tr>
          <tr><td><strong>Best For</strong></td><td>Simple web APIs, staging apps</td><td>Enterprise-grade distributed workloads</td></tr>
        </table>
        <p><strong>In Practice:</strong> I choose Web App for low-maintenance APIs; AKS for microservices or workloads needing network isolation, scaling, and control.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "15. Miscellaneous & Cross-Functional",
    questions: [
      {
        question: "What are Services in Kubernetes — explain all types and use cases.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Kubernetes Services — Overview & Use Cases</strong></h3>
        <p>Services in Kubernetes abstract Pod IPs and provide stable endpoints for communication. They enable networking and load balancing between components.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>ClusterIP (default):</strong> Exposes the Service on an internal cluster IP — used for internal communication between Pods.</li>
          <li><strong>NodePort:</strong> Exposes the Service on each node’s IP at a static port — accessible externally via <code>&lt;NodeIP&gt;:&lt;Port&gt;</code>.</li>
          <li><strong>LoadBalancer:</strong> Provisions an external cloud load balancer (e.g., Azure Load Balancer) — ideal for exposing apps to the internet.</li>
          <li><strong>ExternalName:</strong> Maps a Service to an external DNS name — used for legacy or hybrid connections.</li>
          <li><strong>Headless Service:</strong> Used for StatefulSets — provides direct Pod DNS entries without load balancing.</li>
        </ul>
        <p><strong>In Practice:</strong> I use ClusterIP for microservice-to-microservice communication, LoadBalancer for public endpoints, and Headless for databases or stateful apps.</p>
      </div>`
      },
      {
        question: "What is the difference between Ingress and Ingress Controller?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛣️ <strong>Ingress vs Ingress Controller</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Ingress:</strong> Kubernetes API object that defines HTTP/HTTPS routing rules (e.g., host, path-based routing).</li>
          <li><strong>Ingress Controller:</strong> Actual implementation that processes Ingress resources and routes traffic (e.g., NGINX, Azure Application Gateway Ingress Controller).</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>Ingress (rules) → Ingress Controller (executes rules using reverse proxy)</code></pre>
        <p><strong>In Practice:</strong> I commonly use Azure Application Gateway Ingress Controller (AGIC) for production-grade HTTPS routing and TLS termination.</p>
      </div>`
      },
      {
        question: "What is traffic flow from user to Pod using ingress rule?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Ingress Traffic Flow — End to End</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>User Request:</strong> User accesses <code>https://app.company.com</code>.</li>
          <li><strong>DNS Resolution:</strong> DNS points to external Load Balancer IP.</li>
          <li><strong>Ingress Controller:</strong> Load Balancer forwards traffic to Ingress Controller Pod (e.g., NGINX/AGIC).</li>
          <li><strong>Ingress Rule:</strong> Controller matches host/path (e.g., /api → backend-svc).</li>
          <li><strong>Service:</strong> The backend service routes request to one of its Pods (via kube-proxy).</li>
          <li><strong>Pod:</strong> Pod processes request and responds back through the same path in reverse.</li>
        </ol>
        <p><strong>In Practice:</strong> For TLS termination, AGIC or NGINX terminates SSL, and internal traffic continues over HTTP for performance.</p>
      </div>`
      },
      {
        question: "Have you worked on Azure Functions, Service Bus, or Logic Apps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Azure Integration Services — Practical Experience</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure Functions:</strong> Used for event-driven automation — triggers from Event Grid, Service Bus, or HTTP endpoints.</li>
          <li><strong>Service Bus:</strong> Implemented message-based communication between microservices (queue/topic-based decoupling).</li>
          <li><strong>Logic Apps:</strong> Designed workflow orchestration for finance and operations — integrating with Outlook, Teams, and Azure SQL.</li>
        </ul>
        <p><strong>In Practice:</strong> Combined all three — Logic App triggers Azure Function → Function posts to Service Bus → AKS backend processes message asynchronously.</p>
      </div>`
      },
      {
        question: "What deployment method do you use in your CI/CD (YAML, Helm, kubectl, Terraform)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Deployment Strategies in CI/CD</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>YAML Manifests:</strong> Used for simple or static configurations.</li>
          <li><strong>Helm Charts:</strong> Preferred for modular, templated deployments with parameterized values.</li>
          <li><strong>kubectl Apply:</strong> Used in early CI/CD stages or quick patches via scripts.</li>
          <li><strong>Terraform:</strong> Used for provisioning AKS infrastructure + base namespace setup before app deployment.</li>
        </ul>
        <p><strong>In Practice:</strong> My pipelines are multi-stage:
          <br>Stage 1 → Terraform (infra)
          <br>Stage 2 → Helm Deploy (apps)
          <br>Stage 3 → Post-deployment tests + rollout validation.
        </p>
      </div>`
      },
      {
        question: "Have you worked on LLM or AI model deployments using Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>LLM / AI Model Deployments on Kubernetes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Deployed <strong>OpenAI-like models</strong> and <strong>HuggingFace Transformers</strong> in containerized form.</li>
          <li>Used <strong>GPU-enabled node pools</strong> in AKS with <code>nvidia.com/gpu</code> resource limits for inference workloads.</li>
          <li>Implemented <strong>Horizontal Pod Autoscaling</strong> based on custom metrics (QPS, GPU utilization).</li>
          <li>Configured <strong>model volume mounts</strong> for large datasets using Azure Files and Blob Fuse.</li>
          <li>Used <strong>Helm + KServe</strong> for managing multiple ML endpoints (vLLM, ONNX, PyTorch models).</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve deployed AI inference services behind Ingress (TLS + Auth) — scaling dynamically via HPA and caching using Redis to reduce model cold starts.</p>
      </div>`
      }
    ]
  }

];

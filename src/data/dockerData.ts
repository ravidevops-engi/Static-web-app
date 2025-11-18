export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const dockerSections = [
  {
    title: "1. Docker Fundamentals",
    questions: [
      {
        question: "What is Docker and what problem does it solve?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Docker Overview & the Problem It Solves</strong></h3>
        <p>
          Docker is a <strong>containerization platform</strong> that packages an application with its dependencies into a lightweight, isolated unit called a <em>container</em>.  
          It ensures the app runs the same way on every environment — dev, test, or production.
        </p>
        <h4>💡 Problem Solved:</h4>
        <ul style="margin-left:1.2rem;">
          <li>“<em>It works on my machine</em>” issue — eliminated because containers carry environment with them.</li>
          <li>Removes dependency conflicts and setup mismatches.</li>
          <li>Enables quick deployment and scaling with minimal resource use.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Docker to package APIs and microservices so developers, testers, and CI/CD pipelines run consistent builds across machines.</p>
      </div>`
      },
      {
        question: "What is the difference between a container and a virtual machine?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Container vs Virtual Machine</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Container</th><th>Virtual Machine</th></tr>
          <tr><td>Architecture</td><td>Shares host OS kernel</td><td>Has its own OS via hypervisor</td></tr>
          <tr><td>Size</td><td>Lightweight (MBs)</td><td>Heavy (GBs)</td></tr>
          <tr><td>Startup Time</td><td>Seconds</td><td>Minutes</td></tr>
          <tr><td>Isolation</td><td>Process-level isolation</td><td>Full hardware-level isolation</td></tr>
          <tr><td>Use Case</td><td>Microservices, CI/CD, rapid scaling</td><td>Legacy workloads, OS diversity</td></tr>
        </table>
        <p><strong>In Practice:</strong> I prefer containers for microservices and pipelines, but VMs for heavy monolithic or mixed-OS workloads.</p>
      </div>`
      },
      {
        question: "Why do we use Docker in DevOps and CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Docker in DevOps & CI/CD Pipelines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Ensures consistent runtime environments across build, test, and deploy stages.</li>
          <li>Allows faster builds — containers start in seconds.</li>
          <li>Integrates easily with Jenkins, Azure DevOps, GitHub Actions for automated pipelines.</li>
          <li>Supports parallel testing with isolated containerized environments.</li>
          <li>Versioned Docker images simplify rollback and disaster recovery.</li>
        </ul>
        <p><strong>Example:</strong> I build Docker images in Azure DevOps pipelines and push them to ACR, which deploy directly to AKS clusters.</p>
      </div>`
      },
      {
        question: "What is Docker architecture — explain Docker daemon, CLI, and registry.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Docker Architecture Components</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🐳 <strong>Docker Daemon (dockerd):</strong> The background service that manages containers, images, networks, and volumes.</li>
          <li>💻 <strong>Docker CLI:</strong> Command-line interface to interact with the daemon using commands like <code>docker run</code>, <code>docker build</code>.</li>
          <li>🗄️ <strong>Docker Registry:</strong> Stores Docker images — public (Docker Hub) or private (Azure Container Registry).</li>
        </ul>
        <p><strong>Flow:</strong> CLI → REST API → Daemon → Build/Run containers → Pull/Push to Registry.</p>
        <p><strong>In Practice:</strong> I run private ACR registries for enterprise builds, ensuring image security and compliance.</p>
      </div>`
      },
      {
        question: "What are images, containers, and layers in Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Docker Images, Containers & Layers</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>📦 <strong>Image:</strong> A read-only template built from a Dockerfile containing app code + dependencies.</li>
          <li>🚀 <strong>Container:</strong> A running instance of an image — isolated and ephemeral.</li>
          <li>📚 <strong>Layers:</strong> Each Dockerfile instruction adds a new layer (cached for reusability).</li>
        </ul>
        <p><strong>Example:</strong> <em>Ubuntu → Python → Dependencies → App Code</em> → combined layers form a reusable image.</p>
        <p><strong>In Practice:</strong> Layer caching speeds up CI/CD builds by reusing unchanged dependencies.</p>
      </div>`
      },
      {
        question: "How is Docker different from traditional virtualization (Hyper-V, VMware)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>Docker vs Traditional Virtualization</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Docker</th><th>VM (Hyper-V / VMware)</th></tr>
          <tr><td>Virtualization Level</td><td>OS-level (shares kernel)</td><td>Hardware-level (each VM has OS)</td></tr>
          <tr><td>Startup Time</td><td>Seconds</td><td>Minutes</td></tr>
          <tr><td>Performance</td><td>Lightweight, less overhead</td><td>Heavier due to full OS virtualization</td></tr>
          <tr><td>Resource Use</td><td>Efficient (many containers per host)</td><td>Limited (few VMs per host)</td></tr>
          <tr><td>Best For</td><td>Microservices & CI/CD</td><td>Monolithic apps & OS isolation</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Docker for microservice workloads and VM-based environments only where full isolation or custom OS control is required.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Docker — Hands-on & Advanced",
    questions: [
      {
        question: "Do you know Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Yes, I’ve hands-on experience with Docker</strong></h3>
        <p>
          I actively use Docker for containerizing microservices, building custom images, and deploying applications in CI/CD pipelines.  
          My typical workflow includes writing <code>Dockerfile</code>, using <code>docker-compose</code> for local orchestration,  
          and pushing built images to Azure Container Registry (ACR) for deployment to AKS or App Service.
        </p>
      </div>`
      },
      {
        question: "What is Docker and what problem does it solve?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Docker Overview</strong></h3>
        <p>
          Docker is a containerization tool that packages an application and its dependencies into a single portable unit called a container.  
          It eliminates environment inconsistency issues between developer and production systems.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Ensures consistent environment across dev → QA → prod.</li>
          <li>⚡ Lightweight, fast startup — no full OS boot.</li>
          <li>🔁 Easy scaling and rollback using versioned images.</li>
        </ul>
        <p><strong>In Practice:</strong> I containerize APIs and push images to ACR — making deployments predictable and repeatable.</p>
      </div>`
      },
      {
        question: "What is the difference between a container and a virtual machine?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Container vs Virtual Machine</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Container</th><th>Virtual Machine</th></tr>
          <tr><td>Isolation</td><td>Shares host OS kernel</td><td>Full OS isolation</td></tr>
          <tr><td>Startup</td><td>Seconds</td><td>Minutes</td></tr>
          <tr><td>Size</td><td>Lightweight (MBs)</td><td>Heavy (GBs)</td></tr>
          <tr><td>Use Case</td><td>Microservices, CI/CD</td><td>Legacy workloads, full OS control</td></tr>
        </table>
      </div>`
      },
      {
        question: "What is a Docker volume?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Docker Volumes</strong></h3>
        <p>Volumes are used to persist data outside a container’s writable layer, so data isn’t lost when a container stops or restarts.</p>
        <p><strong>Example:</strong></p>
        <pre><code>docker volume create mydata
docker run -d -v mydata:/var/lib/mysql mysql</code></pre>
        <p><strong>In Practice:</strong> I use named volumes for DB persistence and shared mounts in multi-container setups (e.g., app + DB).</p>
      </div>`
      },
      {
        question: "Where do we store Docker images?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗄️ <strong>Docker Image Storage</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Public Registry:</strong> Docker Hub.</li>
          <li>☁️ <strong>Private Cloud Registries:</strong> Azure Container Registry (ACR), AWS ECR, or GCP Artifact Registry.</li>
          <li>🏢 <strong>Local Registry:</strong> Self-hosted registry for on-prem builds.</li>
        </ul>
        <p><strong>In Practice:</strong> I push CI/CD build images to ACR using service connections in Azure DevOps pipelines.</p>
      </div>`
      },
      {
        question: "Write a Docker command to create a container from an image.",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Docker Run Command</strong></h3>
        <pre><code>docker run -d --name myapp -p 8080:80 nginx</code></pre>
        <p>➡️ Creates and runs a container named <code>myapp</code> from the <code>nginx</code> image, mapping port 8080 on host to 80 inside container.</p>
      </div>`
      },
      {
        question: "Write a Dockerfile to create a custom image.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Sample Dockerfile</strong></h3>
        <pre><code># Base Image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]</code></pre>
        <p><strong>In Practice:</strong> I use multi-stage builds to reduce image size and improve CI/CD performance.</p>
      </div>`
      },
      {
        question: "What is the difference between ADD and COPY in Dockerfile?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>ADD vs COPY</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Command</th><th>Purpose</th><th>Special Features</th></tr>
          <tr><td><code>COPY</code></td><td>Copies files from host to container</td><td>Simple and preferred for static files</td></tr>
          <tr><td><code>ADD</code></td><td>Copies and auto-extracts compressed files (.tar, .gz)</td><td>Can also fetch URLs (less secure)</td></tr>
        </table>
        <p><strong>Best Practice:</strong> Use <code>COPY</code> unless auto-extraction or URL download is required.</p>
      </div>`
      },
      {
        question: "What is the difference between CMD and ENTRYPOINT?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>CMD vs ENTRYPOINT</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>CMD</th><th>ENTRYPOINT</th></tr>
          <tr><td>Purpose</td><td>Provides default command</td><td>Defines main executable</td></tr>
          <tr><td>Override</td><td>Can be easily overridden</td><td>Arguments are appended</td></tr>
          <tr><td>Example</td><td><code>CMD ["npm", "start"]</code></td><td><code>ENTRYPOINT ["python"]</code></td></tr>
        </table>
        <p><strong>Best Practice:</strong> Use ENTRYPOINT for mandatory commands and CMD for default arguments.</p>
      </div>`
      },
      {
        question: "What is ARG in Docker and how is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>ARG (Build-time Variables)</strong></h3>
        <p><code>ARG</code> defines variables that are used only during image build (not at runtime).</p>
        <pre><code>ARG APP_VERSION=1.0
RUN echo "Building version &dollar;APP_VERSION"</code></pre>
        <p><strong>In Practice:</strong> I pass ARGs like app version or environment during CI/CD builds for dynamic tagging.</p>
      </div>`
      },
      {
        question: "Can we make changes to a running Docker container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Editing Running Containers</strong></h3>
        <p>Yes, you can <strong>exec</strong> into a running container and make changes, but they’re ephemeral.</p>
        <pre><code>docker exec -it myapp /bin/bash</code></pre>
        <p><strong>Note:</strong> Changes are lost after container restart unless you commit or mount persistent storage.</p>
      </div>`
      },
      {
        question: "Command to run an already created container.",
        answerHtml: `
      <div class="answer-rich">
        <h3>▶️ <strong>Run Existing Container</strong></h3>
        <pre><code>docker start -a myapp</code></pre>
        <p><code>-a</code> attaches logs to the terminal.  
        Alternatively: <code>docker restart myapp</code> if it was previously stopped.</p>
      </div>`
      },
      {
        question: "Different networking types in Docker.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Docker Network Types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>bridge</strong> — Default; containers communicate via virtual bridge.</li>
          <li><strong>host</strong> — Shares host network; no isolation.</li>
          <li><strong>none</strong> — No network access.</li>
          <li><strong>overlay</strong> — Multi-host networking for Swarm or Kubernetes.</li>
        </ul>
        <p><strong>In Practice:</strong> I use custom bridge networks for microservice communication and overlay for multi-node clusters.</p>
      </div>`
      },
      {
        question: "What is Docker Swarm?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕸️ <strong>Docker Swarm</strong></h3>
        <p>
          Swarm is Docker’s native clustering and orchestration tool for running containers across multiple hosts.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ Supports load balancing, service scaling, and rolling updates.</li>
          <li>🔑 Works via managers and workers (leader-based architecture).</li>
        </ul>
        <p><strong>In Practice:</strong> Although Swarm is simpler, I mostly use Kubernetes for orchestration in enterprise environments.</p>
      </div>`
      },
      {
        question: "What is multi-stage build in Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Multi-Stage Build</strong></h3>
        <p>Used to reduce image size by separating build and runtime stages.</p>
        <pre><code>FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html</code></pre>
        <p><strong>In Practice:</strong> My production images are multi-stage — they keep only compiled binaries, no build tools.</p>
      </div>`
      },
      {
        question: "How do you clean up unused images and containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Docker Cleanup Commands</strong></h3>
        <pre><code>docker system prune -a -f</code></pre>
        <p>Removes stopped containers, unused images, and dangling networks to free space.</p>
      </div>`
      },
      {
        question: "What is the purpose of Docker Compose?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Docker Compose</strong></h3>
        <p>Used to define and manage multi-container applications via a single YAML file.</p>
        <pre><code>version: "3"
services:
  web:
    image: nginx
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: pass123</code></pre>
        <p><strong>In Practice:</strong> I use Compose for local testing of full stacks (app + DB + cache) before pushing to Kubernetes.</p>
      </div>`
      },
      {
        question: "What are the advantages of Docker over VMs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Docker Advantages</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Faster startup and smaller footprint.</li>
          <li>💾 Efficient resource usage — multiple containers per host.</li>
          <li>🔁 Easier CI/CD automation and rollback.</li>
          <li>🌍 Portability — runs anywhere with Docker runtime.</li>
        </ul>
        <p><strong>In Practice:</strong> We replaced several dev VMs with Docker containers, cutting environment setup time by 80%.</p>
      </div>`
      },
      {
        question: "What is the docker create command used for?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>docker create Command</strong></h3>
        <p>Creates a container from an image but does not start it immediately.</p>
        <pre><code>docker create --name myapp nginx</code></pre>
        <p><strong>In Practice:</strong> I use this when I need to attach volumes or networks before running the container.</p>
      </div>`
      },
      {
        question: "What is docker push and docker pull?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>docker push / pull</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>docker push:</strong> Uploads an image from local system to a remote registry.</li>
          <li><strong>docker pull:</strong> Downloads an image from registry to local host.</li>
        </ul>
        <pre><code>docker push myacr.azurecr.io/app:v1
docker pull nginx:latest</code></pre>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. Docker – Containers & Image Management",
    questions: [
      {
        question: "What is Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Docker Overview</strong></h3>
        <p>
          Docker is a containerization tool that packages applications with all dependencies into isolated containers.  
          It provides consistency across environments — whether it’s a developer laptop or a production server.
        </p>
        <p><strong>In Practice:</strong> I use Docker to build and deploy microservices, ensuring environment consistency and faster rollouts in CI/CD pipelines.</p>
      </div>`
      },
      {
        question: "Why do we use Docker in DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Docker in DevOps</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Ensures identical environments from development to production.</li>
          <li>Speeds up build and deployment cycles.</li>
          <li>Integrates easily with CI/CD tools like Jenkins, Azure DevOps, and GitHub Actions.</li>
          <li>Supports microservices-based architecture and horizontal scaling.</li>
        </ul>
        <p><strong>Example:</strong> We use Docker in Azure Pipelines to containerize APIs, push images to ACR, and deploy to AKS clusters automatically.</p>
      </div>`
      },
      {
        question: "What problem does Docker solve compared to VMs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Problems Docker Solves vs VMs</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Removes heavy OS overhead — containers share the host kernel.</li>
          <li>Faster startup — seconds vs minutes in VMs.</li>
          <li>Enables high density — 100s of containers per host.</li>
          <li>Eliminates “works on my machine” issue by packaging dependencies inside the image.</li>
        </ul>
      </div>`
      },
      {
        question: "What is the difference between a container and a virtual machine?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Container vs Virtual Machine</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Feature</th><th>Container</th><th>Virtual Machine</th></tr>
          <tr><td>Virtualization Level</td><td>OS-level (shared kernel)</td><td>Hardware-level (separate OS)</td></tr>
          <tr><td>Startup Time</td><td>Seconds</td><td>Minutes</td></tr>
          <tr><td>Size</td><td>Lightweight (MBs)</td><td>Heavy (GBs)</td></tr>
          <tr><td>Isolation</td><td>Process-level</td><td>Full OS isolation</td></tr>
        </table>
      </div>`
      },
      {
        question: "What is a Docker image and where are images stored?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗂️ <strong>Docker Image & Storage</strong></h3>
        <p>
          A Docker image is a read-only template containing the app code and dependencies.  
          Images are stored locally (in Docker cache) or in remote registries like DockerHub or ACR.
        </p>
        <p><strong>Example:</strong> I push my images to <code>myapp.azurecr.io</code> for deployment across environments.</p>
      </div>`
      },
      {
        question: "What is a Docker container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Docker Container</strong></h3>
        <p>
          A container is a running instance of a Docker image — it’s lightweight, isolated, and ephemeral.  
          It runs as a process on the host machine sharing the OS kernel.
        </p>
      </div>`
      },
      {
        question: "What is the difference between Dockerfile and Docker Compose?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📘 <strong>Dockerfile vs Docker Compose</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Dockerfile:</strong> Defines steps to build a single image.</li>
          <li><strong>Docker Compose:</strong> Manages multi-container apps using YAML configuration.</li>
        </ul>
        <p><strong>Example:</strong> I use Dockerfile for API build and Compose to run API + DB + Redis together locally.</p>
      </div>`
      },
      {
        question: "Explain Dockerfile structure.",
        answerHtml: `
      <div class="answer-rich">
        <h3>📄 <strong>Dockerfile Structure</strong></h3>
        <pre><code>FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]</code></pre>
        <ul>
          <li><strong>FROM:</strong> Base image</li>
          <li><strong>WORKDIR:</strong> Sets working directory</li>
          <li><strong>COPY / RUN:</strong> Copies files and installs dependencies</li>
          <li><strong>CMD:</strong> Defines default process to run</li>
        </ul>
      </div>`
      },
      {
        question: "What is the difference between ADD and COPY commands?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>ADD vs COPY</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Command</th><th>Function</th><th>Special Behavior</th></tr>
          <tr><td>COPY</td><td>Copies files/directories from host to image</td><td>Simple, preferred method</td></tr>
          <tr><td>ADD</td><td>Same as COPY + auto-extracts archives + fetches URLs</td><td>Useful but less secure</td></tr>
        </table>
      </div>`
      },
      {
        question: "What is the difference between CMD and ENTRYPOINT?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>CMD vs ENTRYPOINT</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>CMD</th><th>ENTRYPOINT</th></tr>
          <tr><td>Purpose</td><td>Provides default command</td><td>Defines main executable</td></tr>
          <tr><td>Override</td><td>Can be overridden at runtime</td><td>Arguments appended to ENTRYPOINT</td></tr>
        </table>
        <p><strong>Best Practice:</strong> Use ENTRYPOINT for main command, CMD for default args.</p>
      </div>`
      },
      {
        question: "What is a multi-stage Dockerfile and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Multi-stage Builds</strong></h3>
        <p>Used to reduce final image size by separating build and runtime stages.</p>
        <pre><code>FROM golang:1.19 AS builder
WORKDIR /src
COPY . .
RUN go build -o app

FROM alpine
COPY --from=builder /src/app /app
ENTRYPOINT ["/app"]</code></pre>
      </div>`
      },
      {
        question: "What are the different networking modes in Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Docker Network Modes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>bridge</strong> — Default, private internal network.</li>
          <li><strong>host</strong> — Shares host’s network stack.</li>
          <li><strong>none</strong> — No networking.</li>
          <li><strong>overlay</strong> — For multi-host (Swarm/K8s) networks.</li>
        </ul>
      </div>`
      },
      {
        question: "What is a volume in Docker and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Docker Volumes</strong></h3>
        <p>Volumes store data outside the container’s writable layer — ensuring persistence across restarts.</p>
        <pre><code>docker run -v mydata:/var/lib/mysql mysql</code></pre>
      </div>`
      },
      {
        question: "What is Docker Swarm?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🕸️ <strong>Docker Swarm</strong></h3>
        <p>Swarm is Docker’s built-in orchestration tool for clustering multiple Docker hosts and managing services.</p>
        <p><strong>In Practice:</strong> Used for simpler orchestration; Kubernetes is preferred for production-grade orchestration.</p>
      </div>`
      },
      {
        question: "What is Docker Compose and how is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Docker Compose</strong></h3>
        <p>Used to define and run multi-container setups using <code>docker-compose.yml</code>.</p>
        <pre><code>version: "3"
services:
  web:
    image: nginx
  db:
    image: mysql</code></pre>
      </div>`
      },
      {
        question: "Where do we keep Docker images (e.g. ACR, DockerHub)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏷️ <strong>Image Repositories</strong></h3>
        <ul>
          <li>Docker Hub — public registry.</li>
          <li>Azure Container Registry (ACR) — enterprise use.</li>
          <li>Amazon ECR, GCP Artifact Registry — cloud-specific.</li>
        </ul>
      </div>`
      },
      {
        question: "How to push and pull Docker images?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📤 <strong>Push / Pull Commands</strong></h3>
        <pre><code>docker tag myapp:latest myacr.azurecr.io/myapp:v1
docker push myacr.azurecr.io/myapp:v1
docker pull myacr.azurecr.io/myapp:v1</code></pre>
      </div>`
      },
      {
        question: "Can we modify a running Docker container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Modifying Containers</strong></h3>
        <p>You can <code>exec</code> into a container and make temporary changes:</p>
        <pre><code>docker exec -it myapp bash</code></pre>
        <p>To make permanent changes: <code>docker commit myapp newimage:v1</code></p>
      </div>`
      },
      {
        question: "Command to run an already created container.",
        answerHtml: `
      <div class="answer-rich">
        <pre><code>docker start -a myapp</code></pre>
        <p><code>-a</code> attaches logs to your terminal; you can also use <code>docker restart myapp</code>.</p>
      </div>`
      },
      {
        question: "What is ARG in Dockerfile?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>ARG – Build-time Variables</strong></h3>
        <pre><code>ARG APP_VERSION=1.0
RUN echo "Building version &dollar;APP_VERSION"</code></pre>
      </div>`
      },
      {
        question: "How to clean unused Docker containers, networks, and images?",
        answerHtml: `
      <div class="answer-rich">
        <pre><code>docker system prune -a -f</code></pre>
        <p>Removes stopped containers, dangling images, and unused networks.</p>
      </div>`
      },
      {
        question: "What is a build context in Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Build Context</strong></h3>
        <p>Build context is the directory sent to the Docker daemon when running <code>docker build</code>.  
        It contains all files referenced in the Dockerfile.</p>
      </div>`
      },
      {
        question: "What is the purpose of .dockerignore file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📄 <strong>.dockerignore</strong></h3>
        <p>Used to exclude unnecessary files (e.g., <code>node_modules</code>, logs, secrets) from the build context to reduce image size.</p>
      </div>`
      },
      {
        question: "What is difference between container restart policies (no, always, on-failure)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Restart Policies</strong></h3>
        <ul>
          <li><strong>no:</strong> Never restarts container.</li>
          <li><strong>always:</strong> Always restarts if stopped.</li>
          <li><strong>on-failure:</strong> Restarts only if exit code ≠ 0.</li>
        </ul>
        <pre><code>docker run --restart always nginx</code></pre>
      </div>`
      },
      {
        question: "How do you debug failing Docker builds?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐞 <strong>Docker Build Debugging</strong></h3>
        <ul>
          <li>Use <code>--progress=plain --no-cache</code> to view build logs.</li>
          <li>Insert <code>RUN echo</code> or <code>RUN ls</code> for debugging steps.</li>
          <li>Build locally with <code>docker build -t test .</code> and test intermediate layers.</li>
        </ul>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Dockerfile – Core Concepts & Instructions",
    questions: [
      {
        question: "What is a Dockerfile and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📄 <strong>What is a Dockerfile?</strong></h3>
        <p>
          A Dockerfile is a plain-text recipe that contains the steps required to build a Docker image.  
          It defines base image, copies source, installs dependencies, runs build steps, and sets the runtime command.
        </p>
        <p><strong>Why use it?</strong> Because it makes image builds reproducible, versionable (stored in Git), and automatable in CI/CD pipelines.</p>
        <p><strong>In Practice:</strong> Every microservice I build has a Dockerfile in the repo — CI runs <code>docker build</code> and produces immutable images.</p>
      </div>`
      },
      {
        question: "What are the main instructions in a Dockerfile (FROM, RUN, CMD, COPY, EXPOSE, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Common Dockerfile Instructions</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>FROM</strong> — base image for a stage (mandatory).</li>
          <li><strong>WORKDIR</strong> — set working directory inside image.</li>
          <li><strong>COPY</strong> / <strong>ADD</strong> — copy files from build context.</li>
          <li><strong>RUN</strong> — execute commands at build time (install packages, compile).</li>
          <li><strong>ENV</strong> — set environment variables available at build & runtime.</li>
          <li><strong>ARG</strong> — build-time variables (not persisted to runtime env by default).</li>
          <li><strong>EXPOSE</strong> — document which ports the container listens on (metadata only).</li>
          <li><strong>VOLUME</strong> — declare mount points for persistent data.</li>
          <li><strong>ENTRYPOINT</strong> — executable that will always run (entry binary).</li>
          <li><strong>CMD</strong> — default arguments for ENTRYPOINT or default command if ENTRYPOINT not set.</li>
          <li><strong>USER</strong> — switch to a non-root user.</li>
          <li><strong>HEALTHCHECK</strong> — define a container health probe.</li>
        </ul>
      </div>`
      },
      {
        question: "What is the difference between ADD and COPY commands?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>ADD vs COPY</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>COPY</strong> — simple, predictable: copy files from build context into image. Use this for most cases.</li>
          <li><strong>ADD</strong> — does everything COPY does + can automatically extract local tar archives and can fetch remote URLs. Because of side-effects, use ADD only when you need its extra features.</li>
        </ul>
        <p><strong>Best practice:</strong> Prefer <code>COPY</code> for clarity and security; use <code>ADD</code> only for tar extraction or trusted remote fetches (rare).</p>
      </div>`
      },
      {
        question: "What is the difference between CMD and ENTRYPOINT?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>CMD vs ENTRYPOINT</strong></h3>
        <p>
          Both define what runs in the container, but they serve different purposes:
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>ENTRYPOINT</strong> sets the fixed command/executable (the container’s main purpose).</li>
          <li><strong>CMD</strong> provides default arguments to ENTRYPOINT or a fallback command if ENTRYPOINT is not defined.</li>
        </ul>
        <p><strong>Examples:</strong></p>
        <pre><code>ENTRYPOINT [\"/usr/bin/python\", \"app.py\"]   # fixed executable
CMD [\"--port\", \"8080\"]                         # default args, overridable</code></pre>
        <p><strong>Rule:</strong> Use ENTRYPOINT for the main binary and CMD for default options you might want to override at runtime.</p>
      </div>`
      },
      {
        question: "What is .dockerignore and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤐 <strong>.dockerignore Purpose</strong></h3>
        <p>
          <code>.dockerignore</code> excludes files from the build context sent to the Docker daemon (like <code>node_modules</code>, logs, local creds).  
          This reduces build size, speeds up build, and prevents secrets from accidentally being included.
        </p>
        <p><strong>Practical tip:</strong> Always include <code>.git</code>, <code>.env</code>, and heavy directories in <code>.dockerignore</code>.</p>
      </div>`
      },
      {
        question: "What is the difference between ARG and ENV in Dockerfile?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>ARG vs ENV</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>ARG</strong> — build-time variable, available only during image build. Not persisted to runtime environment unless explicitly set to ENV.</li>
          <li><strong>ENV</strong> — sets environment variables inside the final image and available at runtime.</li>
        </ul>
        <p><strong>Use case:</strong> Use ARG for build-time options (version tags, build flags) and ENV for configuration needed at runtime or for documentation.</p>
      </div>`
      },
      {
        question: "How do you reduce Docker image size?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📉 <strong>Reducing Image Size — Practical Tips</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use minimal base images (alpine, distroless) when possible.</li>
          <li>Use multi-stage builds — build artifacts in one stage, copy only final artifacts into runtime stage.</li>
          <li>Combine RUN commands with <code>&amp;&amp;</code> and clean package manager caches in same RUN step (reduces intermediate layers).</li>
          <li>Add appropriate <code>.dockerignore</code> so context excludes unnecessary files.</li>
          <li>Remove build tools and dev dependencies from final image.</li>
          <li>Use explicit <code>--no-install-recommends</code> when installing packages (Debian/Ubuntu).</li>
        </ul>
      </div>`
      },
      {
        question: "Can we create a Docker image without pulling a base image?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Create Image Without Base?</strong></h3>
        <p>
          In Dockerfile, the first instruction is typically <code>FROM</code>. You can create a scratch-based image using <code>FROM scratch</code> (an empty image) and add binaries — but then you must provide everything (static binary + dependencies).  
          For most apps, you use an existing base image (alpine, debian, distroless).
        </p>
        <p><strong>Use case for <code>scratch</code>:</strong> Small static Go binaries or minimal container images where you want absolute minimal surface.</p>
      </div>`
      },
      {
        question: "What is a multi-stage build, and why/when is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Multi-stage Builds — Why Use Them?</strong></h3>
        <p>
          Multi-stage builds let you separate build-time steps from runtime image. You compile/build in a heavy image (with build tools) and then copy only the final artifact into a lightweight runtime image — resulting in much smaller final images.
        </p>
        <p><strong>When to use:</strong> When compile toolchain is large (e.g., Node, Java, Go) but runtime only needs compiled binary or static files.</p>
      </div>`
      },
      {
        question: "What are best practices for writing a Dockerfile?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Dockerfile Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Keep images small — use multi-stage builds and minimal base images.</li>
          <li>Order layers by change frequency (put frequently changing files later so earlier layers are cached).</li>
          <li>Avoid secrets in Dockerfile and build context — use build-time secrets or Key Vault/secret store in CI.</li>
          <li>Use non-root user with <code>USER</code> where possible.</li>
          <li>Pin dependency versions for reproducibility.</li>
          <li>Use <code>.dockerignore</code> to reduce context size.</li>
          <li>Provide HEALTHCHECK to help orchestrators detect unhealthy containers.</li>
        </ul>
      </div>`
      },
      {
        question: "Write a Dockerfile for a Node.js application using multi-stage builds.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Node.js Multi-stage Dockerfile</strong></h3>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># Stage 1 — builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build

# Stage 2 — runtime
FROM node:18-alpine
WORKDIR /app
# copy only production deps and build output
COPY --from=builder /app/package*.json ./
RUN npm ci --production=true
COPY --from=builder /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3000
USER node
CMD [\"node\", \"dist/server.js\"]</code></pre>
        <p><strong>Why:</strong> builder has dev deps and build chain; runtime contains only production deps + built assets → smaller final image.</p>
      </div>`
      },
      {
        question: "Write a Dockerfile to build a custom image for any application.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Generic Custom Dockerfile (Python Flask Example)</strong></h3>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>FROM python:3.11-slim

# create non-root user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

WORKDIR /app

# copy only requirements first for caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy application
COPY . .

# expose and run
EXPOSE 5000
USER appuser
ENV FLASK_ENV=production
CMD [\"gunicorn\", \"app:app\", \"-b\", \"0.0.0.0:5000\", \"--workers\", \"3\"]</code></pre>
        <p><strong>Notes:</strong> Using slim base, non-root user, pip cache disabled, layering optimized for build caching.</p>
      </div>`
      },
      {
        question: "How do you debug failing Docker builds?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>Debugging Docker Builds</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Build with verbose/plain output: <code>docker build --progress=plain --no-cache .</code>.</li>
          <li>Re-run failing RUN step locally by placing commands in a temporary container (or use an interactive builder stage):</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># build to specific stage and start shell
docker build --target builder -t tmp-builder .
docker run --rm -it tmp-builder /bin/sh</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Insert debug lines like <code>RUN ls -la /app</code> or <code>RUN cat /path/file</code> to inspect layer content.</li>
          <li>Check network/proxy issues when fetching packages — ensure build environment has outbound access or use caches.</li>
          <li>Check file permissions and non-root user problems.</li>
        </ul>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Docker Image Management",
    questions: [
      {
        question: "How do you build and tag Docker images?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Build & Tag Workflow</strong></h3>
        <p>
          Build the image from a Dockerfile and tag it with a meaningful repository/name:tag so you can push/pull it from a registry.
        </p>
        <p><strong>Typical steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Write a Dockerfile in the project root.</li>
          <li>Run <code>docker build</code> with a tag (name:tag).</li>
          <li>Optionally retag for the target registry (e.g., ACR) before push.</li>
        </ol>
        <pre><code># Build and tag locally
docker build -t myapp:1.0 .

# Retag for registry
docker tag myapp:1.0 myacr.azurecr.io/myapp:1.0</code></pre>
        <p><strong>In Practice:</strong> I let CI generate a build number (e.g., 1.0.23 or commit SHA) and use that as the image tag to ensure immutability.</p>
      </div>`
      },
      {
        question: "Write the build command to build a Docker image.",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>docker build Example</strong></h3>
        <p>Basic build command:</p>
        <pre><code>docker build -t myapp:1.0 .</code></pre>
        <p>With build-arg and no-cache (debug):</p>
        <pre><code>docker build --build-arg APP_ENV=prod --no-cache -t myapp:1.0 .</code></pre>
        <p><strong>Note:</strong> The trailing dot <code>.</code> is the build context (directory sent to daemon).</p>
      </div>`
      },
      {
        question: "What is the purpose of the docker build -t command?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏷️ <strong>Purpose of <code>-t</code></strong></h3>
        <p>
          The <code>-t</code> flag tags the image during build with a name and optional tag (<code>name:tag</code>), making it easy to reference the image later for running, pushing, or retagging.
        </p>
        <p><strong>Example:</strong> <code>docker build -t myrepo/myapp:1.0 .</code> creates an image you can run with <code>docker run myrepo/myapp:1.0</code>.</p>
      </div>`
      },
      {
        question: "How do you push Docker images to Azure Container Registry (ACR)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Push Images to ACR (common approaches)</strong></h3>
        <p>Recommended: use <code>az acr login</code> or CI service connection to avoid manual creds.</p>
        <pre><code># 1) Tag image for ACR
docker tag myapp:1.0 myacr.azurecr.io/myapp:1.0

# 2) Login (developer machine)
az acr login --name myacr

# 3) Push
docker push myacr.azurecr.io/myapp:1.0</code></pre>
        <p><strong>CI note:</strong> In Azure DevOps/GitHub Actions use a service principal or managed identity and the built-in ACR task to push images securely (no local docker login required).</p>
      </div>`
      },
      {
        question: "How do you pull images from Docker Hub or ACR?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⬇️ <strong>Pull Commands</strong></h3>
        <pre><code># Pull from Docker Hub
docker pull nginx:latest

# Pull from ACR (after az acr login or docker login)
docker pull myacr.azurecr.io/myapp:1.0</code></pre>
        <p><strong>Tip:</strong> For private registries ensure your CI/CD agent has proper auth (service principal, managed identity, or docker login credentials).</p>
      </div>`
      },
      {
        question: "How do you reduce the size of Docker images?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📉 <strong>Image Size Reduction Techniques</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use minimal base images (e.g., <code>alpine</code> or distroless) where possible.</li>
          <li>Use multi-stage builds — keep only runtime artifacts in final image.</li>
          <li>Combine and minimize <code>RUN</code> steps (chain with <code>&amp;&amp;</code>) to reduce intermediate layers.</li>
          <li>Clear package caches in same RUN step (e.g., <code>apt-get clean && rm -rf /var/lib/apt/lists/*</code>).</li>
          <li>Add a proper <code>.dockerignore</code> to exclude heavy files (node_modules, .git).</li>
          <li>Remove build tools and dev dependencies in final stage.</li>
          <li>Use specific small runtime images (e.g., <code>node:alpine</code> or distroless) for production.</li>
        </ul>
        <p><strong>In Practice:</strong> I measure image size in CI and fail build if it exceeds a threshold — enforces discipline.</p>
      </div>`
      },
      {
        question: "What are best practices for image versioning and tagging?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔖 <strong>Image Tagging Best Practices</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use immutable tags: <code>myapp:1.2.3</code> (semantic versioning) or <code>myapp:sha-<commit-sha></code>.</li>
          <li>Keep <code>latest</code> for convenience but avoid relying on it in production (it's mutable).</li>
          <li>Include CI build metadata: <code>myapp:1.2.3-build.42</code> or <code>myapp:sha-abcdef</code> for traceability.</li>
          <li>Use image digests (sha256:@digest) in deployment manifests to ensure exact image is pulled: <code>myacr.azurecr.io/myapp@sha256:...</code>.</li>
          <li>Automate tagging in CI: tag by branch, tag name, and commit SHA (e.g., <code>feature/x</code>, <code>v1.2.3</code>, <code>sha</code>).</li>
          <li>Retire old tags with lifecycle policies in the registry (ACR retention or purge policies) to save storage.</li>
        </ul>
        <p><strong>In Practice:</strong> I push both semver tag and commit-SHA tag, and deployments use the SHA or digest for immutability while QA uses semver tags.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Containers – Run, Manage & Inspect",
    questions: [
      {
        question: "How do you create and run a container from an image?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Create & Run Container</strong></h3>
        <p>
          Use <code>docker run</code> to create and start a container from an image in one step.
        </p>
        <pre><code># Run nginx in detached mode
docker run -d --name webserver -p 8080:80 nginx:latest

# Run interactively
docker run -it --name myapp ubuntu /bin/bash</code></pre>
        <ul>
          <li><code>-d</code> → detached mode (background)</li>
          <li><code>-p</code> → map host:container port</li>
          <li><code>-it</code> → interactive terminal</li>
        </ul>
        <p><strong>In Practice:</strong> I use this pattern during debugging or local testing before committing CI pipeline steps.</p>
      </div>`
      },
      {
        question: "Do you know the command to create a container manually?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Create Container (Without Starting)</strong></h3>
        <pre><code># Create but do not start
docker create --name mydb mysql:8.0

# Then start it manually
docker start mydb</code></pre>
        <p><strong>Note:</strong> <code>docker run</code> = create + start in one step. <code>docker create</code> only defines the container metadata before first start.</p>
      </div>`
      },
      {
        question: "What is the difference between docker stop and docker kill?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛑 <strong>docker stop vs docker kill</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Command</th><th>Signal</th><th>Description</th></tr>
          <tr><td><strong>docker stop</strong></td><td>SIGTERM → SIGKILL (graceful)</td><td>Gives process time to clean up before stopping.</td></tr>
          <tr><td><strong>docker kill</strong></td><td>SIGKILL (immediate)</td><td>Forcefully terminates process instantly.</td></tr>
        </table>
        <p><strong>Best practice:</strong> Always use <code>docker stop</code> first to let the app shut down gracefully.</p>
      </div>`
      },
      {
        question: "How do you check running containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>List Containers</strong></h3>
        <pre><code># Show running containers
docker ps

# Show all (including stopped)
docker ps -a</code></pre>
        <p><strong>Tip:</strong> Use <code>--filter</code> and <code>--format</code> for focused output:
        <pre><code>docker ps --filter "status=running" --format "{{.Names}} - {{.Image}}"</code></pre>
      </div>`
      },
      {
        question: "How do you check logs for a container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>View Container Logs</strong></h3>
        <pre><code># View logs for container
docker logs myapp

# Follow logs live
docker logs -f myapp</code></pre>
        <p><strong>Note:</strong> Use <code>--tail</code> to limit output or integrate logs with external systems (e.g., Azure Monitor or ELK stack).</p>
      </div>`
      },
      {
        question: "How do you debug a container that has exited?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Debugging Exited Containers</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Check exit code: <code>docker ps -a</code> or <code>docker inspect --format='{{.State.ExitCode}}' myapp</code></li>
          <li>View logs: <code>docker logs myapp</code></li>
          <li>Start an interactive shell to inspect filesystem:
          <pre><code>docker run -it --entrypoint /bin/bash myapp</code></pre></li>
          <li>Alternatively, commit container for inspection:
          <pre><code>docker commit myapp debug:latest
docker run -it debug:latest /bin/bash</code></pre></li>
        </ol>
        <p><strong>Pro tip:</strong> For crash loops, use <code>--restart=on-failure</code> and attach logs to a monitoring system.</p>
      </div>`
      },
      {
        question: "How do you inspect a container’s configuration (env, ports, volumes)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Inspect Container Configuration</strong></h3>
        <pre><code># Full inspection (JSON)
docker inspect myapp

# View specific data using format
docker inspect -f '{{.Config.Env}}' myapp
docker inspect -f '{{.NetworkSettings.Ports}}' myapp</code></pre>
        <p><strong>Tip:</strong> Combine with <code>jq</code> for pretty JSON filtering:
        <pre><code>docker inspect myapp | jq '.[0].Config.Entrypoint'</code></pre>
      </div>`
      },
      {
        question: "How do you clean up unused containers and images?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Docker Cleanup</strong></h3>
        <p>Clean up stopped containers, dangling images, and unused networks:</p>
        <pre><code># Remove stopped containers, unused images, and networks
docker system prune -f

# Remove everything (including volumes)
docker system prune -a --volumes -f</code></pre>
        <p><strong>Best practice:</strong> Schedule cleanup on self-hosted agents or dev servers periodically to free space.</p>
      </div>`
      },
      {
        question: "What is the command to remove dangling images and stopped containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗑️ <strong>Remove Dangling Resources</strong></h3>
        <pre><code># Remove only dangling (untagged) images
docker image prune -f

# Remove stopped containers
docker container prune -f</code></pre>
        <p><strong>Dangling =</strong> images without tags, often leftover after rebuilds.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Networking & Communication Between Containers",
    questions: [
      {
        question: "How do you create a Docker network?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Create a Docker Network</strong></h3>
        <p>Use <code>docker network create</code> to make a custom network (bridge or overlay).</p>
        <pre><code># Create a user-defined bridge network (single host)
docker network create my-bridge-net

# Create an overlay network (multi-host, requires Swarm/K8s integration)
docker network create -d overlay my-overlay-net</code></pre>
        <p><strong>In Practice:</strong> I create user-defined bridge networks for isolation and service discovery on a single host — they give automatic DNS resolution between containers.</p>
      </div>`
      },
      {
        question: "If you want two containers to communicate, how can you do it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Container-to-Container Communication</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Create (or use) the same network: <code>docker network create my-net</code></li>
          <li>Run containers on that network:
            <pre><code>docker run -d --name app --network my-net myapp
docker run -d --name redis --network my-net redis</code></pre>
          </li>
          <li>Use container name as hostname (DNS): <code>ping redis</code> or connect in app via <code>redis:6379</code>.</li>
        </ol>
        <p><strong>Tip:</strong> Use user-defined networks — default bridge does not provide automatic DNS by container name.</p>
      </div>`
      },
      {
        question: "How do you connect multiple containers in a custom network?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Connect Multiple Containers</strong></h3>
        <p>Either start containers with <code>--network</code> or connect an existing container to a network with <code>docker network connect</code>.</p>
        <pre><code># Start containers on network
docker run -d --name web --network my-net nginx
docker run -d --name api --network my-net myapi

# Connect an already running container to a network
docker network connect my-net existing-container</code></pre>
        <p><strong>In Practice:</strong> I attach app containers to a shared network and attach monitoring/logging sidecars to the same network when needed.</p>
      </div>`
      },
      {
        question: "What kind of network policies can be used to restrict container communication?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Network Policies & Restrictions</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>On single-host Docker: use <strong>iptables</strong> rules or custom Docker network drivers that support ACLs.</li>
          <li>With Kubernetes: use <strong>NetworkPolicy</strong> CRDs to allow/deny pod-to-pod traffic (Calico, Cilium, etc.).</li>
          <li>In Docker Swarm: use encrypted overlay networks and control published ports; for more advanced ACLs use an external CNI or firewall.</li>
          <li>Use <code>docker network inspect</code> and host-level firewall rules for tighter control.</li>
        </ul>
        <p><strong>Pro tip:</strong> For production microservices, prefer Kubernetes network policies (Calico/Cilium) — they are purpose-built for fine-grained traffic control.</p>
      </div>`
      },
      {
        question: "What are the different types of Docker networks (bridge, host, overlay, none)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📚 <strong>Docker Network Types</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>bridge</strong> — Default single-host network; user-defined bridge adds DNS-based service discovery.</li>
          <li><strong>host</strong> — Container shares host network namespace (no network isolation).</li>
          <li><strong>overlay</strong> — Multi-host network for Swarm/K8s; enables containers on different hosts to talk over encrypted vxlan.</li>
          <li><strong>none</strong> — No network stack; container isolated from network.</li>
        </ul>
        <p><strong>When to use:</strong> bridge for most single-host apps, host for high-performance networking (but risky), overlay for multi-host clusters.</p>
      </div>`
      },
      {
        question: "What is the default Docker network driver?",
        answerHtml: `
      <div class="answer-rich">
        <h3>❓ <strong>Default Driver</strong></h3>
        <p>The default driver is <code>bridge</code> for containers started without a <code>--network</code> option. Docker also creates a <code>bridge</code> network named <code>bridge</code> and a default <code>none</code> network.</p>
        <p><strong>Note:</strong> For predictable DNS and discovery, create your own user-defined bridge network instead of relying on the default.</p>
      </div>`
      },
      {
        question: "How do you manage DNS inside a Docker network?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔎 <strong>DNS & Service Discovery in Docker</strong></h3>
        <p>User-defined networks provide an embedded DNS server — container names resolve to IPs within that network.</p>
        <pre><code># Example: containers started on my-net can resolve each other by name
docker run -d --name db --network my-net postgres
docker run -d --name web --network my-net myweb
# from web: ping db</code></pre>
        <p>Advanced options:</p>
        <ul style="margin-left:1.2rem;">
          <li>Use <code>--dns</code> to set custom DNS servers for containers.</li>
          <li>Use <code>docker network inspect</code> to see network settings and container IPs.</li>
          <li>In multi-host setups, use external DNS/Service Discovery (Consul, etcd) or orchestrator-provided DNS (Kubernetes CoreDNS).</li>
        </ul>
        <p><strong>In Practice:</strong> For multi-host clusters I prefer orchestrator DNS (k8s CoreDNS) or a dedicated service discovery tool — built-in Docker DNS is great for single-host setups.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Volumes & Data Persistence",
    questions: [
      {
        question: "What is a Docker volume and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>What is a Docker Volume?</strong></h3>
        <p>
          A Docker <strong>volume</strong> is a managed persistent storage area that lives outside a container's writable layer.  
          Volumes are the recommended way to persist data because they survive container restarts and removals, and are managed by Docker.
        </p>
        <p><strong>Why use volumes?</strong> Data persistence, isolation from image lifecycle, better performance than some bind mounts, and portability (can be attached to other containers).</p>
      </div>`
      },
      {
        question: "How do you persist data using volumes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Persist Data with Volumes — Example</strong></h3>
        <p>Create a named volume and mount it into a container:</p>
        <pre><code># create volume
docker volume create mydata

# run container with volume
docker run -d --name mydb -v mydata:/var/lib/mysql mysql:8.0</code></pre>
        <p>The DB writes to <code>/var/lib/mysql</code> inside the container, but data is stored in the <code>mydata</code> volume on the host (managed by Docker).</p>
      </div>`
      },
      {
        question: "What happens if a container is deleted — how do you prevent data loss?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Container Deletion & Data Safety</strong></h3>
        <p>If a container is removed, named volumes remain by default — data is safe. Only removing volumes explicitly (or using prune) deletes the data.</p>
        <ul style="margin-left:1.2rem;">
          <li>Use named volumes (not anonymous) so you can reattach them later.</li>
          <li>Avoid <code>docker run --rm</code> for containers that hold important data.</li>
          <li>Set up scheduled backups (see backup section below) and/or store data on network-backed volumes (NFS, cloud file storage).</li>
        </ul>
      </div>`
      },
      {
        question: "Suppose a container is accidentally deleted — what steps can you take to protect or recover the data?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Recovering Data After Accidental Container Deletion</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Check if the named volume still exists:
            <pre><code>docker volume ls
docker volume inspect mydata</code></pre>
          </li>
          <li>If volume exists, recreate a container and reattach the volume:
            <pre><code>docker run -d --name newdb -v mydata:/var/lib/mysql mysql:8.0</code></pre>
          </li>
          <li>If the container had no named volume (anonymous), try to find dangling volumes and inspect them before pruning:
            <pre><code>docker volume ls -qf dangling=true</code></pre>
          </li>
          <li>If the container was removed without the volume (and volume deleted), restore from backups (see below).</li>
        </ol>
        <p><strong>Pro tip:</strong> Always use named volumes and ensure backups are automated to avoid single-point data loss.</p>
      </div>`
      },
      {
        question: "How do you back up volume data?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Backing up a Docker Volume</strong></h3>
        <p>Classic backup pattern: run a temporary container that mounts the volume and creates a tarball on the host or remote storage.</p>
        <pre><code># backup volume to host directory (POSIX example)
mkdir -p /opt/backups
docker run --rm -v mydata:/data -v /opt/backups:/backup alpine \
  sh -c "cd /data && tar czf /backup/mydata-&dollar;(date +%F).tar.gz ."</code></pre>
        <p>Alternatively send tarball to S3/ACR/remote share by using a container with the appropriate client tools.</p>
      </div>`
      },
      {
        question: "How do you restore volume data?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Restore Volume From Backup</strong></h3>
        <p>Restore by mounting the volume and extracting the tarball back into it:</p>
        <pre><code># create/ensure target volume exists
docker volume create mydata

# restore into volume from host backup
docker run --rm -v mydata:/data -v /opt/backups:/backup alpine \
  sh -c "cd /data && tar xzf /backup/mydata-2025-01-10.tar.gz"</code></pre>
        <p>Then start your container mounting <code>mydata</code> as usual.</p>
      </div>`
      },
      {
        question: "What options exist for copying files between host and a container/volume?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📤 <strong>Copying Files In/Out</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>docker cp</code> — copy files between host and container filesystem:
            <pre><code>docker cp mycontainer:/var/lib/mysql/dump.sql /host/path/</code></pre>
          </li>
          <li>Temporary helper container (useful for volumes) as shown in backup/restore examples.</li>
          <li>Mount host bind mounts for easy access (but be careful with permissions and portability).</li>
        </ul>
      </div>`
      },
      {
        question: "How do you back up volumes when using orchestrators like Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☸️ <strong>Backups in Kubernetes</strong></h3>
        <p>
          Use CSI volume snapshots (if supported by the storage class) or tools like Velero to snapshot and backup persistent volumes and metadata.  
          For cloud mounts, use cloud provider snapshot features (Azure Disk snapshot, AWS EBS snapshot).
        </p>
      </div>`
      },
      {
        question: "What are bind mounts vs named volumes — pros and cons?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Bind Mounts vs Named Volumes</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Bind mounts</strong> (host directory mounted into container): simple, great for development, but less portable and can cause permission/ownership issues.</li>
          <li><strong>Named volumes</strong> (managed by Docker): portable across containers, safer defaults, stored in Docker-managed location, and easier to backup/inspect.</li>
        </ul>
        <p><strong>Rule:</strong> Use bind mounts for local dev (quick edits), use named volumes for production data persistence.</p>
      </div>`
      },
      {
        question: "How to automate backups and prevent data loss in production?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Automated Backup Strategies</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Schedule periodic backups with cron jobs or CI agents that run the temporary-container tar approach and push to offsite/long-term storage (S3, Azure Blob).</li>
          <li>Use cloud-native volume drivers (Azure File, Azure Disk, EBS) and rely on provider snapshots for point-in-time recovery.</li>
          <li>Implement retention policies and test restores regularly (DR drills).</li>
          <li>Monitor volume usage and set alerts to prevent running out of disk causing corruption.</li>
        </ul>
      </div>`
      },
      {
        question: "What about volume drivers and external storage integrations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔌 <strong>Volume Drivers & External Storage</strong></h3>
        <p>
          For production you may use volume drivers that integrate with NFS, cloud file services, or storage plugins (e.g., local-persist, rexray, cloud-specific CSI drivers).  
          These give advanced features: network-backed storage, snapshots, replication, and better portability across hosts.
        </p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Docker Compose & Multi-Container Setup",
    questions: [
      {
        question: "What is Docker Compose and how does it work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Docker Compose — Multi-container orchestration for dev/test</strong></h3>
        <p>
          Docker Compose is a tool to define and run multi-container applications using a YAML file (<code>docker-compose.yml</code>).  
          You declare services, networks, volumes, and Compose starts them in the correct order, wiring networking and volumes automatically.
        </p>
        <p><strong>How it works:</strong> Compose reads the YAML, creates required networks/volumes, builds images (if requested), and runs containers. Under the hood it uses the Docker Engine API.</p>
        <p><strong>In Practice:</strong> I use Compose to launch an app + DB + cache locally and in CI integration tests before deploying to Kubernetes.</p>
      </div>`
      },
      {
        question: "How do you define multiple services in a docker-compose.yml file?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📄 <strong>Example docker-compose.yml with multiple services</strong></h3>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>version: "3.8"
services:
  web:
    build: ./web
    ports:
      - "8080:80"
    depends_on:
      - api
    networks:
      - app-net

  api:
    image: myapi:latest
    environment:
      - DATABASE_URL=postgres://postgres:pass@db:5432/appdb
    networks:
      - app-net

  db:
    image: postgres:14
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: pass
    networks:
      - app-net

volumes:
  db-data:

networks:
  app-net:</code></pre>
        <p><strong>Notes:</strong> <code>depends_on</code> controls start order but not readiness — use healthchecks or wait-for scripts for true readiness.</p>
      </div>`
      },
      {
        question: "How do you bring up and shut down multi-container applications?",
        answerHtml: `
      <div class="answer-rich">
        <h3>▶️ / ⏹️ <strong>Compose lifecycle commands</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><code>docker compose up -d</code> — build (if needed) and start all services in background.</li>
          <li><code>docker compose ps</code> — list running services for the compose project.</li>
          <li><code>docker compose logs -f</code> — follow logs for all services.</li>
          <li><code>docker compose down</code> — stop and remove containers, networks (preserves named volumes by default).</li>
          <li><code>docker compose down --volumes --remove-orphans</code> — remove volumes and orphan containers tied to the project.</li>
        </ul>
        <p><strong>CI pattern:</strong> <code>docker compose -f docker-compose.ci.yml up --build --abort-on-container-exit</code> then capture exit code and <code>docker compose down --volumes</code>.</p>
      </div>`
      },
      {
        question: "What is the difference between Docker Compose and Docker Swarm?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Compose vs Swarm — comparison</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Docker Compose</strong> — developer/local & CI tool for defining multi-service stacks on a single host (though versioned Compose can target Swarm/K8s with transforms).</li>
          <li><strong>Docker Swarm</strong> — built-in Docker cluster orchestration for running services across multiple hosts with service scheduling, scaling, and built-in load balancing.</li>
        </ul>
        <p><strong>When to use:</strong> Compose for local dev, integration tests, and simple setups; Swarm (or preferably Kubernetes) for production multi-node orchestration and scaling.</p>
      </div>`
      },
      {
        question: "What are advantages of Compose for CI/CD setups?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Why Compose is great for CI/CD</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Reproducible environment: same stack locally and in CI.</li>
          <li>Fast spin-up of dependent services (DB, cache, mock services) for integration tests.</li>
          <li>Supports build-time image creation, so CI can build and test images before pushing to registry.</li>
          <li>Easy teardown ensures CI agents are clean after tests (<code>down --volumes</code>).</li>
          <li>Can run service-level tests by using <code>--abort-on-container-exit</code> to fail CI if tests inside containers fail.</li>
        </ul>
        <p><strong>Example CI flow:</strong> Checkout → docker compose -f docker-compose.ci.yml up --build --abort-on-container-exit → run result validations → docker compose down --volumes.</p>
      </div>`
      },
      {
        question: "How do you connect containers from different Docker Compose projects?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Connecting across Compose projects</strong></h3>
        <p>Use a shared external network or attach running containers to another project's network.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># 1) create a shared network
docker network create shared-net

# 2) in compose A (docker-compose-A.yml)
networks:
  shared-net:
    external: true

services:
  svcA:
    networks:
      - shared-net

# 3) in compose B (docker-compose-B.yml) also declare the same external network
networks:
  shared-net:
    external: true

# 4) bring both projects up; services can now resolve each other by container name</code></pre>
        <p>Alternatively, use <code>docker network connect</code> to attach containers from one compose project to a different network at runtime.</p>
        <p><strong>Note:</strong> Keep project names and service names predictable; use aliases in networks to simplify hostnames.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Security & Secret Management",
    questions: [
      {
        question: "How do you handle secrets inside containers (Key Vault, ENV, mounted files)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Managing Secrets Inside Containers</strong></h3>
        <p>
          In production, secrets are <strong>never baked into images</strong>.  
          Instead, they are injected securely at runtime using environment variables, mounted files, or secret stores.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Environment Variables</strong> — Simple, but avoid committing in Dockerfile. Pass via <code>docker run -e</code> or Compose <code>env_file</code>.</li>
          <li><strong>Mounted Files</strong> — Mount secrets as files from secret volumes (<code>-v /secrets:/run/secrets</code>).</li>
          <li><strong>Azure Key Vault</strong> — Best for production; fetch dynamically through managed identity or init script.</li>
        </ul>
        <p><strong>In Practice:</strong> I prefer Key Vault integration + environment injection at runtime. It ensures credentials never exist in the image or Git repo.</p>
      </div>`
      },
      {
        question: "How do you fetch secrets from Azure Key Vault into your container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Fetching Secrets from Azure Key Vault</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Assign a <strong>Managed Identity</strong> to the container or VM where Docker runs.</li>
          <li>Grant Key Vault <strong>Secret Get/List</strong> permissions to that identity.</li>
          <li>Use Azure CLI or SDK inside container to fetch secrets securely:
            <pre><code>az keyvault secret show --name db-password --vault-name myvault --query value -o tsv</code></pre>
          </li>
          <li>Alternatively, inject secrets via pipeline before deployment (e.g. Azure DevOps variable group linked with Key Vault).</li>
        </ol>
        <p><strong>Example:</strong> In ADO pipeline, link Key Vault → inject secrets as environment variables → pass them to Docker container at runtime.</p>
      </div>`
      },
      {
        question: "How do you handle secrets for PHP → MySQL connection in Docker?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐘 <strong>PHP → MySQL Secret Management</strong></h3>
        <p>Never hardcode DB credentials in PHP config or Dockerfile. Use env variables or secret mounts:</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>version: "3.8"
services:
  web:
    image: php:8.2-apache
    environment:
      - DB_HOST=mysql
      - DB_USER=&dollar;{DB_USER}
      - DB_PASS=&dollar;{DB_PASS}
    env_file: .env
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: &dollar;{DB_PASS}
    volumes:
      - mysql-data:/var/lib/mysql

volumes:
  mysql-data:</code></pre>
        <p><strong>In Practice:</strong> I store <code>.env</code> in secure pipeline storage (ADO Library or Key Vault). It’s injected at runtime and never checked into Git.</p>
      </div>`
      },
      {
        question: "What is the best way to inject secrets securely in runtime?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Secure Runtime Secret Injection</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Docker Secrets</strong> (Swarm/K8s) or external stores like <strong>Azure Key Vault</strong>.</li>
          <li>Inject via orchestrator or pipeline — never store in image layers.</li>
          <li>Use <strong>Managed Identity</strong> for automatic token-based authentication.</li>
          <li>Mount secrets read-only in container (e.g., <code>/run/secrets/db_password</code>).</li>
          <li>Rotate credentials regularly and ensure containers restart on rotation.</li>
        </ul>
        <p><strong>Best Practice:</strong> Keep runtime secrets ephemeral — use short-lived tokens (AAD, Vault references) rather than static passwords.</p>
      </div>`
      },
      {
        question: "What are the recommended practices to scan images for vulnerabilities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Container Image Vulnerability Scanning</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Docker Scout</strong>, <strong>Trivy</strong>, or <strong>Anchore</strong> to scan images during build or CI.</li>
          <li>Enable <strong>ACR Vulnerability Scanning</strong> for Azure Container Registry.</li>
          <li>Scan both base and application layers regularly.</li>
          <li>Keep base images updated and use minimal base images (e.g. <code>alpine</code>).</li>
          <li>Integrate scans in CI/CD pipelines — fail build if critical CVEs found.</li>
        </ul>
        <p><strong>In Practice:</strong> I run Trivy as a pre-deployment step and configured ACR to auto-scan pushed images. Reports are reviewed during release gates.</p>
      </div>`
      },
      {
        question: "Scenario: You wrote a Dockerfile for NGINX (latest version). It was working fine earlier, but now shows vulnerability issues — what might have happened?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>“Latest” Tag — The Hidden Trap</strong></h3>
        <p>
          The <code>:latest</code> tag always pulls the most recent image from the registry.  
          That means if NGINX released a newer base image with CVEs, your pipeline fetched it automatically.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Latest tag changed → new image pulled with new vulnerabilities.</li>
          <li>Always <strong>pin versions</strong> (e.g. <code>nginx:1.25.3-alpine</code>).</li>
          <li>Regularly re-scan and rebuild pinned images to patch known CVEs.</li>
          <li>Use trusted registries and sign images for integrity validation.</li>
        </ul>
        <p><strong>In Practice:</strong> I lock Dockerfile base versions and have a monthly “base image refresh” pipeline to update & rescan images safely.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Troubleshooting & Debugging Containers",
    questions: [
      {
        question: "How do you troubleshoot container startup issues?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Container startup troubleshooting — quick checklist</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Check container status & exit code:</strong>
            <pre><code>docker ps -a
docker inspect --format '{{.State.Status}} {{.State.ExitCode}}' mycontainer</code></pre>
          </li>
          <li><strong>View logs:</strong> first thing — container logs often show config/env errors:
            <pre><code>docker logs mycontainer
docker logs --since 5m --tail 200 -f mycontainer</code></pre>
          </li>
          <li><strong>Common root causes:</strong> wrong CMD/ENTRYPOINT, missing env vars, volume mount errors (file not found / permission), healthcheck failures, missing config files, or port conflicts.</li>
          <li><strong>Reproduce interactively:</strong> start shell instead of default process to inspect filesystem:
            <pre><code>docker run --rm -it --entrypoint /bin/sh myimage</code></pre>
          </li>
          <li><strong>Build-time issues:</strong> use verbose build logs:
            <pre><code>docker build --progress=plain --no-cache -t debug-image .</code></pre>
          </li>
          <li><strong>Inspect metadata:</strong> check environment, mounts, and entrypoint:
            <pre><code>docker inspect mycontainer | jq '.[0].Config'
docker inspect -f '{{.Mounts}} {{.Config.Env}}' mycontainer</code></pre>
          </li>
        </ol>
        <p><strong>Pro tip:</strong> Add small healthchecks and verbose startup logs in your app — saves 80% of debugging time in CI.</p>
      </div>`
      },
      {
        question: "How do you check logs or live attach to a running container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Logs & attach</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>View logs</strong>:
            <pre><code>docker logs mycontainer            # full logs
docker logs -f mycontainer          # follow (live)
docker logs --since 1m mycontainer  # logs since 1 minute</code></pre>
          </li>
          <li><strong>Attach to main process</strong>:
            <pre><code>docker attach mycontainer</code></pre>
            <p>Warning: <code>attach</code> attaches to the container's main PID — detaching requires <code>Ctrl+P Ctrl+Q</code> or you'll kill the process.</p>
          </li>
          <li><strong>Prefer exec for debugging</strong> (safer, spawns a new shell/process):
            <pre><code>docker exec -it mycontainer /bin/bash</code></pre>
          </li>
        </ul>
      </div>`
      },
      {
        question: "How do you use docker exec to debug inside a container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Using <code>docker exec</code> for debugging</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Start an interactive shell:
            <pre><code>docker exec -it mycontainer /bin/bash   # or /bin/sh</code></pre>
          </li>
          <li>Inspect filesystem, permissions and config files:
            <pre><code>ls -la /app
cat /app/config.yaml
ps aux</code></pre>
          </li>
          <li>Run network checks from inside:
            <pre><code>curl -sv http://backend:8080/health
nslookup redis</code></pre>
          </li>
          <li>Check process tree or open files:
            <pre><code>top or htop
lsof -p <pid></code></pre>
          </li>
          <li>If container image lacks tools, run a debug container that mounts the same volumes:
            <pre><code>docker run --rm -it -v mydata:/data --network container:mycontainer alpine /bin/sh</code></pre>
          </li>
        </ol>
        <p><strong>Note:</strong> <code>exec</code> spawns a new process; it does not disturb the main PID and is the preferred debug method.</p>
      </div>`
      },
      {
        question: "How do you investigate high CPU/memory usage of a container?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔥 <strong>Investigate resource spikes</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Live metrics:</strong> use docker stats for quick view:
            <pre><code>docker stats mycontainer            # live CPU/memory/IO</code></pre>
          </li>
          <li><strong>Top processes inside container:</strong>
            <pre><code>docker exec -it mycontainer top   # or ps aux --sort=-%cpu</code></pre>
          </li>
          <li><strong>Inspect cgroup limits and usage:</strong>
            <pre><code>docker inspect -f '{{.HostConfig.Memory}} {{.HostConfig.CpuShares}}' mycontainer</code></pre>
          </li>
          <li><strong>Check application logs & GC (for Java/Node):</strong> look for memory leaks, frequent GC pauses, or runaway loops.</li>
          <li><strong>Profile the app:</strong> attach profiler (e.g., pprof, Java Flight Recorder) or enable app-level metrics.</li>
          <li><strong>Temporary mitigation:</strong> restart container or scale out replicas and then perform full root-cause analysis.</li>
        </ol>
        <p><strong>Prevention:</strong> set resource limits at runtime (<code>--memory</code>, <code>--cpus</code>) and add monitoring/alerts (Prometheus/Grafana or cloud metrics).</p>
      </div>`
      },
      {
        question: "How do you resolve “port already in use” errors?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📌 <strong>Fixing port conflicts</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Check which container/process uses the port:
            <pre><code># Docker containers
docker ps --format 'table {{.ID}}\t{{.Names}}\t{{.Ports}}'

# Host process (Linux)
ss -tulpn | grep :8080
# or
lsof -i :8080</code></pre>
          </li>
          <li>If another container is using the port, stop it:
            <pre><code>docker stop <container-name-or-id></code></pre>
          </li>
          <li>Change host port mapping when running the container:
            <pre><code>docker run -p 8081:80 myimage</code></pre>
          </li>
          <li>If host service uses the port, either stop the host service or choose a different host port for the container mapping.</li>
          <li>In CI, ensure ephemeral ports or random port allocation to avoid collisions on shared agents.</li>
        </ol>
      </div>`
      },
      {
        question: "How do you troubleshoot networking issues between containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Container networking troubleshooting</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>Confirm network membership:</strong>
            <pre><code>docker network inspect my-net   # see attached containers and IPs</code></pre>
          </li>
          <li><strong>Ping / curl between containers:</strong>
            <pre><code>docker exec -it web ping api
docker exec -it web curl -v http://api:8080/health</code></pre>
          </li>
          <li><strong>DNS issues:</strong> ensure containers are on a user-defined network (gives automatic DNS), or check /etc/hosts inside container.</li>
          <li><strong>Check port mapping vs container port:</strong> ensure service binds to 0.0.0.0 inside container (not 127.0.0.1).</li>
          <li><strong>Inspect iptables / host firewall:</strong> host-level firewall could block traffic between containers or to the host ports.</li>
          <li><strong>Overlay/multi-host issues:</strong> verify VXLAN/overlay encryption & Swarm/K8s control plane connectivity; check overlay network logs.</li>
        </ol>
        <p><strong>Debug pattern:</strong> reproduce from a debug container on same network, <code>tcpdump</code> if needed, and inspect docker daemon logs for network driver errors.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Scripting & Automation",
    questions: [
      {
        question: "Can you write a shell script to copy a file to another server where source/destination are provided by user input?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📝 <strong>Interactive shell script to copy file via SCP</strong></h3>
        <p>Simple, safe script that prompts the user for source path, target user@host:path and optional SSH key. Validates inputs and uses <code>scp</code>.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>#!/usr/bin/env bash
set -euo pipefail

read -rp "Source file (local path): " SRC
read -rp "Destination (user@host:/path): " DEST
read -rp "Use SSH key? (path or leave empty): " SSH_KEY

# Basic validation
if [[ ! -f "&dollar;SRC" ]]; then
  echo "ERROR: Source file does not exist: &dollar;SRC" >&2
  exit 2
fi

SCP_CMD=(scp -o StrictHostKeyChecking=accept-new -q)

if [[ -n "&dollar;SSH_KEY" ]]; then
  SCP_CMD+=(-i "&dollar;SSH_KEY")
fi

# Run scp
"\&dollar;{SCP_CMD[@]}" "&dollar;SRC" "&dollar;DEST" && echo "File copied to &dollar;DEST"</code></pre>
        <p><strong>Notes / production tips:</strong> use SSH keys (no password), wrap in retry logic for flaky networks, or use rsync for resumable transfers (<code>rsync -avz -e 'ssh -i key' src user@host:/dest</code>).</p>
      </div>`
      },
      {
        question: "How do you automate image builds using scripts or pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Automated image build patterns</strong></h3>
        <p>Typical CI flow: checkout → run lints/tests → build image → tag with semver + commit SHA → push to registry → run image scan → promote.</p>
        <h4>Shell script example (CI-friendly)</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># build-and-push.sh
set -euo pipefail

IMAGE_NAME="myacr.azurecr.io/myapp"
TAG="\&dollar;{1:- &dollar;(git rev - parse--short HEAD)}"   # default to short SHA

docker build - t "\&dollar;{IMAGE_NAME}:\&dollar;{TAG}".
docker build - t "\&dollar;{IMAGE_NAME}:latest".
docker push "\&dollar;{IMAGE_NAME}:\&dollar;{TAG}"
docker push "\&dollar;{IMAGE_NAME}:latest"

# Optional scan(using trivy)
trivy image--exit - code 1 --severity CRITICAL "\&dollar;{IMAGE_NAME}:\&dollar;{TAG}" || {
    echo "Vulnerability found! Failing pipeline."
  exit 1
} < /code></pre >
  <p><strong>CI note: </strong> Make CI agent login to registry via service principal / managed identity rather than storing creds on runner.</p>
  </div>`
      },
      {
        question: "How do you integrate Docker with CI/CD pipelines (Azure DevOps, Jenkins, GitHub Actions)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>CI/CD integration — short & practical snippets</strong></h3>

        <h4>Azure DevOps (YAML) — build & push to ACR</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>trigger:
  branches:
    include: [ main ]

pool:
  vmImage: 'ubuntu-latest'

variables:
  imageName: 'myapp'

steps:
- task: Docker@2
  displayName: Build and push
  inputs:
    command: buildAndPush
    repository: &dollar;(acrLoginServer)/&dollar;(imageName)
    dockerfile: Dockerfile
    tags: |
      &dollar;(Build.SourceVersion)
      latest
    containerRegistry: 'my-acr-service-connection'</code></pre>

        <h4>Jenkins (Declarative) — build & push</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          def image = docker.build("myacr.azurecr.io/myapp:&dollar;{env.GIT_COMMIT.take(7)}")
          docker.withRegistry('https://myacr.azurecr.io', 'acr-creds') {
            image.push()
            image.push('latest')
          }
        }
      }
    }
  }
}</code></pre>

        <h4>GitHub Actions — build & push</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: azure/docker-login@v1
        with:
          login-server: myacr.azurecr.io
          username: &dollar;{{ secrets.ACR_USER }}
          password: &dollar;{{ secrets.ACR_PASS }}
      - name: Build and push
        run: |
          docker build -t myacr.azurecr.io/myapp:&dollar;{{ github.sha }} .
          docker push myacr.azurecr.io/myapp:&dollar;{{ github.sha }}</code></pre>

        <p><strong>Best practice:</strong> use service connections, managed identities, or built-in tokens — never echo registry creds in logs.</p>
      </div>`
      },
      {
        question: "How do you automate cleanup of old images/containers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Automated cleanup strategies</strong></h3>
        <p>Combine local host cleanup + registry retention policy to control disk and storage consumption.</p>

        <h4>Local cleanup (hosts / CI agents)</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># simple cron job script: /usr/local/bin/cleanup-docker.sh
#!/usr/bin/env bash
set -euo pipefail

# remove stopped containers
docker container prune -f

# remove dangling images
docker image prune -f

# remove unused images & volumes older than 72 hours
docker system prune -a --volumes --filter "until=72h" -f</code></pre>
        <p>Schedule it in cron (e.g., nightly): <code>0 3 * * * /usr/local/bin/cleanup-docker.sh &gt;/var/log/docker-cleanup.log 2>&1</code></p>

        <h4>Registry-side cleanup (ACR / Docker Registry)</h4>
        <ul style="margin-left:1.2rem;">
          <li>Use ACR retention / purge policies to automatically delete untagged images or images older than N days.</li>
          <li>Use lifecycle rules: tag immutability for semver/digest-based deploys, and keep only X latest tags for non-production branches.</li>
          <li>For on-prem registry, run scheduled scripts that call registry API to delete older images by tag/date.</li>
        </ul>

        <h4>Example: keep only last N tags in CI</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># pseudo-script idea: list tags, skip top N, delete older tags using registry API or az acr repository delete</code></pre>

        <p><strong>Pro tip:</strong> Never delete images that production might rely on — use immutability and promote-by-digest to ensure deployed images remain available even if tags are pruned.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "13. Git Integration & Code Management",
    questions: [
      {
        question: "How can you copy code from one branch to another in GitHub?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Copy code between branches — practical methods</strong></h3>
        <p>There are multiple ways depending on what you want (entire branch, a single commit, or selected files):</p>
        <ul style="margin-left:1.2rem;">
          <li>
            <strong>Merge entire branch</strong> — best when you want all changes:
            <pre><code># from target branch
git checkout target-branch
git merge source-branch
# resolve conflicts, commit, push
git push origin target-branch</code></pre>
          </li>
          <li>
            <strong>Cherry-pick one or more commits</strong> — pick specific commits:
            <pre><code>git checkout target-branch
git cherry-pick <commit-sha>       # repeat for multiple commits
git push origin target-branch</code></pre>
          </li>
          <li>
            <strong>Checkout specific files from another branch</strong> — copy selected files only:
            <pre><code>git checkout source-branch -- path/to/file1 path/to/dir/
git commit -m "Bring file1 from source-branch"
git push origin target-branch</code></pre>
          </li>
          <li>
            <strong>Interactive patch (select hunks)</strong> — when you need fine-grained control:
            <pre><code>git checkout target-branch
git checkout -p source-branch -- path/to/file   # choose hunks interactively
git commit -m "Selective patch from source-branch"
git push</code></pre>
          </li>
          <li>
            <strong>Via Pull Request (recommended for teams)</strong> — open a PR from source → target, run CI, get approvals, merge. Gives audit trail and review.
          </li>
        </ul>
        <p><strong>Pro tip:</strong> Use PRs for code review and traceability. Use cherry-pick for urgent hotfixes where PR workflows are too slow.</p>
      </div>`
      },
      {
        question: "How do you connect Docker build automation with GitHub repositories?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Automate Docker builds from GitHub — common approaches</strong></h3>
        <p>Typical patterns: GitHub Actions (native), CI server (Jenkins/Azure DevOps), or Docker Hub automated builds.</p>

        <h4>1) GitHub Actions (recommended)</h4>
        <p>Example workflow: build image on push, tag with SHA, push to ACR or Docker Hub, run vulnerability scan.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>name: CI - Build & Push
on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up QEMU (optional for multi-arch)
        uses: docker/setup-qemu-action@v2
      - name: Log in to ACR
        uses: azure/docker-login@v1
        with:
          login-server: myacr.azurecr.io
          username: &dollar;{{ secrets.ACR_USER }}
          password: &dollar;{{ secrets.ACR_PASS }}
      - name: Build and push
        run: |
          docker build -t myacr.azurecr.io/myapp:&dollar;{{ github.sha }} .
          docker push myacr.azurecr.io/myapp:&dollar;{{ github.sha }}</code></pre>

        <h4>2) Azure DevOps / Jenkins</h4>
        <p>Use pipeline tasks or Jenkins Docker plugin to build/push images. Use service connections or credentials stored securely in pipeline secrets.</p>

        <h4>3) Docker Hub Automated Builds</h4>
        <p>Link GitHub repo to Docker Hub and configure build rules — convenient but less flexible than Actions/ADO for complex workflows.</p>

        <p><strong>Best practices:</strong> tag images by commit SHA, use signed images or content digest in manifests, run image scans in pipeline, and avoid using <code>latest</code> in production deploys.</p>
      </div>`
      },
      {
        question: "How do you use Docker Hub or ACR as an artifact repository?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Using Docker Hub / ACR as artifact registries</strong></h3>
        <p>Both Docker Hub and Azure Container Registry act as artifact stores for images. Use them to store, version, and distribute images to environments.</p>

        <h4>Push / Pull flow</h4>
        <pre><code># tag for registry
docker tag myapp:1.0 myacr.azurecr.io/myapp:1.0

# login (ACR example)
az acr login --name myacr

# push image
docker push myacr.azurecr.io/myapp:1.0

# pull image on target host
docker pull myacr.azurecr.io/myapp:1.0</code></pre>

        <h4>Registry features & best practices</h4>
        <ul style="margin-left:1.2rem;">
          <li><strong>Authentication:</strong> Use service principals / managed identities (ACR) or tokens/secrets. Avoid storing plaintext creds in code.</li>
          <li><strong>Tagging:</strong> Use semantic versions + commit SHA; use image digests in deployment manifests for immutability.</li>
          <li><strong>Retention/Lifecycle:</strong> Configure retention policies (ACR) to purge old, untagged images and save storage costs.</li>
          <li><strong>Scanning:</strong> Enable vulnerability scanning (ACR Tasks or integrated scanners like Trivy/Anchore).</li>
          <li><strong>Geo-replication:</strong> ACR Premium supports geo-replication for faster pulls; Docker Hub has rate limits — consider private registries for heavy usage.</li>
          <li><strong>Immutability:</strong> Prefer promoting images by digest instead of mutable tags in production deployments.</li>
        </ul>

        <p><strong>In Practice:</strong> I push CI images to ACR with both <code>semver</code> and <code>sha</code> tags, scans run automatically, and K8s manifests reference the image digest for deployment immutability.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Advanced Docker Topics",
    questions: [
      {
        question: "What is a multi-stage build and when is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Multi-stage builds — optimize build size & security</strong></h3>
        <p>
          Multi-stage builds let you use multiple <code>FROM</code> statements in a single Dockerfile, 
          copying only the required artifacts from the builder image to the final runtime image.
        </p>
        <p><strong>Why:</strong> reduces image size, removes compilers/tools, and improves security by keeping only production binaries.</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># Example: Node.js build → lightweight runtime
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
CMD ["node", "dist/server.js"]</code></pre>
        <p><strong>In Practice:</strong> I use this for every production image — clean final layer, smaller attack surface, and faster pull times in CI/CD.</p>
      </div>`
      },
      {
        question: "What is Docker Swarm? How does it differ from Compose?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Docker Swarm vs Compose</strong></h3>
        <p><strong>Docker Swarm</strong> is Docker's native container orchestration tool — it manages multiple nodes, handles service discovery, scaling, and rolling updates.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Docker Compose</strong> — local multi-container setup, single-host only, great for development.</li>
          <li><strong>Swarm</strong> — multi-host clustering, high availability, load balancing, secrets, and rolling deployments.</li>
        </ul>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># Deploy a stack using Docker Swarm
docker swarm init
docker stack deploy -c docker-compose.yml myapp</code></pre>
        <p><strong>In Practice:</strong> I used Swarm in small-scale setups before moving to Kubernetes — Swarm is simpler but lacks advanced scheduling and ecosystem integration.</p>
      </div>`
      },
      {
        question: "What is the role of Docker in Kubernetes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Docker’s role in Kubernetes</strong></h3>
        <p>
          Docker acts as the <strong>container runtime</strong> for Kubernetes — it builds and runs containers from images.
        </p>
        <p>
          Kubernetes abstracts the runtime using the <strong>Container Runtime Interface (CRI)</strong>.
          Historically, Kubernetes used Docker as its default runtime (via dockershim), 
          but now supports <strong>containerd</strong> and <strong>CRI-O</strong> natively.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Docker builds → produces OCI-compliant images</li>
          <li>K8s pulls those images → runs them via containerd</li>
          <li>Docker CLI → developer-friendly build/test interface</li>
        </ul>
        <p><strong>In Practice:</strong> I still use Docker for local builds and testing, then deploy those images to AKS via containerd runtime — both are fully compatible.</p>
      </div>`
      },
      {
        question: "How do you optimize Docker image builds for speed and security?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Optimizing image builds — speed + security</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>multi-stage builds</strong> to remove build-time dependencies.</li>
          <li>Leverage <strong>Docker layer caching</strong> — place <code>RUN apt-get install</code> and <code>COPY package.json</code> early in the file.</li>
          <li>Use minimal base images (<code>alpine</code>, <code>distroless</code>).</li>
          <li>Run as <strong>non-root user</strong> (<code>USER appuser</code>).</li>
          <li>Use <strong>.dockerignore</strong> to exclude unnecessary files from the build context.</li>
          <li>Scan for vulnerabilities with <strong>Trivy</strong> or <strong>Docker Scout</strong>.</li>
          <li>Use <strong>BuildKit</strong> for parallel builds:
            <pre><code>DOCKER_BUILDKIT=1 docker build -t app:latest .</code></pre>
          </li>
          <li>Sign images with <strong>cosign</strong> or <strong>notary</strong> for supply-chain integrity.</li>
        </ul>
        <p><strong>In Practice:</strong> I always keep base images lightweight and rebuild only when dependencies change. 
        BuildKit + Trivy in CI reduces build time by ~40% and ensures CVEs are caught early.</p>
      </div>`
      },
      {
        question: "How do you handle image versioning and dependency updates?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Versioning strategy for images</strong></h3>
        <p><strong>Image tagging patterns:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><code>app:1.0.0</code> — semantic version for releases.</li>
          <li><code>app:1.0.0-commitSHA</code> — immutable reference per build.</li>
          <li><code>app:latest</code> — development/testing only (never for prod).</li>
        </ul>
        <p><strong>Dependency updates:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Automate base image updates using Dependabot or Renovate Bot.</li>
          <li>Use <code>FROM ubuntu:22.04</code> instead of <code>FROM ubuntu:latest</code> to avoid breaking builds.</li>
          <li>Rebuild regularly with CI to pull latest patches even if app code hasn’t changed.</li>
          <li>Run vulnerability scans after rebuilds and fail builds for critical CVEs.</li>
        </ul>
        <p><strong>In Practice:</strong> Every image tag in my pipelines follows <code>vX.Y.Z-<SHA></code>. 
        We promote images by digest between environments (DEV → QA → PROD) for full traceability.</p>
      </div>`
      },
      {
        question: "How do you integrate vulnerability scanning into image pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Integrating image scanning into CI/CD</strong></h3>
        <p>Security scanning should run after build and before deployment. You can use CLI tools or cloud-native scanners.</p>
        <h4>Example using <strong>Trivy</strong> in CI pipeline:</h4>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code>steps:
  - name: Scan image for vulnerabilities
    run: |
      trivy image --exit-code 1 --severity HIGH,CRITICAL myacr.azurecr.io/myapp:&dollar;{{ github.sha }}</code></pre>
        <h4>Azure DevOps built-in scanning:</h4>
        <p>ACR can automatically scan pushed images (with Defender for Cloud).  
        You can also trigger ADO gate policies based on scan results before promoting images to PROD.</p>
        <ul style="margin-left:1.2rem;">
          <li>Integrate scanning task post-build.</li>
          <li>Fail pipeline if critical CVEs are found.</li>
          <li>Store scan reports as pipeline artifacts for audit.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate Trivy in Docker build stage + ACR Defender scans in PROD registry — gives double assurance and traceability.</p>
      </div>`
      }
    ]
  }
  ,
{
  title: "15. Real-World Scenarios & Interview Situations",
  questions: [
    {
      question: "Scenario: Container startup fails due to missing environment variables — how do you fix it?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🚨 <strong>Container failed due to missing environment variables</strong></h3>
        <p><strong>Diagnosis Steps:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Check logs: <code>docker logs &lt;container_id&gt;</code> — look for <em>“key not found”</em> or <em>undefined variable</em> errors.</li>
          <li>Inspect envs inside container: <code>docker exec -it &lt;container_id&gt; env</code></li>
          <li>Review <code>docker run</code> or Compose YAML — see if <code>environment:</code> or <code>--env-file</code> is missing.</li>
        </ul>
        <p><strong>Fixes:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Add env vars in Compose:</li>
          <pre><code>environment:
  DB_HOST: mysql
  DB_USER: admin
  DB_PASS: &dollar;{DB_PASS}</code></pre>
          <li>Or load via <code>--env-file .env</code> when running manually.</li>
          <li>For secrets, mount from Azure Key Vault or secret manager instead of plaintext envs.</li>
        </ul>
        <p><strong>Pro tip:</strong> Add validation logic (like <code>ENTRYPOINT ["/bin/sh", "-c", "test -n \\"&dollar;DB_HOST\\" || exit 1; exec node app.js"]</code>) to fail fast and detect missing vars early in CI.</p>
      </div>`
    },
    {
      question: "Scenario: Application container is unreachable — how do you check its network configuration?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>App unreachable — debugging Docker networking</strong></h3>
        <p><strong>Step-by-step troubleshooting:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Check container status: <code>docker ps</code> — ensure it’s running.</li>
          <li>Inspect port mapping: <code>docker port &lt;container_id&gt;</code> — confirm host:container ports (e.g. 8080:80).</li>
          <li>Verify app binding: inside container run <code>netstat -tulnp</code> or <code>curl localhost:&lt;port&gt;</code> — app must listen on <code>0.0.0.0</code>.</li>
          <li>Check Docker network connectivity: <code>docker network inspect bridge</code> — ensure container IP reachable.</li>
          <li>Run a test container in same network: <code>docker run -it --network app-net busybox ping myapp</code></li>
          <li>For Compose, confirm all services share same <code>networks:</code> section.</li>
        </ul>
        <p><strong>Root causes:</strong> app listening only on 127.0.0.1, wrong port exposed, container not attached to network, or firewall blocking traffic.</p>
      </div>`
    },
    {
      question: "Scenario: Disk space is full — how do you clean up unused images?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🧹 <strong>Handling full disk due to Docker artifacts</strong></h3>
        <p><strong>Quick clean-up commands:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;color:#fff;"><code># Remove stopped containers
docker container prune -f

# Remove dangling (untagged) images
docker image prune -f

# Remove all unused images, networks, and build cache
docker system prune -a -f --volumes</code></pre>
        <p><strong>Preventive actions:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Set up cron cleanup scripts on self-hosted agents.</li>
          <li>Use smaller base images (alpine/distroless) to reduce cache size.</li>
          <li>Implement retention policies for images in ACR/Docker Hub.</li>
        </ul>
        <p><strong>In Practice:</strong> I monitor <code>/var/lib/docker</code> size via Prometheus alerts and auto-trigger prune jobs on CI runners when usage crosses 80%.</p>
      </div>`
    },
    {
      question: "Scenario: Vulnerability scanner flags your image — what actions do you take?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Responding to image vulnerability alerts</strong></h3>
        <p><strong>Remediation process:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Review scanner report (Trivy, ACR Defender, Aqua, etc.) — identify <em>critical/high</em> CVEs.</li>
          <li>Check if vulnerability is from base image (e.g., <code>ubuntu:20.04</code>) or app libraries.</li>
          <li>Rebuild image with updated base layer or dependencies:
            <pre><code>docker build --no-cache -t app:patched .</code></pre>
          </li>
          <li>Apply package updates (<code>apt-get update && apt-get upgrade -y</code> or <code>npm audit fix</code>).</li>
          <li>Scan again post-build to validate fix.</li>
          <li>For false positives — cross-check NVD or vendor site and suppress only verified safe ones.</li>
        </ul>
        <p><strong>Preventive measures:</strong> Pin base images by digest, use Renovate/Dependabot for version bumps, integrate image scanning in every CI build.</p>
      </div>`
    },
    {
      question: "Scenario: Multi-stage build image isn’t copying final artifact — how do you debug the build?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Debugging multi-stage build copy issues</strong></h3>
        <p><strong>Common issue:</strong> <code>COPY --from=build /app/dist ./</code> fails or missing files in final image.</p>
        <p><strong>Debugging steps:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Inspect intermediate build layers with <code>--target</code>:
            <pre><code>docker build --target build -t build-stage .</code></pre>
          </li>
          <li>Run the intermediate image to verify files exist:
            <pre><code>docker run -it build-stage ls /app/dist</code></pre>
          </li>
          <li>Ensure correct paths and spelling — e.g. <code>/app/dist</code> vs <code>/app/build</code>.</li>
          <li>Confirm <code>WORKDIR</code> consistency between stages.</li>
          <li>Use <code>--progress=plain</code> for verbose build logs.</li>
        </ul>
        <p><strong>In Practice:</strong> I always specify absolute paths and use <code>ls</code> checks in build stage before final copy. Most multi-stage issues are path mismatches or missing artifacts after npm/mvn build steps.</p>
      </div>`
    }
  ]
}

];


export interface QuestionAnswer {
  question: string;
  answer?: string;
  answerHtml?: string;
}

export const azureDevOpsSections = [
  {
    title: "1. Azure DevOps Fundamentals",
    questions: [
      {
        question: "What is Azure DevOps and what are its main components?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🚀 <strong>What is Azure DevOps?</strong></h3>
          <p style="margin:0 0 .6rem; font-weight:600;">
            Azure DevOps is a Microsoft platform that helps teams plan, build, test and deliver software reliably — all in one place. It's used to implement CI/CD, track work, store code and manage packages.
          </p>

          <strong>🧩 Main Components (quick):</strong>
          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>💾 <strong>Azure Repos</strong> — Git-based source control (branches, PRs).</li>
            <li>⚙️ <strong>Pipelines</strong> — Build & release automation (YAML or classic).</li>
            <li>🗓️ <strong>Boards</strong> — Work tracking (stories, tasks, bugs).</li>
            <li>📦 <strong>Artifacts</strong> — Package feed (npm, NuGet, Maven).</li>
            <li>🧪 <strong>Test Plans</strong> — Manual & automated test management.</li>
          </ul>

          <div style="margin:.6rem 0;">
            <strong>🔎 Simple use:</strong>
            <p style="margin:.25rem 0 0;">Use Repos for code, Pipelines for CI/CD, Boards for planning and Artifacts to share builds. This creates a repeatable, auditable delivery flow.</p>
          </div>

          <div style="margin:.6rem 0; padding:.5rem; background:rgba(255,255,255,0.02); border-radius:.4rem;">
            <strong>In practice:</strong>
            <p style="margin:.25rem 0 0;">I glue these together — code in Repos → YAML pipeline builds Docker image → publish to ACR → Helm/Terraform deploy to AKS → Boards link deployment to work item.</p>
          </div>
        </div>`
      },
      {
        question: "What are Repos, Pipelines, Boards, Artifacts, and Test Plans in ADO?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">💡 Short mapping — what does each service do?</h3>
          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>💾 <strong>Repos</strong> — store code, manage branches, create PRs and enforce policies.</li>
            <li>⚙️ <strong>Pipelines</strong> — CI/CD: build, test, and deploy automatically.</li>
            <li>🗓️ <strong>Boards</strong> — track stories, sprints, tasks and link them to commits or builds.</li>
            <li>📦 <strong>Artifacts</strong> — host and version internal packages and build outputs.</li>
            <li>🧪 <strong>Test Plans</strong> — write and run manual/automated tests and log results.</li>
          </ul>

          <div style="margin:.5rem 0;">
            <strong>Practical tip:</strong>
            <p style="margin:.25rem 0 0;">Always link PRs to Board work items and pipeline runs to get traceability: commit → build → release mapped to a ticket.</p>
          </div>
        </div>`
      },
      {
        question: "What services of the Azure DevOps portal have you used?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🧰 Hands-on services I use</h3>
          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>🔹 <strong>Repos</strong> — branch policies, PR templates, protected branches.</li>
            <li>🔹 <strong>Pipelines</strong> — YAML pipelines, templates, self-hosted agents, service connections.</li>
            <li>🔹 <strong>Boards</strong> — sprint planning and work item linking for releases.</li>
            <li>🔹 <strong>Artifacts</strong> — internal npm/nuget feeds for CI reuse.</li>
          </ul>

          <div style="margin:.5rem 0;">
            <strong>Example:</strong>
            <p style="margin:.25rem 0 0;">Built CI pipelines that run unit tests, SonarQube scan, build Docker images and push to ACR; CD pipelines deploy via Helm to AKS with environment approvals.</p>
          </div>
        </div>`
      },
      {
        question: "Tell me about the complete CI/CD process followed in your company",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🚀 End-to-end CI/CD – simple flow</h3>
          <p style="margin:0 0 .5rem;">We follow a gated CI/CD pipeline from code commit to production with checks and approvals at each stage.</p>

          <strong>Flow (short):</strong>
          <ol style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>Developer creates feature branch → opens PR.</li>
            <li>PR triggers CI: compile, unit tests, lint, SonarQube, build Docker image, push to ACR.</li>
            <li>Artifact triggers CD: deploy to staging via Helm/Terraform → run smoke tests.</li>
            <li>After manual approval, promote to production with monitoring checks.</li>
          </ol>

          <div style="margin:.6rem 0; padding:.5rem; background:rgba(255,255,255,0.02); border-radius:.4rem;">
            <strong>Why this helps:</strong>
            <p style="margin:.25rem 0 0;">Automated checks reduce human error, artifacts are versioned so rollbacks are easy, and approvals/gates protect production.</p>
          </div>
        </div>`
      },
      {
        question: "What are pipelines and how are they structured?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🧩 Pipeline structure — stages, jobs, steps</h3>
          <p style="margin:0 0 .5rem;">A pipeline is automation defined as code (YAML). It has:</p>
          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>🏗️ <strong>Stages</strong> — logical phases (Build / Test / Deploy).</li>
            <li>🧰 <strong>Jobs</strong> — units that run on agents (Windows/Linux/self-hosted).</li>
            <li>🪜 <strong>Steps</strong> — individual tasks/scripts (dotnet build, docker build, terraform apply).</li>
          </ul>

          <div style="margin:.5rem 0;">
            <strong>Tip:</strong>
            <p style="margin:.25rem 0 0;">Keep stages small and use templates for repeated tasks (build-template.yml, deploy-template.yml). Use variable groups for env-specific values.</p>
          </div>
        </div>`
      },
      {
        question: "Explain the difference between Classic and YAML pipelines",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">📊 Classic vs YAML — quick compare</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:.5rem;">
            <tr><th style="text-align:left; padding:.25rem .5rem;">Feature</th><th style="text-align:left; padding:.25rem .5rem;">Classic</th><th style="text-align:left; padding:.25rem .5rem;">YAML</th></tr>
            <tr><td style="padding:.25rem .5rem;">Definition</td><td style="padding:.25rem .5rem;">UI-based tasks</td><td style="padding:.25rem .5rem;">Pipeline-as-code in repo</td></tr>
            <tr><td style="padding:.25rem .5rem;">Versioning</td><td style="padding:.25rem .5rem;">Not in repo</td><td style="padding:.25rem .5rem;">Stored in Git (PR reviews)</td></tr>
            <tr><td style="padding:.25rem .5rem;">Reusability</td><td style="padding:.25rem .5rem;">Limited</td><td style="padding:.25rem .5rem;">Supports templates/parameters</td></tr>
            <tr><td style="padding:.25rem .5rem;">Best for</td><td style="padding:.25rem .5rem;">POC or simple flows</td><td style="padding:.25rem .5rem;">Production, GitOps, multi-repo reuse</td></tr>
          </table>

          <div style="margin:.5rem 0;">
            <strong>Practical note:</strong>
            <p style="margin:.25rem 0 0;">Prefer YAML for production because changes are auditable via Git and go through PR review.</p>
          </div>
        </div>`
      },
      {
        question: "What are the advantages of YAML pipelines?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">💎 Why use YAML pipelines?</h3>
          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>💾 <strong>Version-controlled</strong> — pipeline changes live in repo history.</li>
            <li>♻️ <strong>Reusable templates</strong> — share across projects (DRY).</li>
            <li>🔁 <strong>Better for GitOps</strong> — triggers on commits and branch changes.</li>
            <li>🧪 <strong>Matrix & conditional builds</strong> — parallel test runs and platform support.</li>
          </ul>

          <div style="margin:.5rem 0;">
            <strong>Tip:</strong>
            <p style="margin:.25rem 0 0;">Create central templates for common tasks (build, test, release) to standardize CI across microservices.</p>
          </div>
        </div>`
      },
      {
        question: "What is GitOps and how is it implemented in ADO?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🧭 GitOps — make Git the source of truth</h3>
          <p style="margin:0 0 .5rem;">GitOps means your desired state (app manifests, infra code) lives in Git. Changes to Git trigger automated reconciliation of the real environment.</p>

          <div style="margin:.4rem 0;">
            <strong>How to implement in ADO:</strong>
            <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
              <li>Store Helm charts / Terraform modules in a repo.</li>
              <li>YAML pipeline triggers on push → validate, plan, apply.</li>
              <li>Rollback by reverting commits (Git is single source of truth).</li>
            </ul>
          </div>

          <div style="margin:.6rem 0; padding:.5rem; background:rgba(255,255,255,0.02); border-radius:.4rem;">
            <strong>Example:</strong>
            <p style="margin:.25rem 0 0;">I keep Helm charts in repo; any change triggers a pipeline that lints the chart, packages it and deploys to AKS — Git shows the history and rollback is a revert + redeploy.</p>
          </div>
        </div>`
      },
      {
        question: "What is the difference between GitOps and DevOps?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">⚙️ DevOps vs GitOps — simple</h3>
          <p style="margin:0 0 .5rem;">DevOps is a broad culture & set of practices for collaboration and delivery. GitOps is one way to implement those practices using Git as the single source of truth for both app and infra.</p>

          <ul style="margin:.4rem 0 0 1.2rem; line-height:1.6;">
            <li>DevOps = people + process + tools (CI/CD, monitoring, collaboration).</li>
            <li>GitOps = declarative, Git-driven deployments and infra management.</li>
          </ul>

          <div style="margin:.5rem 0;">
            <strong>Quick analogy:</strong>
            <p style="margin:.25rem 0 0;">If DevOps is the recipe book, GitOps is using a single labelled shelf (Git) to store every recipe and ingredient so the kitchen can replicate the dish exactly.</p>
          </div>
        </div>`
      },
      {
        question: "What is Trunk-Based Branching Strategy?",
        answerHtml: `
        <div class="answer-rich">
          <h3 style="margin:0 0 .5rem;">🌿 What is Trunk-Based Branching Strategy?</h3>
          <p style="margin:0 0 .6rem; font-weight:600;">
            🚀 <strong>Trunk-based development</strong> is a lightweight branching approach where teams integrate small, frequent changes into the <strong>main</strong> branch so the codebase stays deployable and conflicts are minimized.
          </p>

          <p style="margin:.25rem 0 .5rem;"><strong>✨ “Too long; didn’t read” 😅</strong> small commits, short-lived branches, PR validation, and fast CI feedback — keep <code>main</code> always releasable.</p>

          <div style="margin:.5rem 0;">
            <strong style="display:block; margin-bottom:.35rem;">🧩 Key Highlights:</strong>
            <ul style="margin:0 0 .5rem 1.2rem; line-height:1.6;">
              <li>🧠 <strong>Short-lived feature branches</strong> (hours → a few days) — merge frequently to avoid drift.</li>
              <li>⚙️ <strong>PRs + build validation & lint checks</strong> are mandatory before merge.</li>
              <li>🔁 Avoid long-lived branches — reduces complex merges and integration churn.</li>
              <li>✅ Ensures <strong>fast CI feedback</strong>, <strong>stable releases</strong>, and clean automation pipelines.</li>
              <li>🌐 Great fit for microservices & small agile teams delivering independent features.</li>
            </ul>
          </div>

          <div style="margin:.5rem 0;">
            <strong style="display:block; margin-bottom:.35rem;">🔎 Practical example:</strong>
            <p style="margin:0 0 .5rem;">A dev creates <code>feature/login-button</code>, pushes small commits, opens a PR. CI runs unit tests + lint; two reviewers approve; the PR merges within hours to <code>main</code>. CI then builds and deploys a canary to staging — quick feedback loop.</p>
          </div>

          <div style="margin:.5rem 0;">
            <strong style="display:block; margin-bottom:.35rem;">🛠️ Pro tip:</strong>
            <ul style="margin:0 0 .5rem 1.2rem; line-height:1.6;">
              <li>Keep PRs small — one focused change per PR makes reviews fast and rollbacks easy.</li>
              <li>Automate checks: tests, lint, security scan (SonarQube/Checkov) before allowing merges.</li>
            </ul>
          </div>

          <div style="margin:.5rem 0; padding:.6rem; border-radius:.5rem; background:rgba(255,255,255,0.02);">
            <strong>In Azure DevOps:</strong>
            <p style="margin:.25rem 0 0;">Enforce branch policies — require successful pipeline run, set mandatory reviewers, and enable a merge strategy (squash/merge). This keeps <code>main</code> reliably deployable and auditable.</p>
          </div>

          <div style="margin-top:.6rem; color:#9aa0a6; font-size:.9rem;">
            <em>When NOT to use:</em> If you have very large, cross-cutting changes that cannot be split, trunk-based might be hard — use feature flags or a short-lived integration branch while refactoring.
          </div>
        </div>`
      }
    ]
  }
  ,
  {
    title: "2. Repos & Source Control",
    questions: [
      {
        question: "What are repositories in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Repositories in Azure DevOps</strong></h3>
        <p>
          A <strong>repository (repo)</strong> in Azure DevOps is a Git-based storage space where source code, configurations, and documentation are managed and versioned.  
          It allows teams to collaborate using branching, pull requests, and commit tracking.
        </p>

        <strong>Key Points:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Supports both Git and TFVC (Team Foundation Version Control), but Git is preferred.</li>
          <li>Each repo can host multiple branches — main, develop, feature, release, and hotfix.</li>
          <li>Integrated with pipelines for automatic build/test triggers on commits or PRs.</li>
          <li>Supports branch policies, code reviews, and PR validations to maintain quality.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        We maintain separate repos for each microservice — linked to its own CI/CD pipeline.  
        Branch policies ensure code is reviewed and validated before merging to <code>main</code>.</p>
      </div>`
      },
      {
        question: "How do you checkout code from multiple repositories in one pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Checkout multiple repositories in a single pipeline</strong></h3>
        <p>
          In Azure DevOps YAML pipelines, you can fetch code from multiple repositories using the <strong>resources.repositories</strong> keyword.  
          This is useful when your build or deployment depends on shared libraries or infrastructure code.
        </p>

        <strong>Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>resources:
  repositories:
    - repository: app_repo
      type: git
      name: Project/AppRepo
    - repository: lib_repo
      type: git
      name: Project/CommonLibrary

steps:
  - checkout: self
  - checkout: lib_repo</code></pre>

        <p><strong>Result:</strong> Both repositories (<code>self</code> and <code>lib_repo</code>) are checked out into the pipeline agent workspace.</p>

        <p><strong>Best Practice:</strong>  
        Always use repository aliases and specific branch references to maintain consistency in multi-repo pipelines.</p>
      </div>`
      },
      {
        question: "You have multiple repositories A and B and need to fetch both in one deployment — how do you configure that?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Deploying using multiple repositories (A & B)</strong></h3>
        <p>
          When a deployment requires code from multiple repositories, configure both repos in the YAML pipeline using <strong>resources.repositories</strong> and checkout them separately.
        </p>

        <strong>Configuration Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>resources:
  repositories:
    - repository: repoA
      type: git
      name: Project/RepoA
      ref: main
    - repository: repoB
      type: git
      name: Project/RepoB
      ref: develop

steps:
  - checkout: repoA
  - checkout: repoB
  - script: |
      echo "Building from RepoA and RepoB"
</code></pre>

        <p>
          This structure ensures that both repositories are cloned in the agent environment.  
          The pipeline can then access code from <code>$(Build.SourcesDirectory)/repoA</code> and <code>repoB</code> paths.
        </p>

        <p><strong>In Practice:</strong>  
        I used this approach when deploying an API (RepoA) and shared utilities (RepoB) together to the same AKS namespace.</p>
      </div>`
      },
      {
        question: "What is GitOps and how do you manage Git branches for automation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>GitOps & Branch Automation in Azure DevOps</strong></h3>
        <p>
          <strong>GitOps</strong> is an operational model where all infrastructure and application configurations are stored in Git and automatically deployed through pipelines.
        </p>

        <strong>Branch Management Approach:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🚀 <strong>main</strong> — always deployable, represents the production environment.</li>
          <li>🧪 <strong>develop</strong> — integration branch where team merges tested features.</li>
          <li>🌱 <strong>feature/*</strong> — short-lived branches for new features, merged via PRs.</li>
          <li>⚙️ <strong>release/*</strong> — created before deployment for staging/pre-prod testing.</li>
          <li>🔥 <strong>hotfix/*</strong> — for urgent fixes directly from <code>main</code>.</li>
        </ul>

        <p>
          Every merge to <code>main</code> triggers automated deployments using YAML pipelines — ensuring infrastructure and apps are always in sync with Git state.
        </p>

        <p><strong>In Practice:</strong>  
        I manage GitOps flow by linking Terraform & Helm code in Repos; any commit to <code>main</code> triggers infra updates via ADO pipelines.</p>
      </div>`
      },
      {
        question: "Explain the branch strategy followed in your project (feature/develop/release/hotfix).",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching Strategy (Git Flow Model)</strong></h3>
        <p>
          Our project follows a customized <strong>Git Flow strategy</strong> to manage features, releases, and hotfixes efficiently.
        </p>

        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🌱 <strong>Feature Branches:</strong> Created from <code>develop</code> for new functionality. Merged via PR after review.</li>
          <li>🧪 <strong>Develop Branch:</strong> Integration branch where all features are merged and validated.</li>
          <li>⚙️ <strong>Release Branch:</strong> Cut from <code>develop</code> before production. Used for final QA and staging deployments.</li>
          <li>🔥 <strong>Hotfix Branch:</strong> Created directly from <code>main</code> to fix production issues quickly.</li>
          <li>✅ <strong>Main Branch:</strong> Always stable, production-ready branch with strict PR validations.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Each branch merge triggers automated pipelines — ensuring builds and deployments align with environment promotion flow (Dev → QA → Prod).</p>
      </div>`
      },
      {
        question: "What is a hotfix in pipelines? How do you deploy hotfixes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔥 <strong>Hotfix Deployment in Azure Pipelines</strong></h3>
        <p>
          A <strong>hotfix</strong> is an urgent fix deployed directly to production to resolve critical issues.  
          In Azure DevOps, it’s handled via a separate branch and dedicated pipeline path.
        </p>

        <strong>Process:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Create branch <code>hotfix/issue-id</code> from <code>main</code>.</li>
          <li>Commit fix → trigger CI build automatically.</li>
          <li>Run unit tests, validations, and manual approvals if needed.</li>
          <li>Merge back to <code>main</code> and <code>develop</code> to sync future releases.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use a separate YAML condition to identify hotfix branches and directly deploy artifacts to the production slot post-approval.</p>

        <p><strong>Benefit:</strong>  
        Reduces downtime while keeping mainline development unaffected.</p>
      </div>`
      },
      {
        question: "How do you rollback or revert a commit if build fails?",
        answerHtml: `
      <div class="answer-rich">
        <h3>↩️ <strong>Rollback or Revert a Commit</strong></h3>
        <p>
          Rollback is required when a recent commit causes a failed build or faulty deployment.  
          Azure DevOps supports both Git-level revert and pipeline-based redeployment rollback.
        </p>

        <strong>Two Ways to Rollback:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🌀 <strong>Git Revert:</strong> Use <code>git revert &lt;commit-id&gt;</code> to undo the specific change and push it.  
          This triggers the pipeline to redeploy the last known stable version.</li>
          <li>🏗️ <strong>Pipeline Rollback:</strong> Redeploy the last successful build artifact from Azure DevOps “Releases” or “Runs” section.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        If a deployment fails after a Terraform apply, I revert the commit, re-run the pipeline, and the previous state is restored via backend state file (S3/Storage Account).</p>
      </div>`
      },
    ],
  }
  ,
  {
    title: "3. Variables, Secrets & Configuration",
    questions: [
      {
        question: "What are Variables in a pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Variables in an Azure Pipeline</strong></h3>
        <p>
          <strong>Variables</strong> in a pipeline store reusable values such as environment names, build numbers, or connection strings.
          They make your pipeline flexible, maintainable, and easier to manage across stages.
        </p>

        <strong>Common Uses:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>💾 Define environment-specific values (e.g., dev, test, prod).</li>
          <li>🔁 Reuse credentials or paths across multiple jobs.</li>
          <li>🚀 Control conditional logic — e.g., run deploy only if <code>env == 'prod'</code>.</li>
        </ul>

        <p><strong>In YAML:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
  environment: "dev"
  appName: "myApp"

steps:
  - script: echo "Deploying to $(environment)"</code></pre>

        <p><strong>In Practice:</strong>  
        I use variables for image tags, artifact names, and resource group names — making the pipeline reusable across environments.</p>
      </div>`
      },
      {
        question: "Difference between pipeline variables and environment variables.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Pipeline Variables vs Environment Variables</strong></h3>
        <p>
          Both are used to store dynamic data in Azure Pipelines, but they differ in scope and visibility.
        </p>

        <strong>Key Differences:</strong>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th style="text-align:left;">Aspect</th><th style="text-align:left;">Pipeline Variable</th><th style="text-align:left;">Environment Variable</th></tr>
          <tr><td>Scope</td><td>Pipeline-level (defined in YAML or UI)</td><td>System or agent-level (in OS environment)</td></tr>
          <tr><td>Definition</td><td>Defined under <code>variables:</code> block</td><td>Defined using <code>env:</code> keyword or OS</td></tr>
          <tr><td>Access</td><td>$(variableName)</td><td>$VARIABLE_NAME or %VARIABLE_NAME%</td></tr>
          <tr><td>Persistence</td><td>Only for that pipeline run</td><td>Agent-specific or global</td></tr>
        </table>

        <p><strong>Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
  app: "myApp"
steps:
  - script: echo "Pipeline var $(app)"
    env:
      REGION: "eastus"</code></pre>

        <p><strong>In Practice:</strong>  
        Pipeline vars define logic and flow, while environment vars configure runtime settings inside containers or scripts.</p>
      </div>`
      },
      {
        question: "How do you create and manage variable groups in ADO?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Variable Groups in Azure DevOps</strong></h3>
        <p>
          <strong>Variable Groups</strong> are shared collections of variables that can be linked to multiple pipelines — used to manage common configurations like connection strings, environment names, or subscription IDs.
        </p>

        <strong>Creation Steps:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Go to <strong>Pipelines → Library → Variable Groups</strong>.</li>
          <li>Click <strong>+ Variable Group</strong>, give it a name.</li>
          <li>Add key-value pairs or mark sensitive data as secret 🔒.</li>
          <li>Link this variable group inside your YAML pipeline.</li>
        </ol>

        <strong>YAML Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
- group: 'Shared-Config-Group'</code></pre>

        <p><strong>In Practice:</strong>  
        I maintain variable groups like “DEV-CONFIG” and “PROD-CONFIG” — so multiple pipelines use the same consistent environment setup.</p>
      </div>`
      },
      {
        question: "What is the sequence or order of variable precedence?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Variable Precedence Order in Azure Pipelines</strong></h3>
        <p>
          When the same variable name exists in multiple sources, Azure DevOps follows a defined order to determine which value takes precedence.
        </p>

        <strong>Precedence (Highest → Lowest):</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>1️⃣ Secret variables (Key Vault or Library marked as secret)</li>
          <li>2️⃣ Runtime variables passed via pipeline UI or CLI</li>
          <li>3️⃣ Variables set within YAML (<code>variables:</code> block)</li>
          <li>4️⃣ Variable Groups linked in the YAML</li>
          <li>5️⃣ Pipeline defaults and system variables</li>
        </ol>

        <p><strong>Example:</strong>  
        If <code>env=prod</code> is defined both in YAML and a Library group — the Library value wins unless overridden at runtime.</p>

        <p><strong>In Practice:</strong>  
        I always keep secrets in Key Vault and environment toggles in YAML for clear separation of security vs configuration.</p>
      </div>`
      },
      {
        question: "How do you secure secrets in pipelines? (Library, Key Vault, Environment Variables)",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Securing Secrets in Azure Pipelines</strong></h3>
        <p>
          Secrets like passwords, API keys, or tokens must be encrypted and securely managed — not stored in plain text or code.
        </p>

        <strong>Secure Methods:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 <strong>Library Variable Groups:</strong> Mark variables as <em>secret</em> in Library settings.</li>
          <li>🔐 <strong>Azure Key Vault Integration:</strong> Link pipeline to Key Vault and auto-fetch secrets at runtime.</li>
          <li>💻 <strong>Environment Variables:</strong> Pass temporary credentials only at runtime to avoid permanent storage.</li>
        </ul>

        <p><strong>Best Practice:</strong>  
        Never hardcode secrets in YAML. Instead, store them in Key Vault or the Library and reference as <code>$(mySecret)</code> during execution.</p>

        <p><strong>In Practice:</strong>  
        I use Azure Key Vault-backed variable groups to auto-sync secrets — especially for SPN credentials, DB passwords, and webhook tokens.</p>
      </div>`
      },
      {
        question: "How do you link Azure Key Vault with ADO to pull secrets?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Integrating Azure Key Vault with Azure DevOps</strong></h3>
        <p>
          Azure DevOps can automatically fetch secrets from <strong>Azure Key Vault</strong> into pipelines by linking the vault to a variable group.
        </p>

        <strong>Steps to Link:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Go to <strong>Pipelines → Library → Variable Groups</strong>.</li>
          <li>Create a new group → click <strong>Link secrets from Azure Key Vault</strong>.</li>
          <li>Provide subscription and Key Vault details.</li>
          <li>Select secrets to include → Save.</li>
        </ol>

        <p><strong>YAML Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
- group: 'KeyVault-Secrets'</code></pre>

        <p><strong>In Practice:</strong>  
        My pipeline uses SPN credentials and DB connection strings fetched from Key Vault at runtime — no manual secret management required.</p>
      </div>`
      },
      {
        question: "How can you store configuration secrets to authorize pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Storing Configuration Secrets for Pipeline Authorization</strong></h3>
        <p>
          To authorize pipelines securely, configuration secrets like <strong>service principal credentials, PAT tokens,</strong> or <strong>API keys</strong> should be stored using secure methods in Azure DevOps.
        </p>

        <strong>Options:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔐 <strong>Azure Key Vault:</strong> Safest option — secrets never appear in logs.</li>
          <li>📦 <strong>Library Variable Groups:</strong> Mark as secret to encrypt values.</li>
          <li>⚙️ <strong>Service Connections:</strong> Used for Azure, Docker, GitHub auth — securely stores SPNs and tokens.</li>
        </ul>

        <p><strong>In YAML:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- script: az login --service-principal -u $(clientId) -p $(clientSecret) --tenant $(tenantId)</code></pre>

        <p><strong>In Practice:</strong>  
        I store Azure SPN credentials in Key Vault + link it to Library. The pipeline fetches these at runtime for Terraform or ACR authentication — no manual exposure needed.</p>
      </div>`
      },
    ],
  }
  ,
  {
    title: "4. Agents, Pools & Runners",
    questions: [
      {
        question: "What is an agent pool and how does it work?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Agent Pool in Azure DevOps</strong></h3>
        <p>
          An <strong>agent pool</strong> is a collection of agents that run your pipeline jobs.  
          Each pipeline picks an agent from the pool to execute its tasks (build, test, deploy).
        </p>

        <strong>How it Works:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Each pipeline job requests an agent from a specific pool.</li>
          <li>Azure assigns a free agent to execute the job’s tasks sequentially.</li>
          <li>Once completed, the agent is released back to the pool.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I maintain separate pools for <em>Build</em>, <em>Deploy</em>, and <em>Infra</em> pipelines — ensuring controlled capacity and better resource utilization.</p>
      </div>`
      },
      {
        question: "What is a self-hosted agent and when would you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>Self-Hosted Agent</strong></h3>
        <p>
          A <strong>self-hosted agent</strong> is a machine (VM or physical server) that you manage and configure to run pipeline jobs.  
          It connects securely to Azure DevOps via an authentication token.
        </p>

        <strong>When to Use:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Custom tools or software are required (e.g., Terraform, Ansible, or specific SDKs).</li>
          <li>Private network access — like deploying inside your VNet or internal servers.</li>
          <li>When you need faster execution and control over the build environment.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use self-hosted Linux agents for Terraform deployments and Windows agents for .NET app builds.</p>
      </div>`
      },
      {
        question: "What is the advantage of a self-hosted agent?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Advantages of Self-Hosted Agents</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>⚡ <strong>Speed:</strong> Pre-installed tools mean faster builds (no setup time).</li>
          <li>🔒 <strong>Security:</strong> Stays within private network boundaries.</li>
          <li>💰 <strong>Cost-Efficient:</strong> No charge per pipeline minute (unlike Microsoft-hosted).</li>
          <li>🧩 <strong>Customization:</strong> Install custom dependencies as per project needs.</li>
        </ul>

        <p><strong>Example:</strong>  
        I configured a self-hosted Ubuntu agent with Terraform, kubectl, Helm, and Azure CLI — optimized for IaC deployments.</p>
      </div>`
      },
      {
        question: "Which agents do you use — Microsoft-hosted or self-hosted?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>Agents Used in My Environment</strong></h3>
        <p>
          I use a <strong>hybrid approach</strong> — both Microsoft-hosted and self-hosted agents based on workload type.
        </p>

        <strong>Usage:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>☁️ <strong>Microsoft-hosted:</strong> For lightweight build/test pipelines like Node.js or React apps.</li>
          <li>🏠 <strong>Self-hosted:</strong> For infrastructure pipelines using Terraform, Docker, or restricted network deployments.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Most of my IaC and deployment pipelines run on self-hosted agents; build/test pipelines use Microsoft-hosted ones for scalability.</p>
      </div>`
      },
      {
        question: "How many agents are configured in your organization?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Agent Configuration Count</strong></h3>
        <p>
          We have around <strong>10–12 agents</strong> configured — distributed across pools:
        </p>

        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>6 Linux agents (for Terraform, Docker, and Kubernetes workloads)</li>
          <li>4 Windows agents (for .NET and PowerShell-based tasks)</li>
          <li>2 spare agents used as fallback during maintenance or load peaks</li>
        </ul>

        <p><strong>Note:</strong> Agents are auto-scaled via Azure VM Scale Sets based on pipeline concurrency.</p>
      </div>`
      },
      {
        question: "If 12 developers trigger pipelines at once and only 6 agents are available — how do you handle concurrency?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Handling Concurrency in Pipelines</strong></h3>
        <p>
          When multiple pipelines trigger simultaneously, Azure DevOps queues jobs if agents are unavailable.
        </p>

        <strong>How I Handle It:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 <strong>Auto-scaling:</strong> Configure VM Scale Sets to spin up new agents automatically.</li>
          <li>📊 <strong>Parallel Jobs:</strong> Purchase additional parallel job licenses or add more agents to the pool.</li>
          <li>🧠 <strong>Scheduling:</strong> Use <code>dependsOn</code> and pipeline triggers to optimize non-critical jobs at off-peak hours.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        We added two additional agents dynamically during heavy load — managed via VMSS scaling policies and pipeline concurrency control.</p>
      </div>`
      },
      {
        question: "How do you monitor and maintain self-hosted agents?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Monitoring & Maintenance of Self-Hosted Agents</strong></h3>
        <p>
          Self-hosted agents require proactive monitoring to ensure reliability and availability.
        </p>

        <strong>Monitoring Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>📈 Track agent health and job success in <strong>Project Settings → Agent Pools</strong>.</li>
          <li>🔍 Use custom scripts or Azure Monitor to check CPU, disk, and memory utilization.</li>
          <li>⚙️ Rotate tokens periodically and update agent version regularly.</li>
          <li>🧹 Clean up workspace cache after builds using <code>--clean</code> option.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use a cron-based shell script that checks agent service status and restarts it if inactive — reducing downtime.</p>
      </div>`
      },
      {
        question: "What is a deployment group and how is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Deployment Group in Azure DevOps</strong></h3>
        <p>
          A <strong>deployment group</strong> is a collection of target machines (VMs/servers) where you deploy applications via release pipelines.
        </p>

        <strong>Usage:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Each target machine runs an agent configured to listen for deployment jobs.</li>
          <li>Deployments can target specific tags (e.g., Web, DB, API servers).</li>
          <li>Used in classic release pipelines for VM-based deployments.</li>
        </ul>

        <p><strong>Example:</strong>  
        In one project, I configured a “WebAppDeploymentGroup” for IIS servers — pipeline deployed build artifacts to those servers directly.</p>
      </div>`
      },
      {
        question: "When will you use which type of agent? (Linux/Windows, self-hosted/cloud)",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Choosing the Right Agent Type</strong></h3>
        <p>
          Selection depends on project requirements, workload type, and deployment environment.
        </p>

        <strong>Typical Use Cases:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🐧 <strong>Linux Agent:</strong> Best for Docker, Terraform, Kubernetes, Python, and Node.js workloads.</li>
          <li>🪟 <strong>Windows Agent:</strong> Required for .NET, PowerShell, IIS, and MSBuild tasks.</li>
          <li>☁️ <strong>Microsoft-Hosted:</strong> Quick setup, best for short-lived builds.</li>
          <li>🏠 <strong>Self-Hosted:</strong> Use when you need private network access or custom tools installed.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use Linux self-hosted agents for Terraform and container builds, while Windows hosted agents for application packaging.</p>
      </div>`
      },
      {
        question: "What is the difference between run-once and multi-stage jobs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Run-Once vs Multi-Stage Jobs</strong></h3>
        <p>
          Azure Pipelines can execute jobs either as a single run or across multiple structured stages.
        </p>

        <strong>Difference:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>▶️ <strong>Run-Once Job:</strong> Executes a single job with all steps — simple for builds or tests.</li>
          <li>🏗️ <strong>Multi-Stage Job:</strong> Divides process into stages like Build → Test → Deploy — provides visibility, approvals, and better control.</li>
        </ul>

        <p><strong>Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>stages:
- stage: Build
  jobs:
    - job: buildApp
- stage: Deploy
  dependsOn: Build
  jobs:
    - job: deployToDev</code></pre>

        <p><strong>In Practice:</strong>  
        I use multi-stage YAML pipelines for production releases with gated approvals and rollback options.</p>
      </div>`
      },
    ],
  }
  ,
  {
    title: "5. Service Connections & Integrations",
    questions: [
      {
        question: "What is a service connection and how do you configure it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>What is a Service Connection?</strong></h3>
        <p>
          A <strong>Service Connection</strong> is a secure authentication link that allows Azure DevOps pipelines to connect with external systems — 
          like Azure, Docker Hub, GitHub, or Kubernetes — without exposing credentials in YAML.
        </p>

        <strong>Configuration Steps:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Go to <strong>Project Settings → Service Connections</strong>.</li>
          <li>Click <strong>New service connection</strong> → choose provider (Azure, Docker, GitHub, etc.).</li>
          <li>Authenticate using a <strong>Service Principal</strong> or <strong>PAT (Personal Access Token)</strong>.</li>
          <li>Grant permissions to pipelines to use this connection.</li>
        </ol>

        <p><strong>In Practice:</strong>  
        I use Azure Resource Manager (ARM) service connections to authenticate Terraform and deployment stages to Azure subscriptions securely.</p>
      </div>`
      },
      {
        question: "How do you authorize pipelines to access Azure subscriptions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Authorizing Pipelines to Access Azure</strong></h3>
        <p>
          Azure DevOps uses <strong>Service Principals</strong> under ARM connections to authorize pipelines to deploy or manage Azure resources.
        </p>

        <strong>Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Create an <strong>App Registration</strong> in Azure AD.</li>
          <li>Assign it required role (e.g., Contributor) at the subscription or resource group level.</li>
          <li>Use its <code>clientId</code>, <code>clientSecret</code>, and <code>tenantId</code> to configure an ARM service connection.</li>
          <li>Link the connection inside your pipeline under <code>serviceConnection:</code>.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My Terraform pipelines authenticate to Azure using SPNs stored in an ARM service connection.  
        This allows automatic provisioning without manual Azure CLI login.</p>
      </div>`
      },
      {
        question: "If you see the error 'Pipeline doesn't have authorization to run,' what are possible causes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Pipeline Authorization Error — Causes & Fix</strong></h3>
        <p>
          This error occurs when the pipeline lacks permission to access a resource or service connection.
        </p>

        <strong>Common Causes:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔒 Service connection not authorized for the pipeline.</li>
          <li>⚙️ Incorrect role assignment on the Azure subscription (SPN lacks Contributor access).</li>
          <li>🚫 Access restrictions in Project Settings → Permissions.</li>
          <li>🔁 Connection expired or credentials revoked.</li>
        </ul>

        <p><strong>Fix:</strong></p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Go to the Service Connection → Click <strong>“Authorize for use in all pipelines”</strong>.</li>
          <li>Revalidate SPN permissions in Azure portal.</li>
          <li>Regenerate PAT or credentials if expired.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I faced this during AKS deployment — resolved it by reauthorizing the pipeline for the ARM service connection.</p>
      </div>`
      },
      {
        question: "How do you integrate ADO pipelines with GitHub repositories?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐙 <strong>Integrating Azure DevOps Pipelines with GitHub</strong></h3>
        <p>
          You can connect Azure DevOps pipelines with GitHub repos for source control, CI/CD triggers, and automated builds.
        </p>

        <strong>Integration Methods:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔗 <strong>Service Connection:</strong> Create a GitHub connection using a PAT.</li>
          <li>⚙️ <strong>Triggers:</strong> Configure YAML to trigger on GitHub pushes or PRs.</li>
          <li>📦 <strong>Artifacts:</strong> Build outputs can be pushed back to GitHub releases or packages.</li>
        </ul>

        <p><strong>YAML Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main

resources:
  repositories:
    - repository: self
      type: github
      name: myorg/myrepo
      endpoint: GitHub-ServiceConnection</code></pre>

        <p><strong>In Practice:</strong>  
        I use this for microservices hosted in GitHub — pipelines run tests and push Docker images to ACR upon every commit to <code>main</code>.</p>
      </div>`
      },
      {
        question: "What is PAT (Personal Access Token) and where do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Personal Access Token (PAT)</strong></h3>
        <p>
          A <strong>PAT</strong> is an authentication token generated by a user to securely access Azure DevOps REST APIs, Git repos, or integrations like GitHub and Docker.
        </p>

        <strong>Use Cases:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Integrating ADO with GitHub, Jenkins, or external tools.</li>
          <li>Authenticating Git operations in pipelines.</li>
          <li>Setting up service connections for source access.</li>
        </ul>

        <p><strong>Best Practices:</strong></p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Generate with <strong>minimum required scope</strong> (e.g., Code (Read & Write)).</li>
          <li>Store in Azure Key Vault or pipeline library (marked as secret).</li>
          <li>Rotate regularly to avoid expired credentials.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I used PAT for GitHub integration with ADO pipelines where OAuth was restricted due to org policies.</p>
      </div>`
      },
      {
        question: "How do you authenticate with Azure Container Registry (ACR) from pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Authenticating with Azure Container Registry (ACR)</strong></h3>
        <p>
          Azure Pipelines can push or pull Docker images from ACR using an authenticated service connection.
        </p>

        <strong>Options to Authenticate:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔐 <strong>Service Connection:</strong> Create a Docker Registry or ARM connection linked to ACR.</li>
          <li>⚙️ <strong>Azure CLI Login:</strong> Use SPN credentials for manual authentication.</li>
        </ul>

        <strong>Example (YAML):</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: Docker@2
  inputs:
    containerRegistry: 'ACR-Service-Connection'
    repository: 'myapp'
    command: 'push'
    tags: |
      latest
      $(Build.BuildId)</code></pre>

        <p><strong>In Practice:</strong>  
        My build stage pushes Docker images to ACR via service connection, and deploy stage pulls the same images to AKS automatically.</p>
      </div>`
      },
      {
        question: "What is ACR and how do you push images from pipeline to ACR?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Azure Container Registry (ACR)</strong></h3>
        <p>
          ACR is a private Docker registry in Azure used to store and manage container images securely.  
          Pipelines can build and push images automatically during CI/CD.
        </p>

        <strong>Steps to Push Image:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Authenticate pipeline to ACR via Docker or ARM service connection.</li>
          <li>Build Docker image in the pipeline.</li>
          <li>Push it using <code>Docker@2</code> task.</li>
        </ol>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: Docker@2
  inputs:
    containerRegistry: 'ACR-ServiceConnection'
    repository: 'app/backend'
    command: 'push'
    tags: |
      latest
      $(Build.BuildId)</code></pre>

        <p><strong>In Practice:</strong>  
        Our CI pipelines build microservice images, push them to ACR, and trigger deployment to AKS via Helm in CD stage.</p>
      </div>`
      },
      {
        question: "How do you link external feeds or publish artifacts to external registries?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Linking External Feeds & Registries</strong></h3>
        <p>
          Azure DevOps can connect to external feeds (npm, NuGet, Maven, PyPI, DockerHub) via service connections.
        </p>

        <strong>Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Create a new service connection of type <strong>“External Feed”</strong>.</li>
          <li>Provide credentials (PAT, token, or feed URL).</li>
          <li>Use <code>npm authenticate</code> or <code>nuget restore</code> tasks in your YAML.</li>
        </ul>

        <p><strong>Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: NpmAuthenticate@0
  inputs:
    workingFile: .npmrc
- script: npm publish</code></pre>

        <p><strong>In Practice:</strong>  
        We publish shared npm packages from builds to Azure Artifacts and Docker images to both ACR and Docker Hub.</p>
      </div>`
      },
      {
        question: "What is required while creating a service connection?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Requirements for Creating a Service Connection</strong></h3>
        <p>
          A service connection requires credentials or tokens that authenticate Azure DevOps with the target system.
        </p>

        <strong>Common Requirements:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Client ID, Client Secret, and Tenant ID (for Azure ARM).</li>
          <li>PAT (for GitHub, DockerHub, or Azure DevOps REST APIs).</li>
          <li>Access permissions (Contributor or Owner) for the resource.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        While integrating with Azure, I always ensure SPN has least-privilege Contributor access and test via <code>az login</code> before using in pipeline.</p>
      </div>`
      },
      {
        question: "How do you create a service connection for GitHub in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐙 <strong>Create a GitHub Service Connection</strong></h3>
        <p>
          To connect your Azure DevOps pipeline with GitHub for source control or automation:
        </p>

        <strong>Steps:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Go to <strong>Project Settings → Service Connections → New Connection</strong>.</li>
          <li>Select <strong>GitHub</strong> as the connection type.</li>
          <li>Authenticate using either OAuth or Personal Access Token (PAT).</li>
          <li>Grant repository-level access.</li>
        </ol>

        <p><strong>In Practice:</strong>  
        I configured GitHub connections for pipelines that automatically build and deploy code pushed from GitHub main branches to Azure environments.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. CI/CD Pipeline Structure & YAML",
    questions: [
      {
        question: "What are the stages in a typical CI/CD pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Stages in a Typical CI/CD Pipeline</strong></h3>
        <p>
          A CI/CD pipeline is divided into logical <strong>stages</strong> that represent the software delivery flow — from code build to deployment.
        </p>

        <strong>Common Stages:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 <strong>Build:</strong> Compile code, restore dependencies, and package artifacts.</li>
          <li>🧪 <strong>Test:</strong> Run unit, integration, and quality checks (e.g., SonarQube, Checkov).</li>
          <li>📦 <strong>Publish:</strong> Push build outputs to Artifacts or container registries (ACR).</li>
          <li>🚀 <strong>Deploy:</strong> Deploy to environments (Dev → QA → UAT → Prod).</li>
          <li>🧠 <strong>Monitor:</strong> Track deployments using logs, Prometheus, or Application Insights.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I design pipelines with Build → Scan → Deploy → Notify flow, ensuring approvals and rollback points between environments.</p>
      </div>`
      },
      {
        question: "How do you define triggers, agents, and service connections in YAML?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Defining Triggers, Agents & Service Connections in YAML</strong></h3>
        <p>
          In Azure DevOps, YAML pipelines define <strong>triggers</strong> (what starts the pipeline), <strong>agents</strong> (where it runs), 
          and <strong>service connections</strong> (how it authenticates to external resources).
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main
      - develop

pool:
  vmImage: 'ubuntu-latest'

variables:
  - group: 'AppSettings'

steps:
  - task: AzureCLI@2
    inputs:
      azureSubscription: 'ARM-ServiceConnection'
      scriptType: bash
      scriptLocation: inlineScript
      inlineScript: |
        az group list</code></pre>

        <p><strong>In Practice:</strong>  
        I set branch-based triggers and use separate service connections for each environment — avoiding cross-deployment risks.</p>
      </div>`
      },
      {
        question: "What are pipeline templates and their benefits?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📄 <strong>Pipeline Templates in Azure DevOps</strong></h3>
        <p>
          <strong>Templates</strong> are reusable YAML files that store common logic (build, deploy, test) and can be imported into multiple pipelines.
        </p>

        <strong>Benefits:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>♻️ Reusability — define once, reuse across projects.</li>
          <li>🧩 Consistency — same logic for all pipelines.</li>
          <li>🔐 Central governance — easier maintenance and version control.</li>
        </ul>

        <strong>Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># main-pipeline.yml
stages:
- stage: Build
  jobs:
    - template: templates/build.yml</code></pre>

        <p><strong>In Practice:</strong>  
        I use a shared repo for templates — one change updates all service pipelines instantly.</p>
      </div>`
      },
      {
        question: "How do you write a YAML pipeline for application deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Example — YAML Pipeline for App Deployment</strong></h3>
        <p>Below is a typical YAML pipeline structure used to build and deploy a web app to Azure App Service.</p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

variables:
  - group: 'AppSecrets'

stages:
- stage: Build
  jobs:
    - job: build
      steps:
        - task: NodeTool@0
          inputs:
            versionSpec: '18.x'
        - script: npm install && npm run build
        - task: PublishBuildArtifacts@1

- stage: Deploy
  dependsOn: Build
  jobs:
    - deployment: deployWeb
      environment: 'dev'
      strategy:
        runOnce:
          deploy:
            steps:
              - task: AzureWebApp@1
                inputs:
                  azureSubscription: 'App-ServiceConnection'
                  appName: 'dev-webapp'
                  package: '$(Pipeline.Workspace)/drop/*.zip'</code></pre>

        <p><strong>In Practice:</strong>  
        I use multi-stage pipelines like this for frontend and API apps — integrated with approvals and notifications post-deployment.</p>
      </div>`
      },
      {
        question: "Write a sample Azure pipeline YAML and explain each stage",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Sample Azure Pipeline with Explanation</strong></h3>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main

stages:
- stage: Build
  jobs:
    - job: buildApp
      steps:
        - script: echo "Building code"
        - task: PublishBuildArtifacts@1

- stage: Deploy
  dependsOn: Build
  jobs:
    - job: deployToDev
      steps:
        - script: echo "Deploying to Dev environment"</code></pre>

        <strong>Explanation:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧱 <strong>Build:</strong> Code compilation and artifact publishing.</li>
          <li>🚀 <strong>Deploy:</strong> Fetches artifacts and deploys to target environment.</li>
          <li>⚙️ <strong>dependsOn:</strong> Ensures Deploy runs only if Build succeeds.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Each stage has environment-based approvals and conditional triggers — ensuring safe and controlled deployments.</p>
      </div>`
      },
      {
        question: "What is the difference between dependsOn and condition in YAML?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>dependsOn vs condition in Azure Pipelines</strong></h3>
        <p>
          Both control pipeline flow, but they serve different purposes:
        </p>

        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th style="text-align:left;">Aspect</th><th style="text-align:left;">dependsOn</th><th style="text-align:left;">condition</th></tr>
          <tr><td>Purpose</td><td>Defines stage/job dependency order.</td><td>Controls whether a stage/job should run based on logic.</td></tr>
          <tr><td>Default Behavior</td><td>Runs when dependent stage succeeds.</td><td>Can run on success, failure, or custom expression.</td></tr>
        </table>

        <p><strong>Example:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- stage: Deploy
  dependsOn: Build
  condition: succeeded()</code></pre>

        <p><strong>In Practice:</strong>  
        I use <code>dependsOn</code> to define order (Build → Deploy) and <code>condition</code> to skip optional test stages dynamically.</p>
      </div>`
      },
      {
        question: "What is the difference between deployment job and normal job?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Deployment Job vs Normal Job</strong></h3>
        <p>
          A <strong>deployment job</strong> is used for environment-based deployments with tracking and approvals, while a <strong>normal job</strong> executes generic tasks.
        </p>

        <strong>Difference Table:</strong>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Normal Job</th><th>Deployment Job</th></tr>
          <tr><td>Purpose</td><td>Runs tasks or scripts</td><td>Deploys to environment</td></tr>
          <tr><td>Environment</td><td>No association</td><td>Linked with Dev/Test/Prod</td></tr>
          <tr><td>Approvals</td><td>Not supported</td><td>Supports pre/post approvals</td></tr>
        </table>

        <p><strong>In Practice:</strong>  
        I use <code>deployment</code> jobs for AKS, App Service, and VM deployments — since they allow rollback and approvals.</p>
      </div>`
      },
      {
        question: "What is the use of environment variables in YAML?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Environment Variables in YAML</strong></h3>
        <p>
          <strong>Environment variables</strong> provide runtime context (like credentials, regions, or API keys) to scripts and tasks inside the pipeline.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- script: echo "Running on $ENV_NAME"
  env:
    ENV_NAME: "Development"</code></pre>

        <p><strong>In Practice:</strong>  
        I pass sensitive values (like client secrets) from variable groups as env vars to avoid hardcoding in scripts.</p>
      </div>`
      },
      {
        question: "What is the purpose of environment approvals and gates in YAML pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Environment Approvals & Gates</strong></h3>
        <p>
          Approvals and gates ensure controlled deployments by adding checks before or after environment stages.
        </p>

        <strong>Common Gates:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧠 Manual approval from QA/Manager before production deploy.</li>
          <li>🔍 Query monitoring tools (e.g., ServiceNow, App Insights).</li>
          <li>🧾 Wait timer before automatic promotion.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My pipelines include environment-level approvals for UAT → Prod to ensure verified and auditable releases.</p>
      </div>`
      },
      {
        question: "What is the use of templates for reusable pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Reusable Templates in Pipelines</strong></h3>
        <p>
          Templates make large pipelines modular and maintainable by separating repeated logic into shared YAML files.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># templates/deploy.yml
steps:
- task: AzureCLI@2
  inputs:
    azureSubscription: 'ARM-Conn'
    scriptType: bash
    scriptLocation: inlineScript
    inlineScript: echo "Deploying app"</code></pre>

        <p><strong>In Practice:</strong>  
        I keep reusable build, scan, and deploy templates — helping standardize pipelines across 30+ microservices.</p>
      </div>`
      },
      {
        question: "What is a pipeline in Azure DevOps? Explain YAML pipeline flow",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Pipeline & YAML Flow in Azure DevOps</strong></h3>
        <p>
          A <strong>pipeline</strong> is a defined automation workflow that builds, tests, and deploys your code using YAML syntax.
        </p>

        <strong>YAML Flow:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Trigger activates the pipeline (push, PR, schedule).</li>
          <li>Stages execute sequentially (Build → Test → Deploy).</li>
          <li>Each stage runs one or more jobs.</li>
          <li>Jobs contain steps (tasks, scripts, or templates).</li>
          <li>Outputs or artifacts are passed between stages.</li>
        </ol>

        <p><strong>In Practice:</strong>  
        My pipelines follow a GitOps-driven flow — every commit triggers a build, publishes Docker image to ACR, and deploys via Helm to AKS using YAML pipelines.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Pipeline Automation & Scheduling",
    questions: [
      {
        question: "How do you trigger pipelines automatically on Git commits?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Triggering Pipelines on Git Commits</strong></h3>
        <p>
          The most common way is to configure branch triggers in YAML so that pushes/merges to specific branches automatically start the pipeline.
        </p>

        <strong>YAML Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main
      - develop</code></pre>

        <p><strong>PR Validation:</strong> Use <code>pr:</code> to run CI for pull requests before merge:</p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>pr:
  branches:
    include:
      - develop</code></pre>

        <p><strong>In Practice:</strong> I trigger CI on PRs for dev branches and only allow merge to <code>main</code> after successful CI + approvals — keeps main stable and ensures early feedback.</p>
      </div>`
      },
      {
        question: "How do you schedule pipelines to run at specific times?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏰ <strong>Scheduling Pipelines (CRON)</strong></h3>
        <p>
          Use the <code>schedules</code> section in YAML or the pipeline scheduler in the ADO UI to run pipelines at defined CRON intervals.
        </p>

        <strong>YAML Scheduled Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>schedules:
- cron: '0 2 * * *'   # daily at 02:00 UTC
  displayName: 'Nightly build'
  branches:
    include:
      - main
  always: true</code></pre>

        <p><strong>UI Scheduler:</strong> You can also add schedules in Pipeline → Edit → Schedules for timezone-friendly scheduling and toggling without changing YAML.</p>

        <p><strong>In Practice:</strong> I schedule nightly builds for integration tests and security scans (Checkov/TFLint) so heavy scans run off-hours and artifacts are ready for the next day.</p>
      </div>`
      },
      {
        question: "How do you trigger pipelines conditionally (manual, scheduled, PR-based)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Conditional Pipeline Triggers</strong></h3>
        <p>
          Combine trigger types and use conditions/parameters to control when stages or jobs run.
        </p>

        <strong>Options:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔁 <strong>PR-based:</strong> <code>pr:</code> block in YAML runs CI for PRs.</li>
          <li>⏰ <strong>Scheduled:</strong> <code>schedules:</code> or UI scheduler for CRON runs.</li>
          <li>✋ <strong>Manual:</strong> Use <code>trigger: none</code> and run via UI or REST API; or use environment approvals for manual gating.</li>
        </ul>

        <strong>Conditional Stage Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include: [main]

parameters:
- name: runE2E
  type: boolean
  default: false

stages:
- stage: Build
  jobs: ...

- stage: E2E
  condition: eq(parameters.runE2E, true)
  jobs: ...
</code></pre>

        <p><strong>In Practice:</strong> I use PR triggers for fast CI, scheduled triggers for nightly heavy tests, and parameters + manual runs for optional long-running stages (e.g., full integration tests).</p>
      </div>`
      },
      {
        question: "How do you handle multi-stage deployments (DEV → QA → UAT → PROD)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Multi-stage Deployment Flow</strong></h3>
        <p>
          Implement stages for each environment and connect them with approvals, gates, and environment-specific variables. Use deployment jobs for environment-level features like approvals and deployment history.
        </p>

        <strong>Structure Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>stages:
- stage: Dev
  jobs: ...

- stage: QA
  dependsOn: Dev
  jobs: ...
  approvals: # via environment in ADO UI

- stage: UAT
  dependsOn: QA
  jobs: ...

- stage: Prod
  dependsOn: UAT
  jobs: ...
  # Prod has manual approver + monitoring gates</code></pre>

        <p><strong>Gates & Approvals:</strong> Use environment approvals (QA sign-off) and health checks (automated smoke tests) before promoting to the next stage.</p>

        <p><strong>In Practice:</strong> I configure auto-deploy to Dev/QA, QA sign-off for UAT, and a manual approval + canary deployment strategy for Prod to minimize risk.</p>
      </div>`
      },
      {
        question: "How do you deploy to multiple environments automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗺️ <strong>Automated Multi-Environment Deployment</strong></h3>
        <p>
          Use the same pipeline with parameterized stages or templates that accept environment-specific values (variable groups or parameter files). This avoids duplicating pipelines per environment.
        </p>

        <strong>Template-driven Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># deploy-template.yml
parameters:
- name: envName
  type: string

jobs:
- deployment: deploy
  environment: \${{ parameters.envName }}
  strategy:
    runOnce:
      deploy:
        steps:
          - script: echo "Deploying to \${{ parameters.envName }}"

# main-pipeline.yml
stages:
- stage: DeployDev
  jobs:
    - template: deploy-template.yml
      parameters:
        envName: 'dev'

- stage: DeployProd
  jobs:
    - template: deploy-template.yml
      parameters:
        envName: 'prod'</code></pre>

        <p><strong>In Practice:</strong> I maintain variable groups per environment (DEV/QA/PROD) and pass them into templates — this keeps logic identical while changing config only.</p>
      </div>`
      },
      {
        question: "If we have one pipeline that must run for multiple environments — how do you parameterize it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Parameterizing a Single Pipeline</strong></h3>
        <p>
          Use top-level <code>parameters</code> in YAML for runtime values and environment selection. Combine with variable groups and templates for maintainability.
        </p>

        <strong>Parameter Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>parameters:
- name: targetEnv
  type: string
  default: 'dev'

variables:
- group: '$(targetEnv)-vars'   # resolved at runtime if allowed

stages:
- stage: Deploy
  jobs:
    - deployment: deployToEnv
      environment: \${{ parameters.targetEnv }}
      strategy:
        runOnce:
          deploy:
            steps:
              - script: echo "Deploying to \${{ parameters.targetEnv }}"</code></pre>

        <p><strong>How to run:</strong> Trigger with parameters from UI or via REST API to choose <code>targetEnv</code> (dev/qa/prod).</p>

        <p><strong>In Practice:</strong> I expose <code>targetEnv</code> as a runtime parameter in Release pipeline UI for manual runs and use CI triggers for automatic pushes to <code>dev</code> or <code>qa</code>.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Approvals, Gates & Validations",
    questions: [
      {
        question: "How do you handle approvals and gates in pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Handling Approvals and Gates in Pipelines</strong></h3>
        <p>
          Approvals and gates control when a deployment can proceed — ensuring human validation and automated checks before production release.
        </p>

        <strong>How I Handle It:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧍‍♂️ <strong>Approvals:</strong> Require manual sign-off before a critical stage (e.g., Prod).</li>
          <li>⚙️ <strong>Gates:</strong> Add automated checks like service health or ticket validation.</li>
          <li>🔐 <strong>Environment-level:</strong> Use environments in Azure DevOps for built-in approval workflows.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My UAT → Prod stages use dual approvals (QA + Release Manager) and gates that check ServiceNow tickets and app health before promotion.</p>
      </div>`
      },
      {
        question: "How do you configure manual validations?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Manual Validation in Pipelines</strong></h3>
        <p>
          Manual validations pause the pipeline until a user manually confirms to continue or reject deployment.
        </p>

        <strong>YAML Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- stage: DeployProd
  jobs:
    - job: WaitForApproval
      pool: server
      steps:
        - task: ManualValidation@0
          inputs:
            notifyUsers: 'devops.manager@litmusit.com'
            instructions: 'Approve to deploy in production'</code></pre>

        <p><strong>In Practice:</strong>  
        I use <code>ManualValidation@0</code> in PROD pipelines to ensure manager approval before pushing to customer-facing systems.</p>
      </div>`
      },
      {
        question: "What is the difference between approvals in environments vs release pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Approvals: Environments vs Release Pipelines</strong></h3>
        <p>
          Both provide control before deployment, but differ in structure and scope.
        </p>

        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Environment Approvals</th><th>Release Pipeline Approvals</th></tr>
          <tr><td>Defined In</td><td>YAML Environments</td><td>Classic Release Pipeline UI</td></tr>
          <tr><td>Automation Level</td><td>Fully code-based, reusable</td><td>Manual UI setup</td></tr>
          <tr><td>Gates Support</td><td>Yes (YAML)</td><td>Yes (Classic)</td></tr>
          <tr><td>Use Case</td><td>Modern CI/CD with YAML</td><td>Legacy release flows</td></tr>
        </table>

        <p><strong>In Practice:</strong>  
        I prefer environment approvals in YAML pipelines since they’re version-controlled and portable across projects.</p>
      </div>`
      },
      {
        question: "How do you integrate approval flow before production deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Approval Flow Before Production Deployment</strong></h3>
        <p>
          Integrate approval gates at the production stage — so deployment only starts after authorized users approve.
        </p>

        <strong>Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Create a <strong>Prod Environment</strong> in Azure DevOps.</li>
          <li>Add approvers under Environment → Approvals and Checks.</li>
          <li>Reference this environment in YAML deployment job.</li>
        </ul>

        <strong>Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- deployment: DeployProd
  environment: 'prod'
  strategy:
    runOnce:
      deploy:
        steps:
          - script: echo "Deploying to production"</code></pre>

        <p><strong>In Practice:</strong>  
        I add mandatory approvers (Lead + Manager) for PROD so no auto-deployment happens accidentally.</p>
      </div>`
      },
      {
        question: "What is an environment in ADO and how do you manage access controls?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Environments in Azure DevOps</strong></h3>
        <p>
          An <strong>Environment</strong> represents a logical deployment target like Dev, QA, or Prod — with built-in approvals, security, and deployment tracking.
        </p>

        <strong>Features:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧠 Track deployments per environment.</li>
          <li>🔒 Assign user/group permissions (who can deploy or approve).</li>
          <li>⚙️ Define approvals & gates for controlled promotion.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My team defines ADO Environments for DEV, QA, UAT, PROD with RBAC — DevOps engineers deploy to lower envs, leads approve PROD.</p>
      </div>`
      },
      {
        question: "How do you handle validation and rollback for failed releases?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Validation & Rollback Handling</strong></h3>
        <p>
          Validation ensures a release is healthy; rollback recovers from failure using last known stable build or infrastructure state.
        </p>

        <strong>Approach:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>✅ Run post-deployment validation tests (smoke tests, health checks).</li>
          <li>⚙️ Configure rollback tasks or re-deploy last successful artifact.</li>
          <li>💾 For infra (Terraform), use remote state to roll back automatically.</li>
        </ul>

        <p><strong>YAML Tip:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>condition: failed()
steps:
  - script: echo "Reverting to previous version"
  - task: DownloadPipelineArtifact@2
    inputs:
      artifactName: 'previous-build'</code></pre>

        <p><strong>In Practice:</strong>  
        I automate rollback in Helm + Terraform deployments to restore last known stable version if health checks fail post-release.</p>
      </div>`
      },
      {
        question: "What are gates in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>Gates in Azure DevOps</strong></h3>
        <p>
          <strong>Gates</strong> are automated checks that run before or after deployment to validate external conditions.
        </p>

        <strong>Common Gate Types:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔍 Query monitoring tools like App Insights or Azure Monitor for health signals.</li>
          <li>📜 Call REST APIs to check change requests (ServiceNow, Jira).</li>
          <li>⏱️ Add delay timers for canary rollouts.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I configure App Insights gates to ensure no active incidents before Prod deployment and ServiceNow gates for approval ticket validation.</p>
      </div>`
      },
      {
        question: "What is a deployment gate in ADO?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚧 <strong>Deployment Gate</strong></h3>
        <p>
          A <strong>deployment gate</strong> is a pre-deployment or post-deployment condition that must pass before moving to the next stage.
        </p>

        <p><strong>Example Use:</strong></p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>✅ Verify ServiceNow ticket is approved.</li>
          <li>📊 Check App Insights error count &lt; threshold.</li>
          <li>⏳ Wait 30 mins for canary feedback before full rollout.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I configure post-deployment gates in PROD to validate monitoring metrics — deployment continues only if app remains stable for 10 mins.</p>
      </div>`
      },
      {
        question: "What is the purpose of approvals and gates?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Purpose of Approvals & Gates</strong></h3>
        <p>
          Approvals and gates together ensure <strong>safe, auditable, and controlled deployments</strong> in CI/CD pipelines.
        </p>

        <strong>Purpose:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔒 Prevent unauthorized releases.</li>
          <li>🧠 Ensure pre-deployment validation & compliance checks.</li>
          <li>🕵️ Enable traceability and accountability for production changes.</li>
          <li>🚀 Improve stability by catching issues before full rollout.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My PROD pipelines require dual manual approvals + automated ServiceNow gate + AppInsights gate — ensuring both governance and automation balance.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Quality, Testing & Security",
    questions: [
      {
        question: "How do you integrate SonarQube for code quality analysis?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Integrating SonarQube for Code Quality</strong></h3>
        <p>
          SonarQube ensures code quality, bug detection, and security analysis directly inside the CI pipeline.
        </p>

        <strong>Integration Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔗 Configure a <strong>SonarQube Service Connection</strong> in Azure DevOps.</li>
          <li>📦 Install the “SonarQube” extension in your ADO organization.</li>
          <li>🧩 Add the <code>Prepare Analysis</code>, <code>Run Code Analysis</code>, and <code>Publish Quality Gate</code> tasks in your YAML pipeline.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- task: SonarQubePrepare@5
  inputs:
    SonarQube: 'SonarConnection'
    projectKey: 'app-key'
    projectName: 'WebApp'

- script: mvn clean install

- task: SonarQubeAnalyze@5

- task: SonarQubePublish@5
  inputs:
    pollingTimeoutSec: '300'</code></pre>

        <p><strong>In Practice:</strong>  
        Every PR triggers a build and SonarQube scan — failing builds if the Quality Gate doesn’t meet standards (code coverage, bug threshold, vulnerability score).</p>
      </div>`
      },
      {
        question: "How do you handle unit and functional testing inside pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧪 <strong>Unit & Functional Testing in Pipelines</strong></h3>
        <p>
          Testing ensures code reliability before deployment. I integrate both unit and functional test stages inside YAML pipelines.
        </p>

        <strong>Structure:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 <strong>Unit Tests:</strong> Executed during the Build stage (e.g., Jest, JUnit, PyTest).</li>
          <li>⚙️ <strong>Functional / Integration Tests:</strong> Run in separate test environments post-deploy.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- stage: Test
  jobs:
    - job: RunTests
      steps:
        - script: npm run test:unit
        - script: npm run test:functional</code></pre>

        <p><strong>In Practice:</strong>  
        I use separate “Test” stages that fail early on critical test cases — preventing deployment if coverage or smoke test fails.</p>
      </div>`
      },
      {
        question: "How do you integrate Checkov, TFLint, and Terraform validation in your pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Integrating Checkov, TFLint & Terraform Validation</strong></h3>
        <p>
          Checkov and TFLint validate infrastructure code (Terraform) for compliance and security before applying.
        </p>

        <strong>Pipeline Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>⚙️ <strong>Terraform Validate:</strong> Check syntax and structure.</li>
          <li>🧱 <strong>TFLint:</strong> Detect logical errors and naming violations.</li>
          <li>🛡️ <strong>Checkov:</strong> Security & compliance scan for misconfigurations.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- script: terraform init
- script: terraform validate
- script: tflint --config .tflint.hcl
- script: checkov -d . --compact</code></pre>

        <p><strong>In Practice:</strong>  
        My Terraform pipelines fail automatically if Checkov finds “high severity” issues — ensuring IaC security before deployment.</p>
      </div>`
      },
      {
        question: "TFLint and Checkov make the pipeline slow — how can you optimize it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Optimizing Checkov & TFLint Performance</strong></h3>
        <p>
          These tools can be heavy, so optimization is key to keep CI times low.
        </p>

        <strong>My Optimization Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🚀 Run them in parallel using separate jobs.</li>
          <li>📁 Use <code>--directory</code> flags to limit scans only to changed Terraform modules.</li>
          <li>🧩 Cache <code>.terraform</code> and plugin directories to skip re-downloads.</li>
          <li>⚙️ Run full scans nightly, but only delta scans (modified code) in PR pipelines.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use a lightweight “fast-check” mode on PRs and a complete security scan on nightly builds — this keeps PR feedback fast while maintaining compliance.</p>
      </div>`
      },
      {
        question: "How do you ensure secure code scanning and compliance checks in pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Secure Code Scanning & Compliance</strong></h3>
        <p>
          I enforce DevSecOps practices directly in the CI pipeline using static and dynamic analysis tools.
        </p>

        <strong>Typical Security Tools:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 <strong>SonarQube:</strong> For code smell, vulnerabilities, and coverage.</li>
          <li>🧱 <strong>Checkov / Trivy:</strong> For IaC and container image scans.</li>
          <li>🧠 <strong>Secret Scanning:</strong> Prevent accidental credential commits.</li>
        </ul>

        <p><strong>Example Integration:</strong></p>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- script: trivy image myapp:latest
- script: checkov -d ./infra</code></pre>

        <p><strong>In Practice:</strong>  
        I fail the build if vulnerability score > threshold (CVSS ≥ 7) and publish reports to ADO Summary Tab for visibility.</p>
      </div>`
      },
      {
        question: "How do you enable Splunk or monitoring integration for pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Integrating Splunk / Monitoring with Pipelines</strong></h3>
        <p>
          Integrating monitoring tools like Splunk or Application Insights helps track pipeline runs, errors, and deployment metrics in real-time.
        </p>

        <strong>Approach:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🧩 Send custom logs/events using REST API calls from YAML steps.</li>
          <li>📡 Use <code>Invoke-RestMethod</code> or <code>curl</code> to post run metadata to Splunk HEC endpoint.</li>
          <li>⚙️ Add Application Insights SDK in your deployed app for runtime telemetry.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- script: |
    curl -k https://splunk.company.com:8088/services/collector \
      -H "Authorization: Splunk $SPLUNK_TOKEN" \
      -d '{"event":"Pipeline succeeded","project":"devops-app"}'</code></pre>

        <p><strong>In Practice:</strong>  
        I log every deployment start/finish event to Splunk — mapped with commit ID and user info, so ops can trace any issue easily.</p>
      </div>`
      },
      {
        question: "What are security practices used to secure CI/CD pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Securing the CI/CD Pipeline</strong></h3>
        <p>
          Security starts from source to deploy — the goal is to protect credentials, code, and build integrity.
        </p>

        <strong>Key Practices:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔑 Use Azure Key Vault for all secrets, not plain variables.</li>
          <li>🧩 Restrict service connections via RBAC and least privilege.</li>
          <li>📜 Enable branch protection and PR approvals.</li>
          <li>🧱 Implement signed artifact publishing.</li>
          <li>🧠 Add Checkov, SonarQube, and Trivy scans.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My organization uses managed identities for ADO pipelines — no stored passwords or service principals, everything resolved at runtime securely.</p>
      </div>`
      },
      {
        question: "What are security best practices in pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Security Best Practices in Pipelines</strong></h3>
        <p>
          Security is continuous. These are my personal DevOps golden rules:
        </p>

        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>✅ Use <strong>Key Vault</strong> + Variable Groups for secrets.</li>
          <li>🚫 Never store creds or tokens in YAML.</li>
          <li>🧩 Restrict agent permissions (read-only builds).</li>
          <li>🔐 Implement <strong>PR validations</strong> with SonarQube/Checkov scans.</li>
          <li>🧠 Keep dependencies updated and signed.</li>
          <li>📊 Continuously monitor pipeline metrics and failures.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My ADO pipelines have built-in security gates — no deployment happens until both static code and IaC scans pass successfully.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Terraform & Infrastructure Automation",
    questions: [
      {
        question: "How do you integrate Terraform execution in an ADO pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔧 <strong>Integrating Terraform in Azure DevOps Pipelines</strong></h3>
        <p>
          Run Terraform as part of a YAML pipeline: initialize, plan (with output), review, then apply. Use service connections (ARM/SPN) for auth and secure secrets via Key Vault or variable groups.
        </p>

        <strong>Typical YAML steps:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UseTerraform@0   # or install terraform manually
  inputs:
    terraformVersion: '1.4.x'

- script: terraform init -backend-config="storage_account_name=$(tf_storage)"
- script: terraform plan -out=tfplan -input=false
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: 'tfplan'
- script: terraform apply -input=false tfplan</code></pre>

        <p><strong>Key points:</strong> never run <code>apply</code> automatically on PRs — require manual approval for apply in protected branches.</p>
      </div>`
      },
      {
        question: "How will you create one resource in multiple subscriptions under the same pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Creating resources across multiple subscriptions</strong></h3>
        <p>
          Use multiple service connections (SPNs) — one per subscription — and parameterize the subscription / backend configuration per job/stage.
        </p>

        <strong>Approach:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Define each subscription as a service connection in ADO (e.g., subA-conn, subB-conn).</li>
          <li>Parameterize the pipeline with a list of targets and loop jobs/stages to deploy per-subscription.</li>
        </ul>

        <strong>YAML sketch:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>parameters:
- name: subscriptions
  type: object
  default:
    - { name: 'subA', connection: 'subA-conn', rg: 'rg-a' }
    - { name: 'subB', connection: 'subB-conn', rg: 'rg-b' }

stages:
- \${{ each sub in parameters.subscriptions }}:
  - stage: deploy_\${{ sub.name }}
    jobs:
    - job: terraform_\${{ sub.name }}
      steps:
        - script: |
            az login --service-principal -u $(clientId_\${{ sub.name }}) -p $(clientSecret_\${{ sub.name }}) --tenant $(tenant)
        - script: terraform apply -var "resource_group=\${{ sub.rg }}"</code></pre>

        <p><strong>In Practice:</strong> run terraform in isolated jobs per subscription to avoid cross-subscription state conflicts.</p>
      </div>`
      },
      {
        question: "How will you create a one-click pipeline that provisions full infrastructure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>One-click provisioning pipeline</strong></h3>
        <p>
          Build a multi-stage pipeline: Prep → Plan (staging) → Manual Approval → Apply (production). Use templates for each layer (network, infra, app). Publish plan artifacts and require approval before apply.
        </p>

        <strong>Design:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Stage 1: Validate & Plan — runs on feature branches and PRs.</li>
          <li>Stage 2: Plan for Target (staging/prod) — stores plan artifact.</li>
          <li>Stage 3: Manual approval gate.</li>
          <li>Stage 4: Apply — runs with SPN credentials and locked backend.</li>
        </ul>

        <strong>Why:</strong> prevents accidental destructive changes and provides auditable plan before apply.</p>
      </div>`
      },
      {
        question: "How do you run Terraform init/plan/apply securely in a pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure Terraform Execution</strong></h3>
        <p>
          Use service principals, remote backend with locking, and secrets stored in Key Vault. Keep sensitive flags off logs and require approvals for apply.
        </p>

        <strong>Security checklist:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Store SPN credentials in Key Vault & fetch via variable group.</li>
          <li>Use remote backend (Azure Storage) with state locking (Blob lease) or use DynamoDB lock for AWS.</li>
          <li>Run <code>terraform plan -out=plan</code> and publish plan as artifact instead of printing sensitive values.</li>
          <li>Use <code>-input=false</code> and <code>-no-color</code> for CI runs.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>terraform init -backend-config="key=env/terraform.tfstate"
terraform plan -out=tfplan -input=false
# publish tfplan, require approval
terraform apply -input=false tfplan</code></pre>

        <p><strong>In Practice:</strong> restrict SPN to least privilege and rotate secrets regularly; enable soft-delete & versioning on state storage.</p>
      </div>`
      },
      {
        question: "How do you handle Terraform state backend and secrets inside pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗄️ <strong>State Backend & Secrets Management</strong></h3>
        <p>
          Use a remote backend for shared state and a secure vault for secrets. Ensure backend & secrets are protected with RBAC and access logging.
        </p>

        <strong>Backend options:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Azure: Storage Account + container + blob locking (use blob-level lease for locking).</li>
          <li>AWS: S3 + DynamoDB for state locking.</li>
        </ul>

        <strong>Secrets:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Store SPN/client secrets in Azure Key Vault and link to ADO variable group.</li>
          <li>Never echo secrets to logs; mask sensitive variables in pipeline settings.</li>
        </ul>

        <p><strong>In Practice:</strong> I use storage account with soft-delete and immutable policies, and Key Vault for credentials — granting only pipeline service principal 'Storage Blob Data Contributor' rights.</p>
      </div>`
      },
      {
        question: "How do you optimize long-running Terraform pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Optimizing Long-running Terraform Runs</strong></h3>
        <p>
          Split plan/apply, use parallelism wisely, cache providers, and run expensive checks off the PR path (nightly).
        </p>

        <Optimization tactics:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔪 <strong>Plan-only on PRs:</strong> fast check for diffs; full apply only on approved merges.</li>
          <li>🧱 <strong>Modularize:</strong> split infra into smaller Terraform modules executed independently.</li>
          <li>📁 <strong>Caching:</strong> cache terraform plugins & provider downloads across runs.</li>
          <li>⏳ <strong>Parallelism:</strong> control <code>-parallelism</code> to avoid API throttling.</li>
        </ul>

        <p><strong>In Practice:</strong> run heavy policy-as-code checks (OPA, Checkov full scan) in nightly runs while PRs run quick checks.</p>
      </div>`
      },
      {
        question: "How do you automate Terraform in CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Automating Terraform in CI/CD</strong></h3>
        <p>
          Automate plan and apply via pipelines, publish plans for approval, and use automation accounts or service principals to run applies with RBAC controls.
        </p>

        <Flow:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>PR triggers terraform validate & plan (fast checks).</li>
          <li>Merge to main triggers plan for target environment and publishes plan artifact.</li>
          <li>Manual approval gate → apply runs using pipeline service principal.</li>
        </ol>

        <p><strong>In Practice:</strong> I use pipeline artifacts and approvals so infrastructure changes are auditable — artifact contains exact plan that will be applied.</p>
      </div>`
      },
      {
        question: "How do you automate Terraform runs in CI/CD using Bash or PowerShell?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⌨️ <strong>Automating Terraform with Bash / PowerShell</strong></h3>
        <p>
          Use scripts to wrap terraform commands, handle environment variables, fetch secrets, and fail safely. Store these scripts in repo and call them from pipeline tasks.
        </p>

        <Bash example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>#!/bin/bash
set -euo pipefail

# fetch secrets (example: from Azure Key Vault via az cli)
az login --service-principal -u "$SPN_ID" -p "$SPN_SECRET" --tenant "$TENANT_ID"
az keyvault secret show --vault-name "$KV" -n tf-backend-key --query value -o tsv > backend-key

terraform init -backend-config="access_key=$(cat backend-key)"
terraform plan -out=tfplan -input=false
# Upload tfplan artifact for approval
</code></pre>

        <PowerShell example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>Set-StrictMode -Version Latest
az login --service-principal -u $env:SPN_ID -p $env:SPN_SECRET -t $env:TENANT_ID
$secret = az keyvault secret show --vault-name $env:KV -n tf-backend-key --query value -o tsv
terraform init -backend-config="access_key=$secret"
terraform plan -out=tfplan -input=false</code></pre>

        <p><strong>In Practice:</strong> wrap scripts with logging, error handling, and masking to avoid leaking secrets in logs.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Pipeline Failures & Debugging",
    questions: [
      {
        question: "What are the common issues faced during pipeline runs?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚠️ <strong>Common Issues in Pipeline Runs</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🔑 Authentication errors — wrong service connection, expired token, or missing access.</li>
          <li>📦 Missing dependencies or incorrect path references in build tasks.</li>
          <li>🌐 Network/firewall restrictions while accessing external registries or APIs.</li>
          <li>🧩 YAML indentation or variable resolution issues.</li>
          <li>🕒 Agent timeout or job queue delays due to limited pool capacity.</li>
        </ul>
        <p><strong>In Practice:</strong> I always start debugging from the error logs, check job summary, verify credentials, then re-run in debug mode using <code>system.debug=true</code>.</p>
      </div>`
      },
      {
        question: "If build fails though Dockerfile is correct — how do you troubleshoot?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐳 <strong>Debugging Docker Build Failures</strong></h3>
        <p>Even a valid Dockerfile can fail in CI if environment or context is misconfigured.</p>

        <strong>Debug checklist:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Check if build context (path) is correct — ADO often runs from root, not src folder.</li>
          <li>Verify file references like <code>.env</code> or COPY paths.</li>
          <li>Ensure agent has Docker installed and correct permissions.</li>
          <li>Inspect logs with <code>--progress=plain</code> for actual failing layer.</li>
        </ul>

        <p><strong>In Practice:</strong> I reproduce locally using the same Dockerfile and tag as pipeline to identify whether issue is environment-specific or CI-related.</p>
      </div>`
      },
      {
        question: "How do you handle pipeline failures and send notifications?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📩 <strong>Handling Failures & Notifications</strong></h3>
        <p>
          Use post-job actions or ADO service hooks to trigger notifications on failure.
        </p>

        <strong>Example:</strong>
        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: PowerShell@2
  condition: failed()
  inputs:
    targetType: inline
    script: |
      Send-MailMessage -To 'team@litmusit.com' -Subject 'Pipeline Failed' \
      -Body 'Build $(Build.BuildNumber) failed. Please check logs.'</code></pre>

        <p><strong>In Practice:</strong> I use Teams & Slack webhooks via ADO service hooks for instant notifications when Prod or Infra pipelines fail.</p>
      </div>`
      },
      {
        question: "How do you rollback failed deployments automatically?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Automatic Rollback on Failure</strong></h3>
        <p>Automate rollback using conditional jobs that trigger when deployment fails.</p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- stage: Rollback
  condition: failed()
  jobs:
    - job: revertToPrevious
      steps:
        - script: |
            az webapp deployment source config-zip --src last-successful.zip
        - script: echo "Rollback complete"</code></pre>

        <p><strong>In Practice:</strong> I maintain a “last successful artifact” and rollback environment to it automatically using <code>DownloadPipelineArtifact@2</code> task.</p>
      </div>`
      },
      {
        question: "How do you implement retry logic in YAML pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Retry Logic for Transient Failures</strong></h3>
        <p>Azure DevOps allows retry conditions using expressions and custom scripts.</p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>steps:
- task: Bash@3
  inputs:
    targetType: inline
    script: |
      for i in {1..3}; do
        echo "Attempt $i"
        curl https://api.company.com && break || sleep 10
      done</code></pre>

        <p><strong>In Practice:</strong> I use retries for API rate limits, network instability, or external service readiness in early deployment stages.</p>
      </div>`
      },
      {
        question: "What steps do you take if the pipeline is running too long?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏳ <strong>Pipeline Performance Optimization</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Break monolithic jobs into parallel jobs.</li>
          <li>Cache dependencies (npm, Maven, Terraform providers).</li>
          <li>Skip redundant stages for unchanged code using <code>condition:</code>.</li>
          <li>Move heavy security scans to scheduled nightly pipelines.</li>
        </ul>
        <p><strong>In Practice:</strong> I use the <code>cache@2</code> task to store dependencies and reduced CI runtime from 22 min to 8 min.</p>
      </div>`
      },
      {
        question: "How do you debug authorization or permission-related issues?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Debugging Authorization Issues</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Verify pipeline’s service connection permissions on subscription/resource group.</li>
          <li>Check role assignment (Contributor vs Owner).</li>
          <li>Ensure pipeline agent identity has access to target resources.</li>
          <li>Run command with <code>--debug</code> flag to print REST call failures.</li>
        </ul>
        <p><strong>In Practice:</strong> I often test SPN manually using <code>az login</code> to confirm it can access required resources before running pipeline again.</p>
      </div>`
      },
      {
        question: "How do you manage concurrency and job parallelism to optimize execution time?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Concurrency & Job Parallelism</strong></h3>
        <p>Parallel jobs allow simultaneous stage execution while controlling system load.</p>

        <strong>Techniques:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Set <code>dependsOn: []</code> to allow independent stage runs.</li>
          <li>Use <code>jobs: [ job1, job2 ]</code> under one stage for parallel builds.</li>
          <li>Use <code>maxParallel:</code> in matrix jobs to cap concurrency.</li>
        </ul>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- stage: Build
  jobs:
  - job: api
  - job: ui</code></pre>

        <p><strong>In Practice:</strong> My microservices pipelines run 10 build jobs in parallel — reduces total time by ~60%.</p>
      </div>`
      },
      {
        question: "How do you troubleshoot a multi-stage pipeline issue?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Debugging Multi-stage Pipeline Issues</strong></h3>
        <p>Follow a systematic approach:</p>

        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Identify which stage failed from summary view.</li>
          <li>Check artifact passing or variable scope (often a cause).</li>
          <li>Run failed stage in isolation (<code>rerun failed jobs</code>).</li>
          <li>Enable <code>system.debug=true</code> for verbose logs.</li>
        </ol>

        <p><strong>In Practice:</strong> I log artifact paths and variables to confirm flow continuity between build → deploy stages.</p>
      </div>`
      },
      {
        question: "What happens if count=0 in pipeline execution?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧮 <strong>Effect of count=0</strong></h3>
        <p>If <code>count=0</code> in resource creation logic (Terraform or ARM templates), that resource is skipped — no creation or deletion occurs.</p>

        <p><strong>In Practice:</strong> I use <code>count=0</code> to conditionally skip non-prod deployments or optional infra modules (e.g., bastion, VPN).</p>
      </div>`
      },
      {
        question: "How do you handle lock state if pipeline fails after apply?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Handling Locked State after Failure</strong></h3>
        <p>Terraform backends like Azure Storage can leave state locked after a failed job.</p>

        <strong>Fix:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Use <code>terraform force-unlock &lt;lock-id&gt;</code> to manually release lock.</li>
          <li>Check for active lease in the blob storage and remove if job aborted.</li>
          <li>Ensure only one apply runs at a time per workspace.</li>
        </ul>

        <p><strong>In Practice:</strong> I always isolate plan/apply per workspace and add <code>lock=false</code> for read-only operations (validate, plan).</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Releases, Artifacts & Environments",
    questions: [
      {
        question: "What is the difference between build and release pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Build vs Release Pipelines</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Build Pipeline</th><th>Release Pipeline</th></tr>
          <tr><td>Purpose</td><td>Compiles and packages code</td><td>Deploys built artifacts to environments</td></tr>
          <tr><td>Trigger</td><td>Code push, PR merge</td><td>After successful build or manual approval</td></tr>
          <tr><td>Output</td><td>Artifact (zip, image, package)</td><td>Running application</td></tr>
          <tr><td>Stages</td><td>Build & Test</td><td>Deploy, Approve, Validate</td></tr>
        </table>

        <p><strong>In Practice:</strong>  
        My pipelines are YAML-based, so build and release are in a single multi-stage pipeline.  
        But for legacy projects, we still use separate classic release pipelines with environment approvals.</p>
      </div>`
      },
      {
        question: "How do you use artifacts between build and release pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Using Artifacts Across Pipelines</strong></h3>
        <p>
          Artifacts are the link between build and deployment stages. Build pipelines publish them; release pipelines consume them.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code># Build pipeline
steps:
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'

# Release pipeline (YAML)
resources:
  pipelines:
    - pipeline: buildPipeline
      source: 'my-app-build'
      trigger: true

stages:
- stage: Deploy
  jobs:
    - job: deploy
      steps:
        - download: buildPipeline
        - script: echo "Deploying $(Pipeline.Workspace)/drop"</code></pre>

        <p><strong>In Practice:</strong>  
        I always version artifacts using build numbers or git commit SHA — ensures reproducible deployments.</p>
      </div>`
      },
      {
        question: "What is the difference between build artifacts and external feeds?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Build Artifacts vs External Feeds</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li><strong>Build Artifacts:</strong> Outputs generated by a build (e.g., .zip, .jar, Docker image) stored temporarily in ADO or storage.</li>
          <li><strong>External Feeds:</strong> Permanent package repositories (e.g., ADO Artifacts, npm, NuGet, Maven) used for dependency sharing.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I publish compiled libs to ADO Artifact feeds so other teams can consume them, and use build artifacts only for deployment deliverables.</p>
      </div>`
      },
      {
        question: "How do you manage artifacts and publish them securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Secure Artifact Management</strong></h3>
        <p>Use Azure Artifacts service or private registries (ACR, Nexus) with RBAC and token-based authentication.</p>

        <strong>Best Practices:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Use personal access tokens (PATs) or service connections for publishing.</li>
          <li>Enable retention policies to auto-clean old builds.</li>
          <li>Restrict feed access to specific pipelines or users.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My org uses private ACR and ADO feeds for artifacts; only service principals with contributor role can push or pull images.</p>
      </div>`
      },
      {
        question: "Where do you deploy the artifacts (VMs, AKS, App Service)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Artifact Deployment Targets</strong></h3>
        <p>
          Deployment targets depend on the application architecture:
        </p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>🌐 <strong>Web Apps:</strong> Azure App Service, AKS, or Containers.</li>
          <li>🧱 <strong>Microservices:</strong> Azure Kubernetes Service (Helm charts, YAML manifests).</li>
          <li>🖥️ <strong>Legacy Apps:</strong> Deployed on VMs using Deployment Groups or WinRM tasks.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I deploy .NET and Node.js apps to App Service; containerized workloads to AKS via Helm in YAML pipelines.</p>
      </div>`
      },
      {
        question: "How do you manage releases across DEV, UAT, and PROD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Managing Multi-Environment Releases</strong></h3>
        <p>
          Use multi-stage YAML pipelines or classic releases with defined environments (DEV → QA → UAT → PROD) and approvals.
        </p>

        <strong>Approach:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Deploy automatically to DEV and QA.</li>
          <li>Require manual approval for UAT and PROD.</li>
          <li>Use variable groups and Key Vaults per environment.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use YAML-based environment deployments; QA sign-off is mandatory before promoting to PROD to avoid unverified changes.</p>
      </div>`
      },
      {
        question: "What are environment approvals and how are they configured?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✅ <strong>Environment Approvals</strong></h3>
        <p>
          Approvals ensure only authorized users can deploy to sensitive environments.
        </p>

        <strong>Configuration Steps:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Create environment in ADO (e.g., 'prod').</li>
          <li>Add approvers and checks under Environment settings → Approvals & Checks.</li>
          <li>Reference the environment in YAML via <code>environment:</code> keyword.</li>
        </ol>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- deployment: DeployProd
  environment: 'prod'
  strategy:
    runOnce:
      deploy:
        steps:
          - script: echo "Deploying to PROD"</code></pre>

        <p><strong>In Practice:</strong>  
        I configure multiple approvers for PROD (Manager + DevOps Lead) and track approvals in ADO audit logs.</p>
      </div>`
      },
      {
        question: "What is a release vs build vs artifact?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📘 <strong>Release vs Build vs Artifact</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Term</th><th>Description</th></tr>
          <tr><td><strong>Build</strong></td><td>Process that compiles code and runs tests.</td></tr>
          <tr><td><strong>Artifact</strong></td><td>Output of build — deployable package or image.</td></tr>
          <tr><td><strong>Release</strong></td><td>Deployment of that artifact to an environment.</td></tr>
        </table>

        <p><strong>In Practice:</strong>  
        Build creates Docker image → pushed to ACR (artifact) → release pipeline deploys it to AKS (release).</p>
      </div>`
      },
      {
        question: "What is an artifact repository?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Artifact Repository</strong></h3>
        <p>
          A centralized storage for versioned build outputs — ensures consistency across teams and environments.
        </p>

        <strong>Examples:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Azure Artifacts</li>
          <li>JFrog Artifactory</li>
          <li>Nexus</li>
          <li>GitHub Packages</li>
        </ul>

        <p><strong>In Practice:</strong>  
        We use Azure Artifacts to host NuGet and npm packages — accessible by multiple teams with RBAC control.</p>
      </div>`
      },
      {
        question: "What is release pipeline in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Release Pipeline Overview</strong></h3>
        <p>
          A release pipeline automates deployment of build artifacts across environments with approvals, gates, and rollback control.
        </p>

        <strong>Features:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Multi-environment deployment stages.</li>
          <li>Manual approvals and automated gates.</li>
          <li>Artifact version tracking.</li>
          <li>Rollback and retention policies.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use YAML-based release stages — each with its own environment and gate checks, integrated with ServiceNow approval for production releases.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "13. Boards & Agile",
    questions: [
      {
        question: "What is a work item?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Work Item in Azure Boards</strong></h3>
        <p>
          A <strong>Work Item</strong> represents a single task, bug, feature, or user story tracked in Azure Boards.  
          Each work item has fields like Title, Assigned To, State, and Links (commits, PRs, builds).
        </p>
        <p><strong>In Practice:</strong>  
          I link every commit and PR to a work item — it gives full traceability from code → build → release.
        </p>
      </div>`
      },
      {
        question: "What is a sprint?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏃‍♂️ <strong>Sprint in Agile Methodology</strong></h3>
        <p>
          A <strong>Sprint</strong> is a fixed time-box (usually 2–3 weeks) in which a team plans, develops, tests, and delivers specific features or improvements.
        </p>
        <p><strong>In Practice:</strong>  
          Our team runs 2-week sprints — we use the Sprint Board in ADO to track progress via “To Do → In Progress → Done” swimlanes.
        </p>
      </div>`
      },
      {
        question: "What is a stakeholder in ADO?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👥 <strong>Stakeholder Role in Azure DevOps</strong></h3>
        <p>
          A <strong>Stakeholder</strong> is a non-technical user (e.g., Product Owner, Manager, Client) who can view dashboards, track progress, and approve work — without needing a paid license.
        </p>
        <p><strong>In Practice:</strong>  
          Product Owners use Stakeholder access to review backlog items and approve sprint goals after planning meetings.
        </p>
      </div>`
      },
      {
        question: "What is the difference between sprint and work item?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Difference Between Sprint & Work Item</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Sprint</th><th>Work Item</th></tr>
          <tr><td>Definition</td><td>Time-boxed iteration</td><td>Task or unit of work inside sprint</td></tr>
          <tr><td>Purpose</td><td>Organize work for a period</td><td>Track specific deliverables or issues</td></tr>
          <tr><td>Ownership</td><td>Team level</td><td>Individual level</td></tr>
        </table>
        <p><strong>In Practice:</strong>  
          We create a sprint first, then assign multiple work items (tasks, bugs, stories) to that sprint.
        </p>
      </div>`
      },
      {
        question: "What methodology do you follow in Azure Boards?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Agile Methodology in Azure Boards</strong></h3>
        <p>
          We follow <strong>Scrum</strong> for iterative development — plan sprints, track user stories, and measure velocity using burndown charts.
        </p>
        <p><strong>Process Flow:</strong></p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Create Epic → Feature → User Story → Task hierarchy.</li>
          <li>Each sprint includes prioritized stories with acceptance criteria.</li>
          <li>Daily stand-ups and sprint retrospectives to track progress.</li>
        </ul>
        <p><strong>In Practice:</strong>  
          We visualize tasks on Scrum Board and use queries to generate sprint velocity reports.</p>
      </div>`
      },
      {
        question: "How do you restrict an ADO user to only pipelines and repo access?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Restricting User Access in Azure DevOps</strong></h3>
        <p>
          Use ADO’s <strong>Security & Permissions</strong> to control user-level access:
        </p>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Navigate to <code>Project Settings → Permissions</code>.</li>
          <li>Assign user to a custom group (e.g., DevOps-Contributor).</li>
          <li>Grant access to Repos & Pipelines only, deny Boards & Test Plans.</li>
        </ul>
        <p><strong>In Practice:</strong>  
          I maintain custom permission groups — developers can trigger pipelines but not modify board items or environment gates.</p>
      </div>`
      },
      {
        question: "Agile vs Kanban boards — which one have you used and why?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📋 <strong>Agile vs Kanban — Practical Comparison</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Scrum (Agile)</th><th>Kanban</th></tr>
          <tr><td>Structure</td><td>Work in Sprints</td><td>Continuous Flow</td></tr>
          <tr><td>Planning</td><td>Fixed sprint goal</td><td>No fixed iterations</td></tr>
          <tr><td>Metrics</td><td>Velocity, Burndown</td><td>Lead Time, Cycle Time</td></tr>
          <tr><td>Use Case</td><td>Feature development</td><td>Maintenance, support tasks</td></tr>
        </table>
        <p><strong>In Practice:</strong>  
          Our product teams use Scrum for development and Kanban for Infra/DevOps teams — it suits ongoing operational work without sprint pressure.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "14. Real-World Scenarios",
    questions: [
      {
        question: "You have two Azure subscriptions — how do you give access to new resources?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Granting Access Across Subscriptions</strong></h3>
        <p>
          I use <strong>Azure RBAC</strong> and <strong>Service Connections</strong> in ADO to handle cross-subscription access.
        </p>

        <strong>Steps:</strong>
        <ol style="margin:0 0 .5rem 1.2rem;">
          <li>Create a separate Service Principal (SPN) for each subscription.</li>
          <li>Assign <code>Contributor</code> or <code>Reader</code> role on required Resource Group only (least privilege).</li>
          <li>Configure a Service Connection in ADO using that SPN.</li>
          <li>Use pipeline parameters to switch between subscriptions dynamically.</li>
        </ol>

        <p><strong>In Practice:</strong>  
        I maintain one pipeline that deploys infra to multiple subscriptions by switching service connection context per stage.</p>
      </div>`
      },
      {
        question: "How will you manage multi-environment pipelines with conditional triggers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Managing Multi-Environment Pipelines</strong></h3>
        <p>
          I use multi-stage YAML pipelines with conditional triggers and variable groups for each environment.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>trigger:
  branches:
    include:
      - main
      - dev

stages:
- stage: Dev
  condition: eq(variables['Build.SourceBranchName'], 'dev')

- stage: Prod
  condition: eq(variables['Build.SourceBranchName'], 'main')</code></pre>

        <p><strong>In Practice:</strong>  
        DEV auto-deploys on commit; PROD waits for approval.  
        This ensures safe promotion flow without maintaining multiple pipelines.</p>
      </div>`
      },
      {
        question: "How would you rollback a production deployment if a bug is found later?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Rolling Back Production Deployment</strong></h3>
        <p>
          I maintain versioned artifacts (Docker tags or zip files) and rollback by redeploying the last successful version.
        </p>

        <strong>Rollback steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Identify the last successful release (from ADO Releases tab or tags).</li>
          <li>Redeploy using the same artifact ID or image tag.</li>
          <li>Update monitoring (Grafana/Prometheus) to validate recovery.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I tag each successful deployment as <code>prod-stable-vX.Y</code> so rollback is one-click from the artifact history.</p>
      </div>`
      },
      {
        question: "You are asked to add one resource in multiple subscriptions — how will you implement that?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Deploying to Multiple Subscriptions</strong></h3>
        <p>
          I parameterize the subscription ID and loop deployment stages or use Terraform workspaces.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>parameters:
- name: subs
  type: object
  default:
    - sub1
    - sub2

stages:
- \${{ each s in parameters.subs }}:
  - stage: Deploy_\${{ s }}
    jobs:
      - job: deploy
        steps:
          - script: az login --service-principal -u $(spnId) -p $(spnKey) -t $(tenant)
          - script: terraform apply -var "subscription=\${{ s }}"</code></pre>

        <p><strong>In Practice:</strong>  
        I maintain one reusable pipeline template; looping ensures consistent infra deployment across all subscriptions.</p>
      </div>`
      },
      {
        question: "You added Checkov and TFLint — pipeline became slow. How do you speed it up?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Optimizing Slow Terraform Security Scans</strong></h3>
        <p>
          I optimize by separating quick checks (syntax, validate) and heavy scans (Checkov/TFLint full) into different jobs.
        </p>

        <strong>Optimizations:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Run lint/validate in PR pipelines only.</li>
          <li>Run Checkov full scans in nightly scheduled pipelines.</li>
          <li>Use <code>--skip-check</code> for irrelevant policies.</li>
          <li>Enable caching for provider downloads.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        This reduced our Terraform pipeline from 26 min to 9 min while maintaining compliance quality.</p>
      </div>`
      },
      {
        question: "A developer ran a pipeline but authorization failed — what are the root causes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Debugging Authorization Failures</strong></h3>
        <p>
          Authorization errors usually mean permission or token scope mismatch.
        </p>

        <strong>Common causes:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Service connection not authorized for that pipeline.</li>
          <li>Expired PAT or SPN secret.</li>
          <li>Pipeline not granted access to the resource group/subscription.</li>
          <li>“Allow access to all pipelines” not enabled in service connection settings.</li>
        </ul>

        <p><strong>Fix:</strong>  
        Re-authorize connection, renew secrets, and ensure <code>Contributor</code> role on resource scope.</p>
      </div>`
      },
      {
        question: "A deployment failed midway — how do you recover?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Recovering from Partial Deployment</strong></h3>
        <p>
          I use Terraform’s <strong>state consistency</strong> or Azure deployment history to rollback incomplete changes.
        </p>

        <strong>Steps:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Check logs for last successful resource creation.</li>
          <li>Run <code>terraform plan</code> again — it auto-detects drift and brings state back in sync.</li>
          <li>Manually delete failed half-created resources if required.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I always store state remotely (Azure Blob) so even if a job fails, another rerun resumes safely from state.</p>
      </div>`
      },
      {
        question: "What branching strategy did you use for hotfixes and releases?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching for Hotfix & Release</strong></h3>
        <p>
          We follow <strong>GitFlow</strong> with short-lived feature branches and separate hotfix branches from production.
        </p>

        <strong>Flow:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li><code>main</code> — stable production branch.</li>
          <li><code>develop</code> — active sprint work.</li>
          <li><code>feature/*</code> — new feature branches.</li>
          <li><code>hotfix/*</code> — fixes applied directly to <code>main</code> then merged back to <code>develop</code>.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Hotfix pipelines auto-deploy to PROD after approval; once verified, they are merged back to maintain sync.</p>
      </div>`
      },
      {
        question: "If two teams have access to the same repo, how do you auto-raise a PR?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🤝 <strong>Auto-Raising Pull Requests Across Teams</strong></h3>
        <p>
          I use automation scripts or GitHub Actions / ADO APIs to create PRs automatically when a branch updates.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>- task: PowerShell@2
  inputs:
    targetType: inline
    script: |
      az repos pr create --repository myrepo \
        --source feature/teamA \
        --target main \
        --title "Auto PR from Team A"</code></pre>

        <p><strong>In Practice:</strong>  
        This ensures integration branches always stay up-to-date without manual PR creation.</p>
      </div>`
      },
      {
        question: "How to manage 1500 subscriptions using ADO?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏢 <strong>Managing Large-Scale Multi-Subscription Infra</strong></h3>
        <p>
          At scale, use <strong>Management Groups</strong>, <strong>Service Principals with delegated permissions</strong>, and parameterized pipelines.
        </p>

        <strong>Strategy:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Group subscriptions under Management Groups for RBAC inheritance.</li>
          <li>Use Terraform or ARM templates with <code>for_each</code> loops.</li>
          <li>Integrate a metadata CSV or key vault list to feed pipeline parameters dynamically.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        We manage 1000+ subs via one pipeline template — dynamically looping through IDs fetched from Key Vault secrets.</p>
      </div>`
      },
      {
        question: "What is parallelism in pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Parallelism in Pipelines</strong></h3>
        <p>
          Parallelism allows multiple jobs or stages to execute at the same time — improving speed and resource utilization.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>jobs:
- job: Build_UI
- job: Build_API
- job: Infra_Deploy
  dependsOn: []   # runs in parallel</code></pre>

        <p><strong>In Practice:</strong>  
        I run microservices builds in parallel — reduced total CI time from 25 min → 7 min.  
        Use <code>maxParallel</code> to control resource limits safely.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "15. CI/CD Concepts",
    questions: [
      {
        question: "What is CI/CD and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>CI/CD Overview</strong></h3>
        <p>
          <strong>CI/CD (Continuous Integration / Continuous Delivery or Deployment)</strong> automates code build, test, and deployment — ensuring faster and more reliable software delivery.
        </p>

        <strong>CI (Continuous Integration):</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Every commit triggers automated build & unit tests.</li>
          <li>Detects integration bugs early.</li>
        </ul>

        <strong>CD (Continuous Delivery / Deployment):</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Automates packaging and deployment to environments.</li>
          <li>Ensures consistent, error-free releases.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        My pipelines automatically build, test, and deploy Docker images to AKS — reducing release time from 2 hours → 15 minutes.</p>
      </div>`
      },
      {
        question: "What is Continuous Delivery vs Continuous Deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Continuous Delivery vs Continuous Deployment</strong></h3>
        <table style="width:100%;margin:.6rem 0;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Continuous Delivery</th><th>Continuous Deployment</th></tr>
          <tr><td>Definition</td><td>Code is ready for deployment; needs manual approval</td><td>Code auto-deploys after tests</td></tr>
          <tr><td>Control</td><td>Manual gate before production</td><td>Fully automated release</td></tr>
          <tr><td>Risk</td><td>Lower (manual check)</td><td>Higher (auto push)</td></tr>
        </table>

        <p><strong>In Practice:</strong>  
        We follow <strong>Continuous Delivery</strong> — PROD deploys require approval; lower envs (DEV/UAT) are fully automated.</p>
      </div>`
      },
      {
        question: "What is blue-green deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔵🟢 <strong>Blue-Green Deployment</strong></h3>
        <p>
          Two identical environments — <code>Blue</code> (current) and <code>Green</code> (new).  
          Traffic switches to Green only after validation — ensuring zero downtime.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>Current: Blue → serving live traffic  
Deploy: Green → validate  
Switch: Route traffic to Green  
Rollback: Switch back to Blue if issues</code></pre>

        <p><strong>In Practice:</strong>  
        I use Azure Traffic Manager to route 100% traffic to Green after smoke tests, then decommission Blue after 24 hours.</p>
      </div>`
      },
      {
        question: "What is canary deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐦 <strong>Canary Deployment</strong></h3>
        <p>
          A progressive rollout strategy — deploy to a small percentage of users first, monitor metrics, then gradually increase traffic.
        </p>

        <strong>Example:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>10 % traffic → Canary v2</li>
          <li>Monitor errors & latency</li>
          <li>100 % rollout after validation</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Implemented in AKS using <code>Ingress</code> rules or <strong>Argo Rollouts</strong> to control weighted traffic routing.</p>
      </div>`
      },
      {
        question: "What is rollback in CI/CD?",
        answerHtml: `
      <div class="answer-rich">
        <h3>↩️ <strong>Rollback Strategy</strong></h3>
        <p>
          Rollback means reverting to the last known stable release after a failed deployment.
        </p>

        <strong>Rollback Approaches:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Redeploy previous artifact version.</li>
          <li>Switch traffic in Blue-Green setup.</li>
          <li>Use Helm <code>rollback</code> command in Kubernetes.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I store build artifacts with version tags (v1.2.5) — rollback is simply re-deploying the older image tag.</p>
      </div>`
      },
      {
        question: "What are microservices?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Microservices Architecture</strong></h3>
        <p>
          Microservices break a large app into smaller independent services — each has its own codebase, CI/CD, and deployment lifecycle.
        </p>

        <strong>Benefits:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Independent scaling and deployment.</li>
          <li>Failure isolation — one service crash doesn’t kill the system.</li>
          <li>Polyglot tech — each service can use best-fit stack.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        We deploy each microservice via its own YAML pipeline — Docker image → ACR → AKS namespace.</p>
      </div>`
      },
      {
        question: "What is DevSecOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>DevSecOps Concept</strong></h3>
        <p>
          DevSecOps integrates <strong>security early</strong> into the CI/CD process — “shift-left security.”
        </p>

        <strong>Typical Integrations:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Static code scans (SonarQube, Snyk).</li>
          <li>IaC scans (Checkov, TFLint, OPA).</li>
          <li>Container image vulnerability checks (Trivy, Aqua).</li>
          <li>Secret detection via GitHub Advanced Security.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I integrated <code>Checkov</code> + <code>Trivy</code> into pipelines — if any high severity issue is found, build fails before deployment.</p>
      </div>`
      },
      {
        question: "What are SRE principles?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Site Reliability Engineering (SRE) Principles</strong></h3>
        <p>
          SRE ensures reliability and performance of services through automation, observability, and incident response.
        </p>

        <strong>Core Principles:</strong>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Define <strong>SLI/SLO/SLA</strong> — measure uptime and latency.</li>
          <li>Use <strong>Error Budgets</strong> to balance reliability vs innovation.</li>
          <li>Automate operations — self-healing, auto-rollback.</li>
          <li>Post-mortems for incidents.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I use Prometheus + Grafana for SLI metrics and automated rollback when error rate > SLO threshold.</p>
      </div>`
      },
      {
        question: "What are environment variables in a pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Environment Variables</strong></h3>
        <p>
          Key-value pairs used to store dynamic values like paths, secrets, and environment-specific configurations in pipelines.
        </p>

        <pre style="background:#111;padding:.6rem;border-radius:.4rem;"><code>variables:
  env: "prod"
  connection: "$(azureServiceConn)"</code></pre>

        <p><strong>In Practice:</strong>  
        I use environment variables for region, storage name, and image tags so same YAML works for all environments.</p>
      </div>`
      },
      {
        question: "How do you ensure pipeline security?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Pipeline Security Best Practices</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Use Key Vault + variable groups for secrets.</li>
          <li>Enable approvals for PROD deployments.</li>
          <li>Restrict service connection access (least privilege).</li>
          <li>Scan dependencies & containers for vulnerabilities.</li>
          <li>Mask secrets in logs and disable system.debug for PROD runs.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        I integrate Checkov + Trivy + Microsoft Defender scanning before apply — any critical CVE blocks release.</p>
      </div>`
      },
      {
        question: "What are the benefits of automation in DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Automation Benefits</strong></h3>
        <ul style="margin:0 0 .5rem 1.2rem;">
          <li>Removes human error and manual effort.</li>
          <li>Enables faster, repeatable deployments.</li>
          <li>Improves reliability, consistency, and traceability.</li>
          <li>Enhances developer productivity and feedback loops.</li>
        </ul>

        <p><strong>In Practice:</strong>  
        Automation reduced manual release steps from 30 to 3 clicks — everything from build → security scan → deploy → notify runs automatically.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "16. Terraform & Azure DevOps Integration",
    questions: [
      {
        question: "Have you worked with Azure DevOps? Explain end-to-end flow for deploying Terraform in pipeline.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>End-to-End Terraform Deployment Flow in Azure DevOps</strong></h3>
        <p>
          Yes — I’ve implemented multiple Terraform deployments via Azure DevOps YAML pipelines for provisioning infrastructure in Azure using Service Principal authentication.
        </p>
        <h4>🧩 <strong>Typical End-to-End Flow:</strong></h4>
        <ol style="margin-left:1.2rem;">
          <li><strong>Code:</strong> Store Terraform code (.tf files) in Azure Repos or GitHub.</li>
          <li><strong>Service Connection:</strong> Create an Azure RM connection using a Service Principal (SPN) for authentication.</li>
          <li><strong>Pipeline Trigger:</strong> Trigger the pipeline on PR merge or commit to main branch.</li>
          <li><strong>Initialize:</strong> Run <code>terraform init</code> to download providers and configure backend (Azure Storage for remote state).</li>
          <li><strong>Validate & Plan:</strong> Run <code>terraform validate</code> and <code>terraform plan</code> to ensure code correctness and preview infra changes.</li>
          <li><strong>Approval:</strong> Manual approval gate for production before applying changes.</li>
          <li><strong>Apply:</strong> Run <code>terraform apply</code> to provision infrastructure.</li>
          <li><strong>Post-Deployment:</strong> Output values (e.g., VM IP, resource group name) are exported using <code>terraform output -json</code>.</li>
        </ol>
        <pre><code># Example YAML Snippet
- task: TerraformTaskV4@4
  inputs:
    provider: 'azurerm'
    command: 'init'
    backendServiceArm: 'sc-azure-prod'
    backendAzureRmResourceGroupName: 'riteshnew'
    backendAzureRmStorageAccountName: 'riteshsttg'
    backendAzureRmContainerName: 'riteshcontainer'
    backendAzureRmKey: 'main.tfstate'</code></pre>
        <p><strong>In Practice:</strong> I structure Terraform modules for reusability (network, compute, storage), store state remotely in Azure Storage, and enforce approval gates for critical deployments.</p>
      </div>`
      },
      {
        question: "What are the typical steps in a CI pipeline for Terraform deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Typical CI/CD Stages for Terraform Deployment</strong></h3>
        <p>
          A Terraform pipeline in Azure DevOps follows a clean modular structure with clearly defined stages:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🧱 <strong>Checkout Code:</strong> Pull Terraform code from Azure Repos or GitHub.</li>
          <li>🔐 <strong>Azure Login:</strong> Authenticate via Service Principal or Managed Identity.</li>
          <li>⚙️ <strong>Init:</strong> Initialize the backend and provider configuration.</li>
          <li>🧩 <strong>Validate:</strong> Validate the syntax and dependencies.</li>
          <li>🧮 <strong>Plan:</strong> Generate an execution plan and store as artifact (<code>terraform plan -out=tfplan</code>).</li>
          <li>👨‍💼 <strong>Manual Gate (Optional):</strong> Approval for production environments.</li>
          <li>🚀 <strong>Apply:</strong> Execute <code>terraform apply</code> with stored plan.</li>
          <li>📊 <strong>Post-Deployment:</strong> Publish Terraform outputs as pipeline variables or store in Key Vault.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate linting (Checkov or tfsec) before the plan stage and use separate pipelines for PR validation vs. production apply to maintain governance.</p>
      </div>`
      },
      {
        question: "What are deployment groups and task groups in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Deployment Groups vs Task Groups — Azure DevOps</strong></h3>
        <p>
          Both help in managing large-scale, repeatable deployments but serve different purposes.
        </p>
        <h4>📦 <strong>Deployment Group:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Represents a set of target machines (on-prem or Azure VMs) for deployments.</li>
          <li>Used in <strong>Classic Release Pipelines</strong> — agents installed on each target machine.</li>
          <li>Ideal for hybrid environments or app deployments to multiple servers.</li>
        </ul>
        <h4>⚙️ <strong>Task Group:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Reusable collection of tasks combined into a single unit.</li>
          <li>Promotes consistency across multiple pipelines.</li>
          <li>Example: “Terraform Init + Plan” group used across all infrastructure projects.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Task Groups to standardize Terraform deployment steps and Deployment Groups for legacy VM deployments where agent-based release orchestration is needed.</p>
      </div>`
      },
      {
        question: "What is a sprint and how does it differ from a work item in Azure Boards?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗓️ <strong>Sprint vs Work Item — Agile in Azure Boards</strong></h3>
        <p>
          In Azure Boards, <strong>Sprint</strong> represents a time-boxed iteration of work, while <strong>Work Items</strong> are individual units of effort tracked within that sprint.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Sprint</th><th>Work Item</th></tr>
          <tr><td>Definition</td><td>Time-bound iteration (2–4 weeks)</td><td>Task, Bug, Feature, or User Story</td></tr>
          <tr><td>Purpose</td><td>Organize and plan deliverables</td><td>Track specific work progress</td></tr>
          <tr><td>Ownership</td><td>Team-level</td><td>Individual or team member</td></tr>
        </table>
        <p><strong>In Practice:</strong> During sprint planning, I map Terraform module enhancements or infra automation tickets (work items) into sprints to track delivery in Azure Boards.</p>
      </div>`
      },
      {
        question: "What is the process for a Pull Request (PR)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Pull Request (PR) Process in Azure Repos</strong></h3>
        <p>
          A <strong>Pull Request</strong> is the standard mechanism for merging code changes while enforcing reviews and validations.
        </p>
        <ol style="margin-left:1.2rem;">
          <li>Developer commits Terraform or YAML changes in a feature branch.</li>
          <li>Creates a Pull Request targeting <code>main</code> or <code>develop</code> branch.</li>
          <li>Code reviewers validate changes, comments, and approve.</li>
          <li>Automated checks (lint, plan, unit tests) run as branch policies.</li>
          <li>Once approved, PR merges into main — triggering the deployment pipeline.</li>
        </ol>
        <p><strong>In Practice:</strong> I enforce branch policies with minimum 2 approvers and mandatory “terraform plan” validation pipeline before any PR is merged to main branch.</p>
      </div>`
      },
      {
        question: "What are security best practices in Azure DevOps pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>Security Best Practices in Azure DevOps Pipelines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Store secrets in <strong>Azure Key Vault</strong> — never in variables or YAML directly.</li>
          <li>🔹 Use <strong>Service Principals</strong> with least privilege RBAC (Contributor at RG level, not subscription).</li>
          <li>🔹 Enable <strong>Approvals & Checks</strong> before production deploys.</li>
          <li>🔹 Use <strong>Private Agents</strong> for sensitive workloads (not hosted agents).</li>
          <li>🔹 Implement <strong>Branch Policies</strong> and signed commits for code integrity.</li>
          <li>🔹 Enable <strong>Pipeline Permissions</strong> and limit variable group access.</li>
          <li>🔹 Regularly rotate credentials and secrets.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Key Vault-backed variable groups and service connections with Managed Identity to completely eliminate static credentials in Terraform pipelines.</p>
      </div>`
      },
      {
        question: "What are gates in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚦 <strong>Gates — Automated Quality Checks Before Deployment</strong></h3>
        <p>
          <strong>Gates</strong> are pre-deployment quality or compliance checks that must pass before a release can proceed to the next stage.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📡 Query REST APIs or Azure Monitor alerts before deploying.</li>
          <li>📊 Validate cost compliance or environment health.</li>
          <li>✅ Used in multi-stage release pipelines for production environments.</li>
        </ul>
        <p><strong>Example:</strong> Before Terraform “apply” stage, a gate checks if budget utilization < 90% or no active alerts exist on the target resource group.</p>
        <p><strong>In Practice:</strong> I configure gates in release pipelines to verify environment stability and approval before infra provisioning continues.</p>
      </div>`
      },
      {
        question: "Is macOS supported as an agent pool in Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🍏 <strong>macOS Agents in Azure DevOps</strong></h3>
        <p>
          Yes — Azure DevOps supports <strong>macOS agents</strong> as part of Microsoft-hosted agent pools.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Useful for building iOS, macOS, and cross-platform mobile apps.</li>
          <li>🔹 macOS agents include pre-installed tools (Xcode, Homebrew, .NET, Node, etc.).</li>
          <li>🔹 YAML Example:</li>
        </ul>
        <pre><code>pool:
  vmImage: 'macOS-latest'</code></pre>
        <p><strong>In Practice:</strong> I’ve used macOS-latest agent for mobile pipeline builds while using Linux agents for Terraform and containerized workloads.</p>
      </div>`
      },
      {
        question: "Explain service connections and what is needed to create them.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Azure DevOps Service Connections — Secure Resource Authentication</strong></h3>
        <p>
          A <strong>Service Connection</strong> allows Azure DevOps pipelines to authenticate and interact securely with external systems such as Azure, GitHub, Docker Hub, or Artifactory.
        </p>
        <h4>🧩 <strong>Common Types:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Azure Resource Manager (ARM):</strong> Used for Terraform, ARM templates, and Azure CLI tasks.</li>
          <li>🔹 <strong>GitHub / Bitbucket:</strong> For source control integration.</li>
          <li>🔹 <strong>Docker Registry / ACR:</strong> For container image builds and pushes.</li>
        </ul>
        <h4>🔑 <strong>Requirements to Create an Azure RM Service Connection:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Client ID (App ID of Service Principal)</li>
          <li>Client Secret</li>
          <li>Tenant ID</li>
          <li>Subscription ID</li>
          <li>RBAC Role (Contributor / Reader / Custom Role)</li>
        </ul>
        <pre><code># Example: Create SP for service connection
az ad sp create-for-rbac --name ado-terraform-sp --role Contributor --scopes /subscriptions/&lt;subId&gt;</code></pre>
        <p><strong>In Practice:</strong> I create one SP per environment (dev, test, prod) with least-privilege scope and link it to ADO service connections for Terraform pipelines.</p>
      </div>`
      },
      {
        question: "How do you secure Azure DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Securing Azure DevOps — Best Practices</strong></h3>
        <p>
          Security in Azure DevOps focuses on access control, secret management, and environment protection.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔐 Store all secrets in <strong>Azure Key Vault</strong> and link via variable groups — never hardcode credentials.</li>
          <li>👤 Implement <strong>RBAC & Least Privilege</strong> for project members and service principals.</li>
          <li>🔒 Enable <strong>Approvals & Checks</strong> on pipelines before deploying to production.</li>
          <li>🧩 Use <strong>Private Agent Pools</strong> for internal builds (not public agents).</li>
          <li>📋 Enforce <strong>Branch Policies</strong> — code reviews, build validation before PR merges.</li>
          <li>🧠 Enable <strong>Auditing & Conditional Access Policies</strong> via Azure AD integration.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate ADO with Azure AD for centralized MFA, restrict pipelines with environment approvals, and monitor activity logs through Azure Monitor.</p>
      </div>`
      },
      {
        question: "What is the difference between push and commit in Git?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Push vs Commit — Git Fundamentals</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Commit</th><th>Push</th></tr>
          <tr><td>Definition</td><td>Records changes locally in your Git repo</td><td>Sends committed changes to the remote repository</td></tr>
          <tr><td>Scope</td><td>Local (developer machine)</td><td>Remote (GitHub/Azure Repos)</td></tr>
          <tr><td>Command</td><td><code>git commit -m "message"</code></td><td><code>git push origin branch-name</code></td></tr>
          <tr><td>Effect</td><td>Saves changes in local history</td><td>Updates central repo for others</td></tr>
        </table>
        <p><strong>In Practice:</strong> I commit frequently for logical checkpoints and push only after successful linting and testing to maintain clean Git history.</p>
      </div>`
      },
      {
        question: "Explain the process of renaming a Git branch.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Renaming a Git Branch — Step-by-Step</strong></h3>
        <p>
          You can rename a branch locally and reflect changes in remote:
        </p>
        <ol style="margin-left:1.2rem;">
          <li>Rename locally: <code>git branch -m old-name new-name</code></li>
          <li>Delete old remote branch: <code>git push origin --delete old-name</code></li>
          <li>Push new branch: <code>git push origin new-name</code></li>
          <li>Set upstream: <code>git push --set-upstream origin new-name</code></li>
        </ol>
        <p><strong>In Practice:</strong> I rename feature branches during review or reorganization to match naming conventions (e.g., <code>feature/aks-monitoring</code>).</p>
      </div>`
      },
      {
        question: "How do you configure a local Git repo to remote repo?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Configuring Local Git Repository with Remote</strong></h3>
        <p>
          You can connect your local repository to a remote (e.g., Azure Repos or GitHub) using the following commands:
        </p>
        <pre><code># Initialize local repo
git init

# Add files and commit
git add .
git commit -m "Initial commit"

# Add remote origin
git remote add origin https://github.com/user/repo.git

# Push local code to remote
git push -u origin main</code></pre>
        <p><strong>In Practice:</strong> I link local Terraform or YAML project repos to Azure Repos and push updates via VS Code terminal — ensuring each environment branch maps to its respective pipeline.</p>
      </div>`
      },
      {
        question: "How do you commit a file and update commit message?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📝 <strong>Committing and Updating Git Commit Messages</strong></h3>
        <h4>✅ <strong>Commit a File:</strong></h4>
        <pre><code>git add filename
git commit -m "Added AKS deployment configuration"</code></pre>
        <h4>✏️ <strong>Update Last Commit Message:</strong></h4>
        <pre><code>git commit --amend -m "Updated AKS pipeline config"</code></pre>
        <p>
          The <code>--amend</code> flag lets you modify the most recent commit message or include additional changes.
        </p>
        <p><strong>In Practice:</strong> I use commit amends before PR creation to clean up messages and ensure clear commit history for reviewers.</p>
      </div>`
      },
      {
        question: "What CI/CD tools have you used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>CI/CD Tools I’ve Worked With</strong></h3>
        <p>
          I’ve worked with several CI/CD platforms for infrastructure automation and application deployments:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 <strong>Azure DevOps:</strong> For pipelines, repos, artifacts, and environments.</li>
          <li>🔹 <strong>GitHub Actions:</strong> For event-driven workflows integrated with ACR/AKS.</li>
          <li>🔹 <strong>Jenkins:</strong> For legacy automation and scripted pipelines.</li>
          <li>🔹 <strong>GitLab CI:</strong> For container-based deployments.</li>
          <li>🔹 <strong>Terraform Cloud:</strong> For IaC pipeline automation with drift detection.</li>
        </ul>
        <p><strong>In Practice:</strong> I primarily use Azure DevOps for enterprise-grade infrastructure delivery pipelines integrated with Terraform and Key Vault for secure automation.</p>
      </div>`
      },
      {
        question: "How do you generate artifacts in CI pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Generating Artifacts in CI Pipelines</strong></h3>
        <p>
          Artifacts are output files or build packages generated from CI runs that are later consumed by release pipelines.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🏗️ Use <strong>PublishPipelineArtifact</strong> or <strong>PublishBuildArtifacts</strong> task in YAML.</li>
          <li>🧩 Typical artifacts: Terraform plans, .zip build packages, Helm charts, or Docker images.</li>
        </ul>
        <pre><code># Example - Publish Terraform plan as artifact
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '&dollar;(System.DefaultWorkingDirectory)/tfplan'
    artifact: 'TerraformPlan'</code></pre>
        <p><strong>In Practice:</strong> I store Terraform plans or build outputs as artifacts and trigger downstream pipelines (apply, deploy) only after approval and artifact validation.</p>
      </div>`
      },
      {
        question: "How do you pass Terraform output block values into Azure pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Passing Terraform Outputs into Azure DevOps Pipelines</strong></h3>
        <p>
          Terraform output values can be exported and used in Azure DevOps pipelines dynamically — for example, to pass resource IDs, IPs, or connection strings.
        </p>
        <ol style="margin-left:1.2rem;">
          <li>Define outputs in Terraform:
          <pre><code>output "vm_public_ip" {
  value = azurerm_public_ip.myVM.ip_address
}</code></pre></li>
          <li>Run Terraform command and capture output as JSON:
          <pre><code>terraform output -json &gt; tf_output.json</code></pre></li>
          <li>Read and export value in pipeline:
          <pre><code>- script: |
    vm_ip=&dollar;(jq -r '.vm_public_ip.value' tf_output.json)
    echo "##vso[task.setvariable variable=VM_IP]&dollar;vm_ip"</code></pre></li>
          <li>Use variable in later stages:
          <pre><code>echo &dollar;(VM_IP)</code></pre></li>
        </ol>
        <p><strong>In Practice:</strong> I frequently export Terraform outputs (like resource IDs or URLs) into Azure pipeline variables to dynamically configure post-deployment validations or trigger Function Apps.</p>
      </div>`
      },
      {
        question: "Command to get VM result in JSON format after Terraform apply.",
        answerHtml: `<div class=\"answer-rich\">
        <h3>🧾 <strong>Get VM details in JSON after apply</strong></h3>
        <p>Two practical approaches depending on what you want — a Terraform <em>output</em> you declared, or the raw resource data from the state.</p>

        <h4>1) Best / recommended — use <code>output</code> block &amp; export JSON</h4>
        <p>Add an output in Terraform (outputs.tf):</p>
        <pre><code>output \"vm_public_ip\" {
  value = azurerm_public_ip.my_vm.ip_address
  description = \"Public IP of VM\"
}</code></pre>
        <p>Then after <code>terraform apply</code> run:</p>
        <pre><code>terraform output -json vm_public_ip
# or for all outputs in machine-readable format
terraform output -json > tf_outputs.json</code></pre>

        <h4>2) If you need the entire resource/state in JSON</h4>
        <p>Use Terraform's <code>show -json</code> against the current state (or saved state file):</p>
        <pre><code>terraform show -json > state.json
# then filter using jq, e.g. get a resource by address
jq '.values.root_module.resources[] | select(.address==\"azurerm_linux_virtual_machine.my_vm\")' state.json</code></pre>

        <p><strong>Practical tip:</strong> I always expose only required values as outputs and consume them with <code>terraform output -json</code> in pipelines (then parse with <code>jq</code> or set pipeline variables).</p>
      </div>`
      },
      {
        question: "How to integrate Azure Key Vault into pipeline using scripting?",
        answerHtml: `<div class=\"answer-rich\">
        <h3>🔐 <strong>Key Vault in pipelines — script-based approach</strong></h3>
        <p>Two common patterns: (A) use built-in Key Vault variable groups (preferred), or (B) fetch secrets at runtime using az cli / MSI in script. I'll show the script/MSI method (works anywhere):</p>

        <h4>Prereqs</h4>
        <ul style=\"margin-left:1.2rem;\">
          <li>AKV access for the SPN / Managed Identity used by pipeline (Key Vault access policy or RBAC).</li>
          <li>az cli available on the agent (or use AzureCLI task).</li>
        </ul>

        <h4>Example (Azure DevOps YAML) — fetch secret and set pipeline variable</h4>
        <pre><code>- task: AzureCLI@2
  displayName: 'Fetch secret from Key Vault'
  inputs:
    azureSubscription: 'sc-azure-prod'     # service connection
    scriptType: bash
    scriptLocation: inlineScript
    inlineScript: |
      # install jq if needed
      # fetch secret (using az cli)
      secret=&dollar;(az keyvault secret show --vault-name myVault --name MyDbPassword --query value -o tsv)
      echo \"##vso[task.setvariable variable=DB_PASSWORD;issecret=true]&dollar;secret\"
</code></pre>

        <p>Now subsequent tasks can use <code>&dollar;(DB_PASSWORD)</code> securely (pipeline masks secret in logs).</p>

        <h4>Alternative: Key Vault linked variable group</h4>
        <p>Create variable group in DevOps and link Key Vault — DevOps injects secrets as pipeline variables (no script needed).</p>

        <p><strong>Practical tip:</strong> Prefer Managed Identity or Service Principal with minimal Key Vault RBAC, and avoid printing secrets. Use secret-masking logging and rotate secrets regularly.</p>
      </div>`
      },
      {
        question: "How to trigger a pipeline when dev branch passes 90 % of validation?",
        answerHtml: `<div class=\"answer-rich\">
        <h3>🚦 <strong>Trigger pipeline conditionally on validation score (e.g., 90% coverage)</strong></h3>
        <p>Azure DevOps doesn't natively trigger a pipeline only when a metric passes a threshold — you implement this with a two-stage approach:</p>

        <h4>Pattern (recommended)</h4>
        <ol style=\"margin-left:1.2rem;\">
          <li>Run <strong>validation pipeline</strong> on PR/commit for the <code>dev</code> branch which executes tests &amp; generates a coverage report.</li>
          <li>The validation job parses coverage and sets an output/flag (or publishes a short status file/artifact).</li>
          <li>If coverage >= 90%, the validation pipeline calls the downstream pipeline via REST API / Azure DevOps CLI to trigger the real pipeline.</li>
        </ol>

        <h4>Script example to trigger when coverage &gt;= 90%</h4>
        <pre><code># assume coverage calculated and saved as COVERAGE variable
if [ &dollar;(echo \"&dollar;COVERAGE >= 90\" | bc) -eq 1 ]; then
  # trigger downstream pipeline via Azure DevOps REST API
  curl -u :&dollar;{ADO_PAT} -X POST \\
    -H 'Content-Type: application/json' \\
    -d '{ \"resources\": { \"repositories\": {} } }' \\
    https://dev.azure.com/{org}/{project}/_apis/pipelines/{pipelineId}/runs?api-version=6.0-preview.1
else
  echo 'Coverage below threshold — stopping downstream trigger'
  exit 1
fi</code></pre>

        <p><strong>Alternatives:</strong> use YAML pipeline <code>resources: pipelines</code> to trigger downstream but with a gate script that fails if coverage below threshold; or use GitHub Actions with workflow_run conditions.</p>

        <p><strong>Practical tip:</strong> Keep validation and promotion decoupled. Use artifacts (coverage report) and an explicit, auditable trigger rather than implicit conditions inside the downstream pipeline for clearer ops and auditing.</p>
      </div>`
      },
      {
        question: "What is parallelism in pipeline and how is it optimized?",
        answerHtml: `<div class=\"answer-rich\">
        <h3>⚡ <strong>Parallelism in CI/CD — what &amp; how to optimize</strong></h3>
        <p><strong>Parallelism</strong> = multiple jobs/agents running simultaneously to reduce pipeline runtime. Azure DevOps supports parallel jobs (hosted/ self-hosted agent pools).</p>

        <h4>Ways to use/optimize parallelism</h4>
        <ul style=\"margin-left:1.2rem;\">
          <li>🔁 <strong>Matrix &amp; job parallelism:</strong> Use <code>strategy.matrix</code> or multiple jobs to run tests across platforms in parallel.</li>
          <li>📦 <strong>Shard tests:</strong> Split your test suite into buckets (shards) and run each shard on separate agents.</li>
          <li>⚙️ <strong>Cache dependencies:</strong> Use pipeline caching to avoid repeated long installs (node_modules, pip cache).</li>
          <li>🧰 <strong>Reusable jobs:</strong> Factor repeated work into templates or task groups to avoid duplicate setup time.</li>
          <li>🧭 <strong>Agent sizing:</strong> Use more powerful agents (bigger VM image) for CPU-heavy tasks but balance cost vs speed.</li>
          <li>🔒 <strong>Limit concurrency:</strong> Use <code>resource</code> or <code>semaphores</code> if tasks must not run concurrently (shared infra access).</li>
        </ul>

        <h4>Example: matrix in YAML</h4>
        <pre><code>strategy:
  matrix:
    linux: { imageName: 'ubuntu-latest' }
    windows: { imageName: 'windows-latest' }
    mac: { imageName: 'macOS-latest' }</code></pre>

        <p><strong>Practical tip:</strong> Parallelism reduces feedback time. Optimize by caching, splitting tests, and reusing warm-up steps (pre-baked images or self-hosted agents) to reduce total run-time and cost.</p>
      </div>`
      },
      {
        question: "What happens when Terraform pipeline fails during apply with lock state?",
        answerHtml: `<div class=\"answer-rich\">
        <h3>🔒 <strong>Terraform lock behavior on failed apply</strong></h3>
        <p>Most backends (including Azure Storage backend with blob locking) create a lock during <code>terraform apply</code> to prevent concurrent state mutations. If the pipeline fails mid-apply:</p>
        <ul style=\"margin-left:1.2rem;\">
          <li>🧩 The lock might remain (stale) preventing subsequent runs from acquiring it.</li>
          <li>🛠️ Terraform usually releases the lock on normal exit; on abrupt failures you may need to force-unlock.</li>
        </ul>

        <h4>How to recover</h4>
        <pre><code># Identify lock error text from terraform output
# Force unlock (use the lock ID reported in error)
terraform force-unlock LOCK_ID
# For Azure blob backend you can also check/clear lease on the blob via az storage blob lease break</code></pre>

        <p><strong>Best practices to avoid stuck locks:</strong></p>
        <ul style=\"margin-left:1.2rem;\">
          <li>✅ Use backend with proper locking (Azure blob, Terraform Cloud).</li>
          <li>✅ Add retries and timeouts in pipeline and fail fast for non-recoverable errors.</li>
          <li>✅ Use <code>terraform plan -out</code> and then apply the saved plan to minimize unexpected changes during apply.</li>
          <li>✅ For long runs, ensure agent/timeouts are configured so the process can finish and release locks.</li>
        </ul>

        <p><strong>In Practice:</strong> I keep an \"unlock runbook\" with the <code>terraform force-unlock</code> command and the steps to inspect blob leases in Azure if a pipeline dies during apply; for production always require manual approval for re-tries to avoid accidental state corruption.</p>
      </div>`
      },
      {
        question: "How to release Terraform plan automatically in multi-stage pipeline?",
        answerHtml: `<div class=\"answer-rich\">
        <h3>🔁 <strong>Promote &amp; release Terraform plan in multi-stage pipelines</strong></h3>
        <p>Multi-stage pipelines provide a safe way to generate a plan once and apply it later (same plan file). Typical flow:</p>

        <h4>Stages:</h4>
        <ol style=\"margin-left:1.2rem;\">
          <li><strong>Plan stage (CI):</strong> checkout → terraform init → terraform plan -out=tfplan → publish tfplan as pipeline artifact (<code>PublishPipelineArtifact</code>).</li>
          <li><strong>Approval / Gates (optional):</strong> manual approval for production, policy gates, or automatic checks.</li>
          <li><strong>Apply stage (CD):</strong> download tfplan artifact → terraform apply \"tfplan\" (the saved binary plan) — guarantees apply matches plan.</li>
        </ol>

        <h4>YAML snippet (concept):</h4>
        <pre><code># Stage: Plan
- stage: Plan
  jobs:
  - job: TerraformPlan
    steps:
    - script: terraform init
    - script: terraform plan -out=tfplan
    - task: PublishPipelineArtifact@1
      inputs:
        targetPath: 'tfplan'
        artifact: 'tfplan-artifact'

# Stage: Apply (runs after approval)
- stage: Apply
  dependsOn: Plan
  condition: succeeded()
  jobs:
  - job: TerraformApply
    steps:
    - task: DownloadPipelineArtifact@2
      inputs:
        artifact: 'tfplan-artifact'
        path: '&dollar;(System.DefaultWorkingDirectory)/tfplan'
    - script: terraform apply -auto-approve tfplan</code></pre>

        <h4>Automating release</h4>
        <p>If you want fully automatic promotion to Apply (e.g., non-prod), configure the pipeline to auto-run the Apply stage when Plan succeeds and gates are satisfied. For Prod, keep manual approvals.</p>

        <p><strong>Security note:</strong> Do not auto-apply plans in production without approvals. Ensure the service principal used for apply has scoped, least-privilege permissions and the plan artifact is stored securely.</p>

        <p><strong>In Practice:</strong> I publish the plan artifact and require at least one approver for production Apply; for dev/stage I auto-apply to enable fast feedback loops.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "17. Miscellaneous / General DevOps Concepts",
    questions: [
      {
        question: "Introduce yourself.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🙋‍♂️ <strong>Professional Introduction</strong></h3>
        <p>
          Hi, I’m <strong>Ritesh Sharma</strong>, a DevOps Engineer with over <strong>10 years of experience</strong> in automating infrastructure, CI/CD pipelines, and cloud operations across enterprise environments.  
          I specialize in <strong>Azure DevOps, Terraform, Docker, Kubernetes, and monitoring tools</strong> like Grafana and Prometheus.
        </p>
        <p>
          Currently, I’m working with <strong>Litmus Information Systems LLP</strong>, focusing on building and managing Azure-based DevOps solutions — including provisioning infrastructure with Terraform, automating deployments via YAML pipelines, and ensuring high availability for healthcare systems.
        </p>
        <p><strong>In short:</strong> I enjoy designing secure, automated, and scalable DevOps workflows that accelerate software delivery while maintaining governance and cost efficiency.</p>
      </div>`
      },
      {
        question: "Tell me about your recent project.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Recent Project — Centralized Patient Monitoring System (Healthcare Domain)</strong></h3>
        <p>
          I worked on a <strong>centralized patient monitoring platform</strong> for a European healthcare provider. The goal was to collect real-time vitals from IoT medical devices and display them on a unified dashboard.
        </p>
        <h4>🔧 <strong>Tech Stack:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>☁️ Azure Cloud — AKS, App Services, Key Vault, and Storage Accounts.</li>
          <li>⚙️ Azure DevOps — CI/CD pipelines, Repos, Boards.</li>
          <li>🧱 Terraform — for provisioning all Azure resources using remote state in Azure Storage.</li>
          <li>🐳 Docker & Kubernetes — containerization and orchestration of microservices.</li>
          <li>📊 Monitoring — Prometheus, Grafana, and Azure Monitor.</li>
        </ul>
        <p><strong>My Role:</strong> Designed IaC modules, built release pipelines (plan → apply), implemented Helm-based deployments, and configured auto-scaling & alerts in AKS for production stability.</p>
        <p><strong>Outcome:</strong> Reduced deployment time from 2 hours to under 15 minutes and achieved fully automated, auditable infrastructure provisioning.</p>
      </div>`
      },
      {
        question: "What are your roles and responsibilities?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Roles & Responsibilities as a DevOps Engineer</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Design and manage CI/CD pipelines using Azure DevOps YAML.</li>
          <li>🔹 Build Infrastructure as Code using Terraform with remote state and modular design.</li>
          <li>🔹 Containerize applications using Docker and deploy via Kubernetes (AKS).</li>
          <li>🔹 Manage secrets via Azure Key Vault and integrate securely into pipelines.</li>
          <li>🔹 Implement logging, alerting, and dashboards with Prometheus & Grafana.</li>
          <li>🔹 Perform system patching, monitoring, and performance tuning for Linux servers.</li>
          <li>🔹 Collaborate with developers for seamless CI/CD, security scanning, and cost optimization.</li>
        </ul>
        <p><strong>In Practice:</strong> I handle complete lifecycle — from environment setup and pipeline design to production deployments and post-release monitoring.</p>
      </div>`
      },
      {
        question: "What are the tools you have worked on in DevOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧰 <strong>DevOps Tools I’ve Worked With</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>☁️ <strong>Cloud:</strong> Microsoft Azure, AWS (basic).</li>
          <li>🧱 <strong>IaC:</strong> Terraform, ARM Templates.</li>
          <li>⚙️ <strong>CI/CD:</strong> Azure DevOps, Jenkins, GitHub Actions.</li>
          <li>🐳 <strong>Containers:</strong> Docker, Kubernetes (AKS).</li>
          <li>🔒 <strong>Security:</strong> Azure Key Vault, Checkov, SonarQube, TruffleHog.</li>
          <li>📊 <strong>Monitoring:</strong> Prometheus, Grafana, Azure Monitor.</li>
          <li>🧩 <strong>Version Control:</strong> Git, GitHub, Azure Repos.</li>
          <li>💬 <strong>Automation/Scripting:</strong> Bash, PowerShell, Azure CLI.</li>
        </ul>
        <p><strong>In Practice:</strong> My DevOps toolchain is centered around Azure + Terraform + Docker + AKS for infrastructure and application delivery automation.</p>
      </div>`
      },
      {
        question: "What is CI/CD and how does it help in automation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>CI/CD — Continuous Integration & Continuous Delivery</strong></h3>
        <p>
          CI/CD is the backbone of DevOps automation. It ensures reliable, repeatable, and fast software delivery through automated build, test, and deployment pipelines.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Continuous Integration (CI):</strong> Automates build & testing whenever developers push code — ensures integration issues are caught early.</li>
          <li><strong>Continuous Delivery (CD):</strong> Automates deployment to staging or production — ensures applications are always in a deployable state.</li>
        </ul>
        <p><strong>Benefits:</strong> Reduces manual errors, accelerates release cycles, improves feedback loops, and enforces quality through validation gates.</p>
        <p><strong>In Practice:</strong> I use Azure Pipelines to automate code checkout → build → Terraform plan/apply → deploy to AKS/App Service → notify via Teams.</p>
      </div>`
      },
      {
        question: "What is Continuous Delivery vs Continuous Deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Continuous Delivery vs Continuous Deployment</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Continuous Delivery</th><th>Continuous Deployment</th></tr>
          <tr><td>Automation</td><td>Build & Test fully automated; Deploy requires manual approval</td><td>Full pipeline automated including deployment</td></tr>
          <tr><td>Control</td><td>Manual trigger for production release</td><td>Automatic deployment on successful tests</td></tr>
          <tr><td>Risk</td><td>Lower (manual review before go-live)</td><td>Higher (depends on test reliability)</td></tr>
          <tr><td>Use Case</td><td>Enterprises with approval workflows</td><td>Agile startups or microservices with fast cycles</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Continuous Delivery for production with manual approvals and Continuous Deployment for non-prod (QA/UAT) to enable faster testing.</p>
      </div>`
      },
      {
        question: "What are microservices?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Microservices Architecture</strong></h3>
        <p>
          Microservices is an architectural style where an application is divided into small, independent services — each handling a specific function and communicating via APIs.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>Each service is independently deployable and scalable.</li>
          <li>Promotes agility — teams can develop, test, and deploy independently.</li>
          <li>Failure isolation — one service crash doesn’t bring down the whole system.</li>
          <li>Usually containerized and orchestrated with Docker/Kubernetes.</li>
        </ul>
        <p><strong>In Practice:</strong> I deploy microservices in AKS clusters where each service runs as a separate deployment and is exposed via Ingress or API Gateway for external access.</p>
      </div>`
      },
      {
        question: "What is blue-green deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔵🟢 <strong>Blue-Green Deployment Strategy</strong></h3>
        <p>
          Blue-Green deployment reduces downtime and risk by maintaining two environments — one live (blue) and one idle (green).  
          The new version is deployed on green; after validation, traffic is switched from blue to green instantly.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>✅ Enables instant rollback by switching traffic back.</li>
          <li>🚀 Zero downtime releases.</li>
          <li>💡 Used in AKS, App Services, or load balancer-based setups.</li>
        </ul>
        <pre><code># Example in Azure App Service
az webapp deployment slot swap --name myapp --slot staging --target-slot production</code></pre>
        <p><strong>In Practice:</strong> I use Blue-Green strategy in production App Services — new build goes to ‘staging’ slot, tested, then swapped to ‘production’ slot.</p>
      </div>`
      },
      {
        question: "What is canary deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐤 <strong>Canary Deployment — Gradual Release Strategy</strong></h3>
        <p>
          Canary deployment releases new versions to a small subset of users before rolling out to all.  
          It’s used to reduce risk by monitoring real user impact.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Rollout starts with 5–10% traffic → increase gradually if metrics are healthy.</li>
          <li>📈 Used with load balancers, Ingress controllers, or feature flags.</li>
          <li>💥 Easy rollback if errors or performance drops are detected.</li>
        </ul>
        <p><strong>In Practice:</strong> In AKS, I implement canary deployment using Helm and Kubernetes Service annotations — directing a percentage of traffic to the new pods before full rollout.</p>
      </div>`
      },
      {
        question: "What is rollback in CI/CD and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>Rollback in CI/CD — Ensuring Stability</strong></h3>
        <p>
          A <strong>rollback</strong> is reverting a system or deployment to a previously stable version when a new release causes issues (bugs, downtime, performance drops).
        </p>
        <h4>⚙️ <strong>Why it’s important:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>🚨 Minimizes downtime and business impact from failed deployments.</li>
          <li>📦 Ensures quick recovery without manual fixes.</li>
          <li>🔄 Maintains application stability during continuous delivery cycles.</li>
        </ul>
        <h4>💡 <strong>Typical Rollback Methods:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Azure DevOps: Redeploy a previous release artifact or commit.</li>
          <li>Kubernetes: <code>kubectl rollout undo deployment/myapp</code>.</li>
          <li>App Services: Swap back to previous slot in Blue-Green deployment.</li>
        </ul>
        <p><strong>In Practice:</strong> I use versioned artifacts and maintain Terraform state snapshots — so I can rollback both infrastructure and app versions quickly in case of failures.</p>
      </div>`
      },
      {
        question: "What are different branching strategies you have used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching Strategies in Git</strong></h3>
        <p>
          Branching strategy defines how teams organize development and release workflows in Git.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Feature Branching:</strong> Each feature or bug fix in its own branch, merged via PR.</li>
          <li><strong>GitFlow:</strong> Main branches: <code>main/master</code> (prod), <code>develop</code> (staging), plus <code>feature/</code>, <code>release/</code>, <code>hotfix/</code>.</li>
          <li><strong>Trunk-Based:</strong> Developers commit frequently to <code>main</code> with short-lived feature branches.</li>
          <li><strong>Release Branching:</strong> Stable release branches maintained separately for version control.</li>
        </ul>
        <p><strong>In Practice:</strong> I follow <strong>GitFlow</strong> for enterprise projects and <strong>Trunk-Based</strong> for microservices where CI/CD is highly automated.</p>
      </div>`
      },
      {
        question: "What is an artifact and how do you publish it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Artifacts — Build Outputs in CI/CD</strong></h3>
        <p>
          An <strong>artifact</strong> is a compiled or packaged output (like a .zip, .jar, .tar.gz, or Terraform plan file) created after a build process, stored for deployment or auditing.
        </p>
        <pre><code># Example: Publish artifact in Azure Pipeline
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '&dollar;(System.DefaultWorkingDirectory)/drop'
    artifactName: 'build-output'</code></pre>
        <p><strong>In Practice:</strong> I publish Terraform plan files, Docker image manifests, and Helm chart packages as artifacts — ensuring each deployment uses immutable, traceable build outputs.</p>
      </div>`
      },
      {
        question: "What are Service Endpoints and Private Links in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Service Endpoints vs Private Links</strong></h3>
        <p>
          Both enhance network security for Azure resources, but differ in isolation and connectivity approach.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Service Endpoint</th><th>Private Link</th></tr>
          <tr><td>Connection Type</td><td>Extends VNet to Azure service via backbone</td><td>Private IP in VNet via Private Endpoint</td></tr>
          <tr><td>Data Path</td><td>Public service with VNet access control</td><td>Entirely private path; no public internet</td></tr>
          <tr><td>Security</td><td>Uses service tags + NSG rules</td><td>Full isolation via private IP + DNS mapping</td></tr>
          <tr><td>Use Case</td><td>When secure connection from VNet to Azure PaaS is needed</td><td>When complete private connectivity and compliance required</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use <strong>Private Links</strong> for production workloads (Key Vault, Storage, SQL DB) and <strong>Service Endpoints</strong> for internal tools or dev environments.</p>
      </div>`
      },
      {
        question: "What is a Load Balancer and how many types exist?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Azure Load Balancer — Distribute Traffic Efficiently</strong></h3>
        <p>
          A Load Balancer distributes incoming traffic across multiple backend servers to ensure high availability and reliability.
        </p>
        <h4>🔹 Types of Load Balancers:</h4>
        <ul style="margin-left:1.2rem;">
          <li><strong>Basic Load Balancer (Layer 4):</strong> Works at transport layer; distributes traffic based on IP/port. Used for simple internal setups.</li>
          <li><strong>Standard Load Balancer (Layer 4):</strong> Secure, zonal, supports HA & cross-region balancing.</li>
          <li><strong>Application Gateway (Layer 7):</strong> Operates at HTTP/HTTPS layer; supports SSL offload, WAF, path-based routing.</li>
          <li><strong>Front Door (Global Layer 7):</strong> Global load balancer using edge network for low latency & failover.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Application Gateway for web workloads with SSL termination and Load Balancer for backend APIs or VMSS traffic distribution.</p>
      </div>`
      },
      {
        question: "What is DNS and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>DNS — Domain Name System</strong></h3>
        <p>
          <strong>DNS</strong> translates human-readable domain names (like <code>app.company.com</code>) into IP addresses that machines understand.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Fundamental for service discovery in the internet and Kubernetes clusters.</li>
          <li>🔹 Prevents manual IP management, simplifies scalability.</li>
          <li>🔹 DNS Zones in Azure allow hosting custom domains (Public/Private).</li>
        </ul>
        <p><strong>In Practice:</strong> I configure Private DNS zones (e.g., <code>privatelink.blob.core.windows.net</code>) for private endpoints in AKS and App Service setups.</p>
      </div>`
      },
      {
        question: "What is NAT?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>NAT — Network Address Translation</strong></h3>
        <p>
          NAT allows multiple devices in a private network to share a single public IP for external communication.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🌐 <strong>Source NAT (SNAT):</strong> Used for outbound connections from private to public network.</li>
          <li>📥 <strong>Destination NAT (DNAT):</strong> Used to expose internal resources to the public by mapping a public IP.</li>
        </ul>
        <p><strong>In Azure:</strong> Implemented via <strong>Azure NAT Gateway</strong> for outbound connectivity of subnets without exposing public IPs on VMs.</p>
        <p><strong>In Practice:</strong> I configure NAT Gateways for AKS clusters’ outbound traffic to keep IPs static for whitelisting at partner firewalls.</p>
      </div>`
      },
      {
        question: "What is Middleware and how do you install it on Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Middleware — The Glue Between App & System</strong></h3>
        <p>
          Middleware is software that connects applications and services — enabling communication, data exchange, and management. Examples: Apache Tomcat, Nginx, WebLogic, Kafka.
        </p>
        <pre><code># Example: Install Apache Tomcat on Linux
sudo apt update
sudo apt install default-jdk -y
wget https://downloads.apache.org/tomcat/tomcat9.tar.gz
tar -xzf tomcat9.tar.gz -C /opt/
sudo systemctl enable tomcat</code></pre>
        <p><strong>In Practice:</strong> I deploy middleware in Linux VMs or containers via scripts or Terraform provisioners, ensuring consistent configuration and versioning.</p>
      </div>`
      },
      {
        question: "What is Sudo command and when do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🪪 <strong>sudo — Execute Commands as Root</strong></h3>
        <p>
          <strong>sudo</strong> (Superuser Do) temporarily elevates privileges to execute commands as another user, typically root.
        </p>
        <pre><code>sudo apt update
sudo systemctl restart nginx</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Used for administrative tasks like package installation, service management, or system configuration.</li>
          <li>Safer than logging in as root permanently.</li>
          <li>Access controlled via <code>/etc/sudoers</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure limited sudo access for DevOps agents to perform patching and deployment without exposing full root permissions.</p>
      </div>`
      },
      {
        question: "What is top command in Linux?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>top — Real-time Linux Process Monitor</strong></h3>
        <p>
          The <strong>top</strong> command displays real-time system resource usage — including CPU, memory, and processes.
        </p>
        <pre><code>top
# Interactive shortcuts:
P - sort by CPU
M - sort by memory
k - kill process
q - quit</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Helps identify high CPU/memory processes.</li>
          <li>🔹 Used in troubleshooting performance issues on servers or containers.</li>
        </ul>
        <p><strong>In Practice:</strong> I often use <code>top</code> and <code>htop</code> to monitor application pods or VM performance during high-load testing or deployments.</p>
      </div>`
      },
      {
        question: "What is difference between App Service and Function App?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💻 <strong>App Service vs Function App — Platform Comparison</strong></h3>
        <p>
          Both are managed compute services in Azure, but they differ in use case and execution model.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>App Service</th><th>Function App</th></tr>
          <tr><td>Type</td><td>PaaS web hosting platform</td><td>Serverless compute for event-driven tasks</td></tr>
          <tr><td>Execution</td><td>Always running</td><td>Runs on trigger (HTTP, Timer, Blob, EventHub, etc.)</td></tr>
          <tr><td>Scaling</td><td>Manual or autoscale via plan</td><td>Automatic scale per event load</td></tr>
          <tr><td>Use Case</td><td>Web apps, APIs, microservices</td><td>Lightweight automation, scheduled tasks</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use App Service for hosting APIs or UIs, and Function Apps for automating CI/CD tasks like secret rotation, resource cleanup, and alert triggers.</p>
      </div>`
      },
      {
        question: "What is VPC and how does it differ from VNet?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>VPC vs VNet — Cloud Network Equivalents</strong></h3>
        <p>
          Both <strong>VPC (Virtual Private Cloud)</strong> and <strong>VNet (Virtual Network)</strong> provide isolated, secure cloud network environments.  
          The difference lies in the provider terminology.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>VPC (AWS/GCP)</th><th>VNet (Azure)</th></tr>
          <tr><td>Provider</td><td>AWS / GCP</td><td>Microsoft Azure</td></tr>
          <tr><td>Networking Model</td><td>Region-scoped</td><td>Region-scoped, with global peering support</td></tr>
          <tr><td>Subnets</td><td>Private/Public subnets under VPC</td><td>Subnets inside VNet with NSG & UDRs</td></tr>
          <tr><td>Peering</td><td>VPC Peering</td><td>VNet Peering (even across regions)</td></tr>
        </table>
        <p><strong>In Practice:</strong> I design VNets with multiple subnets (App, DB, Bastion) and secure them using NSGs, Private Endpoints, and UDRs — similar to AWS VPC design principles.</p>
      </div>`
      },
      {
        question: "What is the difference between Terraform and ARM template?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform vs ARM Template — IaC Tools Comparison</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Terraform</th><th>ARM Template</th></tr>
          <tr><td>Language</td><td>HCL (HashiCorp Configuration Language)</td><td>JSON</td></tr>
          <tr><td>Scope</td><td>Multi-cloud (Azure, AWS, GCP, etc.)</td><td>Azure-only</td></tr>
          <tr><td>State Management</td><td>Maintains remote/local state files</td><td>No state tracking</td></tr>
          <tr><td>Modularity</td><td>Highly modular (reusable modules)</td><td>Less modular</td></tr>
          <tr><td>Execution</td><td>Declarative + procedural (plan/apply)</td><td>Declarative only</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Terraform for end-to-end IaC provisioning across environments with remote state in Azure Storage — preferred over ARM for flexibility and readability.</p>
      </div>`
      },
      {
        question: "What is the difference between Continuous Integration and Continuous Deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔁 <strong>CI vs CD — The DevOps Automation Chain</strong></h3>
        <p>
          CI/CD are complementary phases of software delivery automation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Continuous Integration (CI):</strong> Merges developer code frequently, builds automatically, and runs tests to catch integration issues early.</li>
          <li><strong>Continuous Deployment (CD):</strong> Extends CI by automatically deploying every code change to production after passing validation.</li>
        </ul>
        <pre><code>CI:  Code → Build → Test → Package
CD:  Package → Deploy → Validate → Monitor</code></pre>
        <p><strong>In Practice:</strong> My Azure DevOps pipelines implement CI for Terraform linting & Docker builds, and CD for AKS deployments post approval gates.</p>
      </div>`
      },
      {
        question: "What is DevSecOps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔒 <strong>DevSecOps — Security Integrated into DevOps</strong></h3>
        <p>
          DevSecOps embeds security practices and tools within the CI/CD lifecycle — shifting security left to detect and fix vulnerabilities early.
        </p>
        <h4>🧩 <strong>Key Practices:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Static code analysis (SonarQube, Checkov, Trivy).</li>
          <li>Secret scanning (TruffleHog, GitGuardian).</li>
          <li>Dependency scanning (Snyk, DependencyCheck).</li>
          <li>Container image scanning before deployment.</li>
          <li>RBAC & Key Vault integration for credential management.</li>
        </ul>
        <p><strong>In Practice:</strong> I integrate Checkov and SonarQube into pipelines to enforce security policies and block builds on high-severity vulnerabilities.</p>
      </div>`
      },
      {
        question: "What is Site Reliability Engineering (SRE)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>SRE — Bridging Ops and Engineering</strong></h3>
        <p>
          <strong>Site Reliability Engineering (SRE)</strong> applies software engineering principles to IT operations — automating reliability, scaling, and performance.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📈 Define <strong>SLOs, SLIs, SLAs</strong> to measure availability.</li>
          <li>🤖 Automate monitoring, scaling, and incident response.</li>
          <li>💡 Minimize manual ops through self-healing systems.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Prometheus + Grafana to monitor uptime, error rates, latency, and integrate alert rules for proactive incident detection and SLA compliance.</p>
      </div>`
      },
      {
        question: "What are key metrics you monitor for production health?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Production Health — Key Metrics</strong></h3>
        <p>
          I focus on the <strong>Golden Signals</strong> and system reliability KPIs:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🚀 <strong>Latency:</strong> Response time of APIs or app endpoints.</li>
          <li>📦 <strong>Traffic:</strong> Requests per second, throughput.</li>
          <li>⚠️ <strong>Errors:</strong> 4xx/5xx rate, failed requests.</li>
          <li>💾 <strong>Saturation:</strong> CPU, memory, disk, network utilization.</li>
          <li>🧩 <strong>Availability:</strong> Uptime % across regions.</li>
        </ul>
        <p><strong>In Practice:</strong> I configure Azure Monitor, Application Insights, and Grafana dashboards to visualize and alert on these KPIs across production clusters.</p>
      </div>`
      },
      {
        question: "How do you ensure security and compliance in CI/CD pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Security & Compliance in CI/CD</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🔐 Store secrets in Azure Key Vault or pipeline secrets (never in code).</li>
          <li>✅ Enforce code scanning with SonarQube, Checkov, Trivy, and dependency scanners.</li>
          <li>🚫 Restrict service connections and use Managed Identities.</li>
          <li>🧾 Enable approvals, RBAC, and auditing for production pipelines.</li>
          <li>🧩 Use signed artifacts and verify hashes before deploy.</li>
        </ul>
        <p><strong>In Practice:</strong> My pipelines integrate Key Vault, use PR validation with code-quality gates, and automatically fail if any security scan exceeds policy thresholds.</p>
      </div>`
      },
      {
        question: "What is Infrastructure Drift and how do you fix it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Infrastructure Drift — Detection & Remediation</strong></h3>
        <p>
          <strong>Infrastructure Drift</strong> occurs when actual cloud resources deviate from what’s defined in IaC (Terraform, ARM).  
          This happens due to manual changes in the portal or ad-hoc scripts.
        </p>
        <h4>🧩 <strong>Detection:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Run <code>terraform plan</code> regularly — detects changes outside IaC.</li>
          <li>Integrate drift detection tools (Checkov, driftctl).</li>
        </ul>
        <h4>🛠️ <strong>Fix:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Re-apply IaC: <code>terraform apply</code> to restore desired state.</li>
          <li>Or import manual resources into Terraform using <code>terraform import</code>.</li>
        </ul>
        <p><strong>In Practice:</strong> I run nightly Terraform plan checks in pipelines — if drift is detected, it notifies the DevOps channel for review and reconciliation.</p>
      </div>`
      },
      {
        question: "What are availability sets and availability zones?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Availability Set vs Availability Zone</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Availability Set</th><th>Availability Zone</th></tr>
          <tr><td>Scope</td><td>Logical grouping within a data center</td><td>Physically separate data centers in a region</td></tr>
          <tr><td>Protection</td><td>From rack/power failures</td><td>From entire data center failure</td></tr>
          <tr><td>Components</td><td>Fault domains & update domains</td><td>Zone 1, Zone 2, Zone 3</td></tr>
          <tr><td>Redundancy</td><td>VMs spread across racks</td><td>VMs spread across zones</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Availability Sets for legacy workloads and Availability Zones for production-grade workloads needing regional resiliency (99.99% uptime SLA).</p>
      </div>`
      },
      {
        question: "How do you migrate on-prem to Azure cloud?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>On-Prem to Azure Migration — Step-by-Step Approach</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>🔍 <strong>Assessment:</strong> Use Azure Migrate to discover and assess on-prem VMs, databases, and dependencies.</li>
          <li>⚙️ <strong>Plan:</strong> Choose migration strategy — Rehost (Lift & Shift), Refactor (Containerize), or Rebuild.</li>
          <li>🚀 <strong>Migrate:</strong> Use Azure Migrate tool or Site Recovery (ASR) for VM replication and cutover.</li>
          <li>🔒 <strong>Secure:</strong> Configure NSGs, Key Vault, and role-based access post migration.</li>
          <li>📊 <strong>Optimize:</strong> Monitor costs, resize resources, and enable backups/monitoring.</li>
        </ol>
        <p><strong>In Practice:</strong> I use Azure Migrate for VM discovery, replicate via ASR, and re-platform databases to Azure SQL or PaaS equivalents — minimizing downtime during migration.</p>
      </div>`
      },
      {
        question: "What is Helm vs Kustomize?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Helm vs Kustomize — Kubernetes Configuration Management</strong></h3>
        <p>
          Both <strong>Helm</strong> and <strong>Kustomize</strong> manage Kubernetes manifests but differ in their approach.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Helm</th><th>Kustomize</th></tr>
          <tr><td>Type</td><td>Package manager for Kubernetes</td><td>Native manifest customization tool</td></tr>
          <tr><td>Template Language</td><td>Go templating (charts)</td><td>YAML overlays and patches (no templating)</td></tr>
          <tr><td>Use Case</td><td>Reusable, parameterized deployments (charts)</td><td>Simple manifest layering for environments</td></tr>
          <tr><td>Reusability</td><td>High — publish charts via repositories</td><td>Medium — maintain overlays manually</td></tr>
          <tr><td>Complexity</td><td>Suited for production, multi-service apps</td><td>Lightweight, easy for small projects</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use Helm for AKS production deployments (with values.yaml per environment) and Kustomize for quick overlays in non-prod clusters.</p>
      </div>`
      },
      {
        question: "What is Front Door in Azure?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌍 <strong>Azure Front Door — Global Layer 7 Load Balancer</strong></h3>
        <p>
          <strong>Azure Front Door</strong> is a global, scalable Layer 7 (HTTP/HTTPS) load balancer that accelerates traffic using Microsoft’s edge network and provides advanced routing.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>🔹 Routes users to nearest backend (latency-based routing).</li>
          <li>🔹 Provides SSL offload and Web Application Firewall (WAF).</li>
          <li>🔹 Supports path-based routing and session affinity.</li>
          <li>🔹 Integrates with CDN for static content acceleration.</li>
        </ul>
        <p><strong>In Practice:</strong> I use Azure Front Door to route traffic between global AKS clusters (EU, US) with health probes and failover policies — ensuring 99.99% uptime and low latency.</p>
      </div>`
      },
      {
        question: "What is Azure Monitor and how do you configure alerts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Azure Monitor — Unified Observability Platform</strong></h3>
        <p>
          <strong>Azure Monitor</strong> collects, analyzes, and visualizes metrics and logs from applications and resources.  
          It helps track performance, detect anomalies, and trigger automated responses.
        </p>
        <h4>⚙️ <strong>Steps to Configure Alerts:</strong></h4>
        <ol style="margin-left:1.2rem;">
          <li>Go to <strong>Azure Monitor → Alerts → Create Alert Rule</strong>.</li>
          <li>Select the target resource (VM, App Service, AKS, etc.).</li>
          <li>Define condition (e.g., CPU > 80%, HTTP 5xx count).</li>
          <li>Create or attach an <strong>Action Group</strong> (email, SMS, webhook, Logic App).</li>
          <li>Review and enable the rule.</li>
        </ol>
        <pre><code># Example (CLI)
az monitor metrics alert create --name HighCPU --resource-group rg-app --scopes /subscriptions/.../vm/myVM --condition "avg Percentage CPU > 80" --action-group opsAlertGroup</code></pre>
        <p><strong>In Practice:</strong> I use Action Groups to send alerts to Teams or trigger Logic Apps that scale out AKS pods automatically when CPU thresholds are breached.</p>
      </div>`
      },
      {
        question: "What is Recovery Services Vault and Backup Vault?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Recovery Services Vault vs Backup Vault</strong></h3>
        <p>
          Both are Azure-managed vaults for data protection, but differ by use case and architecture generation.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Recovery Services Vault (RSV)</th><th>Backup Vault</th></tr>
          <tr><td>Purpose</td><td>VM backup, ASR (Disaster Recovery), classic workloads</td><td>Modern vault for newer backup workloads (Azure Files, Disks, SQL)</td></tr>
          <tr><td>Architecture</td><td>Legacy model</td><td>New architecture with RBAC & soft delete enhancements</td></tr>
          <tr><td>Supported Scenarios</td><td>VM, ASR, On-prem backups</td><td>Blob, Disk, Database backups</td></tr>
        </table>
        <p><strong>In Practice:</strong> I use RSV for VM backups & ASR (failover testing), and Backup Vaults for granular, modern workloads with policy-based retention management.</p>
      </div>`
      },
      {
        question: "What is difference between local and remote backend in Terraform?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Terraform Backend — Local vs Remote</strong></h3>
        <p>
          Backend defines how Terraform stores and locks its state files.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Local Backend</th><th>Remote Backend</th></tr>
          <tr><td>Storage</td><td>State stored locally on machine</td><td>State stored in remote location (e.g., Azure Blob, S3)</td></tr>
          <tr><td>Collaboration</td><td>Single user only</td><td>Supports multiple users with state locking</td></tr>
          <tr><td>Security</td><td>Risk of accidental deletion</td><td>Secured, versioned, encrypted remotely</td></tr>
          <tr><td>Example</td><td><code>backend "local" { path="terraform.tfstate" }</code></td><td><code>backend "azurerm" { storage_account_name="stgacct" }</code></td></tr>
        </table>
        <p><strong>In Practice:</strong> I always use remote backend (Azure Blob) with state locking and access restricted via Managed Identity for team-based IaC projects.</p>
      </div>`
      },
      {
        question: "What is the difference between Feature, Hotfix, and Release branches?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Feature vs Hotfix vs Release Branches</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Branch Type</th><th>Purpose</th><th>Source</th><th>Merge Target</th></tr>
          <tr><td>Feature</td><td>For new features or modules</td><td>develop / main</td><td>develop branch (after review)</td></tr>
          <tr><td>Hotfix</td><td>Critical production bug fix</td><td>main / release</td><td>main + develop</td></tr>
          <tr><td>Release</td><td>Stabilization before production</td><td>develop</td><td>main</td></tr>
        </table>
        <p><strong>In Practice:</strong> I follow GitFlow: feature branches merged into develop, release branches for UAT testing, and hotfix directly from production to minimize downtime.</p>
      </div>`
      },
      {
        question: "How do you optimize pipeline execution time?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Pipeline Optimization Strategies</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>🚀 Enable <strong>parallel jobs</strong> for independent stages (e.g., build + lint + scan).</li>
          <li>📦 Use <strong>caching</strong> for dependencies (npm, pip, Terraform plugins).</li>
          <li>🔁 Implement <strong>incremental builds</strong> — run only affected modules.</li>
          <li>🧩 Reuse <strong>templates and task groups</strong> to reduce redundancy.</li>
          <li>💾 Store <strong>artifacts</strong> for reuse across stages (avoid rebuilds).</li>
          <li>🔍 Optimize YAML triggers to skip irrelevant pipeline runs (<code>paths</code> filter).</li>
        </ul>
        <p><strong>In Practice:</strong> I reduced build times by 40% by using caching, pre-built container agents, and splitting validation/test stages into parallel jobs in Azure DevOps.</p>
      </div>`
      },
      {
        question: "What is difference between Stateful and Stateless apps?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Stateful vs Stateless Applications</strong></h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Stateless</th><th>Stateful</th></tr>
          <tr><td>Definition</td><td>No session/data stored between requests</td><td>Maintains session or user data across requests</td></tr>
          <tr><td>Scaling</td><td>Horizontally easy to scale</td><td>Scaling needs shared storage or replication</td></tr>
          <tr><td>Examples</td><td>Web APIs, REST services</td><td>Databases, message queues</td></tr>
          <tr><td>Failure Impact</td><td>Low — any instance can handle traffic</td><td>High — requires data consistency & recovery</td></tr>
        </table>
        <p><strong>In Practice:</strong> I keep microservices stateless for scalability and use persistent storage (Azure Disk, Blob, or Cosmos DB) for stateful components.</p>
      </div>`
      },
      {
        question: "What is “bare metal” in cloud context?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🖥️ <strong>Bare Metal — Physical Servers Without Virtualization</strong></h3>
        <p>
          In the cloud context, <strong>bare metal</strong> refers to dedicated physical servers provisioned directly to customers — no hypervisor layer.  
          It provides full hardware access and performance isolation.
        </p>
        <ul style="margin-left:1.2rem;">
          <li>⚙️ No virtualization overhead — ideal for high-performance workloads.</li>
          <li>🔒 Complete isolation — compliance-sensitive or latency-critical systems.</li>
          <li>🌩️ Offered by Azure (Dedicated Hosts), AWS (Bare Metal EC2), Oracle (Bare Metal Instances).</li>
        </ul>
        <p><strong>In Practice:</strong> I’ve worked with dedicated Azure hosts (bare metal) for regulatory workloads requiring OS-level hardening and restricted shared tenancy.</p>
      </div>`
      },
      {
        question: "What is a monolithic vs microservice application?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Monolithic vs Microservice Architecture</strong></h3>
        <p>
          Both define how applications are structured and deployed, but differ in modularity, scalability, and deployment approach.
        </p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><th>Aspect</th><th>Monolithic</th><th>Microservice</th></tr>
          <tr><td>Structure</td><td>Single, large codebase</td><td>Collection of independent small services</td></tr>
          <tr><td>Deployment</td><td>Deployed as one unit</td><td>Each service deployed independently</td></tr>
          <tr><td>Scaling</td><td>Scale whole app together</td><td>Scale individual services as needed</td></tr>
          <tr><td>Technology Stack</td><td>Single tech/language</td><td>Polyglot (different tech per service)</td></tr>
          <tr><td>Fault Isolation</td><td>Failure can impact whole app</td><td>Failures isolated per service</td></tr>
        </table>
        <p><strong>In Practice:</strong> I’ve migrated monolithic .NET APIs to containerized microservices on AKS — enabling independent scaling, CI/CD pipelines per service, and faster release cycles.</p>
      </div>`
      },
      {
        question: "How do you automate backups and retention?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💾 <strong>Automating Backups & Retention in Azure</strong></h3>
        <p>
          Backup automation ensures data protection and compliance without manual intervention.  
          I use <strong>Azure Backup</strong> (Recovery Services Vault / Backup Vault) with retention policies and automation scripts.
        </p>
        <h4>⚙️ <strong>Steps:</strong></h4>
        <ol style="margin-left:1.2rem;">
          <li>Create a Recovery Services Vault (or Backup Vault).</li>
          <li>Define backup policy — daily, weekly, or long-term retention.</li>
          <li>Enable backup on VM or resource group using CLI or Terraform.</li>
          <li>Automate retention enforcement and expiry cleanup.</li>
        </ol>
        <pre><code># Example (Azure CLI)
az backup protection enable-for-vm --policy-name DailyBackup --vault-name DRVault --vm vm-prod-01
az backup policy set --vault-name DRVault --name DailyBackup --retention-weekly 4</code></pre>
        <p><strong>In Practice:</strong> I integrate backup configuration scripts in post-deployment pipelines — ensuring every production VM or DB is automatically backed up with 30-day retention.</p>
      </div>`
      },
      {
        question: "What are basic Linux commands used in DevOps daily?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🐧 <strong>Common Linux Commands for DevOps</strong></h3>
        <p>
          These are the day-to-day Linux commands I use for system monitoring, file management, and troubleshooting:
        </p>
        <ul style="margin-left:1.2rem;">
          <li>📂 <strong>Navigation:</strong> <code>cd</code>, <code>pwd</code>, <code>ls -l</code></li>
          <li>📄 <strong>File Management:</strong> <code>cat</code>, <code>tail -f</code>, <code>grep</code>, <code>find</code>, <code>cp</code>, <code>mv</code></li>
          <li>⚙️ <strong>System Monitoring:</strong> <code>top</code>, <code>htop</code>, <code>df -h</code>, <code>free -m</code>, <code>du -sh *</code></li>
          <li>🔐 <strong>Permissions:</strong> <code>chmod</code>, <code>chown</code>, <code>sudo</code></li>
          <li>🌐 <strong>Network:</strong> <code>ping</code>, <code>curl</code>, <code>netstat -tulnp</code>, <code>ss -lntp</code></li>
          <li>🧩 <strong>Package Management:</strong> <code>apt</code> / <code>yum</code> / <code>dnf</code></li>
          <li>📜 <strong>Logs:</strong> <code>journalctl -u servicename</code>, <code>dmesg</code></li>
        </ul>
        <p><strong>In Practice:</strong> I use these commands daily for debugging deployments, verifying services (systemctl status), and checking container logs in AKS or VM hosts.</p>
      </div>`
      },
      {
        question: "What are your steps for securing Terraform and Azure Pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Securing Terraform & Azure Pipelines — Best Practices</strong></h3>
        <h4>🧱 <strong>Terraform Security:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Store state remotely (Azure Blob) with access control and encryption.</li>
          <li>Use Managed Identity or SPN with minimal RBAC permissions (Least Privilege).</li>
          <li>Never hardcode credentials — use Key Vault references or environment variables.</li>
          <li>Implement Checkov/TFLint scans to catch security misconfigurations.</li>
          <li>Enable version locking (<code>required_version</code>, <code>required_providers</code>) to prevent drift.</li>
        </ul>
        <h4>⚙️ <strong>Azure Pipeline Security:</strong></h4>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>Service Connections</strong> with least privilege scope.</li>
          <li>Store secrets in <strong>Azure Key Vault</strong> or pipeline secrets (marked secure).</li>
          <li>Enable <strong>Approval Gates</strong> for production deployments.</li>
          <li>Use <strong>branch protection rules</strong> — only approved PRs trigger main pipeline.</li>
          <li>Restrict pipeline agent permissions (disable unauthorized script execution).</li>
        </ul>
        <p><strong>In Practice:</strong> I secure IaC pipelines by integrating Key Vault secrets dynamically and scanning Terraform with Checkov before every plan/apply — enforcing zero-secrets policy in code.</p>
      </div>`
      }
    ]
  }
];

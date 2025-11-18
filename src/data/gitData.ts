export interface QuestionAnswer {
  question: string;
  answer?: string;      // plain text or markdown
  answerHtml?: string;  // rich HTML version
}

export const gitSections = [
  {
    title: "1. Git Fundamentals",
    questions: [
      {
        question: "What is Git and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔹 <strong>Git — Distributed Version Control System</strong></h3>
        <p>Git is a <strong>distributed version control system (DVCS)</strong> that tracks changes in source code, allowing multiple developers to collaborate efficiently.</p>
        <p><strong>Why we use Git:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Tracks full history of code changes for rollback and audit.</li>
          <li>Enables team collaboration with branching and merging.</li>
          <li>Supports offline work — local commits sync later to remote.</li>
          <li>Resolves conflicts when multiple developers modify same codebase.</li>
          <li>Integrates easily with CI/CD tools and platforms like GitHub or Azure DevOps.</li>
        </ul>
        <p><strong>In practice:</strong> I use Git daily for feature branching, PR reviews, tagging releases, and maintaining clean commit history across environments.</p>
      </div>`
      },
      {
        question: "What is GitHub?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>GitHub — Cloud Hosting for Git Repositories</strong></h3>
        <p>GitHub is a <strong>cloud-based platform</strong> that hosts Git repositories and provides collaboration features for developers.</p>
        <ul style="margin-left:1.2rem;">
          <li>Acts as the <strong>remote repository</strong> where code is stored centrally.</li>
          <li>Supports <strong>Pull Requests, Issues, Actions (CI/CD)</strong>, and Project Boards.</li>
          <li>Enables <strong>team access control</strong> and <strong>branch protection rules</strong>.</li>
        </ul>
        <p><strong>Example:</strong> Developers push local changes → GitHub triggers Actions pipeline → deploys to Azure or Kubernetes.</p>
      </div>`
      },
      {
        question: "What is GitFlow?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>GitFlow — Branching Strategy for Release Management</strong></h3>
        <p>GitFlow is a <strong>branching model</strong> that defines how features, releases, and hotfixes are managed in a structured workflow.</p>
        <p><strong>Typical branches:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>main/master:</strong> production-ready code.</li>
          <li><strong>develop:</strong> integration branch for upcoming release.</li>
          <li><strong>feature/*:</strong> each feature development.</li>
          <li><strong>release/*:</strong> pre-production stabilization.</li>
          <li><strong>hotfix/*:</strong> urgent bug fixes on production.</li>
        </ul>
        <p><strong>In practice:</strong> I follow GitFlow for enterprise projects — ensures stable main branch, and controlled release cycles with PR approvals.</p>
      </div>`
      },
      {
        question: "What problem does Git solve in software development?",
        answerHtml: `
      <div class="answer-rich">
        <h3>💡 <strong>Problems Git Solves</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Eliminates “code overwrites” — multiple developers can safely work on same project.</li>
          <li>Provides full <strong>change tracking</strong> — who changed what and when.</li>
          <li>Supports <strong>branch-based development</strong> — isolating features or bug fixes.</li>
          <li>Makes <strong>rollback</strong> and version comparison easy.</li>
          <li>Improves <strong>collaboration & deployment pipelines</strong> through integration with CI/CD.</li>
        </ul>
        <p><strong>Example:</strong> I can revert a single faulty commit or cherry-pick specific changes to fix production without affecting other branches.</p>
      </div>`
      },
      {
        question: "How does Git differ from other version control systems like SVN?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>Git vs SVN</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Distributed vs Centralized:</strong> Git has full local copy of repo; SVN depends on central server.</li>
          <li><strong>Offline work:</strong> Git supports commits and diffs offline; SVN requires constant connectivity.</li>
          <li><strong>Branching:</strong> Git branches are lightweight and instant; SVN branching is heavy and slow.</li>
          <li><strong>Performance:</strong> Git operations are faster due to local computation.</li>
          <li><strong>History & Merge:</strong> Git’s SHA-based commit history and 3-way merge make conflict resolution efficient.</li>
        </ul>
        <p><strong>In real use:</strong> Git offers better scalability and parallel development — I’ve used it for large infra-as-code projects with 30+ active contributors.</p>
      </div>`
      },
      {
        question: "What are commits, branches, and repositories in Git?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Key Git Concepts</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Commit:</strong> A snapshot of staged changes with a unique SHA ID — forms the project history.</li>
          <li><strong>Branch:</strong> A movable pointer to commits, used for parallel feature or bug fix work.</li>
          <li><strong>Repository (repo):</strong> The complete project structure tracked by Git — contains commits, branches, and tags.</li>
        </ul>
        <p><strong>Example:</strong> I usually create a new branch for each feature, commit regularly with atomic messages, and raise a pull request for merge.</p>
      </div>`
      },
      {
        question: "What is the difference between local repository and remote repository?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌐 <strong>Local vs Remote Repository</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Local repo:</strong> Exists on your machine. You can commit, branch, and revert offline.</li>
          <li><strong>Remote repo:</strong> Hosted on a server (like GitHub, GitLab, or Azure DevOps) for collaboration.</li>
          <li><strong>Sync commands:</strong> 
            <ul>
              <li><code>git push</code> → send local commits to remote.</li>
              <li><code>git pull</code> → fetch + merge latest remote changes.</li>
            </ul>
          </li>
        </ul>
        <p><strong>In real usage:</strong> I always sync my local dev branch before pushing to avoid conflicts during PR merges.</p>
      </div>`
      },
      {
        question: "What is the basic workflow of Git (init → add → commit → push → pull)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Basic Git Workflow</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li><strong>git init</strong> — Initialize a new Git repository.</li>
          <li><strong>git add .</strong> — Stage changes for commit.</li>
          <li><strong>git commit -m "message"</strong> — Save snapshot locally.</li>
          <li><strong>git remote add origin &lt;url&gt;</strong> — Link to remote repo.</li>
          <li><strong>git push origin main</strong> — Push commits to remote branch.</li>
          <li><strong>git pull</strong> — Fetch and merge latest remote updates.</li>
        </ol>
        <pre><code># Example
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/org/repo.git
git push -u origin main</code></pre>
        <p><strong>In practice:</strong> This is my daily dev loop — commit small, meaningful changes and push regularly to maintain clean sync with remote.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "2. Git & Version Control",
    questions: [
      {
        question: "What is Git and why do we use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Git — Distributed Version Control</strong></h3>
        <p>Git is a <strong>distributed version control system</strong> used to manage code history and collaboration. It keeps a full local copy of the repository so developers can work offline and merge changes later.</p>
        <ul style="margin-left:1.2rem;">
          <li>Tracks every change in code with commit history.</li>
          <li>Supports parallel development via branches.</li>
          <li>Enables rollback, conflict resolution, and audit trails.</li>
          <li>Integrates easily with CI/CD pipelines for automation.</li>
        </ul>
        <p><strong>In practice:</strong> I use Git daily to manage infrastructure code, feature branches, and PR-based deployments with CI/CD triggers.</p>
      </div>`
      },
      {
        question: "What is Git cherry-pick?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🍒 <strong>Git Cherry-pick — Apply Specific Commits</strong></h3>
        <p><code>git cherry-pick</code> is used to <strong>apply a specific commit</strong> from one branch onto another without merging the full branch.</p>
        <pre><code># Example
git checkout main
git cherry-pick a1b2c3d</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Useful for migrating only critical fixes or features.</li>
          <li>Common in production hotfix workflows.</li>
        </ul>
        <p><strong>In real use:</strong> I cherry-pick production hotfix commits from release branch to main without merging the full dev history.</p>
      </div>`
      },
      {
        question: "Difference between Git pull and Git fetch.",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Git Pull vs Git Fetch</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>git fetch:</strong> Downloads commits/branches from remote but does NOT merge — safe to review changes first.</li>
          <li><strong>git pull:</strong> Fetches + automatically merges into current branch.</li>
        </ul>
        <pre><code># Example
git fetch origin
git merge origin/main  # Manual merge
# vs
git pull origin main   # Fetch + merge in one step</code></pre>
        <p><strong>Best practice:</strong> I prefer <code>fetch</code> first in production repos to review diffs before merging.</p>
      </div>`
      },
      {
        question: "What is Git merge?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Git Merge — Combine Branches</strong></h3>
        <p><code>git merge</code> integrates changes from one branch into another, creating a new merge commit.</p>
        <pre><code>git checkout develop
git merge feature/login</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Keeps history of both branches (non-linear).</li>
          <li>Used for stable integration in GitFlow.</li>
        </ul>
        <p><strong>In practice:</strong> I use merge for feature → develop consolidation with code review via pull requests.</p>
      </div>`
      },
      {
        question: "What is Git rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Git Rebase — Linear History Rewrite</strong></h3>
        <p><code>git rebase</code> re-applies commits from one branch on top of another to create a linear commit history.</p>
        <pre><code>git checkout feature/login
git rebase develop</code></pre>
        <ul style="margin-left:1.2rem;">
          <li>Makes history cleaner and easier to read.</li>
          <li>Avoid rebase on shared/public branches (can rewrite history).</li>
        </ul>
        <p><strong>In practice:</strong> I rebase feature branches before raising PRs to keep commit history linear and conflict-free.</p>
      </div>`
      },
      {
        question: "What does git commit --amend do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✏️ <strong>Amend Last Commit</strong></h3>
        <p><code>git commit --amend</code> lets you modify the most recent commit (message or staged files).</p>
        <pre><code>git add missed-file.txt
git commit --amend --no-edit</code></pre>
        <p><strong>In practice:</strong> I use it to fix typos or missed files before pushing to remote — avoids unnecessary commits.</p>
      </div>`
      },
      {
        question: "How to resolve Git merge conflicts?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Resolving Merge Conflicts</strong></h3>
        <p>Conflicts occur when two branches modify the same lines of code. Git stops merge until manually resolved.</p>
        <ol style="margin-left:1.2rem;">
          <li>Open conflicted files → look for <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> markers.</li>
          <li>Choose correct changes or merge manually.</li>
          <li>Stage resolved files using <code>git add .</code>.</li>
          <li>Commit with <code>git commit</code> to complete merge.</li>
        </ol>
        <p><strong>In practice:</strong> I prefer VS Code merge editor — shows side-by-side diff and reduces manual mistakes.</p>
      </div>`
      },
      {
        question: "What is Git Flow and branching strategy?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌳 <strong>Git Flow — Standard Branching Model</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>main:</strong> stable production branch.</li>
          <li><strong>develop:</strong> integration branch for upcoming releases.</li>
          <li><strong>feature/*:</strong> individual feature work.</li>
          <li><strong>release/*:</strong> staging branch before production.</li>
          <li><strong>hotfix/*:</strong> urgent fix directly from main.</li>
        </ul>
        <p><strong>In practice:</strong> I follow GitFlow for large projects — helps keep main stable and supports controlled CI/CD promotion.</p>
      </div>`
      },
      {
        question: "How to recover deleted commits in Git?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🩹 <strong>Recovering Deleted Commits</strong></h3>
        <p>Git keeps history references even after deletion. Use <code>git reflog</code> to find lost commits.</p>
        <pre><code>git reflog
git checkout &lt;commit-id&gt;</code></pre>
        <p><strong>In practice:</strong> I’ve used reflog multiple times to recover accidentally reset or amended commits safely.</p>
      </div>`
      },
      {
        question: "What is a pull request and why is it important?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📬 <strong>Pull Request (PR) — Code Review Mechanism</strong></h3>
        <p>A Pull Request is a <strong>merge request</strong> raised to integrate changes from one branch into another, with peer review.</p>
        <ul style="margin-left:1.2rem;">
          <li>Enables <strong>code review and approval workflow</strong>.</li>
          <li>Runs CI/CD checks before merge.</li>
          <li>Ensures branch protection and auditability.</li>
        </ul>
        <p><strong>In practice:</strong> I use PR templates enforcing reviewers, tags, and linked Jira tickets for traceability.</p>
      </div>`
      },
      {
        question: "How to secure credentials committed by mistake?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Removing Sensitive Data</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Delete secret file and commit change.</li>
          <li>Use <code>git filter-branch</code> or <code>BFG Repo Cleaner</code> to purge from history.</li>
          <li>Revoke exposed credentials immediately.</li>
          <li>Force-push cleaned branch if required.</li>
        </ol>
        <pre><code>bfg --delete-files 'secrets.json'</code></pre>
        <p><strong>Best practice:</strong> Always use <code>.gitignore</code> and store secrets in Key Vault or environment variables.</p>
      </div>`
      },
      {
        question: "How do you push, pull and clone repositories?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Push, Pull & Clone</strong></h3>
        <pre><code># Clone a remote repo
git clone https://github.com/org/project.git

# Pull latest changes
git pull origin develop

# Push local commits
git push origin feature/login</code></pre>
        <p><strong>In practice:</strong> I always clone using SSH for secure access and consistent CI/CD integration.</p>
      </div>`
      },
      {
        question: "What is Git Stash and when is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Git Stash — Save Work Temporarily</strong></h3>
        <p><code>git stash</code> temporarily saves uncommitted changes so you can switch branches without committing.</p>
        <pre><code>git stash save "WIP"
git checkout develop
git stash pop</code></pre>
        <p><strong>Use case:</strong> During urgent hotfixes, I stash local work, switch branch, fix issue, and later restore my changes.</p>
      </div>`
      },
      {
        question: "How to rename a branch locally and remotely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Renaming Branches</strong></h3>
        <pre><code># Rename locally
git branch -m old-name new-name

# Delete old remote branch
git push origin --delete old-name

# Push new branch
git push origin new-name

# Reset upstream tracking
git push --set-upstream origin new-name</code></pre>
        <p><strong>In practice:</strong> I rename branches to align with Jira IDs or release naming conventions.</p>
      </div>`
      },
      {
        question: "What are tags in Git and when are they used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏷️ <strong>Tags — Version Snapshots</strong></h3>
        <p>Tags mark specific commits (commonly used for release versions).</p>
        <pre><code>git tag -a v1.0 -m "First stable release"
git push origin v1.0</code></pre>
        <p><strong>Use case:</strong> I tag releases for deployment tracking and rollback points in production pipelines.</p>
      </div>`
      },
      {
        question: "What is the difference between Feature and Hotfix branches?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌱 <strong>Feature vs Hotfix Branches</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Feature branch:</strong> Created from <code>develop</code> for new enhancements or modules.</li>
          <li><strong>Hotfix branch:</strong> Created from <code>main</code> to fix urgent production issues.</li>
          <li>Hotfix merges back into both <code>main</code> and <code>develop</code> to keep codebase consistent.</li>
        </ul>
        <p><strong>In practice:</strong> I treat hotfix branches as high-priority paths with immediate testing and CI/CD trigger for rollback readiness.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "3. GitHub Actions",
    questions: [
      {
        question: "What is GitHub Actions workflow?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>GitHub Actions Workflow — CI/CD as Code</strong></h3>
        <p>A <strong>workflow</strong> in GitHub Actions is a YAML-based automation pipeline that runs on specific triggers (push, PR, schedule, etc.).</p>
        <ul style="margin-left:1.2rem;">
          <li>Stored inside <code>.github/workflows/</code> directory.</li>
          <li>Defines <strong>jobs, steps, and actions</strong> to build, test, deploy, or automate tasks.</li>
          <li>Executes in isolated GitHub-hosted or self-hosted runners.</li>
        </ul>
        <pre><code># Example: simple CI workflow
name: CI Build
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test</code></pre>
        <p><strong>In practice:</strong> I use separate workflows for CI (build/test) and CD (deploy), each triggered by different GitHub events.</p>
      </div>`
      },
      {
        question: "What is workflow dispatch in GitHub?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Workflow Dispatch — Manual Trigger</strong></h3>
        <p><code>workflow_dispatch</code> allows users to manually trigger workflows from the GitHub UI or via API.</p>
        <pre><code>on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deploy target'
        required: true
        default: 'dev'</code></pre>
        <p><strong>Use case:</strong> I use <code>workflow_dispatch</code> for on-demand deployments — e.g., promoting a build from dev to prod manually.</p>
      </div>`
      },
      {
        question: "What are jobs, steps, and actions in workflow files?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Workflow Structure — Jobs, Steps & Actions</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Job:</strong> A set of steps that run on a single runner (e.g., build, test, deploy).</li>
          <li><strong>Step:</strong> A single task inside a job (shell command or an action).</li>
          <li><strong>Action:</strong> A pre-built or custom reusable component performing a task.</li>
        </ul>
        <pre><code>jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run tests
        run: npm test</code></pre>
        <p><strong>In practice:</strong> I modularize workflows by splitting build/test/deploy into separate jobs to run in parallel.</p>
      </div>`
      },
      {
        question: "What are reusable workflows and composite actions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Reusable Workflows & Composite Actions</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Reusable workflows:</strong> Centralized workflows that can be called by other repos using <code>workflow_call</code>.</li>
          <li><strong>Composite actions:</strong> Custom actions that bundle multiple steps into one logical unit (defined in <code>action.yml</code>).</li>
        </ul>
        <pre><code># Reusable workflow call
uses: org/repo/.github/workflows/deploy.yml@main</code></pre>
        <p><strong>In practice:</strong> I create reusable workflows for shared CI/CD templates across multiple microservice repos — ensures consistency.</p>
      </div>`
      },
      {
        question: "How do you write GitHub Actions YAML files?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧾 <strong>Writing Workflow YAMLs</strong></h3>
        <p>Workflows are defined using YAML syntax in <code>.github/workflows/</code>.</p>
        <pre><code>name: Build and Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npm run build</code></pre>
        <p><strong>Best practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Always pin action versions (<code>@v4</code>) for stability.</li>
          <li>Use matrix builds for multiple Node or Python versions.</li>
          <li>Define environment variables and secrets in one place.</li>
        </ul>
      </div>`
      },
      {
        question: "What is the difference between on: push and on: workflow_dispatch?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚡ <strong>Trigger Differences</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>on: push</strong> — Runs automatically when commits are pushed to specified branches.</li>
          <li><strong>on: workflow_dispatch</strong> — Runs only when manually triggered via UI or API.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>on:
  push:
    branches: [main]
  workflow_dispatch:</code></pre>
        <p><strong>In practice:</strong> I use <code>push</code> for CI builds and <code>workflow_dispatch</code> for controlled production deployments.</p>
      </div>`
      },
      {
        question: "What action do you use for checkout and what version?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Checkout Action — Fetch Repository Code</strong></h3>
        <p>I use <code>actions/checkout</code> to pull code from the repo inside the runner.</p>
        <pre><code>- name: Checkout code
  uses: actions/checkout@v4</code></pre>
        <p><strong>Why v4:</strong> Supports better submodule handling, caching, and performance improvements.</p>
      </div>`
      },
      {
        question: "What is the latest version of actions/checkout used in your pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🆕 <strong>Latest Checkout Action Version</strong></h3>
        <p>The latest stable version is <code>actions/checkout@v4</code> (as of 2025).</p>
        <p><strong>In my pipelines:</strong> I’ve migrated from <code>@v2</code> → <code>@v4</code> for enhanced Git LFS and multi-fetch improvements.</p>
      </div>`
      },
      {
        question: "What are build metrics in GitHub Actions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📊 <strong>Build Metrics & Insights</strong></h3>
        <p>GitHub Actions provides workflow run metrics such as:</p>
        <ul style="margin-left:1.2rem;">
          <li>Job duration and success rate.</li>
          <li>Queue time and concurrency usage.</li>
          <li>Artifact size and cache hit ratio.</li>
        </ul>
        <p><strong>In practice:</strong> I use GitHub’s “Usage & Insights” tab to analyze pipeline performance and optimize build times by caching dependencies.</p>
      </div>`
      },
      {
        question: "How do you use secrets in GitHub Actions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Using Secrets Securely</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Define secrets under <strong>Repo → Settings → Secrets → Actions</strong>.</li>
          <li>Access using <code>&dollar;{'{{ secrets.VAR_NAME }}'}</code> syntax inside workflows.</li>
        </ul>
        <pre><code>- name: Deploy
  run: az login --service-principal -u &dollar;{{ secrets.AZURE_ID }} -p &dollar;{{ secrets.AZURE_SECRET }} --tenant &dollar;{{ secrets.TENANT_ID }}</code></pre>
        <p><strong>In practice:</strong> I keep environment credentials and API keys strictly in GitHub Secrets or Org-level secrets for shared workflows.</p>
      </div>`
      },
      {
        question: "How do you handle parallel jobs in GitHub workflows?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏃 <strong>Parallel Job Execution</strong></h3>
        <p>GitHub Actions runs jobs in parallel by default unless dependencies are defined using <code>needs:</code>.</p>
        <pre><code>jobs:
  build:
    runs-on: ubuntu-latest
  test:
    runs-on: ubuntu-latest
  deploy:
    runs-on: ubuntu-latest
    needs: [build, test]</code></pre>
        <p><strong>In practice:</strong> I parallelize linting, testing, and build jobs to reduce total CI time from 10 mins to ~4 mins.</p>
      </div>`
      },
      {
        question: "What are GitHub events and syntax-based triggers?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🎯 <strong>Events & Triggers in GitHub Actions</strong></h3>
        <p>Workflows can trigger on <strong>events</strong> such as:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>push / pull_request:</strong> Code changes or PRs.</li>
          <li><strong>schedule:</strong> Cron-based triggers.</li>
          <li><strong>release:</strong> Tag creation events.</li>
          <li><strong>workflow_dispatch:</strong> Manual trigger.</li>
        </ul>
        <pre><code>on:
  schedule:
    - cron: '0 2 * * *'  # Every night 2AM</code></pre>
        <p><strong>In practice:</strong> I use time-based triggers for nightly builds and event-based triggers for CI/CD pipelines.</p>
      </div>`
      },
      {
        question: "How do you integrate GitHub Actions with Azure pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>☁️ <strong>Integrating GitHub Actions with Azure Pipelines</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li>Use GitHub → Azure DevOps Service Connection for pipeline triggers.</li>
          <li>Trigger Azure Pipeline via REST API from GitHub Action.</li>
        </ul>
        <pre><code>- name: Trigger Azure Pipeline
  run: |
    curl -u USER:TOKEN \\
    -X POST "https://dev.azure.com/org/project/_apis/pipelines/{id}/runs?api-version=6.0"</code></pre>
        <p><strong>In practice:</strong> I trigger Azure Pipelines for infra deployments post successful GitHub CI builds — keeps CI in GitHub and CD in Azure DevOps.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "4. Git Commands & Operations",
    questions: [
      {
        question: "What is the difference between Git Pull, Fetch, and Clone?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔄 <strong>Git Pull vs Fetch vs Clone</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>git clone:</strong> Copies a remote repository (all branches, commits, and history) to your local machine.</li>
          <li><strong>git fetch:</strong> Downloads latest changes (commits, branches, tags) from remote <em>without merging</em> into local branch.</li>
          <li><strong>git pull:</strong> Combination of <code>fetch + merge</code>. It fetches and immediately merges remote changes into your current branch.</li>
        </ul>
        <pre><code># Examples
git clone https://github.com/user/repo.git
git fetch origin
git pull origin main</code></pre>
        <p><strong>In practice:</strong> I use <code>fetch</code> before merging to review incoming changes safely.</p>
      </div>`
      },
      {
        question: "What is the difference between Git Merge and Rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Merge vs Rebase — Combining Branches</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Merge:</strong> Creates a new "merge commit" combining two branch histories — preserves branch structure.</li>
          <li><strong>Rebase:</strong> Reapplies commits from one branch on top of another — results in a cleaner, linear history.</li>
        </ul>
        <pre><code># Merge Example
git checkout main
git merge feature

# Rebase Example
git checkout feature
git rebase main</code></pre>
        <p><strong>Rule of thumb:</strong> Use <code>merge</code> for shared branches, <code>rebase</code> for local cleanup before pushing.</p>
      </div>`
      },
      {
        question: "What is Git Stash and when do you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧳 <strong>Git Stash — Save Work Temporarily</strong></h3>
        <p><strong>git stash</strong> temporarily stores uncommitted changes without committing them. Useful when switching branches mid-work.</p>
        <pre><code># Commands
git stash           # Save current changes
git stash list      # View stashes
git stash apply     # Reapply latest stash
git stash pop       # Apply and remove from stash</code></pre>
        <p><strong>In practice:</strong> I stash when I need to pull updates or switch branches without losing ongoing edits.</p>
      </div>`
      },
      {
        question: "What is the difference between git reset, git revert, and git checkout?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Reset vs Revert vs Checkout</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>git reset:</strong> Moves HEAD to a specific commit — can modify commit history (dangerous for shared repos).</li>
          <li><strong>git revert:</strong> Creates a new commit that undoes a previous one — safe for shared branches.</li>
          <li><strong>git checkout:</strong> Switches branches or restores files from a specific commit.</li>
        </ul>
        <pre><code># Examples
git reset --hard HEAD~1   # Remove last commit
git revert 123abc         # Safely undo commit
git checkout dev          # Switch branch</code></pre>
        <p><strong>Pro Tip:</strong> Use <code>revert</code> for public history, <code>reset</code> for local corrections.</p>
      </div>`
      },
      {
        question: "What is a detached HEAD state and how do you fix it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Detached HEAD — What It Means & Fix</strong></h3>
        <p>Occurs when you checkout a commit (not a branch), so HEAD points directly to a commit instead of a branch.</p>
        <pre><code># Example of detached HEAD
git checkout a1b2c3d</code></pre>
        <p><strong>Fix:</strong> Create or switch to a branch to reattach HEAD.</p>
        <pre><code>git checkout -b new-branch    # Create new branch from commit
# or
git switch main</code></pre>
        <p><strong>In practice:</strong> I sometimes use detached HEAD to test old commits safely without affecting branches.</p>
      </div>`
      },
      {
        question: "How do you check commit history in Git?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📜 <strong>Viewing Commit History</strong></h3>
        <p>Use <strong>git log</strong> and its options for various formats.</p>
        <pre><code>git log --oneline --graph --decorate
git log --author="Ritesh"
git log -p            # Show patch details</code></pre>
        <p><strong>In practice:</strong> I use <code>--oneline --graph</code> to quickly visualize branch merges and commit flows.</p>
      </div>`
      },
      {
        question: "How do you view differences between commits or branches (git diff)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Comparing Changes with git diff</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Unstaged changes:</strong> <code>git diff</code></li>
          <li><strong>Staged changes:</strong> <code>git diff --cached</code></li>
          <li><strong>Between commits/branches:</strong> <code>git diff commit1 commit2</code> or <code>git diff main dev</code></li>
        </ul>
        <pre><code># Example
git diff HEAD~1 HEAD
git diff main feature</code></pre>
        <p><strong>Pro Tip:</strong> Combine with <code>--stat</code> for summarized output.</p>
      </div>`
      },
      {
        question: "What is the difference between git push and git pull?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📤 <strong>Push vs Pull</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>git push:</strong> Uploads your local commits to remote repository (e.g., GitHub).</li>
          <li><strong>git pull:</strong> Downloads and merges remote commits into your current branch.</li>
        </ul>
        <pre><code># Examples
git push origin main
git pull origin main</code></pre>
        <p><strong>In practice:</strong> I always pull before pushing to avoid non-fast-forward conflicts.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "5. Branching & Collaboration",
    questions: [
      {
        question: "What are branching strategies — Feature, Hotfix, Release, and Trunk-Based?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌿 <strong>Branching Strategies in Real Projects</strong></h3>
        <ul style="margin-left:1.2rem;">
          <li><strong>Feature Branch:</strong> Each feature or story is developed in its own branch (e.g., <code>feature/login-api</code>) and merged after review.</li>
          <li><strong>Hotfix Branch:</strong> Used to patch production issues quickly — branched from <code>main</code> and merged back to both <code>main</code> & <code>develop</code>.</li>
          <li><strong>Release Branch:</strong> Created from <code>develop</code> for final testing and version tagging before deploying to production.</li>
          <li><strong>Trunk-Based:</strong> Minimal branching — developers commit small, frequent changes directly to <code>main</code> (CI/CD heavy model).</li>
        </ul>
        <p><strong>In practice:</strong> I usually go with <strong>Git Flow</strong> or <strong>Feature branching</strong> for team collaboration to ensure clean isolation of work.</p>
      </div>`
      },
      {
        question: "Which branching model have you implemented in your project?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Implemented Model — Git Flow</strong></h3>
        <p>In my project, we implemented <strong>Git Flow</strong> because of multi-environment releases and parallel feature development.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Main (master):</strong> Always production-ready.</li>
          <li><strong>Develop:</strong> Ongoing integration branch for QA testing.</li>
          <li><strong>Feature branches:</strong> Created from <code>develop</code>.</li>
          <li><strong>Release branches:</strong> Created before going live.</li>
          <li><strong>Hotfix branches:</strong> Created from <code>main</code> to fix critical issues.</li>
        </ul>
        <p><strong>Why:</strong> Ensures parallel work, clean merges, and predictable releases.</p>
      </div>`
      },
      {
        question: "What is the Git Flow model?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Git Flow — Structured Branching Strategy</strong></h3>
        <p><strong>Git Flow</strong> defines a consistent branching model for managing feature, release, and hotfix workflows.</p>
        <pre><code>Main → Stable production branch
Develop → Integration branch
Feature/* → New features
Release/* → Final testing
Hotfix/* → Urgent fixes on production</code></pre>
        <p><strong>Commands (Git Flow CLI):</strong></p>
        <pre><code>git flow init
git flow feature start login
git flow release start v1.0
git flow hotfix start urgent-fix</code></pre>
        <p><strong>In practice:</strong> I prefer Git Flow for enterprise repos where multiple teams deploy in parallel.</p>
      </div>`
      },
      {
        question: "How do you delete a branch locally and remotely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🗑️ <strong>Deleting Branches (Local + Remote)</strong></h3>
        <pre><code># Delete local branch
git branch -d feature/login
# Force delete if not merged
git branch -D feature/login

# Delete remote branch
git push origin --delete feature/login</code></pre>
        <p><strong>In practice:</strong> I always delete feature branches post-merge to keep repo clean and maintain hygiene.</p>
      </div>`
      },
      {
        question: "How do you rename a branch (local + remote)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>✏️ <strong>Renaming Branches Safely</strong></h3>
        <pre><code># Rename local branch
git branch -m old-name new-name

# Push new branch and delete old remote
git push origin new-name
git push origin --delete old-name</code></pre>
        <p><strong>Pro Tip:</strong> Always inform your team after renaming remote branches to avoid fetch errors.</p>
      </div>`
      },
      {
        question: "How do you create a new branch and switch to it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🌱 <strong>Create & Switch Branch</strong></h3>
        <pre><code># Create new branch
git branch feature/ui-update

# Create and switch in one command
git checkout -b feature/ui-update</code></pre>
        <p><strong>In practice:</strong> I use descriptive names (e.g., <code>feature/terraform-cost-optimization</code>) for clarity in team repos.</p>
      </div>`
      },
      {
        question: "How do you merge one branch into another?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Merging Branches</strong></h3>
        <pre><code># Switch to target branch
git checkout develop
# Merge source branch into it
git merge feature/api-integration</code></pre>
        <p><strong>In practice:</strong> I prefer merging via <strong>Pull Requests</strong> to ensure code review, build checks, and approvals before integration.</p>
      </div>`
      },
      {
        question: "What are merge conflicts and how do you resolve them?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Merge Conflicts — Cause & Resolution</strong></h3>
        <p>Conflicts occur when Git cannot automatically merge changes due to overlapping edits in the same file.</p>
        <pre><code># Steps to resolve
1️⃣ Identify conflict markers (<<<<<<<, =======, >>>>>>>)
2️⃣ Manually edit file and keep the correct version
3️⃣ Mark resolved and commit
git add .
git commit</code></pre>
        <p><strong>In practice:</strong> I use VS Code merge tools or GitKraken to visually resolve conflicts faster and cleaner.</p>
      </div>`
      },
      {
        question: "How do you perform cherry-pick in Git?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🍒 <strong>Git Cherry-Pick — Selective Commit Transfer</strong></h3>
        <p>Cherry-pick lets you apply a specific commit from one branch to another without merging the whole branch.</p>
        <pre><code># Example
git checkout develop
git cherry-pick 9fceb02</code></pre>
        <p><strong>Use case:</strong> Useful when a single bug fix or feature needs to be moved quickly to a different environment branch.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "6. Commits, History & Recovery",
    questions: [
      {
        question: "How do you undo the last commit without losing your changes?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Undo Last Commit (Keep Changes)</strong></h3>
        <p>Use <strong>--soft</strong> reset to move HEAD back one commit but keep changes in the working directory and staging area.</p>
        <pre><code># Undo last commit but keep files
git reset --soft HEAD~1</code></pre>
        <p><strong>In practice:</strong> I use this when I forget to update the commit message or want to add one more file before recommitting.</p>
      </div>`
      },
      {
        question: "How do you revert a bad commit that broke the build?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>Reverting a Bad Commit</strong></h3>
        <p>Use <strong>git revert</strong> to safely undo a commit by creating a new commit that reverses its changes (no history rewrite).</p>
        <pre><code># Revert a commit by hash
git revert <commit-hash></code></pre>
        <p><strong>In practice:</strong> Ideal for shared branches where others may have already pulled the bad commit.</p>
      </div>`
      },
      {
        question: "How do you squash multiple commits into one?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Squashing Commits for Clean History</strong></h3>
        <p>Use <strong>interactive rebase</strong> to combine multiple commits into a single logical commit.</p>
        <pre><code># Squash last 3 commits
git rebase -i HEAD~3</code></pre>
        <p>Then mark all but the first commit as <code>squash</code> or <code>s</code> in the editor and save.</p>
        <p><strong>In practice:</strong> I always squash before merging feature branches to keep history readable and meaningful.</p>
      </div>`
      },
      {
        question: "What is interactive rebase and how do you use it to clean commit history?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧠 <strong>Interactive Rebase — History Cleanup Tool</strong></h3>
        <p><strong>Interactive rebase</strong> lets you edit, reorder, squash, or drop commits before pushing them.</p>
        <pre><code># Open rebase editor for last 5 commits
git rebase -i HEAD~5</code></pre>
        <p><strong>Options inside editor:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>pick:</strong> Keep commit as is.</li>
          <li><strong>reword:</strong> Edit commit message.</li>
          <li><strong>squash:</strong> Combine with previous commit.</li>
          <li><strong>drop:</strong> Remove commit.</li>
        </ul>
        <p><strong>In practice:</strong> I use it before merging to <code>main</code> to ensure linear, well-labeled commit history.</p>
      </div>`
      },
      {
        question: "How do you recover deleted commits or branches?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Recover Deleted Commits or Branches</strong></h3>
        <p>Git keeps a record of all recent HEAD positions via <strong>reflog</strong>.</p>
        <pre><code># Show recent actions
git reflog

# Recover a branch
git checkout -b recovered-branch <commit-hash></code></pre>
        <p><strong>In practice:</strong> Reflog is a life-saver when commits or branches get lost during a bad rebase or reset.</p>
      </div>`
      },
      {
        question: "How do you remove sensitive data (like passwords or tokens) from Git history?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Removing Sensitive Data from History</strong></h3>
        <p>Use <strong>git filter-repo</strong> (recommended) or <strong>BFG Repo-Cleaner</strong> to remove secrets permanently from history.</p>
        <pre><code># Using git filter-repo
git filter-repo --path secret.txt --invert-paths</code></pre>
        <p><strong>Steps:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Remove sensitive file from history.</li>
          <li>Force push rewritten branch.</li>
          <li>Invalidate old clones (rotate credentials).</li>
        </ol>
        <p><strong>In practice:</strong> After removing secrets, I always update CI/CD secrets store and revoke old tokens.</p>
      </div>`
      },
      {
        question: "How do you recover an accidentally deleted branch?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Recover Deleted Branch</strong></h3>
        <p>Git reflog tracks the last commit pointer for deleted branches, allowing easy recovery.</p>
        <pre><code># Find the last commit hash
git reflog

# Recreate the branch
git branch restore-feature <commit-hash></code></pre>
        <p><strong>In practice:</strong> I’ve used this multiple times to recover branches deleted after premature cleanup.</p>
      </div>`
      },
      {
        question: "What is Git reflog and how can it help you recover lost commits?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Git Reflog — The Recovery Command</strong></h3>
        <p><strong>git reflog</strong> records every movement of HEAD — commits, rebases, resets, checkouts, etc. It’s your recovery log.</p>
        <pre><code># View reflog
git reflog

# Restore lost commit
git checkout -b restore HEAD@{2}</code></pre>
        <p><strong>In practice:</strong> Reflog is my go-to command when a commit “disappears” after reset, rebase, or accidental deletion.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "7. Tags & Versioning",
    questions: [
      {
        question: "What is a Git Tag and why is it useful?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🏷️ <strong>Git Tag — Snapshot for a Specific Commit</strong></h3>
        <p>A <strong>Git Tag</strong> marks a specific point in history — usually for a <strong>release version</strong> like <code>v1.0.0</code>. It’s a read-only reference to a commit that doesn’t change over time.</p>
        <p><strong>Why it’s useful:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Identifies stable releases for deployment or rollback.</li>
          <li>Helps trace code versions in production.</li>
          <li>Used by CI/CD pipelines to trigger versioned builds.</li>
        </ul>
        <p><strong>In practice:</strong> I use tags to label deployment-ready commits like <code>v1.2.3</code> before triggering automation in GitHub Actions or Azure DevOps.</p>
      </div>`
      },
      {
        question: "What is the difference between lightweight and annotated tags?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Lightweight vs Annotated Tags</strong></h3>
        <p><strong>Lightweight Tag:</strong> Simple pointer to a commit — no metadata, no message.</p>
        <pre><code>git tag v1.0.0</code></pre>
        <p><strong>Annotated Tag:</strong> Full tag object stored in Git DB with tagger info, date, and message.</p>
        <pre><code>git tag -a v1.0.0 -m "Release version 1.0.0"</code></pre>
        <p><strong>Key Difference:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Annotated tags are preferred for official releases.</li>
          <li>Lightweight tags are good for local checkpoints.</li>
        </ul>
        <p><strong>In practice:</strong> I always use annotated tags in CI/CD for traceability and signed release notes.</p>
      </div>`
      },
      {
        question: "How do you create, view, and delete tags?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Create, View & Delete Tags</strong></h3>
        <p><strong>Create Tag:</strong></p>
        <pre><code># Annotated
git tag -a v1.1.0 -m "Release 1.1.0"</code></pre>
        <p><strong>View All Tags:</strong></p>
        <pre><code>git tag</code></pre>
        <p><strong>View Tag Details:</strong></p>
        <pre><code>git show v1.1.0</code></pre>
        <p><strong>Delete Tag:</strong></p>
        <pre><code># Local delete
git tag -d v1.1.0

# Remote delete
git push origin :refs/tags/v1.1.0</code></pre>
        <p><strong>In practice:</strong> I tag each production release and maintain old tags for rollback traceability.</p>
      </div>`
      },
      {
        question: "How do you push tags to a remote repository?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Pushing Tags to Remote</strong></h3>
        <p>By default, <code>git push</code> does not push tags automatically. You must push them explicitly.</p>
        <pre><code># Push a specific tag
git push origin v1.1.0

# Push all tags
git push origin --tags</code></pre>
        <p><strong>In practice:</strong> I push version tags as part of release automation so CI/CD picks the correct build version.</p>
      </div>`
      },
      {
        question: "What is the purpose of tagging in release management?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Tags in Release Management</strong></h3>
        <p>Tags act as <strong>immutable version identifiers</strong> in a release cycle — mapping deployed artifacts to source code state.</p>
        <p><strong>Key Purposes:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Trace back exact code version used in production.</li>
          <li>Enable rollback to a known stable commit.</li>
          <li>Automate semantic versioning (<code>v1.2.3</code>) in CI/CD pipelines.</li>
        </ul>
        <p><strong>In practice:</strong> My pipelines auto-tag builds on successful deployments using versioning rules like <code>major.minor.patch</code>.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "8. Merge, Rebase & Squash Explained",
    questions: [
      {
        question: "Difference between merge and rebase — when should you use each?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Merge vs Rebase — Key Difference</strong></h3>
        <p><strong>Merge:</strong> Combines changes from one branch into another, preserving full commit history with a new “merge commit.”</p>
        <p><strong>Rebase:</strong> Moves or reapplies commits from one branch on top of another branch — creating a cleaner, linear history.</p>
        <p><strong>When to use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Use Merge</strong> when you want to retain full history and context of all merges (preferred in shared branches like <code>main</code>).</li>
          <li><strong>Use Rebase</strong> for personal feature branches to keep history clean before merging to <code>develop</code>.</li>
        </ul>
        <pre><code># Merge example
git checkout develop
git merge feature/login

# Rebase example
git checkout feature/login
git rebase develop</code></pre>
        <p><strong>In practice:</strong> I rebase my feature branches on develop before merge to avoid unnecessary merge commits.</p>
      </div>`
      },
      {
        question: "What happens internally during a rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>What Happens Internally During Rebase</strong></h3>
        <p>Rebase temporarily removes your branch commits, moves the branch pointer to the target base, and re-applies your commits one by one.</p>
        <p><strong>Steps internally:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Git stores your commits temporarily in a buffer.</li>
          <li>Moves your branch pointer to the latest commit of the base branch (e.g., <code>develop</code>).</li>
          <li>Re-applies your commits sequentially over it.</li>
          <li>If conflicts occur, you must resolve them manually before continuing with <code>git rebase --continue</code>.</li>
        </ol>
        <p><strong>In practice:</strong> I often use rebase before pushing to keep a linear, readable history in team repos.</p>
      </div>`
      },
      {
        question: "What is the difference between squash merge and regular merge?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Squash Merge vs Regular Merge</strong></h3>
        <p><strong>Regular Merge:</strong> Preserves all commits from the feature branch.</p>
        <p><strong>Squash Merge:</strong> Combines all commits from the feature branch into a single commit on the target branch.</p>
        <pre><code># Regular merge
git merge feature/login

# Squash merge
git merge --squash feature/login
git commit -m "Feature: login implemented"</code></pre>
        <p><strong>When to use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use squash merge for small feature branches to keep main branch history clean.</li>
          <li>Use regular merge for large, collaborative branches where history is important.</li>
        </ul>
        <p><strong>In practice:</strong> I prefer squash merges in PRs for single-owner features — cleaner audit trail.</p>
      </div>`
      },
      {
        question: "What is a Git conflict and how do you handle it during rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Handling Git Conflicts During Rebase</strong></h3>
        <p><strong>Conflict:</strong> Happens when the same lines of code are modified differently in two branches being merged or rebased.</p>
        <p><strong>During rebase:</strong> Git pauses and lets you resolve manually.</p>
        <pre><code># Typical rebase conflict resolution
git status          # See conflicting files
git add <file>      # After fixing conflicts
git rebase --continue</code></pre>
        <p>If you want to abort rebase:</p>
        <pre><code>git rebase --abort</code></pre>
        <p><strong>In practice:</strong> I always resolve conflicts locally, test build once, then continue rebase — avoids broken merges in main.</p>
      </div>`
      },
      {
        question: "How do you combine multiple commits using git squash or interactive rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧱 <strong>Combining Commits — Squash & Interactive Rebase</strong></h3>
        <p>Use <strong>interactive rebase</strong> to combine multiple commits into a single, meaningful one.</p>
        <pre><code># Combine last 3 commits
git rebase -i HEAD~3</code></pre>
        <p>In the editor, change all but the first commit from <code>pick</code> → <code>squash</code> (or <code>s</code>).</p>
        <p>Then, edit the commit message and save.</p>
        <p><strong>In practice:</strong> I always squash commits before PR — ensures clean, review-friendly history without "fix typo" commits.</p>
      </div>`
      },
      {
        question: "What are the advantages and risks of using rebase?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚖️ <strong>Advantages & Risks of Rebase</strong></h3>
        <p><strong>Advantages:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Cleaner, linear commit history.</li>
          <li>Easier to trace bugs and review changes.</li>
          <li>No unnecessary merge commits cluttering logs.</li>
        </ul>
        <p><strong>Risks:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Rewriting history — can cause issues if commits are already pushed/shared.</li>
          <li>Potential for conflicts when rebasing large branches.</li>
        </ul>
        <p><strong>Best Practice:</strong> Never rebase public branches. Rebase only your local feature branches before merge.</p>
        <p><strong>In practice:</strong> I follow “rebase local, merge shared” — keeps team workflow safe and clean.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "9. Git Configuration & .gitignore",
    questions: [
      {
        question: "What is a .gitignore file and why is it used?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚫 <strong>.gitignore — Ignore Unnecessary or Sensitive Files</strong></h3>
        <p>The <strong>.gitignore</strong> file tells Git which files or directories to ignore — meaning they won’t be tracked, staged, or committed.</p>
        <p><strong>Why it's used:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>To prevent committing unnecessary build artifacts (e.g., <code>dist/</code>, <code>node_modules/</code>).</li>
          <li>To protect sensitive info like credentials or local configs (<code>.env</code>, <code>.terraform/</code>).</li>
          <li>To keep repo clean and lightweight for collaborators.</li>
        </ul>
        <p><strong>In practice:</strong> Every project I create has a well-defined <code>.gitignore</code> template aligned with its tech stack — e.g., Node, Python, Terraform, etc.</p>
      </div>`
      },
      {
        question: "What types of files should go in .gitignore (examples: .env, node_modules, etc.)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>📁 <strong>Common Files/Folders to Add in .gitignore</strong></h3>
        <p><strong>Typical examples:</strong></p>
        <pre><code># Environment and secrets
.env
.env.local
*.pem

# Dependencies and builds
node_modules/
dist/
build/
__pycache__/
.terraform/

# Logs & cache
*.log
.cache/
coverage/
.idea/
.vscode/

# System files
.DS_Store
Thumbs.db</code></pre>
        <p><strong>In practice:</strong> I customize .gitignore per environment — for example, Terraform state files (<code>terraform.tfstate*</code>) in infra repos and build outputs in app repos.</p>
      </div>`
      },
      {
        question: "How do you apply changes in .gitignore after the file has already been committed?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Apply .gitignore Changes Retroactively</strong></h3>
        <p>By default, Git continues to track files even if they are later added to <code>.gitignore</code>. To untrack already-committed files:</p>
        <pre><code># Stop tracking existing files now ignored
git rm -r --cached .
git add .
git commit -m "Apply updated .gitignore rules"</code></pre>
        <p>This removes files from version control (not from local disk) and applies updated ignore rules.</p>
        <p><strong>In practice:</strong> I always review <code>git status</code> after this step to ensure no critical file is mistakenly untracked.</p>
      </div>`
      },
      {
        question: "What is .gitattributes and how is it different from .gitignore?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>.gitattributes vs .gitignore</strong></h3>
        <p><strong>.gitignore:</strong> Tells Git which files to ignore — they won’t be committed or tracked.</p>
        <p><strong>.gitattributes:</strong> Defines how Git handles files that are tracked — controlling behaviors like line endings, diff/merge drivers, and binary handling.</p>
        <p><strong>Example:</strong></p>
        <pre><code># Normalize line endings
*.sh text eol=lf

# Treat images as binary
*.png binary

# Custom diff driver
*.tf diff=terraform</code></pre>
        <p><strong>In practice:</strong> I use <code>.gitattributes</code> to enforce consistent line endings (LF/CRLF) across teams using Windows & macOS — avoids random diffs in commits.</p>
      </div>`
      },
      {
        question: "How do you configure Git username and email globally or per repo?",
        answerHtml: `
      <div class="answer-rich">
        <h3>👤 <strong>Configuring Git Identity (Global & Local)</strong></h3>
        <p>Git uses <strong>username</strong> and <strong>email</strong> to tag commits. You can configure them globally or per repository.</p>
        <p><strong>Set globally (applies to all repos):</strong></p>
        <pre><code>git config --global user.name "Ritesh Sharma"
git config --global user.email "ritesh@example.com"</code></pre>
        <p><strong>Set locally (specific to a repo):</strong></p>
        <pre><code>git config user.name "ProjectUser"
git config user.email "project@example.com"</code></pre>
        <p><strong>Verify configuration:</strong></p>
        <pre><code>git config --list</code></pre>
        <p><strong>In practice:</strong> I maintain global identity for personal repos and override per project when using corporate GitHub or Azure DevOps accounts.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "10. Authentication & Security",
    questions: [
      {
        question: "How do you handle Git authentication in CI/CD pipelines?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Handling Git Authentication in CI/CD Pipelines</strong></h3>
        <p>In CI/CD, authentication is handled using <strong>secure tokens or service connections</strong> — never raw credentials.</p>
        <p><strong>Common patterns:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>GitHub Actions:</strong> Use <code>GITHUB_TOKEN</code> or personal PAT stored in <strong>Secrets</strong>.</li>
          <li><strong>Azure DevOps:</strong> Use <strong>Service Connections</strong> or PAT in secure variable groups.</li>
          <li><strong>Self-hosted agents:</strong> Store tokens as environment variables or secret files (not in repo).</li>
        </ul>
        <p><strong>Example (GitHub Actions):</strong></p>
        <pre><code>git config user.name "ci-bot"
git config user.email "ci-bot@company.com"
git push https://x-access-token:&dollar;{{ secrets.GITHUB_TOKEN }}@github.com/org/repo.git HEAD:main</code></pre>
        <p><strong>In practice:</strong> I ensure CI/CD jobs use temporary tokens with least privilege — just enough to clone/push code or tag releases.</p>
      </div>`
      },
      {
        question: "What are the ways to authenticate Git access in Azure DevOps or GitHub (PAT, SSH keys, OAuth)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔑 <strong>Git Authentication Methods — Azure DevOps & GitHub</strong></h3>
        <p><strong>1️⃣ Personal Access Token (PAT):</strong> Token-based authentication, scoped for APIs and Git operations. Common in CI/CD and automation.</p>
        <p><strong>2️⃣ SSH Keys:</strong> Key-based authentication for developers — ideal for local dev or self-hosted runners.</p>
        <p><strong>3️⃣ OAuth / SSO:</strong> Used for user logins and organization-based access policies (SSO enforced by Azure AD or GitHub Enterprise).</p>
        <p><strong>In practice:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>SSH</strong> for dev access (no password prompts).</li>
          <li>Use <strong>PATs</strong> in CI/CD pipelines with limited scopes (read/write).</li>
          <li>Use <strong>OAuth</strong> for integrations like GitHub Apps or third-party services.</li>
        </ul>
      </div>`
      },
      {
        question: "What is a Personal Access Token (PAT) and when should you use it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧩 <strong>Personal Access Token (PAT)</strong></h3>
        <p>A <strong>PAT</strong> is a secure token that replaces username/password for Git authentication or API access.</p>
        <p><strong>When to use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Automating Git operations in pipelines or scripts.</li>
          <li>Accessing private repos via REST API.</li>
          <li>Integrating external tools (Terraform, Jenkins, GitHub Actions).</li>
        </ul>
        <p><strong>Best Practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>fine-grained PATs</strong> with minimal scope and expiration.</li>
          <li>Never hardcode PATs — store in <strong>Secrets / Key Vault / Variable Groups</strong>.</li>
        </ul>
        <p><strong>In practice:</strong> I create short-lived PATs for CI jobs and rotate them via service principal automation every 90 days.</p>
      </div>`
      },
      {
        question: "How do you securely store credentials for Git automation?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Secure Credential Storage for Git Automation</strong></h3>
        <p><strong>Never store credentials in plain text or code.</strong> Always use secret management solutions provided by your CI/CD platform.</p>
        <p><strong>Recommended secure stores:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>GitHub Actions:</strong> <code>Settings → Secrets and Variables → Actions</code></li>
          <li><strong>Azure DevOps:</strong> Secure <strong>Variable Groups</strong> or <strong>Azure Key Vault</strong> linked to pipeline.</li>
          <li><strong>AWS / GCP:</strong> Use Secrets Manager or KMS with IAM roles.</li>
        </ul>
        <p><strong>In practice:</strong> My pipelines fetch credentials dynamically from Key Vault using service principal — no secrets exposed in YAML or logs.</p>
      </div>`
      },
      {
        question: "How do you revoke or rotate credentials in a secure pipeline?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Revoking & Rotating Credentials Securely</strong></h3>
        <p>Regular credential rotation reduces risk from leaked tokens or old service accounts.</p>
        <p><strong>Steps to rotate securely:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Revoke old PAT or key from GitHub / Azure DevOps settings.</li>
          <li>Generate a new one with minimal permissions.</li>
          <li>Update it in secret store (GitHub Secrets / Key Vault / DevOps Variable Group).</li>
          <li>Trigger a test run to validate new credentials.</li>
        </ol>
        <p><strong>Automation Tip:</strong> Use scripts or scheduled Logic Apps to auto-rotate credentials every 90 days and notify via Teams/Slack.</p>
        <p><strong>In practice:</strong> I maintain a rotation policy using Azure Key Vault expiration alerts integrated with a Logic App for notification & update workflow.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "11. Git in CI/CD & DevOps",
    questions: [
      {
        question: "How is Git integrated with Azure DevOps, Jenkins, or GitHub Actions?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔗 <strong>Git Integration in CI/CD Tools</strong></h3>
        <p>Git acts as the <strong>source of truth</strong> for all CI/CD platforms. Each tool integrates through webhooks or service connections.</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>Azure DevOps:</strong> Pipelines connect directly to Azure Repos or GitHub via <strong>Service Connections</strong>. Each commit or PR triggers a pipeline run.</li>
          <li><strong>GitHub Actions:</strong> Uses <code>on: push</code> or <code>on: pull_request</code> events to trigger workflows defined in <code>.github/workflows/</code>.</li>
          <li><strong>Jenkins:</strong> Uses <strong>Git plugin</strong> + <strong>webhooks</strong> to poll or automatically trigger builds on commits.</li>
        </ul>
        <p><strong>In practice:</strong> I usually configure pipelines to auto-trigger on <code>main</code> merges and create separate workflows for feature and release branches.</p>
      </div>`
      },
      {
        question: "How do you automate deployments triggered by Git commits?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🚀 <strong>Automated Deployments via Git Commits</strong></h3>
        <p>Automated deployments are triggered using <strong>Git push → CI → CD</strong> workflow.</p>
        <p><strong>Typical flow:</strong></p>
        <ol style="margin-left:1.2rem;">
          <li>Developer pushes code or merges PR to <code>main</code> / <code>release</code> branch.</li>
          <li>Pipeline auto-triggers (via webhook).</li>
          <li>CI builds and runs tests.</li>
          <li>CD stage deploys to environment (Dev → Staging → Prod).</li>
        </ol>
        <p><strong>Example (GitHub Actions):</strong></p>
        <pre><code>on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - run: az webapp deploy ...</code></pre>
        <p><strong>In practice:</strong> I set branch-based environment rules — <code>develop</code> → dev, <code>main</code> → production — using environment protection rules in Actions or DevOps.</p>
      </div>`
      },
      {
        question: "What is the workflow between Git commits → pipeline trigger → deployment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚙️ <strong>End-to-End Git → Pipeline → Deployment Workflow</strong></h3>
        <p>This is the backbone of DevOps automation:</p>
        <ol style="margin-left:1.2rem;">
          <li><strong>Commit Stage:</strong> Developer commits & pushes code to Git repo.</li>
          <li><strong>Trigger Stage:</strong> Git event (push/PR) triggers CI pipeline via webhook.</li>
          <li><strong>CI Stage:</strong> Pipeline builds code, runs lint/test, and publishes artifacts (Docker image, zip, etc.).</li>
          <li><strong>CD Stage:</strong> Deployment pipeline pulls the artifact and deploys to environment.</li>
          <li><strong>Feedback Stage:</strong> Deployment status + logs pushed back to Git PR checks or Teams notification.</li>
        </ol>
        <p><strong>In practice:</strong> I design pipelines as multi-stage YAMLs in Azure DevOps (Build → Test → Deploy) linked to Git branches.</p>
      </div>`
      },
      {
        question: "How do you handle merge conflicts in a multi-developer CI/CD environment?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Handling Merge Conflicts in Teams</strong></h3>
        <p>Merge conflicts arise when multiple developers edit the same file regions.</p>
        <p><strong>Best practices:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Use <strong>feature branches</strong> + frequent <strong>pulls from main</strong> to stay updated.</li>
          <li>Enforce <strong>PR validation pipelines</strong> before merging.</li>
          <li>Use <strong>code owners</strong> and <strong>branch protection rules</strong> for controlled merges.</li>
          <li>Use <code>git rebase</code> on latest main to flatten history and minimize conflicts.</li>
        </ul>
        <p><strong>In CI/CD:</strong> Conflicts are caught early during PR builds — pipelines fail, forcing resolution before merge.</p>
        <p><strong>In practice:</strong> I always rebase or merge main → feature before opening PR to avoid pipeline merge failures.</p>
      </div>`
      },
      {
        question: "How do you manage Git credentials in pipelines securely?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔐 <strong>Secure Git Credential Management in CI/CD</strong></h3>
        <p>Never hardcode credentials in YAML files — use platform secrets.</p>
        <p><strong>Recommended methods:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li><strong>GitHub Actions:</strong> Store in <code>Settings → Secrets → Actions</code>, access via <code>&dollar;{'{{ secrets.PAT_TOKEN }}'}</code>.</li>
          <li><strong>Azure DevOps:</strong> Use <strong>Variable Groups</strong> linked with <strong>Azure Key Vault</strong>.</li>
          <li><strong>Jenkins:</strong> Use <strong>Credentials Plugin</strong> and access via environment variables.</li>
        </ul>
        <p><strong>Example:</strong></p>
        <pre><code>git push https://x-access-token:&dollar;{'{'}{ secrets.GITHUB_TOKEN }{'}'}@github.com/org/repo.git HEAD:main</code></pre>
        <p><strong>In practice:</strong> I use temporary, least-privileged tokens with 90-day rotation and audit logs enabled for all access.</p>
      </div>`
      }
    ]
  }
  ,
  {
    title: "12. Real-World Scenarios & Troubleshooting",
    questions: [
      {
        question: "You merged a PR and later realized a mistake — how do you fix it?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⏪ <strong>Fixing a Merged PR Mistake</strong></h3>
        <p><strong>Option 1 — Revert Merge Commit:</strong></p>
        <pre><code># Find merge commit hash
git log --oneline

# Revert merge safely
git revert -m 1 <merge-commit-hash>
git push origin main</code></pre>
        <p><strong>Option 2 — Reset (if private branch, no one pulled yet):</strong></p>
        <pre><code>git reset --hard HEAD~1
git push -f origin main</code></pre>
        <p><strong>In practice:</strong> I prefer <code>git revert</code> for shared branches to avoid rewriting history and breaking others' clones.</p>
      </div>`
      },
      {
        question: "You committed secrets accidentally — how do you remove them from history and push?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🛡️ <strong>Removing Sensitive Data from Git History</strong></h3>
        <p>Use <strong>git filter-repo</strong> (modern approach) or <strong>BFG Repo-Cleaner</strong).</p>
        <pre><code># Remove secret file from history
git filter-repo --path .env --invert-paths

# Force push rewritten history
git push origin --force

# Rotate secrets in environment</code></pre>
        <p><strong>In practice:</strong> After removing secrets, I always revoke old keys/tokens and replace them in CI/CD secret stores.</p>
      </div>`
      },
      {
        question: "You’re in a detached HEAD state after a rebase — what should you do?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🧭 <strong>Fixing Detached HEAD</strong></h3>
        <p>Detached HEAD means you are not on any branch — commits can be lost if you switch branches.</p>
        <pre><code># Check current HEAD
git status

# Create a new branch to preserve work
git checkout -b fix-detached-head

# Push to remote
git push origin fix-detached-head</code></pre>
        <p><strong>In practice:</strong> Always create a branch immediately to save work before switching or rebasing.</p>
      </div>`
      },
      {
        question: "How do you identify who made a change in a file (git blame)?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔍 <strong>Tracking Changes with git blame</strong></h3>
        <pre><code># Show commit and author info per line
git blame app/main.js

# Optional: limit to specific lines
git blame -L 10,20 app/main.js</code></pre>
        <p><strong>In practice:</strong> I use git blame for troubleshooting production issues or understanding why a specific change was introduced.</p>
      </div>`
      },
      {
        question: "How do you recover files after running git reset --hard accidentally?",
        answerHtml: `
      <div class="answer-rich">
        <h3>♻️ <strong>Recover Files after git reset --hard</strong></h3>
        <p>Use <strong>git reflog</strong> to find the previous HEAD and restore files.</p>
        <pre><code># Check reflog
git reflog

# Recover lost commit or files
git checkout HEAD@{2} -- path/to/file</code></pre>
        <p><strong>In practice:</strong> Reflog is my lifesaver when someone resets the branch or rewrites history accidentally.</p>
      </div>`
      },
      {
        question: "How do you resolve a large merge conflict between feature and release branches?",
        answerHtml: `
      <div class="answer-rich">
        <h3>⚔️ <strong>Resolving Large Merge Conflicts</strong></h3>
        <ol style="margin-left:1.2rem;">
          <li>Identify conflicting files: <code>git status</code></li>
          <li>Open conflict markers (<<<<<, =====, >>>>>) in files.</li>
          <li>Manually merge changes or use IDE merge tool.</li>
          <li>Add resolved files: <code>git add &lt;file&gt;</code></li>
          <li>Continue merge/rebase: <code>git commit</code> or <code>git rebase --continue</code></li>
          <li>Test build locally before pushing.</li>
        </ol>
        <p><strong>In practice:</strong> I often do feature → release rebase, fix conflicts locally, test thoroughly, then merge to release — avoids breaking CI/CD.</p>
      </div>`
      },
      {
        question: "How do you manage Git hooks (pre-commit, post-merge, etc.) in your projects?",
        answerHtml: `
      <div class="answer-rich">
        <h3>🔔 <strong>Managing Git Hooks</strong></h3>
        <p>Git hooks are scripts executed at certain points in Git workflow:</p>
        <ul style="margin-left:1.2rem;">
          <li><strong>pre-commit:</strong> Run linters, tests, or code formatters before commit.</li>
          <li><strong>post-merge:</strong> Run scripts after merging (e.g., dependency install).</li>
          <li><strong>pre-push:</strong> Run CI tests before push.</li>
        </ul>
        <p><strong>Setup:</strong></p>
        <pre><code># Add a pre-commit hook
echo "npm run lint" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit</code></pre>
        <p><strong>In practice:</strong> I standardize hooks across team using <code>husky</code> or <code>lefthook</code> so everyone enforces lint/tests automatically.</p>
      </div>`
      }
    ]
  }
,
{
  title: "13. Advanced Git Concepts",
  questions: [
    {
      question: "What is Git submodule and when do you use it?",
      answerHtml: `
      <div class="answer-rich">
        <h3>📦 <strong>Git Submodule — Nested Repositories</strong></h3>
        <p>A <strong>Git submodule</strong> allows you to embed one Git repository inside another. Useful for managing dependencies or shared libraries.</p>
        <p><strong>When to use:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Include a shared library in multiple projects while keeping its history separate.</li>
          <li>Keep external dependencies tracked but isolated.</li>
        </ul>
        <p><strong>Commands:</strong></p>
        <pre><code># Add a submodule
git submodule add https://github.com/org/lib.git libs/lib

# Initialize & update
git submodule update --init --recursive</code></pre>
        <p><strong>In practice:</strong> I use submodules for common Terraform modules across multiple infrastructure repos.</p>
      </div>`
    },
    {
      question: "What is Git Worktree?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🛠️ <strong>Git Worktree — Multiple Working Directories</strong></h3>
        <p>Git Worktree lets you have multiple working directories for the same repository, each on a different branch.</p>
        <p><strong>Use cases:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Work on multiple features simultaneously without switching branches.</li>
          <li>Test a release branch while continuing development on main.</li>
        </ul>
        <pre><code># Create new worktree for branch
git worktree add ../feature-branch feature/new-feature

# Remove worktree
git worktree remove ../feature-branch</code></pre>
        <p><strong>In practice:</strong> I often use worktrees to test hotfixes on production branch while developing feature branches locally.</p>
      </div>`
    },
    {
      question: "How do you rebase your feature branch with main while preserving your local commits?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🔀 <strong>Rebase Feature Branch on Main</strong></h3>
        <pre><code># Switch to feature branch
git checkout feature/login

# Rebase on main
git fetch origin
git rebase origin/main

# Resolve conflicts if any
git rebase --continue

# Push updated branch
git push --force-with-lease</code></pre>
        <p><strong>In practice:</strong> I rebase frequently to keep my feature branch up-to-date with main while maintaining clean commit history.</p>
      </div>`
    },
    {
      question: "What are bare repositories in Git?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🏗️ <strong>Bare Repositories</strong></h3>
        <p>A <strong>bare repository</strong> contains only the Git database (no working directory). It's typically used as a central repo for collaboration.</p>
        <p><strong>Key points:</strong></p>
        <ul style="margin-left:1.2rem;">
          <li>Cannot edit files directly — no working tree.</li>
          <li>Used as remote repo for push/pull.</li>
          <li>Created using: <code>git init --bare repo.git</code></li>
        </ul>
        <p><strong>In practice:</strong> Central repos on GitHub or Azure DevOps are effectively bare — we push/pull, never directly edit.</p>
      </div>`
    },
    {
      question: "How do you split a large Git repository into smaller ones (monorepo to multirepo)?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🔪 <strong>Splitting a Large Repository</strong></h3>
        <p>Use <strong>git filter-repo</strong> or <strong>git subtree</strong> to split directories into separate repos while preserving history.</p>
        <pre><code># Example: split directory into new repo
git filter-repo --path apps/frontend/ --path-rename frontend/:/

# Push new repo
git remote add new-frontend <url>
git push new-frontend main</code></pre>
        <p><strong>In practice:</strong> I split large monorepos into multiple repos to reduce CI/CD build times and isolate teams.</p>
      </div>`
    },
    {
      question: "What are signed commits and how are they verified?",
      answerHtml: `
      <div class="answer-rich">
        <h3>🖊️ <strong>Signed Commits (GPG/SSH)</strong></h3>
        <p>Signed commits ensure integrity and authenticity — verify that the commit was made by a trusted developer.</p>
        <p><strong>Create a signed commit:</strong></p>
        <pre><code>git commit -S -m "Implement login feature"</code></pre>
        <p><strong>Verify a commit:</strong></p>
        <pre><code>git log --show-signature</code></pre>
        <p><strong>In practice:</strong> In enterprise projects, all commits to main or release branches are signed and verified to prevent unauthorized code injection.</p>
      </div>`
    }
  ]
}


];

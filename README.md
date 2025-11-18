# ⚙️ DevOps Interview Guide - Source Code  
> **Private Repository for Building & Deploying the DevOps Interview Portal**

![Status](https://img.shields.io/badge/Automation%20Status-Active-success?style=for-the-badge&logo=github)
![Framework](https://img.shields.io/badge/Built%20with-Vite%20+%20React-61DAFB?style=for-the-badge&logo=vite&logoColor=white)
![Language](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
[![Hosting](https://img.shields.io/badge/Deployed%20to-GitHub%20Pages-2b65ec?style=for-the-badge&logo=githubpages&logoColor=white)](https://hrutviatri.github.io/DevOps-Interview-Guide/)
<p align="center">
  <img src="https://img.shields.io/badge/Build_and_Deploy_to_DevOps--Interview--Guide_Repo-passing-brightgreen?logo=githubactions&logoColor=white" />
  &nbsp;- <a href="https://www.linkedin.com/in/hrutviatri/"><b><i>Ritesh Sharma</i></b></a>
</p>


## 🧭 Overview

**DevOps Interview Guide – Source Code** is the **private development repository** containing the complete source of the interactive DevOps interview portal.  

- The **compiled build** from this repo is automatically **pushed to the public repository** 👉 [`DevOps-Interview-Guide`](https://github.com/hrutviatri/DevOps-Interview-Guide/).  
- The public repo serves the **static site** via **GitHub Pages**.  
- The automation is handled using **GitHub Actions**.

> 🔒 This repository is not directly accessible to the public. It hosts the development environment, app logic, UI, and JSON data.

---

## 🧱 Project Structure

```
DevOps-Interview-Guide-Source-Code/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   └── utils/
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| 🧠 Framework | **React + Vite** |
| 💅 Styling | **Tailwind CSS + shadcn/ui** |
| 🔧 Language | **TypeScript** |
| ⚙️ State Management | **Zustand + React Hooks** |
| 🧾 Data | Static JSON / TS Objects |
| 🚀 Deployment | **GitHub Actions → Public Repo → GitHub Pages** |

---

## 🔄 CI/CD Deployment Flow

The **build and deploy process** is fully automated using GitHub Actions.

### 📁 Workflow Overview
1. Code is pushed or merged into `main` (private repo).  
2. GitHub Action triggers → runs `npm ci && npm run build`.  
3. The generated `dist` folder is deployed to **public repo** [`DevOps-Interview-Guide`](https://github.com/hrutviatri/DevOps-Interview-Guide/) (branch: `gh-pages`).  
4. GitHub Pages automatically updates the live site.
---




### ⚙️ Example Deploy Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Build and Deploy to DevOps-Interview-Guide Repo

on:
   push:
     branches:
       - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout private repo (source)
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Cache node modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist

      # 🟢 Deploy to another (public) repository
      - name: Deploy to Public Repo
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}        # Personal Access Token
          DEST_REPO: "hrutviatri/DevOps-Interview-Guide"   # 👈 public repo name
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"

          # Clone destination repo (public)
          git clone --depth=1 https://x-access-token:${DEPLOY_TOKEN}@github.com/${DEST_REPO}.git deploy-repo
          cd deploy-repo

          # Create or switch to gh-pages branch
          if git show-ref --quiet refs/heads/gh-pages; then
            git checkout gh-pages
          else
            git checkout --orphan gh-pages
          fi

          # Remove old content (keep .git)
          rm -rf ./*

          # Copy new build output
          cp -r ../dist/* .

          # Commit and push
          git add .
          git commit -m "🚀 Deploy from private repo build" || echo "No changes to commit"
          # git branch -M gh-pages
          git push origin gh-pages  # main or gh-pages if you use Pages branch

      - name: Show deployment URL
        run: |
          echo "✅ Live at: https://hrutviatri.github.io/DevOps-Interview-Guide/"

      # 📨 Email notification on SUCCESS
      - name: Send email on success
        if: success()
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 465
          secure: true
          username: ${{ secrets.MAIL_USERNAME }}
          password: ${{ secrets.MAIL_PASSWORD }}
          subject: "✅ Deployment Successful — DevOps-Interview-Guide-Code"
          to: ${{ secrets.MAIL_TO }}
          from: "GitHub Actions <${{ secrets.MAIL_USERNAME }}>"
          body: |
            🚀 Deployment successful!
            Your site is live at:
            https://hrutviatri.github.io/DevOps-Interview-Guide/

      # ❌ Email notification on FAILURE
      - name: Send email on failure
        if: failure()
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 465
          secure: true
          username: ${{ secrets.MAIL_USERNAME }}
          password: ${{ secrets.MAIL_PASSWORD }}
          subject: "❌ Deployment Failed — DevOps-Interview-Guide-Code"
          to: ${{ secrets.MAIL_TO }}
          from: "GitHub Actions <${{ secrets.MAIL_USERNAME }}>"
          body: |
            ❗ Deployment failed for commit:
            ${{ github.sha }}
            Please check the Actions logs.
```

> 🧠 `PUBLIC_REPO_TOKEN` is a **Personal Access Token (classic)** or **fine-grained PAT** stored in repo secrets to push to the public repo.
<div style="border: 1px solid #473e3dca; border-radius: 8px; padding: 10px; margin: 10px 0;">
<details>
<summary style="display: flex; align-items: center; font-size: 1.2em; font-weight: bold; cursor: pointer;">
<span style="display:inline-block; transform-origin:center; transition:transform .22s;color:#9bd1ff;">▶ &nbsp;</span>
  HOW TO CREATE PAT TOKEN
</summary> 

### Follow these steps to make Personal Access Token in Github.

**<h2>🪪 Step 1 — Create a Personal Access Token (PAT)</h2>**

**1) Go to 👉 https://github.com/settings/tokens?type=beta**
```bash
This opens Fine-grained Personal Access Tokens page.
```

**2) Click “Generate new token” → “Fine-grained token”**


**3) Fill the details:**
By default the repo uses a `base` suitable for GitHub Pages:

```ts
Token name:                         deploy-public-repo-token
Expiration:                         Choose No expiration (or 1 year)
Resource owner:                     Your GitHub account
Repository access:                  Choose “Only select repositories”
Select your public repo →           DevOps-Interview-Guide
Under Repository permissions, set:
Contents →                          ✅ Read and write
Metadata →                          ✅ Read-only
Workflows →                         ✅ Read and write (optional but good for triggering future workflows)
```

**4) Click Generate token**

```ts
→ You’ll get a long token starting with github_pat_...
```
**✅ Copy it immediately - GitHub won’t show it again later.**

**<h2> 🧩 Step 2 — Add the token to your private repo’s secrets</h2>**

**1) Open your private repo (the one where the workflow runs)**


**2) Go to:**
```ts
Settings → Secrets and variables → Actions → New repository secret
```

**3) Set:**

```ts
Name: DEPLOY_TOKEN
Value: (paste the token you copied)
```
**4) Click Add secret**




**<h2>🚀 Step 3 - Confirm it works</h2>**

.**Now, when you push to your private repo’s main branch:**

```ts
  ✅ GitHub Actions will build your project
  ✅ Then push the result to your public repo’s gh-pages branch
  ✅ Finally, your live site will be at
```
[![Live Site](https://img.shields.io/badge/🔵%20Live%20Website-Visit%20Now-2b65ec?style=for-the-badge&logo=githubpages&logoColor=white)](https://hrutviatri.github.io/DevOps-Interview-Guide/)

---
</details> </div>





















<div style="border: 1px solid #724e4eff; border-radius: 8px; padding: 10px; margin: 10px 0;">
<details>
<summary style="display: flex; align-items: center; font-size: 1.2em; font-weight: bold; cursor: pointer;">
<span style="display:inline-block; transform-origin:center; transition:transform .22s;color:#9bd1ff;">▶ &nbsp;</span>
  Add PAT Token to Your Private Repo’s Secrets  

</summary> 
<br>

1️⃣ **Open your private repo** (the one where this workflow runs).  

2️⃣ **Go to:**
```
Settings → Secrets and variables → Actions → New repository secret
```
3️⃣ **Set:**
```bash
Name: DEPLOY_TOKEN
Value: (paste the token you copied)
```

4️⃣ **Click Add secret**

> ✅ Once saved, the secret will be available inside your workflow as  
> `secrets.DEPLOY_TOKEN`

---

## ⚙️ Step 2.1 — (Optional) Using GitHub CLI (`gh`)

If you prefer the terminal and already have the GitHub CLI installed and authenticated:

**To create the secret interactively:**
```bash
gh secret set DEPLOY_TOKEN --repo yourusername/your-private-repo
```

**Or to pipe the token directly:**
```bash
echo "github_pat_xxx..." | gh secret set DEPLOY_TOKEN --repo yourusername/your-private-repo --body -
```

**To verify:**
```bash
gh secret list --repo yourusername/your-private-repo
```
You’ll see `DEPLOY_TOKEN` in the list (values are masked).

---

## 🏢 Step 2.2 — (Optional) Organization-Level Secret

If multiple repositories will use the same token:

1. Go to your **Organization → Settings → Secrets and variables → Actions**  
2. Click **New organization secret**
3. Name it `DEPLOY_TOKEN`
4. Paste the token and select which repositories can use it
5. Click **Add secret**

> 💡 Organization secrets can be scoped to selected repos — use least privilege.

---

## 🧩 Step 3 — Use the Secret Inside Your Workflow

Reference your secret as `secrets.DEPLOY_TOKEN` inside the YAML file:

```yaml
- name: Deploy to Public Repo (gh-pages)
  env:
    DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
  run: |
    git clone https://x-access-token:${DEPLOY_TOKEN}@github.com/hrutviatri/DevOps-Interview-Guide.git
    # deployment steps...
```

> ⚠️ **Never print (`echo`) secrets in logs.**  
> Use them only inside commands, not for debugging.

---

## 🧪 Step 4 — Confirm It Works

1. Push a new commit to your private repo’s `main` branch  
2. Go to **Actions** tab → select your workflow → watch the logs  
3. You should see the deployment job succeed  
4. If successful, your public site will be live at:

[![Live Website](https://img.shields.io/badge/%E2%9A%A1%EF%B8%8F%20LIVE-Visit%20Now-brightgreen?style=for-the-badge&logo=github&logoColor=white)](https://hrutviatri.github.io/DevOps-Interview-Guide/)


✅ GitHub Actions will:
- Build your project  
- Push the result to your **public repo’s `gh-pages` branch**  
- Instantly make it live via **GitHub Pages**

---

## 🔄 Step 5 — Token Rotation & Maintenance

- 🔁 **Rotate regularly** (monthly or quarterly)  
- ✏️ **Update:**  
  1. Generate a new PAT  
  2. Edit your repo’s secret → replace the old value  
  3. Re-run workflow to confirm  
  4. Revoke the old PAT (GitHub → Settings → Developer settings → Personal access tokens)
- 🛡️ **Scopes required:**  
  - `Contents` → Read & write  
  - `Metadata` → Read-only  
  - `Workflows` → *(optional)* Read & write  

---

## 🧰 Troubleshooting Checklist

- ✅ Token pasted fully (no extra spaces/newlines)?  
- ✅ Secret name matches exactly `DEPLOY_TOKEN` (case-sensitive)?  
- ✅ Workflow references `${{ secrets.DEPLOY_TOKEN }}`?  
- ✅ PAT has access to **destination public repo**?  
- ⚠️ If push fails with `permission denied` → recreate PAT with `repo` access.

---

### 🌐 Example Success Screen

When everything’s configured correctly:

```text
✅ Build complete
🚀 Deployed to gh-pages branch
🌍 Live at: https://hrutviatri.github.io/DevOps-Interview-Guide/
```




---
</details> </div>













































<h1> 🧠 Development Guide</h1>






<div style="border: 1px solid #015c58ff; border-radius: 8px; padding: 10px; margin: 10px 0;">
<details>
<summary style="display: flex; align-items: center; font-size: 1.2em; font-weight: bold; cursor: pointer;">
<span style="display:inline-block; transform-origin:center; transition:transform .22s;color:#9bd1ff;">▶ &nbsp; &nbsp;</span>
  🛠️ LOCAL SETUP
</summary> 

### Follow these steps to run the app locally and understand what to change for local vs GitHub Pages deployment.

**Prerequisites**
- Node.js v16+ (recommend v18) and npm
- Git
- (Optional) `pnpm` or `yarn` if you prefer

**1) Clone the repo**
```bash
git clone https://github.com/hrutviatri/DevOps-Interview-Guide-Source-Code.git
cd DevOps-Interview-Guide-Source-Code
```

**2) Install dependencies**
```bash
npm ci
```

**3) Configure `vite.config.ts` for local development vs GitHub Pages**
By default the repo uses a `base` suitable for GitHub Pages:
```ts
// current shipped config (for GH Pages)
base: "/DevOps-Interview-Guide/", // replace with your repo name for GH Pages
```

For local development you have two options:

**Option A (quick edit)** — temporarily change `base` to `/`:
```ts
base: "/",
```

**Option B (recommended) — use a conditional base based on mode**  
Replace the `base` line with the following snippet in `vite.config.ts` so local dev works without manual edits:

```ts
const repoName = "/DevOps-Interview-Guide/"; // <-- replace with your GitHub repo name when deploying

export default defineConfig(({ mode }) => {
  const base = mode === "development" ? "/" : repoName;
  return {
    base,
    // ...rest of config
  };
});
```

This way `npm run dev` will serve at `/` and production builds will keep the GitHub Pages base.

**4) Start the dev server**
```bash
npm run dev
```
- Default host & port in this project: `host: "::"` (binds to all interfaces), `port: 8080`
- Open in browser: `http://localhost:8080` or `http://<your-local-ip>:8080` (useful for testing from other devices on the network)

**Change port (two ways)**

- Edit `vite.config.ts`:
```ts
server: { host: "::", port: 3000 }
```
then run `npm run dev` and open `http://localhost:3000`.

- Or run with CLI override:
```bash
npx vite --port 3000
```

**5) Build & Preview (local preview of production build)**
```bash
npm run build
npm run preview
```
- By default `vite preview` serves on port `5173`. To use port `8080`, add a script:
```json
"scripts": {
  "preview:8080": "vite preview --port 8080"
}
```
then run:
```bash
npm run preview:8080
```

**6) Serve the static `dist` folder (alternative)**
Install a simple static server and serve build:
```bash
npm i -g serve
serve -s dist -l 8080
```
Open `http://localhost:8080`.

**7) What to change for GitHub Pages deployment**
- Ensure `base` in `vite.config.ts` equals `"/<your-public-repo-name>/"`. Example:
```ts
base: "/DevOps-Interview-Guide/",
```
- Build the site `npm run build` and push the `dist` to the `gh-pages` branch (via GitHub Actions or manual push).

**8) Example `package.json` scripts (recommended)**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "preview:8080": "vite preview --port 8080"
}
```

**9) Environment variables (if used)**
- Vite exposes env vars prefixed with `VITE_`. Create `.env` files:
```
VITE_API_URL=https://api.example.com
```
- Access in app: `import.meta.env.VITE_API_URL`

**10) Troubleshooting**
- 404 on refresh (GitHub Pages): SPA routing needs fallback. Use HashRouter or set up a `404.html` redirect to `index.html`.
- Wrong asset paths: Ensure `base` is correct for production builds.
- CSS not loading: Clear service worker or cache; confirm assets are in `dist` and paths match `base`.
- Port in use: change `server.port` or kill process using that port.

---
</details> </div>

















<div style="border: 1px solid #515c01ff; border-radius: 8px; padding: 10px; margin: 10px 0;">

<details>
<summary style="display: flex; align-items: center; font-size: 1.2em; font-weight: bold; cursor: pointer;">
<span style="display:inline-block; transform-origin:center; transition:transform .22s;color:#9bd1ff;">▶ &nbsp; &nbsp;</span>
  🛠️ DEPLOY WEBSITE ON LOCALLY - IIS WEB SERVER
</summary> 

### Follow these steps to run the app locally and understand How to deploy website on local IIS Web Server

**Prerequisites**
- Node.js v16+ (recommend v18) and npm
- Git
- (Optional) `pnpm` or `yarn` if you prefer

**1) Clone the repo**
```bash
git clone https://github.com/hrutviatri/DevOps-Interview-Guide-Source-Code.git
cd DevOps-Interview-Guide-Source-Code
```

**2) Install dependencies**
```ts
npm install 
// from this command , node_module folder will made at curent path, form where you run this command. 
```

**3) Configure `vite.config.ts` for local development vs GitHub Pages**
By default the repo uses a `base` suitable for GitHub Pages:
```ts
// remove or comment out this line
base: "/DevOps-Interview-Guide/"
```
**4) Build the artifacts from our code**
```bash
npm run build
```
This way `npm run build` will serve at our site to with the help or IIS Webserver.


**4) From this build, a folder made named as dist**
```ts
In this dist named folder , there is our artifacts.
Go to dist folder and copy all the data from there to directory(C:\inetpub\wwwroot)  
```
- Default host & port in this project: `host: "::"` (binds to all interfaces), `port: 80`
- Open in browser: `http://<your-local-ip>:80`  (useful for testing from other devices on the same network)
- Open in browser: `http://localhost:80` or `http://localhost`  (useful for testing from same devices )

**Start Your Website from Internet Information Services (IIS) Manager**

- Edit `vite.config.ts`:
```ts
server: { host: "::", port: 3000 }
```
then run `npm run dev` and open `http://localhost:3000`.

- Or run with CLI override:
```bash
npx vite --port 3000
```

**5) Build & Preview (local preview of production build)**
```bash
npm run build
npm run preview
```
- By default `vite preview` serves on port `5173`. To use port `8080`, add a script:
```json
"scripts": {
  "preview:8080": "vite preview --port 8080"
}
```
then run:
```bash
npm run preview:8080
```

**6) Serve the static `dist` folder (alternative)**
Install a simple static server and serve build:
```bash
npm i -g serve
serve -s dist -l 8080
```
Open `http://localhost:8080`.

**7) What to change for GitHub Pages deployment**
- Ensure `base` in `vite.config.ts` equals `"/<your-public-repo-name>/"`. Example:
```ts
base: "/DevOps-Interview-Guide/",
```
- Build the site `npm run build` and push the `dist` to the `gh-pages` branch (via GitHub Actions or manual push).

**8) Example `package.json` scripts (recommended)**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "preview:8080": "vite preview --port 8080"
}
```

**9) Environment variables (if used)**
- Vite exposes env vars prefixed with `VITE_`. Create `.env` files:
```
VITE_API_URL=https://api.example.com
```
- Access in app: `import.meta.env.VITE_API_URL`

**10) Troubleshooting**
- 404 on refresh (GitHub Pages): SPA routing needs fallback. Use HashRouter or set up a `404.html` redirect to `index.html`.
- Wrong asset paths: Ensure `base` is correct for production builds.
- CSS not loading: Clear service worker or cache; confirm assets are in `dist` and paths match `base`.
- Port in use: change `server.port` or kill process using that port.
---
</details> </div>






















<div style="border: 1px solid #5c4101ff; border-radius: 8px; padding: 10px; margin: 10px 0;">

<details>
<summary style="display: flex; align-items: center; font-size: 1.2em; font-weight: bold; cursor: pointer;">
<span style="display:inline-block; transform-origin:center; transition:transform .22s;color:#9bd1ff;">▶ &nbsp; &nbsp;</span>
  🛠️ DEPLOY WEBSITE ON DOCKER CONTAINER
</summary> 

### Follow these steps to build the app locally and run app on docker container

**Prerequisites**
- Node.js v16+ (recommend v18) and npm
- Git
- (Optional) `pnpm` or `yarn` if you prefer

**1) Clone the repo**
```bash
git clone https://github.com/hrutviatri/DevOps-Interview-Guide-Source-Code.git
cd DevOps-Interview-Guide-Source-Code
```

**2) Install dependencies**
```ts
npm install 
// from this command , node_module folder will made at curent path, form where you run this command. 
```

**3) Configure `vite.config.ts` for local development vs GitHub Pages**
By default the repo uses a `base` suitable for GitHub Pages:
```ts
// remove or comment out this line
base: "/DevOps-Interview-Guide/"
```

**4) Build the artifacts from our code**
```ts
npm run build
// from this command , our dist folder made, which contains all our artifacts files/folders
```

**4) From this build, a folder made named as dist**
```ts
In this dist named folder , there is our artifacts.
Go to dist folder and copy all the data from there to docker container  
```

```ts
docker cp <source_path_on_host> <container_name_or_id>:<destination_path_in_container> 


PS C:\Users\admin> cd E:\
PS E:\docker> docker cp dist/. QuesAnsGuide:/use/share/nginx/html/
```

- Now go to docker and do further process that we does in our docker

**HOst Your Website from Docker container now...**
</details> </div>












## 🧩 Key Features

✅ Modular React + TypeScript structure  
✅ Topic-based JSON-driven architecture  
✅ Fully automated CI/CD to public repo  
✅ GitHub Pages deployment  
✅ Developer-friendly local environment  

---

## 🧭 Repository Roles

| Repo | Purpose | Visibility |
|------|----------|-------------|
| 🔒 `DevOps-Interview-Guide-Source-Code` | Source code, CI/CD pipeline | Private |
| 🌐 `DevOps-Interview-Guide` | Static site build for GitHub Pages | Public |

---

## 👨‍💻 Author

**_[Ritesh Sharma](https://www.linkedin.com/in/hrutviatri/)_**  
💼 *DevOps Engineer | Azure | Terraform | CI/CD | Docker | Kubernetes*  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hrutviatri/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hrutviatri)

---

## 📜 License
This project is licensed under the **MIT License**.  
You are free to use and modify for educational and personal purposes.

---

> 🧩 *“Code privately. Deploy publicly. Automate everything.”*

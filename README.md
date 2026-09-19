# Studio Manju Sri — Photography Studio Website

Official website for **Studio Manju Sri**, an editorial wedding and portrait photography studio in Arrah, Bihar.

---

## 🚀 How to Deploy to GitHub Pages ("Deploy from a branch")

This repository is already configured with a browser-ready, static deployment at the repository root. You do **not** need GitHub Actions, Node.js, or any build setup on GitHub.

### Step 1: Upload / Push Files to Your GitHub Repository
Push all files in this project to the `main` branch:
```bash
git init
git add .
git commit -m "Deploy Studio Manju Sri website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Open your repository on GitHub.
2. Go to **Settings** → **Pages** (under "Code and automation" in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
4. Click **Save**.

Within 1-2 minutes, your website is live at:
`https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`

---

## 🛠 Local Development & Rebuilding

If you wish to edit the source code and rebuild:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Rebuild static files for GitHub Pages
npm run build
```
Running `npm run build` will automatically recompile from `src/` and update the production `index.html` and `assets/` at the repository root.

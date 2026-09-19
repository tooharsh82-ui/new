import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourceHtmlPath = path.join(rootDir, 'index.source.html');
const rootHtmlPath = path.join(rootDir, 'index.html');
const distDir = path.join(rootDir, 'dist');
const distHtmlPath = path.join(distDir, 'index.html');
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');
const noJekyllPath = path.join(rootDir, '.nojekyll');

console.log('🚀 [Build] Preparing source template from index.source.html...');

if (!fs.existsSync(sourceHtmlPath)) {
  throw new Error('index.source.html not found! Please ensure index.source.html exists.');
}

// 1. Temporarily place source HTML at root so Vite compiles all modules from /src/main.tsx
fs.copyFileSync(sourceHtmlPath, rootHtmlPath);

try {
  // 2. Run Vite build
  console.log('📦 [Build] Compiling production bundle with Vite...');
  execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });

  // 3. Verify dist was built
  if (!fs.existsSync(distHtmlPath)) {
    throw new Error('Build failed: dist/index.html was not generated.');
  }

  // 4. Overwrite root index.html with the compiled production-ready HTML
  console.log('📄 [Build] Placing compiled production index.html at repository root for GitHub Pages...');
  fs.copyFileSync(distHtmlPath, rootHtmlPath);

  // 5. Sync dist/assets to root assets/
  console.log('📂 [Build] Syncing compiled assets to repository root assets/...');
  if (fs.existsSync(distAssetsDir)) {
    // Clear existing assets in root assets dir to prevent stale hashed bundles
    fs.rmSync(rootAssetsDir, { recursive: true, force: true });
    fs.cpSync(distAssetsDir, rootAssetsDir, { recursive: true });
  }

  // 6. Create .nojekyll at repository root
  fs.writeFileSync(noJekyllPath, '', 'utf8');

  console.log('✅ [Build] Success! Repository root is now a production-ready static site for GitHub Pages.');
} catch (error) {
  console.error('❌ [Build Error]:', error);
  // Restore source HTML in case of error
  fs.copyFileSync(sourceHtmlPath, rootHtmlPath);
  process.exit(1);
}

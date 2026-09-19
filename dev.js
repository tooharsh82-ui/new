import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const sourceHtmlPath = path.join(rootDir, 'index.source.html');
const rootHtmlPath = path.join(rootDir, 'index.html');

if (fs.existsSync(sourceHtmlPath)) {
  fs.copyFileSync(sourceHtmlPath, rootHtmlPath);
}

const child = spawn('npx', ['vite', '--port=3000', '--host=0.0.0.0'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

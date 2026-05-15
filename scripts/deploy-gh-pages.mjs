import { cpSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'dist', 'luxe-dental', 'browser');
const deployDir = join(root, '.gh-pages-deploy');

execSync('npm run build', { cwd: root, stdio: 'inherit' });

if (!existsSync(join(outDir, 'index.html'))) {
  console.error('Build failed: index.html not found in', outDir);
  process.exit(1);
}

cpSync(join(outDir, 'index.html'), join(outDir, '404.html'));

rmSync(deployDir, { recursive: true, force: true });
cpSync(outDir, deployDir, { recursive: true });

const remote = execSync('git remote get-url origin', { cwd: root, encoding: 'utf8' }).trim();

execSync('git init -b gh-pages', { cwd: deployDir, stdio: 'inherit' });
execSync('git add -A', { cwd: deployDir, stdio: 'inherit' });
execSync('git commit -m "Deploy site to GitHub Pages"', { cwd: deployDir, stdio: 'inherit' });
execSync(`git remote add origin "${remote}"`, { cwd: deployDir, stdio: 'inherit' });
execSync('git push -f origin gh-pages', { cwd: deployDir, stdio: 'inherit' });

rmSync(deployDir, { recursive: true, force: true });

console.log('\nPublished to branch gh-pages.');
console.log('GitHub → Settings → Pages → Deploy from branch → gh-pages → / (root)');

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const htmlPath = path.join(dist, 'index.html');
const entryPath = path.join(dist, 'server', 'entry-server.js');

if (!fs.existsSync(htmlPath) || !fs.existsSync(entryPath)) {
  throw new Error('Faltan archivos de build.');
}

const { render } = await import(pathToFileURL(entryPath).href);

const html = fs.readFileSync(htmlPath, 'utf8');

if (!html.includes('<!--app-html-->')) {
  throw new Error('Falta el marcador <!--app-html-->.');
}

// Página principal
const homeHtml = html.replace('<!--app-html-->', render('/'));
fs.writeFileSync(htmlPath, homeHtml, 'utf8');

// Página Nosotros
const nosotrosDir = path.join(dist, 'nosotros');
fs.mkdirSync(nosotrosDir, { recursive: true });

const nosotrosHtml = html.replace(
  '<!--app-html-->',
  render('/nosotros')
);

fs.writeFileSync(
  path.join(nosotrosDir, 'index.html'),
  nosotrosHtml,
  'utf8'
);

fs.rmSync(path.join(dist, 'server'), {
  recursive: true,
  force: true
});

console.log('HTML prerenderizado correctamente:');
console.log('- dist/index.html');
console.log('- dist/nosotros/index.html');
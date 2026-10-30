import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const htmlPath = path.join(root, 'dist', 'index.html');
const entryPath = path.join(root, 'dist', 'server', 'entry-server.js');
if (!fs.existsSync(htmlPath) || !fs.existsSync(entryPath)) throw new Error('Faltan archivos de build.');
const { render } = await import(pathToFileURL(entryPath).href);
const html = fs.readFileSync(htmlPath, 'utf8');
if (!html.includes('<!--app-html-->')) throw new Error('Falta el marcador <!--app-html-->.');
fs.writeFileSync(htmlPath, html.replace('<!--app-html-->', render()), 'utf8');
fs.rmSync(path.join(root, 'dist', 'server'), { recursive: true, force: true });
console.log('HTML prerenderizado correctamente en dist/index.html');
# PRISCILLA ATELIER — React + Vite + Tailwind CSS 4

## Desarrollo
Requisitos: Node.js 20+ y npm.

```bash
npm install
npm run dev
```

## Build estático con prerenderizado
```bash
npm run build
npm run preview
```

El build genera los recursos cliente y renderiza React a HTML dentro de `dist/index.html`.
Sube **el contenido de `dist/`** al document root del dominio en cPanel. No necesitas Node ejecutándose en producción.

## Antes de publicar
- Reemplaza `https://www.ejemplo.com` por el dominio real en `index.html`, `public/robots.txt` y `public/sitemap.xml`.
- Añade fotografías reales y autorizadas a `public/images/`: `hero-priscilla.webp`, `proyecto-01.webp`, `proyecto-02.webp`, `proyecto-03.webp`.
- Incorpora el logotipo oficial en formato adecuado.
- Añade las tipografías Alina y Century Gothic solo si tienes archivos y licencias para web; de momento hay fuentes de respaldo.
- Configura el WhatsApp oficial en `src/App.jsx`.
- Revisa textos y datos comerciales con el cliente.
- La versión actual prerenderiza la página de inicio; para ampliar a URLs independientes se debe generar HTML y metadatos propios para cada ruta.

## Paleta oficial (no modificar)
`#181817` `#95918F` `#E8E2DC` `#284A49` `#79324C`

# Matias Guajardo Palacios — Portafolio

Portafolio personal de **Matias Guajardo Palacios**, Desarrollador Full Stack y aspirante a Arquitecto de Software.

Estilo oriental en contenedor oscuro: negros profundos, blanco papel y rojos suaves de cerezo (sakura). Construido con Next.js (App Router), React 19, TypeScript y Tailwind CSS v4.

## Stack

- Next.js 16 (static export)
- React 19
- TypeScript
- Tailwind CSS v4
- next/font (Manrope, Noto Serif JP, JetBrains Mono) — self-hosted
- SEO: metadata, OpenGraph, Twitter Cards, JSON-LD (Person), sitemap, robots, manifest

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy a GitHub Pages

El proyecto está configurado para publicarse como **project page** con
`basePath: /matias-guajardo-portfolio` en producción. En desarrollo
(`npm run dev`) el `basePath` se desactiva y el sitio corre en `/`.

Hay dos formas de publicar; ambas compilan el static export en `out/` y lo
suben a la rama `gh-pages` con `gh-pages`.

### Manual

```bash
npm run deploy
```

### Con GitHub Actions (recomendado)

El workflow `.github/workflows/deploy.yml` hace el build y publica con
`npm run deploy` usando `GITHUB_TOKEN` (no necesitas tokens manuales).

1. Sube el código a GitHub (rama `master`):

   ```bash
   git remote add origin https://github.com/MisterGuajardo/portfolio.git
   git push -u origin master
   ```

2. En GitHub, en **Actions**, ejecuta el workflow **"Deploy a GitHub Pages"** con
   el botón *Run workflow* (deploy manual).
3. En Settings → Pages, elige *Deploy from a branch* → `gh-pages`.

> Nota: si el repositorio final se llama distinto a `portfolio` (por ejemplo
> `matias-guajardo-portfolio`), actualiza `basePath` y `url` en
> `next.config.ts` y `src/lib/site.ts` para que coincidan con la URL real.

## Datos a personalizar

- **`src/lib/site.ts`**: email, LinkedIn y enlaces sociales (ya actualizados con el CV).
- **`public/matias-guajardo-cv.pdf`**: reemplaza por tu CV real (el actual es un placeholder válido).
- **`src/components/Sections.tsx`**: edita `EXPERIENCE`, `SKILLS`, `PROJECTS` y `EDUCATION` con tus datos reales.
- **`src/components/SakuraTree.tsx` / `Torii.tsx`**: ajusta forma y tono de los árboles de cerezo y la puerta torii.

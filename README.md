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

1. Crea el repositorio en GitHub: `MisterGuajardo/matias-guajardo-portfolio`
   (puede ser privado; en Settings → Pages, elige *Deploy from a branch* → `gh-pages`).
2. Conecta el remoto:

   ```bash
   git remote add origin https://github.com/MisterGuajardo/matias-guajardo-portfolio.git
   git add -A && git commit -m "Portafolio inicial"
   git push -u origin main
   ```

3. Publica (compila el static export en `out/` y lo sube a la rama `gh-pages`):

   ```bash
   npm run deploy
   ```

El sitio quedará disponible en:
`https://misterguajardo.github.io/matias-guajardo-portfolio/`

## Datos a personalizar

- **`src/lib/site.ts`**: email, LinkedIn y enlaces sociales (ya actualizados con el CV).
- **`public/matias-guajardo-cv.pdf`**: reemplaza por tu CV real (el actual es un placeholder válido).
- **`src/components/Sections.tsx`**: edita `EXPERIENCE`, `SKILLS`, `PROJECTS` y `EDUCATION` con tus datos reales.
- **`src/components/SakuraTree.tsx` / `Torii.tsx`**: ajusta forma y tono de los árboles de cerezo y la puerta torii.

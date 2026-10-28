# casestudy_Sensive — imágenes y vídeos del case study

Página: `../../casestudy_Sensive.html` · Origen: `mono.cases/cases_psd/` (copias optimizadas; los originales no se tocan).
Actualizado: 2026-10-15.

- El tamaño del hueco lo manda el frame de Figma (Desktop 1440 / Mobile 360), no el archivo:
  Figma FILL = `background-size:cover` / `object-fit:cover` centrado (ver `xlogClaude/figma-fill-imagenes.md`).
- Export: 2× el tamaño máximo en pantalla (página a 1920) sin pasar del original. Opacas → WebP q84 o JPG q85
  (el más ligero); con alfa → WebP q92; GIF grande → MP4 H.264 (crf 24-25, sin audio, faststart) + poster JPG
  del primer frame; GIF pequeño → WebP animado.
- Para reemplazar una pieza: mismo nombre de archivo. Las rutas viven en el bloque `9 · ASSETS` de la página.

| Archivo | Bloque | Peso | Tamaño |
|---|---|---|---|
| `sensive-saas-onboarding-illustration-mobile.webp` | Hero (B01) · mobile | 29 KB | 1000×1056 |
| `sensive-saas-onboarding-illustration.webp` | Hero (B01) · desktop | 31 KB | 1920×1080 |
| `sensive-character-welcome-1.webp` | 7.4 Character System (B11) | 33 KB | 1000×988 |
| `sensive-character-welcome-2.webp` | 7.4 Character System (B11) | 31 KB | 1000×988 |
| `sensive-illustration-design-components.webp` | 7.5 Illustration System (B12) | 21 KB | 1400×788 |
| `sensive-illustration-team.webp` | 7.5 Illustration System (B12) | 47 KB | 1400×788 |
| `sensive-illustration-laptops.webp` | 7.5 Illustration System (B12) | 41 KB | 1400×788 |
| `sensive-product-illustrations.webp` | 7.6 In the Product (B10 modified) | 19 KB | 1400×663 |
| `sensive-illustration-gift.webp` | 7.8 Outcome (B02) | 50 KB | 1400×788 |

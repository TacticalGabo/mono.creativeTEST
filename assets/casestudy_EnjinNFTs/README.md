# casestudy_EnjinNFTs — imágenes y vídeos del case study

Página: `../../casestudy_EnjinNFTs.html` · Origen: `mono.cases/cases_psd/` (copias optimizadas; los originales no se tocan).
Actualizado: 2026-10-15.

- El tamaño del hueco lo manda el frame de Figma (Desktop 1440 / Mobile 360), no el archivo:
  Figma FILL = `background-size:cover` / `object-fit:cover` centrado (ver `xlogClaude/figma-fill-imagenes.md`).
- Export: 2× el tamaño máximo en pantalla (página a 1920) sin pasar del original. Opacas → WebP q84 o JPG q85
  (el más ligero); con alfa → WebP q92; GIF grande → MP4 H.264 (crf 24-25, sin audio, faststart) + poster JPG
  del primer frame; GIF pequeño → WebP animado.
- Para reemplazar una pieza: mismo nombre de archivo. Las rutas viven en el bloque `9 · ASSETS` de la página.

| Archivo | Bloque | Peso | Tamaño |
|---|---|---|---|
| `enjin-nft-collectible-illustrations-mobile.webp` | Hero (B01) · mobile | 167 KB | 1000×1056 |
| `enjin-nft-collectible-illustrations.webp` | Hero (B01) · desktop | 280 KB | 1920×1080 |
| `03-grid-01.mp4` | 3.6 Final Decision (B10) | 1363 KB | 1000×1000 (vídeo, poster `enjin-nft-anime-gamer-girl.webp`) |
| `03-grid-02.mp4` | 3.6 Final Decision (B10) | 2117 KB | 1000×1000 (vídeo, poster `enjin-nft-anime-gamer-night.jpg`) |
| `03-grid-03.mp4` | 3.6 Final Decision (B10) | 428 KB | 1000×1000 (vídeo, poster `enjin-nft-halloween-zombie.jpg`) |
| `03-grid-04.mp4` | 3.6 Final Decision (B10) | 391 KB | 1000×1000 (vídeo, poster `enjin-nft-halloween-pirate.jpg`) |
| `03-grid-05.mp4` | 3.6 Final Decision (B10) | 400 KB | 1000×1000 (vídeo, poster `enjin-nft-halloween-queen.jpg`) |
| `enjin-nft-cat-pharaoh.webp` | 3.6 Final Decision (B10) | 62 KB | 808×808 |
| `enjin-nft-cat-beret.webp` | 3.6 Final Decision (B10) | 44 KB | 808×808 |
| `enjin-nft-cat-horns.webp` | 3.6 Final Decision (B10) | 34 KB | 808×808 |
| `enjin-nft-cat-visor.webp` | 3.6 Final Decision (B10) | 40 KB | 808×808 |
| `enjin-nft-pixel-art-1.webp` | 3.6 Final Decision (B10) | 194 KB | 1000×1000 animado |
| `enjin-nft-pixel-art-2.webp` | 3.6 Final Decision (B10) | 186 KB | 1000×1000 animado |
| `enjin-nft-pixel-art-3.webp` | 3.6 Final Decision (B10) | 222 KB | 1000×1000 animado |
| `enjin-nft-pixel-art-4.webp` | 3.6 Final Decision (B10) | 190 KB | 1000×1000 animado |
| `enjin-nft-pixel-art-5.webp` | 3.6 Final Decision (B10) | 192 KB | 1000×1000 animado |
| `enjin-nft-pixel-art-6.webp` | 3.6 Final Decision (B10) | 191 KB | 1000×1000 animado |
| `enjin-nft-bear-tropical.webp` | 3.6 Final Decision (B10) | 52 KB | 1000×1000 |
| `enjin-nft-bear-tuxedo.webp` | 3.6 Final Decision (B10) | 37 KB | 1000×1000 |
| `enjin-nft-bear-market.webp` | 3.6 Final Decision (B10) | 26 KB | 1000×1000 |
| `enjin-nft-macaque-orange-suit.webp` | 3.6 Final Decision (B10) | 49 KB | 808×808 |
| `enjin-nft-macaque-pipe.webp` | 3.6 Final Decision (B10) | 37 KB | 808×808 |
| `enjin-nft-macaque-golden.webp` | 3.6 Final Decision (B10) | 42 KB | 808×808 |
| `enjin-nft-macaque-robe.webp` | 3.6 Final Decision (B10) | 43 KB | 808×808 |
| `enjin-nft-cyborg.webp` | 3.6 Final Decision (B10) | 38 KB | 808×808 |
| `enjin-nft-scifi-woman.webp` | 3.6 Final Decision (B10) | 35 KB | 808×808 |
| `enjin-nft-robot.webp` | 3.6 Final Decision (B10) | 21 KB | 808×808 |
| `enjin-nft-astronaut.webp` | 3.6 Final Decision (B10) | 32 KB | 808×808 |
| `03-grid-27.mp4` | 3.6 Final Decision (B10) | 112 KB | 808×808 (vídeo, poster `enjin-nft-masked-circle.webp`) |
| `03-grid-28.mp4` | 3.6 Final Decision (B10) | 112 KB | 808×808 (vídeo, poster `enjin-nft-masked-square.webp`) |
| `03-grid-29.mp4` | 3.6 Final Decision (B10) | 105 KB | 808×808 (vídeo, poster `enjin-nft-masked-triangle.webp`) |
| `03-grid-30.mp4` | 3.6 Final Decision (B10) | 1117 KB | 808×808 (vídeo, poster `enjin-nft-hooded-figure.webp`) |
| `05-grid-31.mp4` | 3.6 Final Decision (B10) | 216 KB | 1000×1000 (vídeo, poster `enjin-nft-wallet-beta-badge.webp`) |
| `05-grid-32.mp4` | 3.6 Final Decision (B10) | 466 KB | 1024×1024 (vídeo, poster `enjin-nft-blobby-christmas.webp`) |
| `05-grid-33.mp4` | 3.6 Final Decision (B10) | 168 KB | 1000×1000 (vídeo, poster `enjin-nft-pixel-coin-badge.webp`) |
| `05-grid-34.mp4` | 3.6 Final Decision (B10) | 192 KB | 1000×1000 (vídeo, poster `enjin-nft-partner-badge-blue.webp`) |
| `enjin-nft-blobby-candy.webp` | 3.6 Final Decision (B10) | 84 KB | 1000×1000 |
| `05-grid-36.mp4` | 3.6 Final Decision (B10) | 1237 KB | 1000×1000 (vídeo, poster `enjin-nft-partner-badge-purple.webp`) |
| `enjin-nft-polar-bear-coin.webp` | 3.6 Final Decision (B10) | 45 KB | 1000×1000 |
| `enjin-nft-penguin-coin.webp` | 3.6 Final Decision (B10) | 47 KB | 1000×1000 |
| `enjin-nft-cricket-batsman.webp` | 3.6 Final Decision (B10) | 38 KB | 808×808 |
| `enjin-nft-cricket-fielder.webp` | 3.6 Final Decision (B10) | 32 KB | 808×808 |
| `enjin-nft-cricket-bowler.webp` | 3.6 Final Decision (B10) | 30 KB | 808×808 |
| `enjin-nft-cricket-keeper.webp` | 3.6 Final Decision (B10) | 29 KB | 808×808 |
| `05-grid-43.mp4` | 3.6 Final Decision (B10) | 326 KB | 1000×1000 (vídeo, poster `enjin-nft-tiger-new-year-1.webp`) |
| `05-grid-44.mp4` | 3.6 Final Decision (B10) | 367 KB | 1000×1000 (vídeo, poster `enjin-nft-tiger-new-year-2.webp`) |
| `05-grid-45.mp4` | 3.6 Final Decision (B10) | 358 KB | 1000×1000 (vídeo, poster `enjin-nft-tiger-new-year-3.webp`) |
| `enjin-nft-neon-hooded-1.webp` | 3.6 Final Decision (B10) | 90 KB | 1000×1000 |
| `enjin-nft-neon-hooded-2.webp` | 3.6 Final Decision (B10) | 97 KB | 1000×1000 |

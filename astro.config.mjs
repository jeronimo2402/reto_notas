// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 'server': las páginas se generan en cada petición, así /reporte lee PostgreSQL en vivo.
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()],
    // En Docker sobre Windows los cambios de archivos no llegan al contenedor sin polling.
    server: { watch: { usePolling: true } },
  },
});

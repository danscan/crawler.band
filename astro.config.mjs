// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
	adapter: vercel(),
	output: 'static',
	server: { host: true },
  vite: { server: { allowedHosts: true } },
});
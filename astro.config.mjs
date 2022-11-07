import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [preact(),     sitemap({
      filter: (page) => 
			page !== 'https://blog.jeppzone.com/posts/my-carnivore-diaries' && 
			page !== 'https://blog.jeppzone.com/hot-and-cold-therapy' && 
			page !== 'https://blog.jeppzone.com/time-restricted-eating'
    }),],
	site: `https://blog.jeppzone.com`,
});

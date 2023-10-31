import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node'

// https://astro.build/config
/** @type {import("astro").defineConfig } */
export default defineConfig({
    output : 'server',
    adapter : nodejs({
        mode: 'standalone' 
      })
});
// import adapter from '@sveltejs/adapter-node';
// // import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// // const dev = process.argv.includes('dev');

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: vitePreprocess(),
	
// 	kit: {
// 		appDir: 'App',
		
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: undefined,
// 			precompress: false,
// 			strict: true
// 		}),

// 		paths: {
// 			base: process.env.NODE_ENV === 'production' ? '/5photos' : process.env.BASE_PATH,
// 		}
// 	},


// };

// export default config;

import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter()
	}
};
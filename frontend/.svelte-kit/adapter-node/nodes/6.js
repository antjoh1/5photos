import * as server from '../entries/pages/uploadPost/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/uploadPost/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/uploadPost/+page.server.js";
export const imports = ["_app/immutable/nodes/6.CQdXcl1b.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/PglI5o85.js","_app/immutable/chunks/BYfJyGK5.js","_app/immutable/chunks/ehbMLAtO.js","_app/immutable/chunks/CNuWdYxJ.js"];
export const stylesheets = ["_app/immutable/assets/6.yuHyt8sD.css"];
export const fonts = [];

import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.ByGS7ELx.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/DIkiOp1w.js","_app/immutable/chunks/PglI5o85.js","_app/immutable/chunks/BYfJyGK5.js","_app/immutable/chunks/ehbMLAtO.js","_app/immutable/chunks/PKv2Hnb5.js","_app/immutable/chunks/CNuWdYxJ.js","_app/immutable/chunks/CMPQAxMG.js","_app/immutable/chunks/SH07ChxB.js"];
export const stylesheets = ["_app/immutable/assets/3.CzuG2tXo.css"];
export const fonts = [];

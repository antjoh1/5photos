import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.Cz17v568.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/PglI5o85.js","_app/immutable/chunks/BYfJyGK5.js","_app/immutable/chunks/ehbMLAtO.js","_app/immutable/chunks/PKv2Hnb5.js","_app/immutable/chunks/DIkiOp1w.js","_app/immutable/chunks/CMPQAxMG.js","_app/immutable/chunks/DGqQhel-.js","_app/immutable/chunks/Bj9QM52Q.js","_app/immutable/chunks/i1nG3lUa.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/SH07ChxB.js","_app/immutable/chunks/CNuWdYxJ.js","_app/immutable/chunks/uDNXmOHQ.js"];
export const stylesheets = ["_app/immutable/assets/0.B_ddWl1O.css","_app/immutable/assets/app.BUBMWElM.css"];
export const fonts = [];

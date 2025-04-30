import * as universal from '../entries/pages/reachMe/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reachMe/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/reachMe/+page.js";
export const imports = ["_app/immutable/nodes/5.LPSHDq2i.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/B-MBzdgf.js","_app/immutable/chunks/DIkiOp1w.js","_app/immutable/chunks/PglI5o85.js","_app/immutable/chunks/uDNXmOHQ.js","_app/immutable/chunks/ehbMLAtO.js","_app/immutable/chunks/DGqQhel-.js"];
export const stylesheets = ["_app/immutable/assets/5.C6m24EC7.css"];
export const fonts = [];

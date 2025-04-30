import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DyVYy4ca.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/SH07ChxB.js","_app/immutable/chunks/CNuWdYxJ.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/B-MBzdgf.js"];
export const stylesheets = ["_app/immutable/assets/2.Af9-t7Pd.css","_app/immutable/assets/app.BUBMWElM.css"];
export const fonts = [];

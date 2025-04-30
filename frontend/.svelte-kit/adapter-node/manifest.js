export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","Isar/photo1.jpg","Isar/photo2.jpg","Isar/photo3.jpg","Isar/photo4.jpg","Isar/photo5.jpg","Morso/photo1.jpg","Morso/photo2.jpg","Morso/photo3.jpg","Morso/photo4.jpg","Morso/photo5.jpg","Prague/photo1.jpg","Prague/photo2.jpg","Prague/photo3.jpg","Prague/photo4.jpg","Prague/photo5.jpg","favicon.png","favicon.svg","instagramLogo.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.dEn_D1dm.js",app:"_app/immutable/entry/app.Di-9-f5M.js",imports:["_app/immutable/entry/start.dEn_D1dm.js","_app/immutable/chunks/i1nG3lUa.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/DGqQhel-.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CMPQAxMG.js","_app/immutable/entry/app.Di-9-f5M.js","_app/immutable/chunks/BX49FQ4v.js","_app/immutable/chunks/DIkiOp1w.js","_app/immutable/chunks/PglI5o85.js","_app/immutable/chunks/BPQ8Vvbp.js","_app/immutable/chunks/BYfJyGK5.js","_app/immutable/chunks/CNuWdYxJ.js","_app/immutable/chunks/CMPQAxMG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/reachMe",
				pattern: /^\/reachMe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/uploadPost",
				pattern: /^\/uploadPost\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";
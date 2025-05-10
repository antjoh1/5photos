// This can be false if you're using a fallback (i.e. SPA mode)
// export const prerender = true;

import photoBatches from "$lib/assets/photoData.json";
import { userState } from "./state.svelte.js";
import { PUBLIC_BACKEND_URL } from "$env/static/public";


// console.log("this is layout server page")

export async function load ({ url }) {
    let entries = []
    let entriesList = /** @type {string[]} */ ([])
    console.log(PUBLIC_BACKEND_URL, 'this is in layour server js')
    const res = await fetch(`${PUBLIC_BACKEND_URL}/images/listBatches`, { method: 'GET', mode: 'cors' })
    const batches_json = await res.json()


    for (let entry of batches_json) { 
        entries.push({ slug: entry.replace(/\s/g, '')})
        entriesList.push(entry)
    }

    // console.log(entriesList, entries)

    return { 
        url: url.pathname,
        batches: entriesList
    }
}

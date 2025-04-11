// This can be false if you're using a fallback (i.e. SPA mode)
// export const prerender = true;

import photoBatches from "$lib/assets/photoData.json";
import { userState } from "./state.svelte.js";

console.log("this is layout server page")

export async function load ({ url }) {
    let entries = []
    let entriesList = /** @type {string[]} */ ([])
    // console.log('entries() function ran')
    const res = await fetch('http://127.0.0.1:8000/images/listBatches', { method: 'GET' })
    const batches_json = await res.json()

    console.log('this is where layoutserverjs does stuff', batches_json)

    for (let entry of batches_json) { 
        entries.push({ slug: entry.replace(/\s/g, '')})
        entriesList.push(entry)
    }

    // userState.batches = /** @type {string[]} */ (entriesList);

    console.log(entriesList, entries)

    return { 
        url: url.pathname,
        batches: entriesList
    }
}

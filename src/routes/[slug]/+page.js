import { error } from '@sveltejs/kit'
import { photoBatches } from '$lib/assets/photoData.js'
import { base } from '$service-worker';

export function load ( { params }) {
    let chosenBatch = photoBatches.find((batch) => batch.date.replace(/\s/g, '') === params.slug);

    if (!chosenBatch) error (404);

    return { 
        chosenBatch,
    };
}

export function entries() {
    let entriesList = []

    for (let entry of photoBatches){
        entriesList.push({ slug: entry.date.replace(/\s/g, '') })
    }

    return entriesList;
}


// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

import { error } from '@sveltejs/kit'
import { photoBatches } from '$lib/assets/photoData.js'

export function load ( { params }) {
    let chosenBatch = photoBatches.find((batch) => batch.date === params.slug);

    if (!chosenBatch) error (404);

    return { 
        chosenBatch,
    };
}
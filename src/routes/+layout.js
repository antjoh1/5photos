// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;

import photoBatches from "$lib/assets/photoData.json";

export async function load ({ url }) {

    return { 
        url: url.pathname,
        batches: photoBatches.map((batch) => ({
            date: batch.date, 
            photos: batch.photos,
            descs: batch.descs
        }))
    }
}

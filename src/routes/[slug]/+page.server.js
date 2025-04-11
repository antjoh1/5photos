
console.log("page.server.js ran")
/** @type {import('./$types').PageServerLoad} */
export async function load( { params } ){ 
    console.log(params)
    const res = await fetch (`http://127.0.0.1:8000/images/${params.slug}`)
    const image_list = await res.json()

    if (!res.ok){ 
        throw new Error("Failed to fetch photo data from server")
    } else {
        // console.log('this is the pageserver data: ', image_list)
        return { "images": image_list }
    }
    
}

console.log("page.js ran")
export async function entries() {
    let entriesList = []
    console.log('entries() function ran')
    const res = await fetch('htpp://127.0.0.1:8000/getBatches', { method: 'GET' })
    const batches_json = await res.json()

    for (let entry of batches_json) { 
        entriesList.push({ slug: entry.date.replace(/\s/g, '')})
    }

    console.log(entriesList)

    return entriesList;
}

console.log("page.server.js ran")
/** @type {import('./$types').PageServerLoad} */
export async function load( { params } ){ 
    console.log(params)
    const res = await fetch (`http://127.0.0.1:8000/images/${params.slug}`)
    const image_list = await res.json()

    if (!res.ok){ 
        throw new Error("Failed to fetch photo data from server")
    } else {
        return { "images": image_list }
    }
}

import {PUBLIC_BACKEND_URL} from '$env/static/public'


console.log("page.server.js ran")
/** @type {import('./$types').PageServerLoad} */
export async function load( { params } ){ 
    console.log(params)
    // const res = await fetch (`http://backend:8000/images/${params.slug}`)
    // const res = await fetch (`http://localhost:8000/images/${params.slug}`)
    const res = await fetch (`${PUBLIC_BACKEND_URL}/images/${params.slug}`)
    const image_list = await res.json()

    if (!res.ok){ 
        throw new Error("Failed to fetch photo data from server")
    } else {
        return { "images": image_list }
    }
}

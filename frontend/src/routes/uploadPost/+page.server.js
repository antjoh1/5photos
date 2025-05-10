import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { PUBLIC_BACKEND_URL } from '$env/static/public';

/** @satisfies { import('./$types').Actions } */
export const actions = { 
    default: async ({ cookies, request }) => {
        console.log("form submission trigerred")

        // get request data from client
        const data = await request.formData();
        console.log("this is form data: ", data); 

        const formData = new FormData()
        /** @type {{ [key: string]: string }}  */
        let token = {}

        for (let entry of data.entries()){ 
            console.log("this is an entry: ", entry)

            if (entry[1] instanceof File ){
                if (entry[1].size > 0){
                formData.append('files', entry[1])}
            } else { 
                token[entry[0]] = entry[1]
            }
        }
        const tokenData = JSON.stringify(token)

        formData.append('token', tokenData)
        console.log('Sending FormData:', formData)

        const res = await fetch(`${PUBLIC_BACKEND_URL}/images/file`, {
        // const res = await fetch("http://backend:8000/images/file", {
            method: "POST", 
            mode: "cors",
            headers: {
                "Authorization": `bearer ${cookies.get('jwt')}`
            },
            body: formData
        })
        

        if (!res.ok) {
            const errorText = await res.text();
            console.error("Error response:", errorText);
            console.log(res.headers)
            return { success: false, error: errorText };
        }

        const json = await res.json();
        console.log('Response from FastAPI:', json);

        return {
            success: true,
            uploaded: json
        };
    }
}


export async function load ( { cookies } ){

    const jwt = cookies.get('jwt')

    console.log("The load function in login started")

    const res = await fetch(`${PUBLIC_BACKEND_URL}/users/me`, {
    // const res = await fetch('http://backend:8000/users/me', {
        method: "GET",
        mode: "cors",
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    })

    let userAuthTest = await res.json() 

    if (!res.ok) {
        console.log(res.headers, 'need to login still')
        throw redirect(307, '/login')


    } else {
        console.log('user is logged in', res,  userAuthTest)
        return { loggedIn: true }
    }
}


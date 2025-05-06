import { PUBLIC_BACKEND_URL } from '$env/static/public'
import { redirect } from '@sveltejs/kit'

export async function load ( { cookies } ){

    const jwt = cookies.get('jwt')

    console.log("The load function in login started", jwt)

    const res = await fetch(`${PUBLIC_BACKEND_URL}/users/me`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${jwt}`
        },
    })

    let userAuthTest = await res.json() 

    if (!res.ok) {
        // const errorText = await res.text();
        // console.error("Error response:", errorText);
        console.log(res.headers, 'need to login still')
        redirect(307, '/login')

        // return {loggedIn: false}

    } else {
        console.log('user is logged in apparently', res,  userAuthTest)

        return {loggedIn: true}
    }
}


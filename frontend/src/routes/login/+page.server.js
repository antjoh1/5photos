/** @satisfies { import('./$types').Actions } */
export const actions = {
    default: async({ request }) => {

        console.log("Attempted login")

        // get form data from request
        const requestData = await request.formData()

        console.log(`This is formData - ${requestData}`)

        /** @type { FormDataEntryValue | null } */
        const user = requestData.get("username") 
        /** @type { FormDataEntryValue | null } */
        const pass = requestData.get("password")

        const params = new URLSearchParams();
        params.append("username",/** @type { string } */ (user));
        params.append("password", /** @type { string} */ (pass));

        console.log("this is happening in login", user, pass)

        const response = await fetch(`http://127.0.0.1:8000/users/token`, {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString()
        });

        if (!response.ok) { 
            const errorText = await response.text();
            console.error("Error response:", errorText);
            console.log(response.headers)
            return { success: false, error: errorText };
        }

        const json = await response.json()

        console.log(json)

        return { 
            loginSuccess: true,
            token: json
        }
    }
}


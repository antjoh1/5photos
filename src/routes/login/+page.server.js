const  BASE_URL = "http://127.0.0.1:8000"

export const load = async ({params}) => {
    const getSomeData = async() => {
        // let output;

        const response = await fetch(`${BASE_URL}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const output = await response.json()
        return output 
    }


    return {
        getSomeData: await getSomeData()
    };
}


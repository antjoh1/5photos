// This can be false if you're using a fallback (i.e. SPA mode)
export const prerender = true;
// export const ssr = false;


export async function load ({ url }) {

    return { 
        url: url.pathname
    }
}
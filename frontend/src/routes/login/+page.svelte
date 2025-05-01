<script>
	import { base } from '$app/paths';
	import { page } from "$app/state";

    let pageData = $state(page.form)
    let loginStatus = $state(false)

    // Triggers on change in pageData - probably not the best way to do this
    // if server response is ok, then store token in localstorage
    $effect(( ) => {
        if (pageData.loginSuccess) {
            localStorage.setItem("jwt", pageData.token.access_token)
            localStorage.setItem("token_type", pageData.token.token_type) 
            document.cookie = `jwt=${pageData.token.access_token}`

            // alert("Successful Login")
            loginStatus = true
        }
    })


</script>

{#if !loginStatus}
    <form class="form-entry" method="POST">
        <div>
            <label for="username"> Username: </label>
            <input type="text" name="username" id="username" />
        </div>
        <div>
            <label for="password"> Password: </label>
            <input type="text" name="password" id="password" />
        </div>

        <div class='px-12'>    
            <input type='submit' class='flex bg-black hover:bg-[var(--pink-accent)] border border-solid hover:border-black text-white hover:text-black p-3 justify-self-end transition duration-250 ease-in' value="Login">
        </div>
    </form>  
{:else}
    <div class='flex flex-col gap-5 w-1/4 m-auto'>
        <h1 class="text-center font-extralight text-2xl"> Welcome! </h1>
        <a class="bg-black text-white text-center font-extralight p-4 border border-black hover:bg-white hover:text-black transition-all duration-250 ease-in-out" href="{base}/uploadPost" > Upload new photos  </a>
    </div>
{/if}



<style>
    .form-entry{
        margin: auto;
        width: 200px;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    label{
        width: 100px;
    }

</style>
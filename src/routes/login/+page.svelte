<script>
	import { page } from "$app/state";

    let pageData = $state(page.form)

    // Triggers on change in pageData - probably not the best way to do this
    // if server response is ok, then store token in localstorage
    $effect(( ) => {
        if (pageData.loginSuccess) {
            localStorage.setItem("jwt", pageData.token.access_token)
            localStorage.setItem("token_type", pageData.token.token_type) 
            document.cookie = `jwt=${pageData.token.access_token}`
        }
    })


</script>

<form class="form-entry" method="POST">
    <label for="username"> Username: </label>
    <input type="text" name="username" id="username" />

    <label for="password"> Password: </label>
    <input type="text" name="password" id="password" />


    <div class='px-12'>    
        <input type='submit' class='flex bg-black hover:bg-[var(--pink-accent)] border border-solid hover:border-black text-white hover:text-black p-3 justify-self-end transition duration-250 ease-in' value="Login">
    </div>
</form>  


<style>
    
    .form-entry{
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
    }

    label{
        width: 100px;
    }

</style>
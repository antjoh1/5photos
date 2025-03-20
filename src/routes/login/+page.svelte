<script>
    let user = {id: "user1", 
                password: "password",
                email: "mail@mail.com"
    }

    /** @type {string} */
    let id = $state("")

    let users = $state()

    /** @param {string} id */
    async function fetchUser (id) { 
        const res = await fetch(`http://127.0.0.1:8000/users/${id}`)
        let result = await res.json() 

        console.log(result)

        if (result.length) { 
            users = result
        } else { users = [result]}
        
     }


</script>


<div class="form-entry">
    <label for="username"> username: </label>
    <input type="text" name="username" id="username" bind:value={id}/>
</div>  

<button class="form-button" onclick={() => (fetchUser(id))}> Get users! </button>

<ul>
    {#each users as user}
        <li> {user.id} - {user.email} </li>
    {/each}
</ul>

<style>
    
    .form-entry{
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
    }

    label{
        width: 100px;
    }

    .form-button { 
        background: white;
        margin: auto;
        width: 150px;
        height: 50px;
        justify-content: center;
        align-content: center;
    }
</style>
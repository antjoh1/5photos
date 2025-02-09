<script> 
    import profilePic from '$lib/assets/reachMe.jpeg';
    import profileDesc from '$lib/assets/blonqeIntro.json';

</script>

<div class='mainContentBox'> 
    <img src={profilePic} alt='Blonqe' class='singleImage' />

    <div class='photoDesc'> 
        <h1 class='introName'> B. Syla </h1> 

        {#each profileDesc as paragraph}
            <p class='descparagraph'> {paragraph} </p>
        {/each}
    </div>
    <a href='/' class="email">myEmail@mail.com</a>
</div>

<style> 

    p { 
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 200;
        font-family: 'Lexend exa';
        text-wrap: wrap;
    }
    .mainContentBox {
        padding: 2rem 2rem 2rem 5rem;
        width: 90vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        column-gap: 3rem;
        align-items: center;
        /* flex-wrap: wrap; */
    }

    .singleImage { 
        max-width: 60vw;
        min-height: 40vw;
        max-height: 40vw;
        margin: 0rem 1rem 3rem 1rem;
        padding: 30px 30px;
        background-color: white;
        border-radius: 5px;
        z-index: 100;
        transition:cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    .photoDesc { 
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding-bottom: 3rem;
    }

    .email { 
        align-self: flex-end;
    }

    .introName { 
        font-size: 2rem;
        font-weight: 400;
    }

</style>

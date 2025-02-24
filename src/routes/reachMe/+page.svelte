<script> 
    import profilePic from '$lib/assets/reachMe.jpeg';
    import profileDesc from '$lib/assets/blonqeIntro.json';

</script>

<div class='mainContentBox'> 
    <img src={profilePic} alt='Blonqe' class='singleImage' />

    <div class='photoDesc'> 
        <h1 class='introName'> Bleona S. </h1> 
        
        <div class='paragraphs'>
            {#each profileDesc as paragraph}
                <p> {paragraph} </p>
            {/each}
        </div>

        <p class='disclaimer'>Disclaimer: If you find yourself on a photo and you don't want it to be online - please reach out and I'll take it down.</p>

        <p class='email'>myEmail@mail.com</p>
    </div>
</div>


<style> 

    p { 
        margin-top: 1rem;
        font-size: 1.5srem;
        font-weight: 200;
        font-family: 'Lexend exa';
        text-wrap: wrap;
    }

    .mainContentBox {
        padding: 40px 40px 40px 40px;
        width: 90vw;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        column-gap: 3rem;
        align-items: center;
    }

    .singleImage { 
        max-width: 50vw;
        min-height: 40vw;
        max-height: 40vw;
        margin: 0rem 1rem 3rem 1rem;
        padding: 10px;
        background-color: white;
        /* border-radius: 5px; */
        transition: cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    .photoDesc {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        padding-bottom: 3rem;
    }

    .paragraphs:last-child { 
        font-style: italic;
    }

    .email {
        display: flex;
        padding-right: 40px;
        margin-top: 200px;
        justify-content: flex-end;
    }
    
    .disclaimer { 
        font-weight: 100;
        font-style: italic;
        font-size: 14px;
    }

    .introName { 
        font-size: 18px;
        font-weight: 400;
    }

    @media (max-width: 800px){
        .mainContentBox { flex-direction: column; row-gap: 10px;  width: 85vw; align-items: center; padding-left: 20px;}
        .photoDesc { padding-left: 20px; font-size: 16px; }
        .singleImage { max-width: 85vw; max-height: 60vh; align-self: flex-start;}
    }

</style>

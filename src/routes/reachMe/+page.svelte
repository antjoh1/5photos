<script> 
    import profilePic from '$lib/assets/reachMe.jpeg';
    import profileDesc from '$lib/assets/blonqeIntro.json';
    import { base } from '$app/paths';

</script>

<div class='mainContentBox'> 
    <img src={profilePic} alt='Blonqe' class='singleImage' />

    <div class='photoDesc'> 
        <div class='nameAndIcons'>
            <h1 class='introName'> Bleona S. </h1> 
            <a class='instaLink' href='https://www.instagram.com/bleonassss/'>
                <img class='instaLogo' src='{base}/instagramLogo.svg' alt='instagramLink' />
            </a>
        </div>

        <div class='paragraphs'>
            {#each profileDesc as paragraph}
                <p> {paragraph} </p>
            {/each}
        </div>

        <p class='disclaimer'>Disclaimer: If you find yourself on a photo and you don't want it to be online - please reach out and I'll take it down.</p>

        <p class='email'>bleonasylaaa@gmail.com</p>
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

    .nameAndIcons { 
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        height: 50px;
    }
    
    .instaLogo { 
        height: 20px;
    }

    .instaLink {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        background-color: var(--pink-accent);
        border-radius: 100%;
        transition: 300ms;
    }

    .instaLink:hover { 
        background-color: white;
        transform: scale(1.1);
    }

    .mainContentBox {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 40px;
        padding-right: 40px;
        width: 90vw;
        column-gap: 3rem;
        align-items: start;
    }

    .singleImage { 
        max-width: 50vw;
        min-height: 40vw;
        max-height: 40vw;
        padding: 10px;
        background-color: white;
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
        padding-right: 0px;
        margin-top: 50px;
        justify-content: flex-end;
        align-self: flex-end;
        font-weight: 100;
        font-size: 14px;
    }
    
    .disclaimer { 
        font-weight: 100;
        font-style: italic;
        font-size: 14px;
    }

    .introName { 
        font-size: 28px;
        font-weight: 300;
    }

    @media (max-width: 800px){
        .mainContentBox {margin:auto; flex-direction: column; row-gap: 10px;  width: 90vw; align-items: center; padding-left: 20px; padding-right:20px;}
        .photoDesc { padding-left: 10px; font-size: 16px; width: 90vw; padding-left: 20px; padding-right: 20px;}
        .singleImage { max-width: 85vw; max-height: 60vh; margin:auto;}
        .nameAndIcons { margin-top: 50px;}
    }

</style>

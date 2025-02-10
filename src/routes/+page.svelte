<script>
    import PhotoPreview from "$lib/photoPreview.svelte";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
    import { quartIn, quartOut } from "svelte/easing";

    let blurBg = $state(false); 
    let introMsgFlag = $state(false);
    let introDuration = 1000;
    let loadCount = $state(0) // attempt at making this appear only on first load

    onMount( () => {
        if (loadCount < 1){
            blurBg = true
            introMsgFlag = true
        }

    })

</script>

{#if blurBg}
    <div class='firstLoadWindow' in:fade={{delay:500, duration: 500}} out:fade={{delay: 500, duration: 500}}></div>
{/if}
{#if introMsgFlag}
    <div class='firstLoadMessage' in:fly={{delay: introDuration*1.5, x:-1000, duration: 2000, easing:quartOut}} out:fly={{x:-800, duration: 500, easing:quartIn}}>
        <h1 class='firstLoadTitle'>Hi!</h1>
        <h2>
            This is a little page where I post 5 photos every week. 
        </h2>
        <h2> If you like any of the photos and you'd like to have them in higher quality
            please reach out. I'd be happy to send them to you.
        </h2>
        <p class='disclaimerText'> If you find yourself on a photo and you don't want it to be online - please reach out and I'll take it down asap! </p>

        <div class='firstLoadButton'>
            <button  onclick={()=>{blurBg=false; introMsgFlag=false}}> 
                Welcome!
                <!-- <div class='circle'></div> -->
             </button>
            
        </div>
    </div>
{/if}

<div class='photoCarousel' >
    <PhotoPreview></PhotoPreview>
</div>

<style>
    .firstLoadWindow { 
        height: 100vh;
        width: 100vw;
        backdrop-filter: blur(10px);
        position: fixed;
        inset: 0px;
        max-width: 100vw;
        max-height: 100dvh;
        z-index: 2;
        padding: 2rem;
    }

    .firstLoadMessage { 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 40vh;
        width: 50vw;
        position: fixed;
        inset: 0px;
        max-width: 100vw;
        max-height: 100dvh;
        margin: auto;
        background-color: rgb(211, 211, 211);
        border-radius: 10px;
        z-index: 3;
        padding: 3rem;
        font-family: 'Lexend exa';
        font-size: 1.5rem;
        font-weight: 200;
    }

    .disclaimerText { 
        font-size: large;
        font-style: italic;
    }

    .firstLoadButton { 
        background-color: var(--pink-accent);
        /* width: 40%; */
        height: 3rem;
        position: relative;
        align-self: center;      
        font-family: 'Lexend exa';
        font-weight: 200;
        font-size: 2rem;
        padding-right: 20px;
        padding-left: 20px;
        border-radius: 5px;
        transition: color 250ms ease-in-out;
    }

    .firstLoadButton:hover { 
        background-color: #ee79b7;
        transition: color 2500ms ease-in-out;
    }
    .firstLoadButton:active { 
        transition: color 250ms ease-in-out;
        background-color:  #ed6db1;
    }


    .photoCarousel {
        margin-top: 2rem;
        max-height: 80vh;
        min-height: 50vh;
    }
</style>
<script>
    import '../app.css';
    import PhotoPreview from "$lib/photoPreview.svelte";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
    import { quartIn, quartOut } from "svelte/easing";  
    import { getContext } from "svelte";

    let { data } = $props()
    let archiveToggle = getContext('archiveToggle')

    let blurBg = $state(false); 
    let introMsgFlag = $state(false);
    let introDuration = 800;
    let loadCount = $state(0) // attempt at making this appear only on first load

    onMount( () => {
        if (loadCount < 1){
            blurBg = true
            introMsgFlag = true
        }
    })

    $inspect(data)

</script>

{#if blurBg}
    <div class='blurBgDiv' in:fade={{delay:introDuration/3, duration: introDuration}} out:fade={{delay: introDuration/3, duration: introDuration}}></div>
{/if}
{#if introMsgFlag}
    <div class='firstLoadMessage' in:fly={{delay: introDuration*1.5, x:-1000, duration: 2000, easing:quartOut}} out:fly={{x:-800, duration: 500, easing:quartIn}}>
        
        <div class='disclaimerMsg'> 
            <h1 class='firstLoadTitle'>Hi!</h1>
            <h2>
                This is a little page where I post 5 photos every week. 
            </h2>
            <h2> If you like any of the photos and you'd like to have them in higher quality
                please reach out. I'd be happy to send them to you.
            </h2>
    </div>
        <p class='disclaimerText'> If you find yourself on a photo and you don't want it to be online - please reach out and I'll take it down. </p>

        <div class='firstLoadButton'>
            <button  onclick={()=>{blurBg=false; introMsgFlag=false}}> 
                Welcome!
             </button>
        </div>
    </div>
{/if} 

<div class='photoCarousel' >
    <PhotoPreview></PhotoPreview>
</div>

<style>
    .blurBgDiv { 
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

    .disclaimerText { 
        font-size: 0.7em;
        font-style: italic;
    }

    .disclaimerMsg {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .firstLoadButton { 
        background-color: var(--pink-accent);
        /* height: 2.5rem; */
        position: relative;
        align-self: center;      
        font-family: 'Lexend exa';
        font-weight: 100;
        font-size: 1em;
        padding:  1% 5% 1% 5%;
        border-radius: 5%;
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
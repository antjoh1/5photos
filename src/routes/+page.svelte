<script>
    import PhotoPreview from "$lib/photoPreview.svelte";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
    import { quartIn, quartOut } from "svelte/easing";

    let blurBg = $state(false); 
    let introMsgFlag = $state(false);
    let introDuration = 800;

    onMount( () => {
        setTimeout(() => { 
            blurBg  = true
        }, introDuration);// This should match `out:fade` duration 
        
        setTimeout(() => { 
            introMsgFlag = true
        }, introDuration*1.5);// This should match `out:fade` duration 
        
    })

</script>

{#if blurBg}
    <div class='firstLoadWindow' in:fade={{duration: 500}} out:fade={{duration: 500}}>
        {#if introMsgFlag}
            <div class='firstLoadMessage' in:fly={{x:-800, duration: 1500, easing:quartOut}} out:fly={{x:-800, duration: 500, easing:quartIn}}>
                This is first load
                <button onclick={()=>{setTimeout(() => { introMsgFlag = false}, introDuration); blurBg=false}}> Thanks! </button>
            </div>
        {/if}
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
        height: 30vh;
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
    }

    .photoCarousel {
        margin-top: 2rem;
        max-height: 80vh;
        min-height: 50vh;
    }
</style>
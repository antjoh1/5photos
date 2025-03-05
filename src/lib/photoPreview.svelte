<script>
    import { fade, fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
    import { base } from "$app/paths";

    // Input variables defined during instantiating component in +page.svelte
    let { chosenBatch } = $props();

    let i = $state(0);
    let animate = $state(false);

    let photoOrder = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5']

    /** @type {string} */
    let activePhotoPath = $derived(base+chosenBatch.photos[photoOrder[i]].path);
    let activePhotoText = $derived(chosenBatch.photos[photoOrder[i]].text)
    let activePhotoLocation = $derived(chosenBatch.photos[photoOrder[i]].location)

    function switchPhoto() { 
        if (i < (photoOrder.length-1)) {
            i += 1
        } else { i = 0}
        console.log ( i )
        animate = true
        setTimeout(() => { 
            animate = false; // Start fade in
        }, userState.animationBaseLength*0.8); // This should match `out:fade` duration 
    }

    $inspect(activePhotoPath, activePhotoText)

</script>

<div class='mainContentBox'  >
    {#if !animate}
        <div class="block" out:fly={{x: -200, duration: userState.animationBaseLength*0.8, easing:quartOut}} in:fly={{x:-200, duration:userState.animationBaseLength*0.8, easing:quartIn}}>
            <img src={activePhotoPath} alt='mainPhoto'/>
        </div>
    

        <div class='picExtra'>
            <div class='photoDesc'>
                <div out:fade={{duration: userState.animationBaseLength*0.5}} in:fade={{duration: userState.animationBaseLength*0.8, delay: userState.animationBaseLength*0.8}}> 
                    <h3> {activePhotoText} </h3>
                    <h4> {activePhotoLocation} </h4>
                </div>
            </div>
    

            <button class='nextPhotoButton' onclick={switchPhoto}> Next  </button>
        </div>
    {/if}
</div>


<style> 
    .block {
        display: block;
    }

    .mainContentBox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 15px;
        column-gap: 20px;
        padding-left: 40px;
        padding-right: 40px;
        height: 70vh;
    }

    .picExtra { 
        width: inherit;
        padding-right: 20px;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 70vw; 
        max-height: 70vh; 
        object-fit: fill;
        padding: 15px;
        background-color: white;
    }

    .photoDesc { 
        width: 200px;
        align-self: flex-end;
    }

    @media (max-width: 800px){
    .mainContentBox { justify-content: flex-start; max-width: 90vw; padding: 0px; height: 50vw; flex-direction: column; flex-wrap:nowrap; padding-left: 10px; padding-right: 10px;}
    .photoDesc { align-self: start;  }
    img {max-width: 95vw;}
    }


</style>
<script>
    import { fade, fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
    import { base } from "$app/paths";

    // Input variables defined during instantiating component in +page.svelte
    let { importPhotos, photoDescs } = $props();

    let index = $state(0);
    let animate = $state(false);

    /** @type {string} */
    let activePhotoPath = $derived(base+importPhotos[index].img);
    let activePhotoId = $derived(importPhotos[index].id)
    let activePhotoText = $derived(photoDescs.find((/** @type {{id:string, text:string, location:string}} */ desc) => desc.id === activePhotoId))


    function switchPhoto() { 
        animate = true
        if (index < (importPhotos.length-1)) {
            index += 1
        } else { index = 0}
        console.log ( index )

        setTimeout(() => { 
            animate = false; // Start fade in
        }, userState.animationBaseLength*0.5); // This should match `out:fade` duration 
    }

    $inspect(activePhotoPath, activePhotoId, activePhotoText)

</script>

<div class='mainContentBox'  >
    {#if !animate}
        <div class="block" out:fly={{x: -200, duration: userState.animationBaseLength*0.5, easing:quartOut}} in:fly={{x:-200, duration:userState.animationBaseLength*0.5, easing:quartIn}}>
                    <img src={activePhotoPath} alt='mainPhoto'/>
        </div>
    {/if}

    <div class='picExtra'>
        <div class='photoDesc'>
            {#if !animate}
                <div in:fade={{duration: userState.animationBaseLength, delay: userState.animationBaseLength*0.5}} > 
                    <h3> {activePhotoText.text} </h3>
                    <h4> {activePhotoText.location} </h4>
                </div>
            {/if}
        </div>

        <button class='nextPhotoButton' onclick={switchPhoto}> Next  </button>
    </div>
</div>


<style> 
    .block {
        display: block;
        transition: 350ms;
    }

    .mainContentBox {
        padding-left: 40px;
        padding-right: 40px;
        display: flex;
        flex-direction: row;
        row-gap: 15px;
        column-gap: 20px;
        flex-wrap: wrap;
        
    }

    .picExtra { 
        width: inherit;
        padding-right: 40px;
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
    .mainContentBox { justify-content: center; max-width: 100vw; padding: 0px;}
    img {max-width: 98vw;}
    }


</style>
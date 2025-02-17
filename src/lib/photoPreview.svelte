<script>
    import { fade, fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
    import { base } from "$app/paths";

    let { importPhotos, photoDescs } = $props();

    let activePhoto = $state(base+importPhotos[0].img);
    let activePhotoText = $state(photoDescs[0])


    let index = $state(0);
    let animate = $state(false);

    function switchPhoto() { 
        animate = true
        if (index < (importPhotos.length-1)) {
            index += 1
        } else { index = 0}
        console.log ( index )

        setTimeout(() => { 
            activePhoto = base + importPhotos[index].img
            activePhotoText = photoDescs[index]
            animate = false; // Start fade in
        }, userState.animationBaseLength*0.5); // This should match `out:fade` duration 
        
    }

</script>

<div class='mainContentBox'  >
    {#if !animate}
        <div class="block" out:fly={{x: -200, duration: userState.animationBaseLength*0.5, easing:quartOut}} in:fly={{x:-200, duration:userState.animationBaseLength*0.5, easing:quartIn}}>
                    <img src={activePhoto} alt='mainPhoto'/>
        </div>
    {/if}

    <div class='picExtra'>
        <div class='photoDesc'>
            {#if !animate}
                <div in:fade={{duration: userState.animationBaseLength, delay: userState.animationBaseLength}} > 
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
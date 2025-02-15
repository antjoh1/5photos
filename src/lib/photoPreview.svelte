<script>
    import { fade, fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";

    import photo1 from "$lib/assets/photo1.jpeg";
    import photo2 from "$lib/assets/photo2.jpeg";
    import photo3 from "$lib/assets/photo3.jpeg";
    import photo4 from "$lib/assets/photo4.jpeg";
    import photo5 from "$lib/assets/photo5.jpeg";
    import descs from "$lib/assets/photoDescs.json"
    import { userState } from "../routes/state.svelte";
    

    let activePhoto = $state({img: photo1, thumb: false, id: 1});
    let activePhotoText = $state(descs[0])
    let photosDict = $state([
        {img: photo1, thumb: false, id: 1},
        {img: photo2, thumb: true, id: 2},
        {img: photo3, thumb: true, id: 3},
        {img: photo4, thumb: true, id: 4},
        {img: photo5, thumb: true, id: 5},
    ])

    let index = $state(0);
    let animate = $state(false);

    function switchPhoto() { 
        animate = true
        if (index < (photosDict.length-1)) {
            index += 1
        } else { index = 0}
        console.log ( index )

        setTimeout(() => { 
            activePhoto = photosDict[index]
            activePhotoText = descs[index]
            animate = false; // Start fade in
        }, userState.animationBaseLength*0.5); // This should match `out:fade` duration 
        
    }

</script>

<div class='mainContentBox'  >
    {#if !animate}
        <div class="block" out:fly={{x: -200, duration: userState.animationBaseLength*0.5, easing:quartOut}} in:fly={{x:-200, duration:userState.animationBaseLength*0.5, easing:quartIn}}>
                    <img src={activePhoto.img} alt='mainPhoto'/>
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

        <button  class='nextPhotoButton' onclick={switchPhoto}> Next  </button>
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
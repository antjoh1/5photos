<script>
    import { fade, fly, slide } from "svelte/transition";
    import { flip } from "svelte/animate";
	import { quartIn, quartOut } from "svelte/easing";

    import photo1 from "$lib/assets/photo1.jpeg";
    import photo2 from "$lib/assets/photo2.jpeg";
    import photo3 from "$lib/assets/photo3.jpeg";
    import photo4 from "$lib/assets/photo4.jpeg";
    import photo5 from "$lib/assets/photo5.jpeg";

    import descs from "$lib/assets/photoDescs.json"
    

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

    let animDuration = 900; // duration for all animations

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
        }, animDuration);// This should match `out:fade` duration 
        
    }

</script>

<div class='mainContentBox'  >
    {#if !animate}
    <div class="block" out:fly={{x: -500, duration: animDuration, easing:quartOut}} in:fly={{x:-500, duration:animDuration, easing:quartIn}}>
    <!-- <div class="block" out:slide={{axis: 'x', }} in:slide={{axis: 'x'}}> -->
    
            <div class='mainImg'>
                <img src={activePhoto.img} class='singleImage active' alt='mainPhoto' />

                <div class='photoDesc' in:fade={{duration: 500, delay: animDuration*1.5}}> 
                    <h1> {activePhotoText.text} </h1>
                    <h3> {activePhotoText.location} </h3>
                </div>
            </div>
        </div>
    {/if}

    <div class='nextPhotoButtonDiv'> 
        <button class='nextPhoto' onclick={switchPhoto}> Next  </button>
    </div>
</div>


<style> 
    .block {
        display: block;
    }

    .mainContentBox {
        padding-left: 5em;
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .mainImg {
        display: flex;
        column-gap: 2em;
        flex-direction: row;
        align-items: flex-end;
    }

     .photoDesc { 
        padding-bottom: 3em;
        align-self: flex-end;
    }

    .singleImage { 
        max-width: 60vw;
        min-height: 40vw;
        max-height: 40vw;
        margin: 0em 1em 3em 1em;
        padding: 30px 30px;
        background-color: white;
        border-radius: 5px;
        z-index: 1;
        /* transition:cubic-bezier(0.47, 0, 0.745, 0.715); */
        /* box-shadow: 4px 4px 100px rgba(50, 50, 93, 0.4); */
    }

    .active {
        scale: 100%;
    }

    .nextPhoto {
        height: 4em;
        width: 4em;
        border-radius: 1000px;
        border: 1px solid white;
        transition: 0.25s;
    }


    button { 
        border-radius: 10px;
        transition: transform 0.3s ease-in-out
    }

    button:hover { 
        background-color: white;
        transform: scale(1.5);
    }

</style>
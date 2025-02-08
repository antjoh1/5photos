<script>
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";
	import { backIn, cubicIn, expoOut, quadOut, quartIn, quartOut } from "svelte/easing";

    import photo1 from "$lib/assets/photo1.jpeg";
    import photo2 from "$lib/assets/photo2.jpeg";
    import photo3 from "$lib/assets/photo3.jpeg";
    import photo4 from "$lib/assets/photo4.jpeg";
    import photo5 from "$lib/assets/photo5.jpeg";
    

    let activePhoto = $state({img: photo1, thumb: false, id: 1});
    let photos = $state([ photo2, photo3, photo4, photo5 ])
    let photosDict = $state([
        {img: photo1, thumb: false, id: 1},
        {img: photo2, thumb: true, id: 2},
        {img: photo3, thumb: true, id: 3},
        {img: photo4, thumb: true, id: 4},
        {img: photo5, thumb: true, id: 5},
    ])

    let index = $state(0);
    let animate = $state(false);
    let animDuration = 700;

    function switchPhoto() { 
        animate = true
        if (index < (photosDict.length-1)) {
            index += 1
        } else { index = 0}
        console.log ( index )

        setTimeout(() => {
            
            activePhoto = photosDict[index]
            animate = false; // Start fade in
        }, animDuration); // This should match `out:fade` duration
        
    }

    /** @param {Number} index */
    function selectImage (index) {
        animate = true
        for (let i=0; i < photosDict.length; i++) {
            if (!(photosDict[i].thumb)) { photosDict[i].thumb = true}
        }

        let temp = activePhoto
        activePhoto = photosDict[index]
        photosDict[index].thumb = false

        console.log(photosDict)


    }

    let text = $state('Beautiful');
    let location = $state('Munich, BY')

</script>

<div class='mainContentBox'  >
    {#if !animate}
    <div class="block" out:fly={{x: -500, duration: animDuration, easing:quartIn}} in:fly={{x:-500, duration:animDuration, easing:quartOut}}>
    
            <div class='mainImg'>
                <img src={activePhoto.img} class='singleImage active' alt='mainPhoto' />

                <div class='photoDesc' in:fade={{duration: 1000, delay: 1000}}> 
                    <h1> {text} </h1>
                    <h3> {location} </h3>
                </div>
            </div>
        </div>
    {/if}

    <div class='nextPhotoButtonDiv'> 
        <button class='nextPhoto' onclick={switchPhoto}> Next  </button>
    </div>
</div>

<!-- Thumbnails -->
<!-- <div class="thumbsBox" >
    {#each photosDict as image, ind  (image.id)}
      <button onclick={()=>selectImage(ind)} >
        <img src={image.img}  class="thumbsImg" alt={image.id.toString()}/>
      </button>
    {/each}
</div> -->


<style> 
    .block {
        display: block;
    }

    .mainContentBox {
        padding-left: 5rem;
        width: 80vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .mainImg {
        display: flex;
        column-gap: 2rem;
        flex-direction: row;
        align-items: flex-end;
    }

     .photoDesc { 
        padding-bottom: 3rem;
        align-self: flex-end;
    }

    .singleImage { 
        max-width: 60vw;
        min-height: 40vw;
        max-height: 40vw;
        margin: 0rem 1rem 3rem 1rem;
        padding: 30px 30px;
        background-color: white;
        border-radius: 5px;
        z-index: 100;
        transition:cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    .active {
        scale: 100%;
    }

    /* .thumbsImg { 
        object-fit: fill;
    }
    
    .thumbsBox { 
        width: 40%;
        max-height: 300px;
        /* padding-top: 2rem; 
        padding: 1rem;
        display: flex;
        flex-direction: row;
        /* margin-top: 2rem; 
        margin: auto;
        column-gap: 3rem;
    } */

    .nextPhoto {
        height: 4rem;
        width: 4rem;
        border-radius: 1000px;
        border: 1px solid white;
        /* background-color: white; */
        transition: 0.25s;
    }


    button { 
        /* border: 2px solid black; */
        border-radius: 10px;
        transition: transform 0.3s ease-in-out
    }

    button:hover { 
        background-color: white;
        transform: scale(1.5);
    }

    /* .thumbsImg:hover { 
        border: 0.5rem solid white;
        border-radius: 5px;
    } */

</style>
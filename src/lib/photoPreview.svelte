<script>
    import photo1 from "$lib/assets/photo1.jpeg";
    import photo2 from "$lib/assets/photo2.jpeg";
    import photo3 from "$lib/assets/photo3.jpeg";
    import photo4 from "$lib/assets/photo4.jpeg";
    import photo5 from "$lib/assets/photo5.jpeg";

    let activePhoto = $state(photo1);
    let photos = $state([ photo2, photo3, photo4, photo5])
    // let activePhoto = $state(photos[0])

    /**
	 * @param {Number} index
	 */
    function selectImage (index) { 

        let temp = activePhoto;
        activePhoto = photos[index];
        photos[index] = temp;
        // photos.splice(index,1);
        // photos.unshift(temp);
    }

</script>

<div class='mainImage'> 
    <button class='mainImgButton'>
        <img src={activePhoto} class='singleImage active' alt='mainPhoto'/>
    </button>
</div>

<!-- Thumbnails -->
<div class="thumbsBox" >
    {#each photos as image, ind}
      <button onclick={()=>selectImage(ind)} >
        <img src={image} alt="Thumbnail" class="thumbsImg" />
      </button>
    {/each}
</div>


<style> 

    .singleImage { 
        max-width: 60vw;
        max-height: 40vw;
        margin: 0rem 0 0rem 1rem;
        align-items: left;
        padding: 30px 30px;
        background-color: white;
        border-radius: 5px;
        z-index: 100;
    }

    .mainImgButton {
        position: relative;
    }


    .active {
        scale: 100%;
    }

    .thumbsImg { 
        object-fit:cover;
        transition-property: transform, translate, scale, rotate;
        transition-timing-function: var(--default-transition-timing-function); /* cubic-bezier(0.4, 0, 0.2, 1) */
        transition-duration: var(--default-transition-duration);
    }
    
    .thumbsBox { 
        width: 25%;
        padding-top: 2rem;
        /* margin-top: 2rem; */
        margin: auto;
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
    }

    button { 
        /* border: 2px solid black; */
        border-radius: 10px;
        transition: transform 0.3s ease-in-out
    }

    button:hover { 
        border: 0.5rem solid white;
        appearance: none;
        transform: scale(1.1);
    }

</style>
<script>
    import { fade, fly } from "svelte/transition";
    import { flip } from "svelte/animate";

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

    /**
	 * @param {Number} index
	*/
    function selectImage (index) { 
        // let temp = activePhoto;
        // activePhoto = photos[index];
        // photos.unshift(temp); // add old active photo to thumbnail
        // photos.splice(index+1, 1) // remove photo from thumbnail

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

    <div class='mainImg'> 
        <img src={activePhoto.img} class='singleImage active' alt='mainPhoto' out:fly/>
        <div> 
            <h1> {text} </h1>
            <h3> {location} </h3>
        </div>
    </div>

<!-- Thumbnails -->
<div class="thumbsBox" >
    {#each photosDict as image, ind  (image.id)}
      <button onclick={()=>selectImage(ind)} in:receive={{ key: image.id }} out:send={{ key: image.id }} animate:flip={{ duration: 500 }} >
        <img src={image.img} alt="Thumbnail" class="thumbsImg" />
      </button>
    {/each}
</div>


<style> 

    .mainImg {
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
        align-items: last baseline;
        margin-left: 5rem;
    }

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
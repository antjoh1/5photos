<script>
    import photo1 from "$lib/assets/photo1.jpeg";
    import photo2 from "$lib/assets/photo2.jpeg";
    import photo3 from "$lib/assets/photo3.jpeg";
    import photo4 from "$lib/assets/photo4.jpeg";
    import photo5 from "$lib/assets/photo5.jpeg";

    /**
	 * @param {MouseEvent} e
	 */
    function highlightScroll (e) { 
        let allPhotos = /** @type {NodeListOf<HTMLImageElement>} */ (document.querySelectorAll('img'));
        // console.log(allPhotos, typeof(e.target))

        for ( let photo of allPhotos) {
            console.log(photo.alt, e.target)

            // @ts-ignore
            if (photo.alt == e.target?.alt) {
                photo.classList.remove('secondary')
                photo.classList.add('active')
            } else {
                photo.classList.remove('active')
                photo.classList.add('secondary')
            }

        }

    }

</script>

<div class='wheel'>
    <button onclick={highlightScroll}>
        <img src={photo1} class='singleImage first active' alt='photo1' />
    </button>
    <button onclick={highlightScroll}> 
        <img src={photo2} class='singleImage secondary' alt='photo2' />
    </button>
    <button onclick={highlightScroll}>
        <img src={photo3} class='singleImage secondary' alt='photo3' />
    </button>
    <button onclick={highlightScroll}>
        <img src={photo4} class='singleImage secondary' alt='photo4' />
    </button>
    <button onclick={highlightScroll}>
        <img src={photo5} class='singleImage last secondary' alt='photo5' />
    </button>

</div>

<style> 
    .singleImage { 
        scale: 50%;
        max-width: 80vw;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 30px;
        background-color: white;
        border-radius: 5px;
        z-index: 100;
        transition: 500ms;
    }

    .first { 
        margin-left: 10vw;
    }

    .last { 
        margin-right: 15vw;
    }

    .active {
        scale: 100%;
    }

    .singleImage.secondary { 
        opacity: 0.5;
        z-index: 0;
    }

    .wheel {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar; 
    }



</style>
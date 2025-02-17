<script>
	import PhotoPreview from "$lib/photoPreview.svelte";
    // data contains one batch from $lib/photoData.js but apparently has access to other .js load function returns 
    let { data } = $props(); 
    
    let photosDict = [
        {img: data.chosenBatch.photos[0], id: 1},
        {img: data.chosenBatch.photos[1], id: 2},
        {img: data.chosenBatch.photos[2], id: 3},
        {img: data.chosenBatch.photos[3], id: 4},
        {img: data.chosenBatch.photos[4], id: 5},
    ]

    let descs = data.chosenBatch.descs

    // console.log(data)

</script> 

<div class='photoCarousel' >
    <PhotoPreview importPhotos={photosDict} photoDescs={descs}></PhotoPreview>
</div>

<style>
   

    .photoCarousel {
        margin-top: 2rem;
        max-height: 80vh;
        min-height: 50vh;
    }
</style>
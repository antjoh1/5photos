<script>
	import PhotoPreview from "$lib/photoPreview.svelte";

    // data contains one batch from $lib/photoData.js but also has access to the whole 
    // load function return from +layout.js as it is shared with all children 
    let { data } = $props(); 
    
    let photosDict = [
        {img: data.chosenBatch.photos[0].path, id: data.chosenBatch.photos[0].id},
        {img: data.chosenBatch.photos[1].path, id: data.chosenBatch.photos[1].id},
        {img: data.chosenBatch.photos[2].path, id: data.chosenBatch.photos[2].id},
        {img: data.chosenBatch.photos[3].path, id: data.chosenBatch.photos[3].id},
        {img: data.chosenBatch.photos[4].path, id: data.chosenBatch.photos[4].id},
    ]

    let descs = data.chosenBatch.descs
    console.log(data)

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
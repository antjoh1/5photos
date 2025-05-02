<script>
	import PhotoPreview from "$lib/photoPreview.svelte";

    // data contains one batch from $lib/photoData.js but also has access to the whole 
    // load function return from +layout.js as it is shared with all children 
    let { data } = $props(); 
    // console.log('this is page.svelte data: ', data)

</script> 

<PhotoPreview chosenBatch={data.images}></PhotoPreview>

<script>
	import PhotoPreview from "$lib/photoPreview.svelte";
    import ArchiveList from "$lib/archiveList.svelte";

    // data contains one batch from $lib/photoData.js but also has access to the whole 
    // load function return from +layout.js as it is shared with all children 
    let { data } = $props(); 

</script> 

<div class='flex flex-col'>
    <PhotoPreview chosenBatch={data.images}></PhotoPreview>

    <div class="my-5">
        <ArchiveList></ArchiveList>
    </div>
</div>
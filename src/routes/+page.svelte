<script>
    import '../app.css';
    import PhotoPreview from "$lib/photoPreview.svelte";
	import { onMount } from "svelte";  
    import { getContext } from "svelte";
    import { userState } from './state.svelte';

    let { data } = $props()
    let archiveToggle = getContext('archiveToggle')

    let blurBg = $state(false); 
    let introMsgFlag = $state(false);

    onMount( () => {
        if (userState.firstLoadCounter < 1){
            blurBg = true
            introMsgFlag = true
        }
    })

    $inspect(data)

</script>

<div class='photoCarousel' >
    <!-- <PhotoPreview importPhotos={photosDict} photoDescs={descs}></PhotoPreview> -->
     HELLO WORLD!
</div>

<style>
   

    .photoCarousel {
        margin-top: 2rem;
        max-height: 80vh;
        min-height: 50vh;
    }
</style>
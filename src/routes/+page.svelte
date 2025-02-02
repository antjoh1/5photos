<script>
    import PhotoPreview from "$lib/photoPreview.svelte";
    export const prerender = true
</script>

<div class='photoCarousel' >
<PhotoPreview></PhotoPreview>
</div>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<style>

    .photoCarousel { 
        margin-top: 5rem;
    }
</style>
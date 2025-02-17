<script>
    import '../app.css';
    import { base } from '$app/paths';
	import { userState } from '../routes/state.svelte';
    let { data } = $props();
    
</script>

    <ul>
        {#each data.batches as batch}
            <li>
                <a href="{base}/{batch.date.replace(/\s/g, '')}" onclick={() => userState.pickedDate = batch.date}>{batch.date}</a> 
            </li>
        {/each}
    </ul>
    
<style>
    * {
        box-sizing: border-box;
    }

    ul {
        max-height: 4em;
        overflow-y: scroll;
        margin-right: 1em;
        scroll-snap-type: y mandatory;
        padding-bottom: 3em;
        padding-top: 3em;
        }

    li {
        scroll-snap-align: center;
        height: 1.8em;
        text-align: right;
        text-justify: center;
        word-spacing: 0.4em;
    }

</style>
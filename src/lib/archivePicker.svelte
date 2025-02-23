<script>
    import '../app.css';
    import { base } from '$app/paths';
	import { userState } from '../routes/state.svelte';
    let { data } = $props();
    
    // let photosBlogPath = base

    let isSelected = (/** @type {string} */ value) => {return value == userState.pickedDate}
    
</script>

    <ul class='dateList'>
        {#each data.batches as batch}
            <li class = {isSelected(batch.date) ? 'active' : 'notActive'}>
                <a href="{base}/{batch.date.replace(/\s/g, '')}" onclick={() => {userState.pickedDate = batch.date; userState.archiveToggle=false}}>{batch.date}</a> 
            </li>
        {/each}
    </ul>
    
<style>
    * {
        box-sizing: border-box;
    }

    ul {
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }

    li {
        scroll-snap-align: center;
        height: 40px;
        text-align: center;
        text-justify: center;
        word-spacing: 0.4em;
        transition: 250ms;
    }

    .active { 
        color: black;
        font-weight: 300;
    }

    .notActive {
        color: rgb(141, 140, 140);
        font-weight: 100;
    }

    .dateList { 
        overflow-y: auto;
        scrollbar-width: 0px;
        font-size: 24px;
    }

    .dateList::-webkit-scrollbar{
        display: none;
    }

    @media (max-width: 800px){
        .dateList { font-size: 20px;}
    }

    @media (hover: hover) {
    li:hover {
        transform: scale(1.15);
        }
    }

</style>
<script> 
    import { onMount } from "svelte";
	import { base } from "$app/paths";
    import { userState } from "../routes/state.svelte";

    /** @type {string[]}*/
    let batches = $state([])

    /** @type {string[]}*/
    let previewImgPaths = $state([])

    let isSelected = (/** @type {string} */ value) => {return value == userState.pickedDate}


    async function getBatches () {
        let res = await fetch("http://127.0.0.1:8000/images/listBatches", {
            method: "GET"
        })

        if (!res.ok) {
            throw new Error(" Could not access server to get blog posts ")
        }

        const json = await res.json()
        batches = json
    }

    /** @param { string } batch 
     *  @param { string } ordinalNum
    */
    async function getImage (batch, ordinalNum) { 
        let res = await fetch(`http://127.0.0.1:8000/images/${batch}/${ordinalNum}`, {
            method: "GET"
        })

        if (!res.ok) { 
            throw new Error(" Server couldn't fetch image for preview ")
        }

        const imageObj = await res.json()

        return imageObj.path.replace('../static', '')
    }

    onMount(async () => {
        await getBatches()

        const promises = batches.map(batch => getImage(batch, ".1"))
        const paths = await Promise.all(promises)

        previewImgPaths = paths
    })

    $inspect(batches, previewImgPaths)


</script>

<div class=" border-b border-black  pt-2 mb-8 text-2xl font-extralight">
    <p class=" border-b-2 w-min border-black py-2 px-4">
        photos
    </p>
</div>

<div class="w-11/12 mx-auto mt-1 grid grid-cols-3 gap-4">
    {#each batches as batch, i}
        <a href="{base}/{batch.replace(/\s/g, '')}" class="group w-full transition-all duration-150 ease-in-out" onclick={() => {return userState.pickedDate=batch}}>
            <div class="justify-self-center m-auto mb-2">
                <div class="justify-self-center w-10/12 h-48"> 
                    <h2 class="{isSelected(batch) ? 'active' : ''} justify-self-start py-1 px-4  group-hover:bg-black group-hover:text-white"> {batch} </h2>
                    <div class="w-full h-full border-black overflow-clip group-hover:overflow-y-hidden group-hover:border-2 group-hover:border-solid ">
                        <img class="{isSelected(batch) ? 'active' : ''} w-full h-full object-cover group-hover:scale-110 duration-150 ease-in-out" src={previewImgPaths[i]} alt="little preview thing" />  
                    </div>
                </div>
            </div>
        </a>
    {/each}
</div>

<style>
    .active {
        background-color: black;
        color: white;
        border: solid 2px black;
    }

    .active:hover {
        background-color: black;
    }

</style>


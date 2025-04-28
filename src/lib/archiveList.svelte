<script> 
    import { onMount } from "svelte";
	import { base } from "$app/paths";

    /** @type {string[]}*/
    let batches = $state([])

    /** @type {string[]}*/
    let previewImgPaths = $state([])


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

<div class="textContainer px-4 py-2 bg-black mb-2"> photos </div>

<div class="w-11/12 mx-auto mt-1 grid grid-cols-3 gap-4">
    {#each batches as batch, i}
        <a href="{base}/{batch.replace(/\s/g, '')}" class="group w-full transition-all duration-150 ease-in-out">
            <div class="justify-self-center m-auto">
                <div class="justify-self-center w-10/12 h-48"> 
                    <h2 class="justify-self-start py-1 px-4  group-hover:bg-black group-hover:text-white"> {batch} </h2>
                    <img class="w-full h-full object-cover group-hover:border-2 group-hover:border-black group-hover:border-solid duration-150 ease-in-out " src={previewImgPaths[i]} alt="little preview thing" />  
                </div>
            </div>
        </a>
    {/each}
</div>


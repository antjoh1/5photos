<script> 
    import { onMount } from "svelte";

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
        <div>
            <h2 class="py-1"> {batch} </h2>
            <div class="justify-self-center w-10/12 h-48 border hover:scale-110 transition duration-300 ease-in-out"> 
                <img class="w-full h-full object-cover p-2" src={previewImgPaths[i]} alt="little preview thing" />  
            </div>
        </div>
    {/each}
</div>


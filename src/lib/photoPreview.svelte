<script>
    import { fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
    import { base } from "$app/paths";
	import HeartIcon from "./heartIcon.svelte";
	import { onMount } from "svelte";

    // Input variables defined during instantiating component in +page.svelte
    let { chosenBatch } = $props();
    let likeColor = $state(false)
    let likeCounter = $state(0)
    let counterVisible = $derived(likeCounter > 0 ? true : false )

    let i = $state(0);
    let animate = $state(false);

    let photoOrder = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5']

    /** @type {string} */
    let activePhotoPath = $derived(base+chosenBatch.photos[photoOrder[i]].path);
    let activePhotoText = $derived(chosenBatch.photos[photoOrder[i]].text)
    let activePhotoLocation = $derived(chosenBatch.photos[photoOrder[i]].location)

    function switchPhoto() { 
        if (i < (photoOrder.length-1)) {
            i += 1
        } else { i = 0}
        console.log ( i )
        animate = true
        setTimeout(() => { 
            animate = false; // Start fade in
        }, userState.animationBaseLength*0.8); // This should match `out:fade` duration 
    }

    $inspect(activePhotoPath, activePhotoText, chosenBatch)

    /// GET request on button click 
    /** @param {string} batch
     *  @param {string} id
     */
    async function likePic(batch, id) {
        const res  = await fetch(`http://127.0.0.1:8000/images/`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                batch: batch,
                id: id
            })
        })

        const json = await res.json()
        let result = JSON.stringify(json)

        likeCounter = json?.rating

        console.log(result)
    }

    /** @param {string} batch
     *  @param {string} id
     */
    async function getPic(batch, id) {
        const res = await fetch(`http://127.0.0.1:8000/images/${batch}/${id}`,{
            method: 'GET'
        })

        const json = await res.json()
        likeCounter = json.rating
        let result = JSON.stringify(json)

        
    }

    onMount(() => {
            getPic(chosenBatch.date, ".1")
        }
    )

</script>

<div class='mainContentBox'  >
    {#if !animate}
        <div class="block" out:fly={{x: -200, duration: userState.animationBaseLength*0.8, easing:quartOut}} in:fly={{x:-200, duration:userState.animationBaseLength*0.8, easing:quartIn}}>
            <img src={activePhotoPath} alt='mainPhoto'/>
            <div class="picFooter">
                <div class="likeBox {counterVisible ? "countVisible" : ""} ">
                    <button class='likeButton' onclick={() =>  { likePic(chosenBatch.date, activePhotoText); likeColor = !likeColor; }}>
                        <HeartIcon filled={likeColor} ></HeartIcon>
                    </button>
                    <h3>
                        {#if counterVisible }
                            {likeCounter}
                        {/if}
                    </h3>
                </div>
                <div class='photoDesc'>
                    <div > 
                        <h3> {activePhotoText} </h3>
                        <h4> {activePhotoLocation} </h4>
                    </div>
                </div>
            </div>
        </div>
    

        <div class='picExtra'>
            <button class='nextPhotoButton' onclick={()=>{switchPhoto(); getPic(chosenBatch.date, activePhotoText)}}> Next </button>
        </div>
    {/if}
</div>


<style> 
    .block {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        background-color: white;
        padding: 15px 15px 20px 15px;
    }

    .mainContentBox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: 15px;
        column-gap: 20px;
        padding-left: 40px;
        padding-right: 40px;
        height: inherit;
    }

    .picExtra { 
        width: inherit;
        height: inherit;
        padding-right: 20px;
        padding-left: 20px;
        display: flex;
        justify-content: flex-start;
        align-self: inherit;
    }

    .photoDesc{ 
        align-self: flex-end;
        justify-content: last baseline;
    }

    .picFooter {
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }

    .likeBox { 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px 0px 15px;
        height: 40px;
        width: 60px;
        background-color: var(--background-color-2);
        border-radius: 10px;
        transition: 250ms;

    }

    .likeBox.countVisible { 
        width: 100px;
        height: 40px;
    }

    .likeButton{
        height: 30px;
        width: 30px;
        padding-top: 3px;
    }

    
    img {
        max-width: 70vw; 
        max-height: 60vh; 
        object-fit: fill;
        /* padding: 15px; */
        /* background-color: white; */
    }


    @media (max-width: 800px){
        .mainContentBox { justify-content: flex-start; 
            max-width: 90vw; 
            padding: 0px; 
            height: 40vw; 
            flex-direction: column; 
            flex-wrap:nowrap; 
            padding-left: 10px; 
            padding-right: 10px;
        }
        .photoDesc { align-self: start;  }
        img {max-width: 95vw;}
    }


</style>
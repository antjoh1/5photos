<script>
    import { fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
	import HeartIcon from "./heartIcon.svelte";
	import { onMount } from "svelte";

    // Input variables defined during instantiating component in +page.svelte
    let { chosenBatch } = $props();
    let likeColor = $state(false)
    let likeCounter = $state(0)
    let counterVisible = $derived(likeCounter > 0 ? true : false )

    let i = $state(0);
    let animate = $state(false);

    console.log("This is in photoPreview", chosenBatch)

    let photoOrder = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5']

    /** @type {string} */
    let activePhotoPath = $derived(chosenBatch[i].path.replace('../static', ''));
    // let activePhotoPath = '/Prague/photo1.jpg'
    let activePhotoText = $derived(chosenBatch[i].ordinalNum)
    let activePhotoLocation = $derived(chosenBatch[i].imgLocation)

    /** @param {string} direction*/
    function switchPhoto( direction ) { 
        if (direction == "next"){
            if (i < (photoOrder.length-1)) {
                i += 1
            } else { i = 0}
            console.log ( i )
            animate = true
            setTimeout(() => { 
                animate = false; // Start fade in
            }, userState.animationBaseLength*0.8); // This should match `out:fade` duration     
        } else if (direction == "prev") {
            if (i < (photoOrder.length-1)) {
                i -= 1
            } else { i = 0}
            console.log ( i )
            animate = true
            setTimeout(() => { 
                animate = false; // Start fade in
            }, userState.animationBaseLength*0.8); // This should match `out:fade` duration 
        } else { 
            alert("Not a valid switchPhoto() input")
        }
    }

    $inspect(activePhotoPath, activePhotoText, chosenBatch)

    /// GET request on button click 
    /** @param {string} batch
     *  @param {string} id
     *  @param {string} routeEnd
     */
    async function likePic(batch, id, routeEnd="up") {

            const res  = await fetch(`http://127.0.0.1:8000/images/${routeEnd}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    imgLocation: batch,
                    ordinalNum: id,
                }),
            })
        
            
        const jsonResult = await res.json();
        let result = JSON.stringify(jsonResult)

        likeCounter = jsonResult?.rating

        console.log(result)
    }

    /** @param {string} imgLoc
     *  @param {string} ordinalNum
    */
    async function getPic(imgLoc, ordinalNum) {
        console.log("This is happening in the getPic thing",`http://127.0.0.1:8000/images/${imgLoc}/${ordinalNum}`)

        const res = await fetch(`http://127.0.0.1:8000/images/${imgLoc}/${ordinalNum}`,{
            method: 'GET'
        })

        if (!res.ok) {
            console.log(res)
            throw new Error('Could not get requested picture');
        }

        const jsonResult = await res.json();
        let result = JSON.stringify(jsonResult)
        console.log(result)

        likeCounter = jsonResult.rating;
    }

    onMount(() => {
            console.log('this is onMount', chosenBatch[0].imgLocation)
            getPic(chosenBatch[0].imgLocation, chosenBatch[0].ordinalNum)
        }
    )

</script>

<div class='mainContentBox'  >
    <div class='picExtra'>
        <button class='nextPhotoButton' onclick={()=>{switchPhoto('prev'); getPic(activePhotoLocation, activePhotoText)}}> Prev </button>
    </div>

    <div class='pictureWrap'>

        {#if !animate}
        <div class="block" out:fly={{y: 200, duration: userState.animationBaseLength*0.8, easing:quartOut}} in:fly={{y:200, duration:userState.animationBaseLength*0.8, easing:quartIn}}>
            <img src={activePhotoPath} alt='mainPhoto'/>
            
            <div class="picFooter">
                
                <div class="likeBox {counterVisible ? "countVisible" : ""} ">

                    <button class='likeButton' onclick={() =>  {if (!likeColor) {likePic(activePhotoLocation, activePhotoText, "up") } else {likePic(activePhotoLocation, activePhotoText, "down") }; likeColor = !likeColor; }}>
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
        
        {/if}
    </div>
    
    <div class='picExtra'>
        <button class='nextPhotoButton' onclick={()=>{switchPhoto('next'); getPic(activePhotoLocation, activePhotoText)}}> Next </button>
    </div>

</div>


<style> 
    .block {
        /* width: 60vw; */
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        background-color: white;
        padding: 15px 15px 20px 15px;
    }

    .pictureWrap {
        display: flex;
        justify-content: center;
        width: 70vw;
    }

    .mainContentBox {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 15px;
        column-gap: 20px;
        height: 70vh;
    }

    .picExtra { 
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
        max-width: 80vw; 
        max-height: 60vh; 
        object-fit: contain;
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
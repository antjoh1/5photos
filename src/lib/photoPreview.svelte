<script>
    import { fly } from "svelte/transition";
	import { quartIn, quartOut } from "svelte/easing";
    import { userState } from "../routes/state.svelte";
	import HeartIcon from "./heartIcon.svelte";
	import { onMount } from "svelte";

    // Input variables defined during instantiating component in +page.svelte
    let { chosenBatch } = $props();

    let i = $state(0);
    let animate = $state(false);

    console.log("This is in photoPreview", chosenBatch)

    let photoOrder = ['photo1', 'photo2', 'photo3', 'photo4', 'photo5']

    /** @type {string} */
    let activePhotoPath = $derived(chosenBatch[i].path.replace('../static', ''));
    let activePhotoText = $derived(chosenBatch[i].ordinalNum)
    let activePhotoLocation = $derived(chosenBatch[i].imgLocation)

    // Like variables
    let likeColor = $state(false); // mirrors currentImageLikedVal
    let likeCounter = $state(0); // instantiated then changed later
    let counterVisible = $derived(likeCounter > 0 ? true : false );


    function likedPhotoCheck() { 
        console.log('this is localstroage pull', localStorage.getItem(`${activePhotoLocation}${activePhotoText}`))
        likeColor = localStorage.getItem(`${activePhotoLocation}${activePhotoText}`) == 'true' ? true : false
    }

    /** @param {string} direction*/
    function switchPhoto( direction ) { 

        if (direction == "next"){
            if (i < (photoOrder.length-1)) {
                i += 1
            } else { i = 0 }
            
            animate = true
            // console.log(localStorage.getItem(`${chosenBatch[0].imgLocation}/${chosenBatch[0].ordinalNum}`))

            setTimeout(() => { 
                animate = false; // Start fade in
            }, userState.animationBaseLength*0.8); // This should match `out:fade` duration    

        } else if (direction == "prev") {
            if (i > (0)) {
                i -= 1
            } else { i = photoOrder.length-1 }
            
            animate = true

            setTimeout(() => { 
                animate = false; // Start fade in
            }, userState.animationBaseLength*0.8); // This should match `out:fade` duration 

        } else { 
            alert("Not a valid switchPhoto() input")
        }

        likedPhotoCheck() // check if current photo is liked
    }

    $inspect(activePhotoPath, activePhotoText, likeColor, likeCounter)

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

        if (res.ok) {
            const jsonResult = await res.json();
            let result = JSON.stringify(jsonResult)
            
            likeCounter = jsonResult?.rating
            
            console.log(result)
            
            if (routeEnd === 'up'){
                // set liked item into local storage
                localStorage.setItem(`${batch}${id}`, 'true')
            
                
            } else if (routeEnd === 'down'){
                // remove item from local storage 
                localStorage.removeItem(`${batch}${id}`)
            }

            likedPhotoCheck()
        } else {
            throw new Error( " Could not access photo on server ")
        }

        // likedPhotoCheck()
        
    }

    /** @param {string} imgLoc
     *  @param {string} ordinalNum
    */
    async function getPic(imgLoc, ordinalNum) {
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
            getPic(chosenBatch[0].imgLocation, chosenBatch[0].ordinalNum)
            likedPhotoCheck()
        }
    )

</script>

<div class='mainContentBox'  >
    <div class='picExtra'>
        <button class='nextPhotoButton' onclick={()=>{switchPhoto('prev'); getPic(activePhotoLocation, activePhotoText);}}> Prev </button>
    </div>

    <div class='pictureWrap'>
        {#if !animate}
        <div class="block" out:fly={{y: 200, duration: userState.animationBaseLength*0.8, easing:quartOut}} in:fly={{y:200, duration:userState.animationBaseLength*0.8, easing:quartIn}}>
            <img src={activePhotoPath} alt='mainPhoto'/>
            
            <div class="picFooter">
                
                <div class="likeBox {counterVisible ? "countVisible" : ""} ">

                    <button class='likeButton' onclick={() =>  {if (!likeColor) {likePic(activePhotoLocation, activePhotoText, "up") } else {likePic(activePhotoLocation, activePhotoText, "down") };}}>
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
        <button class='nextPhotoButton' onclick={()=>{switchPhoto('next'); getPic(activePhotoLocation, activePhotoText); }}> Next </button>
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
        border-radius: 2px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.521);
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
        max-height: 70vh;
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
<script> 

    /** @type {File[]}*/
    let files = $state([])

    /** @param {Event} e*/
    function onUpload (e) { 
        let t = /** @type {HTMLInputElement}*/ (e.target);

        if (t?.files){
            files.push(t.files[0])
        }
    }

</script>

<div class="p-12 m-auto flex flex-col gap-y-4 divide-y divide-white"> 

    <div class="pt-5 flex flex-row gap-x-10 items-center">
        {#if files[0]}
            <img src={URL.createObjectURL(files[0])} alt="thingie" id="preview"/>
        {:else}
            <div class="w-8 h-8 rounded-full border-2 border-solid border-white font-extralight text-sm text-center align-middle"> 1 </div>
        {/if}
        <input accept='image/*' type='file' name="photo1" id='imgInp' onchange={onUpload}/>
        Location: 
        <input type="text" name="photo1-imgLocation" />
        Description: 
        <input type="text" name="photo1-altText" />
    </div>

    <div class="pt-5 flex flex-row gap-x-10 items-center">
        {#if files[1]}
            <img src={URL.createObjectURL(files[1])} alt="thingie" id="preview"/>
        {:else}
            <div class="w-8 h-8 rounded-full border-2 border-solid border-white font-extralight text-sm text-center align-middle"> 2 </div>
        {/if}
        <input accept='image/*' type='file' name="photo2" id='imgInp2' onchange={onUpload} />
        Location: 
        <input type="text" name="photo2-imgLocation" />
        Description: 
        <input type="text" name="photo2-altText" />
    </div>

    <div class="pt-5 flex flex-row gap-x-10 items-center">
        {#if files[2]}
            <img src={URL.createObjectURL(files[2])} alt="thingie" id="preview"/>
        {:else}
            <div class="w-8 h-8 rounded-full border-2 border-solid border-white font-extralight text-sm text-center align-middle"> 3 </div>
        {/if}
        <input accept='image/*' type='file' name="photo3" id='imgInp3' onchange={onUpload}/>
        Location: 
        <input type="text" name="photo3-imgLocation" />
        Description: 
        <input type="text" name="photo3-altText" />
    </div>

    <div class="pt-5 flex flex-row gap-x-10 items-center">
        {#if files[3]}
            <img src={URL.createObjectURL(files[3])} alt="thingie" id="preview"/>
        {:else}
            <div class="w-8 h-8 rounded-full border-2 border-solid border-white font-extralight text-sm text-center align-middle"> 4 </div>
        {/if}
        <input accept='image/*' type='file' name="photo4" id='imgInp4' onchange={onUpload}/>
        Location: 
        <input type="text" name="photo4-imgLocation" />
        Description: 
        <input type="text" name="photo4-altText" />
    </div>

    <div class="pt-5 flex flex-row gap-x-10 items-center">
        {#if files[4]}
            <img src={URL.createObjectURL(files[4])} alt="thingie" id="preview"/>
        {:else}
            <div class="w-8 h-8 rounded-full border-2 border-solid border-white font-extralight text-sm text-center align-middle"> 5 </div>
        {/if}
        <input accept='image/*' type='file' name="photo5" id='imgInp5' onchange={onUpload}/>
        Location: 
        <input type="text" name="photo5-imgLocation" />
        Description: 
        <input type="text" name="photo5-altText" />
    </div>

</div>


<style>

    input[type=file] {
        width: 100px;
        overflow-x: hidden;
        color: transparent;
    }

    input::file-selector-button {
        height: 50px;
        width: 100px;
        font-size: 10px;
        border: 1px solid black;
        background-color: white;
        transition: 150ms linear;
    }

    input::file-selector-button:hover { 
        border: 2px solid black;
        background-color: var(--pink-accent);
        cursor: pointer;
    }

    input::file-selector-button:focus {
        border: 2px solid black;
        background-color: white;
    }

    input[type="text"] {
        border: 1px solid white;
        background-color: var(--background-color-2);
        width: 200px;
    }

    #preview { 
        height: 100px;
        width: 100px;
    }

</style> 
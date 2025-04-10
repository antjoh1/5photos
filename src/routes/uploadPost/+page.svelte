<script>
	/** @type { {[key: string]: {file: File, url: string} } }*/
	let files = $state({});

	/** @param {Event} e*/
	function onUpload(e) {
		let t = /** @type {HTMLInputElement}*/ (e.target);

		if (t?.files) {
			let name = t.name;
			files[t.name] = { file: t.files[0], url: URL.createObjectURL(t.files[0]) };
			console.log(files[name].url);
		}
	}
</script>

<form class='flex-col w-100' enctype="multipart/form-data" method="POST">

    <div class='flex gap-x-10 justify-start items-center px-12'>    
        Batch name: 
        <input type='text' name='batchName' />
    </div>
    
    <div class='m-auto flex flex-col gap-y-4 divide-y divide-white p-12'>
        <div class='flex flex-row items-center gap-x-10 pt-5'>
            {#if files.photo1}
                <img class='preview' src={files.photo1.url} alt='thingie' id='preview1' />
            {:else}
                <div class='flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight'>
                    1
                </div>
            {/if}
            <input accept='image/*' type='file' name='photo1' id='imgInp' onchange={onUpload} />

            <label for='photo1-imgLocation'>
                Location:
            </label>

            <input type='text' name='photo1-imgLocation' id='photo1-imgLocation'/>

            <label for='photo1-altText'>    
                Description:
            </label>

            <input type='text' name='photo1-altText' id='photo1-altText'/>
        </div>
        
        <div class='flex flex-row items-center gap-x-10 pt-5'>
            {#if files.photo2}
                <img class='preview' src={files.photo2.url} alt='thingie' id='preview2' />
            {:else}
                <div class='flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight'>
                    2
                </div>
            {/if}

            <input accept='image/*' type='file' name='photo2' id='imgInp2' onchange={onUpload} />

            <label for='photo2-imgLocation'>
                Location:
            </label>

            <input type='text' name='photo2-imgLocation' id='photo2-imgLocation'/>

            <label for='photo2-altText'>    
                Description:
            </label>

            <input type='text' name='photo2-altText' id='photo2-altText'/>
        </div>
        
        <div class='flex flex-row items-center gap-x-10 pt-5'>
            {#if files.photo3}
                <img class='preview' src={files.photo3.url} alt='thingie' id='preview3' />
            {:else}
                <div class='flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight'>
                    3
                </div>
            {/if}
            <input accept='image/*' type='file' name='photo3' id='imgInp3' onchange={onUpload} />

            <label for='photo3-imgLocation'>
                Location:
            </label>
            <input type='text' name='photo3-imgLocation' id='photo3-imgLocation'/>

            <label for='photo3-altText'>    
                Description:
            </label>
            <input type='text' name='photo3-altText' id='photo3-altText'/>
        </div>
        
        <div class='flex flex-row items-center gap-x-10 pt-5'>
            {#if files.photo4}
                <img class='preview' src={files.photo4.url} alt='thingie' id='preview4' />
            {:else}
                <div class='flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight'>
                    4
                </div>
            {/if}
            <input accept='image/*' type='file' name='photo4' id='imgInp4' onchange={onUpload} />

            <label for='photo4-imgLocation'>
                Location:
            </label>

            <input type='text' name='photo4-imgLocation' id='photo4-imgLocation'/>

            <label for='photo4-altText'>    
                Description:
            </label>

            <input type='text' name='photo4-altText' id='photo4-altText'/>
        </div>
        
        <div class='flex flex-row items-center gap-x-10 pt-5'>
            {#if files.photo5}
                <img class='preview' src={files.photo5.url} alt='thingie' id='preview5' />
            {:else}
                <div class='flex h-20 w-20 items-center justify-center rounded-full border-2 border-solid border-white font-extralight'>
                    5
                </div>
            {/if}
            <input accept='image/*' type='file' name='photo5' id='imgInp5' onchange={onUpload} />

            <label for='photo5-imgLocation'>
                Location:
            </label>
            <input type='text' name='photo5-imgLocation' id='photo5-imgLocation'/>

            <label for='photo5-altText'>    
                Description:
            </label>
            <input type='text' name='photo5-altText' id='photo5-altText'/>
        </div>
    </div>

    <div class='px-12'>    
        <input type='submit' class='flex bg-black hover:bg-[var(--pink-accent)] border border-solid hover:border-black text-white hover:text-black p-3 justify-self-end transition duration-250 ease-in' value="Submit Photos!">
    </div>

</form>

<style>
    input[type='file'] {
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

	input[type='text'] {
		border: 1px solid white;
		background-color: var(--background-color-2);
		width: 200px;
	}

	.preview {
		background-color: white;
		padding: 0.5rem;
		height: 200px;
		width: 200px;
	}

	img {
		object-fit: cover;
	}

    
</style>

<script>
	import '../app.css';
	let { children } = $props();

</script>

<header > 
	
	<div class='siteLogo'> 5 PHOTOS </div>
	<div class="textContainer">
        reach out
        <div class="circle"></div>
    </div>
	
</header>

{@render children()}

<footer>
	<div class="textContainer bottom">
        archive
        <div class="circle"></div>
    </div>
	<!-- <div> B. Syla </div> -->
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap');
	
	header { 
		display: flex; 
		justify-content: space-between;
		padding: 2rem;
		margin-bottom: 1rem;
		background-color: var(--header-color);
		color: var(--text-color-header);
		font-family: 'Lexend exa';
		font-weight: 200;
		font-size: xx-large;
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 2rem;
		background-color: var(--background-color-2);
		font-family: 'Lexend exa';
		font-weight: 200;
		font-size: x-large;
	}

	.textContainer { 
		position: relative;
		display: inline-block;
		/* background-color: black; */
		color: white;
		font-family: sans-serif;
		font-size: 2rem;
		padding-right: 20px;
		padding-left: 20px;
		border-radius: 5px;
		transition: color 250ms ease-in-out;
	}
	
	.bottom { 
		color: black;
	}

	/* Hover effect */ 
    .textContainer:hover {
           color: black; /* Text changes to black */
		   z-index: 1;
    }

	.circle {
		position: absolute;
		top: -5px;
		right: -5px;
		width: 12px;
		height: 12px;
		background-color: #F19AC8;
		border-radius: 50%;
		transition: all 250ms ease-in-out;
     }

	.textContainer:hover .circle {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            top: 0;
            right: 0;
            background-color: #F19AC8;
            z-index: -1; 
        }

</style>
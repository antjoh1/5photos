<script>
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
	let reachMeToggle = $state(false); 

	let reachMeText = $derived(reachMeToggle ? 'photos' : 'reach out')
	let reachMeLink = $derived(reachMeToggle ? base+'/reachMe' : base+'/')

</script>

<header > 
	<div class='textContainer'> 5 PHOTOS </div>
	<div class='textContainer interactive'>
        <a href={reachMeLink} onclick={() => {reachMeToggle = !reachMeToggle; console.log(reachMeToggle)}}>{reachMeText}</a>
        <div class="circle"></div>
    </div>
</header>

{@render children()}

<footer>
	<div class="textContainer interactive bottom">
        archive
        <div class="circle"></div>
    </div>
	<div> B. Syla </div>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap');
	
	header { 
		display: flex; 
		justify-content: space-between;
		align-content:last baseline;
		padding: 2.5rem 5rem 1rem 5rem;
		background-color: var(--header-color);
		color: var(--text-color-header);
		font-family: 'Lexend exa';
		font-weight: 200;
		font-size: 1.5rem;
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 1rem 5rem 3rem 5rem;
		background-color: var(--background-color-3);
		font-family: 'Lexend exa';
		font-weight: 100;
		font-size: 1.5rem;
	}


	.textContainer { 
		position: relative;
		display: inline-block;
		color: white;
		font-family: 'Lexend exa';
		font-weight: 100;
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
    .textContainer.interactive:hover {
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
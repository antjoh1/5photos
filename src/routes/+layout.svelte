<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { slide, fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { userState } from './state.svelte';
	import ArchivePicker from '$lib/archivePicker.svelte';

	let { data, children } = $props(); //
	let reachMeToggle = $state(false); 

	let reachMeText = $derived(reachMeToggle ? 'photos' : 'reach out')
	let reachMeLink = $derived(reachMeToggle ? base+'/reachMe' : base+'/')

	let dummyDates = ['Jan 25', 'Feb 25']
	let selectedDate = $state(dummyDates[0])

	console.log(data)

	$inspect(userState)

</script>

<div class='wholePageContainer'>
	<div>
		<header> 
			<div class='titleLogo'> 5 PHOTOS </div>
			<div class='textContainer interactive'>
				<div>
					<input type='checkbox' name='archive' id='archive' bind:checked={userState.archiveToggle}/>  
					<label for='archive'> archive </label>
				</div>
				<div class="circle"></div>
			</div>
			<div class='textContainer interactive'>
				<a href={reachMeLink} onclick={() => {reachMeToggle = !reachMeToggle; console.log(reachMeToggle)}}>{reachMeText}</a>
				<div class="circle"></div>
			</div>
		</header>

		{#key page.data}
			<div in:slide={{axis: 'y', duration: 850, delay: 900}} out:slide={{axis: 'y', duration: 850}}>
				{@render children()}
			</div>
		{/key}


		{#if userState.archiveToggle}
			<div class='blurBgDiv' in:fade={{duration: userState.introDuration/4}} out:fade={{duration: userState.introDuration/4}}></div>
			<div class='firstLoadMessage'> 
				<ArchivePicker></ArchivePicker> 
				<button onclick={() => userState.archiveToggle=false}> Select </button>
			</div>
			
		{/if}
	</div>

	<footer>
		<div class='textContainer bottom'> Bleona S. </div>
		<div class='textContainer bottom'> {selectedDate}</div>
	</footer>

</div>

<style>

	.titleLogo {
		color: white;
		font-weight: 100;
		transition:  250ms;
		font-size: 24px;
	}

	.wholePageContainer { 
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		row-gap: 50px;
		justify-content: space-between;
	}
	header { 
		display: flex; 
		justify-content: space-between;
		/* align-content:last baseline; */
		align-items: center;
		padding: 20px 40px 20px 40px;
		background-color: var(--header-color);
		color: var(--text-color-header);
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 20px 40px 20px 40px;
		background-color: var(--background-color-3);
		font-weight: 100;
		font-size: 1em;
	}

	.bottom { 
		color: black;
	}

	/* Hover effect */ 
    .textContainer.interactive:hover {
		color: black; /* Text changes to black */
		z-index: 1;
    }

	input { 
		display: none;
	}

	@media (max-width: 800px) {
		header {padding: 20px 10px 20px 10px}
		.titleLogo {font-size: 15px; font-weight: 200;}
	}


</style>
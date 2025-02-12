<script>
	import '../app.css';

	import { base } from '$app/paths';
	import { slide, fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { userState } from './state.svelte';

	let { data, children } = $props(); //
	let reachMeToggle = $state(false); 

	let reachMeText = $derived(reachMeToggle ? 'photos' : 'reach out')
	let reachMeLink = $derived(reachMeToggle ? base+'/reachMe' : base+'/')

	let dummyDates = ['Jan 25', 'Feb 25']
	let selectedDate = $state(dummyDates[0])

	console.log(data)

	$inspect(userState)

</script>

<header> 
	<div class='textContainer'> 5 PHOTOS </div>
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
    <div class='firstLoadMessage'> <button onclick={() => userState.archiveToggle=false}> Choose a thing </button></div>
{/if}

<footer>
	<div class='textContainer bottom '> B. Syla </div>
	<div> {selectedDate}</div>
</footer>

<style>
	header { 
		display: flex; 
		justify-content: space-between;
		align-content:last baseline;
		padding: 2.5rem 5rem 1rem 5rem;
		background-color: var(--header-color);
		color: var(--text-color-header);
		font-weight: 100;
		font-size: 1.5em;
	}

	footer {
		display: flex;
		justify-content: space-between;
		padding: 1rem 5rem 3rem 5rem;
		background-color: var(--background-color-3);
		font-weight: 100;
		font-size: 1.5em;
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


</style>
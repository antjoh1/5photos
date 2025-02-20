<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { slide, fade, fly} from 'svelte/transition';
    import { quartIn, quartOut } from "svelte/easing";  
	import { userState } from './state.svelte';
	import ArchivePicker from '$lib/archivePicker.svelte';

	let { data, children } = $props(); 
	const reachMeLink = base+'/reachMe'

    let blurBg = $state(false); 
    let introMsgFlag = $state(false);

    onMount( () => {
        if (userState.firstLoadCounter < 1){
            blurBg = true
            introMsgFlag = true
        }
    })

	$inspect(userState)

</script>

<div class='wholePageContainer'>
	<div>
		<header> 
			<div class='titleLogo'> <a href={base+'/'}>5 SCENES </a></div>
			<div class='textContainer interactive'>
				<div>
					<input type='checkbox' name='archive' id='archive' bind:checked={userState.archiveToggle}/>  
					<label for='archive'> photos </label>
				</div>
				<div class="circle"></div>
			</div>
			<div class='textContainer interactive'>
				<a href={reachMeLink}>reach out</a>
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
			<div class='firstLoadMessage archive'> 
				<ArchivePicker {data}></ArchivePicker> 
			</div>
			
		{/if}
	</div>

	<footer>
		<div class='textContainer bottom'> Bleona S. </div>
		<div class='textContainer bottom'> {userState.pickedDate}</div>
	</footer>
</div>

<!-- BELOW IS FIRST LOAD BLUR POPUP - ONLY SHOWS UP ON FIRST LOAD  -->
{#if blurBg}
    <div class='blurBgDiv' in:fade={{delay:userState.introDuration/3, duration: userState.introDuration}} out:fade={{delay: userState.introDuration/3, duration: userState.introDuration}}></div>
{/if}
{#if introMsgFlag}
    <div class='firstLoadMessage' in:fly={{delay: userState.introDuration*1.5, x:-1000, duration: userState.introDuration, easing:quartOut}} out:fly={{x:-800, duration: userState.introDuration, easing:quartIn}}>
        
        <div class='disclaimerMsg'> 
            <h1 class='firstLoadTitle'>Hi!</h1>
            <h2>
                This is a little page where I post 5 photos every week. 
            </h2>
            <h2> If you like any of the photos and you'd like to have them in higher quality
                please reach out. I'd be happy to send them to you.
            </h2>
    	</div>
        <p class='disclaimerText'> Disclaimer: If you find yourself on a photo and you don't want it to be online - please reach out and I'll take it down. </p>

		<button class='firstLoadButton' onclick={()=>{blurBg=false; introMsgFlag=false; userState.firstLoadCounter=1}}> 
			Welcome!
		</button>
    </div>
{/if} 

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

	.blurBgDiv { 
        height: 100vh;
        width: 100vw;
        backdrop-filter: blur(10px);
        inset: 0;
        max-width: 100vw;
        max-height: 100dvh;
        z-index: 2;
        padding: 2rem;
    }

    .disclaimerText { 
        font-size: 10px;
        font-style: italic;
    }

    .disclaimerMsg {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .firstLoadButton { 
        background-color: var(--pink-accent);
        position: relative;
        align-self: center;
        font-weight: 100;
        font-size: 1em;
        padding:  1% 5% 1% 5%;
        border-radius: 5%;
        transition: color 500ms ease-in-out;
    }
/* 
    .firstLoadButton:hover { 
        background-color: #ee79b7;
        transition: color 2500ms ease-in-out;
    } */


	.archive { 
		justify-content: center;
		width: 20vw;
		height: 300px;
	}

	input { 
		display: none;
	}

	@media (max-width: 800px) {
		header {padding: 20px 10px 20px 10px}
		.titleLogo {font-size: 15px; font-weight: 200;}
		.archive {width: 50vw;}
	}

	@media (hover: hover) {
    .firstLoadButton:hover {
        background-color: #ee54a6;
		transition: color 2500ms ease-in-out;
    	}
	}


</style>
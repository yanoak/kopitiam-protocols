<script>
	let { src = '', alt = 'Scene image', className = '', currentSpeaker = null } = $props();

	$effect(() => {
		console.log('currentSpeaker', currentSpeaker);
		console.log('overlayImage', overlayImage);
	});

	// Character image mapping
	const characterImages = {
		'elder-daughter': '/img/elder-daughter.png',
		'younger-daughter': '/img/younger-daughter.png',
		'grandma': '/img/grandma.png',
		'waiter': '/img/waiter.png',
		'son-in-law': '/img/son-in-law.png'
	};

	// Determine which images to show (reactive)
	const backgroundImage = $derived(currentSpeaker ? '/img/scene_bw.png' : '/img/scene.png');
	const overlayImage = $derived(currentSpeaker ? characterImages[currentSpeaker] : null);
</script>

<div class="image-holder {className}">
	{#if src}
		<img {src} {alt} class="scene-image" />
	{:else}
		<div class="image-layers">
			<!-- Background scene (color or B&W) -->
			<img 
				src={backgroundImage} 
				alt="Kopitiam scene" 
				class="background-image"
			/>
			
			<!-- Character overlay (when speaking) -->
			{#if overlayImage}
				<img 
					src={overlayImage} 
					alt="Current speaker" 
					class="character-overlay"
				/>
			{/if}
		</div>
	{/if}
</div>

<style>
	.image-holder {
		aspect-ratio: 1;
		width: 100%;
		max-width: 500px;
		background-color: #f8f9fa;
		border: 2px solid #e9ecef;
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.scene-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.image-layers {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.background-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition: opacity 0.5s ease-in-out;
	}

	.character-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		opacity: 0;
		animation: fadeInCharacter 0.6s ease-in-out forwards;
		pointer-events: none;
	}

	@keyframes fadeInCharacter {
		0% {
			opacity: 0;
			transform: scale(1.05);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}

	.placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #6c757d;
		text-align: center;
		padding: 2rem;
	}

	.placeholder-icon {
		margin-bottom: 1rem;
		opacity: 0.5;
	}

	.placeholder-text {
		font-size: 1.1rem;
		font-weight: 500;
		margin: 0;
		opacity: 0.7;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.image-holder {
			max-width: 100%;
		}
		
		.placeholder {
			padding: 1rem;
		}
		
		.placeholder-text {
			font-size: 1rem;
		}
	}
</style>

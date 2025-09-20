<script>
	import ChatBox from '$lib/components/ChatBox.svelte';
	import ImageHolder from '$lib/components/ImageHolder.svelte';
	import dialogData from '../dialog.json';
</script>

<svelte:head>
	<title>Protocol Watching at the Kopitiam</title>
	<meta
		name="description"
		content="An interactive story experience set in a traditional kopitiam"
	/>
</svelte:head>

<div class="main-container">
	<div class="two-panel-layout">
		<!-- Left Panel - Chat Box -->
		<div class="left-panel">
			<ChatBox dialogLines={dialogData} />
		</div>
		
		<!-- Right Panel - Image Holder -->
		<div class="right-panel">
			<ImageHolder src="/img/scene.png" alt="Kopitiam scene" />
		</div>
	</div>
</div>

<style>
	.main-container {
		
		background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
		padding: 1rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.two-panel-layout {
		max-width: 1200px;
		margin: 0 auto;
		height: calc(100vh - 2rem);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		align-items: stretch;
	}

	.left-panel {
		display: flex;
		flex-direction: column;
		max-height: 90vh;
	}

	.right-panel {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.main-container {
			padding: 0.5rem;
		}
		
		.two-panel-layout {
			height: calc(100vh - 1rem);
			grid-template-columns: 1fr;
			grid-template-rows: 1fr auto;
			gap: 1rem;
		}
		
		.right-panel {
			max-height: 300px;
		}
	}

	@media (max-width: 480px) {
		.main-container {
			padding: 0.25rem;
		}
		
		.two-panel-layout {
			height: calc(100vh - 0.5rem);
			gap: 0.75rem;
		}
		
		.right-panel {
			max-height: 250px;
		}
	}
</style>

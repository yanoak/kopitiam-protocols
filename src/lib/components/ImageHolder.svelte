<script>
	let { src = '', alt = 'Scene image', className = '' } = $props();
</script>

<div class="image-holder {className}">
	{#if src}
		<img {src} {alt} class="scene-image" />
	{:else}
		<div class="placeholder">
			<div class="placeholder-icon">
				<svg
					width="48"
					height="48"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2" />
					<circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="2" />
					<polyline points="21,15 16,10 5,21" stroke="currentColor" stroke-width="2" />
				</svg>
			</div>
			<p class="placeholder-text">Scene Image</p>
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

<script>
	import { getNode, getStartNode } from '$lib/story.js';

	// Current story state
	let currentNode = $state(getStartNode());
	let visitedNodes = $state([]);

	// Navigate to a new story node
	function navigateToNode(nodeId) {
		const newNode = getNode(nodeId);
		if (newNode) {
			// Add current node to visited nodes if not already there
			if (!visitedNodes.includes(currentNode.id)) {
				visitedNodes.push(currentNode.id);
			}
			currentNode = newNode;
		}
	}

	// Reset the story to the beginning
	function resetStory() {
		currentNode = getStartNode();
		visitedNodes = [];
	}

	// Check if we can go back (if there are visited nodes)
	function canGoBack() {
		return visitedNodes.length > 0;
	}

	// Go back to the previous node
	function goBack() {
		if (canGoBack()) {
			const previousNodeId = visitedNodes.pop();
			currentNode = getNode(previousNodeId);
		}
	}
</script>

<div
	class="story-container mx-auto min-h-screen max-w-4xl bg-gradient-to-br from-amber-50 to-orange-50 p-6"
>
	<!-- Header -->
	<header class="mb-8 text-center">
		<h1 class="mb-2 text-4xl font-bold text-amber-900">Kopitiam Protocols</h1>
		<p class="text-lg text-amber-700">An Interactive Story Experience</p>
	</header>

	<!-- Story Content -->
	<main class="story-content mb-6 rounded-lg bg-white p-8 shadow-lg">
		<!-- Story Title -->
		<h2 class="mb-4 border-b border-amber-200 pb-2 text-2xl font-semibold text-gray-800">
			{currentNode.title}
		</h2>

		<!-- Story Text -->
		<div class="prose prose-lg mb-8 max-w-none prose-amber">
			{@html currentNode.text.replace(/\n\n/g, '</p><p class="mb-4">')}
		</div>

		<!-- Choices -->
		{#if currentNode.choices && currentNode.choices.length > 0}
			<div class="choices space-y-3">
				<h3 class="mb-4 text-lg font-medium text-gray-700">What do you choose?</h3>
				{#each currentNode.choices as choice, index}
					<button
						onclick={() => navigateToNode(choice.nextNode)}
						class="choice-button w-full rounded-lg border border-amber-300 bg-amber-100 p-4 text-left transition-colors duration-200 hover:bg-amber-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
					>
						<span class="font-medium text-amber-900">
							{String.fromCharCode(65 + index)}. {choice.text}
						</span>
					</button>
				{/each}
			</div>
		{:else}
			<!-- End of story branch -->
			<div class="ending-message rounded-lg border border-amber-200 bg-amber-50 p-6 text-center">
				<h3 class="mb-3 text-xl font-semibold text-amber-900">The End</h3>
				<p class="mb-4 text-amber-700">You've reached the end of this story path.</p>
				<button
					onclick={resetStory}
					class="rounded-lg bg-amber-600 px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
				>
					Start New Story
				</button>
			</div>
		{/if}
	</main>

	<!-- Navigation Controls -->
	<footer class="flex items-center justify-between">
		<div>
			{#if canGoBack()}
				<button
					onclick={goBack}
					class="back-button rounded-lg bg-gray-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
				>
					← Go Back
				</button>
			{/if}
		</div>

		<div class="text-sm text-gray-500">
			Current: {currentNode.id} | Visited: {visitedNodes.length} nodes
		</div>

		<button
			onclick={resetStory}
			class="reset-button rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none"
		>
			Reset Story
		</button>
	</footer>
</div>

<style>
	.story-container {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.choice-button:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.choice-button:active {
		transform: translateY(0);
	}
</style>

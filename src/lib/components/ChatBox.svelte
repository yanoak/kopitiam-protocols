<script>
	let { dialogLines = [], className = '', onNext } = $props();

	// State to track which dialog lines to show
	let currentDialogIndex = $state(0);
	
	// Reference to the chat messages container
	let chatMessagesElement = $state();

	// Character display names
	const characterNames = {
		'elder-daughter': 'Elder Daughter',
		'younger-daughter': 'Younger Daughter',
		'grandma': 'Grandma',
		'waiter': 'Waiter',
		'son-in-law': 'Son-in-law'
	};

	// Character colors for chat bubbles
	const characterColors = {
		'elder-daughter': 'bg-blue-100 border-blue-300',
		'younger-daughter': 'bg-pink-100 border-pink-300',
		'grandma': 'bg-amber-100 border-amber-300',
		'waiter': 'bg-green-100 border-green-300',
		'son-in-law': 'bg-purple-100 border-purple-300'
	};

	// Computed property for visible dialog lines
	const visibleDialogLines = $derived(dialogLines.slice(0, currentDialogIndex));
	
	// Check if we can show more lines
	const hasMoreLines = $derived(currentDialogIndex < dialogLines.length);

	// Function to scroll to bottom of chat
	function scrollToBottom() {
		if (chatMessagesElement) {
			// Use setTimeout to ensure the DOM has updated before scrolling
			setTimeout(() => {
				chatMessagesElement.scrollTo({
					top: chatMessagesElement.scrollHeight,
					behavior: 'smooth'
				});
			}, 50);
		}
	}

	function handleNext() {
		if (hasMoreLines) {
			currentDialogIndex++;
			// Scroll to bottom after adding new message
			scrollToBottom();
		} else {
			// Restart: reset to beginning
			currentDialogIndex = 0;
			// Scroll to top when restarting
			if (chatMessagesElement) {
				setTimeout(() => {
					chatMessagesElement.scrollTo({
						top: 0,
						behavior: 'smooth'
					});
				}, 50);
			}
		}
		
		if (onNext) {
			onNext(currentDialogIndex, hasMoreLines);
		}
	}

	// Reset dialog index when dialogLines change
	$effect(() => {
		if (dialogLines) {
			currentDialogIndex = 0;
		}
	});

	// Auto-scroll when visible dialog lines change (new message added)
	$effect(() => {
		if (visibleDialogLines.length > 0) {
			scrollToBottom();
		}
	});
</script>

<div class="chat-box {className} h-[300px]">
	<div class="chat-header">
		<div class="header-content">
			<div class="header-text">
				<h3 class="chat-title">Kopitiam Conversations</h3>
				<div class="chat-subtitle">Listen to the protocols unfold...</div>
			</div>
			<button 
				class="next-button" 
				onclick={handleNext} 
				type="button"
			>
				<span class="next-text">{hasMoreLines ? 'Next' : 'Restart'}</span>
				{#if hasMoreLines}
					<svg class="next-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
					</svg>
				{:else}
					<svg class="next-icon" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
	
	<div class="chat-messages" bind:this={chatMessagesElement}>
		{#if visibleDialogLines && visibleDialogLines.length > 0}
			{#each visibleDialogLines as line, index}
				<div class="message-container">
					<div class="message {characterColors[line['character-code']] || 'bg-gray-100 border-gray-300'}">
						<div class="message-header">
							<span class="character-name">
								{characterNames[line['character-code']] || line.character}
							</span>
							{#if line.intonation}
								<span class="intonation">{line.intonation}</span>
							{/if}
						</div>
						<div class="message-text">
							{line.text}
						</div>
						{#if line.protocol || line.tension}
							<div class="message-meta">
								{#if line.protocol}
									<span class="protocol-tag">#{line.protocol}</span>
								{/if}
								{#if line.tension}
									<span class="tension-tag">{line.tension}</span>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		{:else}
			<div class="empty-state">
				<div class="empty-icon">💬</div>
				<p class="empty-text">{dialogLines && dialogLines.length > 0 ? 'Ready to begin...' : 'No conversations yet'}</p>
				<p class="empty-subtitle">{dialogLines && dialogLines.length > 0 ? 'Click "Next" to start the conversation' : 'Dialog lines will appear here as the story unfolds'}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.chat-box {
		height: 100%;
		background-color: white;
		border-radius: 12px;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.chat-header {
		padding: 1rem 1.25rem;
		background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
		color: white;
		border-bottom: 1px solid #e5e7eb;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.header-text {
		flex: 1;
	}

	.chat-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.25rem 0;
	}

	.chat-subtitle {
		font-size: 0.875rem;
		opacity: 0.9;
		margin: 0;
	}

	.next-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: rgba(255, 255, 255, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 6px;
		color: white;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
		backdrop-filter: blur(10px);
	}

	.next-button:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-1px);
	}

	.next-button:active {
		transform: translateY(0);
	}


	.next-text {
		white-space: nowrap;
	}

	.next-icon {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
	}

	.chat-messages {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.message-container {
		display: flex;
		flex-direction: column;
	}

	.message {
		border-radius: 12px;
		border: 1px solid;
		padding: 0.875rem;
		margin-bottom: 0.5rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.message:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.message-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.character-name {
		font-weight: 600;
		font-size: 0.875rem;
		color: #374151;
	}

	.intonation {
		font-size: 0.75rem;
		color: #6b7280;
		font-style: italic;
	}

	.message-text {
		color: #1f2937;
		line-height: 1.5;
		margin-bottom: 0.5rem;
	}

	.message-meta {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-top: 0.5rem;
	}

	.protocol-tag {
		background-color: #dbeafe;
		color: #1e40af;
		font-size: 0.75rem;
		padding: 0.25rem 0.5rem;
		border-radius: 9999px;
		font-weight: 500;
	}

	.tension-tag {
		background-color: #fef3c7;
		color: #92400e;
		font-size: 0.75rem;
		padding: 0.25rem 0.5rem;
		border-radius: 9999px;
		font-weight: 500;
	}

	.empty-state {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #6b7280;
		padding: 2rem;
	}

	.empty-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		opacity: 0.5;
	}

	.empty-text {
		font-size: 1.125rem;
		font-weight: 500;
		margin: 0 0 0.5rem 0;
	}

	.empty-subtitle {
		font-size: 0.875rem;
		margin: 0;
		opacity: 0.7;
	}

	/* Scrollbar styling */
	.chat-messages::-webkit-scrollbar {
		width: 6px;
	}

	.chat-messages::-webkit-scrollbar-track {
		background: #f1f5f9;
		border-radius: 3px;
	}

	.chat-messages::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 3px;
	}

	.chat-messages::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.chat-header {
			padding: 0.75rem 1rem;
		}
		
		.header-content {
			gap: 0.75rem;
		}
		
		.chat-title {
			font-size: 1.125rem;
		}
		
		.next-button {
			padding: 0.375rem 0.75rem;
			font-size: 0.8125rem;
		}
		
		.next-text {
			display: none;
		}
		
		.next-icon {
			width: 0.875rem;
			height: 0.875rem;
		}
		
		.chat-messages {
			padding: 0.75rem;
		}
		
		.message {
			padding: 0.75rem;
		}
		
		.message-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}
</style>

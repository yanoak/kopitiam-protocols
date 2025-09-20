<script>
	let { dialogLines = [], className = '' } = $props();

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
</script>

<div class="chat-box {className} h-[300px]">
	<div class="chat-header">
		<h3 class="chat-title">Kopitiam Conversations</h3>
		<div class="chat-subtitle">Listen to the protocols unfold...</div>
	</div>
	
	<div class="chat-messages">
		{#if dialogLines && dialogLines.length > 0}
			{#each dialogLines as line, index}
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
				<p class="empty-text">No conversations yet</p>
				<p class="empty-subtitle">Dialog lines will appear here as the story unfolds</p>
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
		
		.chat-title {
			font-size: 1.125rem;
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

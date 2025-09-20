// Interactive story data for the Kopitiam Protocols
export const storyData = {
	start: {
		id: 'start',
		title: 'Welcome to Ah Beng Kopitiam',
		text: `You step into the bustling kopitiam, the aroma of kopi and toast filling the air. The morning rush is in full swing, and you notice the staff following precise protocols to serve customers efficiently.

Uncle Lim, the kopitiam owner, spots you and waves you over with a knowing smile.

"Ah, you're here! We could use some help today. What would you like to do?"`,
		choices: [
			{
				text: 'Order a traditional kopi and observe the morning protocols',
				nextNode: 'order_kopi'
			},
			{
				text: 'Offer to help Uncle Lim with the kopitiam protocols',
				nextNode: 'help_protocols'
			},
			{
				text: 'Ask about the history of this kopitiam',
				nextNode: 'kopitiam_history'
			}
		]
	},

	order_kopi: {
		id: 'order_kopi',
		title: 'The Art of Kopi Making',
		text: `You approach the kopi uncle who greets you with a practiced nod. "What you want ah?"

You watch in fascination as he follows the traditional protocols: pulling the perfect brew, adding condensed milk with precise movements, and the signature pour that creates the perfect foam.

"One kopi-o kosong!" he calls out, sliding your cup across the marble counter.

As you sip your coffee, you notice how every action in the kopitiam follows an unspoken protocol. What catches your attention next?`,
		choices: [
			{
				text: 'Study the toast-making protocol at the char siu counter',
				nextNode: 'toast_protocol'
			},
			{
				text: 'Observe the table-clearing efficiency system',
				nextNode: 'table_clearing'
			},
			{
				text: 'Help Uncle Lim with the morning protocols',
				nextNode: 'help_protocols'
			}
		]
	},

	help_protocols: {
		id: 'help_protocols',
		title: 'Learning the Protocols',
		text: `Uncle Lim's face lights up. "Wah, good timing! Morning rush very busy, need to follow protocols properly."

He hands you a worn notebook filled with handwritten procedures. "These are our kopitiam protocols - how to serve customers fast-fast, keep everything clean, and make sure no waste."

You flip through pages detailing everything from optimal table arrangements to the secret ratios for the perfect kaya toast.

"Which protocol you want to learn first?"`,
		choices: [
			{
				text: 'Master the "efficiency triangle" table service protocol',
				nextNode: 'service_protocol'
			},
			{
				text: 'Learn the traditional kopi brewing specifications',
				nextNode: 'brewing_protocol'
			},
			{
				text: 'Study the inventory management system',
				nextNode: 'inventory_protocol'
			}
		]
	},

	kopitiam_history: {
		id: 'kopitiam_history',
		title: 'Tales of Tradition',
		text: `Uncle Lim's eyes twinkle as he settles into storytelling mode. "This kopitiam, ah, my father started in 1952. Every protocol here got history!"

He points to the well-worn marble tables. "These protocols, not just for efficiency - they preserve our heritage. The way we make kopi, how we serve customers, even how we arrange the chairs... all got meaning."

"My grandfather always say: 'Protocols not just rules - they are the soul of the kopitiam.'"

You realize you're witnessing living history in action.`,
		choices: [
			{
				text: 'Ask to help preserve these traditional protocols',
				nextNode: 'preserve_tradition'
			},
			{
				text: "Learn about the modern adaptations they've made",
				nextNode: 'modern_adaptations'
			},
			{
				text: 'Order some food and experience the protocols firsthand',
				nextNode: 'order_kopi'
			}
		]
	},

	toast_protocol: {
		id: 'toast_protocol',
		title: 'The Perfect Toast Procedure',
		text: `You watch the char siu uncle work with mechanical precision. Each slice of bread follows the same protocol: exact butter thickness, perfect char marks from the charcoal fire, kaya spread with three precise swipes.

"The secret," he whispers, "is in the timing and temperature. Too fast, bread not crispy. Too slow, kaya melts away."

You've discovered that even the simplest kopitiam dish follows intricate protocols perfected over decades.

This attention to detail explains why this kopitiam has survived while others closed down.`,
		choices: [
			{
				text: 'Document these traditional protocols for future generations',
				nextNode: 'document_protocols'
			},
			{
				text: 'Return to Uncle Lim to learn more',
				nextNode: 'help_protocols'
			}
		]
	},

	table_clearing: {
		id: 'table_clearing',
		title: 'Efficiency in Motion',
		text: `You observe the table-clearing protocol: a choreographed dance of efficiency. The cleaning auntie moves in a specific pattern, clearing tables in a sequence that maximizes turnover while maintaining hygiene standards.

"Everything got system," she explains, noticing your interest. "Must clear from back to front, wipe anti-clockwise, sanitize every surface. Cannot anyhow do!"

The protocol ensures tables are ready for the next customers within 90 seconds. No wasted motion, no missed spots.`,
		choices: [
			{
				text: 'Learn to implement this cleaning protocol',
				nextNode: 'cleaning_master'
			},
			{
				text: 'Study how this fits into the larger kopitiam ecosystem',
				nextNode: 'ecosystem_understanding'
			}
		]
	},

	service_protocol: {
		id: 'service_protocol',
		title: 'The Efficiency Triangle Mastery',
		text: `Uncle Lim shows you the "efficiency triangle" - a serving protocol where each staff member covers a triangular zone, optimizing movement and ensuring no customer waits too long.

After practicing for an hour, you've mastered the graceful ballet of kopitiam service. Customers are impressed by your newfound efficiency, and Uncle Lim beams with pride.

"Wah! You got natural talent for kopitiam protocols!"

You've become an honorary member of the Ah Beng Kopitiam family, guardian of traditional protocols.`,
		choices: [
			{
				text: 'Start your own kopitiam using these protocols',
				nextNode: 'new_kopitiam'
			},
			{
				text: 'Help modernize the protocols for the digital age',
				nextNode: 'digital_protocols'
			}
		]
	},

	preserve_tradition: {
		id: 'preserve_tradition',
		title: 'Guardian of Tradition',
		text: `Uncle Lim entrusts you with the sacred duty of preserving the kopitiam protocols. You spend the next months documenting every procedure, every secret, every nuance that makes this place special.

Your documentation becomes the definitive guide to traditional kopitiam operations, ensuring these time-tested protocols survive for future generations.

The kopitiam thrives, and Uncle Lim credits you as the "Protocol Keeper" - a title that fills you with immense pride.`,
		choices: [
			{
				text: 'Restart your kopitiam adventure',
				nextNode: 'start'
			}
		]
	},

	document_protocols: {
		id: 'document_protocols',
		title: 'The Protocol Chronicler',
		text: `You become the official chronicler of Ah Beng Kopitiam's protocols. Your detailed documentation helps the kopitiam expand while maintaining their traditional standards.

Years later, your "Kopitiam Protocols Handbook" becomes the gold standard for traditional coffee shops across Southeast Asia.

You've successfully bridged the gap between tradition and growth, ensuring authentic kopitiam culture continues to flourish.`,
		choices: [
			{
				text: 'Begin a new chapter in the kopitiam',
				nextNode: 'start'
			}
		]
	},

	new_kopitiam: {
		id: 'new_kopitiam',
		title: 'Protocol Pioneer',
		text: `Armed with the traditional protocols you've learned, you open "New Generation Kopitiam" - a perfect blend of old wisdom and new efficiency.

Your kopitiam becomes famous for its respect for tradition while embracing beneficial innovations. Food critics praise your "authentic protocols with contemporary flair."

Uncle Lim visits on opening day, tears in his eyes: "The protocols live on. I'm proud of you!"`,
		choices: [
			{
				text: 'Return to where it all began',
				nextNode: 'start'
			}
		]
	},

	digital_protocols: {
		id: 'digital_protocols',
		title: 'The Modern Protocol Master',
		text: `You help Uncle Lim digitize the kopitiam protocols while preserving their essence. QR code ordering, digital inventory tracking, and automated scheduling all work seamlessly with traditional methods.

The kopitiam becomes a model for how heritage businesses can modernize without losing their soul. A perfect harmony of old protocols and new technology.

"Technology should serve tradition, not replace it," becomes your motto.`,
		choices: [
			{
				text: 'Start your journey over with new insights',
				nextNode: 'start'
			}
		]
	}
};

export function getNode(nodeId) {
	return storyData[nodeId] || storyData.start;
}

export function getStartNode() {
	return storyData.start;
}

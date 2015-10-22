app.service('portfolioService', function($http, $location) {
	var _this = this;
	return {
		getPortfolio: function(path) {
			return [{
				name: "ManaStack",
				category: "web",
				images: ['manastack2-home.jpg', 'manastack2-builder2.jpg', 'manastack2-deck2.jpg', 'manastack2-database2.jpg'],
				description: "ManaStack is a suite of tools for creating and playtesting Magic: The Gathering decks. You can check it out at <a href='http://manastack.com'>ManaStack.com</a>"
			}, {
				name: "Apocalypse Mod",
				category: "game",
				images: ['apocmod-1.png', 'apocmod-2.jpg', 'apocmod-3.jpg', 'apocmod-4.jpg'],
				description: "Apocalypse Mod is a large-scale server side mod for Left 4 Dead. Features include a completely rewritten AI director system, new weapon types, lighting and map changes, and many significant gameplay changes. Check it out at <a href='http://apocalypsemod.com'>ApocalypseMod.com</a>."
			}, {
				name: "Learn Cryptography",
				category: "web",
				images: ['learncryptography-1.jpg', 'learncryptography-2.jpg', 'learncryptography-3.jpg', 'learncryptography-4.jpg'],
				description: "Learn Cryptography is a resource website for those interested in learning about Cryptography. Topics include data encryption, hash functions, Bitcoin, and steganography. You can check it out at <a href='http://learncryptography.com/'>LearnCryptography.com</a>."
			}, {
				name: "Freelance Web Design",
				category: "web",
				images: ['gentlehat.png', 'komcpc.png', 'bcrealtynews.png', 'gawthropfinancial.png'],
				description: "Freelance Web Design: 2010-2012"
			}, {
				name: "Night of Darkness",
				category: "game",
				images: ['nightofdarkness.png', 'nightofdarkness-2.jpg', 'nightofdarkness-3.jpg', 'nightofdarkness-4.jpg'],
				description: "Night of darkness and it's subsequent sequel were both entries to the One Game A Month challenge. The development time of both the original and follow up was one month long. You can play the completed games on <a href='http://www.kongregate.com/games/GentleHat/night-of-darkness-2'>Kongregate</a>."
			}, {
				name: "Inescapable Darkness",
				category: "game",
				images: ['inescapabledarkness-1.png', 'inescapabledarkness-2.png', 'inescapabledarkness-3.png'],
				description: "Inescapable Darkness is a survival mode map for Left 4 Dead created in collaboration with James Morrison (CAPTAINCANADA). You can see screenshots and download at <a href='http://www.l4dmaps.com/details.php?file=20558'>L4DMaps</a>."
			}];
		},
	};
});
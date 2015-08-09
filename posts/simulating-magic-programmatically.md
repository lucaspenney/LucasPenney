Simulating Magic Programmatically
----

The goal of the ManaStack Simulator is to train an artificial intelligence to play Magic, with the eventual goal of a computer being able to beat competitive players in real games. The first step in that goal is to create the simulation engine itself, a system to enforce the game rules and provide an interface for a player (or an artificial intelligence) to interact with.

Magic is not a typical turn-based game and is especially not one that lends itself to being easily recreated in a programming-oriented way. There are a variety of branching decision points where there is no clear answer as to what the "best" move is - and in fact there are situations where playing for a loss early can allow one to capitalize on it later. Combine that with numerous special cases where the text of a card can override otherwise game-wide rules, a turn system that is significantly more complex than your average turn based game, and an insane number of possible card combinations that in comparison makes solving chess look like an easy feat.

The typical reaction people will give you when you say you're going to write artificial intelligence to play Magic is a combination of disbelief and the presentation of a few hundred reasons why it's not possible.

This is a useful reaction though. "How will you handle X and it's interaction with Y?" is a very legitimate question. There are a lot of interactions between cards that do not lend themselves well to being handled by software. Infinite recursion, "may do X" conditions, and a host of other issues have to be tackled to emulate the game rules effectively.

The goal with the design of ManaStack's simulation engine is to create an environment where the game rules are enforced properly while still allowing the full amount of player flexibility that Magic can allow.


CardScript
----

Powering card interactions is CardScript, a JavaScript based scripting language to interact with ManaStack's simulation engine. CardScript allows a card to listen for events happening in the simulation and then perform actions that will be reflected in the simulation engine. This differs from other Magic engine implementations that do things like hard code individual card functionality, or attempt to parse card text directly. Instead, CardScript allows the flexibility to not have to do much work at all for simple cards, while still allowing precise scripting of the functionality of more complex cards.

Hooking Events
----

For example, say we want to write the CardScript for Bloodhunter Bat, who's card text is as follows:

>Flying

>When Bloodhunter Bat enters the battlefield, target player loses 2 life and you gain 2 life.

The first thing to note is that the simulation engine handles keywords automatically. We don't need to script this Bloodhunter bat to only be blockable by creatures who can block flying, as the engine will do all of that for us. Next, we have the second bit, which can easily be written in CardScript:

    CardScript.addEventListener("onEnterZone", function(e) {
        var card = e.getCard();
        if (card.getname() == "Bloodhunter Bat") {
            var zone = e.getZone();
            if (zone instanceof Battlefield) {
                card.getOwner().gainLife(2);
                card.getOwner().getEnemy().loseLife(2);
            }
        }
    });

Broken down, we add a callback function to a specific event (in this case OnEnterZone, which triggers whenever a card enters a zone), get the parameters of the event, and if the card is entering the battlefield, we execute the life gains and losses accordingly.

Now, the neat part is that's all we have to do for this card, and it's interactions will work regardless of what other cards are in play. If another card is on the battlefield that does something if it's owner gains life, that card will react to the event that is fired when Bloodhunter Bat causes you to gain life, and so on.

More complexly, if there is a card that prevents players from gaining life, this particular call to gainLife() will do nothing. If this Bloodhunter Bat is destroyed or exiled and then returned to the battlefield, this function will execute again as expected.

Interaction with the Intelligence
----

There is another element that some cards work with - presenting the player with a choice. For a simple example, let's look at your typical killspell, Murder.

>Destroy Target Creature

In this case, we can't simply hook an event and perform some actions in CardScript, because there's an input needed from a player interface. CardScript is not specific as to whether it is interacting with a human driven player or an artificial intelligence, but rather is broadly interacting just with the 'Intelligence' interface of the player, which is referenced here to get a destroy target for our Murder spell.

	CardScript.addEventListener("onResolve", function(e) {
		var card = e.getCard();
		if (card.getName() === "Murder") {
			var target = e.getOwner().getIntelligence().getDestroyTarget('Creature');
			if (target) target.destroy();
		}
	});

This allows scripting of cards that explicitly request the player to make a decision as part of the card ability.

Infinite Recursion
----

Naturally, there are some cases where one event triggers another that then triggers the previous event. In Magic it's a fairly common occurance that is a part of several deck strategies. However, infite recursion is something that computers generally have a problem with and so they must be handled a little bit differently.

Currently, this is handled in the simulation engine by a call limiter on each event call. This essentially sets a hard limit on how many times a specific event can be called per turn, so instead of having an infinite number of, for example, creature tokens put onto the battlefield, the simulator only gives you more than you could possibly count.

This is more of a temporary fix at the moment, and a better solution definitely needs to be considered.

Generated CardScript
----

There are thousands of unique Magic cards, and writing an individual CardScript for each one might take a very long time. This number is reduced a bit by not needing duplicate scripts for cards with the same card text (as the text is what is being implemented in the engine), and also reduced by keywords being handled by simulation engine itself.

However, the eventual goal is to not have to write CardScripts for every new card that is released, but instead have the engine generate them on the fly. This is where generated CardScript comes in. If a card does not have a specified CardScript associated with it, we'll attempt to parse the card's text and generate the CardScript to execute. While for a minority of cards the generated CardScript works as intended, and for another minority it doesn't work at all, the middle ground between them allows for some degree of card functionality where no predefined CardScript is present. As it's actually generating script code which it then later executes, it's also possible to save this generated code to be used as it's proper CardScript, which means that after verifying a generated script is working as intended, using the generated scripts allows for faster supporting of cards than having to write everything manually.



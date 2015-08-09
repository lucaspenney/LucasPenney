Designing User Interfaces for Creating Magic Decks
----

The interfaces for deck building has always seemed to lag behind it's potential when implemented as part of a online deck builder. Your standard click and type to search, click to add a card, and click to remove a card performs the basic actions to simulate what deck building is in the real world, but doesn't really go beyond that. There is a lot of potential in building decks through software thanks to the computational power of your average computer that could go beyond simply emulating physical actions, but they hadn't really been taken advantage of.

Speed
----

For starters, speeding up the user interaction itself is a must. I noticed plenty of online deck builders having 'click to perform search' buttons, having to open separate dialogues to search, and generally just a lot of unneccesary actions. The point of a deck builder should be to speed up the actions themselves to try to match the thinking speed of the user's creativity, allowing them to build without the interface getting in the way.

Having card search and deck saving happen automatically seemed to make a lot of sense. At first there can be some initial confusion in search of a "save" button, but once user's realize that it's saving automatically it's one less thing they have to worry about, and has had a pretty positive reception.

Keyboard shortcuts are by far a critical component that has been missing from deck builders, for reasons I can't fathom. For most users in any application, keyboard shortcuts are slow to use at first but once mastered (which really doesn't take too long) performing actions becomes orders of magnitude faster. For ManaStack, I stuck with listening to just the Enter key, with Control and Shift as modifiers (Ctrl adding 4 cards instead of 1, Shift adding to the sideboard instead of the mainboard). With keyboard shortcuts it's possible to make a complete deck in a mere minute or two.


Importing
----

Importing decklists into an editable deck is a pretty simple and expected tool to have. Aside from supporting as many formats as possible, there's really not too much that can be improved here, at least on the surface. However, playing around with the ways decks are imported incidently created a neat little tool for very quickly making decks. By letting the importer auto-complete card names if an exact match wasn't found, the deck import doubles as a quick deck maker for those who prefer to type rather than search and add cards to a deck. Creating an outline of a deck to later revise is as simple as something like this:

+ 12 Plai
+ 12 Isla
+ 4 Jace, Memory
+ 4 Mind con

The deck importer of course works out what you actually mean by these incomplete card names, and adds the (hopefully) correct cards accordingly.

Sorting
----

Keeping in the spirit of forcing as few action as possible to complete a deck, the goal with sorting of the cards is to keep all of the information on the screen without requiring any scrolling. This is done by automatically adjusting the space between cards in each sort column to smaller values to ensure the cards can never go off screen. It's less comfortable for larger decks (specifically decks with over ~150 cards), but generally those are a small minority of most decks created. Moving forward more sort options can be added with relative ease and perhaps customized based on the Magic format the deck is for.

Search
----

The card search is a tricky thing to get right, and I think there's still a lot of improvement to be made here. There are literally hundreds of possible search criteria for Magic cards, and showing the right ones is a difficult task as there's really no reasonably sized group of criteria that match all magic formats and decks. Presenting more than ~5 options would make navigating the search more cumbersome to use, but there are certainly use cases for searching by card converted cost, keywords, game formats, etc in addition to card name, type, and text. The goal is to strike a balance without having to create a secondary "advanced search" dialog with the less frequented options.

Performance
----

Admittedly, having a raster based graphical interface while looking prettier is not as performant as a purely HTML web-based interface. Currently the deck builder is rendered using HTML5's canvas element with 2x multisampling, aimed at a 30-60fps refresh rate. This allows the builder to have smooth card transition animations and fades, but essentially rules out older legacy browsers and mobile devices from being able to use it. To those of you still trying to build deck on Internet Explorer 8, you really should get a modern browser. As for mobile devices, the interface is really not designed to work well on small form devices, and the plan is to have a separate mobile-specific deck builder for them.


Future Improvements
----

There's a few things that are still missing and/or could use improvement. Refining the available search fields is something to explore further still.  Also implementing Ctrl + (y/z) style undo/redo operations seems to be a logical operation to want to perform, though as that would conflict with existing web browser shortcuts may have to be implemented through a set of clickable buttons. I'm hoping to later on experiment with automated card suggestions - using historical deck data to recommend potential cards that may fit in well with a particular deck as you're building it, to potentially speed the process up further.
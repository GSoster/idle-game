# TODO

This document keeps track of what must be done and in which order.

- [x] Player click to play-area should count clicks and increment coins
- [x] Load sample helpers to screen. A helper should display: name, buy price, current quantity, current total production, production per piece. Should behave: it can be bought.
- [x] Implement basic image representation for helpers
- [ ] Implement basic audio on events (OnItemBought, attack (click), etc)
- [ ] Move specific framework code to a separated folder
- [ ] Save/Load current status to localstorage (this should be made only after code refactor)
- [x] Use a local version of bootstrap and jquery (during development only. Maybe it is best to use cdn)
- [ ] Create basic status to improve resource production by X%.

## Advanced 

- [ ] Create an Audio Manager to handle background music, effects sounds, etc
- [ ] Create a Status Manager to handle different status simultaneously 

## Flow
() = between parentheses is function/action
[] = between bracket is result/event generated
Events are useful to play audio, display animations, etc

# Action / Event name
Sample
**Action:** Who does what
**Simplified flow:** Actor -> does => result
**In depth Description:**

# Player Clicks on resource Area (Attack Area)
**Action:** Player (clicks) to generate resources:
**Simplified flow:** PlayerClick -> (ProduceResource) => [resourceProduced]
**In depth description:** Player (clicks) on HTML 'ui-play-area'. An event handler was attached to it by Tidlefw, it then calls the function responsible for handling the click. The function generates resource  to the player and displays a visual indicator that the click occurred.

# Player buy item
**Action:** Player buy item
**Simplified flow:** Player -> (Buy item) -> (SpendResource) => [OnItemBought/resourceSpent]
**In depth Description:** Player (clicks) on the buy button for a helper/cursor. The HTML helper list was created by the App and has a handler to dispatch a custom OnItemBought event on click.
The OnItemBought is then handled by the Tidlefw that (verifies) if the player has enough resource to buy the helper. If the player has enough then the OnItemBought method is called in the helper.

# App generates helpers list

# App produces resources


## Flow  / Responsibilities 

Tidlefw.js is responsible for handling events fired by the Game, loading configs and saving/loading the state of the game.

Game.js is responsible for keeping the current status of the player and its resources/helpers.

Player Actions:
Click to generate resources
Buy Resources

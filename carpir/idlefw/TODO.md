# TODO

This document keeps track of what must be done and in which order.

[x] Player click to play-area should count clicks and increment coins
[x] Load sample helpers to screen. A helper should display: name, buy price, current quantity, current total production, production per piece. Should behave: it can be bought.
[ ] Implement basic audio on events (OnItemBought, etc)
[ ] Save/Load current status to localstorage
[ ] Move specific framework code to a separated folder
[x] Use a local version of bootstrap and jquery
[ ] Create basic status to improve resource production by X%.

## Advanced 

[ ] Create an Audio Manager to handle background music, effects sounds, etc
[ ] Create a Status Manager to handle different status simultaneously 

## Flow
() = between parentheses is function/action
[] = between bracket is event 
Events are useful to play audio, display animations, etc
PlayerClick -> (ProduceResource)=>[resourceProduced]
Player -> Buy item -> (SpendResource)=>[OnItemBought/resourceSpent]
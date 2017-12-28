# TidleFW (Tiny Idle FrameWork)

## Carpir - an experiment
A simple Idle Game to identify and understand the skeleton of idle/click games. This project focus on identifying the most used mechanics of clicker games to (in the future) separate them from the game and create a tiny idle game framework.
Idle game is a project to create a click/idle game in javascript.
  
  
## The TidleFW 

The idea is to make a simple framework that provides the fundamental structure to create idle/clicker games.
The main features are: Helpers, etc

### Helpers/Cursors
 - Helpers/cursors can be unique (in games with heroes like sakura clicker) or have multiple instances (more resource management focused games like controlling skyscrapers). [implemented]
 - Helpers have level and skills.
 - Helpers have event handlers for custom events (OnItemBought, onAddedToInventory, onSold, etc.).
 - Helpers have buyPrice and sellPrice, also productionValue and productionRate.
 - Helpers can have requeriments to be unlocked and/or acquired (players level, minimun quantity of a specific resource, a previous helper already bought, etc).
 - Helpers can handle evolution (for example, a hoe can become a reforced hoe).

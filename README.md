
# ATTENTION
> This project is on halt since I'm planning to migrate it to C#/Blazor.
> The idea is to make it be more consistent and entirely event based.

# TigFW (Tiny Idle Game FrameWork)

### Carpir - Game demo/example
A simple Idle Game to identify and understand the skeleton of idle/click games. This project focus on identifying the most used mechanics of clicker games to (in the future) separate them from the game and create a tiny idle game framework.
  
  
## The TigFW 

The idea is to make a simple framework that provides the fundamental structure to create idle/clicker games.
The main features are: Helpers/cursors (autoclick), resources, etc.  
**In the future the project should be event based, which would allow it to grow transparently.**

### Resources

Resources are the main currency and it can be used to buy helpers/cursors, level up characters, enchant items, or anything you can think of.
 - [x] Each player's click (on the game specific area) generate a fixed amount of resource. The rate grows based on many factors (level, skills, status, etc).
 - [x] Resources can be spent to acquire helpers.
 - [x] Helpers generate more resources.

### Helpers/Cursors

Helpers are responsible for generating resources for the player, they are also known as cursors and usually represent or simulate an autoclick mechanic. They have an initial cost and after bought start to produce resources on a fixed rate.
 - Helpers/cursors can be unique (in games with heroes like sakura clicker) or have multiple instances (more resource management focused games like controlling skyscrapers). [implemented]
 - Helpers have level and skills.
 - [x] Helpers have event handlers for custom events (OnItemBought, onAddedToInventory, onSold, etc.).
 - [x] Each different event on a helper can have a different sound.
 - [x] Helpers have buyPrice and sellPrice, also productionValue and productionRate.
 - Helpers can have requeriments to be unlocked and/or acquired (players level, minimun quantity of a specific resource, a previous helper already bought, etc). (half implemented)
 - Helpers can handle evolution (for example, a hoe can become a reforced hoe).
 - Helpers can have a type (machine, eletrical, etc) so status can affect it.

### Status

In short: Status are temporary ~~or permantent~~ effects that affect resource generation. 
A status is a generic and broad concept. It can be anything, really. But a few points must be noted: 
- A status has to declare if it affects the production in a positive or negative way.
- A status has to inform how much it will affect resource production (for example, up 20%, down 5%).
- A status has to have a fixed time.
- A status can affect only a specific type of helper: an electrical discharge can affect all the eletronic helpers.
- It may have a brief description (shown as a tooltip).
- it may stack or not (be applied twice or more during a same instant in time).
Examples: A flood can temporary reduce the production in 40%. A shortage of electricity can bring production down 90%.

### Bouns

Bonus are permanent effects that affect resource generation, helpers price, production rate, etc. Bonus are only applied **after** a game reset. Example: barter - reduces the price of cursors/helpers in 5%.

### Achievements

Configurable achievements.

### Maybe  

add some sort of enemies (layered images to the clickArea )

#### Plugins
  
Make eventlisteners (as waits) to specific actions and call specific methods/functions in a spearated layer. This layer would work as a gateway to allow users/develoeprs to create "plugin-like" features and call them throught the use of this separated group of functions.: TigFW --> eventListener to action (eg.: buy item) --> calls action on gateway layer --> if exist calls method specified by developer on some external file.

#### Themes

Maybe it is a good idea to define a folder to "themes" and create some reusable css themes: Medieval, Space, Futuristic/IT, etc  

#### Layers

Maybe it is a good idea to allow the developer to define "layers" to the playarea, this way could be possible to overlap some content with other more relevant for a specific set of time, let say display an treasure box in front of an enemy.

#### Tests

Define a test framework and use it to make sure everything is work as it should.
Resources Tests: (ResourceManagerTests.js)

---

## File Structure

It is in frequently and continuous changes, this section is under construction and definition.
TBD.

/Tidlefw  
**resourceManager**: holds information related resources (current and max) and how to produce and spend them.  
**helpers**: holds information related to helpers/cursors that can be bought by the player: name, description, production value, baseValue, etc.  
**helperManager**: controlls helpers, keep track of how many there are and their production values
**uiManager**: controlls UI/Graphics updates and setups
**tidle**: holds general logic of the tiny framework - event handlers, event dispatcher.
**app**: holds heneral logic related to the game - game loop.  

# Images and Sounds

All sounds come from: https://freesound.org/  
Images:  
Graphics: https://opengameart.org  
Grass: https://giphy.com/gifs/PHxGCRLnChFtu/download

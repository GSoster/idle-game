# TidleFW (Tiny Idle FrameWork)

## Carpir - an experiment
A simple Idle Game to identify and understand the skeleton of idle/click games. This project focus on identifying the most used mechanics of clicker games to (in the future) separate them from the game and create a tiny idle game framework.
  
  
## The TidleFW 

The idea is to make a simple framework that provides the fundamental structure to create idle/clicker games.
The main features are: Helpers, etc

### Resources

Resources are the main currency and it can be used to buy helpers/cursors, level up characters, enchant items, or anything you can think of.
 - Each player's click generate a fixed amount of resource. The rate grows based on many factors (level, skills, status, etc).
 - Resources can be spent to acquire helpers.
 - Helpers generate more resources.

### Helpers/Cursors

Helpers are responsible for generating resources for the player, they are also known as cursors and usually represent or simulate an autoclick mechanic. They have an initial cost and after bought start to produce resources on a fixed rate.
 - Helpers/cursors can be unique (in games with heroes like sakura clicker) or have multiple instances (more resource management focused games like controlling skyscrapers). [implemented]
 - Helpers have level and skills.
 - Helpers have event handlers for custom events (OnItemBought, onAddedToInventory, onSold, etc.).
 - Helpers have buyPrice and sellPrice, also productionValue and productionRate.
 - Helpers can have requeriments to be unlocked and/or acquired (players level, minimun quantity of a specific resource, a previous helper already bought, etc).
 - Helpers can handle evolution (for example, a hoe can become a reforced hoe).

### Status

In short: Status are temporary ~~or permantent~~ effects that affect resource generation. 
A status is a generic and broad concept. It can be anything, really. But a few points must be noted: 
- A status has to declare if it affects the production in a positive or negative way.
- A status has to inform how much it will affect resource production (for example, up 20%, down 5%).
- A status has to have a fixed time.
- It may have a brief description (shown as a tooltip).
- it may stack or not (be applied twice or more during a same instant in time).
Examples: A flood can temporary reduce the production in 40%. A shortage of electricity can bring production down 90%.

### Bouns

Bonus are permanent effects that affect resource generation, helpers price, production rate, etc. Bonus are only applied **after** a game reset.

### Achievements

Configurable achievements.

---

## File Structure
/Tidlefw
**player**: holds information related to player, its resources (current and max), its helpers already obtained
**helpers**: holds information related to helpers/cursors that can be bought by the player: name, description, production value.
**tidle**: holds general logic of the tiny framework - event handlers, event dispatcher, consumption of resources, generation of resources.
**app**: holds heneral logic related to the game - game loop

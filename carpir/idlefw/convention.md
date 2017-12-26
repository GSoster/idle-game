# HTML  
**General**  All variables related to HTML elements must be named starting with *ui_*.  
Coin*s* muse be used as default (although coin can be used interchangeable with coins in some cases).
**IDs**  Ids must be named all lowercase and with minus symbol as separator. 
eg.: ui_helpers_list  

**Class**  Classes must be named all lowercase and with minus symbol as separator. 
eg.: ui_item_list  

# Javascript  
**Variables** and **constants**  Variables and constants must be all lowercase, they should use the underline symbol as separator and use *ui_* case are related to HTML elements.  

**Functions** Functions should have all its initials uppercase and its curly brackets starting in the next line
eg.: 
function ApplySettings()
{

}  

**Spaces** 

**Parentheses**


# Files  
**fw/** this folder holds files related to the tiny framework that powers the idle game.  
    **/assets** bootstrap, jquery, images and css related to the framework.  
    **/config** configuration related to ui, save, etc.  
    **app.js** GameRunner, file that gets info from other files and make all the magic happen.
**game/**  
    **/assets** images and css related to the specific game.  
    **/settings** custom settings for the game
    
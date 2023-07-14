const {Item} = require("../class/item.js");
const {Room} = require("../class/room.js");
const {Food} = require("../class/food.js");

class Player extends Room{
    constructor(name, startingRoom) {
        super(name);
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {
        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;
            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        return this.currentRoom.items.find( 
        (el) => { 
            if(el.name === itemName){ 
                let index =  this.currentRoom.items.indexOf(el) 
                    this.items.push(el);
                    this.currentRoom.items.splice(index, 1)      
            }      
        })
    }

    dropItem(itemName) {
        return this.items.find( 
        (el) => { 
            if(el.name === itemName){ 
                let index =  this.items.indexOf(el) 
                    this.items.splice(index,1);
                    this.currentRoom.items.push(el)    
            }      
        })
    }

    eatItem(itemName) {
       return this.items.find( 
        (el) => { 
            if(el instanceof Food){
                if(el.name === itemName){ 
                    let index =  this.items.indexOf(el) 
                    this.items.splice(index,1);      
            }}   
        })
    }


    getItemByName(name) {   
           let result = this.items.find(
            (el) => name === el.name )

            return result;
    }
    
}
module.exports = {
  Player,
};

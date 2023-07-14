const {Item} = require("../class/item.js");

class Room extends Item{

    constructor(name, description) {
        super(name, description)
        this.exits = {};
        this.items = [];
    }
      
    printRoom() {
        console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }
    
     getItemByName(name) {   
           let result = this.items.find(
            (el) => name === el.name )

            return result;
    }
 }
//For Testing Only
//let item = new Item("rock", "just a simple rock");
//let room = new Room("Test Room", "A test room");
//room.items.push(item);
//console.log(room)
//console.log(room.getItemByName("rock"))




module.exports = {
  Room,
};

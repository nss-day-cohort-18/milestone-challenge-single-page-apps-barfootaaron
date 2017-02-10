// Initial CarLot object
var CarLot = (function (original) {

var inventory = [];
var carArray = [];

  return {
    loadInventory: function (callback) {
        var inventoryLoader = new XMLHttpRequest();
        
        inventoryLoader.addEventListener("load", function () {
        var objectOfCars = JSON.parse(event.target.responseText);
        inventory = objectOfCars.cars;
        CarLot.populatePage(inventory);
        });

        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    },

    getInventory: function(whatevs) {
    	for (var i=0; i<inventory.length; i++) {
    		var currentObject = inventory[i];
    		var assembleString = currentObject.year + " " + currentObject.make + " " + currentObject.model;
    		console.log(assembleString);
    	};
    }
};
        
	return original;

})(CarLot || {});
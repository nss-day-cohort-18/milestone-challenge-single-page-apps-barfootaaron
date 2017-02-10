"use strict";

var CarLot = (function (original) {

	var carInventory = [];

	original.populatePage = function (inventory) {

		carInventory = inventory;

		var mainDiv = document.getElementById("inventoryGrid");
		var myDiv = document.createElement("DIV");
		myDiv.classList.add("row");
		var n = 1;
			for (var i=0; i<inventory.length; i++) {
				var insertDiv = 
				
				`<div class="col-sm-3 bordered" id="${inventory[i].year}--${inventory[i].model}">
					<h3>${inventory[i].make} ${inventory[i].model}</h3>
					<img src="../${inventory[i].image}">
					<p>Year: ${inventory[i].year}</p>
					<p>Price: $${inventory[i].price}</p>
					<p>${inventory[i].description}</p>	
				</div>`;

			myDiv.innerHTML += insertDiv;
			mainDiv.appendChild(myDiv);
			
		}
	CarLot.activateEvents();
}


// Now that the DOM is loaded, establish all event listeners needed

	original.activateEvents = function (watermelon) {
		var listingCards = document.getElementsByClassName("col-sm-3");
		var newDescription = document.getElementById("newDescription");

		for (var i=0; i<listingCards.length; i++) {
			listingCards[i].addEventListener('click', (e) => {

				if (event.currentTarget.classList.contains("green") === false) {
					for (var n=0; n<listingCards.length; n++) {
						listingCards[n].classList.remove("green");
					}
						CarLot.changeBorder(event.currentTarget, "green");
				} else {
						CarLot.borderReset(event.currentTarget, "green");
					}
				
			});
		}
	}
	
	CarLot.loadInventory();

return original;

})(CarLot || {});	
 
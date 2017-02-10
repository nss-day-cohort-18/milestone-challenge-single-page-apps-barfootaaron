"use strict";

var CarLot = (function (original) {

	var CarInventory = [];
	var newDescription = document.getElementById("newDescription");

	var postButton = document.getElementById("postButton");

	postButton.addEventListener("click", editDescription);
	newDescription.addEventListener("keyup", editDescription);

	function editDescription(watermelon) {
		var cardSections = document.getElementsByClassName("col-sm-3");
		for (var i=0; i<cardSections.length; i++) {
			if(cardSections[i].classList.contains("green")) {
				cardSections[i].childNodes[9].innerHTML = newDescription.value;
			}
		}
		if (event.keyCode === 13) {
			newDescription.value = "";
			for (var n=0; n<cardSections.length; n++) {
				cardSections[n].classList.remove("green");
			}
		}
	}

	original.borderReset = function (domElement, color) {
		if (domElement.className === "row"){
			return;
		}	else {
			domElement.classList.toggle("green");
		}
	}

	original.changeBorder = function(domElement, color) {
		if (domElement.className === "row") {
			return;
		}	else {
			domElement.classList.toggle("green");
			newDescription.focus();
		}
	}


	return original;

})(CarLot || {});


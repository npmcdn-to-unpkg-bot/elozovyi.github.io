//Pop-up
(function () {
	// Get the modal
var modal = document.querySelectorAll("#popup");

//Get the content
var modalContent = document.querySelectorAll(".modal__content")[0];

// Get the button that opens the modal
var btn = document.querySelectorAll("#popup-btn")[0];
var btn2 = document.querySelectorAll("#popup-btn2")[0];

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.className += " visible";
    modalContent.className += " visible";
}

btn2.onclick = function() {
    modal.className += " visible";
    modalContent.className += " visible";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.className = "modal";
    modalContent.className = "modal__content";
}

})();

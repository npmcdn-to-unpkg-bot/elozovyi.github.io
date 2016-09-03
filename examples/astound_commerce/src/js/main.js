//Pop-up
(function () {
	// Get the modal
var modal = document.getElementById("popup");

//Get the content
var modalContent = document.getElementsByClassName("modal__content")[0];

// Get the button that opens the modal
var btn = document.getElementById("popup-btn");
var btn2 = document.getElementById("popup-btn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    modalContent.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
    modalContent.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    modalContent.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalContent.style.display = "none";
    }
}
})();

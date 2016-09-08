//Pop-up (clear JavaScript)
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

    //Get social-networks--btn and social-networks
    var networksBtn = document.querySelectorAll('.social-networks--btn');
    var socialNet = document.querySelectorAll('.social-networks');

    //Get sizes__item
    var sizesItem = document.querySelectorAll('.sizes__item');

    //Display social networks icons
    networksBtn[0].onclick = function() {
        if (socialNet[0].classList.contains('active')){
            socialNet[0].classList.remove('active');
            networksBtn[0].classList.remove('active-btn');
        }else {
            socialNet[0].classList.add('active');
            networksBtn[0].classList.add('active-btn');
        }
    }


    //Change sizes__item color onclick
    for(var i = 0; i<sizesItem.length; i++) {
        var item = sizesItem[i];
        item.onclick = function() {
            if (this.classList.contains('sizes__item--active')){
                this.classList.remove('sizes__item--active');
            }else {
                var activeItem = document.getElementsByClassName('sizes__item--active')[0];
                if (typeof activeItem !== 'undefined') {
                    activeItem.classList.remove('sizes__item--active');
                }
                this.classList.add('sizes__item--active');
            }
        }
    }

    //Change sizes__item color onclick
    // sizesItem.forEach(function(item){
    //     item.onclick = function() {
    //         // item.classList.add('sizes__item--active');
    //         if (item.classList.contains('sizes__item--active')){
    //             item.classList.remove('sizes__item--active');
    //         }else {
    //             var activeItem = document.getElementsByClassName('sizes__item--active')[0];
    //             if (typeof activeItem !== 'undefined') {
    //                 activeItem.classList.remove('sizes__item--active');
    //             }
    //             item.classList.add('sizes__item--active');
    //         }
    //     }
    // });

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

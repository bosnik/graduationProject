function clickZoom() {

    let body = document.querySelector("body"),
        overleyPicture = document.createElement("div");

    body.appendChild(overleyPicture);
    overleyPicture.classList.add('bigPicture', 'overlay', 'fadeIn');

    let overlay = document.querySelectorAll(".overlay");

    function showModal(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function hideModal() {
        [...overlay].forEach(element => {
            element.style.display = "none";
        });
        document.body.style.overflow = "";
    }
    
    function bigPictures(picture) {

        let pic = picture.closest('#bigImg');
        overleyPicture.innerHTML = `<img src='${pic}'>`;
        showModal(overleyPicture);
    }

    body.addEventListener("click", function (event) {
        let target = event.target;

        if (target && target.classList.contains("overlay")) {
            hideModal(target);
        }
        if (target && target.classList.contains("lupa") || target.classList.contains("small_picture")) {
            event.preventDefault();
            bigPictures(target);
        }
    });

}

module.exports = clickZoom;
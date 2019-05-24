function modalWindows() {

    let popupEngineer = document.querySelector(".popup_engineer"),
        popup = document.querySelector('.popup'),
        body = document.querySelector("body");

    let showModalEnginer = function () {
        popupEngineer.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let showModalPopup = function () {
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let hideModal = function () {
        popupEngineer.style.display = "none";
        popup.style.display = "none";
        document.body.style.overflow = "";
    };

    function showModal() {
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    setTimeout(showModal, 60000);
    body.addEventListener("click", function forEach(elem) {
        let target = elem.target;

        if (target && target.classList.contains("header_btn")) {
            showModalEnginer(target);
        }
        if (target && target.classList.contains("phone_linked")) {
            showModalPopup(target);
        }
        if (target && target.classList.contains("phone_link")) {
            showModalPopup(target);
        }
        if (target && target.classList.contains("popup_close")) {
            hideModal(target);
        }
        if (target && target.classList.contains("popup_engineer")) {
            hideModal(target);
        }
        if (target && target.classList.contains("popup")) {
            hideModal(target);
        }

    });

}

module.exports = modalWindows;
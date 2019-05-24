function tabs() {
    let tab = document.querySelectorAll('.tab'),
        tabs = document.querySelectorAll('.tabs'),
        slickTrack = document.querySelector('.slick-track'),
        infoTabcontent = document.querySelectorAll('.info-tabcontent'),
        infoTab = document.querySelectorAll('.info-tab');

    let hideTabContent = (a) => {
        /* for (let i = a; i < infoTabcontent.length; i++) {
            infoTabcontent[i].classList.remove('show');
            infoTabcontent[i].classList.add('hide');
        } */
        for (let i = a; i < infoTab.length; i++) {
            infoTab[i].classList.remove('show');
            infoTab[i].classList.add('hide');
        }
    };

    hideTabContent(1);
    

    let showTabContent = (b) => {
        /* if (infoTabcontent[b].classList.contains('hide')) {
            infoTabcontent[b].classList.remove('hide');
            infoTabcontent[b].classList.add('show');
        } */
        if (infoTab[b].classList.contains('hide')) {
            infoTab[b].classList.remove('hide');
            infoTab[b].classList.add('show');
        }
    };
    

    slickTrack.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('tabs')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {

                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;
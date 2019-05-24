function tabs() {
    let tab = document.querySelectorAll('.tab'),
        infoTabcontent = document.querySelectorAll('.info-tabcontent'),
        tabs = document.querySelectorAll('.tabs'),
        infoTab = document.querySelectorAll('.info-tab'),
        afterClick = document.querySelectorAll('.afterClick');

        let hideTabz = (z) => {
            for (let i = z; i < afterClick.length; i++) {
                afterClick[i].classList.remove('after_click');
                afterClick[i].classList.add('no_click');
    
            }
        };
    
        hideTabz(1);
    
        let showTabx = (x) => {
            if (afterClick[x].classList.contains('no_click')) {
                afterClick[x].classList.remove('no_click');
                afterClick[x].classList.add('after_click');
    
            }
        };

        let hideTabc = (c) => {
            for (let i = c; i < tab.length; i++) {
                tab[i].classList.remove('active');
                tab[i].classList.add('noactive');
    
            }
        };
    
        hideTabc(1);
    
        let showTabv = (v) => {
            if (tab[v].classList.contains('noactive')) {
                tab[v].classList.remove('noactive');
                tab[v].classList.add('active');
    
            }
        };
    

    let hideTab = (q) => {
        for (let i = q; i < infoTab.length; i++) {
            infoTab[i].classList.remove('show');
            infoTab[i].classList.add('hide');

        }
    };

    hideTab(1);

    let showTab = (w) => {
        if (infoTab[w].classList.contains('hide')) {
            infoTab[w].classList.remove('hide');
            infoTab[w].classList.add('show');

        }
    };

    let hideTabContent = (a) => {
        for (let i = a; i < infoTabcontent.length; i++) {
            infoTabcontent[i].classList.remove('show');
            infoTabcontent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (infoTabcontent[b].classList.contains('hide')) {
            infoTabcontent[b].classList.remove('hide');
            infoTabcontent[b].classList.add('show');
        }
    };
    document.body.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {

                    hideTabContent(0);
                    showTabContent(i);
                    hideTabc(0);
                    showTabv(i);
                    break;
                }
            }
        }
       
        if (target && target.classList.contains('tabs')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTab(0);
                    showTab(i);
                    hideTabz(0);
                    showTabx(i);
                    
                    break;
                }
            }
        }
    });

}

module.exports = tabs;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/clickZoom.js":
/*!***********************************!*\
  !*** ./src/js/parts/clickZoom.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalCalc */ "./src/js/parts/modalCalc.js");


    function form(elem) {
        let message = {
            loading: `<img src='https://img-fotki.yandex.ru/get/4914/54833049.21/0_803b8_ba6370a6_XS.jpg'>`,
            success: `<img src='https://img-fotki.yandex.ru/get/5113/54833049.22/0_803bd_d6d87b9f_XS.jpg'>`,
            failure: `<img src='https://img-fotki.yandex.ru/get/5810/54833049.22/0_803b9_56e09f93_XS.jpg'>`
        };
    
        let form = document.querySelectorAll(".form"),
            input = document.getElementsByTagName("input"),
            statusMessage = document.createElement("div");
    
        statusMessage.classList.add("status");
    
        function sendForm(elem) {
            elem.addEventListener("submit", function (e) {
                e.preventDefault();
    
                elem.appendChild(statusMessage);
    
                let formData = new FormData(elem);
                if (_modalCalc__WEBPACK_IMPORTED_MODULE_0__["data_calc"]) {
                    for (let key in _modalCalc__WEBPACK_IMPORTED_MODULE_0__["data_calc"]) {
                        formData.append(key, _modalCalc__WEBPACK_IMPORTED_MODULE_0__["data_calc"][key]);
                    }
                }
    
                function postData(data) {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();
    
                        request.open("POST", "server.php");
    
                        request.setRequestHeader(
                            "Content-Type",
                            "application/json; charset=utf-8"
                        );
    
                        request.onreadystatechange = function () {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 3) {
                                    resolve();
                                } else {
                                    reject();
                                }
                            }
                        };
                        request.send(data);
                    });
                } // End postData
    
                function clearInputs() {
                    [...input].forEach(elem => (elem.value = ""));
                }
                function clerObj(data_calc) {
                    data_calc = {};
                    return data_calc;
                }
                postData(formData)
                    .then(() => (statusMessage.innerHTML = message.loading))
                    .then(() => (statusMessage.innerHTML = message.success))
                    .catch(() => (statusMessage.innerHTML = message.failure))
                    .then(clearInputs)
                    .then(clerObj(_modalCalc__WEBPACK_IMPORTED_MODULE_0__["data_calc"]));
            });
        }
    
        [...form].forEach(function (element) {
            sendForm(element);
        });
    }



/* 
module.exports = form; */
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modalCalc.js":
/*!***********************************!*\
  !*** ./src/js/parts/modalCalc.js ***!
  \***********************************/
/*! exports provided: data_calc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data_calc", function() { return data_calc; });
let data_calc = {};

function modalCalc() {

    let popupCalc = document.querySelector('.popup_calc '),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        body = document.querySelector("body"),
        balconIcons = document.querySelector('.popup_calc_content'),
        type = document.querySelectorAll('.type'),
        type1 = document.querySelectorAll('.typeElem'),
        input = document.querySelectorAll('.form-control'),
        width = document.getElementById('width'),
        height = document.getElementById('height'),
        material = document.getElementById("view_type"),
        temp = document.getElementsByName('checkbox-test');

    let showModalCalc = function () {
        popupCalc.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let showModalCalcProfile = function () {
        popupCalcProfile.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    let showModalCalcEnd = function () {
        popupCalcEnd.style.display = "block";
        document.body.style.overflow = "hidden";
    };

    let hideModal = function () {
        popupCalc.style.display = "none";
        document.body.style.overflow = "";
    };
    let hideModalProfile = function () {
        popupCalcProfile.style.display = "none";
        document.body.style.overflow = "";
    };
    let hideModalEnd = function () {
        popupCalcEnd.style.display = "none";
        document.body.style.overflow = "";
    };

    let total = {};

    let w = width,
        h = height,
        t;

    function calcTotal() {

        let type_w;

        type1.forEach(e => {
            if (e.classList.contains('block')) {
                type_w = e.getAttribute('id');
            }
        });

        temp.forEach((e, i) => {
            if (temp[i].checked) {
                t = temp[i].getAttribute('temp');
            }
        });

        total.width = w.value;
        total.heigh = h.value;
        total.type1 = type_w;
        total.material = material.value;
        total.temp = t;

        data_calc = total;
    }
    
    function clearInputs() {
        [...input].forEach(elem => (elem.value = ""));
    }

    body.addEventListener("click", function forEach(elem) {
        let target = elem.target;

        if (target && target.classList.contains("popup_calc_btn")) {
            showModalCalc(target);
        }
        if (target && target.classList.contains("popup_calc_button")) {
            if ((w.value || h.value) && (w.value != 0 && h.value != 0)){
                calcTotal();
                hideModal(target);
                showModalCalcProfile(target);
            }
        }
        if (target && target.classList.contains("popup_calc_profile_button")) {
            if (temp[0].checked || temp[1].checked) {
                calcTotal();
                hideModalProfile(target);
                showModalCalcEnd(target);
            }
            
        }
        
        if (target && target.classList.contains("popup_calc_closes", 'popup_calc')) {
            hideModal(target);
           
        }
        if (target && target.classList.contains("popup_calc_profile_closes")) {
            
            hideModalProfile(target);
            
        }
        if (target && target.classList.contains("popup_calc_end_closes")) {
           
            hideModalEnd(target);
        }
        if (target && target.classList.contains("popup_calc_end_close")) {
			total = {};
			data_calc = {};
			hideModal(target);
			clearInputs();
			material.options[0].selected = true;
		}
       
    });

    let hideTabf = (f) => {
        for (let i = f; i < type1.length; i++) {
            type1[i].classList.remove('show');
            type1[i].classList.add('hide');
            type1[i].classList.add('text-center');

        }
    };

    hideTabf(1);

    let showTabg = (g) => {
        if (type1[g].classList.contains('hide')) {
            type1[g].classList.remove('hide');
            type1[g].classList.add('show');
            type1[g].classList.add('text-center');
        }
    };
 let balconIconss = document.querySelectorAll('.typeE');
  let hideTabc = (c) => {
        for (let i = c; i < type.length; i++) {
            balconIconss[i].classList.remove('.do_image_more');
            balconIconss[i].classList.add('doimage_more');

        }
    };

    hideTabc(1);

    let showTabv = (v) => {
        if (balconIconss[v].classList.contains('doimage_more')) {
            balconIconss[v].classList.remove('doimage_more');
            balconIconss[v].classList.add('do_image_more');

        }
    };

    balconIcons.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('type') || target.classList.contains('typeE') ) {
            for (let i = 0; i < type.length, i < balconIconss.length; i++) {
                if (target == type[i] || target == balconIconss[i]) {

                    hideTabc(0);
                    showTabv(i);
                    hideTabf(0);
                    showTabg(i);
                    break;
                }
            }
        }
    });

    

}


/* harmony default export */ __webpack_exports__["default"] = (modalCalc);
/* module.exports = modalCalc; */

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tab = document.querySelectorAll('.tab'),
        infoTabcontent = document.querySelectorAll('.info-tabcontent'),
        tabs = document.querySelectorAll('.tabs'),
        infoTab = document.querySelectorAll('.info-tab'),
        afterClick = document.querySelectorAll('.afterClick'),
        blockClick = document.querySelectorAll('.glazing_block '),
        clickBlock = document.querySelectorAll('.clickBlock');

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
        if (target && target.classList.contains('tab') || target.classList.contains('glazing_block') ) {
            for (let i = 0; i < tab.length, i < blockClick.length; i++) {
                if (target == tab[i] || target == blockClick[i]) {

                    hideTabContent(0);
                    showTabContent(i);
                    hideTabc(0);
                    showTabv(i);
                    break;
                }
            }
        }
       
        if (target && target.classList.contains('tabs') || target.classList.contains('clickBlock')) {
            for (let i = 0; i < tabs.length, i < clickBlock.length; i++) {
                if (target == tabs[i] || target == clickBlock[i]) {
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

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2019-12-18';

    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60))),
        days = Math.floor(t/(1000 * 60 * 60 * 24));

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaning(endtime);
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
               
        if (t.total <= 0 &&  t.days <= 0 && t.hours <= 0 & t.minutes <= 0 && t.seconds <= 0) {
            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
                clearInterval(timeInterval);
            }else{
                days.textContent = ('0' + t.days).slice(-2);
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
            }
        }
    }

    setClock('timer', deadline);
}    
    
module.exports = timer;

/***/ }),

/***/ "./src/js/parts/validatorPhone.js":
/*!****************************************!*\
  !*** ./src/js/parts/validatorPhone.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validatorPhone() {
    document.body.addEventListener('input', e => {
        if (e.target.getAttribute('type') === 'tel' ) {
            e.target.value = '+' + e.target.value.replace(/[^\d]/g, '').slice(0, 11);
            if (e.target.value.length == 1) e.target.value = '';
        }if (e.target.getAttribute('type') === 'number') {
            e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
           }
    });
}

module.exports = validatorPhone;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js");
/* harmony import */ var _parts_modalCalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/modalCalc */ "./src/js/parts/modalCalc.js");


window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        clickZoom = __webpack_require__(/*! ./parts/clickZoom.js */ "./src/js/parts/clickZoom.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
       /*  modalCalc = require('./parts/modalCalc'),
        form = require('./parts/form.js'), */
        validatorPhone = __webpack_require__(/*! ./parts/validatorPhone.js */ "./src/js/parts/validatorPhone.js");


    modal();
    tabs();
    clickZoom();
    timer();
    Object(_parts_modalCalc__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_parts_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
    validatorPhone();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
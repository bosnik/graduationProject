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

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");

    modal();
    /* tabs(); */
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
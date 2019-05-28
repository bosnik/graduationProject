import form from './parts/form';
import modalCalc from './parts/modalCalc';
window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modal = require('./parts/modal.js'),
        tabs = require('./parts/tabs.js'),
        clickZoom = require('./parts/clickZoom.js'),
        timer = require('./parts/timer.js'),
       /*  modalCalc = require('./parts/modalCalc'),
        form = require('./parts/form.js'), */
        validatorPhone = require('./parts/validatorPhone.js');


    modal();
    tabs();
    clickZoom();
    timer();
    modalCalc();
    form();
    validatorPhone();
});
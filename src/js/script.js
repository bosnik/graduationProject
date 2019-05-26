window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modal = require('./parts/modal.js'),
        tabs = require('./parts/tabs.js'),
        clickZoom = require('./parts/clickZoom.js'),
        timer = require('./parts/timer.js');

    modal();
    tabs();
    clickZoom();
    timer();
});
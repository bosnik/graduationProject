window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let modal = require('./parts/modal.js'),
        tabs = require('./parts/tabs.js');

    modal();
    tabs();
});
'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderScripts() {
    const sourcePath = path.resolve(path.dirname(__filename), '../src/js/scripts.js');
    const destPath = path.resolve(path.dirname(__filename), '../dist/js/scripts.js');

    const copyright = `/*!
    * Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
    * Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
    * Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
    */
    `
    const scriptsJS = fs.readFileSync(sourcePath);
    const destPathDirname = path.dirname(destPath);

    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    fs.writeFileSync(destPath, copyright + scriptsJS);

    const sourcePath2 = path.resolve(path.dirname(__filename), '../src/js/visitors.js');
    const destPath2 = path.resolve(path.dirname(__filename), '../dist/js/visitors.js');

    const scriptsJS2 = fs.readFileSync(sourcePath2);
    const destPathDirname2 = path.dirname(destPath2);

    if (!sh.test('-e', destPathDirname2)) {
        sh.mkdir('-p', destPathDirname2);
    }

    fs.writeFileSync(destPath2, copyright + scriptsJS2);
};

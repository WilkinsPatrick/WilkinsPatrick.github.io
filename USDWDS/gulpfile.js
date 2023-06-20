/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.sass = './sass';
uswds.paths.src.uswds = './node_modules/@uswds';
uswds.paths.src.sass = './node_modules/@uswds/uswds/packages';
uswds.paths.src.theme = './node_modules/@uswds/uswds/dist/theme';
uswds.paths.src.fonts = './node_modules/@uswds/uswds/dist/fonts';
uswds.paths.src.img = './node_modules/@uswds/uswds/dist/img';
uswds.paths.src.js = './node_modules/@uswds/uswds/dist/js';
uswds.paths.src.projectSass = './sass';
uswds.paths.dist.theme = './sass';
uswds.paths.dist.img = './assets/uswds/images';
uswds.paths.dist.fonts = './assets/uswds/fonts';
uswds.paths.dist.js = './assets/uswds/js';
uswds.paths.dist.css = './assets/uswds/css'

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.compile = uswds.compileSass + uswds.compileIcons;
exports.compileIcons = uswds.paths.dist.img;
exports.compileSass = uswds.paths.dist.css;
exports.default = uswds.watch;
exports.copyAll = uswds.copySetup + uswds.copyAssets;
exports.copyAssets = uswds.copyFonts + uswds.copyImages + uswds.copyJS;
exports.copyFonts = uswds.paths.dist.fonts;
exports.copyImages = uswds.paths.dist.img;
exports.copyJS = uswds.paths.dist.js;
exports.copySetup = uswds.paths.dist.sass;
exports.init = uswds.copyAll + uswds.compile;
exports.updateUswds = uswds.copyAssets + uswds.compile;
exports.watch = uswds.paths.dist.sass + uswds.paths.src.projectsass
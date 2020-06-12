// Initialize animate on scroll
AOS.init();

// Initialize skrollr on non-touch devices only
var touchDevice = 'ontouchstart' in window;
if (!touchDevice && skrollr) {
    var s = skrollr.init({forceHeight: false});
}
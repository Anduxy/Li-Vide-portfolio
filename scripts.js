// Initialize animate on scroll
AOS.init();

// If non-touch devide, initialize skrollr
if (!('ontouchstart' in window)) {
    var s = skrollr.init();
}
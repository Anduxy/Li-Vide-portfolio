AOS.init();

nav = document.getElementsByTagName("nav")[0];
var showWhenScrolled = function() {
  var y = window.scrollY;
  if (y != 0) {
    nav.classList.remove("hide");
    window.removeEventListener("scroll", showWhenScrolled);
  }
};
window.addEventListener("scroll", showWhenScrolled);
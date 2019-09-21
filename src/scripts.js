AOS.init();

nav = document.getElementsByTagName("nav")[0];
var showWhenScrolled = function() {
  var y = window.scrollY;
  if (y == 0 && nav.className.indexOf('hide') === -1) {
    nav.classList.add("hide");
  } else if (y != 0) {
    nav.classList.remove("hide");
  }
};
window.addEventListener("scroll", showWhenScrolled);
showWhenScrolled();

divs = document.getElementsByClassName("toggle-collapse");
var toggleCollapse = function() {
  var details = document.getElementById("collapse-" + this.id);
  if (details.className.indexOf('collapse-hide') === -1) {
    details.classList.add("collapse-hide");
    details.classList.remove("collapse-show");
  } else {
    details.classList.add("collapse-show");
    details.classList.remove("collapse-hide");
  }
};
for (var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", toggleCollapse);
}
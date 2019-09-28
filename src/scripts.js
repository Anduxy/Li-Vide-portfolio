// Animate on scroll (fade, flip, etc.)
AOS.init();

// Show nav when not at top of page
var nav = document.getElementsByTagName("nav")[0];
var showWhenScrolled = function() {
  var y = window.scrollY;
  if (y === 0 && nav.className.indexOf('hide') === -1) {
    nav.classList.add("hide");
  } else if (y !== 0) {
    nav.classList.remove("hide");
  }
};
window.addEventListener("scroll", showWhenScrolled);
showWhenScrolled();

// Show/hide project details click event handlers
var toggleElements = document.getElementsByClassName("toggle-collapse");
var visible = document.getElementsByClassName("collapse-show");
var toggleCollapse = function() {
  var details = document.getElementById("collapse-" + this.id);
  var isHidden = details.className.indexOf('collapse-hide') !== -1;
  for (var i=0; i<visible.length; i++) {
    visible[i].classList.add("collapse-hide");
    visible[i].classList.remove("collapse-show");
    history.replaceState(null, null, ' ');
  }
  if (isHidden) {
    details.classList.add("collapse-show");
    details.classList.remove("collapse-hide");
    location.hash = "#" + this.id;
  }
};
for (var i=0; i<toggleElements.length; i++) {
  toggleElements[i].addEventListener("click", toggleCollapse);
}
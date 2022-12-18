window.onscroll = function() {stickyNav()};
var navbar = document.getElementsByClassName("navbar")[0];
var sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


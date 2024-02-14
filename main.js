var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-menu-btn");


elMenuBtn.addEventListener("click", function() {
  elSiteHeader.classList.toggle("open-menu");
  document.body.classList.toggle("unscrollbody");
});

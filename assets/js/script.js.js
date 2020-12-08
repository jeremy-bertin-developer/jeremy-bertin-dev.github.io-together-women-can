$('.nav-link-classic, .icon-arrow-up-wrapper').on('click',function() {
  $('.navbar-collapse').collapse('hide');
  $hamburger.removeClass("is-active");
});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  })

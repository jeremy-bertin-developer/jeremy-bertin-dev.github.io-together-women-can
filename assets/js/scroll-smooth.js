
   $('a[href^="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('[href="https"]')
    .not('[href="co-founder-note.html"]')
    .on('click',function (e) {
    if (window.matchMedia('(min-width: 1200px)').matches) {
         var target = this.hash,
     $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 90
     }, 1200, 'swing', function () {
      window.location.hash = target;
     });
   } else if (window.matchMedia('(min-width: 992px)').matches) {
         var target = this.hash,
     $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 60
     }, 1200, 'swing', function () {
      window.location.hash = target;
     });
   } else if (window.matchMedia('(max-width: 991.99px)').matches) {
         var target = this.hash,
     $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
     }, 1200, 'swing', function () {
      window.location.hash = target;
     });
   }
 });
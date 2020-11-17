
    $('a[href^="#"]').on('click',function (e) {
     if (window.matchMedia('(min-width: 1200px)').matches) {
            var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
         'scrollTop': $target.offset().top - 110
        }, 900, 'swing', function () {
         window.location.hash = target;
        });
      } 
        else if (window.matchMedia('(min-width: 993px) and (max-width: 1199px)').matches) {
            var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
         'scrollTop': $target.offset().top - 420
        }, 900, 'swing', function () {
         window.location.hash = target;
        });
      } else if (window.matchMedia('(max-width: 992px)').matches) {
            var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
         'scrollTop': $target.offset().top - 430
        }, 900, 'swing', function () {
         window.location.hash = target;
        });
      }
    });

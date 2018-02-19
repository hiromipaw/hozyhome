function main() {

(function () {
   'use strict';

   /*-----------------------------------------------------------------------------------*/
   /*	STICKY HEADER
   /*-----------------------------------------------------------------------------------*/
   $(document).ready(function () {

       var menu = $('.navbar'),
           pos = menu.offset();

       $(window).scroll(function () {

           if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 200) {
               menu.fadeOut('fast', function () {
                   $(this).removeClass('default').addClass('fixed').fadeIn('fast');
               });
           } else if ($(this).scrollTop() <= pos.top + 200 && menu.hasClass('fixed')) {
               menu.fadeOut(0, function () {
                   $(this).removeClass('fixed').addClass('default').fadeIn(0);
               });
           }
       });

   });


$(document).ready(function(){
$('.navbar .nav li a').on('click',function(){
	    $('.navbar .navbar-collapse.in').collapse('hide');
	})
	});

	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});

  // Preloader */
      $(window).on('load',function() {
    // will first fade out the loading animation
      $("#status").fadeOut("slow");

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(500).fadeOut("slow").remove();

    })
   // Page scroll
  	$(document).on('click','a.page-scroll',function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // Show Menu on Book

    $(window).on('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });
      $(document).on('click','a.js-scroll-trigger[href*="#"]:not([href="#"])',function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 54)
            }, 1000);
            return false;
          }
        }
      });


    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	/*    $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });
*/
  	});

  	// Portfolio Isotope Filter
    $(window).on('load',function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $(document).on('click','.cat a',function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

}());

    $(document).ready(function() {
      wow = new WOW(
        {
          animateClass: 'animated',
          offset:       100
        }
      );
      wow.init();
    });
}
main();

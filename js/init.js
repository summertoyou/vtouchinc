/*
 * Made by WebDesignCrowd
 * http://webdesigncrowd.com
 *
 */
 
(function($){
	$(function(){
	  
    var navbarHeight = 80;

    // Slide in Functionality 
    $(window).scroll(function() {
      var top = $(window).scrollTop();
      $(".slide-in").each(function () {
        var thisTop = $(this).offset().top;
        var height = $(this).height();
        if ((top > (thisTop - (height * 1.5))) && !$(this).hasClass("slid")) {
          $(this).addClass("slid");
        }
      });   
      $('body').scrollspy({ offset: navbarHeight+10, target: '#navbar' });
    });

	  // Home
	  $('.carousel').carousel({
        pause: false,
        interval: 8000
    });

    // Navbar Affix
    $('#navbar').affix({
      offset: {
        top: function () {
          return (this.top = $(window).height() - navbarHeight)
        }
      }
    })
    

    // Parallax Scripts
    function updateParallax() {
      if ($(window).width() > 768) {
        $(".parallax").each(function () {
          var bottom = $(this).offset().top + $(this).height();
          var top = $(this).offset().top;
          var windowHeight = $(window).height();
          var scrollTop = $(window).scrollTop() + windowHeight;
          var fromTop = 0;
          var isHome = true;
          if (top === 0) { 
            fromTop = $(window).scrollTop() - top; 
            isHome = true;
          }
          else { 
            fromTop = $(window).scrollTop() - top + windowHeight; 
            isHome = false;
          }
          if ((bottom > $(window).scrollTop()) && (top < scrollTop)) {   
            var parallax = -1 * (fromTop / 3);
            var revParallax = parallax;
            var percent = 1 - 1.3 *($(window).scrollTop() / $(window).height());
            if (isHome) { 
              revParallax += navbarHeight; 
              $("#home .logo").css('marginTop', parallax + "px");
              $("#home .logo, #home .welcome, #home .call-to-action, #home .macbook-preview").css('opacity', percent);
            }
            $(this).children("img").first().css('bottom', revParallax + "px");
          }
        });
      }
    }
    updateParallax();
    
    $(window).scroll(function() {
      updateParallax();
      // if ($(window).height() > $(window).scrollTop()) {   
      //   var parallax = -1 * ($(window).scrollTop() / 3);
      //   var revParallax = navbarHeight + parallax;
      //   var percent = 1 - 1.5 *($(window).scrollTop() / $(window).height());
      //   $(".bg img").css('bottom', revParallax + "px");
      //   $("#home .logo").css('marginTop', parallax + "px");
      //   $("#home .logo, #home .welcome, #home .call-to-action").css('opacity', percent);
      // }
    });
    
      

	  
    // Blog Masonry
    var $container = $('.masonry-grid');
    
    $container.imagesLoaded(function(){
      new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
      } );

      // Smooth Scrolling
      $("a.scroll").click(function(e) {
        e.preventDefault();
        var offset = $(this.hash).offset().top - (navbarHeight/2);
        $('html, body').animate({ scrollTop: offset }, 600);
      });
    });


    // Accordion Active Toggling 
    $("a[data-toggle='collapse']").click(function() {
      if ($(this).parent().parent(".panel-heading").hasClass("active")) {
        $(this).parent().parent().parent().parent().find('.panel-heading').removeClass("active");
      }
      else {
        $(this).parent().parent().parent().parent().find('.panel-heading').removeClass("active");  
        $(this).parent().parent(".panel-heading").addClass("active");
      }
    });



  
    

	}); // end of document ready
})(jQuery); // end of jQuery name space
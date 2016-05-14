jQuery(function($){


// preloader   
paceOptions = {
  // Disable the 'elements' source
  elements: false,

  // Only show the progress on regular and ajax-y page navigation,
  // not every request
  restartOnRequestAfter: false
}



$(".menu-wrap").sticky({topSpacing:0});

$.stellar({
  horizontalOffset: 0,
  verticalOffset: 0
});
// Scroll Up
$.scrollUp({
	 scrollText: ''
});
// Pretty Photo
$("a.video-lightbox").prettyPhoto({
	'default_width' : 800,
	'default_height' : 400,
	'social_tools' : ''
});
new WOW().init();

// CounterUp
$('.counter-up').counterUp();


//ressponsive video by Fitvits
$(".responsive-video").fitVids();
$(".provat-slider-wrap").owlCarousel({
  	singleItem : true,
	autoPlay : true,
		
});
// ScrollUp plugin
$.scrollUp({
	scrollText: ''
});

// one page nav
$('#nav-menu').onePageNav({
	currentClass: 'current'
});
// preloader	 
paceOptions = {
  // Disable the 'elements' source
  elements: false,

  // Only show the progress on regular and ajax-y page navigation,
  // not every request
  restartOnRequestAfter: false
}

//smooth inline scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('#portfolio-wrap').mixItUp();


 // $(".portfolio-single-image").prettyPhoto({
	 // theme : 'light_square',
	// // social_tools: '<div class="pp_social"><a href="##1" class="btn btn-primary">View Details &nbsp;<i class="fa fa-external-link"></i></a></div>',
 // });


///////////// image hover effect
$(' #da-thumbs > li ').each( function() { $(this).hoverdir(); } );
$( '.cbp-qtrotator' ).cbpQTRotator();

        $("#typed-1").typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            stringsElement: $('#typed-string-1'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });



///////////////////
});
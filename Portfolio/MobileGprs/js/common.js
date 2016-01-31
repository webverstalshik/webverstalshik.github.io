

$(document).ready(function() {

 $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',
        width: 940,
        height: 528,

        arrows : false,
        helpers : {
            media : {},
            buttons : {}
        }
    });



	$('.ten_open').click(function(){
   $('.ten_row_2').slideToggle('slow');
   $('.ten_row_3').slideToggle('slow');
  
 });


  $('.test-popup-link').magnificPopup({
  	type:'image',
		gallery: {
	    // options for gallery
	    enabled: true
  	}  	
  });

   $(function() {
    $(".rslides").responsiveSlides({
	//    auto: true,             // Boolean: Animate automatically, true or false
	//    speed: 500,            // Integer: Speed of the transition, in milliseconds
	//    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	// 	  pager: false,           // Boolean: Show pager, true or false
	   	  nav: true             // Boolean: Show navigation, true or false
	// 	  random: false,          // Boolean: Randomize the order of the slides, true or false
	// 	  pause: false,           // Boolean: Pause on hover, true or false
	// 	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	// 	  prevText: "Previous",   // String: Text for the "previous" button
	// 	  nextText: "Next",       // String: Text for the "next" button
	// 	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	// 	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	// 	  manualControls: "",     // Selector: Declare custom pager navigation
	// 	  namespace: "rslides",   // String: Change the default namespace used
	// 	  before: function(){},   // Function: Before callback
	// 	  after: function(){}     // Function: After callback
  });
  });


});

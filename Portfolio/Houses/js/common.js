$(document).ready(function(){

// Range slider options
 $("#Range-Slider").slider({
   from: 4050, 
   to: 55630, 
   step: 50, 
   smooth: true, 
   round: 0, 
   // dimension: "&nbsp;$",   
 }); 
  
// Check Box Filter change color text
	$('label').click(function (e) {
    if ($('input', this).is(':checked')) {
        $(this).css('color', 'green');
    } else {
        $(this).css('color', 'black');
    }
});


// Owl slider
	$("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
 //Activation Responsive Slider 
 $(function() {
    $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
	  speed: 1500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 10000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: false,             // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "Previous",   // String: Text for the "previous" button
	  nextText: "Next",       // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "rslides",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
   });
  });

 document.querySelector( "#nav-toggle" )
   .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

//добавим исскуственно класс для кнопки с галочкой в пункте меню
$('span.arow').addClass('ex');

//код отвечает за открытие родительского меню по главной кнопке меню в адаптиве
 $('#nav-toggle').click(function(){
   $('nav.top-menu>ul').slideToggle('slow');
 });

//код отвечает за отображение меню при изменении размера окна
 $(window).resize(function(){
 	if ($(window).width()>768){
 		 	$('nav.top-menu>ul').removeAttr('style');
 		 	$('nav.top-menu>ul ul').removeAttr('style'); 		 	
 		 	}
 });

 //код отвечает за нажатие по кнопке с галочкой в пункте меню
$('.arow').click(function(){ 
	 $(this).parent('li').find('ul').slideToggle('slow');

//код который отвечает за отображение галочки (вверх,вниз)в пункте меню
    var menuItem = $(this);  

    if (menuItem.hasClass("ex")) {     	
        menuItem.removeClass('ex').addClass('cpd');  
        
    }  
    else if (menuItem.hasClass("cpd")) {  
    	menuItem.removeClass('cpd').addClass('ex');  
        
    }  
});  

});
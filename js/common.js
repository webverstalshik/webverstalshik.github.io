$(document).ready(function(){
   
	/*==========  Responsive Navigation  ==========*/
	$('.main-nav').children().clone().appendTo('.responsive-nav');
	$('.responsive-menu-open').on('click', function(event) {
		event.preventDefault();
		$('body').addClass('no-scroll');
		$('.responsive-menu').addClass('open');
		return false;
	});
	$('.responsive-menu-close').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');
		return false;
	});
	 $('.responsive-nav li a').on('click', function(event) {
		$('body').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');		
	});

 // Плавная прокрутка при переходе по якорю
 $('a[href*=#]').bind("click", function(e){
  var anchor = $(this);
  var name = anchor.attr('href').replace(new RegExp("#",'gi'), '');
  $('html, body').stop().animate({
    scrollTop: $('a[name='+name+']').offset().top
  }, 1000);
  e.preventDefault();
  return false;
});

});
$(document).ready(function(){
// Плавная прокрутка при переходе по якорю
//  $('a[href*=#]').bind("click", function(e){
//   var anchor = $(this);
//   var name = anchor.attr('href').replace(new RegExp("#",'gi'), '');
//   $('html, body').stop().animate({
//     scrollTop: $('a[name='+name+']').offset().top}, 1000);
//   e.preventDefault();
//   return false;
// });

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() >= 600) {
 
$('.btn-to-up').fadeIn('slow');
 
} else {
 
$('.btn-to-up').fadeOut('slow');
 
}
 
});
 
$('.btn-to-up').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
}); 
});
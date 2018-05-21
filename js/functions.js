$(document).ready(function() {
    'use strict';
    $("div#preloader").fadeOut(1000);
    setTimeout(deletePreloader, 1000);
});

function deletePreloader() {
  'use strict';
  $("div#preloader").remove();
  $('html, body').css('overflowY', 'auto');
}

window.onbeforeunload = function () {
  'use strict';
  window.scrollTo(0, 0);
}


jQuery(window).on('scroll', function($){
  if (jQuery(this).scrollTop() < 150) {
	jQuery('#scrollArrow').fadeIn('slow');
  } else {
	jQuery('#scrollArrow').fadeOut('slow');
  }
});


function lipa() {
$('#scrollArrow').click(function(){
	$("html,body").animate({  scrollTop: $(".slide1").offset().top}, 598);

});
}
function lipa1() {
$('#scrollArrow1').click(function(){
	$("html,body").animate({  scrollTop: $(".slide2").offset().top}, 598);

});
}
function lipa2() {
$('#scrollArrow2').click(function(){
	$("html,body").animate({  scrollTop: $(".slide3").offset().top}, 598);

});
}

function lipa3() {
$('#scrollArrow3').click(function(){
	$("html,body").animate({  scrollTop: $(".slide0").offset().top}, 898);

});
}

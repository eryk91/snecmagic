$(document).ready(function() {
    'use strict';
    $("div#preloader").fadeOut(1000);
    setTimeout(deletePreloader, 1000);
});

function deletePreloader() {
  'use strict';
  $("div#preloader").remove();
  //$('html, body').css('overflowY', 'auto');
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

/* SCROLL MACHINE */
var x = 0;
var pos = $(".slide0").position();
$('html').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 < 0) {
      x+=0.5;
    }
    else{
      x-=0.5;
    }

    if(x>3) x=3;
    if(x<0) x=0;
    /*start slides effects */
    pos = $(".slide"+x).position();
    //if(Number.isInteger(x)) $("body").css({"transform":"translateY(-"+x*100+"vh)"});

    if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
});

/*mobilescroll*/

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
        } else {
            /* right swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            x = Math.floor(x);
            x++;
            if(x==1) slice1Effects();
            if(x==2) slice2Effects();
            if(x>3) x=3;
            if(x<0) x=0;
            if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
        } else {
          x = Math.floor(x);
          x--;
          if(x>3) x=3;
          if(x<0) x=0;
          if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

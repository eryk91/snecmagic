$(document).ready(function() {
    'use strict';
    $("div#preloader").fadeOut(1000);
    setTimeout(deletePreloader, 1000);
});

function deletePreloader() {
  $("div#preloader").remove();
  //$('html, body').css('overflowY', 'auto');
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


jQuery(window).on('scroll', function($){
  if (jQuery(this).scrollTop() < 150) {
	jQuery('#scrollArrow').fadeIn('slow');
  } else {
	jQuery('#scrollArrow').fadeOut('slow');
  }
});



/* SCROLL MACHINE */
var x = 0;
$('html').bind('mousewheel', function(e) {
    if(e.originalEvent.wheelDelta /120 < 0) {
      x+=0.5;
    }
    else{
      x-=0.5;
    }
    if(x>=0 && x<=3) {
      if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
    }
    if(x>3) x=3;
    if(x<0) x=0;
    /*start slides effects */
    //if(Number.isInteger(x)) $("body").css({"transform":"translateY(-"+x*100+"vh)"});

});

$(document).on("keydown", function(e) {
  var pos = $(window).scrollTop();
  var speed = 0.5;
  var one = $(".slide0").scrollTop();
  var two = $(".slide1").scrollTop();
  var three = $(".slide2").scrollTop();
  var four = $(".slide3").scrollTop();

    if(e.keyCode == 40) { //w górę
      x+=1;
    }

    if(e.keyCode == 38) { //w dół
      x-=1;
    }
    if(x>=0 && x<=3) {
$("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
      timeOuter(1, 410);
    }
    if(x>3) x=3;
    if(x<0) x=0;
});

function scrollarrow() {
$('#scrollArrow').click(function(){
  x=1;
  if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);

});
}
function scrollarrow1() {
$('#scrollArrow1').click(function(){
  x=2;
  if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
});
}
function scrollarrow2() {
$('#scrollArrow2').click(function(){
  x=3;
  if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
});
}

function scrollarrow3() {
$('#scrollArrow3').click(function(){
  x=0;
  if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);

});
}


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
          x++;
        }
        else {
          x--;
        }
        if(x>=0 && x<=3) {
          if(Number.isInteger(x)) $("html,body").animate({scrollTop: $(".slide"+x).offset().top}, 400);
        }
        if(x>3) x=3;
        if(x<0) x=0;
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

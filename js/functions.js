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
$( "#scrollArrow" ).click(function() {
  alert( "Handler for .click() called." );
});

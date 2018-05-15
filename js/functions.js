$(document).ready(function() {
    'use strict';
    $("div#preloader").fadeOut(1000);
    setTimeout(deletePreloader, 1000);
});

function deletePreloader() {
  'use strict';
  $("div#preloader").remove();

}

window.onbeforeunload = function () {
  'use strict';
  window.scrollTo(0, 0);
}

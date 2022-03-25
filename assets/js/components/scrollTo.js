import $ from "jquery";

// Safari Scroll To Element
function safariScrollTo() {
  $('a[href^="#"]').on('click.smoothscroll',function(e) {
    e.preventDefault();

    let target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-40
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });
}

// Safari Browser Detection
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  safariScrollTo();
}

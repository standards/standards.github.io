(function() {
  (function($) {
    // identifying the badge to apply a class
    $('img[src*="open-standards.now.sh/badge"]').parents('p').addClass('badge');
    $('img[src*="open-standards.now.sh/api/badge"]').parents('p').addClass('badge');
  })(jQuery);
}).call(this);

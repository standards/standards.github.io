(function() {
  (function($) {
    // Formatting badge parent to be span
    var badgeP = $('img[src*="standards.now.sh/badge"]').parents('p');
    badgeP.replaceWith('<span>' + badgeP.html() +'</span>')
  })(jQuery);
}).call(this);

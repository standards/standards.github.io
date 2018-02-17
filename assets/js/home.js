(function() {
    (function($) {
        var $animateIn, $animateOut, animateInOffset, animateOutOffset;
        $animateIn = $('.animate-in');
        $animateOut = $('.animate-out');
        animateInOffset = 100;
        animateOutOffset = 200;
        $animateIn.addClass('pre-animate');
        $animateOut.addClass('pre-animate-out');
        $(window).scroll(function(e) {
            var bottomScrollPosition, windowHeight, windowScrollPosition;
            windowHeight = $(window).height();
            windowScrollPosition = $(window).scrollTop();
            bottomScrollPosition = windowHeight + windowScrollPosition;
            $animateIn.each(function(i, element) {
                if($(element).offset().top + animateInOffset < bottomScrollPosition) {
                    return $(element).removeClass('pre-animate');
                }
            });
            return $animateOut.each(function(i, element) {
                if($(element).offset().top + animateOutOffset < bottomScrollPosition) {
                    return $(element).removeClass('pre-animate-out');
                }
            });
        });

        $.getJSON('https://standards.now.sh/stargazers.json', function(data) {
            var items = [];
            $.each(data, function(key, val) {
                $('<a href="https://github.com/'+val+'" class="animate-in" target="_blank">'+
                    '<img class="img-thumbnail" src="https://avatars.githubusercontent.com/'+val+'?s=80" alt="'+val+'" title="'+val+'"/>'
                +'</a>').appendTo(".org-members");
            });
        })
    })(jQuery);
}).call(this);

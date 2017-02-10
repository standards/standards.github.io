(function() {
    (function($, anchors) {
        anchors.options = {
            class: 'mega-octicon',
            icon: '\uf05c'
        };
        anchors.add('h2').elements.forEach(function(e) {
            var $a = $(e).find('a'),
                href = $a.attr('href');
            $a.attr('href', "learn" + href);
        });

        var checkHash = function() {
            var hash = window.location.hash.slice(1).split('/');
            $('html, body').animate({
                scrollTop: $("h2#"+hash[0]).offset().top - 100
            }, 1000);
            $("h2#"+hash[0]).addClass('highlight border-top').nextUntil('h2').addClass('highlight').last().addClass('border-bottom');
            if(hash.length > 1) {
                $('h2#'+hash[0]).nextAll('section').find('.nav-tabs a[href="#'+hash[1]+'"]').tab('show');
            }
        };

        $('.nav-tabs a').click(function (e) {
            e.preventDefault();
            var hash = [$(this).parents('section').prevAll('h2').attr('id'), $(this).attr('href').slice(1)];
            window.location.hash = '#' + hash.join('/');
        });

        $(window).on('hashchange', checkHash());
    })(jQuery, anchors);
}).call(this);
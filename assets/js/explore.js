(function() {
    (function($) {
        var msnry = $('.grid').masonry({
            itemSelector: '.grid-item'
        });

        $('#radioBtn a').on('click', function(){
            var sel = $(this).data('title');
            var tog = $(this).data('toggle');
            $('#'+tog).prop('value', sel);

            $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
            $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
        })

        $('#filter').keyup(function(event) {
            var $el, rex;
            $el = $(event.target);
            rex = new RegExp($el.val(), 'i');
            $('.grid .grid-item').hide();
            $('.grid .grid-item').filter(function() {
                return rex.test($(this).data($('#searchby').val()));
            }).show();
            msnry.masonry();
            if($(".grid .grid-item:visible").length === 0) {
                return $('.no-matches').show();
            } else {
                return $('.no-matches').hide();
            }
        });
    })(jQuery);
}).call(this);

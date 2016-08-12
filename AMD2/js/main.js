$(window).load(function() {
  $('.loader').fadeOut();
});

'use strict';
    var $windowWidth = Math.max($(window).width(), window.innerWidth),
        $filters = $('#filters'),
        $worksgrid = $('#works-grid');

$('.progress.custom .progress-bar').each(function() {
    var each_bar_width = $(this).attr('aria-valuenow');
    var Value = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
    if ($(this).hasClass('progress-trans')) {
        $(this).html('<span>' + Value + '%' + '</span>');
    }
});

$('a', $filters).on('click', function() {
    var selector = $(this).attr('data-filter');
    $('.current', $filters).removeClass('current');
    $(this).addClass('current');
    $worksgrid.isotope({
        filter: selector
    });
    return false;
});

$(window).on('resize', function() {
    var windowWidth = Math.max($(window).width(), window.innerWidth),
        itemWidth = $('.grid-sizer').width(),
        itemHeight = Math.floor(itemWidth * 0.95),
        itemTallHeight = itemHeight * 2;
    if (windowWidth > 0) {
        $('.work-item', $worksgrid).each(function() {
                $(this).css({
                    height: itemHeight
                });
        });
    }

    $worksgrid.isotope({
        itemSelector: '.work-item',
        transitionDuration: '0.3s',
        packery: {
            columnWidth: '.grid-sizer',
        },
    });
}).resize();

(function ($) {
    'use strict';
    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(500).fadeOut("slow");
        }
    });

    //=======================================================
    // Home Slider
    //=======================================================
    if ($(".sliderArea").length > 0)
    {
        var revs;
        revs = $('.tp-banner1').revolution({
            delay: 6000,
            startheight: 656,
            startwidth: 1170,
            hideThumbs: 200,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "none",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on"
        });
        revs.bind("revolution.slide.onchange", function (e, data) {
            $(".sliderArea").attr('data-currentslide', 'activRev_' + data.slideIndex);
        });

    }
    //=======================================================
    // Mobile Menu
    //=======================================================
    $(".menuButton").on('click', function () {
        $(".mainMenu > ul").slideToggle('slow');
        $(this).toggleClass('active');
    });
    if ($(window).width() <= 991)
    {
        $("ul li.hasChild > a").on('click', function (e) {
            e.preventDefault();
            $(this).next('.dropSub').slideToggle('slow');
            $(this).next('.dropMenu').slideToggle('slow');
        });
    }
    $(".menuButton").on('click', function () {
        $(".innerMenu > ul").slideToggle('slow');
        $(this).toggleClass('active');
    });
   
    //=======================================================
    // Fixed Header 
    //=======================================================
    if ($(".headerArea").length > 0)
    {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 500)
            {
                $(".headerArea").addClass('headerFix animated fadeInUp1');
            }
            else
            {
                $(".headerArea").removeClass('headerFix animated fadeInUp1');
            }
        });
    }
    else
    {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 170)
            {
                $(".headerArea").addClass('headerFix animated fadeInUp1');
            }
            else
            {
                $(".headerArea").removeClass('headerFix animated fadeInUp1');
            }
        });
    }


    //========================================================
    // Contact
    //========================================================
    if ($("#unContactForm").length > 0)
    {
        $("#unContactForm").on('submit', function (e) {
            e.preventDefault();
            var allData = $(this).serialize();
            var required = 0;
            $("#unConSubmit").html('Sending...');
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $("#unConSubmit").html('Sending...');
                $.ajax({
                    type: "POST",
                    url: 'contact_mail.php',
                    data: {allData: allData},
                    success: function (data)
                    {
                        $("#unContactForm input[type='text'], #unContactForm input[type='email'], #unContactForm textarea").val('');
                        $("#unConSubmit").html('Done!');
                    }
                });
            }
            else
            {
                $("#unConSubmit").html('Send');
            }
        });
    }
    //========================
    // Back To Top
    //========================
    if ($("#backto").length > 0)
    {
        $("#backto").on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, 1000);
        });
    }
    //========================
    // WOW INIT
    //========================
    if ($(window).width() > 490)
    {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    }
   
})(jQuery);


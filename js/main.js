'use strict';
$(window).load(function () {
    
    var wind = $(window)
    
    //PRELOADER
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.
    
   
    // FADE OUT EFFECT WHEN CLICK A LINK
    $(document).on("click", "a:not(.image-link)", function () {
        var newUrl = $(this).attr("href");
        if (!newUrl || newUrl[0] === "#") {
            location.hash = newUrl;
            return;
        }
        $("html").fadeOut(function () {
            location = newUrl;
        });
        return false;
    });
    
    // PARALLAX CLOUD JS
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    

    // RESPONSIVE MENU TOGGLE
 
    if (wind.width() < 992) {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
            $("header nav ul li a").on("touchend", function () {
                $(this).next('ul').slideToggle();
            });
        }else {
                $("header nav > ul > li.dropdown a").on("click", function () {
                    $(this).next('ul').slideToggle();
                });
            }
    }
    
    
    // SUBMENU POSITION
    $('.dropdown-menu').parent().hover(function () {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > wind.width()) {
            var newpos = -$(menu).width();
            menu.css({
                "left": newpos
                , "margin-right": "20px"
            });
        }
    });
  
    
    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    
    var imglnk = $('.image-link')
    if (imglnk.length) {
        imglnk.magnificPopup({
            type: 'image'
            , gallery: {
                enabled: true
            }
            , zoom: {
                enabled: true
            }
        });
    }
    
    
    //ONEPAGE VERSION
         $(document).on("scroll", onScroll);
        //smoothscroll
        var headalnk = $('header.one-page .navbar nav a[href^="#"]');
        var heada = $('header.one-page .navbar nav a');
    
        headalnk.on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            heada.each(function () {
                $(this).removeClass('selected');
            })
            $(this).addClass('selected');
            var target = this.hash
                , //  menu = target;
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 170
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            heada.each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top - 173 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    heada.removeClass("selected");
                    currLink.addClass("selected");
                }
                else {
                    currLink.removeClass("selected");
                }
            });
        }
    
    
}); // Window load end



$(document).ready(function () {
    
    // HOME TYPED JS
    var typelement = $('.element');
    if (typelement.length) {
        typelement.each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')]
                , loop: $(this).data('loop') ? $(this).data('loop') : false
                , backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000
                , typeSpeed: 10
            , });
        });
    }
    
    // PORTFOLIO FILTER 
    if ($('.isotope_items').length) {
        // PORTFOLIO ISOTOPE
        var $container = $('.isotope_items');
        var portfilter = $('.portfolio_filter ul li');
        $container.isotope();
        portfilter.on("click", function () {
            portfilter.removeClass("select-cat");
            $(this).addClass("select-cat");
            var selector = $(this).attr('data-filter');
            $(".isotope_items").isotope({
                filter: selector
                , animationOptions: {
                    duration: 750
                    , easing: 'linear'
                    , queue: false
                , }
            });
            return false;
        });
    }
    
    //FOOTER HEIGHT
    var wind = $(window)
    function footsize() {
        if ($('footer').height() < wind.height()) {
            $('body').css({
                "padding-bottom": $('footer').height() + "px"
            });
            $('footer').css({
                "position": 'fixed'
            });
        }
        else {
            $('body').css({
                "padding-bottom": '0'
            });
            $('footer').css({
                "position": 'relative'
            });
        }
    }
    footsize();
    wind.resize(footsize);
        
    //HOME PAGE & FOOTER HEIGHT
    
    if ($('.home').length) {
        function centerInit() {
            var hometext = $('.home')
            hometext.css({
                "height": wind.height() + 150 + "px"
            });
        }
        centerInit();
        wind.resize(centerInit);
    }
        
        
    //TITLE LINE
    var winwit = $(window).width()
    var cont = $('.container').width()
    var linewit = (winwit - cont) / 2
    var titlewit = $('.page-title').width()

    function titline() {
        $('.line.bold').css({
            "width": (titlewit) + (linewit) + 15 + "px"
        });
    }
    titline();
    wind.resize(titline);
    
    // OWL CAROUSEL GENERAL JS
    var owlcar = $('.owl-carousel');
    if (owlcar.length) {
        owlcar.each(function () {
            var $owl = $(this);
            var itemsData = $owl.data('items');
            var autoPlayData = $owl.data('autoplay');
            var paginationData = $owl.data('pagination');
            var navigationData = $owl.data('navigation');
            var stopOnHoverData = $owl.data('stop-on-hover');
            var itemsDesktopData = $owl.data('items-desktop');
            var itemsDesktopSmallData = $owl.data('items-desktop-small');
            var itemsTabletData = $owl.data('items-tablet');
            var itemsTabletSmallData = $owl.data('items-tablet-small');
            $owl.owlCarousel({
                items: itemsData
                , pagination: paginationData
                , navigation: navigationData
                , autoPlay: autoPlayData
                , stopOnHover: stopOnHoverData
                , navigationText: ["<", ">"]
                , itemsCustom: [
                    [0, 1]
                    , [500, itemsTabletSmallData]
                    , [710, itemsTabletData]
                    , [992, itemsDesktopSmallData]
                    , [1199, itemsDesktopData]
                ]
            , });
        });
    }
    
    // BOOTSTRAP TOOLTIP
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
}); // ready end


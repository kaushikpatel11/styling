$(document).ready(function () {
    $(document).on('click', '.hamburger', function (event) {
        $(".mobile-menu").toggleClass("active")
    });
    $(document).on('click', '.mobile-menu.active .nav-backdrop', function (event) {
        $('.mobile-menu').removeClass('active');
    });
    $(document).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('.hamburger.is-active').removeClass('is-active');
            $('.mobile-menu.active').removeClass('active');
        }
    });
    var clickable = $('.mobile-menu').attr('link-clickable');
    $('.mobile-menu li:has(ul)').addClass('has-sub');
    $('.mobile-menu .has-sub>a').after('<em class="caret">');
    if (clickable == 'true') {
        $('.mobile-menu .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
    } else {
        $('.mobile-menu .has-sub>.caret').addClass('trigger-caret');
    }
    $(document).on('click','.mobile-menu .has-sub>.trigger-caret',function(event){
        var element = $(this).parent('li');
        if (element.hasClass('is-open')) {
            element.removeClass('is-open');
            element.find('li').removeClass('is-open');
            element.find('ul').slideUp(200);
        }
        else {
            element.addClass('is-open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('is-open');
            element.siblings('li').find('li').removeClass('is-open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });
});

/* Script on scroll
------------------------------------------------------------------------------*/

$(window).on('scroll', function () {

});
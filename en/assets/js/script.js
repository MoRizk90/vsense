$(document).ready(function () {
    $(this).scrollTop(0);


    $("html").niceScroll({
        cursorcolor: "#229999",
        cursorborder: "0px solid #fff",
        cursorwidth: "7",
        zindex: 10,
        scrollspeed: "60",
        horizrailenabled: false,
    });

    var scrollButton = $("#shm");
    $(window).scroll(function () {
        $(this).scrollTop() >= 490 ? scrollButton.show() : scrollButton.hide();
    });
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });



    // toggle between classes plus-minus///


    $(".toggle-icon i").click(function () {
        $(this).toggleClass("fa-plus fa-minus");

    });

    // toggle between readmore read less ///

    $(".readmore").click(function () {
        if ($(this).html() == 'Read more') {
            $(this).html('Read less');
        } else if ($(this).html() == 'Read less') {
            $(this).html('Read more');
        }
    });


    // animation on click on scroll btn ///

    $('.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 600);
                return false;
            }
        }
    });
});



/////////show  / hide /collapse///////

$(".spoiler-trigger").click(function () {
    $(this).parent().next().collapse('toggle');
    if ($("span", this).text() === 'Read More') {
        $("span", this).text('Read Less');
    } else {
        if ($("span", this).text() === 'Read Less') {
            $("span", this).text('Read More');
        }
    }
});

/////////////////////


function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}



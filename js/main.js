var $window = $(window),
    $body = $('body');
// Nav

// Title Bar
$(
        '<div id="titleBar">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '</div>'
    )
    .appendTo($body);

// Panel
$(
        '<div id="navPanel">' +
        '<nav>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
    )
    .appendTo($body)
    .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'navPanel-visible'
    });

// Fixed Nav
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 580) {
            $(".menu").addClass("fixednav");
            $(".backtotop").addClass("topbt");
        } else {
            $(".menu").removeClass("fixednav");
            $(".backtoptop").removeClass("topbt");
        }

    });
});
// Scrolling
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});
// Backtotop
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#topbt').fadeIn();
        } else {
            $('#topbt').fadeOut();
        }
    });
    $('#topbt').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
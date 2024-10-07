$(document).ready(function () {
    // Slickスライダー
    $(".voices-slider__container").slick({
        dots: true,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        prevArrow: $(".voices-slider__button--prev"),
        nextArrow: $(".voices-slider__button--next"),
        dotsClass: "slide-dots",

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // アコーディオン
    $(".accordion__title").click(function () {
        $(this).toggleClass("accordion__title--active");

        $(this).next(".accordion__content").slideToggle(300);

        $(".accordion__content").not($(this).next()).slideUp(300);
        $(".accordion__title").not($(this)).removeClass("accordion__title--active");
    });

    // トップへ戻るボタン
    var backToTopButton = $(".back-to-top");
    var showButtonHeight = 200;
    var fadeDuration = 400;

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > showButtonHeight) {
            backToTopButton.fadeIn(fadeDuration).addClass("show");
        } else {
            backToTopButton.fadeOut(fadeDuration).removeClass("show");
        }
    });
});

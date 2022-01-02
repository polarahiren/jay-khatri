try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {

}
// slick js
import 'slick-carousel';



$(document).ready(function () {

    //menu
    $(".hamburger-menu").click(function (){
        $(this).toggleClass("active");
        $(".menu-list").slideToggle();
    });


    $('.hero-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 200,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='public/assets/images/arrow-prev.png' alt='prev image' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='public/assets/images/arrow-next.png' alt='prev image' /></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.wheels-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

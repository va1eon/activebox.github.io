$(function(){


    //FIXED HEADER
    let header=$("#header");
    let intro=$("#intro");
    let introH=intro.innerHeight();
    let scrollPos=$(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function(){

        introH=intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH){

         if(scrollPos>introH){
            header.addClass("fixed");
        } else {
             header.removeClass("fixed");
        }
    }

    //SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 700);

    });

    //NavToggle


   navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });

     //REWIES: https://kenwheeler.github.io/slick/
    let slider = $("#rewiesSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});







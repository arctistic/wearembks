$(document).ready(() => {
    $(".dropdown-sandwich").on("click", () => {
        $(".nav-dropdown").toggleClass("toggle-display");
        $(".dropdown-sandwich").toggleClass("rotate-sandwich");

    });

    $(window).on('scroll', () => {
        if($(window).scrollTop() > 30){
            $(".nav-dropdown").css('top','0px');
        } else {
            $(".nav-dropdown").css('top','30px');
        }
    });

    $(".side-sub-dropdown-project").on("click", () => {
        $(".side-sub-dropdown-project").toggleClass("nav-sub-dropdown-toggle");
    });
    
    $(".side-sub-dropdown-chapters").on("click", () => {
        $(".side-sub-dropdown-chapters").toggleClass("nav-sub-dropdown-toggle");
    });
    



});
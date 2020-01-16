$(document).ready(() => {

    // Dropdown display control on sandwich click
    $(".dropdown-sandwich").on("click", () => {
        $(".nav-dropdown").toggleClass("toggle-display");
        $(".dropdown-sandwich").toggleClass("rotate-sandwich");

    });

    
    // Shifts dropdown menu on scroll below orange band
    $(window).on('scroll', () => {
        if($(window).scrollTop() > 30){
            $(".nav-dropdown").css('top','0px');
        } else {
            $(".nav-dropdown").css('top','30px');
        }
    });

    
    // Expand PROJECT and CHAPTERS on click in dropdown
    $(".side-sub-dropdown-project").on("click", () => {
        $(".side-sub-dropdown-project").toggleClass("nav-sub-dropdown-toggle");
    });
    $(".side-sub-dropdown-chapters").on("click", () => {
        $(".side-sub-dropdown-chapters").toggleClass("nav-sub-dropdown-toggle");
    });


    // Makes navbar fixed on scroll below itself
    let navPos = $("nav")[0].getBoundingClientRect().y;
    $(window).on('scroll', () => {
        if($(window).scrollTop() >= navPos+5){
            $("nav").css({
                position: "fixed",
                top: "0px"
            });
        } else {
            $("nav").css('position','relative');
        }
    });


});
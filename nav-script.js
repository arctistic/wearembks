$(document).ready(() => {

    // Dropdown display control on sandwich click
    $(".dropdown-sandwich").on("click", () => {
        $(".nav-dropdown").toggleClass("toggle-display");
        $(".dropdown-sandwich").toggleClass("rotate-sandwich");
    });

    // Collapse side dropdown on click on windows
    $(window).on("mouseup",function(event){
        let dropdown =  $(".nav-dropdown")[0];
        let lists = document.querySelectorAll(".nav-dropdown li");
        listClicked = false;
        lists.forEach(function(list){
            if(list == event.target){
                listClicked = true;
            }
        });
        let downArrows = document.querySelectorAll(".down-arrow");
        let downArrowClicked = false;
        downArrows.forEach(function(downArrow){
            if(downArrow == event.target){
                downArrowClicked = true;
                console.log(downArrowClicked);
            }
        });

        if(event.target != dropdown
            && event.target.parentNode != dropdown
            && !listClicked
            && event.target != $(".dropdown-sandwich i")[0]
            && event.target != $(".fa-chevron-down")[0]
            && !downArrowClicked
            && $(".fa-chevron-left")[0] != event.target){
                console.log(event.target);
                $(".nav-dropdown").removeClass("toggle-display");
            $(".dropdown-sandwich").removeClass("rotate-sandwich");
        }
        console.log(event.target);
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
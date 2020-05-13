$(document).ready(() => {

    // Accordian amination for Vision, Mission and core values Core Values
    $(".panel-head").on("click", function(){
        $(".panel-container").height(0);
        $(".fa-angle-double-down").removeClass("acc-arrow-rotate");
        let heightToShow = $(this).next()[0].scrollHeight;
        if($(this).next().height()){
            $(this).next().height(0);

        } else {
            $(this).next().height(heightToShow+10);
            $(this).children("i").toggleClass("acc-arrow-rotate");
        }
    });

    $('#donate-btn').on('click', function(){
        $('#acc-details').css('display', 'flex');
        $(this).remove();
    })




});
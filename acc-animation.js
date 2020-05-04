$(document).ready( () => {
    
    let firstAcc =  $(".acc-p").eq(0)[0];
    $(".acc-p").eq(0).height($(".acc-p").eq(0)[0].scrollHeight);

    $(".acc-animate .card-h2").on('click', function(){
        let heightToShow = $(this).next()[0].scrollHeight;
        // $(this).parent().children(".acc-p").height(0);
        if($(this).next().height() == 0){
            $(this).next().height(heightToShow);
        } else {
            $(this).next().height(0);
        }
    });

    $(window).on("resize", function(){
        accPs = document.querySelectorAll(".acc-p");
        accPs.forEach(function(accP){
            if($(accP).height() != 0){
                $(accP).height("auto");
            }
        });
    });
});
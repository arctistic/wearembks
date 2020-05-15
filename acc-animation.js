$(document).ready( () => {
    
    let firstAcc =  $(".acc-p").eq(0)[0];
    $(".acc-p").eq(0).height($(".acc-p").eq(0)[0].scrollHeight);
    
    $(".acc-animate .card-h2").eq(0).children('.fa-chevron-down').css({
        transform: 'rotate(180deg)'
    })

    $(".acc-animate .card-h2").on('click', function(){
        let heightToShow = $(this).next()[0].scrollHeight;
        // $(this).parent().children(".acc-p").height(0);
        if($(this).next().height() == 0){
            $(this).next().height(heightToShow);
            $(this).children('.fa-chevron-down').css({
                transform: 'rotate(180deg)',
                transition: '0.3s all ease-in-out'
            })
        } else {
            $(this).next().height(0);
            $(this).children('.fa-chevron-down').css({
                transform: 'rotate(0deg)',
                transition: '0.3s all ease-in-out'
            })
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
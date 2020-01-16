$(document).ready( () => {
    let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let curImg = 0;
    let interval = setInterval(() => {
        $("#header-image").css({
            backgroundImage: "url(header-images/"+images[curImg]+")"
        });
        curImg = (curImg + 1) % (images.length);
    }, 3000);

    $("#header-image").on({
        mouseover: function() {
            clearInterval(interval);
            $(".prev").toggleClass("show-arrows");
            $(".next").toggleClass("show-arrows");
        },
        mouseout: function() {
            interval = setInterval(() => {
                $("#header-image").css({
                    backgroundImage: "url(header-images/"+images[curImg]+")"
                });
                curImg = (curImg + 1) % (images.length);
            }, 2000);
            $(".prev").toggleClass("show-arrows");
            $(".next").toggleClass("show-arrows");
        }
    });

    $(".next").on("click",()=>{
        curImg = (curImg + 1) % (images.length);
        $("#header-image").css({
            backgroundImage: "url(header-images/"+images[curImg]+")"
        });
    });

    $(".prev").on("click",()=>{
        curImg = (curImg - 1);
        if(curImg < 0){
            curImg = images.length - 1;
        }
        $("#header-image").css({
            backgroundImage: "url(header-images/"+images[curImg]+")"
        });
    });

});
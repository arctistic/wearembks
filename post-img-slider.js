{
    let lArr = $(".img-arrow-right");
    let rArr = $(".img-arrow-left");

    let sliderWidth = lArr.parent()
    .children('.img-slider')
    .width();

    let totalWidth = lArr.parent()
    .children('.img-slider')[0].scrollWidth;

    noOfPhotos = totalWidth/sliderWidth;

    lArr.on('click', function(e){
        let imgSlider = $(this)
        .parent()
        .children('.img-slider');
        
        let width = $(this)
        .parent()
        .children('.img-slider')
        .width();
        
        imgSlider[0].scrollBy({
            left: width,
            behavior: 'smooth'
          });
    })

    rArr.on('click', function(e){
        let imgSlider = $(this)
        .parent()
        .children('.img-slider');
        
        let width = imgSlider.width();
        
        imgSlider[0].scrollBy({
            left: -1*width,
            behavior: 'smooth'
          });
    })
}
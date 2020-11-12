$('.main__direction-courusel .owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    navText: ['<img src="./assets/icon/chevron-left.png" class="main__direction-btn main__direction-prev">','<img src="./assets/icon/chevron-right.png"  class="main__direction-btn main__direction-next">'],
    dots: false,
})

$('.main__review .owl-carousel').owlCarousel({
    loop:true,
    items: 2,
    nav: true,
    navText: ['<img src="./assets/icon/chevron-left.png" class="main__direction-btn main__direction-prev">','<img src="./assets/icon/chevron-right.png"  class="main__direction-btn main__direction-next">'],
    dots: true,
    dotsContainer: ".main__review .dots",
    dotsEach: true,
    margin: 30
})


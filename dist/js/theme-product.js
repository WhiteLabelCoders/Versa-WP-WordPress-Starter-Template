var swiper = new Swiper('#gallery', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    grabCursor: true,
    speed: 500,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: '.swiper-navigation__next',
        prevEl: '.swiper-navigation__prev',
    },
}).on('setTransition', () => {
    document.querySelector( '#gallery > .swiper-wrapper' ).classList.add( 'swiper-move' );
}).on('slideNextTransitionStart', () => {
    document.querySelector( '#gallery > .swiper-wrapper' ).classList.add( 'swiper-move' );
}).on('transitionEnd', () => {
    document.querySelector( '#gallery > .swiper-wrapper' ).classList.remove( 'swiper-move' );
})


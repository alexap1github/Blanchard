let gallerySlider = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 1
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        grid: {
            rows: 1
        },
        spaceBetween: 10
        },
        320: {
        slidesPerView: 1,
        grid: {
            rows: 1
        },
        spaceBetween: 20
        },
        690: {
        slidesPerView: 2,
        grid: {
            rows: 1
        },
        spaceBetween: 38
        },
        800: {
        slidesPerView: 2,
        grid: {
            rows: 1
        },
        spaceBetween: 35
        },

        1200: {
        slidesPerView: 3,
        grid: {
            rows: 1
        },
        spaceBetween: 50
        }
    },
});

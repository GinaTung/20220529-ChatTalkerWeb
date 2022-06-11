var swiper = new Swiper(".mySwiper", {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,

    /* 斷點設定 */
    breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
            slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        576: {
            slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
            slidesPerView: 1
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
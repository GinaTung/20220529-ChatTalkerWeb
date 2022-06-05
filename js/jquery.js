$(function() {
        $('.qa-text').hide();
        // $(".qa-xy").on("click", function (e) {
        //         $('.qa-text').slideToggle(1000);
        // })
    })
    $('.qa-title').on("click", function (e) {
        e.preventDefault();
                    //點選item-title後第一個會變色
        $('.qa-title').first().toggleClass('active'); // 注意：active 不用加上 
        $('.qa-text').first().slideToggle();
    })

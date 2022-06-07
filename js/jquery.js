$(function() {
        $('.qa-text').hide();
        $('.b1').toggleClass('btn-bg')
    })
    $('.qa-title').on("click", function (e) {
        $(this).siblings('.qa-text').slideToggle(1000);
        $(this).find('h4').toggleClass('active');
        $(this).find('.y').toggle();
    })

    $('.b1').on("click", function (e) {
        $(this).toggleClass('btn-bg')
        $('.co-pb').text('10000');
        $('.co-h2').text('600');
        $('.co2-h2').text('1600');
        $(this).siblings().removeClass('btn-bg');
    })
    
    $('.b2').on("click", function (e) {
        $(this).toggleClass('btn-bg')
        $('.co-pb').text('15000');
        $('.co-h2').text('900');
        $('.co2-h2').text('1900');
        $(this).siblings().removeClass('btn-bg');
    })
    $('.b3').on("click", function (e) {
        $(this).toggleClass('btn-bg')
        $('.co-pb').text('20000');
        $('.co-h2').text('1200');
        $('.co2-h2').text('2100');
        $(this).siblings().removeClass('btn-bg');
    })
    $('.b4').on("click", function (e) {
        $(this).toggleClass('btn-bg')
        $('.co-pb').text('25000');
        $('.co-h2').text('1500');
        $('.co2-h2').text('2400');
        $(this).siblings().removeClass('btn-bg');
    })
    $('.b5').on("click", function (e) {
        $(this).toggleClass('btn-bg')
        $('.co-pb').text('>25000');
        $('.co-h2').text('1800');
        $('.co2-h2').text('2700');
        $(this).siblings().removeClass('btn-bg');
    })


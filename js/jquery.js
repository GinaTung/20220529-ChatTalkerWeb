$(function() {
        $('.qa-text').hide();
        $('#basic1').toggleClass('btn-bg')
    })
    $('.qa-title').on("click", function (e) {
        $(this).siblings('.qa-text').slideToggle(1000);
        $(this).find('h4').toggleClass('active');
        $(this).find('.y').toggle();
    })

    $('.b2').on("click", function (e) {
        // $(this).find('a').toggle();
        $('#basic2').toggleClass('btn-bg')
        $('#basic1').toggleClass('btn-bg')
        $('.co-pb').text('15000');
        $('.co-h2').text('9000');

    })
    $('.b3').on("click", function (e) {
        $('#basic3').toggleClass('btn-bg')
        $('#basic2').toggleClass('btn-bg')
        $('.co-pb').text('20000')
    })


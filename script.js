
$(document).ready(function () {
    const windowWidth = $(window).innerWidth();
    const windowHeight = $(window).innerHeight();

    let top = $('.one-page').eq(0).offset().top;
    console.log(top);
    
    $('html').animate({
        scrollTop: top
    }, 100)

    $('html').animate({
        scrollTop: 0
    }, 0)

    $('.circle').eq(0).addClass('activePoint');
  

    $('.circle').each(function (index, value) {

        $(value).mouseover(function () {
            // let position = $(value).position();
            // let top = position.top;
            // let left = position.left;


            // $('.name').css({
            //     display: 'inline',
            //     position: 'fixed',
            //     top: top + 50,
            //     left: windowWidth - 250,
            //     'z-index': 1000
            // })

            // $('.name').text($('h2').eq(index + 1).text());

            // $(value).mouseout(function () {
            //     $('.name').css({
            //         display: 'none'
            //     })
            // });

        });

        $(value).click(function () {
            $('.circle').removeClass('activePoint');
            $(this).addClass('activePoint');
            let top = $('.one-page').eq(index).offset().top;
            $('html').animate({
                scrollTop: top
            }, 500)
        });

        document.getElementById("circle-collection").style.top = (windowHeight / 2) - 150 + 'px';
    });
})
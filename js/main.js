$(document).ready(() => {
    let advantagesUpperText = document.getElementsByClassName('advantages-block-upper-text');
    for (let item of advantagesUpperText) {
        new CircleType(item).radius(90);

    }
    ;

    let advantagesDownText = document.getElementsByClassName('advantages-block-down-text');
    for (let item of advantagesDownText) {
        new CircleType(item).dir(-1).radius(90);
        console.log(item)
    }
    ;

    $('.range-slider').slick({
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '0px',
        arrows: true,
        dots: true,
        draggable: true,
        prevArrow: '<div id="prevArrow"><img src="images/left_arrow.png" alt=""></div>',
        nextArrow: '<div id="nextArrow"><img src="images/right_arrow.png" alt=""></div>'
    })

    let slickDots = $('.slick-dots li button');

    for (let item of slickDots) {
        item.innerText = '';
    }

    $('#range-menu div').click((event) => {
        $('.products-container').hide();
        let id = $(event.target).data('id');
        $('#' + id).show();

        $('#range-menu div').removeClass('active');
        $(event.target).addClass('active');

        $('.range-slider').slick('refresh');

        let slickDots = $('.slick-dots li button');

        for (let item of slickDots) {
            item.innerText = '';
        }
    })

    if ($(window)[0].innerWidth < 591) {
        let featureBlockTitles = $('.features-block-title');

        for (let i = 0; i < 4; i++) {
            $($('.features-block')[i]).append("<div class='features-block-title'>" + featureBlockTitles[i].innerText + "</div>");
        }

        $('.features-block-content .features-block-title').remove();
    }

    if ($(window)[0].innerWidth < 531){
        $('#burger-button').click(() => {

            if ($('#slide-menu').css("top") === '170px') {
                $('#slide-menu').css("top", "-350px");
                $('#main-container').css("padding-top","0");
            } else {
                $('#slide-menu').css("top", "170px");
                $('#slide-menu').css("right", "calc(50% - 105px)");
                $('#main-container').css("padding-top","240px");
            }
        })
    }

    if ($(window)[0].innerWidth < 1031){
        $($('#menu-container a')[4]).attr("href","#contacts");
    }

    $('#gathering-video').height($('#gathering-video').width() / 1.5);

        new WOW(
            {
                animateClass: 'animate__animated',
                mobile: true
            }).init();



    let animatedElements = $('.animate__animated');

    for (let item of animatedElements) {
        $(item).addClass('animate__delay-1s');
        console.log(item);
    }
})


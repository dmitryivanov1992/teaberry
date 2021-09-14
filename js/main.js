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

    let oolongTea = $('#range-oolong-tea .cart-content-title');
    let blackTea = $('#range-black-tea .cart-content-title');
    let whiteTea = $('#range-white-tea .cart-content-title');
    let greenTea = $('#range-green-tea .cart-content-title');
    let exclusiveMixes = $('#range-exclusive-mixes .cart-content-title');


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

    // Responsive
    if ($(window)[0].innerWidth < 591) {
        let featureBlockTitles = $('.features-block-title');

        for (let i = 0; i < 4; i++) {
            $($('.features-block')[i]).append("<div class='features-block-title'>" + featureBlockTitles[i].innerText + "</div>");
        }

        $('.features-block-content .features-block-title').remove();
    }

    if ($(window)[0].innerWidth < 531) {
        $('#burger-button').click(() => {

            if ($('#slide-menu').css("top") === '170px') {
                $('#slide-menu').css("top", "-350px");
                $('#main-container').css("padding-top", "0");
            } else {
                $('#slide-menu').css("top", "170px");
                $('#slide-menu').css("right", "calc(50% - 105px)");
                $('#main-container').css("padding-top", "240px");
            }
        })
    }

    if ($(window)[0].innerWidth < 1031) {
        $($('#menu-container a')[4]).attr("href", "#contacts");
    }

    //gathering video

    $('#gathering-video').height($('#gathering-video').width() / 1.5);

    //animation

    new WOW(
        {
            animateClass: 'animate__animated',
            mobile: true
        }).init();


    let animatedElements = $('.animate__animated');

    for (let item of animatedElements) {
        $(item).addClass('animate__delay-1s');
    }


    //popup menu filling


    for (let item of oolongTea) {
        $($('#oolong-list .order-list-items')).append("<div class='order-list-item'>" + item.innerText + "</div>")
    }

    for (let item of blackTea) {
        $($('#blackTea-list .order-list-items')).append("<div class='order-list-item'>" + item.innerText + "</div>")
    }

    for (let item of greenTea) {
        $($('#greenTea-list .order-list-items')).append("<div class='order-list-item'>" + item.innerText + "</div>")
    }
    for (let item of whiteTea) {
        $($('#whiteTea-list .order-list-items')).append("<div class='order-list-item'>" + item.innerHTML + "</div>")
    }
    for (let item of exclusiveMixes) {
        $($('#exclusiveMixes-list .order-list-items')).append("<div class='order-list-item'>" + item.innerText + "</div>")
    }


    $('#order-product-input').hover(() => {
            $('#order-product-list').css('display', 'block');
        },
        () => {
            $('#order-product-list').css('display', 'none');
        })

    $('.order-list-group').hover((event) => {
            let targetId = '#' + $(event.target).attr('id')
            let siblings = $(event.target).siblings();
            for (let item of siblings) {
                $(item).children().css('display', 'none');
            }
            $(targetId + " " + '.order-list-items').css('display', 'flex');
        },
        (event) => {
            let targetId = '#' + $(event.target).attr('id')
            $(targetId + " " + '.order-list-items').css('display', 'none');
        })

    $('.order-list-items').click((event) => {
        $('#order-product-input input').val(event.target.innerText);
        $('#order-product-list').css('display', 'none');
        $('.order-list-items').css('display', 'none');
    })

    //popup menu validation

    $('#order-button .green-btn').click(() => {
        let validateError = false;
        let inputs = $('.order-input input');
        $('.order-form-error').remove();
        inputs.removeClass('animate__animated animate__headShake');
        inputs.css('border', '1px solid rgb(143, 188, 98)');
        for (let item of inputs) {
            if ($(item).val().trim() === '') {
                $(item).css('border', '1px solid red');
                $(item).addClass('animate__animated animate__headShake');
                $(item).parent().append("<div class='order-form-error'>Поле необходимо заполнить</div>");
                validateError = true;
            }
        }

        let weightField = $('#order-weight-input input')

        if (isNaN(weightField.val())) {
            weightField.css('border', '1px solid red');
            weightField.addClass('animate__animated animate__headShake');
            $('#order-weight-input .order-form-error').remove();
            weightField.parent().append("<div class='order-form-error'>Поле может содержать только цифры</div>");
            validateError = true;
        }

        let phoneField = $('#order-phone-input input')

        if (isNaN(phoneField.val())) {
            phoneField.css('border', '1px solid red');
            phoneField.addClass('animate__animated animate__headShake');
            $('#order-phone-input .order-form-error').remove();
            phoneField.parent().append("<div class='order-form-error'>Поле может содержать только цифры</div>");
            validateError = true;
        }

        if (phoneField.val().length !== 11) {
            phoneField.css('border', '1px solid red');
            phoneField.addClass('animate__animated animate__headShake');
            $('#order-phone-input .order-form-error').remove();
            phoneField.parent().append("<div class='order-form-error'>Номер телефона должен содержать 11 цифр</div>");
            validateError = true;
        }

        let product = $('#order-product-input input');
        let weight = $('#order-weight-input input');
        let name = $('#order-name-input input');
        let phone = $('#order-phone-input input');

        if (!validateError) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&product=' + product.val() + '&phone=' + phone.val() + '&weight=' + weight.val(),
                success: () => {
                    $('#order-success').show();
                    $('#order-container').hide();
                },
                error: () => {
                    $('#order-popup').hide();
                    alert('Ошибка заказа. Свяжитесь, пожалуйста, по номеру телефона')
                }
            });
        }
    })

    $('.order-input input').keypress(() => {
        $('.order-input input').css('border', '1px solid rgb(143, 188, 98)');
        $('.order-form-error').remove();
    })


    //закрытие формы

    $('#popup-closer , #order-popup').click((e) => {
        if ((e.target.id === 'order-popup') || (e.currentTarget.id === 'popup-closer')) {
            $('#order-popup').hide();
        }
    })


    //нажатия кнопок

    $('#main-content .green-btn').click(() => {
        window.location.hash = 'range';
    })

    $('.cart-content .green-btn').click(() => {
        $('#order-popup').css('display', 'flex');
    })


    //отправка промокода

    $('#promo-block #promo-content .green-btn').click(() => {
        let emailInput = $('#promo-content-input');
        let validateError = false;


        $('#promo-input .order-form-error').remove();
        if (emailInput.val().trim() === '') {
            emailInput.parent().append("<div class='order-form-error'>Поле необходимо заполнить</div>");
            validateError = true;
        } else if (!(emailInput.val().includes('@') && emailInput.val().includes('.'))) {
            validateError = true;
            emailInput.parent().append("<div class='order-form-error'>Необходимо ввести e-mail</div>");
        }

        if (!validateError) {
            let email = emailInput.val();
            $.ajax({
                type: 'post',
                url: 'mail_promo.php',
                data: 'email=' + email,
                success: () => {
                    $('#promo-sent').show();
                    $('#promo-content').hide();
                },
                error: () => {
                    alert('Ошибка отправки. Свяжитесь, пожалуйста, по номеру телефона')
                }
            });
        }
        



    })


})



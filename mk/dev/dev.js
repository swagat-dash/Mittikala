function sendForm(button) {
    if (!$(button).hasClass('sended')) {
        var form = $(button).parents('form');
        var error = false;
        var email = $(form).find('input[name=email]').val();
        var name = $(form).find('input[name=name]').val();
        var phone = $(form).find('input[name=phone]').val();
        var message = $(form).find('textarea[name=message]').val();
        if (!name || name.length < 2) {
            error = true;
            $(form).find('input[name=name]').parents('.input-container').addClass('error');
            setTimeout(function () {
                $(form).find('input[name=name]').parents('.input-container').removeClass('error');
            }, 2000);
            return false;
        }
        if (!phone || phone.length < 2) {
            error = true;
            $(form).find('input[name=phone]').parents('.input-container').addClass('error');
            setTimeout(function () {
                $(form).find('input[name=phone]').parents('.input-container').removeClass('error');
            }, 2000);
            return false;
        }
        var test_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if (!email || email.length < 2) {
            error = true;
            $(form).find('input[name=email]').parents('.input-container').addClass('error');
            setTimeout(function () {
                $(form).find('input[name=email]').parents('.input-container').removeClass('error');
            }, 2000);
        }
        // if (!email || !test_email.test(email)) {
        //     error = true;
        //     $(form).find('input[name=email]').parents('.input-container').addClass('error');
        //     setTimeout(function () {
        //         $(form).find('input[name=email]').parents('.input-container').removeClass('error');
        //     }, 2000);
        //     return false;
        // }
        if (!error) {
            $(form).find('button').addClass('sended');
            $.ajax({
                url: '/helper/mail',
                type: 'post',
                data: {
                    'form': $(button).parents('.popup-wrap').find('h2.title-1').text(),
                    'email': email,
                    'name': name,
                    'phone': phone,
                    'message': message,
                    '_csrf': yii.getCsrfToken(),
                },
                dataType: 'json',
                success: function (data) {
                    if (data.success) {
                        $(form).get(0).reset();
                        successfullySubmit();
                        $(form).find('button').removeClass('sended');
                        gtag('event', 'confirm', { event_category: 'submit_form' });
                    }
                }
            });
        }
    }
}


function hide_preload() {
    $(".load-interface-page").hide();
    $(".main-page").removeClass("load-data");
    $(".main-page").fadeTo(0, 0);
};
if ($(".load-interface-page.load-data").length && sessionStorage.getItem('hide_preloader') == 'true') {
    hide_preload();
};
$(document).ready(function () {
    if ($(".load-interface-page.load-data").length && sessionStorage.getItem('hide_preloader') == 'true') {
        hide_preload();
    };
});
$(window).on('load', function () {
    setTimeout(function () {
        if ($(".load-interface-page").length) {
            sessionStorage.setItem('hide_preloader', true);
        }
    }, 501);
    if ($(".load-interface-page.load-data").length && sessionStorage.getItem('hide_preloader') == 'true') {
        hide_preload();
        setTimeout(function () {
            $(".load-interface-page").hide();
            $(".main-page").removeClass("load-data");
            $(".main-page").fadeTo(500, 1);
        }, 501)
    };
});



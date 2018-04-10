jQuery(document).ready(function($){

        $('.countdown').dsCountDown({
            endDate: new Date("June 24, 2018 23:59:00")
        });


    $(".pageup").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });


});

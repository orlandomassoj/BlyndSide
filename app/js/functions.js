$(document).ready(function() {


        //}

          //onLeave: function(index, nextIndex, direction) {
          //How it works animations

        //}
      //});

//afterRender: function() {},

    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);
});

$(window).scroll(function() {
    if ($(this).width() < 2000) {
        if ($(this).height() <= 960) {
            if ($(this).scrollTop() < 500) {
            $('#dominion').hide();
            $('#row-content').hide();
            $('#start-btn').hide();

            }
            if($(this).scrollTop() > 600) {

            //web animations
            $('#dominion').show();
            $('#row-content').show();
            $('#start-btn').show();

            $('#dominion').addClass('animated fadeInLeft');
            $('#row-content').addClass('animated fadeInUp');
            $('#start-btn').addClass('animated fadeInUp');


            }
            //how it works animations
            if($(this).scrollTop() < 1800) {

            $('#headline-how').hide();
            $('#how-mac').hide();
            $('#blurb').hide();
            $('#blurb2').hide();
            $('#blurb3').hide();

            }
            if($(this).scrollTop() > 1800) {

            $('#headline-how').show();
            $('#how-mac').show();
            $('#blurb').show();
            $('#blurb2').show();
            $('#blurb3').show();

            $('#headline-how').addClass('animated fadeInUp');
            $('#how-mac').addClass('animated fadeInUp');
            $('#blurb').addClass('animated fadeInUp');
            $('#blurb2').addClass('animated fadeInUp');
            $('#blurb3').addClass('animated fadeInUp');

            }
            //pricing animations

            if($(this).scrollTop() < 2300) {

            $('#headline-pricing').hide();
            $('#text-pricing').hide();
            $('.border-bronze').hide();
            $('.border-silver').hide();
            $('.border-gold').hide();
            $('.border-platinum').hide();

            }
            if($(this).scrollTop() > 2400) {

            $('#headline-pricing').show();
            $('#text-pricing').show();
            $('.border-bronze').show();
            $('.border-silver').show();
            $('.border-gold').show();
            $('.border-platinum').show();

            $('#headline-pricing').addClass('animated fadeInUp');
            $('#text-pricing').addClass('animated fadeInUp');
            $('.border-bronze').addClass('animated bounceIn');
            $('.border-silver').addClass('animated bounceIn');
            $('.border-gold').addClass('animated bounceIn');
            $('.border-platinum').addClass('animated bounceIn');
            }

            //pro services animations
            if ($(this).scrollTop() < 3400) {
            $('.headline-services').hide();
            $('#services-container').hide();


            }
            if($(this).scrollTop() > 3750) {

            //web animations
            $('.headline-services').show();
            $('#services-container').show();


            $('.headline-services').addClass('animated fadeInUp');
            $('#services-container').addClass('animated zoomIn');



            }
            //contact animations
            if($(this).scrollTop() < 4700) {

            $('#headline-contact').hide();
            $('#contact1').hide();
            $('#contact2').hide();
            $('#contact3').hide();
            $('#contact4').hide();

            }
            if($(this).scrollTop() > 4800) {

            $('#headline-contact').show();
            $('#contact1').show();
            $('#contact2').show();
            $('#contact3').show();
            $('#contact4').show();

            $('#headline-contact').addClass('animated fadeInUp');
            $('#contact1').addClass('animated bounceIn');
            $('#contact2').addClass('animated bounceIn');
            $('#contact3').addClass('animated bounceIn');
            $('#contact4').addClass('animated bounceIn');

            }
        }
    }
});

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: ['#2e2e2f', 'white', '#2e2e2f', 'white', '#2e2e2f', 'white', '#7d45a8'],
        anchors: ['Home', 'Design', 'Customers', 'How', 'Pricing', 'Pros', 'Contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'Design', 'Customers', 'How It Works', 'Pricing', 'Pros Services', 'Contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 25,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events

        //afterLoad: function(anchorLink, index){

        onLeave: function(index, nextIndex, direction) {
        //Design Animation
        if(index == 1, nextIndex == 2, direction == 'down'){
            $("#dominion").addClass('animated fadeInLeft');
        }else{
            $("#dominion").removeClass('animated fadeInLeft');
        }
        if(index == 1, nextIndex == 2, direction == 'down'){
            $("#row-web").addClass('animated fadeInUp');
        }else{
            $("#row-web").removeClass('animated fadeInUp');
        }
        if(index == 1, nextIndex == 2, direction == 'down'){
            $("#start-btn").addClass('animated fadeInUp');
        }else{
            $("#start-btn").removeClass('animated fadeInUp');
        }
        //How it works animations
        if(index == 3, nextIndex == 4, direction == 'down'){
            $("#headline-how").addClass('animated fadeInUp');
        }else{
            $("#headline-how").removeClass('animated fadeInUp');
        }
        if(index == 3, nextIndex == 4, direction == 'down'){
            $("#how-mac").addClass('animated fadeInUp');
        }else{
            $("#how-mac").removeClass('animated fadeInUp');
        }
        if(index == 3, nextIndex == 4, direction == 'down'){
            $("#blurb").addClass('animated fadeInUp');
        }else{
            $("#blurb").removeClass('animated fadeInUp');
        }
        if(index == 3, nextIndex == 4, direction == 'down'){
            $("#blurb2").addClass('animated fadeInUp');
        }else{
            $("#blurb2").removeClass('animated fadeInUp');
        }
        if(index == 3, nextIndex == 4, direction == 'down'){
            $("#blurb3").addClass('animated fadeInUp');
        }else{
            $("#blurb3").removeClass('animated fadeInUp');
        }
        //Pricing animations
        if(index == 4, nextIndex == 5, direction == 'down'){
            $("#headline-pricing").addClass('animated fadeInUp');
        }else{
            $("#headline-pricing").removeClass('animated fadeInUp');
        }
        if(index == 4, nextIndex == 5, direction == 'down'){
            $("#text-pricing").addClass('animated fadeInUp');
        }else{
            $("#text-pricing").removeClass('animated fadeInUp');
        }
        if(index == 4, nextIndex == 5, direction == 'down'){
            $(".border-bronze").addClass('animated fadeInUp');
        }else{
            $(".border-bronze").removeClass('animated fadeInUp');
        }
        if(index == 4, nextIndex == 5, direction == 'down'){
            $(".border-silver").addClass('animated fadeInUp');
        }else{
            $(".border-silver").removeClass('animated fadeInUp');
        }
        if(index == 4, nextIndex == 5, direction == 'down'){
            $(".border-gold").addClass('animated fadeInUp');
        }else{
            $(".border-gold").removeClass('animated fadeInUp');
        }
        if(index == 4, nextIndex == 5, direction == 'down'){
            $(".border-platinum").addClass('animated fadeInUp');
        }else{
            $(".border-platinum").removeClass('animated fadeInUp');
        }
        //customers animations
        if(index == 2, nextIndex == 3, direction == 'down'){
            $("#headline-customers").addClass('animated fadeInUp');
        }else{
            $("#headline-customers").removeClass('animated fadeInUp');
        }
        if(index == 2, nextIndex == 3, direction == 'down'){
            $("#customers-container").addClass('animated fadeInUp');
        }else{
            $("#customers-container").removeClass('animated fadeInUp');
        }
      }

        //afterRender: function() {},
    });
    setTimeout(function() {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);



});

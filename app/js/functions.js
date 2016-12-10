$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#2e2e2f', 'white', '#2e2e2f', 'white', '#2e2e2f', 'white', '#7d45a8'],
        anchors: [],
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
        //onLeave: function(index, nextIndex, direction){},
        //afterLoad: function(anchorLink, index){},
        //afterRender: function(){},
    });


});

jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Smooth scrolling, requires jump.js
    // --------------------------------------------------------------------

    var elements = document.querySelectorAll('ul.navbar-nav li a');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.addEventListener('click', function(e) {
            // Don't execute the animation if the user is using a browser not
            // supporting the API (Opera Mini and IE9)
            if (window.requestAnimationFrame) {

                // Do the nice scrolling only if we're in the current page
                if (this.pathname == document.location.pathname) {
                    e.preventDefault();

                    Jump(this.hash, {
                        duration: 1500,
                    });
                }
            }
        }.bind(element));
    }

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

}); // JQuery end

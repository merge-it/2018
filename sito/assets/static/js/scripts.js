jQuery(function ($) {

    'use strict';

    var starIcon = L.icon({
        iconUrl:      'static/images/star_icon.png',
        iconSize:     [30, 30],
        shadowSize:   [0, 0],
        iconAnchor:   [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor:  [-15, -15]
    });

    var mapParams = {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 18,
    };

    if ($('#homepage-map').length) {
        var map = L.map('homepage-map').setView([45.0649, 7.6767], 15);
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', mapParams).addTo(map);
        L.marker([45.0649, 7.6952], {icon: starIcon}).addTo(map);
        L.marker([45.0654, 7.6585], {icon: starIcon}).addTo(map);
    }

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            var nav = $('nav.navbar');

            if (nav.closest('.home').length != 0) {
                if ($(this).scrollTop() >= 40) {
                    nav.addClass('sticky-nav');
                }
                else {
                    nav.removeClass('sticky-nav');
                }
            }
            else {
                if ($(this).scrollTop() > 0) {
                    nav.addClass('sticky-nav');
                }
                else {
                    nav.removeClass('sticky-nav');
                }
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

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var button = $(this).find('button[type=submit]');
        button.prop('disabled', true);

        $.ajax({
            url: 'static/register.php',
            method: 'POST',
            data: {
                email: $(this).find('input[name=email]').val(),
                mode: 'js'
            },
            success: function(data) {
                if (data == 'ok') {
                    button.text('Iscritto!');
                }
                else {
                    button.text('Errore!');
                    button.prop('disabled', false);
                }
            },
            error: function() {
                button.text('Errore!');
                button.prop('disabled', false);
            }
        });
    });

}); // JQuery end

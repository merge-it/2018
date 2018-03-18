jQuery(function ($) {

    'use strict';

    var starIcon = L.icon({
        iconUrl:      '/static/images/star_icon.png',
        iconSize:     [30, 30],
        shadowSize:   [0, 0],
        iconAnchor:   [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor:  [-15, -15]
    });

    var trainIcon = L.icon({
        iconUrl:      '/static/images/train_icon.png',
        iconSize:     [30, 30],
        shadowSize:   [0, 0],
        iconAnchor:   [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor:  [-15, -15]
    });

    var parkingIcon = L.icon({
        iconUrl:      '/static/images/parking_icon.png',
        iconSize:     [30, 30],
        shadowSize:   [0, 0],
        iconAnchor:   [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor:  [-15, -15]
    });

    var partyIcon = L.icon({
        iconUrl:      '/static/images/party_icon.png',
        iconSize:     [30, 30],
        shadowSize:   [0, 0],
        iconAnchor:   [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor:  [-15, -15]
    });

    var eatIcon = L.icon({
        iconUrl:      '/static/images/eat_icon.png',
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
        var map = L.map('homepage-map').setView([45.0654, 7.6584], 14);
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', mapParams).addTo(map);
        L.marker([45.0654, 7.6585], {icon: starIcon}).bindPopup("<b>Main Event</b><br>Sabato 24 Marzo").addTo(map);
        L.marker([45.0617, 7.6783], {icon: trainIcon}).bindPopup("Stazione Porta Nuova").addTo(map);
        L.marker([45.0717, 7.6660], {icon: trainIcon}).bindPopup("Stazione Porta Susa").addTo(map);
        L.marker([45.0673, 7.6621], {icon: parkingIcon}).bindPopup("Pacheggia Qui!").addTo(map);
        L.marker([45.0540, 7.6782], {icon: partyIcon}).bindPopup("<b>Bootstrap Event</b><br>Venerdi 23 Marzo").addTo(map);
    }

    if ($('#bootstrap-map').length) {
        var map = L.map('bootstrap-map').setView([45.0540, 7.6782], 15);
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', mapParams).addTo(map);
        L.marker([45.0540, 7.6782], {icon: partyIcon}).addTo(map);
    }

    if ($('#eating-map').length) {
        var map = L.map('eating-map').setView([45.0654, 7.6584], 15);
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', mapParams).addTo(map);
        L.marker([45.0654, 7.6585], {icon: starIcon}).bindPopup("MERGE-it").addTo(map);
        L.marker([45.0659, 7.6648], {icon: eatIcon}).bindPopup("Bar The Coffee Hub<br>Corso Duca degli Abruzzi 10").addTo(map);
        L.marker([45.0641, 7.6637], {icon: eatIcon}).bindPopup("Imperatore Istanbul Pizza e Kebap<br>Corso Duca degli Abruzzi 18").addTo(map);
        L.marker([45.0649, 7.6534], {icon: eatIcon}).bindPopup("Pizzeria La Sarda<br>Via Gambasca 4F").addTo(map);
        L.marker([45.0652, 7.6550], {icon: eatIcon}).bindPopup("Paninoteca 30 e Lode<br>Via San Paolo 1").addTo(map);
        L.marker([45.0651, 7.6528], {icon: eatIcon}).bindPopup("Deniz Kebab<br>Via Monginevro 13/C").addTo(map);
        L.marker([45.0674, 7.6501], {icon: eatIcon}).bindPopup("Pizzeria Acqua e Farina<br>Via Cesana 51").addTo(map);
        L.marker([45.0649, 7.6507], {icon: eatIcon}).bindPopup("Taverna Greca<br>Via Monginevro 29").addTo(map);
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
                name: $(this).find('input[name=name]').val(),
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


let navIsOpen = false;

function hideMobileNav() {
    navIsOpen = false;
    $('#nav-mobile').slideUp();
    $('.hamburger-container').show();
}

function showMobileNav() {
    navIsOpen = true;
    $('#nav-mobile').slideDown();
    $('.hamburger-container').hide();
}

function dropMobile() {
    $('html, body').animate({ scrollTop: $("#mobile-first").offset().top }, 'slow');
}

function dropMobileMobile() {
    $('html, body').animate({ scrollTop: $("#mobile-first").offset().top }, 'slow');
    hideMobileNav();
}

function dropPortfolio() {
    $('html, body').animate({ scrollTop: $("#portfolio").offset().top }, 'slow');
}

function dropPortfolioMobile() {
    $('html, body').animate({ scrollTop: $("#portfolio").offset().top }, 'slow');
    hideMobileNav();
}

function dropAbout() {
    $('html, body').animate({ scrollTop: $("#about-me").offset().top }, 'slow');
}

function dropAboutMobile() {
    $('html, body').animate({ scrollTop: $("#about-me").offset().top }, 'slow');
    hideMobileNav();
}

function dropContact() {
    $('html, body').animate({ scrollTop: $("#contact").offset().top }, 'slow');
}

function dropContactMobile() {
    $('html, body').animate({ scrollTop: $("#contact").offset().top }, 'slow');
    hideMobileNav();
}

// MAKES HELLO TEXT APPEAR

function helloFadeIn() {
    ypos = window.pageYOffset;
    let distanceTop = 300
    if (ypos > distanceTop) {
        $('.intro-right').animate({ opacity: '1.0' }, 1000);
    }
}

// MAKES MOBILE FIRST TEXT APPEAR 

function textFadeIn() {
    ypos = window.pageYOffset;
    let distanceTop = 800
    if (ypos > distanceTop) {
        $('.project1-left').animate({ opacity: '1.0' }, 1000);
    }
}

// CODE FOR NAV CHANGES

function colorChange() {
    let ypos = window.pageYOffset;
    let distanceTop = $('#mobile-first').offset().top - 90;
    let distanceBottom = $('#portfolio').offset().top - 90;
    let mobileDistanceBottom = $('#portfolio').offset().top - 50;
    if (ypos > distanceTop && ypos < distanceBottom) {
        $('.nav-link').css('color', 'black')
    }
    else if (ypos < distanceTop) {
        $('.nav-link').css('color', 'white')
    }
    else if (ypos > distanceBottom) {
        $('.nav-link').css('color', 'white')
    }

    // FOR HAMBURGER
    if (ypos > distanceTop && ypos < mobileDistanceBottom) {
        $('.hamburger-stripe').css('backgroundColor', 'black')
    }
    else if (ypos < distanceTop) {
        $('.hamburger-stripe').css('backgroundColor', 'white')
    }
    else if (ypos > mobileDistanceBottom) {
        $('.hamburger-stripe').css('backgroundColor', 'white')
    }
}


// FORM CODE

function handleForm() {
    $('#js-contact-form').on('submit', event => {
        event.preventDefault();
        return fetch('https://seabolt-design-back.herokuapp.com/contact', {
            method: 'POST',
            body: JSON.stringify({
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    $('#name').val('')
                    $('#email').val('')
                    $('#message').val('')
                    return Promise.reject(res.statusText)
                }
                $('#name').val('')
                $('#email').val('')
                $('#message').val('')
                alert("Thank you! I will reply to your message as soon as I am able.")
                return res.json()
            })
    });
}

// FOCUS SECTION

function topPortfolio() {
    $('html, body').animate({ scrollTop: $("#portfolio").offset().top - 35 }, 'slow');
}

function focusAlbumreview() {
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-albumreview-focus').css('display', 'block');
}

function focusBuzzkill() {
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-buzzkill-focus').css('display', 'block');
}

function focusRoommatefinder() {
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-roommatefinder-focus').css('display', 'block');
}

function focusStormchaser() {
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-stormchaser-focus').css('display', 'block');
}

function focusPotusfacts() {
    console.log("IT FIRED")
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-potusfacts-focus').css('display', 'block');
}

function focusGhostbusters() {
    $('#portfolio-all').hide(100);
    dropPortfolio();
    $('#portfolio-ghostbusters-focus').css('display', 'block');
}

function toggleMain() {
    dropPortfolio();
    $('#portfolio-buzzkill-focus').css('display', 'none');
    $('#portfolio-albumreview-focus').css('display', 'none');
    $('#portfolio-roommatefinder-focus').css('display', 'none');
    $('#portfolio-stormchaser-focus').css('display', 'none');
    $('#portfolio-potusfacts-focus').css('display', 'none');
    $('#portfolio-ghostbusters-focus').css('display', 'none');
    $('#portfolio-all').show(100);
}

function main() {
    $('#banner').animate({ opacity: 1 }, 2000);
    window.addEventListener('scroll', colorChange);
    window.addEventListener('scroll', textFadeIn);
    window.addEventListener('scroll', helloFadeIn);
    $('#portfolio-buzzkill').on('click', focusBuzzkill);
    $('#portfolio-albumreview').on('click', focusAlbumreview);
    $('#portfolio-roommatefinder').on('click', focusRoommatefinder);
    $('#portfolio-potusfacts').on('click', focusPotusfacts);
    $('#portfolio-stormchaser').on('click', focusStormchaser);
    $('#portfolio-ghostbusters').on('click', focusGhostbusters);
    $('.button-focus').on('click', toggleMain); 
    $('#hamburger').on('click', showMobileNav); 

    handleForm();
    $('body').on('click', function (event) {
        if (navIsOpen && event.target.id !== 'hamburger' && event.target.id !== 'ham1' && event.target.id !== 'ham2' && event.target.id !== 'ham3') {
            hideMobileNav();
        }
    });
}

$(main)


// NEW PARALLAX

var parallaxElements = $('#banner'),
    parallaxQuantity = parallaxElements.length;

$(window).on('scroll', function () {

    window.requestAnimationFrame(function () {

        for (var i = 0; i < parallaxQuantity; i++) {
            var currentElement = parallaxElements.eq(i);
            var scrolled = $(window).scrollTop();

            currentElement.css({
                'transform': 'translate3d(0,' + scrolled * 0.3 + 'px, 0)'
            });
        }
    });
});
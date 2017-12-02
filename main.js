
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
        $('html, body').animate({ scrollTop: $("#mobile-first").offset().top}, 'slow');
    }

    function dropMobileMobile() {
        $('html, body').animate({ scrollTop: $("#mobile-first").offset().top}, 'slow');
        hideMobileNav();  
    }

    function dropPortfolio() {
        $('html, body').animate({ scrollTop: $("#portfolio").offset().top}, 'slow');
    }

    function dropPortfolioMobile() {
        $('html, body').animate({ scrollTop: $("#portfolio").offset().top}, 'slow');
        hideMobileNav(); 
    }

    function dropAbout() { 
        $('html, body').animate({ scrollTop: $("#about-me").offset().top}, 'slow');
    }

    function dropAboutMobile() { 
        $('html, body').animate({ scrollTop: $("#about-me").offset().top}, 'slow');
        hideMobileNav(); 
    }

    function dropContact() {
        $('html, body').animate({ scrollTop: $("#contact").offset().top}, 'slow');
    }

    function dropContactMobile() {
        $('html, body').animate({ scrollTop: $("#contact").offset().top}, 'slow');
        hideMobileNav(); 
    }

    function parallax(){
        div = document.getElementById('banner');  
        ypos = window.pageYOffset; 
        div.style.top = ypos * 0.5 + 'px'; 
    }

    // MAKES MOBILE FIRST TEXT APPEAR 

    function textFadeIn(){
        ypos = window.pageYOffset;
        console.log(ypos)
        let distanceTop = 800
        if(ypos > distanceTop){
            $('.project1-left').animate({opacity: '1.0'}, 1000); 
        } 
    }


    // CODE FOR NAV CHANGES

    function colorChange() {
        let ypos = window.pageYOffset;
        let distanceTop = $('#mobile-first').offset().top - 90; 
        let distanceBottom = distanceTop + 712;
        let mobileDistanceBottom = distanceTop + 1240; 
        if(ypos > distanceTop && ypos < distanceBottom) {
            $('.nav-link').css('color', 'black')
        }
        else if (ypos < distanceTop) {
            $('.nav-link').css('color', 'white')
        }
        else if (ypos > distanceBottom) {
            $('.nav-link').css('color', 'white')
        }

        // FOR HAMBURGER
        if(ypos > distanceTop && ypos < mobileDistanceBottom) {
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
                    email: $('#email').val() , 
                    message: $('#message').val()
                }), 
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then( res => {
                if(!res.ok) {
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


    function main() {
        $('#banner').animate({opacity: 1}, 2000);
        window.addEventListener('scroll', colorChange); 
        window.addEventListener('scroll', parallax); 
        window.addEventListener('scroll', textFadeIn); 
       
        handleForm(); 
        $('body').on('click', function(event) {
            if(navIsOpen && event.target.id !== 'hamburger') {
                hideMobileNav(); 
            }
        }); 
    }

    $(main)
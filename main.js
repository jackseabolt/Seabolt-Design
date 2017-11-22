
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

    
    // FORM CODE

    function handleForm() {
        $('#js-contact-form').on('submit', event => {
            console.log("IT FIRED")
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
                    return Promise.reject(res.statusText)
                }
                alert("Thank you! I will reply to your message as soon as I am able.")
                return res.json()
            })
            .catch(err => {
                alert("There was a problem")
            })
        }); 
    }


    function main() {
        $('#banner').animate({opacity: 1}, 2000);
        window.addEventListener('scroll', parallax); 
        handleForm(); 
        $('body').on('click', function(event) {
            if(navIsOpen && event.target.id !== 'hamburger') {
                hideMobileNav(); 
            }
        }); 
    }

    $(main)
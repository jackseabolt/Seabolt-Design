
    function main() {
        $('#banner').animate({opacity: 1}, 2000); 
    }

    $(main)

    function dropMobile() {
        console.log("IT RAN"); 
        $('html, body').animate({ scrollTop: $("#mobile-first").offset().top}, 'slow');
    }

    function dropPortfolio() {
        console.log("IT RAN"); 
        $('html, body').animate({ scrollTop: $("#portfolio").offset().top}, 'slow');
    }

    function dropAbout() {
        console.log("IT RAN"); 
        $('html, body').animate({ scrollTop: $("#about-me").offset().top}, 'slow');
    }

    function dropContact() {
        console.log("IT RAN"); 
        $('html, body').animate({ scrollTop: $("#contact").offset().top}, 'slow');
    }

    function parallax(){
        div = document.getElementById('banner');  
        ypos = window.pageYOffset; 
        div.style.top = ypos * 0.5 + 'px'; 
    }
    
    window.addEventListener('scroll', parallax); 



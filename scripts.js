//WOW Initialization
new WOW().init();

// Change style of navbar on scroll
window.onscroll = function() {
    var fileName = location.pathname.split("/").slice(-1);
    if (fileName == "index.html") {
        home()
    } else {
        other()
    }
};

function home() {

    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " primary-color-scheme" + " secondary-color-scheme";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top primary-color-scheme", "");
    }
}

function other() {

    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " primary-color-scheme" + " transparent75";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top primary-color-scheme ", "");
    }
}


// Toggles mini-menu
function toggleMiniMenu() {
    var x = document.getElementById("navmenu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
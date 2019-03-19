// Function hiding back to top button and making visible 310px from the top of the document, when user scrolls

window.onscroll = function() {
    onScroll();
};

function onScroll() {
    if (document.body.scrollTop > 310 || document.documentElement.scrollTop > 310) {
        document.getElementById("toTop").style.display = "block";
    }
    else {
        document.getElementById("toTop").style.display = "none";
    }
}

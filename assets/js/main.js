//show menu
$(document).ready(function () {
    var check = false
    $('.nav__hamburger').click(function () {
        console.log("lick")
        $('.nav__menu').toggleClass("open");
        $('.nav__hamburger').toggleClass("active")
    })
})

//------------------------------------------------------------------------------------------
$('.counter').countUp({
    'time': 2000,
    'delay': 10
});
//--------------------------------------------------------------
//btn to top
btnTop = document.getElementById("btnTotop");
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}
/**mobile view navigation responsive start */
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});
/**cookie banner */
function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
}

function closeBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
    if (localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "none";
    }
}
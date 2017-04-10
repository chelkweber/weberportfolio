/* NAVIGATION MENU */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* JAVASCRIPT BUTTON TO CHANGE TEXT INPUT */


function yell() {
    var message = document.getElementById("message").style.textTransform="Uppercase";
}
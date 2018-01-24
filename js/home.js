// When the DOM is ready, run this function
$(document).ready(function () {
    //Set the carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
    });
});

function drone() {
    var add = [`<div class="js"><h3>Safety Net Drone</h3> <br> <p>Quick rescue drone featuring Safety Net patented triangulation technology</p> <br> <a href='productdetails.html'>learn more.</a></div>`];
    document.getElementById("iDrone").innerHTML = add.join(" ");
}
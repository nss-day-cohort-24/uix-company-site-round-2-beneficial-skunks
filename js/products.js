console.log("JS TEST");

var products = [
    {number: "1", image: "images/backpack.png", name: "Safety Net App"},
    {number: "2", image: "images/iBeacon.png", name: "iBeacon Technology"},
    {number: "3", image: "images/watchApp.png", name: "Safety Net Watch"}
];

var productsInput = "";
for (i = 0; i < products.length; i++) {
    productsInput += `<a href="productdetails.html">`;
    productsInput += `<div class="product-${products[i].number}">`;
    productsInput += `<img src="${products[i].image}"/>`;
    productsInput += `<div class="inner-text">`;
    productsInput += `<h2>${products[i].name}</h2>`;
    productsInput += `</div>`;
    productsInput += `</div>`;
    productsInput += `</a>`;
}
document.getElementById("top-cards").innerHTML = productsInput;

var products2 = [
    {number: "4", image: "images/camp.png", name: "Extended Trip App"},
    {number: "5", image: "images/drone.png", name: "Savior Drone"},
    {number: "6", image: "images/phone.png", name: "Moblie Application"}
];

var products2Input = "";
for (i = 0; i < products.length; i++) {
    products2Input += `<a href="productdetails.html">`;
    products2Input += `<div class="product-${products2[i].number}">`;
    products2Input += `<img src="${products2[i].image}"/>`;
    products2Input += `<div class="inner-text">`;
    products2Input += `<h2>${products2[i].name}</h2>`;
    products2Input += `</div>`;
    products2Input += `</div>`;
    products2Input += `</a>`;
}
document.getElementById("bottom-cards").innerHTML = products2Input;


console.log("JS TEST");

var products = [
    {number: "1", image: "images/backpack.png", name: "Product-1"},
    {number: "2", image: "images/iBeacon.png", name: "Product-2"},
    {number: "3", image: "images/watchApp.png", name: "Product-3"}
];

var productsInput = "";
for (i = 0; i < products.length; i++) {
    productsInput += `<div class="product-${products[i].number}">`;
    productsInput += `<img src="${products[i].image}"/>`;
    productsInput += `<div class="inner-text">`;
    productsInput += `<h2>${products[i].name}</h2>`;
    productsInput += `</div>`;
    productsInput += `</div>`;
}
document.getElementById("top-cards").innerHTML = productsInput;

var products2 = [
    {number: "4", image: "images/camp.png", name: "Product-4"},
    {number: "5", image: "images/drone.png", name: "Product-5"},
    {number: "6", image: "images/phone.png", name: "Product-6"}
];

var products2Input = "";
for (i = 0; i < products.length; i++) {
    products2Input += `<div class="product-${products2[i].number}">`;
    products2Input += `<img src="${products2[i].image}"/>`;
    products2Input += `<div class="inner-text">`;
    products2Input += `<h2>${products2[i].name}</h2>`;
    products2Input += `</div>`;
    products2Input += `</div>`;
}
document.getElementById("bottom-cards").innerHTML = products2Input;


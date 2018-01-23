console.log("JS TEST");

var products = [
    {number: "1", image: "images/Tech-Fill.png", name: "Product-1"},
    {number: "2", image: "images/Tech-Fill.png", name: "Product-2"},
    {number: "3", image: "images/Tech-Fill.png", name: "Product-3"},
    {number: "4", image: "images/Tech-Fill.png", name: "Product-4"},
    {number: "5", image: "images/Tech-Fill.png", name: "Product-5"},
    {number: "6", image: "images/Tech-Fill.png", name: "Product-6"}
];

var productsInput = "";
for (i = 0; i < products.length; i++) {
    productsInput += `<div class="product-${products[i].number}">`;
    productsInput += `<img src="${products[i].image}"/>`;
    productsInput += `<h2 class="product-name">${products[i].name}</h2>`;
    productsInput += `<div class="learn-more">Learn More</div>`;
    productsInput += `</div>`;
}
document.getElementById("cards").innerHTML = productsInput;
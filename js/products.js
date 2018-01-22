console.log("JS TEST");

var products = [
    {image: "images/Tech-Fill.png", name: "Main Product"},
    {image: "images/Tech-Fill.png", name: "Product-1"},
    {image: "images/Tech-Fill.png", name: "Product-2"},
    {image: "images/Tech-Fill.png", name: "Product-3"},
    {image: "images/Tech-Fill.png", name: "Product-4"},
    {image: "images/Tech-Fill.png", name: "Product-5"},
    {image: "images/Tech-Fill.png", name: "Product-6"}
];

var productsInput = "";
for (i = 0; i < products.length; i++) {
    productsInput += `<div>`;
    productsInput += `<img src="${products[i].image}"/>`;
    productsInput += `<h2>${products[i].name}</h2>`;
    productsInput += `<a href="#">Learn More</a>`;
    productsInput += `</div>`;
}
document.getElementById("cards").innerHTML = productsInput;
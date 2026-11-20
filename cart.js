document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll("article");
    console.log("Total products: " + products.length);
    products.forEach(function (product) {
        product.addEventListener("click", function () {
            product.style.border = "2px solid #007bff";
            setTimeout(function () {
                product.style.border = "none";
            }, 500);
        });
    });
});
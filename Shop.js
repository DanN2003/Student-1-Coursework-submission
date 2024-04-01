// Function to add a product to the basket
function addToBasket(productName, productPrice, quantity) {
    // Create a new basket item element
    var item = document.createElement("li");
    item.textContent = productName + " - $" + (productPrice * quantity).toFixed(2);
    
    // Append the item to the order list
    document.getElementById("order-list").appendChild(item);
    
    // Update the total price
    updateTotal(productPrice * quantity);
}

// Function to update the total price
function updateTotal(price) {
    // Get the current total element
    var totalElement = document.getElementById("total-price");
    
    // Get the current total price
    var currentTotal = parseFloat(totalElement.textContent.slice(1));
    
    // Calculate the new total price
    var newTotal = currentTotal + price;
    
    // Update the total price element
    totalElement.textContent = "$" + newTotal.toFixed(2);
}

// Function to clear the basket
function clearBasket() {
    // Clear all items from the basket
    document.getElementById("order-list").innerHTML = "";
    
    // Reset the total price to $0.00
    document.getElementById("total-price").textContent = "$0.00";
}

// Add event listeners when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all "Add to Basket" buttons
    var addToBasketButtons = document.querySelectorAll(".add-to-cart button");

    // Loop through each button and add event listener
    addToBasketButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            // Get the parent product element
            var product = event.target.closest(".product");
            
            // Get the product name, price, and quantity
            var productName = product.querySelector("h2").textContent;
            var productPrice = parseFloat(product.querySelector(".price").textContent.slice(1));
            var quantity = parseInt(product.querySelector("input[type='number']").value);
            
            // Call the addToBasket function with the product name, price, and quantity
            addToBasket(productName, productPrice, quantity);
        });
    });

    // Add event listener for clearing the basket
    document.getElementById("clear-basket").addEventListener("click", function() {
        clearBasket();
    });
});

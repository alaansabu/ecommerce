// Select the cart container
const cartContainer = document.querySelector(".cart-container");

if (!cartContainer) {
  console.error("Cart container not found in the DOM.");
} else {
  // Fetch the product data from localStorage
  let selectedProduct;
  try {
    selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  } catch (error) {
    console.error("Error parsing selectedProduct from localStorage:", error);
    selectedProduct = null;
  }

  // Check if a product is stored
  if (!selectedProduct) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    // Create a new div for the product
    const productDiv = document.createElement("div");
    productDiv.classList.add("cart-item");

    // Set the innerHTML of the product div with product details
    productDiv.innerHTML = `
      <img src="${selectedProduct.Image}" alt="${selectedProduct.name}" class="product-img" ">
      <div class="product-details">
        <h3>${selectedProduct.name}</h3>
        <p>Price: $${selectedProduct.price}</p>
    
      </div>
    `;

    // Append the product div to the cart container
    cartContainer.appendChild(productDiv);
  }
}

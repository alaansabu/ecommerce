const selectedProduct = JSON.parse(localStorage.getItem(product))

const cartContainer = document.querySelector(".cart-container");


if (cartContainer) {
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
      cart.forEach((product) => {
        // Create a new div for each product
        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");
  
        // Set the innerHTML of the product div with product details
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <div class="product-details">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Product ID: ${product.id}</p>
          </div>
        `;
  
        // Append the product div to the cart container
        cartContainer.appendChild(productDiv);
      });
    }
  }
// Select the main container
const mainContainer = document.querySelector(".main-container");

// Product Data Array
const product = [
  {
    Image: "imajes/products/f1.jpg",
    id: 1,
    name: "Cartoon Astronaut Shirt",
    price: "$45",
    rating: "★ ★ ★ ★ ★",
    salePrice: "$75",
    brand: "Adidas",
  },
  {
    Image: "imajes/products/f2.jpg",
    id: 2,
    name: "Nike Sports Shirt",
    price: "$40",
    rating: "★ ★ ★ ★ ☆",
    salePrice: "$70",
    brand: "Nike",
  },
  {
    Image: "imajes/products/f3.jpg",
    id: 3,
    name: "Puma Classic Shirt",
    price: "$50",
    rating: "★ ★ ★ ★ ☆",
    salePrice: "$80",
    brand: "Puma",
  },
  {
    Image: "imajes/products/f4.jpg",
    id: 4,
    name: "Adidas T-shirt",
    price: "$30",
    rating: "★ ★ ★ ☆ ☆",
    salePrice: "$60",
    brand: "Adidas",
  },
  {
    Image: "imajes/products/f5.jpg",
    id: 4,
    name: "Adidas T-shirt",
    price: "$30",
    rating: "★ ★ ★ ☆ ☆",
    salePrice: "$60",
    brand: "Adidas",
  },
  {
    Image: "imajes/products/f6.jpg",
    id: 4,
    name: "Adidas T-shirt",
    price: "$30",
    rating: "★ ★ ★ ☆ ☆",
    salePrice: "$60",
    brand: "Adidas",
  },
  {
    Image: "imajes/products/f7.jpg",
    id: 4,
    name: "Adidas T-shirt",
    price: "$30",
    rating: "★ ★ ★ ☆ ☆",
    salePrice: "$60",
    brand: "Adidas",
  },
  {
    Image: "imajes/products/f8.jpg",
    id: 4,
    name: "Adidas T-shirt",
    price: "$30",
    rating: "★ ★ ★ ☆ ☆",
    salePrice: "$60",
    brand: "Adidas",
  },
];

// Dynamically render products
if (mainContainer) {
  product.forEach((prod) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("container");

    productDiv.innerHTML = `
      <div class="prd">
        <img src="${prod.Image}" alt="${prod.name}" class="product">
        <p>${prod.brand}</p>
        <p>${prod.price}</p>
        <h4>${prod.name}</h4>
        <p>${prod.rating}</p>
        <div class="sub-container">
          <h3>${prod.salePrice}</h3>
          <button id="cart" class="cart-button" data-id="${prod.id}">
            <i class="fa-solid fa-cart-shopping"></i> Add
          </button>
        </div>
      </div>
    `;

    // Append the product to the main container
    mainContainer.appendChild(productDiv);

    // Add a click event listener to each product
    productDiv.addEventListener("click", () => {
      // Save product details to localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(prod));

      // Redirect to product.html
      window.location.href = "product.html";
    });
  });
}

// Select the main image element (currently uses class "img")
const main = document.querySelector(".img");

// Select all sub-images (currently use class "sub-img")
const subImages = document.querySelectorAll(".sub-img");

// Add click event listeners to all sub-images
subImages.forEach(subImg => {
  subImg.addEventListener("click", () => {
    // Update the main image's src to the clicked sub-image's src
    main.src = selectedProduct.Image;
  });
});

/* const product =[{
  Image:"imajes/products/f1.jpg",
  id:1
},

{
  Image:"imajes/products/f2.jpg",
  id: 2
  
},
{
  Image:"imajes/products/f3.jpg",
  id:3
}
,
{
  Image:"imajes/products/f4.jpg",
  id:4
  
},
{
  Image:"imajes/products/f5.jpg",
  id:5
  
}
,{
  Image:"imajes/products/f6.jpg",
  id:6
  
}

,{ Image:"imajes/products/f7.jpg"
  ,id:7
}

,{ Image:"imajes/products/f8.jpg",
  id:8
}


]


const mainContainer = document.querySelector(".main-container");
product.forEach((product) => {

const productDiv = document.createElement("div");
productDiv.classList.add("container");


//image
const addImg = document.createElement("img");
productDiv.innerHTML =`

<img src="${product.Image}" class="img" alt="" />`

productDiv.appendChild(addImg);
mainContainer.appendChild(productDiv);


});
 */



  

// Fetch product details from localStorage
const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

if (selectedProduct) {
  // Populate product details on the page
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = `
    <img src="${selectedProduct.Image}" alt="${selectedProduct.name}" class="img">
 
   
  `;
} else {
  // Fallback if no product is found in localStorage
  document.querySelector(".main-container").innerHTML = `
    <p>Product details not found. Please go back to the main page and select a product.</p>
  `;
}

const notify = document.querySelector(".notifi")
const addToCart =  document.querySelector(".submit");

addToCart.addEventListener("click",()=>{


notify.innerText = "Added to cart ✔";
localStorage.setItem("selectedProduct", JSON.stringify(prod));

window.location.href="cart.html";

})
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHabIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHabIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCart);



function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains("inactive");

    if (!isShoppingCartClosed) {
        shoppingCart.classList.add("inactive");
    }
  
        mobileMenu.classList.toggle("inactive");


}


function toggleCart() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("incative");
    }
  
    shoppingCart.classList.toggle("inactive");
}

const productList = []
productList.push({
name: "bake",
price: 120,
image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart =document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

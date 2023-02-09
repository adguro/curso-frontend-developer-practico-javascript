const menuEmail = document.querySelector(".navbar-email");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {


    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
 
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
 
    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
 
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
 
    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");

}


const productList = [];


productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name: "Bike 2",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name: "Bike 3",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

productList.push({
    name: "Bike 4",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

productList.push({
    name: "Bike 5",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

productList.push({
    name: "Bike A",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

function renderProducts(arr){

    for (product of arr) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.addEventListener("click", openProductDetailAside)
    
        const productInf = document.createElement("div");
        productInf.classList.add("product-info");
    
        const productInfDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfDiv.appendChild(productPrice);
        productInfDiv.appendChild(productName);
        
    
        const productInfFigure = document.createElement("figure");
        const productInfImgCart = document.createElement("img");
        productInfImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productInfFigure.appendChild(productInfImgCart);
    
        productInf.appendChild(productInfDiv);
        productInf.appendChild(productInfFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInf);
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

function openProductDetailAside() {

    shoppingCartContainer.classList.add("inactive");

    productDetailContainer.classList.remove("inactive");

}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");

}


renderProducts(productList);

/*

      <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>

*/
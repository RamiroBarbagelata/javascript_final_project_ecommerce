//Use Local Json
let products;

//Local Storage - products in cart
const cartStorage = localStorage.getItem('cart');
const cart = JSON.parse(cartStorage) ?? []; //operador nullish coal escing

document.getElementById('number_of_items').innerHTML = cart.length;

const getProducts = () => {
    fetch('./products.json')
    .then((response) => response.json())
    .then((data) => {
        products = data;
        createCards(products)
    })
}


//HTML visualisation - Collector - Card Generator
function createCards(arrayProducts){
    let collector = ``;
    arrayProducts.forEach((product) => {
        const {images, description, size, price, id} = product;
        collector += ` <div class="product-box">
        <img src="${images}" alt="">
        <strong>${description}</strong>
        <span class="quantity">Tamaño ${size}</span>
        <span class="price">$${price}</span>
        <a onclick="addingToCart(${id})" href="#" class="cart-btn">
            <i class="fas fa-shopping-bag"></i>Agregar al Carrito
        </a>
        <a id="likeBtn" href="#" class="like-btn">
            <i class="fa-solid fa-heart" id="heart_on"></i>
        </a> 
        </div>`;
    })
document.getElementById('cards_container').innerHTML = collector;

// Add to favourites
const likeProduct = document.getElementById('likeBtn');
likeProduct.addEventListener("click", () => {
    addTofavourites(products)
    });
}



//Calling function that fetches the data
getProducts();

//Show all products at the start
// createCards(products);


document.getElementsByClassName("cart-btn").onclick = () => {
    addingToCart(products)
}

//Function to ADD the products into the cart and add Total to PAY
function addingToCart(idProduct) {

    const indexFound = products.find((product) => product.id == idProduct);
    cart.push(indexFound);
    const cartInJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartInJSON);
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0)
    document.getElementById('number_of_items').innerHTML = cart.length;
    document.getElementById('total_cart').innerHTML = `Total $${totalCart}`; 
    Swal.fire({
        title: '¡Felicitaciones!',
        text: 'Agregaste un producto al carrito',
        icon: 'success',
        confirmButtonText: 'Genial',
        confirmButtonColor: '#A67246',
    });
};


//Filter by all products
const allProducts = document.querySelector('.allProducts');
allProducts.addEventListener("click", showAllProducts)

function showAllProducts() {
    createCards(products);
} 


//Filter by category
function filterProducts(category){
    const categoryFilter = products.filter((product) => product.category == category);
    createCards(categoryFilter);
}


//Open and Close modal cart
const modal = document.querySelector('.modal');
const openCart = document.querySelector('.cart');
const closeCart = document.querySelector('.closeCart');

openCart.addEventListener("click", openModal);
closeCart.addEventListener("click", closeModal);

function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}


//Empty shopping cart
const cleanCart = document.getElementById('trash')
cleanCart.addEventListener("click", deleteProductCart)

function deleteProductCart(idProduct2) {
    const indexFound2 = cart.find(products => products.id === idProduct2);
    cart.splice(indexFound2);
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
    document.getElementById('total_cart').innerHTML = `Total $${totalCart}`;
    document.getElementById('number_of_items').innerHTML = cart.length;
    Swal.fire({
        title: '¿Estás seguro de vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, estoy seguro',
        confirmButtonColor: '#A67246',
        cancelButtonText: 'No, quiero cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Vacio',
                icon: 'success',
                text: 'El carrito esta vacio',
                confirmButtonColor: '#A67246',
            })
        }
    });
}


// Add to favourites
function addTofavourites(products) {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites = favourites || []; //operador lógico OR
    favourites.push(products);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    document.getElementById('numberFavourites').innerHTML = favourites.length;
    
}

document.getElementById("favouritesButton").addEventListener("click", seeFavourites);

function seeFavourites(){
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites = favourites || []; //operador lógico OR
    createCards(favourites); 
}

document.getElementById("home").addEventListener("click", () => {
    createCards(products)
});

createCards(products);


















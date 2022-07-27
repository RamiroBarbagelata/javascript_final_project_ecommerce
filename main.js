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
function createCards(arrayProducts) {
    const container = document.getElementById('cards_container');
    container.innerHTML = '';
    arrayProducts.forEach((product) => {
        const { images, description, size, price, id } = product;
        const card = document.createElement('div');
        card.classList.add('product-box');
        card.innerHTML += `
        <img src="${images}" alt="">
        <strong>${description}</strong>
        <span class="quantity">Tamaño ${size}</span>
        <span class="price">$${price}</span>
        <a onclick="addingToCart(${id})" href="#" class="cart-btn">
            <i class="fas fa-shopping-bag"></i>Agregar al Carrito
        </a>`;
        const buttonFavorite = document.createElement('a');
        buttonFavorite.classList.add('like-btn');
        buttonFavorite.innerHTML = `<i class="fa-solid fa-heart" id="heart_on"></i>`
        buttonFavorite.addEventListener('click', () => {
            addTofavourites(product);
        })
        card.appendChild(buttonFavorite);
        container.appendChild(card);
    })
}
//Calling function that fetches the data
getProducts();

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
function filterProducts(category) {
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
    Swal.fire({
        title: '¡Agregaste a Favoritos!',
        icon: 'success',
        confirmButtonText: 'Genial',
        confirmButtonColor: '#A67246',
    });

}
document.getElementById("favouritesButton").addEventListener("click", seeFavourites);

function seeFavourites() {
    let favourites = JSON.parse(localStorage.getItem("favourites"));
    favourites = favourites || []; //operador lógico OR
    createCards(favourites);
    let title = document.getElementById("productosHeading");
    title.style.marginLeft = "450px";
    title.style.fontSize = "30px";
    document.getElementById("productosHeading").innerHTML = 'Favoritos';
    document.getElementById("all").style.display = 'none';
    document.getElementById("eat").style.display = 'none';
    document.getElementById("drink").style.display = 'none';
}

document.getElementById("home").addEventListener("click", () => {
    createCards(products)
});

//send contact form
function sendForm() {
    let name = document.getElementById("name").value;
    Swal.fire({
        title: `Gracias ${name}`,
        icon: 'success',
        text: '¡Mensaje Enviado!',
        confirmButtonText: 'Genial',
        confirmButtonColor: '#A67246',
    });

}


















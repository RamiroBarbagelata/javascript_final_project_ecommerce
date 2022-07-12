//Empty Array - Shopping Cart

//Products Array 
const products = [
    {
        id:01, 
        description: 'Latte de Caramelo',
        size: 'Grande',  
        price: 400,
        category: 'coffee', 
        instock: true,
        images: './images/06_coffee.jpeg'
    },
    {
        id:02, 
        description: 'Cheesecake Frutos Rojos',
        size: 'Mediano',  
        price: 500,
        category: 'bakery', 
        instock: true,
        images: './images/07_cheeseckaFR.jpeg'
    },
    {
        id:03, 
        description: 'Cookies de Chocolate',
        size: 'Mediano',  
        price: 300,
        category: 'bakery', 
        instock: false,
        images: './images/05_Cookies de Chocolate.jpeg'
    },
    {
        id:04, 
        description: 'Té de Limón',
        size: 'Mediano',  
        price: 350,
        category: 'coffee', 
        instock: false,
        images: './images/08_teaDeLimon.jpeg'
    },
    {
        id:05, 
        description: 'Brownies',
        size: 'Mediano',  
        price: 450,
        category: 'bakery', 
        instock: true,
        images: './images/09_brownie.jpeg'
    },
    {
        id:06, 
        description: 'Tiramisu',
        size: 'Mediano',  
        price: 450,
        category: 'bakery', 
        instock: true,
        images: './images/10_tiramisu.jpeg'
    },
    {
        id:07, 
        description: 'Chocolate Caliente',
        size: 'Grande',  
        price: 400,
        category: 'coffee', 
        instock: true,
        images: './images/11_hot_chocolate.jpeg'
    },
    {
        id:08, 
        description: 'Red Velvet',
        size: 'Mediano',  
        price: 600,
        category: 'bakery', 
        instock: false,
        images: './images/12_red velvet.jpeg'
    },
    {
        id:09, 
        description: 'Muffins de Chocolate',
        size: 'Mediano',  
        price: 300,
        category: 'bakery', 
        instock: true,
        images: './images/13_Muffins_chocolate.jpeg'
    },
];

//Local Storage - products in cart
const cartStorage = localStorage.getItem('cart');
const cart = JSON.parse(cartStorage) ?? []; //operador nullish coal escing

document.getElementById('number_of_items').innerHTML = cart.length;

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
        iconColor: '#2B4034',
        confirmButtonText: 'Genial',
        confirmButtonColor: '#A67246',
      });
};


//Show all products at the start
createCards(products);

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


//HTML visualisation - Collector - Card Generator
function createCards(arrayProducts){
    let collector = ``;
    arrayProducts.forEach((products) => {
        collector += ` <div class="product-box">
        <img src="${products.images}" alt="">
        <strong>${products.description}</strong>
        <span class="quantity">Tamaño ${products.size}</span>
        <span class="price">$${products.price}</span>
        <a onclick="addingToCart(${products.id})" href="#" class="cart-btn">
            <i class="fas fa-shopping-bag"></i>Agregar al Carrito
        </a>
        <a id="like_btn" href="#" class="like-btn">
            <i class="fa-solid fa-heart" id="heart_on"></i>
        </a> 
        </div>`
});
document.getElementById('cards_container').innerHTML = collector;
// Add to favourites
const likeProduct = document.getElementById('like_btn');
        likeProduct.addEventListener("click", () => {
            addTofavourites(products)
        });
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
    Swal.fire({
        title: '¿Estás seguro de vaciar el carrito',
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



























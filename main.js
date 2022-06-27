//Array vacio - Carrito
const cart = [];

//Array productos 
const products = [
    {
        id:01, 
        description: 'Latte de Caramelo',
        size: 'Grande',  
        price: 400,
        category: 'coffee', 
        instock: true
    },
    {
        id:02, 
        description: 'Cheesecake Frutos Rojos',
        size: 'Mediano',  
        price: 500,
        category: 'bakery', 
        instock: true
    },
    {
        id:03, 
        description: 'Cookies de Chocolate',
        size: 'Mediano',  
        price: 300,
        category: 'bakery', 
        instock: false
    },
    {
        id:04, 
        description: 'Té de Limón',
        size: 'Mediano',  
        price: 350,
        category: 'coffee', 
        instock: false
    },
    {
        id:05, 
        description: 'Brownies',
        size: 'Mediano',  
        price: 450,
        category: 'bakery', 
        instock: true
    },
    {
        id:06, 
        description: 'Tiramisu',
        size: 'Mediano',  
        price: 450,
        category: 'bakery', 
        instock: true
    },
    {
        id:07, 
        description: 'Chocolate Caliente',
        size: 'Grande',  
        price: 400,
        category: 'coffee', 
        instock: true
    },
    {
        id:08, 
        description: 'Red Velvet',
        size: 'Mediano',  
        price: 600,
        category: 'bakery', 
        instock: false
    },
    {
        id:09, 
        description: 'Muffins de Chocolate',
        size: 'Mediano',  
        price: 300,
        category: 'bakery', 
        instock: true
    },
];


//Visualizacion de HTML - acumulador - Generador de Cards
let collector = ``;
products.forEach((products) => {
        collector += ` <div class="product-box">
        <img src="./images/06_coffee.jpeg" alt="">
        <strong>${products.description}</strong>
        <span class="quantity">Tamaño ${products.size}</span>
        <span class="price">$${products.price}</span>

        <a onclick="addingToCart(${products.id})" href="#" class="cart-btn">
            <i class="fas fa-shopping-bag"></i>Agregar al Carrito
        </a>
        <a id="like_btn" href="#" class="like-btn">
            <i class="fa-solid fa-heart" id="heart_on"></i>
        </a> 
        </div>`;
});

//<i class="far fa-heart" id="heart_off" ></i>

document.getElementById('cards_container').innerHTML = collector;

//Función para AGREGAR los productos del carrito y sumar TOTAL
function addingToCart(idProduct) {
    const indexFound = products.find((product) => product.id == idProduct);
    cart.push(indexFound);
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0)
    document.getElementById('number_of_items').innerHTML = cart.length;
    document.getElementById('total_cart').innerHTML = `Total $${totalCart}`;
    console.log(cart)
};


//Filtrar por productos

function filterProducts(category){
   const categoryFilter = products.filter((product) => product.category == category);
   console.log(categoryFilter);
}

//Modal

const modal = document.querySelector('.modal'),
cartIcon = document.querySelector('.cart'),
close = document.querySelector('.close');





// Cambio color botón Like

// function btnLike() {
//     const heartLike = document.getElementById('heart_off')
//         heartLike.addEventListener('click', function() {
//             heartLike.classList.toggle('heart_on')
//         });
// };

// btnLike()


// //Inicio de compra

// function starShopping(){
//     const option = prompt('Bienvenido, ¿deseas comer o tomar algo?\n1) Si\n2) No');
//     if(option == "1") {
//         return true;
//     }else {
//         alert('Te esperamos la próxima vez');
//     }
// };

// starShopping();

// //Array vacio - carrito
// const cart = [];


// //Visualizacion de HTML - acumulador - Generador de Cards
// // let collector = ``;
// // for (let i = 0; i < products.length; i++){
// //     collector += `<div>
// //         ${products[i].description} <br> ${products[i].size} <br> $${products[i].price}<br>
// //         <button onclick = "addingToCart(${products[i].id})">Agregar</button>
// //         <button onclick = "deleteProductCart(${products[i].id})">Quitar</button>
// //     </div>`;
// // };

// // document.write(collector);

// let collector = ``;
// products.forEach((byProduct) => {
//         collector += `<div>
//             ${byProduct.description} <br> ${byProduct.size} <br> $${byProduct.price}<br>
//             <button onclick = "addingToCart(${byProduct.id})">Agregar</button>
//             <button onclick = "deleteProductCart(${byProduct.id})">Quitar</button>
//         </div>`;
// });

// document.write(collector);





// //Función para agregar los productos del carrito

// function addingToCart(idProduct) {
//     const indexFound = products.findIndex(products => products.id == idProduct);
//     console.log(indexFound);
//     cart.push(products[indexFound]);
//     console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
//     console.log(cart); 
//     //mostrar el total de la compra
//     const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
//     console.log(`El total a pagar es $${totalCart}.-`);
//     const continueShopping = prompt(`Hasta el momento el TOTAL de tu compra es $${totalCart}.-\n ¿Continuás tu pedido??\n1) Si\n2) No`)
//     if (continueShopping == "1") {
//         return true
//     }else {
//         alert('Gracias, disfrutá de tus delicatessen');
//     }
    
// }

// //Función para eliminar los productos del carrito

// function deleteProductCart(idProduct2) {
//     const indexFound2 = cart.findIndex(products => products.id === idProduct2);
//     cart.splice(indexFound2,1);
//     console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
//     console.log(cart);
//     const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
//     console.log(`El total a pagar es $${totalCart}.-`);
//     const continueShopping = prompt(`Hasta el momento el TOTAL de tu compra es $${totalCart}.-\n ¿Continuás tu pedido??\n1) Si\n2) No`)
//     if (continueShopping == "1") {
//         return true
//     }else {
//         alert('Gracias, disfrutá de tus delicatessen');
//     }
    
// }

// function checkout(){
//     const endPurchase = prompt('¿Deseas finaliza su compra?\n1) Si\n2) No');
//     if(endPurchase == "1") {
//         alert('Gracias, disfrutá de tus delicatessen');
//     }else {
//         alert('Continuá con tu compra por favor');
//     }
// };














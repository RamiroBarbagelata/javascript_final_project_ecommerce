alert('Bienvenido a Cara Sur - Casa de Té');



//Array vacio - carrito
const cart = [];

//Productos que pueden comprar los usuarios
const products = [
    {
        id:01, 
        description: 'Latte de Dulce de Leche',
        size: 'Large',  
        price: 300, 
        instock: true
    },
    {
        id:02, 
        description: 'Latte de Caramelo',
        size: 'Medium', 
        price: 200, 
        instock: true
    },
    {
        id:03, 
        description: 'Cheesecake',
        size: 'Porción',  
        price: 100, 
        instock: true
    },
    {
        id:04, 
        description: 'Apple Crumble',
        size: 'Porción',  
        price: 100, 
        instock: true
    },
    {
        id:05, 
        description: 'Té Negro',
        size: 'Medium',  
        price: 300, 
        instock: true
    },
];





//Visualizacion de HTML - acumulador
let collector = ``;
for (let i = 0; i < products.length; i++){
    collector += `<div>
        ${products[i].description} <br> ${products[i].size} <br> $${products[i].price}<br>
        <button onclick = "addingToCart(${products[i].id})">Agregar</button>
        <button onclick = "deleteProductCart(${products[i].id})">Quitar</button>
    </div>`;
};

document.write(collector);



//Función para eliminar los productos del carrito

function addingToCart(idProduct) {
    const indexFound = products.findIndex(products => products.id == idProduct);
    console.log(indexFound);
    cart.push(products[indexFound]);
    console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
    console.log(cart); 
    //mostrar el total de la compra
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
    console.log(`Ustedes tiene que pagar $${totalCart}.-`);
}


function deleteProductCart(idProduct2) {
    const indexFound2 = products.findIndex(products => products.id === idProduct2);
    cart.splice(indexFound2,1);
    console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
    console.log(cart);
}















//Inicio de compra

function starShopping(){
    const option = prompt('Bienvenido, ¿deseas comer o tomar algo?\n1) Si\n2) No');
    if(option == "1") {
        return true;
    }else {
        alert('Te esperamos la próxima vez');
    }
};

starShopping();

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



//Función para agregar los productos del carrito

function addingToCart(idProduct) {
    const indexFound = products.findIndex(products => products.id == idProduct);
    console.log(indexFound);
    cart.push(products[indexFound]);
    console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
    console.log(cart); 
    //mostrar el total de la compra
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
    console.log(`El total a pagar es $${totalCart}.-`);
    const continueShopping = prompt(`Hasta el momento el TOTAL de tu compra es $${totalCart}.-\n ¿Continuás tu pedido??\n1) Si\n2) No`)
    if (continueShopping == "1") {
        return true
    }else {
        alert('Gracias, disfrutá de tus delicatessen');
    }
    
}

//Función para eliminar los productos del carrito

function deleteProductCart(idProduct2) {
    const indexFound2 = cart.findIndex(products => products.id === idProduct2);
    cart.splice(indexFound2,1);
    console.log('Hay '+ cart.length + ' delicatessen en tu carrito');
    console.log(cart);
    const totalCart = cart.reduce((collector, products) => collector + products.price, 0);
    console.log(`El total a pagar es $${totalCart}.-`);
    const continueShopping = prompt(`Hasta el momento el TOTAL de tu compra es $${totalCart}.-\n ¿Continuás tu pedido??\n1) Si\n2) No`)
    if (continueShopping == "1") {
        return true
    }else {
        alert('Gracias, disfrutá de tus delicatessen');
    }
    
}

function checkout(){
    const endPurchase = prompt('¿Deseas finaliza su compra?\n1) Si\n2) No');
    if(endPurchase == "1") {
        alert('Gracias, disfrutá de tus delicatessen');
    }else {
        alert('Continuá con tu compra por favor');
    }
};














//FUNCTIONS
const items={
    food: 1000,
    drinks: 2000
}

var cart=0;//hoisting(in js , iyt takes all the initialisation on the top of the code)
function addToCart(parameter){//parameter
    cart += parameter;
}

addToCart(items.food);//argument
addToCart(items.drinks);

console.log("cart:",cart);
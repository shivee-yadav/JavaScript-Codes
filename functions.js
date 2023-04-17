//FUNCTIONS
const items={
    food: 1000,
    drinks: 2000
}

var cart;//hoisting(in js , iyt takes all the initialisation on the top of the code)
cart=0;
function addToCart(parameter){//parameter
    cart += parameter;
}

addToCart(items.food);//argument
addToCart(items.drinks);

console.log("cart:",cart);

var cart2=0;
function addToCartTwo(item){//parameter
    return cart2+item;
}

function addCartValue(item){
    cart2=addToCartTwo(item);
}

addCartValue(items.food);
console.log("cart:",cart2);

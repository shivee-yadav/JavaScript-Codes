//ARRROW FUNCTION IS AN UPDATED VERSION OF A FUNCTION
//FUNCTION KEYWORD IS REPLACED BY VAR KEYWORD
//SEMI-COLON IS NECESSARY AT THE END OF {}
//IF THERE IS NO PARAMETER THEN THE BRACES IS LEFT BLANC
const items2={
    food: 1000,
    drinks: 2000
}
var cart2=0;
var addToCartTwo = (item) => {//parameter
    return cart2+item;
};

var addCartValue = (item) => {
    cart2=addToCartTwo(item);
};

addCartValue(items2.food);
console.log("ARROW FUNCTION:");
console.log("cart:",cart2);

//YOU CANNOT USE HOISTING IN ARROW FUNCTION WHEREAS HOISTING IS SUPPORTED BY NORMAL FUNCTION
myFunction();//function calling supported before decalring the function aka hoisting
function myFunction(){
    console.log("Hello");
}
//ourFunction(); --> Not supported by arrow function
const ourFunction = () => console.log("Our World");


//THIS KEYWORD
console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//this output bcuz your laptop is the current parent

function getThis(){
    console.log(this);
}

getThis();//ans is same as above

const arrowGetThis=() =>{
    console.log(this);
};

arrowGetThis();//ans is same as above


//with an object
const OurObject = {
    name:"this keyword",
    getThat: function(){
        console.log(this);
    }
}
OurObject.getThat();
/* {name: 'this keyword', getThat: ƒ}
getThat: ƒ ()
name: "this keyword"
[[Prototype]]: Object*/

//arrow function
const urObject = {
    name:"this keyword",
    getThat: ()=>{
        console.log(this);
    }
}
urObject.getThat();///ans is same as earlier bcuz arrow function takes the parent as the current window not the current object

var myArray = [1,2,3,4,5,6];
console.log(myArray);
myArray.push(7);
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.unshift(0);//inserts new elements at the start of an array and returns the new length of the array
console.log(myArray);
myArray.shift();//remove from the first
console.log(myArray);

//RECURSIVE FUNCTIONS
console.log("Recursion");
var num=1;
function printNum() {
    console.log(num);
    num++;

    if(num<=10){
        printNum();
    }
    else{
        return;
    }
}

printNum();

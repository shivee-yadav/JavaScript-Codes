//ES6
function hello(name="world") {//default parameters comes in rescue if nothing is provided while calling of func
    console.log("hello ",name);
}
hello();

console.log("apple\nBanana\nGrapes");//normally
console.log("......................");
//ES 6
console.log(`
Apple
Banana
Grapes
`);//template literals are used to print anything as it is


//Scoping
console.log("scoping1:");
function outer() {
    var name1="xyz";
    let name2="pqr";

    function inner(){
        var name1="xxyyzz";
        console.log(name1);
    }
    inner();
    console.log(name1);
}
outer();
//xxyyzz    
//xyz
//bcuz the name1 we changed has its scope until inner fun only

console.log("scoping2:");
function outer2() {
    var name3="xyz";
    let name4="pqr";

    function inner2(){
        let name4="ppqqrr";
        console.log(name4);
    }
    inner2();
    console.log(name4);
}
outer2();

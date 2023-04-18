function getArray(){
    return [1,2];
}

const [x,y,z]=getArray();
//[x,y,z]=[1,2,notdefined]
console.log(x);
console.log(y);
console.log(z);

//maps
console.log("maps:");
var myArray = [1,2,3,4,5];

const newArray= myArray.map((e) => (e+1));
console.log(newArray);
console.log(myArray);

//FILTERS->A condition is satisfied in this and then ele  is added
console.log("filters:");
const newArray2= myArray.filter(
    e => e<3
    );
console.log(newArray2);
console.log(myArray);


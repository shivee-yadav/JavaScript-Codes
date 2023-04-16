//OPERATORS
//AIRTHMETIC ,LOGICAL,ASSIGNMENT,COMPARISON
//ARITHMETIC -> + - / * %
//ASSIGNMENT-> A=2,  A=A+5 -> A+=5 ,ETC
//COMPARISON -> (==)-> VALUES , (===)->VALUES AND DATATYPES
//LOGICAL -> &&, ||,

var a="2";
var b=2;

if(a===b){
    console.log("They both are exactly same");
}
else if(a==b){
    console.log("They both have same value but not datatype");

}
else{
    console.log("Not same");
}

var c=1;
if(c==0&&c>0){
    console.log("c is +ve");
}
else{
    console.log("Nothing");
}


var g=0;
var h=0;
var i=0;

h=g++;//postfix->h=0
i=++g;//prefix ->i=2

console.log({g,h,i});//


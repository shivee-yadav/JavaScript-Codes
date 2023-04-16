//LOOPS
//FOR LOOP ,WHILE LOOP,DOWHILE LOOP

//FOR
console.log("For Loop");
for(var num=0;num<=10;num++){
    console.log(num);
}

//while
console.log("While Loop");
var num=0;
while(num<=10){
    if(num%2===0){
        console.log(num);
    }
    num++;
}

//dowhile
console.log("DoWhile Loop");
var num=0;
do{
    if(num%5===0){
    console.log(num);
    }
    num++;
}while(num<=50);
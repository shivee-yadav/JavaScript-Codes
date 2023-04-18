//ASYNCHRONOUS JS
//PROMISES
//ASYNC AWAIT


//fetching data
console.log("FETCHING DATA:");
fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => console.log(data));



console.log("..........");

const getData = async () => {
    const result = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    console.log(data);
};

getData();
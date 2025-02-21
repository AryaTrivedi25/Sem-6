/*
Write a function that takes an array of objects and a key, and returns a new array sorted 
based on the values of that key in ascending order.=
*/

function sortArray(arr, key) {
    return arr.sort((a, b) => a[key] - b[key]);
}

const arr = [
    { name: 'Tom', age: 20 },
    { name: 'John', age: 19 },
    { name: 'Doe', age: 27 },
    { name: 'Daksh', age: 20 },
    { name: 'Sarthak', age: 19 }
];


console.log(sortArray(arr, 'age'));
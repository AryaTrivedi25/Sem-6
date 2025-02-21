/*
4. Implement a function that takes two sorted arrays and merges them into a single sorted array
without using any built-in sorting functions.
*/

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

console.log(mergeSortedArrays([1, 3, 5, 10], [2, 4, 6]));
console.log(mergeSortedArrays([1, 3, 5, 10], [2, 4, 6, 8, 10, 12]));    
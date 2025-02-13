document.getElementById('searchButton').addEventListener('click', function() {
    const arrayInput = document.getElementById('arrayInput').value;
    const targetInput = parseInt(document.getElementById('targetInput').value);
    const result = document.getElementById('result');

    const array = arrayInput.split(',').map(Number);
    const target = targetInput;

    const index = binarySearch(array, target);

    if (index !== -1) {
        result.textContent = `Target found at index ${index+1}.`;
    } else {
        result.textContent = "Target not found in the array.";
    }
});

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
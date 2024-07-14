function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const array = [0, 1, 2, 3, 4, 5, 6];
console.log(binarySearch(array, 5)); // Output: 5 (index of the element)

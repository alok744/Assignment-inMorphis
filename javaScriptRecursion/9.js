const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const array = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(array)); // Output: [5, 7, 23, 32, 34, 62]


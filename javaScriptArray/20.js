function findDuplicates(array) {
    const duplicates = [];
    const seen = {};

    for (const item of array) {
        if (seen[item]) {
            if (!duplicates.includes(item)) {
                duplicates.push(item);
            }
        } else {
            seen[item] = true;
        }
    }

    return duplicates;
}

const items = [1, 2, 3, 4, 2, 5, 3, 6, 1];
const duplicateValues = findDuplicates(items);
console.log(duplicateValues); // Output: [2, 3, 1]

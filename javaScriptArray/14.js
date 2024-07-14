var items = ["apple", "Banana", "apple", "orange", "BANANA", "Grape"];
var uniqueItems = [];

for (var i = 0; i < items.length; i++) {
    var lowerCaseItem = items[i].toLowerCase();
    if (!uniqueItems.includes(lowerCaseItem)) {
        uniqueItems.push(lowerCaseItem);
    }
}

console.log(uniqueItems);

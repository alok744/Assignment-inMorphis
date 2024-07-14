var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th", "st", "nd", "rd"];

for (var i = 0; i < color.length; i++) {
    var ordinal = (i + 1) + (o[(i + 1) % 10] || o[0]);
    console.log(ordinal + " choice is " + color[i].trim() + ".");
}

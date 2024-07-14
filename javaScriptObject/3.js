/*For example, if obj is { name: "David Rayy", sclass: "VI", rollno: 12 }, then Object.keys(obj) returns ["name", "sclass", "rollno"].
.length:

The length property of an array returns the number of elements in that array.
For the array ["name", "sclass", "rollno"], the length is 3.*/

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function getObjectLength(obj) {
    return Object.keys(obj).length;
}

console.log("Length of the student object: " + getObjectLength(student));

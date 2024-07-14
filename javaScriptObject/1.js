var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function listProperties(obj) {
    return Object.keys(obj).join(",");
}

console.log(listProperties(student));

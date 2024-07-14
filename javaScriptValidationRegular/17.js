function isHexColor(value) {
    const hexColorRegex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;
    return hexColorRegex.test(value);
}

let color = "#F00";
console.log(`${color} is a valid hex color value? ${isHexColor(color)}`);

color = "#FF0000";
console.log(`${color} is a valid hex color value? ${isHexColor(color)}`);

color = "#00Z";
console.log(`${color} is a valid hex color value? ${isHexColor(color)}`);

color = "123456";
console.log(`${color} is a valid hex color value? ${isHexColor(color)}`);

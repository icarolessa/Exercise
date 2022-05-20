// Class colors randons
class Color {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

// Matriz colors
const colorsRandom = [
    new Color ('Navy', '#000080'),
    new Color ('DarkBlue', '#00008B'),
    new Color ('MediumBlue', '#0000CD'),
    new Color ('Blue', '#0000FF'),
    new Color ('Black', '#000000'),
    new Color ('Gray', '#808080'),
    new Color ('SlateBlue', '#6A5ACD'),
    new Color ('RoyalBlue', '#4169E1'),
    new Color ('SkyBlue', '#87CEEB'),
    new Color ('SteelBlue', '#4682B4'),
    new Color ('Aqua', '#00FFFF'),
    new Color ('DarkGreen', '#006400'),
    new Color ('Olive', '#808000')
];

// Exporting colorsRandom
exports.colorsRandom = colorsRandom;

// Function for select colors
module.exports.getRandomColors = function(){
    return colorsRandom[Math.floor(Math.random() * colorsRandom.length)];
}
// importing module
const colors = require('./index');


// Printing on screen
setInterval(function(){
    const chosenColor = colors.getRandomColors();
    console.log(`The color chosen is now ${chosenColor.name}, where code is ${chosenColor.code}`);
}, 2000)
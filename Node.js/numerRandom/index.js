// By default, node creates the module privately, so you need to use the 'exports'
// command to tell node which functions will be exported

const limite = 1000; // maximum number generated

// Exported function
module.exports.numerRandom = function(){
    // Generating random number
    return Math.floor(Math.random() * limite);
}
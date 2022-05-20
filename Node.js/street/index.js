// Veriffic numer1 with numer2
function numerVer(num1, num2){
    while(num1 < num2){
        num1++;
    }
    
    return num1;
}

function square(numer1, numer2) {
    while (numer1 != numer2) {
        numer1++;
    }
    return numer1;
}

function streetWa(a,b,c){
    var soma = a;
    while(soma < c){
        soma = a+b++;
    }
    return soma;
}

function streetWa2(a,b){
    return a+b;
}

// exporting module,
exports.streetWa2 = streetWa2;
exports.streetWa = streetWa;
exports.numerVer = numerVer;
exports.square = square;
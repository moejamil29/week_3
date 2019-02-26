
/*var prime = function() {

var num;

    for (num = 0; num < 101; num++){
        if (num % 2 === 0) {
            break;
        }

    else if (num % 3 === 0){
        break;
        }
    else if (num % 4=== 0){
        break;
        }
    else if (num % 5 === 0){
        break;
        }
    else if (num % 6 === 0){
        break;
        }
    else if (num % 7 === 0){
        break;
        }
    else if (num % 8 === 0){
        break;
        }
    else if (num % 9 === 0){
        break;
        }
    else if (num % 10 === 0){
        break;
        }
    else if (num % 11 === 0){
        break;
        }
    else if (num % 12 === 0){
        break;
        }
    else {
        return num;
        }
    }
}

console.log(prime());*/

    var primeNum = function() {

    for (var counter = 2; counter <= 72; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }
}

console.log(primeNum())
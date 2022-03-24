function isPrimeNumber(number) { //tìm số nguyên tố
    let count = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        return true;
    } else {
        return false;
    }
}

function fibonacci(number0,number1) { //fibonaci

    let total = 0;
    for (i = 1; i <= 20; i++) {
        //document.write(number0 + "<br>")
        total = number0 + number1
        number0 = number1;
        number1 = total;
    }
}
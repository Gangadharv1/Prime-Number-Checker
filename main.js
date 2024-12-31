document.getElementById('checkButton').addEventListener('click', checkPrime);
document.getElementById('generateButton').addEventListener('click', generatePrimes);

function checkPrime() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('primeResult');

    if (isNaN(number) || number < 2) {
        resultElement.innerText = "Please enter a valid number greater than 1.";
        return;
    }

    if (isPrime(number)) {
        resultElement.innerText = `${number} is a prime number.`;
    } else {
        resultElement.innerText = `${number} is not a prime number.`;
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function isArmstrongNumber(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(Number(numStr[i]), numDigits);
    }

    return sum === number;
}

const number = 153;
if (isArmstrongNumber(number)) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is not an Armstrong number");
}
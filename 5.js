//Напишите функцию, которая проверяет, является ли 
// заданное число простым. Выведите true или false 
// в консоль для числа 17.
num = process.argv[2];
parsedNum = parseFloat(num);

function isPrime(num) {
    // Если число меньше или равно 1, оно не простое
    if (num <= 1) return false;

    // Если число равно 2 или 3, оно простое
    if (num === 2 || num === 3) return true;

    // Если число делится на 2 или 3, оно не простое
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Проверяем делители от 5 до квадратного корня из числа
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    // Если ни одно из условий не выполнилось, число простое
    return true;
}

const result = isPrime(parsedNum);
if (result === true) {
    console.log('Число', parsedNum, 'является простым')
} else if (result === false) {
    console.log('Число', parsedNum, 'является сложным')
}
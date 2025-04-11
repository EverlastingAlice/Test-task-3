//Напишите функцию, которая вычисляет факториал 
// заданного числа (используйте рекурсию или цикл). 
// Выведите результат в консоль для числа 5.

n = process.argv[2];
parsedN = parseFloat(n);

function factorial(parsedN){
    var result = 1;
    while(parsedN){
        result = result * parsedN--;
    }
    return result;
}

const result = factorial(parsedN);
console.log('Факториал числа', parsedN, 'равна', result);
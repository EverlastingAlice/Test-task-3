//Используя модуль crypto, сгенерируйте случайное целое число в диапазоне 
// от 1 до 100 и выведите его в консоль.

const crypto = require('crypto');

// Генерация случайного целого числа от 1 до 100
const randomInt = crypto.randomInt(1, 100);

console.log('Случайное число:', randomInt);
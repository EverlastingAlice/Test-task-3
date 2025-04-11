//Напишите скрипт, который принимает коэффициенты 
// квадратного уравнения (a, b, c) из командной строки 
// и вычисляет его корни. Выведите корни в консоль. 
// (Обработайте случаи, когда корней нет).

a = process.argv[2];
b = process.argv[3];
c = process.argv[4];

parsedA = parseFloat(a);
parsedB = parseFloat(b);
parsedC = parseFloat(c);

if (isNaN(parsedA) || isNaN(parsedB) || isNaN(parsedC)) {
    console.log('Введите корректные числовые коэффициенты.');
    process.exit(1); // Завершаем выполнение программы
}

if (a === 0) {
    console.log('Коэффициэнт А не может быть равен 0')
}

Discrim = (parsedB * parsedB) - (4 * parsedA) * parsedC;

if (Discrim < 0) {
    console.log('Корней нет');
} else if (Discrim === 0) {
    console.log('Один корень');
    root = -parsedB / (2 * parsedA);
    console.log('Единственный корень:', root);
} else if (Discrim > 0) {
    console.log('Два корня');
    root_1 = (-parsedB + Math.sqrt(Discrim)) / (2 * parsedA);
    root_2 = (-parsedB - Math.sqrt(Discrim)) / (2 * parsedA);
    console.log('Первый корень:', root_1);
    console.log('Второй корень:', root_2);
}
//Напишите скрипт, который принимает количество секунд (из командной строки) 
// и преобразует его в часы, минуты и секунды. Выведите результат в консоль 
// в формате “HH:MM:SS”.

sec = process.argv[2];
parsedSec = parseFloat(sec);

    // Вычисляем часы
    const hours = Math.floor(parsedSec / 3600);

    // Вычисляем минуты
    const minutes = Math.floor((parsedSec % 3600) / 60);

    // Вычисляем секунды
    const seconds = parsedSec % 60;

    // Возвращаем результат в виде строки
    console.log(`${hours}:${minutes}:${seconds}`);

let titleProject = prompt('Название проекта?');
let screensValue = prompt('Какие типы экранов потребуются: шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt('Нужен ли респонсивный сайт?');
if (responsive = 'да') {
    responsive = true;
} else {
    responsive = false;
}

let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = prompt('Сколько это будет стоить?');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt('Сколько будет стоить этот второй сервис?');

let screenPrice = 5000;
let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
if (fullPrice > 50000) {
    console.log('сделаем скидку в 10%');
} else if (20000 < fullPrice <= 50000) {
    console.log('сделаем скидку 5%');
} else if (0 < fullPrice <= 20000) {
    console.log('скидка не предусмотрена');
} else if (fullPrice <= 0) {
    console.log('Что то пошло не так');
}

let percentage = 15;
let percentageResult = fullPrice - percentage/100;
let servicePercentPrice = fullPrice - percentageResult;
servicePercentPrice = Math.round(servicePercentPrice);

console.log(servicePercentPrice);

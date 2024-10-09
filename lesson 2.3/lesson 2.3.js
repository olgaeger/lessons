let screenPrice = 5000;
let percentage = 15;

let titleProject = prompt('Название проекта?');
console.log(titleProject);

let screensValue = prompt('Какие типы экранов потребуются: шаблонные, с уникальным дизайном, с анимациями');
console.log(screensValue);

let responsive = prompt('Нужен ли респонсивный сайт?');
console.log(responsive);

let service1 = prompt('Какой сервис нужен?');
console.log(service1);

let servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);

let service2 = prompt('Какой еще сервис тебе нужен?');
console.log(service2);

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let percentageResult = +(fullPrice * (percentage / 100));
console.log(percentageResult, 'Процент подрядчику');

let servicePercentPrice = fullPrice - percentageResult;
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');

if (fullPrice > 50000) {
    console.log('сделаем скидку в 10%');
} else if (20000 < fullPrice <= 50000) {
    console.log('сделаем скидку 5%');
} else if (0 <= fullPrice <= 20000) {
    console.log('скидка не предусмотрена');
} else if (fullPrice < 0) {
    console.log('Что то пошло не так');
}
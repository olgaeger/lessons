'use strict'

//function declaration можно объявлять в любом месте
//function expression нельзя объявлять до инициализации

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


//объявление переменной "все дополнительные услуги"
let services = servicePrice1 + servicePrice2;

//объявление функции getAllServicePrices с помощью метода "function expression"
const getAllServicePrices = function(){
    console.log(services, 'Все дополнительные услуги');//возврат стоимости всех дополнительных услуг.
}

let allServicePrices = getAllServicePrices (); //Результат функции getAllServicePrices записываем в переменную allServicePrices


//объявление функции getFullPrice с помощью метода "function declaration"
getFullPrice()

function getFullPrice(){
    return fullPrice;
}

const getServicePercentPrices = function(){
    console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетом % подрядчику');
}

servicePercentPrice = getServicePercentPrices();

const getRollbackMessage = function() {
    if (fullPrice > 50000) {
        console.log('сделаем скидку в 10%');
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log('сделаем скидку 5%');
    } else if (fullPrice <= 20000 && fullPrice > 0) {
        console.log('скидка не предусмотрена');
    } else if (fullPrice <= 0) {
        console.log('Что то пошло не так');
    }
}

getRollbackMessage();

const getTitle = function () {
    if (titleProject) {
        // Преобразуем первый символ в заглавный, остальные в строчные
        titleProject = titleProject[0].toUpperCase() + titleProject.slice(1).toLowerCase();
    }
    return titleProject;
};

// Вызов функции и вывод отредактированного названия проекта
titleProject = getTitle();
console.log(titleProject, 'Отредактированное название проекта');

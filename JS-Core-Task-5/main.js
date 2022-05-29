'use strict'
// Завдання 1:

// Необхідно зробити наступні дії з файлом homework.html за допомогою JS.
// Запропонувати користувачу вибрати стиль для сторінки. А саме:
// — фон для сторінки
// — тип шрифта на сторінці
// — вирівнювання для заголовка h1
// — фон для параграфа з посиланнями
// — колір тексту у параграфі з посиланнями і для самих посилань. При чому колір тексту для посилань призначити у циклі
// — колір, розмір, товщину тексту у елементі div
// — тип маркера для маркованого списку на сторінці
// Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх. 
//Ці дані вводимо в кожен окремий prompt().
// ДОДАТОК ДО ЗАВДАННЯ: замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти,
//які вкаже користувач.
// Наприклад користувач у вікно prompt() ввів адресу football24.ua, в такому разі треба створити посилання, 
//яке веде на сайт football24, а текстом цього посилання(тим, по чому можна клікнути) буде також football24.ua.

"use strict";
document.body.style.backgroundColor = prompt(
  "Привіт,давай задамо фон нашій сторінці red,yellow,green,brown ...."
);
document.body.style.fontFamily = prompt(
  "А ще оберемо шрифт для тексту  Italic,Arial,cursive ...."
);
document.querySelector("h1").style.textAlign = prompt(
  "і красиво розмістимо наш заголовок center, left, right"
);
document.querySelector("ul").style.backgroundColor = prompt(
  "та виділимо фон для параграфа з посиланнями red,yellow,green,brown ...."
);
let reF = document.querySelectorAll("p,a");

for (const elem of reF) {
  elem.style.color = prompt(
    "Змінимо колір тексту у параграфі з посиланнями і для самих посилань blue,red,yellow,green,brown .... "
  );
}
document.querySelector("div") .style.color = prompt(
  "Оберіть колір тексту у елементі наприклад red,yellow,green,brown ...."
);
document.querySelector("div").style.fontSize = prompt(
  "Оберіть розмір тексту у елементі  наприклад 20px..."
);document.querySelector("div").style.fontWeight = prompt(
  "Оберіть товщину тексту у елементі  наприклад lighter,normal,bold,bolder,"
);

document.querySelector("ul").type = prompt(
  "Двайте оберемо тип маркера для маркованого списку на сторінці наприклад disc, circle,square"
);

let ref = document.querySelectorAll("a");

for (let i = 0; i<ref.length;i++) {
  let link = ref[i].href= prompt(
    `Введіть  зсилки на три сайти № ${i+1}` 
  );
  ref[i].target = '_blank';
  ref[i].text = link.split('/')[2];
  
}

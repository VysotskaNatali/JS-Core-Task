"use strict";
// Завдання 1.
// Необхідно реалізувати наступний функціонал як на відео iPhone, а саме:
// —  потрібно анімаційно зменшувати зелений блок відносно кількості часу
// —  коли час завершився анімація не має вже запускатися

/* animate*/
$(document).ready(function () {
  $(".animation-block").animate(
    {
      height: "324px",
    },
    60000,
    "linear"
  );

  $(".animation-block").animate(
    {
      height: "0px",
    },
    60000,
    "linear"
  );
});
/* time*/
setTimeout(function () {
  $(".number").text(1);
}, 60000);
setTimeout(function () {
  $(".number").text(0);
}, 120000);

// Завдання 2.
// Потрібно скопіювати в документ html в тег body нижче вказаний код.
// З допомогою команд jquery потрібно отримати текстове вмістиме кожного з елементів, які вказані в списку нижче.
// Отримані текстові значення потрібно об’єднати в стрічку і вивести командою alert().
// Список елементів:

// Тег span з id ”s1”;
// Тег b з класом ”s2”;
// Тег i, вкладений в блок “second”
// Тег q з вспливаючою підказкою
// Ссилка, яка відкривається в новій вкладці
// Тег span з класом extra, який є другий по послідовності на сторінці.

let str = "";
let str1 = $("#s1").text();
let str2 = $("b.s2").text();
let str3 = $("#second i").text();
let str4 = $('q[title="hello"]').text();
let str5 = $('[target="_blank"]').text();
let str6 = $("span.extra").eq(1).text();

alert(str.concat(str1, str2, str3, str4, str5, str6));

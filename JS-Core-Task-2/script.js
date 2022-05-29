"use strict";
// Завдання 1:
// — Користувач вводить текст в prompt.
// Потрібно порахувати і вивести кількість пробілів, які були введені.

let text = prompt(`write text here...`);
let space = 0;
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === " ") {
    space++;
  }
}
console.log("space", space);

// Завдання 2:

// — Користувач вводить email.
// Потрібно перевірити дані на правильність введення.
// Правильно введений email - це той, в якому міститься символ @.
// Крім того символ @ не може бути на початку тексту або в кінці.
// — Приклад правильно введених даних:
// student@ukr.net
// — Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net

let str = prompt("Введіть email");

if (str == null) {
  console.log("Вхід скасовано");
} else if (str == "") {
  console.log("Ви нічого не ввели");
} else if (
  str.includes("@") == 0 ||
  str.includes(" ") == true ||
  str.startsWith("@") == true ||
  str.endsWith("@") == true
) {
  console.log("Некоректно введено данні");
} else {
  console.log("Данні введено вірно");
}
//-------------------------------------------------------

let str = prompt("Введіть email");

str == null
  ? console.log("Вхід скасовано")
  : str == ""
  ? console.log("Ви нічого не ввели")
  : str.includes("@") == 0 ||
    str.includes(" ") == true ||
    str.startsWith("@") == true ||
    str.endsWith("@") == true
  ? console.log("Некоректно введено данні")
  : console.log("Данні введено вірно");

// Завдання 3:

// — Людина вводить текст, в якому міститься слово html
// (html може зустрічатись в тексті декілька разів). Потрібно,
// вивести в консолі загальну кількість слів html у введеному тексті.
// — Приклад роботи:

// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.

let str = "Text html javascript html css";
let str = prompt(`Enter the text`);
let target = 0;
let position = str.indexOf("html");

while (position !== -1) {
  target++;
  position = str.indexOf("html", position + 1);
}
console.log("Target", target);

// Завдання 4:

// — Користувач вводить URL адреса в prompt в форматі http або https.
// Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// — Приклад роботи:
// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
// Користувач вводить: “http://w3schools.com” – в консоль виводиться w3schools.com.

let str = prompt(`Enter URL here...`);
let newStr = str.split('/');
console.log(newStr[2]);

let str = prompt(`Enter URL here...`);
console.log(str);
console.log(str.split("/").pop());

let str = "https://www.google.com";
console.log(str.split("/").pop());

let str1 = "http://w3schools.com";
console.log(str1.split("/").pop());

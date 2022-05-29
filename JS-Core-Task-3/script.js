"use strict";

// Завдання 1:
// Напишіть функцію getArea(number), яка обчислює площу круга.
// Для визначення площі використовуйте Math. В залежності від того
// що передали в функцію має виводити наступні повідомлення:
// - Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// - Якщо передали не число - Повинно бути числове значення.
// - Якщо в функцію нічого не передали - Будь ласка, введіть радіус!

function getArea(number) {
  if (Number.isFinite(number) != true) {
    return `Повинно бути числове значення`;
  } else if (number == " ") {
    return `Будь ласка, введіть радіус!`;
  } else {
    let area = number * number * Math.PI;
    return `Площа дорівнює ${area.toFixed(2)} квадратних одиниць  `;
  }
}
let number = +prompt(`Введіть радіус`);
console.log(getArea(number));

// //------------------------------------------------------------------------
let number = +prompt(`Введіть радіус`);
const getArea = (number) => {
  if (Number.isFinite(number) != true) {
    return `Повинно бути числове значення`;
  } else if (number == "") {
    return `Будь ласка, введіть радіус!`;
  } else {
    return `Площа дорівнює ${number * number * Math.PI} квадратних одиниць  `;
  }
};
console.log(getArea(number));

// Завдання 2:

// — Напишіть функцію getSqrt(number), яка вираховує корінь квадратний.
//  Для визначення кореня використовуйте  Math.
//   В залежності від того що передали в функцію має виводити наступні повідомлення:
// - Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// - Якщо передали не число - Повинно бути числове значення.
// - Якщо число менше 0 - Введіть додатнє число.
// - Якщо в функцію нічого не передали - Будь ласка, введіть число!

let number = +prompt(`Введіть число для визначення кореня`);
const getSqrt = (number) => {
  if (Number.isFinite(number) != true) {
    return `Повинно бути числове значення`;
  } else if (number <= 0) {
    return `Введіть додатнє число`;
  } else if (number == "") {
    return `Будь ласка, введіть число!`;
  } else {
    let sqrt = (Math.sqrt(number).toFixed(2) * 100) / 100;
    return `Квадратний корінь з ${number} дорівнює ${sqrt}`;
  }
};
console.log(getSqrt(number));

// Завдання 3:
// — Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:
// - MyMath.PI – це властивість яка має повертати число Pi.
// - MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
// - MyMath.abs(number) – це метод який має повертати модулю числа.
// - MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих. Кількість чисел необмежена.
// - MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих. Кількість чисел необмежена.
// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
// - Якщо передали не число - Повинно бути числове значення.
// - Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
// При створенні цих методів використання об’єкту Math заборонене!

const MyMath = {
  pi(n) {
    let i = 1,
      pi = 0;
    while (i < 50000000) {
      pi += 1 / i - 1 / (i + 2);
      i += 4;
      if (Number.isFinite(n) != true) {
        return `Повинно бути числове значення`;
      } else if (n == "") {
        return `Будь ласка, введіть число!`;
      }
    }

    return `число PI ${+(4 * pi).toFixed(n)}`;
  },
  pow(num, degree) {
    if (Number.isFinite(num) != true && Number.isFinite(degree) != true) {
      return `Повинні бути числові значення`;
    } else if (num == "" && degree == "") {
      return `Будь ласка, введіть число і степінь!`;
    }
    let result = 1;
    for (let i = 1; i <= degree; i++) {
      result *= num;
    }
    return `число ${num} в степені ${degree} дорівнює ${result}`;
  },
  abs(num) {
    if (num < 0) {
      num *= -1;
      return `Отримали додатне число${num}`;
    } else if (num > 0) {
      return `Повинно бути  від'ємне числове значення`;
    } else if (Number.isFinite(num) != true) {
      return `Повинно бути числове значення`;
    } else if (num == "") {
      return `Будь ласка, введіть число!`;
    }
  },
  max(...arr) {
    for (let i = 0; i < arr.length; i++) {
      let maX = arr[0];
      if (maX < arr[i]) {
        maX = arr[i];
        return maX;
      } else if (Number.isFinite(arr[i]) != true) {
        return `Будь ласка, введіть число!`;
      } else if (arr[i] == "") {
        return `Повинно бути числове значення`;
      }
    }
  },

  min(...arr) {
    for (let i = 0; i < arr.length; i++) {
      let miN = arr[0];
      if (miN > arr[i]) {
        miN = arr[i];
        return miN;
      } else if (Number.isFinite(arr[i]) != true) {
        return `Будь ласка, введіть число !`;
      } else if (arr[i] == undefined) {
        return `Повинно бути числове значення`;
      }
    }
  },
};
let n =+prompt('Введіть число');
console.log(MyMath.pi(n));

let num = +prompt("Введіть число");
let degree = +prompt("Введіть степінь");
console.log(MyMath.pow(num, degree));

let num =+prompt(`Введіть від'ємне число`);
console.log(MyMath.abs(num));

 console.log(MyMath.max(20,-30,50));
 console.log(MyMath.max(0,'m',100));
 console.log(MyMath.max(''));

 console.log(MyMath.min(20,-30,50));
 console.log(MyMath.min(0,'m',100));
 console.log(MyMath.min(''));
 console.log(MyMath.min(0,'',100));

 

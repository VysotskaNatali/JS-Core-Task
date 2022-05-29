"use strict";
// Завдання 1. forEach
// Заданий масив з числами. Знайдіть суму цих чисел.
// let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.

let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(function (value) {
  sum += value;
});
console.log(sum);

// Завдання 2. Map
// Заданий масив з числами. Створіть новий масив, що складається з квадратів цих чисел. 
// let arr = [5, 6, 7, 8, 9];
// Результат вивести в консоль.
let arr2 = [5, 6, 7, 8, 9];
let degree = 2;
const pow = arr2.map(value => Math.pow(value,degree))
console.log(pow);

// Завдання 3. Every
// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}
//           ]
// Результат вивести в консоль.

let arr3 = [{name: 'Ivan', country: 'Ukraine'},
           {name: 'Petro', country: 'Ukraine'},
           {name: 'Miguel', country: 'Cuba'}
          ];
 const checkCountry = arr3.every(key=> key.country === 'Ukraine')  
 console.log(checkCountry);

//  Завдання 4. Some
// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// let arr = [{name: 'Ivan', country: 'Ukraine'},
//            {name: 'Petro', country: 'Ukraine'},
//            {name: 'Miguel', country: 'Cuba'}

// Результат вивести в консоль.

let arr4 = [{name: 'Ivan', country: 'Ukraine'},
           {name: 'Petro', country: 'Ukraine'},
           {name: 'Miguel', country: 'Cuba'}
          ];
 const checKCountry = arr4.some(key=> key.country === 'Cuba')  
 console.log(checKCountry);

//  Завдання 5. Filter
// Заданий масив значень, в ньому можуть бути звичайні елементи і підмасиви.
// Залиште в ньому тільки підмасиви.
// let arr = [1, 'string', [3, 4], 5, [6, 7]];
// Результат вивести в консоль.

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
const arr5New = arr5.filter(Array.isArray);
console.log(arr5New);


// Завдання 6. Reduce
// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
//      let arr = [1, 2, 5, 0, 4, 5, 6];
// Результат вивести в консоль.

let arr6 = [1, 2, 5, 0, 4, 5, 6];
let zero = arr6.indexOf(0)
const sUm =arr6.slice(0,zero).reduce((accum,number) => accum +number,0)
console.log(sUm);

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
//     let arr = [1, 2, 3, 0, 4, 5, 6];
// Результат вивести в консоль.

const arr = [1, 2, 3, 0, 4, 5, 6];
let suM = arr.reduce((accum, num) => accum[1] < 10 ? [accum[0] + 1, accum[1] + num] : accum, [0, 0])[0];
console.log(suM);

// const arr = [1, 2, 3, 0, 4, 5, 6];
// let suM = arr.reduce(function(accum, num){
//  if(accum[1] < 10){
//     return [accum[0] + 1, accum[1] + num] ;
//  }
//  else{
//      return accum;
//  }

// }, [0, 0])[0];
// console.log(suM);

// Завдання 7. Будь яким методом
// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
//      let arr = [1, -2, 3, 0, 4, -5, 6, -11];
// Результат вивести в консоль.

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

 let positive = arr7.filter(elem => elem >= 0);
 const sqrt = positive.map(value => Math.sqrt(value))
 console.log(sqrt);

 
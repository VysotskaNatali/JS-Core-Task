"use strict";
// Завдання 1:

// — Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву 
// і повертає новий масив не змінюючи оригінал arr.
// - const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// - const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].

function arrCopy(arr) {
  return arr.slice();
}
const arr1 = arrCopy([1, 2, 3]);
console.log(arr1);

const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(arr2);

// Завдання 2:

// — Напишіть функцію arrToString(arr), яка приймає масив arr
// з чисел і повертає вже масив з стрічками:
// - const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’].
// - const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].

function arrToString(arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    str[i] = arr[i].toString();
  }
  return str;
}
const arr1 = arrToString([1, 2, 3]);
console.log(arr1);

const arr2 = arrToString([10, 200, 3333]);
console.log(arr2);

// ------------------------------------------------------

function arrToString(arr) {
  let str = [];
  for (const index in arr) {
    str.push(arr[index].toString());
  }
  return str;
}
const arr1 = arrToString([1, 2, 3]);
console.log(arr1);

const arr2 = arrToString([10, 200, 3333]);
console.log(arr2);

// -----------------------------------------------

function arrToString(arr) {
  let str = [];
  for (const iterator of arr) {
    str.push(iterator.toString());
  }
  return str;
}
const arr1 = arrToString([1, 2, 3]);
console.log(arr1);

const arr2 = arrToString([10, 200, 3333]);
console.log(arr2);

// Завдання 3:

// — Напишіть функцію getLength(arr), яка приймає масив arr з стрічок
// і повертає новий масив з довжиною елементів тих стрічок:
// - const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3].
// - const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].

function getLength(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].length;
  }
  return newArr;
}
const arr1 = getLength(["Ivan", "Pavlo", "Ira"]);
console.log(arr1);

const arr2 = getLength(["Oleksiy", "Andriana"]);
console.log(arr2);

// ----------------------------------------------------------

function getLength(arr) {
  let newArr = [];
  for (const index in arr) {    
    newArr[index] = arr[index].length;
  }
  return newArr;
}
const arr1 = getLength(["Ivan", "Pavlo", "Ira"]);
console.log(arr1);

const arr2 = getLength(["Oleksiy", "Andriana"]);
console.log(arr2);

// Завдання 4:

// — Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок
//  і повертає новий масив де виключені елементи,
//  що повторюються з масиву arr(ігнорувати чутливість до регістру):
// - const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’])
//  – запише в змінну масив [‘html’,‘css’,‘js’].
// - const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’])
// – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]).

function removeDuplicates(arr) {
  let newArr = [];

  for (let index of arr) {
    if (!newArr.includes(index.toLowerCase())) {
      newArr.push(index);
    }
  }

  return newArr;
}

const arr1 = removeDuplicates(["html", "css", "html", "js"]);
console.log(arr1);

const arr2 = removeDuplicates(["html","css","js","html","js","python","js","scss",]);
console.log(arr2);

const arr3 = removeDuplicates(["html", "css", "HTML", "js"]);
console.log(arr3);

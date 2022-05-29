"use strict";

// Завдання 1:
// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// — Створіть порожній об'єкт person.
// — Додайте властивість firstName зі значенням Ivan.
// — Додайте властивість secondName зі значенням Ivanov.
// — Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
// — Скопіюйте об'єкт person в об'єкт newPerson.
// — Поміняйте в newPerson властивість firstName на Petro.
// — Поміняйте в newPerson властивість secondName на Petriv.
// — Запустіть метод showData з person і newPerson, результат має бути наступним:
// person.showData() – має повернути Ivan Ivanov
// newPerson.showData() – має повернути Petro Petriv

let person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  showData: function () {
    console.log(`Iм’я: ${this.firstName}, Прізвище: ${this.secondName}`);
  },
};
person.showData();

let newPerson = {};
for (const key in person) {
  newPerson[key] = person[key];
}
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
newPerson.showData();

// ------------------------------------------------|

let person = {
  firstName: "Ivan",
  secondName: "Ivanov",
  showData() {
    console.log(this.firstName, this.secondName);
  },
};
person.showData();

let newPerson = Object.assign({}, person);

newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";
newPerson.showData();

// Завдання 2:

// Написати розв’язок нижче описаного завдання, кожне завдання окремий рядок коду:
// — Створіть порожній об'єкт MyMath.
// — Cтворіть властивість a зі значенням 5.
// — Cтворіть властивість b зі значенням 2.
// — Створіть 4 методи які будуть робити наступне:
// sum – обчислює суму a+b та повертає значення console.log().
// multiplication – обчислює множення a*b та повертає значення console.log().
// division – обчислює ділення a/b та повертає значення console.log().
// subtraction – обчислює віднімання a-b та повертає значення console.log().
// — Запустіть кожен з цих методів, результат має бути наступним:
// MyMath.sum() – має повернути 5 + 2 = 7
// MyMath.multiplication() – має повернути 5 * 2 = 10
// MyMath.division() – має повернути 5 / 2 = 2.5
// MyMath.subtraction() – має повернути 5 - 2 = 3

let MyMath = {
  a: 5,
  b: 2,
  sum() {
    // console.log(`${this.a}+${this.b}=${this.a+this.b}`);
    console.log(this.a + this.b);
  },
  multiplication() {
    // console.log(`${this.a}*${this.b}=${this.a*this.b}`);
    console.log(this.a * this.b);
  },
  division() {
    // console.log(`${this.a}:${this.b}=${this.a/this.b}`);
    console.log(this.a / this.b);
  },
  subtraction() {
    // console.log(`${this.a}-${this.b}=${this.a-this.b}`);
    console.log(this.a - this.b);
  },
};
MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();
// ------------------------------------------------------
function MyMath(a, b) {
  this.firstNumber = a;
  this.secondNumber = b;
  this.sum = function () {
    this.res = a + b;
    console.log(`sum = ${this.res}`);
  };

  this.multiplication = function () {
    this.res = a * b;
    console.log(`multiplication = ${this.res}`);
  };
  this.division = function () {
    this.res = a / b;
    console.log(`division = ${this.res}`);
  };
  this.subtraction = function () {
    this.res = a - b;
    console.log(`subtraction = ${this.res}`);
  };
}
let a = +prompt(`Write first number`);
let b = +prompt(`Write second number`);
let myMath = new MyMath(a, b);
myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();

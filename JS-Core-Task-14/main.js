// Завдання 1.
// 1. Потрібно реалізувати функціонал як на відео UserList, а саме:
// 1. При кліку на кнопку Add user запускаєте функцію addUser() яка робить наступне:
// a. Стягуєте дані з полів і формує об’єкт.
// b. Цей об’єкт пушитю в масив.
// c. Поля зачищає.
// d. Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

// 2. При кліку на кнопку Delete запускаєте функцію deleteUser() яка робить наступне:
// a. Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// b. По цьому індексу видаляємо елемент з масиву.
// c. Запускаєм заново функцію render().

// 3. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:
// a. Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// b. По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
// c. З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
// d. Запам’ятовуємо даний індекс в змінну userIndex.
// e. Показуємо кнопку Edit user і приховуємо Add user.

// 4. При кліку на кнопку Edit User запускаєте функцію saveEditUser() яка робить наступне:
// a. Стягуєте дані з полів і формує об’єкт через клас.
// b. Цей об’єкт додається на місце старого об’єкту через userIndex.
// c. Поля зачищає.
// d. Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

// 5. Всі поля форми потрібно валідувати перед добавленням, а саме:

// a. Login: може бути слово англійською з великої або маленької букви від 4 до 16 символів.
// b. Password: можуть бути букви, цифри, символ нижнього підкреслювання(_), тире(-) та символ крапки(.) від 4 до 16 символів
// c. Email: обов'язково @. Усі букви повинні бути англійською.
// Загальні вимоги наступні(будь-яка кількість букв, цифр, тире і крапок @будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).

"use strict";
const getS = (selector) => document.querySelector(selector);
let loginRegExp = /^\w{4,16}$/i;
let passRegExp = /^[a-z|0-9|\.|_|-]{4,16}$/i;
let emailRegExp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let login;
let pass;
let email;
let check = true;
let user;
let userMass = [];
let userIndex;
let edit;

/* create style*/
getS(".user-login").oninput = function () {
  login = loginRegExp.test(getS(".user-login").value);
  getS(".user-btn").classList.remove("activ");
  if (login) {
    this.classList.add("focus");
    this.classList.remove("error");
    btn();
  } else {
    this.classList.add("error");
  }
};
getS(".user-password").oninput = function () {
  pass = passRegExp.test(getS(".user-password").value);
  if (pass) {
    this.classList.add("focus");
    this.classList.remove("error");
    btn();
  } else {
    this.classList.add("error");
  }
};
getS(".user-email").oninput = function () {
  email = emailRegExp.test(getS(".user-email").value);
  if (email) {
    this.classList.add("focus");
    this.classList.remove("error");
    btn();
  } else {
    this.classList.add("error");
  }
};
getS(".user-login").onblur = function () {
  this.classList.remove("focus");
};
getS(".user-password").onblur = function () {
  this.classList.remove("focus");
};
getS(".user-email").onblur = function () {
  this.classList.remove("focus");
};
/* create new user*/
getS(".user-btn").onclick = function addUser() {
  if (check) {
    this.classList.add("activ");
    getS(".user-btn").disabled = true;
  }
  user = {
    login: getS(".user-login").value,
    password: getS(".user-password").value,
    email: getS(".user-email").value,
  };
  userMass.push(user);
  render();
  document.forms.user.reset();
};
/* cteate a table with data*/
function render() {
  document.querySelector("tbody").innerHTML = "";
  for (let i = 0; i < userMass.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${i + 1}</td>
        <td>${userMass[i].login}</td>
        <td>${userMass[i].password}</td>
        <td>${userMass[i].email}</td>
        <td><input type='button' class = 'edit-btn btn'  name = 'edit' value = 'Edit'></td>
        <td><input type='button' class = 'delete-btn btn'  name = 'delete' value = 'Delete'></td>`;
    getS(".user-list").append(row);
  }
}
/* create choice*/
getS("tbody").onclick = (event) =>
  event.target.classList.contains("edit-btn")
    ? editUser(event)
    : event.target.classList.contains("delete-btn")
    ? deleteUser(event)
    : 0;
/*create delete user */
function deleteUser(event) {
  let index =
    event.target.parentElement.parentElement.firstElementChild.textContent - 1;
  userMass.splice(index, 1);
  render();
}
/* save edit user */
getS(".user-edit-btn").onclick = function saveEditUser() {
  if (login && pass && email) {
    btn();
    edit.login = getS(".user-login").value;
    edit.password = getS(".user-password").value;
    edit.email = getS(".user-email").value;
    getS(".user-btn").hidden = false;
    getS(".user-edit-btn").hidden = true;
    render();
    document.forms.user.reset();
  }
};
/*create edite user */
function editUser(event) {
  userIndex =
    event.target.parentElement.parentElement.firstElementChild.textContent - 1;
  edit = userMass[userIndex];
  getS(".user-login").value = edit.login;
  getS(".user-password").value = edit.password;
  getS(".user-email").value = edit.email;
  getS(".user-btn").hidden = true;
  getS(".user-edit-btn").hidden = false;
  getS(".edit-btn").disabled = true;
  getS(".delete-btn").disabled = true;
}
/* button*/
function btn() {
  if (login && pass && email) {
    getS(".user-btn").disabled = false;
    getS(".user-edit-btn").disabled = false;
  }
}

// Завдання №1
// Треба провалідувати поля у цій формі на вхідні дані при кліку на кнопку як на відео validateRegisterForm.
// — Ім’я та прізвище: може бути слово англійською з великої або маленької букви і не більше 20.
// Цифр і інші символи не допускаються.
// — Емейл: обов'язково @. Усі букви повинні бути англійською. Загальні вимоги наступні
// (будь-яка кількість букв, цифр, тире і крапок@будьяка кількість букв.( net.ua, org.ua, gmail.com. і т.д.)).
// — Пароль: Від 8 до 15 символів можуть бути букви та цифри.
// — Чекбокс: якщо всі поля правильно заповнені, то при кліку на чекбокс кнопка Sign Up розблоковується
// — Sign Up: при кліку на дану кнопку відкривається модальне вікно з повідомленням про успішну реєстрацію
// — Start exploring: при кліку на дану кнопку закривається модальне вікно, а також всі поля форми зачищуються

"use strict";
const getS = (selector) => document.querySelector(selector);
/*elements*/ 
let form = document.forms.singForm;
let firstRegExp = /^\w{4,20}$/;
let lastRegExp = /^\w{4,20}$/;
let emailRegExp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
let passRegExp = /^\w{8,15}$/;
let check = true;
let firstInput;
let lastInput;
let emailInput;
let passInput;
/* check and create first name*/ 
getS(".first-name").addEventListener("input", () => {
  firstInput = firstRegExp.test(getS(".first-name").value);
  getS(".first").classList.remove("hidden");
  getS(".first-name").style.paddingTop = "17px";
  if (firstInput) {
    getS(".check-first").classList.remove("hidden");
    getS(".error-first ").classList.add("hidden");
    getS(".valid-first").classList.add("hidden");
  } else {
    getS(".valid-first").classList.remove("hidden");
    getS(".error-first ").classList.remove("hidden");
    getS(".check-first").classList.add("hidden");
  }
});

getS(".first-name").addEventListener("blur", () => {
  if (firstInput) {
    getS(".first-name").style.border = "2px solid rgb(30, 156, 78)";
  }
});
/* check and create last name*/ 
getS(".last-name").addEventListener("input", () => {
  lastInput = lastRegExp.test(getS(".last-name").value);
  getS(".last").classList.remove("hidden");
  getS(".last-name").style.paddingTop = "17px";
  if (lastInput) {
    getS(".check-last").classList.remove("hidden");
    getS(".error-last ").classList.add("hidden");
    getS(".valid-last").classList.add("hidden");
  } else {
    getS(".valid-last").classList.remove("hidden");
    getS(".error-last ").classList.remove("hidden");
    getS(".check-last").classList.add("hidden");
  }
});

getS(".last-name").addEventListener("blur", () => {
  if (lastInput) {
    getS(".last-name").style.border = "2px solid rgb(30, 156, 78)";
  }
});

/* check and create email address */ 
getS(".email-address").addEventListener("input", () => {
  emailInput = emailRegExp.test(getS(".email-address").value);
  getS(".email").classList.remove("hidden");
  getS(".email-address").style.paddingTop = "17px";
  if (emailInput) {
    getS(".check-email").classList.remove("hidden");
    getS(".error-email ").classList.add("hidden");
    getS(".valid-email").classList.add("hidden");
  } else {
    getS(".valid-email").classList.remove("hidden");
    getS(".error-email ").classList.remove("hidden");
    getS(".check-email").classList.add("hidden");
  }
});

getS(".email-address").addEventListener("blur", () => {
  if (emailInput) {
    getS(".email-address").style.border = "2px solid rgb(30, 156, 78)";
  }
});

/* check and create password */ 
getS(".password").addEventListener("input", () => {
  passInput = passRegExp.test(getS(".password").value);
  getS(".pass").classList.remove("hidden");
  getS(".password").style.paddingTop = "17px";
  if (passInput) {
    getS(".check-pass").classList.remove("hidden");
    getS(".error-pass ").classList.add("hidden");
    getS(".valid-pass").classList.add("hidden");
  } else {
    getS(".valid-pass").classList.remove("hidden");
    getS(".error-pass ").classList.remove("hidden");
    getS(".check-pass").classList.add("hidden");
  }
});

getS(".password").addEventListener("blur", () => {
  if (passInput) {
    getS(".password").style.border = "2px solid rgb(30, 156, 78)";
  }
});

/* checkbox and check validation */ 
getS(".checkbox-input").addEventListener("click", () => {
  if (check && firstInput && lastInput && emailInput && passInput) {
    getS(".btn-first").disabled = false;
    getS(".btn-first").style.backgroundColor = "#0c529e";
    check = false;
  } else {
    getS(".btn-first").disabled = true;
    getS(".btn-first").style.backgroundColor = "#4ca1fb";
    check = true;
  }
});
/* registration window */ 
getS(".btn-first").addEventListener("click", () => {
    getS(".second-block").classList.remove("hidden");
  
});
/*reset form*/ 
getS(".btn-second").addEventListener("click", () => {
  form.submit();
});

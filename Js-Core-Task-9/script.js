// Завдання 1:

// Необхідно реалізувати наступний функціонал як на відео scroll, а саме:
// — при скролі текст “scroll down” збільшує розмір тексту
// — далі блок з текстом “slide from left” зміщує чуть позицію вправо а також збільшується лінія підкреслення
// — далі картинка(можна використати будь яку) зміщується вліво
// — ну і в кінці текст “scroll up” зменшує розмір тексту
// — при кліку на “scroll down” відбувається автоматичний скрол до блоку “slide from left”
// — при кліку на “scroll up” відбувається автоматичний скрол до верху сторінки

"use strict";

let scrollDown = document.querySelector(".scrollDown");
let down = document.querySelector(".down");
let slide = document.querySelector(".slide");
let image = document.querySelector(".image");
let up = document.querySelector(".up");

window.addEventListener("scroll", () => {
  if (window.scrollY < 400) {
    down.style.fontSize = `${40 + window.scrollY / 12}px`;
  }
  if (window.scrollY > 300 && window.scrollY < 740) {
    slide.style.width = `${290 + (window.scrollY - 300) / 2}px`;
    slide.style.marginLeft = `${50 + (window.scrollY - 300) / 4}px`;
    image.style.right = `${10 + (window.scrollY - 300) / 3}px`;
  }
  if (window.scrollY > 800 && window.scrollY < 1200) {
    up.style.fontSize = `${74 - (window.scrollY - 800) / 12}px`;
  }
});

down.addEventListener("click", () => {
  slide.scrollIntoView({ behavior: "smooth" });
});

up.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// Завдання 2:

// Необхідно реалізувати наступний функціонал як на відео taskList, а саме:
// — при кліку кнопку Додати додававляти нове завдання в список завдань
// — якщо при добавлянні поле пусте має вивести повідомлення у модальному вікні про 
// попередження: “Пусте поле не можна добавити”
// — в списку завдань при кліку на чекбокс завдання має видалятися зі списку
// — якщо залишилося 1не завдання то його не можна видалити
// — якщо захочемо видалити то має вивести повідомлення у модальному вікні про 
// попередження: “Останній таск зі списку Ви не можете видалити”

let listForm = document.forms.listForm;
let addForm = document.forms.addList;
let text = addForm.text;
let button = addForm.button;
let error = document.querySelector(".error");

button.addEventListener("click", () => {
  if (text.value === "") {
    document.querySelector(".errorWindow").style.display = "block";
    document.querySelector(".errortext").innerHTML =
      "Пусте поле неможна добавити";
  } else if (listForm.length < 12) {
    newTask();
    text.value = "";
  } else {
    document.querySelector(".errorWindow").style.display = "block";
    document.querySelector(".errortext").innerHTML =
      "Максимальна кількість завдань";
    text.value = "";
  }
});

function newTask() {
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("name", "choice");
  let newText = document.createElement("span");
  newText.textContent = text.value;
  let newBr = document.createElement("br");
  let newlabel = document.createElement("label");
  newlabel.append(newInput, newText, newBr);

  listForm.append(newlabel);
}

error.addEventListener("click", () => {
  document.querySelector(".errorWindow").style.display = "none";
});
listForm.addEventListener("click", function () {
  if (event.target.type === "checkbox") {
    if (event.target.checked) {
      if (document.getElementsByName("choice").length > 1) {
        event.target.parentElement.remove();
      } else {
        document.querySelector(".errorWindow").style.display = "block";
        document.querySelector(".errortext").innerHTML =
          "Останній таск зі списку Ви не можете видалити.";
        event.preventDefault();
      }
    }
  }
});

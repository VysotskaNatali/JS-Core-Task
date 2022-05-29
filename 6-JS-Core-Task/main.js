'use strict';
// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео color, а саме:
// — при першому наведенні мишки на блок колір фону має ставати червоний
// — при відведенні мишки блок має ставати знову фіолетовий
// — при другому наведенні – блок стає жовтим
// — при третьому – зеленим
// — при наступному наведенні все починається спочатку: червоний, жовтий, зелений
// — так має відбуватися безкінечно по колу

let i = 0;
const color = ["red", "yellow", "green"];
document
  .querySelector(".block")
  .addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = color[i];
    i++;
    if (i >= color.length) {
      i = 0;
    }
  });

document.querySelector(".block").addEventListener("mouseout", function (event) {
  event.target.style.backgroundColor = "purple";
});

// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// — по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// — при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
// — при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
// — при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// — при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”

document
  .querySelector(".secret")
  .addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "yellow";
    event.target.style.color = "purple";
    event.target.style.border = "8px ridge darkgreen";
    event.target.innerHTML = "Хочеш знати який ?";
  });

document
  .querySelector(".secret")
  .addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.innerHTML = "А я тобі не скажу!";
    event.target.style.border = "8px ridge yellow";
  });

document.querySelector(".secret").addEventListener("mouseup", function (event) {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "purple";
  event.target.style.border = "8px ridge darkgreen";
  event.target.innerHTML = "Хочеш знати який ?";
});

document
  .querySelector(".secret")
  .addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "";
    event.target.style.color = "blue";
    event.target.innerHTML = "У мене є секрет!";
    event.target.style.border = "8px ridge rgb(223, 154, 27)";
  });

// Завдання 3:
// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// — на сторінці знаходяться три пустих блоки div.
// — при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// — це зображення стає фоном для цього конкретного блоку

document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    if (event.target.className == "img") {
      let uRl = prompt(`Bведіть url адресу зображення`);
      event.target.style.backgroundImage = `url(${uRl})`;
      event.target.style.backgroundPosition = "center";
      event.target.style.backgroundSize = "100%";
      event.target.style.backgroundRepeat = "no-repeat";
      if (uRl === "" || uRl === null) {
        event.target.innerHTML = " URL не знайдено....";
      }
    }
  });

//   Завдання 4:

//   Необхідно реалізувати наступний функціонал як на відео text, а саме:
//   — на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
//   — потрібно щоб в при кліку на поточний пункт замалювався тим кольором, який в ньому записаний.
//   — постарайтесь зробити даний функціонал використовуючи тільки одну функцію

let l = document.getElementsByTagName("li");
for (i = 0; i < l.length; i++)
  l[i].addEventListener("click", function (event) {
    event.target.style.color = event.target.textContent;
  });

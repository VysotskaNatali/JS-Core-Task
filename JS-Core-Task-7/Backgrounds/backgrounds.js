// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:
// — при кліку на текст колір появляється блок з кольорами 
// — при кліку на текст зображення появляється блок з зображеннями
// — при кліку на самі блоки з кольорами змінюється колі фону
// — при кліку на самі блоки з зображеннями змінюється зображення фону
// — послідовність чи я задаю колір фону а потім зображення або навпаки не має значення

"use strict";

    const task = document.querySelector(".task_1");
    const main = document.querySelectorAll("p");
    const container = document.querySelector(".container");
    const boxs = document.querySelectorAll(".box");
    const colors = [
      "#aed6dc",
      "#ff9a8d",
      "#4a536b",
      "#da68a0",
      "#ed3572",
      "#77c593 ",
      "#edca82",
      "#097770",
      "#a9c0a6 ",
    ];
    const urls = [
      "https://zastavok.net/main/priroda/163639101685.jpg",
      "https://zastavok.net/main/priroda/163639519111.jpg",
      "https://zastavok.net/main/priroda/163638980898.jpg",
      "https://zastavok.net/main/priroda/163639453162.jpg",
      "https://zastavok.net/main/priroda/159397740544.jpg",
      "https://zastavok.net/main/priroda/159422334595.jpg",
      "https://zastavok.net/main/priroda/159422286157.jpg",
      "https://zastavok.net/main/priroda/159397770699.jpg",
      "https://zastavok.net/main/priroda/1473870640.jpg",
    ];
    for (let i = 0; i < main.length; i++) {
      main[i].addEventListener("click", function () {
        container.classList.remove("hidden");
  
        if (i === 0) {
          main[i].classList.add("effect");
          main[1].classList.remove("effect");
          for (let j = 0; j < boxs.length; j++) {
            if (boxs[j].style.backgroundImage) {
               boxs[j].style.backgroundImage = ``;
              
            } else {
              boxs[j].style.backgroundColor = colors[j];
            }
          }
          for (let y = 0; y < boxs.length; y++) {
            boxs[y].addEventListener("click", function (event) {
              if (task.style.backgroundImage) {
                task.removeAttribute('style')
              } else {
                task.style.backgroundColor = event.target.style.backgroundColor;
              }
            });
          }
        } else if (i === 1) {
          main[i].classList.add("effect");
          main[0].classList.remove("effect");
          for (let j = 0; j < boxs.length; j++) {
            boxs[j].style.backgroundImage = `url(${urls[j]})`;
          }
          for (let y = 0; y < boxs.length; y++) {
            boxs[y].addEventListener("click", function (event) {
              task.style.backgroundImage = event.target.style.backgroundImage;
            });
          }
        }
      });
    }
  
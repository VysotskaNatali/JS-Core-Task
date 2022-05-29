// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео ClickBox, а саме:
// — потрібно щоб кожен раз при кліку на елемент йому рандомно задавалася ширина,
// висота та колір фону, а також позицію елемента
// — використовуйте jQuery easing для плавності анімації

"use strict";
$(function () {
  let r, g, b, w, h, t, l;
  $(".boll").each(function (ind, elem) {
    $(elem).click(function () {
      r = Math.round(Math.random() * 255);
      g = Math.round(Math.random() * 255);
      b = Math.round(Math.random() * 255);
      w = 20 + Math.round(Math.random() * 200);
      h = 20 + Math.round(Math.random() * 200);
      t = Math.round(Math.random() * 500);
      l = Math.round(Math.random() * 1300);

      $(".boll").animate(
        {
          width: `${w}px`,
          height: `${h}px`,
          top: `${t}px`,
          left: `${l}px`,
        },
        1000,
        "easeOutBack"
      );
      $(".boll").css("background", `rgb(${r}, ${g}, ${b})`);
    });
  });

  // Завдання 2:
  // Необхідно реалізувати наступний функціонал як на відео DiscoBall, а саме:
  // — потрібно при загрузці сторінки елементу йому рандомно задавалася ширина,
  //  висота, колір фону, колір бордера та тінь, а також позицію елемента
  // — використовуйте jQuery easing для плавності анімації
  // — використовуйте SetInterval для того щоб анімацію зробити безкінеченою
  let r1, g1, b1;
  setInterval(function () {
    $(".disco-boll").each(function (ind, elem) {
      r = Math.round(Math.random() * 255);
      g = Math.round(Math.random() * 255);
      b = Math.round(Math.random() * 255);
      r1 = Math.round(Math.random() * 255);
      g1 = Math.round(Math.random() * 255);
      b1 = Math.round(Math.random() * 255);
      w = 20 + Math.round(Math.random() * 100);
      h = 20 + Math.round(Math.random() * 100);
      t = Math.round(Math.random() * 500);
      l = Math.round(Math.random() * 1300);
      let color = `rgb(${r}, ${g}, ${b})`;
      let shadow = `rgba(${r}, ${g}, ${b}, 0.467 )`;
      $(this).css("background", color);
      $(this).css("border-color", `rgb(${r1}, ${g1}, ${b1})`);
      $(this).css("box-shadow", `0 0 28px 11px ${shadow}`);
      $(this).animate(
        {
          width: `${w}px`,
          height: `${h}px`,
          top: `${t}px`,
          left: `${l}px`,
        },
        1000,
        "easeInOutSine"
      );
    });
  }, 1000);
  $(window).trigger("setInterval");
  $(window).trigger("each");
  // Завдання 3:
  // Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:
  // — потрібно при кліку на елемент щоб він анімовано летів до центру екрану збільшуючи свій розмір
  // — при ще одному кліку він повертався на свою позицію
  // — використовуйте jQuery easing для плавності анімації

  let position, color, chooseBox;

  $(".box").on("click", function () {
    position = $(this).position();
    color = $(this).css("background-color");
    chooseBox = $(this);
    $(".modal-gallery").css({
      backgroundColor: "rgba(46, 44, 44, 0.623)",
      zIndex: 3,
    });
    $(".modal").css({
      display: "block",
      backgroundColor: color,
      left: position.left,
      top: position.top,
    });
    $(this).css("background-color", "white");
    $(".modal").animate(
      {
        width: "400px",
        height: "400px",
        left: (window.innerWidth - 400) / 2,
        top: (window.innerHeight - 400) / 2,
      },
      2000,
      "easeOutQuart"
    );
  });
  $(".modal").on("click", function () {
    $(".modal").animate(
      {
        width: "150px",
        height: "150px",
        left: position.left,
        top: position.top,
      },
      2000,
      "easeOutQuart",
      function () {
        $(".modal").css("display", "none");
        $(".modal-gallery").css({
          backgroundColor: "rgba(255,255,255)",
          zIndex: -3,
        });
        chooseBox.css("background-color", color);
      }
    );
  });
});

// Завдання:

// Необхідно реалізувати наступний функціонал як на відео timer&stopwatch, а саме:
// — повернути поточну дату в форматі: день.місяць.рік
// — повернути поточний час в форматі: година:хвилина:секунда
// — розробити секундомір в якого є можливість запуску, паузи, запам’ятовування поточного часу та 
// скидування часу(мілісекунди не обов’язково реалізовувати)
// — розробити таймер в якого є можливість визначення часового проміжку, а також запуск, пауза ти скидування часу

"use strict";

const getS = (selector) => document.querySelector(selector);

function returnData(zero) {
  return zero >= 10 ? zero : `0${zero}`;
}

/*current data*/
setInterval(() => {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  getS(".digital-date").innerHTML = `${returnData(date)}.${returnData(
    month
  )}.${year}`;
});

/*current time*/
setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  getS(".digital-clock").innerHTML = `${returnData(hours)} : ${returnData(
    minutes
  )} : ${returnData(seconds)}`;
});

/*timer*/
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
getS(".btn-loop").disabled = true;

let timerID;

function start() {
  stop();
  timerID = setInterval(() => {
    timer();
  }, 10);
  getS(".btn-start").disabled = true;
  getS(".btn-reset").disabled = true;
  getS(".btn-stop").disabled = false;
  getS(".btn-loop").disabled = false;
}
function loop() {
  createElement();
}

// function createElement() {
//   if (getS(".loop").children.length < 4) {
//     let p = document.createElement("p");
//     p.textContent = getS(".stopwatch-time").textContent;
//     getS(".loop").append(p);

//   } else {
//    getS(".loop").textContent = 'RESET LOOP...'
//     getS(".btn-loop").disabled = true;

//   }
// }

function createElement() {
  let p = document.createElement("p");
  p.textContent = getS(".stopwatch-time").textContent;
  getS(".loop").append(p);

  if (getS(".loop").children.length >= 4) {
    getS(".loop").style.overflowY = "scroll";
  }
}

function stop() {
  clearInterval(timerID);
  getS(".btn-start").disabled = false;
  getS(".btn-reset").disabled = false;
  getS(".btn-stop").disabled = true;
}

function reset() {
  getS(".stopwatch-time").textContent = "00:00:00:000";
  getS(".loop").textContent = "";
  getS(".btn-loop").disabled = true;
}
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  getS(".stopwatch-time").innerText = `${returnData(hour)}:${returnData(
    minute
  )}:${returnData(second)}:${returnData(millisecond)}`;
}

/* countdown timer*/ 

let x = getS(".countdown-number").innerHTML;
function plus() {
  if (x < 25) {
    getS(".countdown-number").textContent = x + 1;
    x++;
  }
}
function minus() {
  if (x > 0) {
    getS(".countdown-number").textContent = x - 1;
    x--;
  }
}
let timersID;
let minutes = getS(".minutes").innerHTML;
let seconds = 0;
let check = true;

function cdStart() {
  if (check) {
    getS(".minutes").textContent = ` ${returnData(
      getS(".countdown-number").textContent
    )}`;
  }
  startTimer();

  getS(".btn-cd-start").disabled = true;
  getS(".btn-cd-reset").disabled = true;
  getS(".btn-cd-stop").disabled = false;
  getS(".btn-plus").disabled = true;
  getS(".btn-minus").disabled = true;
}
function cdStop() {
  clearTimeout(timersID);
  check = false;

  getS(".btn-cd-start").disabled = false;
  getS(".btn-cd-reset").disabled = false;
  getS(".btn-cd-stop").disabled = true;
}

function cdReset() {
  getS(".minutes").innerHTML = "00";
  getS(".seconds").innerHTML = "00";
  check = true;
  getS(".btn-plus").disabled = false;
  getS(".btn-minus").disabled = false;
}

function startTimer() {
  minutes = getS(".minutes").innerHTML;
  timersID = setTimeout(function () {
    seconds--;

    if (seconds == 0 && minutes == 0) {
      getS(".seconds").innerHTML = "00";
      check = true;
      return;
    }

    if (seconds < 0) {
      seconds = 59;
      if (minutes >= 0) {
        minutes--;
      }
      getS(".minutes").innerHTML = `${returnData(minutes)}`;
    }

    getS(".seconds").innerHTML = `${returnData(seconds)}`;

    startTimer();
  }, 1000);
}

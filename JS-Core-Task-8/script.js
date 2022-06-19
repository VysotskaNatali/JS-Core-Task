// Завдання 2:
// Необхідно реалізувати наступний функціонал як на відео signUp, а саме:
// — заповнити всі поля форми: first name, second name, email
// — вибрати стать: man, woman
// — вибрати position: Fronted, Backend, QC/QA
// — поставити галочку навпроти пункту: I agree…
// — після чого клікаємо на кнопку Sign Up і переходимо до блоку профайлу користувача 
// (примітка: без галочки напроти I agree… кнопка має бути не активна)
// — на блоці профайлу має бути вся інформація яку ми заповнювали, а також картинка чоловіча чи 
// жіноча відносно статі яку ми обирали
// — при кліку на Sign Out ми повертаємося на блок створення акаунту, поля в блоці мають бути зачищені

"use stickt";

// Create Profile
let createProfile = document.querySelector(".createProfile");
let userCreate = document.forms.createUser;
let firstName = userCreate.firstName;
let secondName = userCreate.secondName;
let emailAddress = userCreate.emailAddress;
let gender = userCreate.gender;
let position = userCreate.position;
let check = userCreate.check;
let singUp = userCreate.singUp;
// Profile
let profile = document.querySelector(".profile");
let profileImage = document.querySelector(".profileImage");
let profileName = document.querySelector(".profileName");
let profileEmail = document.querySelector(".profileEmail");
let profileChoose = document.querySelector(".profileChoose");
let singOut = document.forms.outUser.elements.singOut;

firstName.addEventListener("blur", function () {
  profileName.innerHTML = firstName.value + " " + secondName.value;
});
secondName.addEventListener("blur", function () {
  profileName.innerHTML = firstName.value + " " + secondName.value;
});
emailAddress.addEventListener("blur", function () {
  profileEmail.innerHTML = emailAddress.value;
});
position.addEventListener("change", function () {
  profileChoose.innerHTML = position.value;
});
check.addEventListener("click", function () {
  if (check.checked) {
    singUp.style.backgroundColor = "rgb(27, 99, 58)";
  } else {
    singUp.style.backgroundColor = "rgb(58, 156, 101)";
  }
});
singUp.addEventListener("click", function (event) {
  if (gender.value === "man") {
    profileImage.classList.add("profileImageMen");
  } else if (gender.value === "woman") {
    profileImage.classList.add("profileImageWomen");
  }
  if (!check.checked) {
    return;
  } else if (firstName.value === "") {
    firstName.focus();
    return;
  } else if (secondName.value === "") {
    secondName.focus();
    return;
  } else if (emailAddress.value === "") {
    emailAddress.focus();
    return;
  } else if (position.value === "") {
    position.focus();
    return;
  }
  profile.classList.remove("hidden");
  createProfile.classList.add("hidden");
  event.preventDefault();
});
singOut.addEventListener("focus", function () {
  singOut.classList.add("singOuthover");
});

// Завдання 1:
// Необхідно реалізувати наступний функціонал як на відео input (архів долучено до завдання), а саме:
// — при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, 
// текст в правому не змінюється
// — при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, 
// причому якщо в інпуті нічого немає, текст в placeholder не змінюється 

let formMove = document.forms.move;
formMove.button.addEventListener("click", function () {
  if (formMove.first.value) {
    formMove.second.value = formMove.first.value;
    formMove.first.value = "";
  }
});

let formsList = document.forms.placeholder;
placeholder.assing.addEventListener("blur", function() {
  if (placeholder.assing.value) {
    placeholder.assing.placeholder = this.value;
    placeholder.assing.value = "";
  }
});

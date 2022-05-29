'use strict';
/* element access*/
const getS = (selector) => document.querySelector(selector);
const getId = (selector) => document.getElementById(selector);
const fontSize = document.forms["form-size"];
const formStyle = document.forms["form-style"];
const list = document.forms["form-list"];
const table = document.forms["form-table"];

let color = [
  "rgb(250, 9, 9)",
  "rgb(10, 10, 247)",
  "rgb(6, 117, 6)",
  "rgb(0, 0, 0)",
  "rgb(247, 211, 9)",
  "rgb(250, 8, 137)",
  "rgb(255, 255, 255)",
  "rgb(197, 61, 238)",
  "rgb(46, 139, 134)",
];

/*start  function show/remove edit block and  change and save  HTML*/
getS(".btn-edit").addEventListener("click", () => {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
});
getS(".btn-save").addEventListener("click", () => {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
});
/*end function  show/remove edit block and  change and save  HTML*/

/*start edit  and save style changes  HTML*/
getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});
/*function font size style */
fontSize.addEventListener("click", () => {
  getS(".top-block").style.fontSize = event.target.value;
});
/*function font family style */
getId("fontFamily").addEventListener("change", () => {
  getS(".top-block").style.fontFamily = event.target.value;
});

/* function color text and background style */
for (let i = 0; i < getS(".colors").children.length; i++) {
  getS(".colors").children[i].style.backgroundColor = color[i];
  getS(".colors").children[i].addEventListener("click", (event) => {
    if (choice) {
      getS(".top-block").style.color = event.target.style.backgroundColor;
    } else {
      getS(".top-block").style.backgroundColor =
        event.target.style.backgroundColor;
    }
    getS(".colors").classList.add("hide");
  });
}
getS(".btn-text-color").addEventListener("click", () => {
  getS(".colors").classList.remove("hide");
  choice = true;
});
getS(".btn-bg-color").addEventListener("click", () => {
  getS(".colors").classList.remove("hide");
  choice = false;
});

/*  function bold style */
formStyle.bold.addEventListener("click", () => {
  console.log(event.target.checked);
  if (event.target.checked) {
    getS(".top-block").classList.add("bold");
  } else {
    getS(".top-block").classList.remove("bold");
  }
});
/*  function cursive style */
formStyle.cursive.addEventListener("click", () => {
  console.log(event.target.checked);
  if (event.target.checked) {
    getS(".top-block").classList.add("cursive");
  } else {
    getS(".top-block").classList.remove("cursive");
  }
});

/* replacing the first block with the second */
getS(".btn-add").addEventListener("click", () => {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
});
/*function create table*/
getS(".table").addEventListener("click", () => {
  getS(".create-table").classList.add("show");
  getS(".create-list").classList.remove("show");
});

getS(".btn-table").addEventListener("click", () => {
  const countTr = table.tr.value;
  const countTd = table.td.value;
  const widthTd = table.width.value;
  const heightTd = table.height.value;
  const borderWidth = table.border.value;
  const borderType = table.borderType.value;
  const borderColor = table.borderColor.value;
  getS( ".edit-area").value += `<table style="border-spacing: 0; border-collapse: collapse">`;
  for (let i = 0; i < countTr; i++) {
    getS(".edit-area").value += `<tr>`;
    for (let j = 0; j < countTd; j++) {
      getS( ".edit-area" ).value += `<td style="width: ${widthTd}px;
       height: ${heightTd}px; border: ${borderWidth}px
        ${borderType} ${borderColor}">TD</td>`;
    }
    getS(".edit-area").value += `</tr>`;
  }
  getS(".edit-area").value += `</table>`;
  table.reset();
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
});

/*function create list*/
getS(".list").addEventListener("click", () => {
  getS(".create-list").classList.add("show");
  getS(".create-table").classList.remove("show");
});
getS(".btn-create-list").addEventListener("click", () => {
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
});

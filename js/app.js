//Dom Elements;
const switchBtn = document.getElementById("switchBtn");
const switchImg = document.getElementById("switchImg");
const calc_body = document.getElementById("calc_body");
const icon = document.getElementsByClassName("fas");
const body = document.getElementById("body");
const switchFrame = document.getElementById("switch_frame");
const input = document.getElementById("input");
const result = document.getElementById("result");
const buttons = document.getElementsByClassName("btun");
const btnRole = Array.from(document.getElementsByClassName("btun"));

//storing and displaying the dark mode if enabled;
let darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
  toDark();
}

// Dark Mode Toggle Button;
switchBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    toLight();
  } else {
    toDark();
  }
});

//switch to Dark Mode;
function toDark() {
  switchBtn.classList.add("switchBtnDark");
  switchImg.src = "img/moon.png";
  result.style.color = "#57DFBC";
  body.style.background = "#27313D";
  calc_body.classList.add("calcBodyDark");
  switchFrame.classList.add("switchBtnFrame");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("darkCalcBtn");
  }
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "#57DFBC";
  }
  localStorage.setItem("darkMode", "enabled");
}

//switch to Light Mode;
function toLight() {
  switchBtn.classList.remove("switchBtnDark");
  switchImg.src = "img/sun.png";
  result.style.color = "#000";
  body.style.background = "#ecf0f3";
  calc_body.classList.remove("calcBodyDark");
  switchFrame.classList.remove("switchBtnFrame");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("darkCalcBtn");
  }
  for (var i = 0; i < icon.length; i++) {
    icon[i].style.color = "#fc9406";
  }
  localStorage.setItem("darkMode", null);
}

//calculator operations;
btnRole.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    getNumbers(e);
    getSign(e);
  });
});

function getNumbers(e) {
  switch (e.target.innerText) {
    case "C":
      input.innerText = "";
      result.innerText = "";
      break;
    default:
      input.innerText += e.target.innerText;
  }
}

function getSign(e) {
  switch (e.target.classList[0]) {
    case "plus":
      input.innerText += "+";
      break;
    case "minus":
      input.innerText += "-";
      break;
    case "times":
      input.innerText += "*";
      break;
    case "divide":
      input.innerText += "/";
      break;
    case "undo":
      if (input.innerText) {
        input.innerText = input.innerText.slice(0, -1);
      }
      break;
    case "square-root":
      input.innerText = input.innerText;
      result.innerText = Math.sqrt(input.innerText);
      break;
    case "equals":
      try {
        result.innerText = eval(input.innerText);
        input.innerText = eval(input.innerText);
      } catch {
        result.innerText = "ERROR!";
      }
      break;
  }
}

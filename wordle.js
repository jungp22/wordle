function toggleDarkMode() {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementsByClassName("header-buttons")[0].style.backgroundColor =
      "white";

    document.getElementsByTagName("button")[0].style.backgroundColor = "white";
    document.getElementsByTagName("button")[1].style.backgroundColor = "white";
    document.getElementsByTagName("button")[2].style.backgroundColor = "white";

    document.getElementsByTagName("button")[0].style.color = "black";
    document.getElementsByTagName("button")[1].style.color = "black";
    document.getElementsByTagName("button")[2].style.color = "black";

    document.getElementsByClassName("header")[0].style.borderBottom =
      "3px solid #dfdfdf";
    document.getElementsByClassName("footer")[0].style.borderTop =
      "3px solid #dfdfdf";
    document.getElementById("how-to-play").style.borderRight =
      "2px solid #dfdfdf";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByClassName("header")[0].style.borderBottom =
      "3px solid #3a3a3c";
    document.getElementsByClassName("footer")[0].style.borderTop =
      "3px solid #3a3a3c";
    document.getElementById("how-to-play").style.borderRight =
      "2px solid #3a3a3c";

    document.getElementsByClassName("header-buttons")[0].style.backgroundColor =
      "black";

    document.getElementsByTagName("button")[0].style.backgroundColor = "black";
    document.getElementsByTagName("button")[1].style.backgroundColor = "black";
    document.getElementsByTagName("button")[2].style.backgroundColor = "black";

    document.getElementsByTagName("button")[0].style.color = "white";
    document.getElementsByTagName("button")[1].style.color = "white";
    document.getElementsByTagName("button")[2].style.color = "white";
  }
}

function toggleHelp() {
  if (document.getElementById("how-to-play").style.display === "flex") {
    document.getElementById("how-to-play").style.display = "none";
  } else {
    document.getElementById("how-to-play").style.display = "flex";
  }
}

function showHint() {
  if (document.getElementById("hint").style.display === "flex") {
    document.getElementById("cooldiv2").style.display = "none";
    document.getElementById("hint").style.display = "none";
  } else {
    document.getElementById("cooldiv2").style.display = "flex";
    document.getElementById("hint").style.display = "flex";
  }
}

function isAlpha(char) {
  return char.key.length===1;
}
const game = document.querySelector("body");
function gameLogic(event) {
  if (isAlpha(event)) {
    letter = event.key.toUpperCase();
    for (let x = 0; x < 16; x++) {
      if (document.getElementsByClassName("letters")[x].innerHTML === "") {
        document.getElementsByClassName("letters")[x].innerHTML =
          "<p>" + letter + "</p>";
        document.getElementsByClassName("letters")[x].class =
          "letters attempted";

        document.getElementsByClassName("letters")[x].class =
          "letters attempted";

        break;
      }
    }
  }
}
function startOver() {
  for (let x = 0; x < 16; x++) {
    document.getElementsByClassName("letters")[x].innerHTML = "";
    document.getElementsByClassName("letters")[x].removeAttribute("id");
  }
}
game.addEventListener("keydown", gameLogic);

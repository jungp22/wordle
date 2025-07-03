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

let word = [];
document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  if (word.length < 4 && isLetter(event.key)) {
    word.push(event.key.toUpperCase());

    for (let x = 0; x < 16; x++) {
      if (document.getElementsByClassName("letters")[x].innerHTML === "") {
        console.log(x);
        document.getElementsByClassName("letters")[x].innerHTML =
          word[word.length - 1];
        break;
      }
    }
    console.log(word);
  } else if (event.key === "Backspace") {
    word.pop();
    console.log(word);
    for (let x = 0; x < 16; x++) {
      if (document.getElementsByClassName("letters")[x].innerHTML === "" && word.length >=0) {
        if(word.length !==0){
          document.getElementsByClassName("letters")[x-1].removeAttribute("id");}
        document.getElementsByClassName("letters")[x-1].innerHTML ="";
        break;
      }
    }
  } else if (word.length === 4 && event.key === "Enter") {
    let result = checkAnswer(word);
    console.log(result);
    for (let x = 0; x < 16; x++) {
      if (document.getElementsByClassName("letters")[x].id !== "wrong"&&document.getElementsByClassName("letters")[x].id !== "correct" &&document.getElementsByClassName("letters")[x].id !== "misplaced") {
        for (let y = 0; y < 4; y++) {
          document.getElementsByClassName("letters")[x + y].id = result[y];
        }
        break;
      }
    }
    word = [];
  }
}

function isLetter(letter) {
  if (letter.length === 1 && letter.match(/[a-zA-Z]/g)) {
    return true;
  } else {
    return false;
  }
}
function checkAnswer(word) {
  console.log(word);
  let correctAnswer = "TEST";
  let matches = [];
  let res = ["wrong", "wrong", "wrong", "wrong"];
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (word[x] === correctAnswer[y]) {
        if (x === y) {
          res[x] = "correct";
        } else {
          if (res[x] !== "correct") {
            res[x] = "misplaced";
          }
        }
      }
    }
  }

  return res;
}
test = {
  statusCode: 200,
  dictionary: [
    {
      word: "Pain",
      hint: "Attending any class other than ENSF 381 gives you ____",
    },
    {
      word: "Nerd",
      hint: "You may be considered one, if you like Star Trek",
    },
    {
      word: "Fish",
      hint: "A type of animal that can swim in water",
    },
    {
      word: "Book",
      hint: "Something you read to learn new things",
    },
    {
      word: "Door",
      hint: "An object that allows entry into a building",
    },
    {
      word: "Rock",
      hint: "A hard material found in nature",
    },
    {
      word: "Star",
      hint: "A celestial object in space",
    },
    {
      word: "Ball",
      hint: "An object used in sports and play",
    },
    {
      word: "Sand",
      hint: "A granular material found at beaches",
    },
    {
      word: "Moon",
      hint: "Earth's natural satellite",
    },
  ],
};

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
    document.getElementById("hint").innerHTML ="Hint: " + correctHint;
    console.log(correctHint)

  }
}

let word = [];
document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
  // if you type in a letter
  if (word.length < 4 && isLetter(event.key)) {
    //adds to the list
    word.push(event.key.toUpperCase());

    // adding letters to the innerhtml
    for (let x = 0; x < 16; x++) {
      if (document.getElementsByClassName("letters")[x].innerHTML === "") {
        document.getElementsByClassName("letters")[x].innerHTML =
          word[word.length - 1];
        break;
      }
    }
  }
  // Backspace function
  else if (event.key === "Backspace") {
    if (word.length > 0) {
      // removes letter from list
      word.pop();
      console.log(word);

      // removes letter from the html
      for (let x = 0; x < 16; x++) {
        // Edge case (last letter)
        if (x== 15){
          document.getElementsByClassName("letters")[x].innerHTML = "";
        }
        // Normal case
        else if (document.getElementsByClassName("letters")[x + 1].innerHTML === "") {
          document.getElementsByClassName("letters")[x].innerHTML = "";
          break;
        }

      }
    }
  }
  // Enter
  else if (word.length === 4 && event.key === "Enter") {
    //checkAnswer shows the result in an array that shows the corresponding letter's result
    let result = checkAnswer(word);
    console.log(result);

    // this is how that will be displayed in the html
    for (let x = 0; x < 16; x++) {
      if (
        document.getElementsByClassName("letters")[x].id !== "wrong" &&
        document.getElementsByClassName("letters")[x].id !== "correct" &&
        document.getElementsByClassName("letters")[x].id !== "misplaced"
      ) {
        for (let y = 0; y < 4; y++) {
          document.getElementsByClassName("letters")[x + y].id = result[y];
        }
        break;
      }
    }

    //this is reset
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
  let matches = [];
  let res = ["wrong", "wrong", "wrong", "wrong"];
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (word[x] === correctWord[y]) {
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
let test = {
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
const rng = Number.parseInt(Math.random() * test.dictionary.length)
let correctWord = test.dictionary[rng].word.toUpperCase()
let correctHint = test.dictionary[rng].hint
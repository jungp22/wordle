

function toggleDarkMode() {
  if (document.body.style.backgroundColor === "black"){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementsByClassName("header-buttons")[0].style.backgroundColor = "white";

    document.getElementsByTagName("button")[0].style.backgroundColor = "white";
    document.getElementsByTagName("button")[1].style.backgroundColor = "white";
    document.getElementsByTagName("button")[2].style.backgroundColor = "white";


    document.getElementsByTagName("button")[0].style.color = "black";
    document.getElementsByTagName("button")[1].style.color = "black";
    document.getElementsByTagName("button")[2].style.color = "black";

    document.getElementsByClassName("header")[0].style.borderBottom = "3px solid #dfdfdf";
    document.getElementsByClassName("footer")[0].style.borderTop = "3px solid #dfdfdf";
    document.getElementById("how-to-play").style.borderRight = "2px solid #dfdfdf";
    document.getElementById("attempt").style.color = "black";
  }
  else{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByClassName("header")[0].style.borderBottom = "3px solid #3a3a3c";
    document.getElementsByClassName("footer")[0].style.borderTop = "3px solid #3a3a3c";
    document.getElementById("how-to-play").style.borderRight = "2px solid #3a3a3c";
    document.getElementById("attempt").style.color = "white";

    document.getElementsByClassName("header-buttons")[0].style.backgroundColor = "black";

    document.getElementsByTagName("button")[0].style.backgroundColor = "black";
    document.getElementsByTagName("button")[1].style.backgroundColor = "black";
    document.getElementsByTagName("button")[2].style.backgroundColor = "black";

    document.getElementsByTagName("button")[0].style.color = "white";
    document.getElementsByTagName("button")[1].style.color = "white";
    document.getElementsByTagName("button")[2].style.color = "white";
  }
} 


function toggleHelp() {
  if (document.getElementById("how-to-play").style.display === "flex"){
    document.getElementById("how-to-play").style.display ="none";
  }
  else{
    document.getElementById("how-to-play").style.display ="flex";
  }
}

function showHint(){
  if (document.getElementById("hint").style.display === "flex"){
    document.getElementById("cooldiv2").style.display ="none";
    document.getElementById("hint").style.display ="none";
  }
  else{
    document.getElementById("cooldiv2").style.display ="flex";
    document.getElementById("hint").style.display ="flex";
  }
}
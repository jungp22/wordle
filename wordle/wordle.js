

function toggleDarkMode() {
  if (document.body.style.backgroundColor === "black"){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementsByClassName("header")[0].style.borderBottom = "3px solid #dfdfdf";
    document.getElementsByClassName("footer")[0].style.borderTop = "3px solid #dfdfdf";
    document.getElementById("how-to-play").style.borderRight = "2px solid #dfdfdf";
  }
  else{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementsByClassName("header")[0].style.borderBottom = "3px solid #3a3a3c";
    document.getElementsByClassName("footer")[0].style.borderTop = "3px solid #3a3a3c";
    document.getElementById("how-to-play").style.borderRight = "2px solid #3a3a3c";
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
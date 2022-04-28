// detect finish loading
// search button
// agir sur ton bouton

var button = document.getElementById("bouton");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   
var myFunction = function () {
    console.log("coucou")
    document.getElementById("bg").style.background = getRandomColor();
}
button.addEventListener("click", myFunction);
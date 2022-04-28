
var balloon = document.getElementById("balloon");
var index = 0;
const colors = ["red", "green", "blue"];
balloon.style.background = colors[0];
var myFunction = function () {
    console.log(index);
    balloon.style.background = function() {
        index++;
        if (index < 0)
            index = 1
        if (index > 2)
            index = 0
        balloon.style.width = ((balloon.offsetWidth) + 10) + "px";
        balloon.style.height = ((balloon.offsetHeight) + 10) + "px";

        console.log(balloon.offsetWidth);
        if (balloon.offsetWidth == 420)
        {
            balloon.style.width = 200 + "px";
            balloon.style.height = 200 + "px";

        }
        return colors[index];
    }();
}

var yourFunction = function () {
    console.log(index);
    balloon.style.background = function() {
        index--;

        if (index < 0)
            index = 2
        if (index > 2)
            index = 1
        console.log(balloon.offsetWidth);
        if (balloon.offsetWidth > 200)
        {
            balloon.style.width = ((balloon.offsetWidth) - 5) + "px";
            balloon.style.height = ((balloon.offsetHeight) - 5) + "px";
        }
        return colors[index];
    }();
}

balloon.addEventListener("click", myFunction);
balloon.addEventListener("mouseleave", yourFunction);

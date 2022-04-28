// detect finish loading
// search button
// agir sur ton bouton

var button = document.getElementById("bouton");

var myNodelist = document.getElementsByTagName("DIV");
var i;
var myFunction = function () {
  let task = prompt("Tache à ajouter");
  console.log(task);
  if (task === '')
    return;
  var div = document.createElement("div");
  var t = document.createTextNode("- " + task);
  div.appendChild(t);
  document.getElementById("ft_list").appendChild(div)
  document.cookie = "username=" + task + "; path=/"
  div.onclick = function () {
    document.getElementById("ft_list").removeChild(div)
    document.cookie = "username="
  }
}
button.addEventListener("click", myFunction);
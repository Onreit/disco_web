var button = document.getElementById("bouton");

var myNodelist = document.getElementsByTagName("DIV");

var i;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getListOfId() {
  console.log(document.cookie)
  return getCookie("listofid").split(",");
}

function setListOfId(cname) {
  var cookielist = getCookie("listofid")
  cookielist = cookielist.split(",");
  cookielist.push(cname);
  setCookie("listofid",cookielist.join(","))
}


function createTaskDiv (name) {
  var div = document.createElement("div");
  var t = document.createTextNode(name);
  div.appendChild(t);
  document.getElementById("ft_list").appendChild(div)
  div.onclick = function () {
    if (confirm("Voulez vous supprimer cette tache ?"))
      document.getElementById("ft_list").removeChild(div);
    
  }
  return div;
}

function createTask () {
  let task = prompt("Tache à ajouter");
  console.log(task);
  if (task === '')
    return;
  
  const div = createTaskDiv(task);
  div.id = getRandomColor()

  // setCookie(div.id, task, 1000)
  setListOfId(div.id)
  console.log(document.cookie)
}
button.addEventListener("click", createTask);

function listTaskCookie() {
  let listTask = getListOfId()

  if ( listTask !== null ){
      for(let i = 0; i < listTask.length; i++) {
        createTaskDiv( getCookie(listTask[i]) );
      }
  }
}

window.onload =listTaskCookie;
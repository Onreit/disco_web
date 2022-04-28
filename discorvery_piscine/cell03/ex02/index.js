// detect finish loading
// search button
// agir sur ton bouton

var button = document.getElementById("bouton");

var myFunction = function () {

    let input1 = parseFloat(document.getElementById("input1").value);
    let operation = (document.getElementById("operation").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let res = 1;
    if (operation == "add")
    {
      res = (input1) + (input2);
    }
    else if (operation == "minus")
    {
      res = (input1) - (input2);
    }
    else if (operation == "multiply")
    {
      res = (input1) * (input2);
    }
    else if (operation == "divide")
    {
      res = (input1) / (input2);
    }
    else if (operation == "modulo")
    {
      res = (input1) % (input2);
    }
    if (input2 < 0 || input1 < 0)
    {
      alert("Error =(");
      return ;
    }
    if ((res == NaN && input2 == 0) || res == Infinity )
    {
      alert("It's over 9000!")
      console.log("It's over 9000!")
    }
    else
    {
      console.log(res);
      alert("resultat = " + res);

    }
}
button.addEventListener("click", myFunction);
//setInterval("alert('bip')", 30000);
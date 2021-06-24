function result(x, y, z, j) {
  var x = document.getElementById("cd_prova").value;
  var y = document.getElementById("bonus_prova").value;
  var z=Math.floor(Math.random()*21-(20-(x-y)));
  // var check = document.getElementById("bbqSalsa").checked;
/*   var z = document.getElementById("pokeball").value;
  var j = document.getElementById("pkStatus").value;
  var k = document.getElementById("halfLvl").value; */
  if (x == 0) {
    document.getElementById("bonus").innerHTML = "Auto successo";
  } else {
    var res = parseInt(20-(x-y));
    if (res <=0) {
      document.getElementById("greve").innerHTML = "Impossibile";
    } else {
      if(z<=1){

        document.getElementById("greve").innerHTML =1+"-"+(res);
      }else{
      document.getElementById("greve").innerHTML =z+"-"+(z+res);
      }
    }
    document.getElementById("bonus").innerHTML = res;
  }

  /* else if ((check = false)) {
    document.getElementById("sad").innerHTML = ":(";
  } else if ((check = true)) {
    document.getElementById("sad").innerHTML = ":)";
  }*/
}

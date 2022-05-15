function occurence() {
  ch = document.getElementById("chaine").value;
  c = document.getElementById("caract").value;


  let s = 0;

  for (y of ch) {
    if (c == y) {
      s++;
    }
  }
  document.getElementById("result").innerHTML = "le nombre d'occurence de : " + c + " est :" + s;

}

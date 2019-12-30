// recuperation de l'event après une entrée au clavier et renseignement target Nom
document.getElementById("name").addEventListener("input", function(e) {
  document.getElementById("res-name").innerHTML = e.target.value;
});

// recuperation de l'event après selection liste de choix et renseignement target Genre
document.getElementById("gender").addEventListener("change", function(e){
  document.getElementById("res-gender").innerHTML = e.target.value;
});

// recuperation de l'event quand on bouge la souris au dessus de resultat et renseignement souris x et y
document.getElementById("result").addEventListener("mousemove",function(e){
  document.getElementById("mouse-x").innerHTML = e.offsetX + "";
  document.getElementById("mouse-y").innerHTML = e.offsetY + "";
})

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();

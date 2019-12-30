/**
    récupère la météo de paris sur le site
    https://www.prevision-meteo.ch/services/json/paris
 */

function askWeather() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                      var response = JSON.parse(this.responseText);
            document.getElementById("weather-result").innerHTML = response.current_condition.condition;
        }
    };
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request.send();
  };
  
  const meteo = document.getElementById("ask-weather");
  meteo.addEventListener('click',function(){
    askWeather();
  })
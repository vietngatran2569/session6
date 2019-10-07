function temperatureConverter(valNum) {
    valNum=parseFloat(valNum);
    document.getElementById("outputCelcius").innerText=(valNum-32)/1.8;

}
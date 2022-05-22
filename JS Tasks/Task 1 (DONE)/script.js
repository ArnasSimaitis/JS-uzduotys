/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById('submit-btn').addEventListener('click', function(){
    event.preventDefault();
    if(document.getElementById('search').value == ``) return alert("Įveskite pageidaujamą svorį.");
    else if(isNaN(parseFloat(document.getElementById('search').value))) return alert('Ne float')
    var value = parseFloat(document.getElementById('search').value.replace(',','.'))
    document.getElementById('output').innerHTML = `${value} kg;</br>${(value*2.2046).toFixed(2)} lb;</br>${(value/0.001).toFixed(2)} g;</br>${(value*35.274).toFixed(2)} oz.`
})
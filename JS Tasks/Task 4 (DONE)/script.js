/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(response => response.json())
  .then(json => {
      for(let i = 0; i < json.length; i++)
      {
            document.getElementById('output').innerHTML += `<div class="car" style="display:inline"><div style="border-bottom:groove;text-align:center">${json[i]['brand']}</p></div><div class="modelList"></div>`
            for(let x = 0; x < json[i]['models'].length; x++)
            {
                document.getElementsByClassName('modelList')[i].innerHTML += `${json[i]['models'][x]}</br>`
            }
        }
    });
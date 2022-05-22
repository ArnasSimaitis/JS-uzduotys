/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
var users;

fetch(ENDPOINT).then((response) => {
    if(response.ok) return response.json();
    else{ throw new Error('Nepavyko prisijungti')}
}).then(data => {
    users = data;
}).catch((error) => console.error("Klaida:", error))

document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('output').innerHTML = ``
    for(let x = 0; x < users.length; x++)
    {
        document.getElementById('output').innerHTML += `<div style="border-bottom:groove"><img src="${users[x]['avatar_url']}" class="imgUser"><div class="idUser">${users[x]['login']}</div></div>`
    }
})

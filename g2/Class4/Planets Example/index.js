let planets1 = null;
let planets2 = null;

$(document).ready(function () {
    let callBtn = document.getElementById("btn");
    let callBtn2=document.getElementById("btn2");
    let table = document.getElementById("result");

    function populateTableWithPlanets(table, response){
        table.parentElement.style.display = "block";
        table.innerHTML = `          
        <tr>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
        </tr>`
        for (let planet of response) {
          table.innerHTML += createRow(planet);
        }
      }
      function createRow(planet){
        return `
        <tr>
          <td>${planet.name}</td>
          <td>${planet.population}</td>
          <td>${planet.climate}</td>
          <td>${planet.gravity}</td>
        </tr>
        `
      }
      
      function getPlanets(url, page){
        $.ajax({
            url: url,
            success: function (response) {
                console.log(response);
                populateTableWithPlanets(table, response.results);
                if(page === 1){
                    planets1 = response;
                } else {
                    planets2 = response;
                }
            },
            error: function (error) {
                console.log(error)
            }
        })
      }
    callBtn.addEventListener("click", function () {
        if(planets1 === null){
            console.log("Hey")
            planets1 = getPlanets("https://swapi.co/api/planets/?page=1", 1);
            console.log(planets1);
        } else {
            populateTableWithPlanets(table, planets1.results); 
        }
    })
    callBtn2.addEventListener("click",function(){
        // getPlanets("https://swapi.co/api/planets/?page=2");
        if(!planets2){
            planets2 = getPlanets(planets1.next, 2);
        } else {
            populateTableWithPlanets(table, planets2.results); 
        }
    })
})
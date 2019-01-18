$(document).ready(()=>{
  let countryInput = document.getElementById("countryInput");
  let getDataBtn = document.getElementById("getData");
  let resultField = document.getElementById("result");
  let message = document.getElementById("message");

  function populateTable(table, response){
    table.parentElement.style.display = "block";
    table.innerHTML = `          
    <tr>
      <th>Flag</th>
      <th>Name</th>
      <th>Population</th>
      <th>Region</th>
      <th>Area</th>
      <th>Capital</th>
      <th>Currencies</th>
      <th>Languages</th>
    </tr>`
    for (let country of response) {
      table.innerHTML += createRow(country);
    }
  }
  function createRow(country){
    let currencies = (curr =>{
      let result = "";
      for (let currency of curr) {
        result += ` ${currency.name}(${currency.symbol})`;
      }
      return result;
    })(country.currencies);
    let languages = (lang =>{
      let result = "";
      for (let language of lang) {
        result += ` ${language.name}(${language.nativeName})`;
      }
      return result;
    })(country.languages);
    return `
    <tr>
      <td><img src="${country.flag}"></td>
      <td>${country.name}</td>
      <td>${country.population}</td>
      <td>${country.region}</td>
      <td>${country.area}</td>
      <td>${country.capital}</td>
      <td>${currencies}</td>
      <td>${languages}</td>
    </tr>
    `
  }

  getDataBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + countryInput.value,
        success: function(response){
            console.log("Success!");
            message.innerHTML = "";
            console.log(response);
            populateTable(resultField.getElementsByTagName("tbody")[0], response);
        },
        error: function(error){
            console.log(error);
            if(error.status === 404){
              message.innerHTML = "No countries were found!";
            } else {
              message.innerHTML = "There were some problems. Please try again.";
            }
            resultField.getElementsByTagName("tbody")[0].innerHTML = "";
            resultField.getElementsByTagName("table")[0].style.display = "none";
        }
    })
})
})
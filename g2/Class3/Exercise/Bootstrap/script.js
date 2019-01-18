$(document).ready(()=>{
  let countryInput = document.getElementById("countryInput");
  let getDataBtn = document.getElementById("getData");
  let table = document.getElementById("table");
  let message = document.getElementById("message");

  function populateTable(table, response){
    console.log(table);
    table.style.display = "block";
    table.innerHTML = `          
    <div class="row">
      <div class="col-1 columnHead">Flag</div>
      <div class="col-2 columnHead">Name</div>
      <div class="col-2 columnHead">Population</div>
      <div class="col-1 columnHead">Region</div>
      <div class="col-1 columnHead">Area</div>
      <div class="col-1 columnHead">Capital</div>
      <div class="col-2 columnHead">Currencies</div>
      <div class="col-2 columnHead">Languages</div>
    </div>`
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
    <div class="row">
      <div class="col-1 column"><img src="${country.flag}"></div>
      <div class="col-2 column">${country.name}</div>
      <div class="col-2 column">${country.population}</div>
      <div class="col-1 column">${country.region}</div>
      <div class="col-1 column">${country.area}</div>
      <div class="col-1 column">${country.capital}</div>
      <div class="col-2 column">${currencies}</div>
      <div class="col-2 column">${languages}</div>
    </div>`
  }

  getDataBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + countryInput.value,
        success: function(response){
            console.log("Success!");
            message.innerHTML = "";
            console.log(response);
            populateTable(table , response);
        },
        error: function(error){
            console.log(error);
            if(error.status === 404){
              message.innerHTML = "No countries were found!";
            } else {
              message.innerHTML = "There were some problems. Please try again.";
            }
            table.innerHTML = "";
            table.style.display = "none";
        }
    })
})
})
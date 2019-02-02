$(document).ready(()=>{
  let countryInput = document.getElementById("countryInput");
  let getDataBtn = document.getElementById("getData");
  let table = document.getElementById("table");
  let message = document.getElementById("message");
  let countriesPerPage = 5;
  let allCountries = [];
  let countriesPages = [];
  let page = 1;

  function generateNavigationBar(pages){
    document.getElementById("previousCol").innerHTML = `
      <button value="prev"> previous </button>
    `
    console.log(pages);
    document.getElementById("pagination").innerHTML = "";
    for (let i = 1; i <= pages.length; i++) {
      console.log(i);
      document.getElementById("pagination").innerHTML += `
        <a value="${i}">${i}</a>
      `
    }
    document.getElementById("nextCol").innerHTML = `
      <button value="next"> next </button>
    `
  }
  function createView(response){
    countriesPages = makeCountriesPages(response);
    populateTable(table , countriesPages[0]);
    generateNavigationBar(countriesPages);
    sortEventHandler();
  }
  function makeCountriesPages(countries){
    let result = [];
    counter = 0;
    for (let i = 0; i < countries.length; i++) {
      if(counter === countriesPerPage){
        counter = 0;
      }
      if(counter === 0){
        result.push([]);
      }
      result[result.length - 1].push(countries[i]);
      counter ++;
    }
    return result;
  }
  function populateTable(table, response){
    console.log(response);
    table.style.display = "block";
    table.innerHTML = `          
    <div class="row" id="titles">
      <div class="col-1 columnHead">Flag</div>
      <div class="col-2 columnHead" value="name">Name</div>
      <div class="col-2 columnHead" value="pop">Population</div>
      <div class="col-1 columnHead">Region</div>
      <div class="col-1 columnHead" value="area">Area</div>
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
            sortBy.sortedBy = "";
            page = 1;
            allCountries = response;
            createView(response);
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
document.getElementById("navigation").addEventListener("click", (e)=>{
    console.log(countriesPages);
    e.preventDefault();
    let value = e.target.getAttribute('value');
    if(value === "next"){
      console.log(`Page: ${page}, Value: ${value}`);
      if(page < countriesPages.length){
        page++;
        console.log(countriesPages[page-1])
        displayCountries = countriesPages[page-1];
        populateTable(table , displayCountries);
        sortEventHandler();
      }
    } else if(value === "prev"){
      console.log(`Page: ${page}, Value: ${value}`);
        if(page - 1 !== 0){
          page--;
          console.log(countriesPages)
          displayCountries = countriesPages[page-1];
          populateTable(table , displayCountries);
          sortEventHandler();
        }
    } else if(typeof(parseInt(value)) === "number" && !isNaN(parseInt(value))){
      page = parseInt(value);
      displayCountries = countriesPages[page-1];
      populateTable(table , displayCountries);
      sortEventHandler();
    }
  })
  let sortBy = {
    sortedBy:"",
    name: function(countries){
      if(this.sortedBy === "name"){
        countries = countries.reverse();
      } else {
        countries.sort((a, b) => {
          var name1 = a.name.toLowerCase(); 
          var name2 = b.name.toLowerCase(); 
          if (name1 < name2) { return -1; }
          if (name1 > name2) { return 1; }
          return 0;
        });
        this.sortedBy = "name";
      }
    },
    population: function(countries){
      if(this.sortedBy === "population"){
        countries.reverse();
      } else {
        countries.sort((a, b) => {
          return a.population - b.population; 
        });
        this.sortedBy = "population";
      }
    },
    area: function(countries){
      if(this.sortedBy === "area"){
        countries.reverse();
      } else {
        countries.sort((a, b) => {
          return a.area - b.area; 
        });
        this.sortedBy = "area";
      }
    } 
  }
  function sortEventHandler(){
    console.log("HEY");
    document.getElementById("titles").addEventListener("click", (e)=>{
      console.log(countriesPages);
      e.preventDefault();
      let value = e.target.getAttribute('value');
      switch (value) {
        case "name":
          sortBy.name(allCountries);
          createView(allCountries);
          break;
        case "pop":
          sortBy.population(allCountries);
          createView(allCountries);
          break;
        case "area":
          sortBy.area(allCountries);
          createView(allCountries);
          break;
        default:
          break;
      }
    })
  }
})
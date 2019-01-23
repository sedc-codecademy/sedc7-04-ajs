// Global variables
let navbar = document.querySelector(".navbar");
let weatherIcon = document.getElementById("weatherIcon");
let statsDiv = document.getElementById("stats");
let hourlyDiv = document.getElementById("hourly");
let hourlyTable = document.getElementById("hourlyTable");
let statsNav = document.getElementById("statsNav");
let hourlyNav = document.getElementById("hourlyNav")
let message = document.getElementById("message");

// Functions
function getWeather(cityName) {
//api call
}

// Event Handlers
navbar.querySelector(".btn").addEventListener("click", ()=>{
  console.log("hey");
  let cityName = navbar.querySelector("input").value;
  getWeather(cityName);
})
statsNav.addEventListener("click", ()=>{
  statsNav.parentElement.classList.add("active");
  hourlyNav.parentElement.classList.remove("active");
  statsDiv.style.display = "block";
  hourlyDiv.style.display = "none";
});
hourlyNav.addEventListener("click", ()=>{
  statsNav.parentElement.classList.remove("active");
  hourlyNav.parentElement.classList.add("active");
  statsDiv.style.display = "none";
  hourlyDiv.style.display = "block";
});
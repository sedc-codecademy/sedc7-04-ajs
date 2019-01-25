// console.log("first");
// setTimeout(()=>{
//     console.log("this happens after 3 seconds!");
// }, 0);
// console.log("last");

let handle = setInterval(()=>{
    //alert("HAOS!");
    console.log("HEY");
}, 2000);
document.querySelector("button")
.addEventListener("click", ()=>{
    clearInterval(handle);
})
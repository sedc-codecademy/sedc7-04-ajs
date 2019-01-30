// function sayHi(){
//     alert("Hi!!!");
// };
// $("body").on("click", sayHi)

function startHomework(callback){
    setTimeout(() => {
        console.log("Start HW");
        callback();
    }, 500);
};

function endHomework(){
    function endTime(){
        console.log("15:15");
    }
    startHomework(endTime);
};
endHomework();



$("#btnCancel").on("click",isDirty);
function createDialog(callback) {

    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      buttons: {
        "Confirme": function() {
            if(typeof callback === "function"){
                callback();
            }
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
  };


function isDirty(){
    debugger;
    function clearInput(){
        $("#user, #pass").val("");
    } 
    let inputVal = $("#user, #pass").val();
    if(inputVal != ""){
        createDialog(clearInput);
    }
     
}
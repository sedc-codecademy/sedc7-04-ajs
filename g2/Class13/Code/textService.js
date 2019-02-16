const fs = require('fs');
let file = "test.txt";
module.exports = {
    addText: function(text){
        fs.writeFile(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    appendText: function(text){
        fs.appendFile(file, text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    },
    readText: function(){
        return fs.readFileSync(file, {encoding: 'utf-8'});
    }
}
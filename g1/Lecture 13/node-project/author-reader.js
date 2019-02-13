const fileHelper = require("./file-helper");

// const execute = function () {
//     fileHelper
//         .getJsonFromFile("./authors-list.json")
//         .then(authors => {
//             console.log(authors.length);
//         })
// };

const execute = async function () {
    const authors = await fileHelper.getJsonFromFile("./authors-list.json");
    console.log(authors.length);
};
    

execute();
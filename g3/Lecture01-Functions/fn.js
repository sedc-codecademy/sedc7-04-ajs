function nameOfTheFunction() {
    console.log("nameOfTheFunction");
}


function sumTwoNumbers() {
    return 2 + 2;
}

function sumTwoNumbers2(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

var sum = function (numOne, numTwo) {
    return numOne + numTwo;
}

var sum1 = function sum2(numOne, numTwo) {
    return numOne + numTwo;
}

let getNumber = () => {
    return 5;
}

var n = 5;
function myFunction() {
    var n = 9;

    function decl() {
        console.log(n);
    }

    var expr = function () {
        console.log(n);
    }

    var any = () => {
        console.log(n);
    }

    var cons = new Function('\tconsole.log(n);');

    decl();
    expr();
    cons();
    any();
}

// myFunction();

// nameOfTheFunction();
// console.log(sumTwoNumbers());
// console.log("call to sumTwoNumbers2", sumTwoNumbers2(5,4));
// console.log("call sum var", sum(4,4));
// console.log("call for sum1",sum1(3,4));
// console.log("call getNumberArrowFunction", getNumber());


var newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
},
{
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{
        id: 432534,
        time: 65876586
    }]
},
{
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
},
{
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{
        id: 432534,
        time: 65876586
    }]
}
];

function previewModification() {
    return newReleases.filter(function (video) {
        return video.rating == 5.0;
    })
        .map(function (video) {
            return video;
        });
}

// newReleases.
// console.log(newReleases);
// console.log(previewModification());


Array.prototype.map = function (projectionFunction) {
    let result = [];
    this.forEach(function (item) {
        result.push(projectionFunction(item));
    });
    return result;
}
var nova = ["324", "34223", "423423"];
console.log(nova.map((x) => {
    return x + " " + "broj";
}));

var nizaOdBroevi = [1, 2, 3];
console.log(nizaOdBroevi.map(function (x) {
    return x + 1;
}));

// [[1,2,3],[6,7,8],[10,74,11]].soberigivoedno() -> [1,2,3,6,7,8,10,74,11]
var movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
allVideoIdsInMovieLists = [];
arrayOfBookmarks = [];
movieLists.forEach(function (movieList, index, array) {
    console.log(index, array);
    movieList.videos.forEach(function (video) {
        debugger;
        allVideoIdsInMovieLists.push(video.id);
        if (video.bookmark.length > 0) {
            video.bookmark.forEach((bookmark) => {
                arrayOfBookmarks.push(bookmark.id);
            });
        }
    });
});












console.log("------------------------------------------");

var newArrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < newArrayOfNumber.length; index++) {
//     console.log(newArrayOfNumber[index]);
// }


newArrayOfNumber.forEach(function (value, index, array) {
    console.log(value, index, array);
});

console.log(newArrayOfNumber.reverse());
console.log(newArrayOfNumber.slice(3, 6));
console.log(newArrayOfNumber.splice(4, 3));
console.log(newArrayOfNumber.length);



var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function (element, index, array) {
    return element > 10;
});



var movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
],
    allVideoIdsInMovieLists = [];

movieLists.forEach(function (movieList) {
    movieList.videos.forEach(function (video) {
        allVideoIdsInMovieLists.push(video.id);
    });
});


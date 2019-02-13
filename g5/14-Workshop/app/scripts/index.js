class Plane {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.planeWidth = 128;
        this.planeHeight = 128;
        this.plane;
    }

    renderPlane() {
        let body = document.querySelector("body");

        this.plane = document.createElement('img');
        this.plane.setAttribute('class', 'plane');
        this.plane.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJcqWeQyzVDkJv8WsvY9BbBHKZe114EQwxKxG2MkPR5GsCDCl");

        body.appendChild(this.plane);
    }

    setPlanePosition(coordX, coordY) {
        this.x = coordX - this.planeWidth;
        this.y = coordY - this.planeHeight;

        this.plane.setAttribute('style', `top:${this.y}px;left:${this.x}px`)
    }
}
let plane = new Plane(150, 150);

document.addEventListener('mousemove', function (evt) {
    console.log(evt)
    plane.setPlanePosition(evt.clientX, evt.clientY)
});


plane.renderPlane();


class Asteroid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.asteroid;
        this.createAsteroid();
    }

    createAsteroid() {
        let asteroid = document.createElement('img');
        asteroid.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5NtbK-fF8TPOvcJL2njPkwuM5gYmsM0J2f6ucR3MJonMCqoAU');
        asteroid.setAttribute('class', 'asteroid');
        document.querySelector('body').appendChild(asteroid);
        this.asteroid = asteroid;
        this.updateAsteroidPosition(this.x, this.y)
    }

    updateAsteroidPosition(x, y) {
        this.asteroid.setAttribute('style', `top:${y}px;left:${x}px`);
    }

    moveAsteroid() {
        this.y += 15;
        this.updateAsteroidPosition(this.x, this.y)
    }
}

let asteroids = [];

let getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min)))
    return Math.floor(Math.random() * (max - min))
}
let intervalAsteroids = setInterval(() => {
    let randomInt = getRandomNumber(1, window.screen.width);
    getRandomNumber(0, 10) === 3 ? asteroids.push(new Asteroid(randomInt, 1)) : null;
    asteroids.forEach(asteroid => {
        asteroid.moveAsteroid()
    })
}, 500)
class Plane {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.planeWidth = 128;
        this.planeHeight = 128;
        this.plane;
    }

    renderPlane() {
        let body = document.querySelector('body');
        this.plane = document.createElement('img');
        this.plane.setAttribute('class', 'plane');
        this.plane.setAttribute('src', 'assets/images/plane.png');
        body.appendChild(this.plane);

    }

    setPlanePosition(coordX, coordY) {
        this.x = coordX - this.planeWidth;
        this.y = coordY - this.planeHeight;
        this.plane.setAttribute('style', `top:${this.y}px;left:${this.x}px`)
    }

    fireBullet(x, y) {
        bullets.push(new Bullet(x, y));
    }
}


class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bullet;
        this.createBullet();
    }

    createBullet() {
        let bullet = document.createElement('span');
        bullet.setAttribute('class', 'bullet');
        this.bullet = bullet;
        document.querySelector('body').appendChild(bullet);
        this.updateBulletPosition(this.x, this.y)
    }

    updateBulletPosition(x, y) {
        this.bullet.setAttribute('style', `top:${y}px;left:${x}px;`);
    }

    moveBullet() {
        this.y -= 15;
        this.updateBulletPosition(this.x, this.y);
    }

}

let plane = new Plane(150, 150);

document.addEventListener('mouseup', function (evt) {
    ///fire bullet
    console.log(evt)
    plane.fireBullet(evt.clientX, evt.clientY)
})

let bullet = new Bullet(15, 15)


document.addEventListener('mousemove', function (event) {
    plane.setPlanePosition(event.clientX, event.clientY);
});

plane.renderPlane();


class Asteroid {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.asteroid;
        this.createAsteroid();
    }

    createAsteroid() {
        let asteroid = document.createElement('img');
        asteroid.setAttribute('src', 'assets/images/asteroid.png');
        asteroid.setAttribute('class', `asteroid asteroid-${this.id}`);
        document.querySelector('body').appendChild(asteroid);
        this.asteroid = asteroid;
        this.updateAsteroidPosition(this.x, this.y);
    }
    updateAsteroidPosition(x, y) {
        this.asteroid.setAttribute('style', `top:${y}px;left:${x}px;`);
    }

    moveAsteroid() {
        this.y += 15;
        this.updateAsteroidPosition(this.x, this.y);
    }

    getAsteroidPos() {
        return {
            x: this.x,
            y: this.y
        }
    }

    removeAsteroid() {
        let asteroid = document.querySelector(`.asteroid-${this.id}`);
        asteroid.parentNode.removeChild(asteroid);
    }
}


let asteroids = [];
let bullets = [];

let getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min))
}

function getUniqueTime() {
    return new Date().getTime();
}

function checkIfHit(asteroid, indexAsteroid) {
    bullets.forEach((bullet, indexBullet) => {
        if (asteroid.x - 48 <= bullet.x + 16 && asteroid.x + 48 >= bullet.x - 16 && asteroid.y > bullet.y - 32) {
            asteroid.removeAsteroid();
            asteroids.splice(indexAsteroid, 1);
        }
    });
}

let i = 1;

let intervalAsteroids = setInterval(() => {
    let randomInt = getRandomNumber(1, window.screen.width);
    getRandomNumber(0, 10) === 3 ? asteroids.push(new Asteroid(randomInt, 1, i)) : null;
    asteroids.forEach((asteroid, index) => {
        asteroid.moveAsteroid();
        const {
            x,
            y
        } = asteroid.getAsteroidPos();

        let height = window.screen.height;

        checkIfHit(asteroid, index);

        if (y > height) {
            asteroid.removeAsteroid();
            asteroids.splice(index, 1);
        }


    });
    
    bullets.forEach((bullet, index) => {
        bullet.moveBullet();
        
        if(bullet.y <= 0)
        {
        	bullets.splice(index, 1);
        }
    });

    i++;
}, 150);
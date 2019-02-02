// your code here

const circleFunction = {
    getArea: function () {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter: function () {
        return Math.PI * this.radius * 2;
    }
}

function Circle(radius) {
    this.radius = radius;

    this.getArea = circleFunction.getArea;

    this.getPerimeter = circleFunction.getPerimeter;

}

// this should work

const smallCircle = new Circle(3);
console.log(`The circle with radius ${smallCircle.radius} has a perimeter of ${smallCircle.getPerimeter()}`); // 18.85

const largeCircle = new Circle(10);
console.log(`The circle with radius ${largeCircle.radius} has an area of ${largeCircle.getArea()}`); // 314.15

const circles = Array(10000).fill(0).map((item, index) => new Circle(index));

console.log(circles.map(c => c.getArea()));



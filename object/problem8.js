/*
Write a JavaScript program to calculate circle area and perimeter.
Note : Create two methods to calculate the area and perimeter. 
The radius of the circle will be supplied by the user.
area= pi r square
perimeter= 2 pi r
 */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    const pi = Math.PI;
    return pi * this.radius * this.radius;
  }
  perimeter() {
    const pi = Math.PI;
    return 2 * pi * this.radius;
  }
}

const circle = new Circle(10);
console.log(
  `area of the cicle = ${circle.area().toFixed(2)} and perimeter = ${circle
    .perimeter()
    .toFixed(2)}`
);

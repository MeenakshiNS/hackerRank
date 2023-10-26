/*
5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
 */

 /*
 Approach:

1]Create a JavaScript class to represent a cylinder.
2]In the class, define properties for the radius (r) and the height (h) of the cylinder.
3]Create a method within the class to calculate the volume of the cylinder using the provided formula.
4]Display the volume with four decimal places.
*/

class Cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

     volume() {
        const pi=Math.PI;
        const vol=pi * this.radius*this.radius *this.height
        return vol;
        
    }

}

const cylinder=new Cylinder(5,10);
console.log(`volume of cylinder = ${cylinder.volume().toFixed(4)}`);
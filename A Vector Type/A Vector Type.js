class Vec {
    constructor (_width, _height) {
        this.x = _width
        this.y = _height
    }
    plus (secondVector) {
        this.x += secondVector.x;
      	this.y += secondVector.y;
      	return this;
    }
  	minus (secondVector) {
      	this.x -= secondVector.x;
      	this.y -= secondVector.y;
      	return this;
    }
  	get length (){
      	let magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
      	return magnitude;
    }
}// A vector class that can add two vectors, subtract two vectors, and give the magnitude of the vector.

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
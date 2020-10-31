function Car() {

}

Car.prototype.drive = function() {
  console.log('24miles');
};

let toyota = new Car();

// toyota.drive();

function Rectangle(w, h) {
  this.w = w;
  this.h = h;
}

Rectangle.prototype.area = function() {
  let ar = this.w * this.h;
  return console.log(ar);
}

let rect = new Rectangle(2, 4);
rect.area();
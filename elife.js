var plan = ["############################",
  "#      #    #      o      ##",
  "#                          #",
  "#          #####           #",
  "##         #   #    ##     #",
  "###           ##     #     #",
  "#           ###      #     #",
  "#   ####                   #",
  "#   ##       o             #",
  "# o  #         o       ### #",
  "#    #                     #",
  "############################"];

var directions = {
  "n": new Vector(0, -1),
  "ne": new Vector(1, -1),
  "e": new Vector(1, 0),
  "se": new Vector(1, 1),
  "s": new Vector(0, 1),
  "sw": new Vector(-1, 1),
  "w": new Vector(-1, 0),
  "nw": new Vector(-1, -1)
};

var directionNames = "n ne e se s sw w nw".split(" ");

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (otherVector) {
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
}

function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function (vector) {
  return vector.x >= 0 && vector.x < this.width && vector.y >= 0 && vector.y < this.height;
}

Grid.prototype.get = function (vector) {
  return this.space[vector.x + (vector.y * this.width)];
}

Grid.prototype.set = function (vector, value) {
  this.space[vector.x + (vector.y * this.width)] = value;
}

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function bouncingCritter() {
  this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function (view) {
  if (view.look(this.direction) != ' ') {
    this.direction = view.find(' ') || 's';
  }

  return {type: 'move', direction: this.direction};
}


function elementFromChar(legend, ch){
  if (ch === ' '){
    return null;
  }

  var element = new Legend[ch]();
  element.originChar = ch;
  return element;
}

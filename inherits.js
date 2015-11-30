Function.prototype.inherits = function(superclass) {
  var subclass = this;

  function Surrogate() {}
  Surrogate.prototype = superclass.prototype;

  subclass.prototype = new Surrogate();
  subclass.prototype.constructor = subclass;
};

// Test:
function MovingObject () {};

MovingObject.prototype.explode = function() {
  console.log("moving object exploded!");
}

function Ship () {};
Ship.inherits(MovingObject);

Ship.prototype.explode = function() {
  console.log("ship exploded!");
};

function Asteroid () {};
Asteroid.inherits(MovingObject);

Asteroid.prototype.explode = function() {
  console.log("asteroid exploded!");
};

var spaceship = new Ship();
spaceship.explode();

var bigAsteroid = new Asteroid();
bigAsteroid.explode();

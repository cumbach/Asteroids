(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (attributes) {
    attributes.color = Asteroid.COLOR;
    attributes.radius = Asteroid.RADIUS;
    attributes.vel = Asteroids.Util.randomVec(4);

    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroid.COLOR = "#000";
  Asteroid.RADIUS = 25;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();

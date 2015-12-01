(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (width, height) {
    this.xDim = width,
    this.yDim = height,
    this.addAsteroids();
  };

  Game.NUM_ASTEROIDS = 10;
  Game.DIM_X = 500;
  Game.DIM_Y = 300;

  Game.prototype.addAsteroids = function() {
    this.asteroids = [];
    var pos;
    var asteroid;

    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      pos = [Math.random() * this.xDim, Math.random() * this.yDim];
      asteroid = new Asteroids.Asteroid({ pos: pos, game: this });

      this.asteroids.push(asteroid);
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = Math.abs(pos[0] % this.xDim);
    var y = Math.abs(pos[1] % this.yDim);

    return [x, y];
  };

  Game.prototype.checkCollisions = function () {
    var that = this;

    this.asteroids.forEach(function (asteroid1) {
      that.asteroids.forEach(function (asteroid2) {
        if (asteroid1 !== asteroid2) {
          if (asteroid1.isCollidedWith(asteroid2)) {
            console.log("COLLISION");
            asteroid1.collideWith(asteroid2);
          }
        }
      });
    });
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroid) {
    var index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };

})();

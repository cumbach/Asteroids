(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(attributes) {
    this.game = attributes.game,
    this.pos = attributes.pos,
    this.vel = attributes.vel,
    this.radius = attributes.radius,
    this.color = attributes.color
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var distance = Asteroids.Util.distance(this, otherObject);
    var radiusSum = this.radius + otherObject.radius;
    return radiusSum > distance;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    this.game.remove(this);
    otherObject.game.remove(otherObject);
  };

})();

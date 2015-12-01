(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (width, height) {
    this.game = new Asteroids.Game (width, height);
  };

  GameView.prototype.start = function (canvas) {
    var ctx = canvas.getContext('2d');
    var gameView = this;

    setInterval(function() {
      gameView.game.step();
      gameView.game.draw(ctx);
    }, 20);
  };

})();

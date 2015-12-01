(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (width, height) {
    this.game = new Asteroids.Game (width, height);
  };

  GameView.prototype.start = function (ctx) {
    var gameView = this;
    setInterval(function() {
      gameView.game.moveObjects();
      gameView.game.draw(ctx);
    }, 20);
  };

})();

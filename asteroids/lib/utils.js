(function () {
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (childClass, parentClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  };
})();

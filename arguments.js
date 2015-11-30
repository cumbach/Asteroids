// Summing with arguments

function sum() {
  var summation = 0;
  var nums = Array.prototype.slice.call(arguments);

  nums.forEach(function (num) {
    summation += num;
  });

  return summation;
};

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

// Modified myBind to take arguments

Function.prototype.myBind = function(context) {
  var fn = this;
  var boundArgs = Array.prototype.slice.call(arguments, 1);

  return function() {
    var passedArgs = Array.prototype.slice.call(arguments);
    var allArgs = boundArgs.concat(passedArgs);

    fn.apply(context, allArgs);
  };
};

function Cat(name) {
  this.name = name;
};

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
}

markov = new Cat("Markov");
breakfast = new Cat("Breakfast");

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!

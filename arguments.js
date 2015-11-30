// Summing with arguments

function sum() {
  var summation = 0;
  var nums = Array.prototype.slice.call(arguments);

  nums.forEach(function (num) {
    summation += num;
  });

  return summation;
};

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5));

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

// markov = new Cat("Markov");
// breakfast = new Cat("Breakfast");
//
// markov.says.myBind(breakfast, "meow")();
// // Breakfast says meow!
//
// markov.says.myBind(breakfast)("meow");
// // Breakfast says meow!
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow");
// Breakfast says meow!

// Curry
function curriedSum(numArgs) {
  var nums = [];
  // console.log(numArgs);
  var _curriedSum = function(number) {
    nums.push(number);
    if (nums.length === numArgs) {
      // console.log(nums);
      var sum = 0;
      nums.forEach( function(num) {
        sum += num;
        // console.log(sum);
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}
//
// var sumvar = curriedSum(4);
// sumvar(5)(30)(20)(1);

Function.prototype.curry = function (numArgs) {
  var args = [];
  // var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;

  var _curried = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curried;
    }
  };
  return _curried;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThree.curry(3)(4)(20)(6));//(5));

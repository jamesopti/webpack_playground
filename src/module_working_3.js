// Fix: Invoke function in 2 places.
(function(mod) {
  mod();
})(function() {
  function getMaxSeverity(ax, bx) {
    if (ax === "error") {
      return ax;
    } else {
      return bx;
    }
  }
  function main() {
    var arr = ['hey'];
    for (var i = 0; i < arr.length; i++) {
      console.log(getMaxSeverity('one', 'two'));
    }
    alternate();
  }
  function alternate() {
    console.log(getMaxSeverity('one', 'two'));
  }
  main();
});

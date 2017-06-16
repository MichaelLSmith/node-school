var slice = Array.prototype.slice

function logger(namespace) {

  function inner() {
    //arguments of inner will be what is passed to info()
    //so we need to pass the arguments of inner to the apply call of console
    var args = slice.call(arguments);
    return console.log.apply(null, [namespace].concat(args));
  }
  return inner;
}

module.exports = logger

var slice = Array.prototype.slice

function logger(namespace) {
  return function inner() {
    var args = slice.call(arguments);
    return console.log.bind(null, args)
  }
}


module.exports = logger;

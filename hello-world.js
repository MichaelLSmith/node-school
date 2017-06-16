function upperCaser(input) {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    var output = output.concat(input[i].toUpperCase());
  }
  return output;
}

module.exports = upperCaser;

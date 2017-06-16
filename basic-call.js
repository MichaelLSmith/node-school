function duckCount() {
  // console.log(arguments);
  // args = [].slice.call(arguments);//convert arguments to []
  // var output = args.filter(function(arg) {
  //   return Object.prototype.hasOwnProperty.call(arg,'quack')
  // })
  // console.log('output:',output);
  // return output.length;

  return [].slice.call(arguments)
    .filter(function(arg) {
      return Object.prototype.hasOwnProperty.call(arg,'quack')})
        .length
}

module.exports = duckCount

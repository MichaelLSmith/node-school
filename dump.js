function add(x,y) {
  console.log('x in add:', x);
  console.log('y in add:', y);
  return x + y;
}

function partiallyApply(fn, z) {
  return function(t) {//this is what addTen() looks like. it refers to this function with add()'s first arg predined as 10'. t becomes y in add().
    //in add():
      //t is y
      //z is x
    return fn.apply(null, [z,t]);
  }
}

var addTen = partiallyApply(add,10);

console.log('addTen(20):', addTen(40));




var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info

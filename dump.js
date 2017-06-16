function add(x,y) {
  console.log('x in add:', x);
  console.log('y in add:', y);
  return x + y;
}

function partiallyApply(fn, z) {
  return function(t) {
    fnArgs = [z,t]
    return fn.apply(null, fnArgs);
  }
}

var addTen = partiallyApply(add,10);

console.log('addTen(20):', addTen(40));

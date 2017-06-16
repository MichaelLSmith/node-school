//for recursion, reduce should call itself until the end condition is met.
//reduce will call fn on one item in the array on each call.
//on each call, reduce must define what each arg passed to fn by adjusting the array
//whatever fn returns, reduce makes this accumulator. On the first call, this is inital, but on subsequent calls, it is the return value. But how will it know to use inital only on the first call?

//GENERAL NOTES:
//prev is the accumulator
//the callback does the operation. Reduce controls the flow of the variables.
//on each call: the current item in the array is concatinated or pushed onto the end of accumulator??? Or is this handled by fn??

//Specific Example Notes:
// on first call:
  //reduce args:
    //initial = 0;
  //fn args:
    //accumulator(prev) = 0;
    //curr =  1;
    //index = 0;
    //arr = arr;
//second and subsequent calls:
  //accumulator(prev): return value of fn: 1
  //curr: 2
  //index: 1
  //things that need to change:
    //index must increase by 1 either by altering array and continue using index 0 or by incrementing index by 1.

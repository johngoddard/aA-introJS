Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

let array = [1,2,3,5];
// array.myEach(function(el){
//   console.log(el * 2);
// });


Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

let newArray = array.myMap(function(el){
  return el * 3;
});

// console.log(newArray);

Array.prototype.myInject = function(callback) {
  let accumulator = this[0];
  this.slice(1).myEach(function(el) {
    accumulator = callback(el, accumulator);
  });
  return accumulator;
};

let injectArr = array.myInject(function(el, accumulator){
  return accumulator * el;
});

console.log(injectArr);

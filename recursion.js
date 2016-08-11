function range(start, end){
  if(start > end){
    return [];
  } else{
    return [start].concat(range(start+1, end));
  }
}

// console.log(range(1,1));

function exp1(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return b * exp1(b, n-1);
  }
}

// console.log(exp1(2,4));

function exp2(b, n) {
  if (n === 0) {
    return 1;
  } else if ( n === 1) {
    return b;
  } else {
    if ( n % 2 === 0){
      let temp = exp2(b, n/2);
      return temp * temp ;
    } else {
      let temp = exp2(b, (n-1)/2);
      return b * temp * temp ;
    }
  }
}
// console.log(exp2(2,5));


function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  } else {
    let lastFib = fibonacci(n-1);
    let lastEl = lastFib[lastFib.length - 1];
    let otherLastEl = lastFib[lastFib.length - 2];
    return lastFib.concat([lastEl + otherLastEl]);
  }
}

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));


function binarySearch(arr, target){
  if(arr.length === 0 ){
    return null;
  } else {
    let mid = Math.floor(arr.length/2);


    if (arr[mid] === target){
      return mid;
    } else if(arr[mid] > target){
      return binarySearch(arr.slice(0,mid), target);
    } else{
      let leftIndex = binarySearch(arr.slice(mid+1), target);
      if(leftIndex !== null){
        return mid + 1 + leftIndex;
      }else {
        return null;
      }
    }
  }
}

// console.log(binarySearch([1, 2, 3], 1));
// console.log(binarySearch([2, 3, 4, 5], 3));
// console.log(binarySearch([2, 4, 6, 8, 10], 6));
// console.log(binarySearch([1, 3, 4, 5, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));
// console.log(binarySearch([1, 2, 3, 4, 5, 7], 6));
Array.prototype.bubbleSort = function() {
  let unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < this.length - 1; i++){
      if(this[i] < this[i+1]){
        unsorted = true;
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      }
    }
  }

  return this;
};



function makeChange(value, coins){
  let sortedCoins = coins;
  let result = [];
  while (value >= sortedCoins[0]) {
    value -= sortedCoins[0];
    result.push(sortedCoins[0]);
  }
  // console.log(value);
  if (value > 0) {
    return result.concat(makeChange(value, sortedCoins.slice(1)));
  } else {
    return result;
  }

}
// console.log(makeChange(14, [10, 7, 1]));



function makeChange2(value, coins){
  let sortedCoins = coins;
  let result = [];

  for (let i = 0; i < sortedCoins.length; i++){
    if (value < sortedCoins[i]) {
      continue;
    } else {
      value -= sortedCoins[i];
      result.push(sortedCoins[i]);
      break;
    }
  }
  // console.log(value);
  if (value > 0) {
    let biggestIdx = 0;
    for (let i = 0; i < sortedCoins.length; i++){
      if(value > sortedCoins[i]){
        biggestIdx = i;
        break;
      }
    }
    return result.concat(makeChange2(value, sortedCoins.slice(biggestIdx)));
  } else {
    return result;
  }
}

// console.log(makeChange2(14, [10, 7, 1]));

function makeChange3(value, coins){
  if(value === 0){ return [];}

  let sortedCoins = coins.sort((a,b) => b - a);
  let possibleResults = [];

  for (let i = 0; i < sortedCoins.length; i++){
    let val = value;
    let subResult = [];
    if (val < sortedCoins[i]) {
      continue;
    } else {
      val -= sortedCoins[i];
      subResult = [sortedCoins[i]].concat(makeChange3(val, sortedCoins));
      possibleResults.push(subResult);
    }
  }

  possibleResults.sort((a,b) => a.length - b.length);
  return possibleResults[0];
}

// console.log(makeChange3(14, [7, 10, 1]));


Array.prototype.mergeSort = function(){
  if (this.length <= 1) {
    return this;
  }
  let mid = Math.floor(this.length / 2);
  let leftSide = this.slice(0, mid);
  let rightSide = this.slice(mid);
  return leftSide.mergeSort().mergeArrays(rightSide.mergeSort());
};

Array.prototype.mergeArrays = function(arr) {
  let result = [];

  while (this.length > 0 && arr.length > 0) {
    if (this[0] > arr[0]) {
      result.push(arr.shift());
    } else {
      result.push(this.shift());
    }
  }
  return result.concat(this).concat(arr);
};

// console.log([3,1,6,8,1,3,4,10].mergeSort());


Array.prototype.subSets = function() {
  if (this.length === 0){
    return [[]];
  }
  let currentArray = this;
  let lastSubSet = this.slice(0,this.length-1).subSets();
  let result = [];

  lastSubSet.forEach(function(el){
    result.push(el);

    let temp2 = el.slice(0);
    temp2.push(currentArray.slice(-1)[0]);

    result.push(temp2);
  })

  return result;

};

console.log([1,2,3].subSets());

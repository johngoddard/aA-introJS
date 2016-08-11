Array.prototype.bubbleSort = function() {
  let unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < this.length - 1; i++){
      if(this[i] > this[i+1]){
        unsorted = true;
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      }
    }
  }

  return this;
};

let arr = [4,5,3,6,1,2];
console.log(arr.bubbleSort());

function substrings(word){
  let result = [];
  for(let i = 0; i < word.length; i++){
    for(let j = i +1; j <= word.length; j++){
      let currSub = word.slice(i,j);
      if(result.indexOf(currSub) === -1){
        result.push(currSub);
      }
    }
  }

  return result;
}

console.log(substrings("cat"));
console.log(substrings("moon"));

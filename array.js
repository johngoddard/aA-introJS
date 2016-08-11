const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Array.prototype.myUniq = function (){
  let result = [];

  for(let i = 0; i < this.length; i++){
    if(result.indexOf(this[i]) === -1){
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function(){
  let result = [];

  for(let i = 0; i < this.length - 1; i++){
    for(let j = i+1; j < this.length; j++){
      if(this[i] + this[j] === 0){
        result.push([i,j]);
      }
    }
  }

  return result;
};

Array.prototype.myTranspose = function(){
  let result = [];

  for(let i = 0; i < this[0].length; i++){
    let sub_result = [];
    for(let j = 0; j < this.length; j++){
      sub_result.push(this[j][i]);
    }
    result.push(sub_result);
  }
  return result;
};

let x = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

let y = x.myTranspose();
// console.log(y);



Array.prototype.stockPicker = function() {
  let result = [];
  let maxDiff = 0;

  for(let i =0; i< this.length - 1; i++){
    for(let j = i+1; j < this.length; j++){
      if(this[j] - this[i] > maxDiff){
        maxDiff = this[j] - this[i];
        result = [i, j];
      }
    }
  }
  return result;
};

x = [10, 9, 8, 11, 13, 12];
// console.log(x.stockPicker());


function TowersOfHanoi() {
  this.towers = [[3,2,1],[],[]];
}

TowersOfHanoi.prototype.moveDisk = function(start, end) {
  if(this.towers[start].length === 0){
      console.log("Invalid move");
      return;
  }

  let disk = this.towers[start].pop();
  let endTower = this.towers[end];
  let endDisk = endTower[endTower.length - 1];

  if (endTower.length === 0 || endDisk > disk) {
    endTower.push(disk);
  } else {
    this.towers[start].push(disk);
    console.log("Invalid move");
  }
};

TowersOfHanoi.prototype.gameOver = function(){
  if(this.towers[0].length === 0 &&
      (this.towers[1].length === 3 || this.towers[2].length === 3)){
        return true;
  } else{
    return false;
  }
};

TowersOfHanoi.prototype.play = function () {
  while(!this.gameOver()){
    // console.log("Please enter a move (e.g. 1,2):");
    // let input = readline();
    let game = this;
    rl.on("Please enter a move (e.g. 1,2):", (input) => {
      let move = input.split(",").map(el => parseInt(el));
      game.moveDisk(...move);
      rl.close();
    });

    console.log(game.towers);
  }

  console.log("you win!");
};

// let game = new TowersOfHanoi();
// game.play();
// game.moveDisk(0, 1);
// console.log(game.towers);
// game.moveDisk(0,1);
// console.log(game.towers);

function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
};

let cat = new Cat("gizmo", "Markov");
let cat2 = new Cat("Fido", "Curie");

Cat.prototype.cuteStatement = function(){
  return `Everyone loves ${this.name}!`;
};

Cat.prototype.meow = function(){
  return "meow!";
};


cat2.meow = function(){
  return `MEOW!`;
};

console.log(cat.meow());
console.log(cat2.meow())

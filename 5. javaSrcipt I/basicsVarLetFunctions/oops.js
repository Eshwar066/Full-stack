/*
var bird={
   x:100,
   y:20,
   color:"blue",
   eggs:[1,2,3,4,5]
};


//For loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}


//For Each loop
bird.eggs.forEach(function(idx,val){
    console.log(idx,val);
});
*/


/////////////////////////////////Classes and Objects////////////////////////////

//Another way
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

//new keyword
let mango=new Fruit("sweet","yellow");
let orange=new Fruit("sour","orange");


//One way
var apple={
    taste:"sweet",
    color:"red",
}

//Class Keyword

//class Declartion
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};

//Functions -Declartion,Function Expression

let kiwi = new FruitClass("sour","green");

//class expression

let FruitClass2 =class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};

//Functions -Declartion,Function Expression

let kiwi2 = new FruitClass2 ("sour","green");
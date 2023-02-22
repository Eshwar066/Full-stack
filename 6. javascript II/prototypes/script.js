
let str="adfg"
let num= 233
let bool =true
let arr=[246,54,345,678,987]
let obj={a:10, b:'asdfg'}
let fun= function(){
    console.log('yay!')
}

//if x and y are not primitive 
//x==y : true -> what does this mean?
// this means they are reference to the same object in memory

console.log('=========== types ============')
console.log('typeof String',typeof String)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof object',typeof Object)
console.log('typeof Function',typeof Function)

console.log('============ proto chain ===========')
console.log(str.__proto__.__proto__==obj.__proto__) 
console.log(bool.__proto__.__proto__==obj.__proto__) 
console.log(arr.__proto__.__proto__==obj.__proto__) 
console.log(num.__proto__.__proto__==obj.__proto__) 
console.log(fun.__proto__.__proto__==obj.__proto__) 

//Everything indiretly inherits from the same thing
// that obj is inherited from
//i.e.. in java script, everything is essentially an object

console.log('=============== prototypes=============')
console.log(obj.__proto__==Object.prototype)
console.log(str.__proto__==String.prototype)
console.log(num.__proto__==Number.prototype)
console.log(bool.__proto__==Boolean.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(fun.__proto__==Function.prototype)

//string.prototype inherits from object.prototype.
//typeof object.create(Boolean.prototype)-> ??  

console.log(str.charAt(3)) //-->string
console.log(str.charAt)    //--> function
let str2="asdfghjkkkl"
console.log(str.charAt==str2.charAt) //true bcz both are functions

str.charAt = function() {return 'X'}
console.log(str.charAt(1))
  
//String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc

Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function(){
    console.log('join called on',  this)
    return this.joinOriginal( ...arguments)
}

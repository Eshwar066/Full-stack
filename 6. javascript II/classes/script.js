class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isAdult(){
        return this.age>18
    }
}

let p1=new person('John','22')
let p2=new person('jane','15')

console.log(typeof person) // function; there is no new datatype called 'class'
console.log(p.__proto__ == person.prototype ) //true
console.log(p.__proto__.__proto__ == Object.prototype) //true

function greet(name){
    console.log('Hello', name)
}


function createGreeter(greeting){

    function greet(name){
        //Here we treat name as function
        console.log(greeting, name())
    }
    return greet
}

function getName(){
    return document.getElementById('namebox').value
}

let g1= createGreeter('Good Morning')
let g2= createGreeter('Good Evening')

console.log(typeof g1)

console.log(greet('Eshwar'))
console.log(greet('Sai')) 

console.log(g1('Eshwar'))
console.log(g2('Sai'))


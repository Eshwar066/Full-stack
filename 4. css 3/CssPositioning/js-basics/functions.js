console.log(beta())

function alpha(){
 return "A"   
}

function beta(){
    return "B"
}

let gamma = function(){
    return "C"
}

console.log(beta())
console.log(gamma())

function area(height, width){
    // if(typeof width == 'undefined')
    if(!width){
        return Math.PI * height *height
    }
    return height*width
}

console.log('area 3,4', area(3,4))
console.log('area 4', area(4))

function hello(){
    console.log('hello world '+arguments[0]+arguments[1])
}

hello(1,2)
hello('Arnav','Gupta')
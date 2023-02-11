function a(){
    return 1;
}

console.log(13313, typeof 13313)
console.log(234234.5356, typeof 234234.5356)
console.log('a' ,typeof 'a')
console.log("aasdfgh", typeof "aasdfgh")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)
console.log(a ,typeof a)
console.log(a() ,typeof a())

let b=1
console.log(b()) 
//we get run time error, bcz b is not a fn. 

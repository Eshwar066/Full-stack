function Outer(arg1){
    let var1=10

    function inner(arg2){
        let var2=20

        console.log(arg1,var1,arg2,var2)
    }
    return inner
}

let x=Outer('param1')

//typeof x =='function

x('param2')
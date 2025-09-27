// function sum(6,7)
// {
//     sum=a+b
// console.log(sum)
// }


// function subtract(a,b)
// sum=a-b

// function multiply(a,b)
// sum=a*b

// function division(a,b)
// sum=a/b

// let num1=prompt('By Enter Value')
// let num2=prompt('By Enter Value')
// sum(num1,num2);

// defined function
// function getuservalue(a,b)
// {
//     sum=a+b
// console.log(sum)
// }
// getuservalue(6,7)
// function getuservalue(){
// let num1 = prompt('1st value')
// let num2=prompt('2nd value')
// let operator=prompt('enter operator')
//  if(operator=='+')
//  {
//     sum(num1,num2)
//  }else if(operator=="*")
//  {
//     sum(num1,num2)
//  }else{
//     console.log('Invalid operator')
//  }

// }


// function sum(c,d){
//    let result=c+d
//    console.log('Sum'+result)

// }
// sum();
// function multiplcation(c,d){
//     let result=c*d
//     console.log('Ans'+result)
// }

// function, call , pass value, place, condition............statement to get value, add or multiply

function getuservalue()
{
let num1 = prompt('1st value')
let num2=prompt('2nd value')
let operator=prompt('enter operator')

if(operator==='+')
{
    sum(num1,num2)
}else if(operator==='*')
{
    multiplication(num1,num2)
}else{
    console.log('Error')
}

}
getuservalue()
function sum(a,b){
    let result=a+b
    console.log('Sum'+result)
}

function multiplication(a,b){
    let result=a*b
    console.log('Ans'+result)
}


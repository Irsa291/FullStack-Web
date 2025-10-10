// variable declare........var used for globally or multiple page , const reamins same, let in one page 

let name='Irsa'
console.log(name)
name="Malaika"
console.log(name)

// get value from user

// let age=prompt('Enter your age')
// if(age<18)
// {
//  console.log('U r not eligible for license')
// }else{
//   console.log('U r eligible')
// }

// condition if.....if(), if else.......if(){}else{} , nested if else .......if(){if(){if(){}else{}}else{}}else{}
// nested if else
    let adminpass='123'
let studentcourse = 'English'
    if (adminpass==='123')
        if(username='Irsa'){
            console.log('U r succesfully login')
            if(studentcourse==='Math')
            {
                console.log('yahooooo')
            }else{console.log('Oh nooooo')}
        }else
        {
            console.log('U enter wrong name')
        }

        // function declare

function addcourse(coursename,grade,sec){
console.log('Course is successfully added ' + coursename + '. Course grade ' + grade)
}
function updatecourse(){

}
function deletecourse(){

}
// function define
addcourse('Math',6, 'A')

// loop....for , while, do while

// for loop
// for(define,cond, inc/dec, ){}
// for(let j=0, j<=20, j++){
// console.log('khirna')}

// while loop
i=0
while(i<=5)
{
    console.log('JS')
    i++;
}

// do while

function getuservalue(){

}
do{
getuservalue()
}
while(tpin===1234){

}

// atm machine asking for pin untill correct

// take a pin frpm user by making fnc then check the user enter the correct pin untill it match to correct pin

// break...terminate, continue
// for off
// for each

// push:used to add value in array----------from last
let fruits=['Mango','Apple','Cherry']  //created
console.log('before executing '+fruits.length)
console.log(fruits) //read
fruits.push('Orange')  //update
console.log('after executing '+fruits.length)
console.log(fruits)
// ---crud mean to (create , read, update , delete)

//pop : used to remove element from last(LIFO)-----------from last
fruits.pop([1])
console.log(fruits)
fruits.pop([1])
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.pop()
console.log(fruits)
// unshift: Enter or add value -----------from start(FIFO)
let book=['Math','Eng','Sci']
console.log(book)
book.unshift('SST')
console.log(book)

// shift: Remove value -----------from start(FIFO)
book.shift('Math') //cut 1st element even we not enter anything
console.log(book)
// slice: return a small portion of array that we required
let shapes=['Triangle','Square','Cube','Star']
console.log(shapes)
console.log(shapes.slice(1,3))
console.log(shapes.slice(0,2))

// spli
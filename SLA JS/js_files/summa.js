// 1. declare a variable with let const examples.
let num=10;
{
    console.log(num)
}

const course=['java','python','javascript']
{
    console.log(course)
}

// 2. diff btw == and === with example.
// == eg:
let a=10;
let b=10;
if(a==b){
console.log('true')
}
else{
console.log('false')
}
// === eg:
let i=10;
let j='10';
if(i===j){
console.log('true')
}
else{
console.log('false')
}

// 3. how will you declare your control statement.
// syntax
// if(consition){
// print statement
// }
let age=10;
if(age<4 || age>8){
    console.log('age is'+''+age)
}
else{
    console.log('invaild age')
}

// 4. do a program of calculater with arithmetic operator.
let number=20;
if(num<15 && num<=20){
    console.log('true')
}
else{
    console.log('false')
}

// 8. syntax for forloop print='artificial' string

let str=['artificial']; 
for(let i=str.length-1;i>=0;i--) 
{ 
    console.log(str[i]) 
}

// 9. reverse a for loop from 50 to 1.
let no=50;
    for(let n=no; n>=0 ; n--){
        console.log(n)
    }

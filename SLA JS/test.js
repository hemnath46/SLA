// 1.check the password
let password = 16;
let PASSWORD = 16;
if (password == PASSWORD) {
    console.log('password is correct')
}
else {
    console.log('password is wrong')
}

// 2. find the exact term='admin' with multiple OR statements
let A = 'admin';
let B = 'leader';
let C = 'admin';
if (A == B || A == C || B == C) {
    console.log('admin')
}
else {
    console.log('incorrect')
}

// 3.print even num
let number = 10;
// 0 is a remainder 
if (number % 2 == 0) {
    console.log('even num')
}
else {
    console.log('odd num')
}

// 4.print the given str is num or string.
let print = '2003';
let r = 'str';
if (r == 'str' && print == '2003') {
    console.log('s')
}
else {
    console.log('h')
}

// 5.if else elseif statement.
let first_name = 'hemnath';
if (first_name == 'joe') {
    console.log('the first_name is' + ' ' + first_name)
}
// in else if we can give many condition
else if (first_name == 'hem') {
    console.log('the first_name is' + ' ' + first_name)
}
else if (first_name == 'hemnath') {
    console.log('the first_name is' + ' ' + first_name)
}

// 6. marks=65
let mark = 65;
if (mark >= 70 && mark < 70) {
    console.log('the student mark is' + '' + mark)
}
else if (mark > 80 && mark >= 85) {
    console.log('B')
}
else if (mark <= 65 && mark < 40) {
    console.log('c')
}

// looping statement for no
for (let i = 0; i < 10; i++) {
    console.log('print i value is' + ' ' + i)
}
// for string
str = 'javascript';
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}





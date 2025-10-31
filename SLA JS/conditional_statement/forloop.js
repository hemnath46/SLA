// flow control statement:
// break,continue
// each execution called as iteration
// break : terminate the loop execution,
// continue : pause the statement further statement will get executed

// continue
// for(let i=0;i<=5;i++){
//     console.log(i)
//     if(i==3)
//         {
//         continue;
//     }
// }

// continue
// 3 will be skip
// for(let k=0;k<=5;k++){
//     if(i==3)
//      continue;
//     {
//         console.log(k)
//     }
// }
// break
// for(let j=0;j<=5;j++){
//     console.log(j)
//     if(j==3){
//         break;
//     }
// }

// difference btw == and ===
// a=10;
// b=20;
// a==b;
// 10==20;
// == will check the only value
// x=10;
// y='10';
// x===y;
// ===will check the value and datatype
// true
// == : value and the datatype the value
// === : strict

// == example
let x=10;
let y=10;
if(x==y){
    console.log('let value and datatype are same')
}
else{
    console.log('mismatch of both')
}

// === example
let a=10;
let b='10';
if(a===b){
    console.log('let value and datatype are same')
}
else{
    console.log('mismatch of both')
}
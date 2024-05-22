// let makrs = 95;

// if(makrs>90){
//     console.log(1500)
// }
// if(makrs>75){
//     console.log(1000)
// }
// if(makrs>60){
//     console.log(500)
// }
// if(makrs>50){
//     console.log(100)
// }

// 2 types loops

// 1 Entery control loops (for,while)
// 2 Exit control loops (do-while)

// let i = 0;

// do{
//     console.log("Hello Java Script")

// }while(i==2)

// let i = 0;

// while(i<=100){
//     console.log("I am Execute")
//     i++;
// }

// for(let i = 0 ; i<=1 ; i--){
//     console.log(i)
// }

// let num = 1634;
// let sum = num ;
// let check = num;
// let counter = 0;
// while (num != 0) {
//   let rem = num % 10;
//   num = parseInt(num / 10);
//   counter++;
// }
// let x = 0;
// while (sum!=0){

//     let rem = sum%10;
//     x = x + rem**counter;
//     sum = parseInt(sum/10);
// }

// if(check==x){
//     console.log("This is armstrong no")
// }
// else{
//     console.log("This is not armstrong no")
// }

// write a java script program to print n fibonaci series

let num = 6;
let flag = 0;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = 1;
  }
}
if(flag==0){
    console.log("Prime")
}
else{
    console.log("Not Prime")
}

// n prime numbers 
// n armstrong numbers

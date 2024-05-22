// let a = 10;
// let b = 20;
// let c = 4;
// let d = 2;
// let e = 6;
// let f = 3;

// console.log(a+b)
// console.log(c-d)
// console.log(a*b)
// console.log(e/f)

// function add(a,b){
//     console.log(a+b)
// }

// function minus(a,b){
//     console.log(a-b)
// }

// function mul(a,b){
//     console.log(a*b)
// }

// function divide(a,b){
//     console.log(a/b)
// }

// add(10,20)
// minus(10,20)
// mul(10,20)
// divide(10,20)
// minus(4,2)

// function add(a,b){
//     return a+b
// }

// // console.log(add(10,20))
// let ans = add(10,20)
// console.log(ans)

// function add(a,b=50){
//     return a+b
// }
// let ans = add(10)
// console.log(ans)

// write a function to print n prime numbers

// function PrimeNotPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return 1
//   }

//   return 0;
// }

// let ans = PrimeNotPrime(6);

// if(ans==0){
//     console.log("Prime Number")
// }
// else{
//     console.log("Not Prime Number")
// }

// function PrimeNotPrime(n) {
//   for (let i = 1; i < n; i++) {
//     let flag = 0;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         flag = 1;
//       }
//     }
//     if (flag == 0) {
//       console.log(i);
//     }
//   }
// }

// PrimeNotPrime(100);

// function Output(){

//     return 10,20,3;
// }

// let ans = Output()
// console.log(ans)

// function ArmstrongNumber(n){
//     let temp = n;
//     let freq = 0;
//     while(temp!=0){
//         temp = parseInt(temp/10);
//         freq++;
//     }
//     let sum = 0;
//     while(n!=0){
//         let rem = n%10;
//         sum = sum + rem**freq;
//         n = parseInt(n/10);
//     }

//     return sum;
// }

// let ans = ArmstrongNumber(1648);
// console.log(ans)

// (function(){
//     console.log("Hello I am ")
// }())

// let a = function() {

//     return 10;
// };

// console.log(a())

// (()=>{
//     console.log("Hello")
// })()

// let a = (x,y)=>x+y

// console.log(a(10,20))

// function output(){
//     console.log("Hello")
// }

// output()

// (function(a,b){
//     console.log(a+b)
// })

// (function(a,b){
//     console.log(a-b)
// })

// let a = function(a,b){

//     return a+b
// }

// let b = function(){
//     console.log("Hii")
// }

// console.log(a(10,20))
// b()

// (()=>{
//     console.log("Hello Arrow Function")
// })()

// let a = (x,y)=>x+y

// console.log(a(10,20))

// let strong = (n) => {
//   let sum = 0;
//   while (n != 0){
//     let fact = 1;
//     let rem = n % 10;
//     for (let i = rem; i >= 1; i--) {
//       fact *= i;
//     }

//     sum += fact;
//     n = parseInt(n / 10);
//   }

//   return sum;
// };

// let ans = strong(40585);
// console.log(ans);

// let no = 54321;
// let last = no%10;
// let first = 0;
// let freq = 0;
// while(no!=0){

//     first = no%10;
//     freq++;
//     no = parseInt(no/10)
// }

// console.log(first)
// console.log(last)
// console.log(freq)


// let evenodd = (n)=>{
    
//      if(n%2==0){
//         return 0
//      }
//      else{
//         return 1
//      }
// }

// let ans = evenodd(5)
// if(ans==0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }
// console.log(ans)


// let a = 112222;
// let no0 = 0;
// let no1 = 0;
// let no2 = 0;

// while(a!=0){

//     let rem = a%10;

//     if(rem==0){
//         no0++;
//     }
//     else if(rem==1){ 
//         no1++;
//     }
//     else if(rem==2){ 
//         no2++;
//     }

//     a = parseInt(a/10);
// }

// console.log("1 :",no1)
// console.log("2 :",no2)
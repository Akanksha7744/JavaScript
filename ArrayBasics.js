/*let fr=[2,4,5,6,8];
console.log(fr);
let a1=[2,"Harry",false];
console.log(a1);*/

//Arrays Mthods
//toString

let num = [1, 2, 34, 4];
let b = num.toString();
console.log(b, typeof b);

//join
let c = num.join("_");
console.log(c, typeof c);

//pop
//let r= num.pop();
//console.log(num,r);

//push
//num.push(10);
//console.log(num);

//shift
let r = num.shift();
console.log(r, num); //remove element start of the Array

//unshift
let r1 = num.unshift(22);
console.log(r, num); //add element to beginning of array

//Delete Method
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log(num.length);
//delete num1[0];
//console.log(num1.length);
//----------------------------------
//concat
let a2 = [11, 12, 13, 14, 15, 16, , 17, 18, 19];
let a3 = [21, 22, 23, 24, 25, 26, , 27, 28, 29];
let newArray = num1.concat(a2, a3);
console.log(newArray);
console.log(num1, a2);
// console.log(2 == "2");
// console.log("2" === 2);
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }
//
// what will output?
//
// 4. Write a for Loop
// for(let i = 0; i < 5; i++){
//   console.log(i)
// }
//
// 5.
// console.log(false == "0");
// console.log(false === "0");
//
// 6.Array Manipulation like adding accessing array, adding elements etc.
// const dragons = ["ice dragon", "fire dragon", "lightning dragon"];

// const fireDragon = dragons.map((dragon) => `this is a ${dragon}`);
//   fireDragon;
// }
// dragons.push("wind Dragon");
// console.log(dragons);
// dragons.pop();
// console.log(dragons);
// dragons.unshift("Earth Dragon");
// console.log(dragons);
// dragons.shift();
// console.log(dragons);

// while (dragons.length > 0) {
//   dragons.pop();
// }
//
// console.log(dragons);
// const string = "Hey I am a string that contains a string";
// console.log(string.split(" ").join(" "));

// let bar = null;
// console.log(typeof bar === "object" && bar !== null);
// (function () {
//   var a = (b = 3);
//   a;
//   b;
// })();
// a;
// b;

// const a = 'sdf' * 5;
// console.log(Number.isNaN(a));
// let a = "34";
// console.log(Number.isInteger(a));

// const sum = (x) => (y) => x + y;
// function sum(x) {
//   return function (y) {
//     return x + y;
//   };
// }
//
// console.log(sum(8)(1));
//
// var = john {
//   name: 'john',
//   yearOfBirth: 1994,
//   job: 'Dev'
// }
//
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   this.calcAge = () => {
//     console.log(2020 - this.yearOfBirth);
//   };
// };
//
// var john = new Person("john", 1994, "Dev");

//object.create

// var person = {
//   calcAge: ()=> 2020 - this.yearOfBirth;
// }
//
// var john = Object.create(person);
//
// john.name = 'john';
// john.yearOfBirth = 1994;
// john.job = 'Dev'
//
// var jane = Object.create(person, {
//   name: { value: 'john'},
//   yearOfBirth :{ value: 1994},
//   job: { value: 'dev'}
// })

/*
implicite binding
explicit binding
new binding
window binding
*/

// Implicit Binding: this points to the left of the Dot at call time

// var me = {
//   name: "Jamal",
//   age: 25,
//   sayName: function() {
//     console.log(this.name);
//   }
// };

// var sayNameMixin = function(obj) {
//   obj.sayName = function() {
//     console.log(this.name);
//   };
// };
//
// var me = {
//   name: "Jamal",
//   age: 25
// };
//
// var you = {
//   name: "Katherine",
//   age: 25
// };
//
// sayNameMixin(me);
// sayNameMixin(you);
//
// me.sayName();
// you.sayName();

// Explicit binding: call , apply , bind

// var sayName = function(l1, l2, l3) {
//   console.log(
//     "My name is " + this.name + " i know " + l1 + ", " + l2 + ", " + l3
//   );
// };
//
// var stacy = {
//   name: "stacy",
//   age: 34
// };

// var languages = ["java", "python", "c++"];
// sayName.call(stacy, languages[0], languages[1], languages[2]);
// call() is imediatly invoked allows you to provide a context for this and add other arguments if you want
// sayName.apply(stacy, languages);
// apply()  the same as .call except you pass in  your extra arguments as an array
// sayName.bind(stacy, languages[0], languages[1], languages[2]);
// bind() is the same as call but it is not imediatly invoced,you  can store it in varibles, it creats a new  function.

// new binding
// var Animal = function(color, name, type) {
// a new obj is created behind the scenes and the this keyword is attached to that obj
// this.color is the color of the new object being set to the color getting passed in
// this.color = color;
// this.type = type;
// this.name = name;
// };

// var zebre = new Animal("grey", "marty", "zebra");

// window binding

// var sayAge = function() {
//   console.log(this.age);
// };
//
// var me = {
//   age: 25
// };
//
// window.age = 25;
// sayAge();

/// functions

// function declaration

// fucntion add (x,y) {
//   return x + y;
// }

// function expression
//
// var add = function (){
//     return x + y;
// }
//
// var ad = (a ,y ) => {
//   return a + y;
// }
//
//
// users.map((user) =>{
//   return user.id;
// } );
//
// users.map(user) =>{
//   return user.id;
// } );

//
// const dog = ()=>consoel.log('dog', dogy) || {
//   console.log(dogy)
// }

// function logMe(outer) {
//   function inner(inner) {
//     return outer * inner;
//   }
// }
//
// logMe();

// const data;
//
// fetch('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODYyN30')
// .then((res)=> res.json())
// .then(info => data = info; )

// let image = document.querySelector('[src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/0908-Holiday-decor-dsktp-4.png" ]');
//
// let image2 = document.querySelector('[srcset="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/0908-Holiday-decor-dsktp-4.png" ]');
//
// image.src = 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODYyN30'
//
// image2.srcset = 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2ODYyN30'

// let price = document.querySelectorAll('[class= "price__numbers"]');
// price.innerHTML = 1000;
//
// [...price].forEach($=> {
//    $.innerHTML = '$100.97';
// })

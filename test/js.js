// null, undefined, 0, false, '', NaN, - FALSY

// true
const fetch = require("node-fetch");
// const mymodule = require("./mymodule");
// import mymodule from "./mymodule";
let log = console.log;

// function makeAdder(x) {
//   return function add(y) {
//     return x + y;
//   };
// }
//
// const add5 = makeAdder(5);
// add5(2);
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("failed");
//   }
// });
//
// p.then((message) => {
//   log(`this is then ${message}`);
// }).catch((err) => {
//   log(`this is catch ${err}`);
// });

// log(p);
// function makeReq(location) {
//   return new Promise((resolve, reject) => {
//     if (location === "Google") {
//       resolve("Google says hi");
//     } else {
//       reject("We can only talk to Google");
//     }
//   });
// }
//
// function proccessReq(res) {
//   return new Promise((resolve, reject) => {
//     log("Proccessing response");
//     resolve(`Extra info ${res}`);
//   });
// }

// makeReq("Google")
//   .then((res) => {
//     log(`response recived `);
//     return proccessReq(res);
//   })
//   .then((pRes) => log(pRes))
//   .catch((err) => log(err));

// async function doWork() {
//   try {
//     const res = await makeReq("Google");
//     log(`response recived `);
//     const proccessRes = await proccessReq(res);
//     log(proccessRes);
//   } catch (err) {
//     log(err);
//   }
// }
//
// doWork();

// fetch async await

// const fetchTodo = async () => {
//   try {
//     const data = await (
//       await fetch("https://jsonplaceholder.tpicode.com/todos")
//     ).json();
//     log(data);
//   } catch (e) {
//     log("errr");
//   }
// };
//
// log(fetchTodo());

// const name = "jamal";
// function logName() {
//   setTimeout(() => {
//     log(name);
//   }, 2000);
// }
//
// logName();

// log(mymodule);

// const obj = {
//   name: "jamal",
//   sayName: () => {
//     log(this.name);
//   },
//   say: function () {
//     log(this.name);
//   },
// };

// obj.say();
// obj.sayName();

// classes

// class Anime {
//   constructor(name, type, power) {
//     this.name = name;
//     this.type = type;
//     this.power = power;
//     this.points = 0;
//   }
//
//   attack = () => {
//     log(`${this.name} has attacked with ${this.power}`);
//   };
//   updatePoints() {
//     this.points++;
//     log(`${this.name} just leved up to by ${this.points} points`);
//     return this;
//   }
// }
//
// let naruto = new Anime("naruto", "action", "9tails");
// let dbz = new Anime("gocu", "action", "energy");
//
// log(naruto.updatePoints().updatePoints());
// log(dbz.updatePoints().updatePoints());
//
// class WorldTrigger extends Anime {
//   constructor(name, type, power, trigger = "basic") {
//     super(name, type, power);
//     this.trigger = trigger;
//   }
//   triggers() {
//     log(this.trigger);
//   }
// }
//
// let osumo = new WorldTrigger("osumo", "action", "stratigy", "escudo");
//
// log(osumo.triggers());
// log(osumo.triggers());

/// for of looop

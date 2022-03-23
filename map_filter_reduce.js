//Map

// let a = [1, 3, 4, 5];

// let x = a.map((value) => { //the values are above arrays
//   return value + 1;
// });
// // console.log(x);
// console.log(a, x);

//Filter

// let a1 = [1, 3, 4, 5,6,7,10,18];

// let x1 = a1.filter((value) => { //the values are above arrays
//   return value > 5;
// });
// // console.log(x);
// console.log(a1, x1);

//This concept is used for searching purposes in an application

// let a1 = ['A','B','C','D'];

// let x1 = a1.filter((value) => { //the values are above arrays
//   return (value>='C');
// });
// // console.log(x);
// console.log(a1, x1);

//Map
let a1 = [1, 3, 4, 5];

let x1 = a1.reduce((value1, value2) => {
  //the values are above arrays
  return value1 + value2;
});
// console.log(x);
console.log(a1, x1);

//The JavaScript language

//type Conversion
// let str = "123";
// // alert(typeof num); // string

// let num = Number(str); // becomes a number 123

// alert(typeof num);

//Loops
//for
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//While
// let i = 0;
// while (i <= 9) {
//   i++;
//   console.log(i);
// }

//Do while
// let name="tahir";
// let i = 0;
// do {

//   i++;

// } while (i <= 9);

// alert(name);
// alert(i);

//Basic operators, maths

// let x=1;
// x=-x;

// let x=5;
// let v="yes";
// let y=10;
// let x = ++y;
// let counter = 0;
// counter++;
// console.log(counter)
// ++counter;
// alert();

//Switch
// let arg = prompt("Enter a value?",45);
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }

// let isBoss = confirm("Are you the boss?");

// alert( isBoss );

// alert( 'Z' > 'A' );
// function showMessage() {
//     alert( 'Hello everyone!' );
//   }

//   showMessage();

// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }

//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?");
// let sayHi = function() {
//     alert( "Hello" );
//   };

//   sayHi()

// let sum = (a, b) => a + b;
// alert(sum(10,20));

// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
// 'Do you agree?',
// () => console.log('You agreed'),
// () => console.log('You interrupted execution'),
// );

let age = 20;

let vote = age >= 18 ? "can vote" : "fuck off";
alert(vote);

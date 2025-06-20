
function greet(params) {
  console.log("Good Afternoon")
}
greet();

(function greet(params) {
  console.log("Good Afternoon")
})()

// function add(a, b) {
//   console.log(a + b);
// }
// add(6, 4);

// function add(a, b) {
//   return a + b;
// }
// let r = add(6, 4);
// console.log(r);

function sub(params) {
  // console.log(arguments)
  console.log(arguments[0])
}
sub(5, 4);
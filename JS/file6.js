// Hoisting
// greet();
// function greet() {
//   console.log("Hello")
// }

// x = 10
// console.log(x)
// var x

// const greet = 10
// console.log(greet)

// const greet = () => { console.log("Hello") };
// greet()

// const add = (a, b) => {
//   console.log(a+b)
// }
// add(6, 4)

const add = (...args) => {
  console.log(args)
}
add(3, 4, 5, 6, 7);
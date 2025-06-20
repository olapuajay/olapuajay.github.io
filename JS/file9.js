// const score = [2, 3, 6, 8, 4];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const score1 = [7, 8, 9];
// const newScore = [...score, ...score1];
// console.log(newScore)


// const cart = {
//   1: 5,
//   5: 3,
// };
// const newCart = ({...cart, 2: 9})
// console.log(newCart)


const products = [
  {id: 1, name: "product-1", price: 25},
  {id: 2, name: "product-2", price: 55},
  {id: 3, name: "product-3", price: 76},
];
let cart = {};
function addToCart(id, quan) {
  cart = { ...cart, [id]: quan };
}
addToCart(1, 4)
addToCart(4, 7)
console.log(cart)
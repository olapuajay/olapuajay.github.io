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

const score = [2, 1, 7, 5, 3]
// score.forEach((value) => {
//   console.log(value)
// })
//  score.map((value) => {
//   console.log(value);
// });
// const newScore = score.map((value) => {
//   return value > 2;
// });
// console.log(newScore);
const newScore = score.filter((value) => {
  return value > 2;
});
console.log(newScore);
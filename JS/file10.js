let cart = {};
const products = [
  { id: 1, name: "product 1", price: 25 },
  { id: 2, name: "product 2", price: 50 },
  { id: 3, name: "product 3", price: 75 }
];
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
function increment(id) {
  cart = { ...cart, [id]: cart[id] + 1 }
}
function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 }
}
// console.log('Lists of products', products);

// Adding products to cart;
addToCart(1)
addToCart(2)
console.log(cart)

increment(1)
console.log(cart)

increment(2)
increment(1)
console.log(cart)

decrement(1)
console.log(cart)

increment(3)
increment(3)
console.log(cart)

increment(2)
increment(2)
increment(2)
increment(2)
increment(2)
console.log(cart)

products.map((value) => {
  cart[value.id] && console.log(`${value.id} - ${value.name} - ${value.price} -- ${cart[value.id]} -- $${value.price * cart[value.id]}`);
})
const total = products.reduce((sum, value) => {
  return sum + value.price * (cart[value.id] ?? 0);
}, 0)
console.log(`Order value - ${total}`)
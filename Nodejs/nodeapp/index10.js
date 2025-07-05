const stName1 = process.argv[2] || "John"
// const stName2 = process.argv[3] || "John"
// console.log(`Hello ${stName1} and ${stName2}`);

import express from 'express'
const app = express();

let port = process.argv[3] || 9000

app.listen(port, () => {
  console.log(`${stName1} - server running on port ${port}`)
});
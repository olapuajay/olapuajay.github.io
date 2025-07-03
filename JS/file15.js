// JSON
const student = '{ "name": "Ajay", "age": 20 }';
const obj = JSON.parse(student)
console.log(obj.name)
console.log(obj)
console.log(JSON.stringify(obj))
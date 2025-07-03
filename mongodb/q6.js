db.employees.find(
  {salary:{$gt:35000}}, 
  {_id: 0, name: 1}
).limit(2).skip(1)

db.employees.find(
  [{salary:{$gt:35000}}, {department: "IT"}], 
  {_id: 0, name: 1}
)
db.employees.aggregate([
  {$match:{salary: {$gt:35000}}},
  {$project: {name: 1, salary: 1}}, 
  {$sort: {name: 1}},
])

db.orders.insertOne({ empId: ObjectId('685bc8b5bd59e205ff748a61'), orderValue: 1200 })

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    },
  },
])

db.employees.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    },
  },
  {$unwind: "$orders"},
  {$project: {name: 1}}
])


db.employees.aggregate([
  {$match: {salary: {$gt: 2000}}},
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    },
  },
  {$unwind: "$orders"},
  {$project: {name: 1, "orders.orderValue": 1}},
])

db.empCountry.insertMany([
  { empId: ObjectId('685bc8b5bd59e205ff748a61'), countryValue: "IND" },
  { empId: ObjectId('685bc8b5bd59e205ff748a62'), countryValue: "USA" },
  { empId: ObjectId('685bc8b5bd59e205ff748a63'), countryValue: "UK" },
  { empId: ObjectId('685bcbb5bd59e205ff748a64'), countryValue: "AUS" },
  { empId: ObjectId('685bcfcc86f345979908c3c9'), countryValue: "ENG" },
])

db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "empCountry"
    }
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders"
    }
  },
])



db.employees.createIndex({"email": 1})

db.employees.getIndexes()

db.employees.dropIndex("email_1")

db.employees.find({email: "virat@gmail.com"}).explain("executionStats")
use schoolDB

db.students.insertOne({
  name:'hema',
  age:22,
  city:'Vellore'
})

db.students.insertMany(
  [
    {
       name:'hema',
  age:22,
  city:'Vellore'
    },
    {
      name:'kamu',
      age:21,
      city:'Vellore'
    },
    {
      name:'dhanush',
      age:22,
      city:'Vellore'
    },
    {
      name:'puli',
      age:22,
      city:'Vellore'
    },
    {
      name:'jai',
      age:21,
      city:'Vellore'
    }
    ])
    
    show collections
db.students.find()
db.students.find().pretty()
db.students.findOne({age:25}).pretty()
db.students.find({age:{$gt :25}}).pretty()

db.students.find(($and :[{city:'chennai'}, {age :{$lte: 24}}]))


<!-- comparison operators: -->
    >    $gt 
    >=   $gte
    <    $lt
    <=   $lte
    =    $eq
    !=   $ne
    value in array   $in 
    not in array     $nin
    //find
    db.students.find()
    db.students.find().pretty()

<!-- Logical opearators -->

&&   -- $and -- $and [{},{}]
||   -- $or -- $or[{},{}]

       db.students.find({
              $and: [{age: {$gt :25 }}, {city : 'chennai'}]
       }).pretty()

       db.students.find({
      $or : [{age :23}, {name:'manu B'}]
       }).pretty()

  7.update

  8.delete doc

  deleteOne
  deleteMany

  9.Regex
  
  $regex

    1.$regex : 'A'
    2.$regex : '^A'
    3.$regex : 'A$'
    4.$regex : 'A'{$options : 'i'}

Aggregate - operations
match
group
sort
project

db.students.aggregate(
  [
    {
      $match : {city : 'vellore'}
    },
    {
      $group : {_id : "$age"}, total : {$sum : 1}
      $group : {_id : "$age"}, total : {$avg : 1}
    }
  ]
)

mongoose quaries
  1.friendly()
  2.friendlyAndUpdate()
  3.friendlyAndDelete()
  4.
const MongoClient = require('./../../../../nodeJS/node-v14.15.4-win-x64/node_modules/mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  console.log(21);  
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { id:1,name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

console.log(321);
const config = require('./dbconfig.json');
console.log(config.password);
console.log(config.hostname);
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(url);
const { MongoClient } = require('mongodb')
const client = new MongoClient(url);
const db = client.db('test');
const obj = {data: "3.14159", ID: "123456789"};
const collection = db.collection('test_collection');

client
  .connect()
  .then(() => db.command({ping:1}))
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});

collection.insertOne(obj);

// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });
const config = require('./dbconfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
const { MongoClient } = require('mongodb')
const client = new MongoClient(url);
const db = client.db('startup');

const collection = db.collection('test_collection');

client
  .connect()
  .then(() => db.command({ping:1}))
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});


// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });
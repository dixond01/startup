const config = require('./dbconfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
const { MongoClient } = require('mongodb')

const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');


client
  .connect()
  .then(() => db.command({ping:1}))
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser (email) {
  return userCollection.findOne({ email: email });
}

function makeOnline (email) {
  userCollection.updateOne({email: email}, { $set: { status: "online" } });
  return;
}

function addUser (email, name) {
  userCollection.insertOne({email: email, name: name, status: "online"});
  return;
}

function makeOffline (email) {
  userCollection.updateOne({email: email}, { $set: {status: "offline"}});
  return;
}

module.exports = {
  getUser,
  makeOnline,
  addUser,
  makeOffline
};
// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });
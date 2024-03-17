const config = require('./dbconfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
const { MongoClient } = require('mongodb')

const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const studyGroupsCollection = db.collection('studyGroups');


client
  .connect()
  .then(() => db.command({ping:1}))
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});

async function getStudyGroups () {
  const studyGroups = await studyGroupsCollection.find({}).toArray();
  return studyGroups;
}

function addGroup (groupName) {
  studyGroupsCollection.insertOne({studyGroupName: groupName});//will create separate documents for each studyGroup
  return;
}

async function getUsers () {
  const users = await userCollection.find({}).toArray();
  return users;
}

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
  getStudyGroups,
  addGroup,
  getUsers,
  getUser,
  makeOnline,
  addUser,
  makeOffline,
};
// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });
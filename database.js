const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Cluster0`;
const { MongoClient } = require('mongodb')

const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const studyGroupsCollection = db.collection('studyGroups');
const messagesCollection = db.collection('messages');


client
  .connect()
  .then(() => db.command({ping:1}))
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});

async function createUser(email, name, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    name: name,
    password: passwordHash,
    status: "offline",
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

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

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

function makeOnline (email) {
  userCollection.updateOne({email: email}, { $set: { status: "online" } });
  return;
}

function makeOffline (email) {
  userCollection.updateOne({email: email}, { $set: {status: "offline"}});
  return;
}

async function getMessages(month, day) {
  day = Number(day);
  const document = await messagesCollection.findOne({date: {month: month, day: day}});
  if (document == null) {
    return document;
  } else {
    const messageList = document.messageList; //need to implement this. doc = {date: {month: month, day: day}, messageList:[{name: name, message: message}]}
    return messageList;
  }

}

async function postMessage(date, messageList) {
  day = Number(date.day);
  //how do I add jus the new message? change frontend? updateOne?
  const cursor = await messagesCollection.find({date: {month: date.month, day: day}});
  // Convert the cursor to an array
  const documents = await cursor.toArray();

  if (documents.length !== 0) {
    messagesCollection.updateOne({date: {month: date.month, day: date.day}}, { $set: {messageList: messageList}});
    messageList = await messagesCollection.findOne({date: {month: date.month, day: date.day}}).messageList;
    return messageList;
  } else {
    messagesCollection.insertOne({date: {month: date.month, day: date.day}, messageList: []});
    messageList = messagesCollection.findOne({date: {month: date.month, day: date.day}}).messageList;
    return messageList;
  }
}

async function getDates() {
  try {
    const cursor = await messagesCollection.find();
    const array = await cursor.toArray();
    const dateList = await array.map(doc => doc.date);
    return dateList;
  } catch (error) {
    console.error('Error fetching dates:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

module.exports = {
  createUser,
  getStudyGroups,
  addGroup,
  getUsers,
  getUser,
  getUserByToken,
  makeOnline,
  //addUser,
  makeOffline,
  getMessages,
  postMessage,
  getDates
};
// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

//middleware to parse the body?
app.use(bodyParser.text());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


//FUNCTIONS MAY NEED `next` PARAMETER AND CALL
//GetStudyGroups
apiRouter.get('/studygroups', async (_req, res) => {
  studyGroups = await DB.getStudyGroups();
  res.send(studyGroups); 
})

//AddStudyGroup
apiRouter.post('/studygroup', async(req, res) => {
  studyGroups = await DB.addGroup(req.body);
  res.send(studyGroups);
})

let usersList = [];
//GetUsers for usersList
apiRouter.get('/users', async (_req, res) => {
  // console.log('Type: ', typeof(usersList), 'List: ', usersList)
  usersList = await DB.getUsers();
  res.send(usersList); //unexpected character at line 1 of the JSON data
});

//Registering a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.name, req.body.password);

    // Set the cookie
    //setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

//AddUser to usersList
//status is what the function should do (if status = online, the function should make the user online)
apiRouter.post('/user/:email/:name/:status', async (req, res) => {
  user = await DB.getUser(req.params.email);
  if (req.params.status == 'online') {
    if (user) {
      if (user.name === req.params.name) {
        DB.makeOnline(req.params.email);
        res.status(200).send({msg: 'All good!'});
        return; //?
      } else {
        res.status(404).send({ msg: 'Name does not match email.' });
        return;
      }
    } else {
      res.status(401).send({msg: 'Unauthorized (email not registered or incorrect password).'});
      return;
    }
  } else { //when the status is "offline"
    DB.makeOffline(req.params.email);
    res.status(200).send({msg: 'All good!'});
    return;
  }
  // usersList = req.body;
  // res.send(usersList); //do I need to send it back?
});

let messageList = [];
//GetMessages
apiRouter.get('/messages/:month/:day', async (_req, res) => {
  let messageList = await DB.getMessages(_req.params.month, _req.params.day);
  //may need the following lines. setDiscussion should make sure there is always a document with the current day tho...
  // if (messageList === undefined) {
  //   messageList = [];
  // }
  res.send(messageList);
});

//AddMessage to messageList
apiRouter.post('/message', async (req, res) => {
  messageList = await DB.postMessage(req.body.date, req.body.messageList);
  res.send(messageList);
});

//let dateList = [];
//GetDates
apiRouter.get('/dates', async (_req, res) => {
  let dateList = await DB.getDates();
  res.send(dateList);
});

//AddDate to dateList (currently not called)
// apiRouter.post('/date', (req, res) => {
//   dateList = req.body; //only if req contains full messageList (primarily on frontend)
//   res.send(dateList);
// });

// let storedDate = {};
// //GetstoredDate
// apiRouter.get('/stored_date', (_req, res) => {
//   res.send(storedDate);
// });

// //Update storedDate
// apiRouter.post('/store_date', (req, res) => {
//   storedDate = req.body; 
//   res.send(storedDate);
// });

//let archiveList = [];
//GetArchiveData for archiveList
apiRouter.get('/archive_data', async (_req, res) => {
  let dateList = await DB.getDates();
  res.send(dateList);
});

// //AddAchive to archiveList
// apiRouter.post('/archive_new_data', (req, res) => {
//   archiveList = req.body; //only if req contains full messageList (primarily on frontend)
//   res.send(archiveList);
// });

// // GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', (req, res) => {
//   scores = updateScores(req.body, scores);
//   res.send(scores);
// });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



let studyGroups = []; //saved in memory? Maybe? Don't know if that's what I want.
// function addGroup(name, studyGroups) {
//   studyGroups.push(name);
//   return studyGroups;
// }
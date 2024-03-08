const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
apiRouter.get('/studygroups', (_req, res) => {
  res.send(studyGroups); 
})

//AddStudyGroup
apiRouter.post('/studygroup', (req, res) => {
  studyGroups = addGroup(req.body, studyGroups);
  res.send(studyGroups);
})

let usersList = [];
//GetUsers for usersList
apiRouter.get('/users', (_req, res) => {
  console.log('Type: ', typeof(usersList), 'List: ', usersList)
  res.send(usersList); //unexpected character at line 1 of the JSON data
});

//AddUser to usersList
apiRouter.post('/user', (req, res) => {
  console.log('Type: ', typeof(req.body), 'req.body: ', req.body);
  usersList = req.body;
  console.log('after push: ', usersList);
  res.send(usersList);
});

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
function addGroup(name, studyGroups) {
  studyGroups.push(name);
  return studyGroups;
}
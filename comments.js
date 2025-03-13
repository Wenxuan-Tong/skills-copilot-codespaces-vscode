// Create web server
// Use express to create the web server
const express = require('express');
const app = express();
// Use body-parser to parse the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Use express to serve the static files
app.use(express.static('public'));
// Use express to create the web server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// Use lowdb to store the data
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('comments.json');
const db = low(adapter);
// Initialize the database
db.defaults({ comments: [] }).write();
// Define the API to get all comments
app.get('/api/comments', (req, res) => {
  const comments = db.get('comments').value();
  res.send(comments);
});
// Define the API to add a new comment
app.post('/api/comments', (req, res) => {
  const newComment = req.body;
  db.get('comments').push(newComment).write();
  res.send(newComment);
});
// Define the API to delete a comment
app.delete('/api/comments/:id', (req, res) => {
  const id = req.params.id;
  db.get('comments').remove({ id: id }).write();
  res.send(id);
});
// Define the API to update a comment
app.put('/api/comments/:id', (req, res) => {
  const id = req.params.id;
  const updatedComment = req.body;
  db.get('comments').find({ id: id }).assign(updatedComment).write();
  res.send(updatedComment);
});
// Define the API to get a single comment
app.get('/api/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = db.get('comments').find({ id: id }).value();
  res.send(comment);
});
// Use shortid to generate a unique id
const shortid = require('shortid');
// Define the API to generate a unique id
app.get('/api/uuid', (req, res) => {
  const id = shortid.generate();
  res.send(id);
});
// Define the API to get all comments
app.get('/api/comments', (req, res)git add comments.js
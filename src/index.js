const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Home = require('./models/home');
const app = express();

const mongoUrl = 'mongodb+srv://devsprout:<password>@cluster0-ymwvd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.send(user);
});

app.post('/user', async (req, res) => {
  const user = req.body;

  await User.create(user);

  res.sendStatus(200);
});

app.get('/home/:id', async (req, res) => {
  // const home = await Home.findById(req.params.id);
  console.log(req);
  // title: String
  // var description: String
  // var images: String
  res.send({ title: "Hello world", description: "hello hello", images: "hihihihi" });
});

app.post('/home', async (req, res) => {
  const home = req.body;

  await Home.create(home);

  res.sendStatus(200);
});

app.listen(4000);
console.log('Running a REST API server at http://localhost:4000');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Home = require('./models/home');
const app = express();
var bodyParser = require("body-parser");

const mongoUrl = 'mongodb+srv://devsprout:IZXtZzd218vEkWHa@cluster0-ymwvd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.post('/user', async (req, res) => {
  await User.create(req.body);
  
  const user = await User.findOne({name:req.body.name});
  res.json(user);
});

app.post('/user/login', async (req, res) => {
  const user = await User.findOne(req.body);

  res.json(user);
});

app.get('/home/:id', async (req, res) => {
  const home = await Home.findById(req.params.id);
  res.json(home);
});

app.post('/home', async (req, res) => {
  const home = req.body;
  await Home.create(home);

  res.json({ success: "ok" });
});

app.get('/homeList', async (req, res) => {
  const homeList = await Home.find({});

  res.json({ list: homeList });
});

app.listen(4000);
console.log('Running a REST API server at http://localhost:4000');
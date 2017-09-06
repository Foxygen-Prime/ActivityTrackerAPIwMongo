const express = require('express');
const mongoose = require('mongoose');
const personalActivityDB = require('./Models/schema.js');
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/activityTracker');

const app = express();

app.use(bodyParser.json());

// app.get('/', function(req, res){
//   res.send("get is working")
// })

app.get('/', function(req, res) {
  console.log('we are able to display information from database and collection');
  personalActivityDB.find().then(function(doesntmatter) {
    res.send({
      object: doesntmatter
    })
  })
});

app.post('/api/activity', function(req, res) {
  console.log(req.body);

  const temp = new personalActivityDB({
    name: req.body.name,
    date: req.body.date,
    stepsInMiles: req.body.stepsInMiles
  });
  temp.save()
    .then(function(results) {
      console.log(results);
      res.json({
        status: "success"
      })
    })
});


app.put('/api/activities/:name', function(req, res) {
  let name = req.params.name;
  personalActivityDB.updateOne({
    name: name
  }, {
    $push: {
      date: req.body.date,
      stepsInMiles: req.body.stepsInMiles
    }
  }).then(function(result) {
    res.send('updated' + name)
  })
});

app.delete('/api/activities/:name', function(req, res) {
  let name = req.params.name;
  personalActivityDB.deleteOne({
      name: name
    })
    .then(function(result) {
      res.send('deleted' + name)
    });
});


app.listen(3000, function() {
  console.log('Successfully started express application!')
})

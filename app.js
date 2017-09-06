const express = require('express');
const mongoose = require('mongoose');
const personalActivityDB = require('./Models/schema.js')
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/activityTracker');

const app = express();

app.use(bodyParser.json());


app.post('/api/activity', function(req, res) {
  console.log(req.body);

  const temp = new personalActivityDB({
    name: req.body.name,
    date: req.body.date,
    stepsInMiles: req.body.stepsInMiles,
  });
  temp.save()
    .then(function(results) {
      console.log(results);
      res.json({
        status: "success"
      })
    })
});


//   ({"name": "Murder of Crows",
//   "quantity": 8,
//   "price": 15000,
//   "url": "https://imgix.ttcdn.co/i/product/original/0/269605-f4f5029fb12e4f35a8d446b473366049.jpeg?q=90&w=640&auto=format%2Ccompress&fit=contain&fm=jpeg"
// },
// {
//   "name": "Possession",
//   "quantity": 5,
//   "price": 17500,
//   "url": "https://imgix.ttcdn.co/i/product/original/0/269605-8f78920280974b028b451f32ceec715c.jpeg?q=90&w=640&auto=format%2Ccompress&fit=contain&fm=jpeg"
// },
// {
//   "name": "Devil's Kiss",
//   "quantity": 10,
//   "price": 16000,
//   "url": "https://vignette3.wikia.nocookie.net/bioshock/images/2/27/Devil%27s_Kiss_Advert_from_Carnival.png/revision/latest?cb=20150610150456"
// },
// {
//   "name": "Shock Jockey",
//   "quantity": 7,
//   "price": 18000,
//   "url": "https://imgix.ttcdn.co/i/product/original/0/269605-a1b8c60a3ec247288221f9b2ba69970a.jpeg?q=90&w=640&auto=format%2Ccompress&fit=contain&fm=jpeg"
// },
// {
//   "name": "Bucking Bronco",
//   "quantity": 5,
//   "price": 21000,
//   "url": "https://imgix.ttcdn.co/i/product/original/0/269605-1de625b4f6934be3ae407948808552d9.jpeg?q=90&w=640&auto=format%2Ccompress&fit=contain&fm=jpeg"
// },
// {
//   "name": "Charge",
//   "quantity": 3,
//   "price": 25000,
//   url: "https://i.pinimg.com/originals/dd/32/bf/dd32bf2a0cc0a1de831c865268774ffe.jpg"
// },
// {
//   "name": "Return to Sender",
//   "quantity": 30000,
//   "price": 21000,
//   "url": "https://s-media-cache-ak0.pinimg.com/originals/7a/57/bb/7a57bb24b134dfc75c7ce944bffd45ed.jpg"
// },
// {
//   "name": "Undertow",
//   "quantity": 1,
//   "price": 36500,
//   "url": "http://cdn.shopify.com/s/files/1/1329/4595/products/Undertow_2_grande.jpg?v=1503405485"
// });
// console.log(vendingMachineReStock);


app.listen(3000, function() {
  console.log('Successfully started express application!')
})

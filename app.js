const express = require('express');
const EventEmitter = require('events');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Stream = new EventEmitter();

// Setup
app.use(bodyParser.json());

// We don't use a real database, because we don't care if the server crashes, and we don't want to store any information more than 1 pub.
let currentFood = [];

app.get('/subscribe', (req, res) => {
  // Setup an event stream
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  Stream.on('push', function(event, data) {
    res.write(`data: ${data} \n\n`);
  });

  //Give list to new ppl
  sendList();
});

app.post('/addOrRemove', (req, res) => {
  const id = req.body.id.toString(); // we need this to check length
  if (id.length < 9 && !isNaN(id)) {
    const operation = addOrRemoveFood(id);
    return res.json({message: `food was ${operation}`});
  }
  res.status(400).json({
    message: `FoodId must be 1-8 digit integer`,
  });
});

app.post('/clear', (req, res) => {
  clearList();
  res.json({message: 'foodlist was cleared'});
});

// Not doing real hosting to avoid CORS for now
app.use(express.static(path.join(__dirname, 'front-end/build')));
app.listen(3000, () => console.log("\nApp started at http://localhost:3000/"));

//Helpers that should be in another file
const sendList = () =>
  Stream.emit('push', 'list', JSON.stringify(getCurrentList()));

const getCurrentList = () => currentFood;

const addOrRemoveFood = num => {
  if (!isInList(num)) {
    currentFood = currentFood.concat(num);
    sendList();
    return 'added';
  } else {
    currentFood = currentFood.filter(item => item !== num);
    sendList();
    return 'removed';
  }
};

const clearList = () => {
  currentFood = [];
  sendList();
};

const isInList = num => currentFood.filter(item => item === num).length !== 0;

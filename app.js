const express = require('express');
const EventEmitter = require('events');
const path = require('path');
const app = express();

const Stream = new EventEmitter();
const currentFood = [];
//save somehow?
// always sent whole list

app.get('/subscribe', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  Stream.on('push', function(event, data) {
    res.write(`data: ${data} \n\n`);
  });
});

app.get('/new/:id', (req, res) => {
  const id = req.params.id;
  if (id.length < 9 && !isNaN(id)) {
    Stream.emit('push', 'newfood', req.params.id);
    return res.json({message: 'food added'});
  }
  res.status(400).json({
    message: `FoodId must be 1-8 digit integer`,
  });
});

app.use(express.static(path.join(__dirname, 'front-end/build')));

app.listen(3000);

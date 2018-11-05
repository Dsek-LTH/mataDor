const express = require('express');
const path = require('path');
const app = express();

const currentFood = [321, 23,4234,2,3434]
const should
app.get('/sse', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  let id = 0;

  // Send event every 3 seconds or so forever...
  setInterval(() => {
      if(
    res.write(`data: ${currentFood[id%currentFood.length]}\nid: ${id}`);
    res.write('\n\n');
    id++;
  }, 3000);
});

app.use(express.static(path.join(__dirname, 'front-end/build')));

app.listen(3000);

const express = require('express');
const path = require('path');
const app = express();

app.get('/sse', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  let id = 1;


  // Send event every 3 seconds or so forever...
  setInterval(() => {
    res.write(`data: myEvent\nid: ${id}`);
    res.write('\n\n');
    id++;
  }, 3000);
});

app.use(express.static(path.join(__dirname, 'front-end/build')));

app.listen(3000);

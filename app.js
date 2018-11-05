const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  let id = 1;

  // Send event every 3 seconds or so forever...
  setInterval(() => {
    res.write(`event: myEvent\nid: ${id}\ndata:This is event ${id}.`);
    res.write('\n\n');
    id++;
  }, 3000);
});

app.listen(5000);

const express = require("express");
const EventEmitter = require("events");
const bodyParser = require("body-parser");
const path = require("path");

const config = require("./config");

const app = express();
const Stream = new EventEmitter();

app.use(bodyParser.json());

// We don't use a real database, because we don't care if the server crashes,
// and we don't want to store any information more than 1 pub.
let currentFood = []; // string[]

app.get("/subscribe", (req, res) => {
  // Setup an event stream
  res.writeHead(200, {
    Connection: "keep-alive",
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache"
  });

  function onPush(event, data) {
    res.write(`data: ${data} \n\n`);
  }

  Stream.on("push", onPush);

  req.on("close", function() {
    Stream.removeListener("push", onPush);
  });

  // Give list to new clients
  sendList();
});

app.post("/addOrRemove", (req, res) => {
  const id = req.body.id.toString(); // we need this to check length
  // isNaN ensures we only accept numerical values
  if (id.length < 9 && !isNaN(id)) {
    const operation = addOrRemoveFood(id);
    return res.json({ message: `food was ${operation}` });
  }
  res.status(400).json({
    message: "Bad Request: id must be 1-8 digit integer."
  });
});

app.post("/clear", (req, res) => {
  clearList();
  res.json({ message: "foodlist was cleared" });
});

// Not doing real hosting to avoid CORS for now
app.use(express.static(path.join(__dirname, "front-end/build")));
// this makes react router handle 404s
app.get("*", (req, res) =>
  res.sendFile(path.join(`${__dirname}/front-end/build/index.html`))
);

app.listen(config.port, () =>
  console.log("\nApp started at http://localhost:" + config.port)
);

// Helpers that should be in another file
const sendList = () =>
  Stream.emit("push", "list", JSON.stringify(getCurrentList()));

const getCurrentList = () => currentFood;

const clearList = () => {
  currentFood = [];
  sendList();
};

const isInList = num => currentFood.indexOf(num) > -1;

const addOrRemoveFood = num => {
  if (!isInList(num)) {
    currentFood.push(num);
    sendList();
    return "added";
  }
  currentFood = currentFood.filter(item => item !== num);
  sendList();
  return "removed";
};

const express = require("express");
const EventEmitter = require("events");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const Stream = new EventEmitter();

app.use(bodyParser.json());

// We don't use a real database, because we don't care if the server crashes,
// and we don't want to store any information more than 1 pub.
let currentFood = []; // string[]

app.get("/subscribe", (req, res) => {
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

  if (id.length < 9 && !isNaN(id)) {
    const operation = addOrRemoveFood(id);
    return res.json({ message: `food was ${operation}` });
  }
  res.status(400).json({
    message: "Bad Request: id must be 1-8 digit integer."
  });
});

app.post("/add", (req, res) => {
  const id = req.body.id.toString(); // we need this to check length

  if (id.length < 9 && !isNaN(id)) {
    const operation = addFood(id);
    return res.json({ message: `food was ${operation}` });
  }
  res.status(400).json({
    message: "Bad Request: id must be 1-8 digit integer."
  });
});

app.post("/del", (req, res) => {
  const id = req.body.id.toString(); // we need this to check length

  if (id.length < 9 && !isNaN(id)) {
    const operation = delFood(id);
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

app.use(express.static(path.join(__dirname, "front-end/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(`${__dirname}/front-end/build/index.html`))
); // Handles 404

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("\nApp started at http://localhost:" + port)
);

// Helpers that should be in another file
const sendList = () => Stream.emit("push", "list", JSON.stringify(currentFood));

const clearList = () => {
  currentFood = [];
  sendList();
};

const addOrRemoveFood = num => {
  if (!currentFood.includes(num)) {
    currentFood = currentFood.concat(num);
    sendList();
    return "added";
  } else {
    currentFood = currentFood.filter(item => item !== num);
    sendList();
    return "removed";
  }
};

const addFood = num => {
  if (!currentFood.includes(num)) {
    currentFood = currentFood.concat(num);
    sendList();
    return "added";
  } else {
    return "no change";
  }
};

const delFood = num => {
  if (currentFood.includes(num)) {
    currentFood = currentFood.filter(item => item !== num);
    sendList();
    return "removed";
  } else {
    return "no change";
  }
};

const express = require("express");
const restaurantsData = require("./data/restaurants");

const app = express();

app.get("/", (req, res) => {
  console.log("api is running");
  res.send("api");
});

app.get("/api/restaurants", (req, res) => {
  res.json(restaurantsData);
});

app.get("/api/restaurants/:id", (req, res) => {
  const restaurant = restaurantsData.find((r) => r._id === req.params.id);
  res.json(restaurant);
});

app.listen(8888);

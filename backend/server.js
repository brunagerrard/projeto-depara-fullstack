const express = require("express");
const restaurantsApi = require("./data/rest-api");
const app = express();

app.get("/", (req, res) => {
  console.log("api is running");
  res.send("api");
});

app.get("/api/restaurants", (req, res) => {
  res.json(restaurantsApi);
});

app.get("/api/restaurants/:id", (req, res) => {
  const restaurant = restaurantsApi.find((r) => r._id === req.params.id);
  res.json(restaurant);
});

app.listen(8008);

const express = require("express");
const app = express();
const port = process.env.port || 9016;
const mongoose = require("mongoose");

app.use(express.json());
app.use("/api", require("./routes/tableroute"));

mongoose
  .connect(
    "mongodb+srv://Hrishi:T0CnB84ILpLuQwJ3@cluster0.8bufi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewurlParser: true,
    }
  )
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("server running successfully at ", port);
});

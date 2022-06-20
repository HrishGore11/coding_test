const express = require("express");
const router = express.Router();

const Table = require("../models/table");
const tablemodel = require("../models/table");

router.post("/add", async (req, res) => {
  try {
    const createtable = await new tablemodel({
      Name: req.body.Name,
      Price: req.body.Price,
      Quantity: req.body.Quantity,
      Brand: req.body.Brand,
    });
    createtable.save();
    res.json({ message: "user created successfully", data: createtable });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

router.get("/get", async (req, res) => {
  try {
    await tablemodel.find((err, data) => {
      if (data != "") {
        res.json({ result: data });
      } else {
        res.json({ result: {} });
      }
    });
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;

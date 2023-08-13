import express from "express";
import conn from "../db/mongoose.mjs";
import { ObjectId } from "mongodb";
import { mongoose } from "mongoose";


const router = express.Router();
conn();


const itemSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number
  })

const Item = mongoose.model('Item',itemSchema)

router.get("/", async (req, res) => {
    let collection = await Item.find()
    res.send(collection).status(200);
  });


  router.post("/", async (req, res) => {
    const newItem = await new Todo({name: req.body.name, desc: req.body.desc, price: req.body.price})
    await newItem.save();
  
    res.send(newItem).status(204);
  });

export default router;
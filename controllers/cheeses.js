// Require Dependencies
const express = require('express');

// Create a Route Object
const cheesesRouter = express.Router();
const Cheese = require('../models/cheese.js');

cheesesRouter.get("/", (req,res) => {
    res.send("Hello Cheese!")
});

// Index
cheesesRouter.get("/cheeses", async (req,res) => {
    try {
        res.json(await Cheese.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
});

// New

// Delete
cheesesRouter.delete("/cheeses/:id", async (req,res) => {
    try {
        res.json(await Cheese.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
});

// Update
cheesesRouter.put("/cheeses/:id", async (req,res) => {
    try {
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error) {
        res.status(400).json(error)
    }
});

// Create
cheesesRouter.post("/cheeses", async(req,res) => {
    try {
        res.json(await Cheese.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
});

// Edit

// Show


module.exports = cheesesRouter;

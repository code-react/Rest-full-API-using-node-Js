const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Student = require("../models/StudentModel");

// create then post
router.post("/", async (req, res) => {
    try {
      const user = new Student(req.body);
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  // read then get restapi
  
  router.get("/", async (req, res) => {
    try {
      const readuser = await Student.find();
      res.send(readuser);
      console.log(readuser);
    } catch (error) {
      res.send(error);
    }
  });
  //indivisual students data using id
  router.get("/:name", async (req, res) => {
    try {
      const name = req.params.name;
      const studentData = await Student.find({ name });
      if (!studentData) {
        return res.status(400).send();
      } else {
        res.send(studentData);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  //update the students by id
  router.patch("/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.send(updateStudents);
    } catch (e) {
      res.status(404).send(e);
    }
  });
  
  //delete the students by is
  router.delete("/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteData = await Student.findByIdAndDelete(_id);
      if (req.params.id) {
        return res.status(404).send(deleteData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });

module.exports = router;

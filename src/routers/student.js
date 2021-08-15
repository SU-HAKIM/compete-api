const express = require("express");
const router = new express.Router();
const Students = require("../models/students");


//? create a new students - port request

router.post("/students", async (req, res) => {
    const studentOne = new Students(req.body)
    try {
        let result = await studentOne.save();
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})


//? getting student - get request

router.get("/students", async (req, res) => {
    const queryData = { ...req.query };
    try {
        if (queryData.name) {
            const result = await Students.find({name:queryData.name})
            res.send(result)
        } else if (queryData.email) {
            const result = await Students.find({email:queryData.email})
            res.send(result)
        } else if (queryData.address) {
            const result = await Students.find({address:queryData.address})
            res.send(result)
        }else if (queryData.phone) {
            const result = await Students.find({phone:queryData.phone})
            res.send(result)
        } else {
            const result = await Students.find();
            res.send(result)
        }
    } catch (err) {
        res.send(err)
    }
})

router.get("/students/:id", async (req, res) => {
    try {
        const _id=req.params.id
        const result = await Students.findById({ _id })
        if (!result) {
            res.status(404).send()
        } else {
            res.send(result)
        }
    } catch (err) {
        res.status(500).send(err)
    }
})

//? put and patch request


router.patch('/students/:id',async (req,res) => {
    try {
        let _id = req.params.id
        let result = await Students.findByIdAndUpdate({ _id }, { $set: req.body },{new:true})
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
})

//? delete request

router.delete("/students/:id",async (req, res) => {
    try {
        let _id = req.params.id;
        await Students.findByIdAndDelete({ _id });
        res.send({})
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports=router
const express = require('express');
const db = require('../data/connection.js');

const router = express.Router()

router.get('/', (req,res)=>{
    db('cars')
    .then(cars=>{
        res.status(200).json(cars);
    })
    .catch(error=>{
        res.status(500).json({message:'server error'})
    })
})
router.post('/', (req,res)=>{
    db('cars')
    .insert(req.body, 'id')
    .then(id=>{
        res.status(201).json(id);
    })
    .catch(error=>{
        res.status(500).json({message:'server error'})
    })
})


module.exports=router;
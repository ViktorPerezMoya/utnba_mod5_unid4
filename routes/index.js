const express = require('express');
const router = express.Router();
const secured = require('../middlewares/logged');
const mascotasModel = require('../models/mascotasModel');


router.get('/', (req, res) => {
    res.send("Bienvenido al portal MascotasPerdidas!!!");
});

router.get('/mascotas', secured, async (req,res) => {
    
    try{
        const mascotas = await mascotasModel.getAll();
        res.status(200).json({status: 'Ok',mascotas});
    }catch(error){
        res.status(500).json({error});
    }
})

module.exports = router;
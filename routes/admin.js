const express = require('express');
const router = express.Router();
const secured = require('../middlewares/logged');
const usuarioModel = require('../models/usuarioModel');
const mascotasModel = require('../models/mascotasModel');

router.get('/login',(req,res) => {
    if(req.session !== undefined && req.session.id_usuario){
        console.log(req.session);
        res.redirect('/admin/home');
    } 
    res.render('admin/login',{ layout: 'admin/layout' });
});

router.post('/login', async (req, res) =>  {
    
    const usuario = await usuarioModel.getUser(req.body.username, req.body.password)
    if(usuario){
        console.log(usuario);
        req.session.id_usuario = usuario.id;
        req.session.nombre = usuario.username;
        res.redirect('/admin/home');
    }else{
        res.render('admin/login',{ layout: 'admin/layout', error: 'Usuario o claves incorrectos' });
    }
});

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/admin/login');
});

router.get('/home',secured, async (req,res) => {
    const mascotas = await mascotasModel.getAll();
    res.render('admin/home',{
        layout: 'admin/layout',
        nombre: req.session.nombre,
        mascotas
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo: "pagina de inicio"})
});

router.get('/ayuda', (req, res) => {
    res.render("ayuda", {titulo: "ayuda"})
});

router.get('/registro', (req, res) => { //Muestra el formulario de registro
    res.render("registro", {titulo: "Registro de usuario"})
});
router.post('/registro', (req, res) => {
    res.send('Te acabas de registrar');
    console.log('Usuario registrado');
})

router.get('/login', (req, res) => { //Recibe credenciales e inicia sesión.
    res.render("login", {titulo: "Inicio de sesión"})
});

router.post('/login', (req, res) => {
    res.send('Jaja esto era un phishing, y ahora tengo parte de tu information ')
    console.log('Usuario iniciado');
})

router.get('/about', (req, res) => { 
    res.render("about", {titulo: "Acerca de"})
})

module.exports = router;
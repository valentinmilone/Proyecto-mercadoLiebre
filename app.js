const express = require('express');
const app = express();
const PORT = process.env.port||3030
app.use(express.static('public'));

app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
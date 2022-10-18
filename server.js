const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/inventory');
});

app.get('/inventory', (req,res) => {
    res.render('pages/inventory');
});

app.get('/stores', (req,res) => {
    res.render('pages/stores');
});

app.get('/trainModel', (req,res) => {
    res.render('pages/trainModel');
});


app.listen(port, () => {
  console.log(`Http://localhost: ${port}`)
});
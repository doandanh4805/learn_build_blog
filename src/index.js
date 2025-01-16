const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs  = require('express-handlebars');
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/tin-tuc', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
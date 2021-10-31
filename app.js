const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var path = require('path');

require('dotenv').config();

const router = require('./routes/index');
const adminRoutes = require('./routes/admin');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: '123456', resave: true, saveUninitialized: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(router);
app.use('/admin',adminRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
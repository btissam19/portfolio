const express = require('express');
const connect = require('./database/mongo.js');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
require('dotenv').config();

const port = process.env.PORT || 4000;
const databaseUrl = process.env.MONGO_URL;
const skills=require('./routes/skills.js')

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views'), 
    partialsDir: 'views/partials'
}));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/skills',skills);

app.get('/', (req, res) =>{res.render('skills', { layout: false})})

const start = async () => {
    await connect(databaseUrl);
    app.listen(port, () => {
        console.log(`Your server is running on http://localhost:${port}`);
    });
}

start();

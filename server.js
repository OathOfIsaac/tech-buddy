const path = require('path');
const express = require('express');
const exhibs = require('express-handlebars');

const hbs = exhibs.create({});
const routes = require('./controllers/');
// import sequelize connection
//const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

// sync sequelize models to the database, then turn on the server
//sequelize.sync({ force: false }).then(() => { 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  }); 

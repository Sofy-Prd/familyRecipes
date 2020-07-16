require('dotenv').config();

const pkg = require('./package.json')

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
// const hbs          = require('hbs');
const mongoose     = require('mongoose');
// const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session       = require('express-session');
const passport      = require('passport');

require('./configs/passport');



mongoose
  .connect(`mongodb://localhost/${pkg.name}`, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

mongoose.set('useCreateIndex', true);


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials') 
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

app.use(session({
  secret:"some secret goes here",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// const index = require('./routes/index');
// app.use('/', index);

const authRoutes = require('./routes/auth-routes');
app.use('/api', authRoutes);

const recipeRoutes = require('./routes/recipes')
app.use('/api', recipeRoutes);

app.use('/api', require('./routes/file-upload-routes'));


module.exports = app;
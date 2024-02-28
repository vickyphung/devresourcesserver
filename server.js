const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

// const mongoConfig = require('./config/database');

const PORT = process.env.PORT || 3001
const app = express();

//Middleware
// Middleware functions (preceded by app.use) are run EVERY time a server receives a request of any type.

app.use(logger('dev')); 
app.use(express.json()); 
app.use(cors());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))); 
// this uses the favicon package to make sure the react site is showing the right favicon

// app.use(express.static(path.join(__dirname, 'build'))); 
// this points the react app to the server's "build" folder so it knows where to get the frontend code from.


//Routes

// app.use('/api/users', require('./routes/api/users'));

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const bookmarkRouter = require('./routes/bookmarks');
app.use('/bookmarks', bookmarkRouter);


// This app.use is a little different because it takes *two* arguments, the first of which is a string. Since it is a string, it knows that it needs to send any request that starts with that string to the file that is put in the second argument slot.

// ----------

// Create Read Update Destroy routes go here (Index, Show, Create, Update, Delete) -- (New and Edit go on the front end (And kind of Index and Show))

// Index and Show on the express server grab the data from the database that's needed and send it to the front end to be rendered there.

// ----------

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests



// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// });

app.get('/', (req, res) => {
    res.status(200).json({
      message: "index :)"
    });
});



// This is your *default* route. If the route being received does not match any other route that exists on the server, it sends it back information about the frontend React App and renders it to the page. This is why it is put at the very end, because if it does not match anything else, it knows to do this.


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});


// app.listen(PORT, () => {
//     mongoConfig()
//     console.log(`Listening on port ${PORT}`)
//   })
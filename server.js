var express = require('express');
var app = express(); 
var PORT = 8080; 

// data format for front-end and backend is JSON 
// use for data transfer
app.use(express.json())
app.use(express.urlencoded({
    extended: true

}))

// require the routes
// access to apiRoutes, passes app (aka express)server.js to that path 
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
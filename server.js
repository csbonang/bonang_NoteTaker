var express = require('express');
var app = express(); 
// var PORT = 8080; 
// allows you to get the port from the bound environment variable (using process.env.PORT)
var PORT = process.env.PORT || 3001;

// data format for front-end and backend is JSON 
// use for data transfer
app.use(express.json())
app.use(express.urlencoded({
    extended: true

}))

// we need the public folder to be accessible so we can find our css files 
app.use(express.static('public')); 

//Ensure that you have at least one HTML page being served at the "/" route. Example:

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});


// require the routes
// access to apiRoutes, passes app (aka express)server.js to that path 
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
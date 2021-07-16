// html routes have to match the public folder 
var path = require('path'); 
module.exports = (app) => {
    // GET /api/notes should read the db.json file and return all saved notes as JSON.
    
    app.get('/', (request, response) =>
    {
             response.sendFile(path.join(__dirname, '../public/index.html')); 
    }); 

    app.get('/notes', (request, response) =>
    {
             response.sendFile(path.join(__dirname, '../public/notes.html')); 
    }); 

    // any,redirects to home page 
    app.get('*', (request, response) =>
    {
             response.sendFile(path.join(__dirname, '../public/index.html')); 
    }); 

}

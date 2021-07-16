// apiRoutes.js 

// Description: 
/*
API routes 
1. GET /api/notes should read the db.json file and return all saved notes as JSON.
2. POST /api/notes should receive a new note to save on the request body, 
   add it to the db.json file, and then return the new note to the client. 
   You'll need to find a way to give each note a unique id when it's saved 
   (look into npm packages that could do this for you).
*/ 


// used for writing to file 
var fs = require('fs'); 
// needed to generate a random id 
const { v4: uuidv4 } = require('uuid');
// database
var db = require('../db/db.json'); 

    module.exports = (app) => {
    // GET /api/notes should read the db.json file and return all saved notes as JSON.
    app.get('/api/notes', (request, response) =>
    {
                // read from db.json
                // parse the data 
                db = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8')); 
                console.log('GET ROUTE: ', db); 
                // displays it on the frontend 
                response.json(db); 
    }); 

    // path: api/notes 
    app.post('/api/notes', (request, response) =>
    {
       // create a new note 
         let newNote = {
             id: Math.floor(Math.random()*100),
             title: request.body.title,
             text: request.body.text
         }
         db.push(newNote)
        // new note will be written to db.json
            fs.writeFileSync('./db/db.json',JSON.stringify(db), function(err){
                if(err) console.log(err)
            })
            console.log("Post",db)
            // send new array to frontend 
            response.json(db)
    }); 

    // DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

    // :id that is how you match a changing variable 
    app.delete('/api/notes/:id', (request, response) =>
    {

        var tempArray = []; 
        for(var i = 0; i < db.length; i++)
        {
            if(db[i].id != request.params.id)
            {
                tempArray.push(db[i]); 
            }
        }

        // update the db 
        db = tempArray; 
        // new note will be written to db.json
            fs.writeFileSync('./db/db.json',JSON.stringify(db), function(err){
                if(err) console.log(err)
            })
            console.log("Delete Route",db)
            // send new array to frontend 
            response.json(db)
    }); 



}
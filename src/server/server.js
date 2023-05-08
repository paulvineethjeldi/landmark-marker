const express = require('express');
const cors = require('cors');
/* const mysql = require('mysql'); */
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();
app.use(cors());
/* app.use(express.json()); */

// Set up a MySQL connection 
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'your_mysql_password',
//     database: 'your_mysql_database',
// });

// // Connect to the MySQL database 
// connection.connect();

// // Create an API endpoint to fetch data from the database 
// app.get('/', (req, res) => { 
//     return res.json("HELLO FROM PAUL")
//     }); 


// /* app.get('/message', (req, res) => {
//     res.json({ message: "Hello from server!" });
// }) */

/* app.listen(POST, () => {
    console.log(`Server is running on port 8000.`); */

    // create a MySQL connection pool
/* const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myappdb'
  }); */
  
  // parse application/json requests
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  // define the API endpoint for adding a note
  app.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;
  
    // add the note to a users array
    const users = fs.existsSync('users.json') ? JSON.parse(fs.readFileSync('users.json')) : [];
    users.push({ name, username, email, password });

    console.log("Users:", users)
  
    // write the users array to a JSON file
    fs.writeFileSync('users.json', JSON.stringify(users, null, 4));
  
    res.json({ message: 'User added successfully.' });
  });

  app.post('/login', (req,res) => {
   const { email, password } = req.body;
   const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

   let authenticatedUser = null;
   for (let i = 0; i < users.length; i++) {
     const user = users[i];
     if (user.email === email && user.password === password) {
       authenticatedUser = user;
       break;
     }
   }
 
   if (authenticatedUser) {
    /* res.redirect('/Map'); */
     res.send(`Welcome, ${authenticatedUser.username}!`);
   } else {
     res.status(401).send('Invalid username or password');
   }
  })

  // define the API endpoint for adding a note
app.post('/notes', (req, res) => {
    const { note } = req.body;
  
    // add the note to a notes array
    const notes = fs.existsSync('notes.json') ? JSON.parse(fs.readFileSync('notes.json')) : [];
    notes.push({ note });
  
    // write the notes array to a JSON file
    fs.writeFileSync('notes.json', JSON.stringify(notes, null, 1));
  
    res.json({ message: 'Note added successfully.' });
  });
  
  // start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
  



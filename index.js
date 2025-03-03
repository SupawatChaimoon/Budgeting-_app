const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const db = require('./config/db');
const fs = require('fs');
const { error } = require('console');


//rest object 
const app = express();

//PORT
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/budgeting/api", require("./routes/usersRoutes"));        

app.get('/', (req, res) => {
    res.send('Hello wa Express!'); 
});

//contidionaly listen
db.query('SELECT 1').then(() => {
        //MY SQL
        console.log('Database Connected :D')
        //listen
        app.listen(PORT, () => {
            console.log(`sever is running on PORT ${PORT}`) 
        });
}).catch((error) => {
    console.log(error)
});



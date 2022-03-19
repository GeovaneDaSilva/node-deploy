require('./config/config.js')

const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')


const app = express(); // INIT DECLARATION VAR AND CONST      
app.use(morgan('tiny'))

app.use(cors())

//



app.use(bodyParser.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
                  


//=====================================
// IMPORTS ROUTES                          
//=====================================

const userRoutes = require('./routes/user');



app.use('/api', userRoutes)




//=====================================
// SERVER LISTEN                         
//=====================================
app.listen(process.env.PORT, () => {
    console.log(`'Express server port: ${process.env.PORT} \x1b[32m%s\x1b[0m', 'online'`);
});

module.exports = app;          





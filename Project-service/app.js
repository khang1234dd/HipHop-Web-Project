require('dotenv').config()
const cors = require("cors");
const express = require('express')
const logger = require('morgan')
const mongoClient = require('mongoose')
const {ORIGIN_DEV,ORIGIN_PROD,MONGODB_CONNECTION_STRING} = require('./config/index')


// setup connect mongodb
// mongoClient.connect(MONGODB_CONNECTION_STRING,{ useUnifiedTopology:true, useNewUrlParser:true })
// .then(() => console.log('Connected database from mongodb.'))
// .catch(() => console.error(`Conect database is failed with error which is ${error}`))


mongoClient.connect('mongodb://localhost/projectcnpm')
.then(() => console.log('Connected database from mongodb.'))
.catch(() => console.error(`Conect database is failed with error which is ${error}`))

const app = express()

const userRoute = require('./routes/user')
const authenticateRoute = require('./routes/authenticate')
const categoryRoute = require('./routes/category')
const albumRoute = require('./routes/album')
const songRoute = require('./routes/song')
const postRoute = require('./routes/post')
const adminRoute = require('./routes/admin')
const superadminRoute = require('./routes/superadmin')


// Middlewares
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
      origin: [ORIGIN_DEV, ORIGIN_PROD],
      methods: "GET,POST",
    })
  );

// Routes
app.use('/users',userRoute)
app.use('/authenticate',authenticateRoute)
app.use('/category',categoryRoute)
app.use('/album',albumRoute)
app.use('/song',songRoute)
app.use('/post',postRoute)
app.use('/admin',adminRoute)
app.use('/superadmin',superadminRoute)
app.use('/upload',express.static('upload'))



// Routes
app.get('/',(req,res,next) =>{
    return res.status(200).json({
        message: 'Sever is OK!'
    })
})

// Catch 404 Errors and forward them to error handler
app.use((req,res,next)=>{
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error handler function
app.use((err,req,res,next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    //response to client
    return res.status(status).json({
        error:{
            message: error.message
        }
    })
})

// Start the server
const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))
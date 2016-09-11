// Dependencies
// -----------------------------------------------------
const 
    express         = require('express'),
    bodyParser      = require('body-parser'),
    cors            = require('cors')
    Mongoose        = require('mongoose');


// Globals
// -----------------------------------------------------
const
    app                 = express(),
    MongoDB             = Mongoose.connection, 
    MONGO_CONN_STRING   = process.env.MONGO_CONN_STRING || 'mongodb://172.16.11.145:27017';



// Express Configuration
// -----------------------------------------------------
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(cors());                                                // Enable CORS



// Starts MongoDB connection
// -----------------------------------------------------
MongoDB.on('error', (error) => {
    console.log('Connection to MongoDB failed!  =(');
    console.error(error);
} );
MongoDB.once('open', () => {
    console.log('Connection to MongoDB stablished!');


    // Routes
    // ------------------------------------------------------
    require('./routes/agentes.js')(app);
    require('./routes/servicios.js')(app);
    


    // Server start
    // -----------------------------------------------------
    app.listen(1337, () => console.log('Backend listening on port 1337!') );
});
Mongoose.connect(MONGO_CONN_STRING, {});



// Dependencies
// -----------------------------------------------------
const
    Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;



// Define Schema
// -----------------------------------------------------
const 
    Agente = Mongoose.model( 'Agente', new Schema({
        name: { type: String, required: true },
        sex: { type: String, required: true },
        phone: { type: String, required: true }, 
        skills: { type: Array, required: true }
    }) );



// Starts MongoDB connection
// -----------------------------------------------------
const handlers = {
    find: (req, res)  => {},
    findOne: (req, res)  => {
        if (!req.params.agenteID) {
            return res.status(404).send("Argument 'agenteID' not working."); 
        }

        Agente.findOne({_id: req.params.agenteID}, (err, agente) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(agente);
        });
    },
    delete: (req, res)  => {},
    editar: (req, res)  => {},
    nuevo: (req, res)  => {
        var newObj = new Agente(req.body);
        newObj.save(function(err, agente) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(agente);
        });
    }
};



// Assign routes to app
// -----------------------------------------------------
module.exports = (app) => {
    app.get('/ping', (req, res)  => res.send('Hello World!') );
    app.get('/agente', handlers.find);
    app.post('/agente', handlers.nuevo);
    app.get('/agente/:agenteID', handlers.findOne);
    app.delete('/agente/:agenteID', handlers.delete);
    app.put('/agente/:agenteID', handlers.editar);
}

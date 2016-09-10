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
    }) ),
    Servicio = Mongoose.model( 'Servicio', new Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        skillRequired: { type: String, required: true },
        phone: { type: String, required: true },
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    }) );



// Starts MongoDB connection
// -----------------------------------------------------
const handlers = {
    find: (req, res)  => {},
    findOne: (req, res)  => {},
    delete: (req, res)  => {},
    editarAgente: (req, res)  => {},
    nuevoAgente: (req, res)  => {

        console.log('Wow, such debugging post', typeof req.body, req.body);
        // Creates a new Agente based on the Mongoose schema
        var newAgente = new Agente(req.body);

        // New Agente is saved in the db.
        newAgente.save(function(err, agente){
            if (err) {
                
                console.log('Wow, such debugging error', err);
                return res.status(500).send(err);
            }

            console.log('Wow, such debugging success', agente);
            res.json(agente);
        });
    }
};



// Assign routes to app
// -----------------------------------------------------
module.exports = (app) => {
    app.get('/ping', (req, res)  => res.send('Hello World!') );
    app.get('/agente', handlers.find);
    app.post('/agente', handlers.nuevoAgente);
    app.get('/agente/:agenteID', handlers.findOne);
    app.delete('/agente/:agenteID', handlers.delete);
    app.put('/agente/:agenteID', handlers.editarAgente);
}

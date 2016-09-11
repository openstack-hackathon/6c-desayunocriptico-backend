// Dependencies
// -----------------------------------------------------
const
    Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;



// Define Schema
// -----------------------------------------------------
const 
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
    find: (req, res)  => {

        const filter = req.query;
        Servicio.find(filter)
            .exec(function (err, servicios) {
                if (err) {
                    return res.status(500).send(err);
                }
                res.json(servicios);
            });
    },
    findOne: (req, res)  => {
        if (!req.params.servicioID) {
            return res.status(404).send("Argument 'servicioID' not working.");
        }

        Servicio.findOne({_id: req.params.servicioID}, (err, servicio) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(servicio);
        });
    },
    delete: (req, res)  => {},
    editar: (req, res)  => {
      if (!req.params.servicioID) {
          return res.status(404).send("Argument 'servicioID' not working.");
      }

      Servicio.findOne({_id: req.params.servicioID}, (err, servicio) => {
          if (err) {
              return res.status(500).send(err);
          }

          Object.assign(servicio, req.body);

          servicio.save(function(err, servicio) {
              if (err) {
                  return res.status(500).send(err);
              }
              res.json(servicio);
          });
      });
    },
    nuevo: (req, res)  => {
        var newObj = new Servicio(req.body);
        newObj.save(function(err, servicio) {
            if (err) {
                return res.status(500).send(err);
            }
            res.json(servicio);
        });
    }
};



// Assign routes to app
// -----------------------------------------------------
module.exports = (app) => {
    app.get('/servicio', handlers.find);
    app.post('/servicio', handlers.nuevo);
    app.get('/servicio/:servicioID', handlers.findOne);
    app.delete('/servicio/:servicioID', handlers.delete);
    app.put('/servicio/:servicioID', handlers.editar);
}

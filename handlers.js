const
    Mongoose = require('Mongoose'),
    MONGO_CONN_STRING = process.env.MONGO_CONN_STRING || 'mongodb://172.16.11.145:27017/mongo';


Mongoose.connect(MONGO_CONN_STRING);

const 
    Agente = Mongoose.model('Agente', {
        name: String,
        sex: String,
        skills: Array,
        phone: String 
    }),
    Servicio = Mongoose.model('Servicio', {
        name: String,
        skillRequired: String,
        phone: String,
        lat: Number,
        lon: Number
    });




module.exports = {
    find: (req, res)  => {},
    findOne: (req, res)  => {},
    delete: (req, res)  => {},
    editarAgente: (req, res)  => {},
    nuevoAgente: (req, res)  => {}
};
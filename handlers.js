const
    Mongoose = require('Mongoose'),
    MONGO_CONN_STRING = process.env.MONGO_CONN_STRING || 'mongodb://172.16.11.145:27017/mongo';


Mongoose.connect(MONGO_CONN_STRING);

const 
    Agente = Mongoose.model('Cat', {
        name: String,
        sex: String,
        skills: Array,
        phone: String 
    }),
    Servicios = Mongoose.model('Cat', {
        name: String,
        sex: String,
        skills: Array,
        phone: String 
    });



var kitty = new Agente({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});



module.exports = {
    find: (req, res)  => {},
    findOne: (req, res)  => {},
    delete: (req, res)  => {},
    editarAgente: (req, res)  => {},
    nuevoAgente: (req, res)  => {}
};
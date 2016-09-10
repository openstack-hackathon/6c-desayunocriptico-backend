const 
    express = require('express'),
    handlers = require('./handlers'),
    app = express();


app.get('/ping', (req, res)  => res.send('Hello World!') );

app.get('/', handlers.find);
app.get('/:agenteID', handlers.findOne);
app.delete('/:agenteID', handlers.delete);
app.put('/:agenteID', handlers.editarAgente);
app.post('/', handlers.nuevoAgente);



app.listen(3000, () => console.log('Backend listening on port 3000!') );
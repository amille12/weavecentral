var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// Node Server
var app = express();
app.set('port', process.env.PORT || 8000);
var port = 8000;


// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

// Controllers
var DirectoryController = require('./api/controllers/directory_controller');


// //Endpoints
app.get('/api/people', DirectoryController.findAll);
app.get('/api/people/:id', DirectoryController.findOne);
app.post('/api/people', DirectoryController.create);
app.put('/api/people/:id', DirectoryController.update);
app.delete('/api/people/:id', DirectoryController.destroy);

// // // // MongoDB
// var mongoUri = 'mongodb://localhost:27017/weaveConnect';
// mongoose.connect(mongoUri);
//
//
//
// // // Start Database
// // var db = mongo('ecommerce', ['products']);
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
//     console.log('connected to db at ' + mongoUri)
// });


// Start Server
app.listen(port, function() {
    console.log('Server listening on port ' + port);
});

var restify = require('restify');
var fs = require('fs');
var db = require('./dbconnection').db;

const server = restify.createServer({});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', async function (req, res, next) {
 const findResult = await  db.collection("apolices").find().toArray();
 console.log('Found documents => ', findResult);
 res.header('content-type', 'application/json');
 res.send(findResult);
 //res.send('{apelido:"Maria Beleza"}');
  return next();
});

server.listen(80, function () {
  console.log('%s listening at %s', server.name, server.url);
});
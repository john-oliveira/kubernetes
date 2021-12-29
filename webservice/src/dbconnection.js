const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const pass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const url = `mongodb://${user}:${pass}@mongo-service:27017`;
const client = new MongoClient(url);

// Database Name
const dbName = 'dblaz';

client.connect();
const db = client.db(dbName);

exports.db = db;
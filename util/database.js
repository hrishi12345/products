const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv=require('dotenv')
let _db;
dotenv.config()
const USERNAME=process.env.DB_USERNAME
const PASSWORD=process.env.DB_PASSWORD

const mongoConnect = callback => {
  MongoClient.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@product.mongodb.net/shop?retryWrites=true`
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

const mongoose = require('mongoose');

require('dotenv').config()
 
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    const { DB_HOST, DB_NAME } = process.env; // Replace with your MongoDB URI
    mongoose.connect(`${DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true});

    this._db = mongoose.connection;

    // Event handlers
    this._db.on('error', (err) => console.error(`MongoDB connection error: ${err}`));
    this._db.once('open', () => console.log('Connected to MongoDB'));
    this._db.on('disconnected', () => console.log('Disconnected from MongoDB'));

    process.on('SIGINT', () => this._db.close(() => {
        console.log('MongoDB connection closed');
        process.exit(0);
      }));
  }

  isConnected() {
    return this._db.readyState === 1;
  }

  get connection() {
    return this._db;
  }
}

module.exports = new Database();

const { MongoClient } = require('mongodb');

const db = {};

const connectToDb = async () => {
  try {
    const client = new MongoClient('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const database = client.db('mindx_db');
    db.inventories = database.collection('inventories');
    db.orders = database.collection('orders');
    db.users = database.collection('users');

    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

module.exports = { connectToDb, db };

const db = require('../../database/config');


module.exports.databaseConfigController = (req, res) => {
    res.status(db.isConnected ? 200 : 500).json({
        status: db.isConnected() ? 'OK' : 'ERROR',
        code: db.isConnected() ? 200 : 500,
        message: db.isConnected() ? 'Connected to MongoDB' : 'Disconnected from MongoDB',
    });
}
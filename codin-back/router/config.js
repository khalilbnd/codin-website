const express = require('express');
const {databaseConfigController} = require('../controller/config')

const router = express.Router();

router.get('/config/database', databaseConfigController);

module.exports = router
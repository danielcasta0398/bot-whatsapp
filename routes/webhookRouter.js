const express = require('express');
const { prueba } = require('../controller/webhookController');
const router = express.Router();

router.get('/', prueba)

module.exports = { webhookRoutes: router }

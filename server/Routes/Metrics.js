const express = require('express');
const router = express.Router();

const {MetricsControllerLog, MetricsControllerGet} = require('../Controller/MetricsController')

router.post('/log', MetricsControllerLog );
router.get('/logs/:userId', MetricsControllerGet );

module.exports = router;

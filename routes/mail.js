const express = require('express');
const mailController = require('../controllers/mail');

const router = express.Router();

router.post('/', mailController.postMail);

module.exports = router;

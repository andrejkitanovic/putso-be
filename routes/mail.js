const express = require('express');
const mailController = require('../controllers/mail');

const router = express.Router();

router.get('/', mailController.getMails);
router.get('/:id', mailController.getSingleMail);
router.post('/', mailController.postMail);
router.post('/cv', mailController.postMailCV);

module.exports = router;

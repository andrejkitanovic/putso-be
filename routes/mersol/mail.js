const express = require('express');
const mailController = require('../../controllers/mersol/mail');

const router = express.Router();

router.get('/', mailController.getMails);
router.get('/:id', mailController.getSingleMail);
router.post('/', mailController.postMail);

module.exports = router;

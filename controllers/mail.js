const { getEmails, getSingleEmail, sendEmail } = require('../utils/mailer');

exports.getMails = (req, res, next) => {
	(async function () {
		try {
			const messages = await getEmails();

			res.status(200).json({
				messages,
			});
		} catch (err) {
			next(err);
		}
	})();
};

exports.getSingleMail = (req, res, next) => {
	(async function () {
		try {
			const { id } = req.params;
			console.log(id)
			const message = await getSingleEmail(id);

			res.status(200).json({
				message,
			});
		} catch (err) {
			next(err);
		}
	})();
};

exports.postMail = (req, res, next) => {
	(async function () {
		try {
			const message = await sendEmail(req.body);

			res.status(200).json({
				message,
			});
		} catch (err) {
			next(err);
		}
	})();
};

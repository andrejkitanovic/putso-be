const { sendEmail } = require('../utils/mailer');

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

const mailjet = require('node-mailjet').connect(
	process.env.BILDAGROUP_MJ_APIKEY_PUBLIC,
	process.env.BILDAGROUP_MJ_APIKEY_PRIVATE
);

exports.getSingleEmail = async (id) => {
	try {
		const result = await mailjet.get('message', { version: 'v3' }).id(id).request();

		return result.body;
	} catch (err) {}
};

exports.getEmails = async () => {
	try {
		const result = await mailjet.get('message', { version: 'v3' }).request();

		return result.body;
	} catch (err) {}
};

exports.sendEmail = async ({ subject = '', html = '' }) => {
	try {
		await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'info@bildagroup.se',
						Name: 'Bilda Group Website',
					},
					To: [
						{
							Email: 'info@bildagroup.se',
							Name: 'Bilda Group',
						},
						{
							Email: 'kitanovicandrej213@gmail.com',
							Name: 'Andrej [Debugging]',
						},
					],
					Subject: subject,
					HTMLPart: html,
					CustomID: 'WindowCleaningBooking',
				},
			],
		});

		return 'Successfully sent!';
	} catch (err) {
		console.log(err);

		return 'Error while sending!';
	}
};

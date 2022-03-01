const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

exports.sendEmail = async ({ subject = '', html = '' }) => {
	try {
		const { result } = await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'kitanovicandrej213@gmail.com',
						Name: 'Andrej',
					},
					To: [
						{
							Email: 'nikollanik17@gmail.com',
							Name: 'Nikola',
						},
					],
					Subject: subject,
					HTMLPart: html,
					CustomID: 'WindowCleaningBooking',
				},
			],
		});
		console.log('Result:', result);

		return 'Successfully sent!';
	} catch (err) {
		console.log(err);

		return 'Error while sending!';
	}
};

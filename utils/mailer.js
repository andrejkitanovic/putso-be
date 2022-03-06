const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

exports.sendEmail = async ({ subject = '', html = '' }) => {
	try {
		const { result } = await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'kitanovicandrej213@gmail.com',
						Name: 'Putso Website',
					},
					To: [
						{
							Email: 'info@putso.se',
							Name: 'Putso',
						},
						{
							Email: 'kitanovicandrej213@gmail.com',
							Name: 'Andrej Debugging',
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

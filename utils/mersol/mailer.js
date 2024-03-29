const mailjet = require('node-mailjet').connect(
	process.env.DREAMCLEAN_MJ_APIKEY_PUBLIC,
	process.env.DREAMCLEAN_MJ_APIKEY_PRIVATE
);

exports.getSingleEmail = async (id) => {
	try {
		const result = await mailjet.get('message', { version: 'v3' }).id(id).request();
		console.log(result);
		return result.body;
	} catch (err) {}
};

exports.getEmails = async () => {
	try {
		const result = await mailjet.get('message', { version: 'v3' }).request();

		return result.body;
	} catch (err) {}
};

exports.sendEmail = async ({ subject = '', html = '', type, file }) => {
	const Attachments = [];

	if (file && file.type && file.name && file.base64) {
		Attachments.push({
			ContentType: file.type,
			Filename: file.name,
			Base64Content: file.base64.split('base64,')[1],
		});
	}

	try {
		const { result } = await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'christian@dreamclean.nu',
						Name: 'Mersol Website',
					},
					To: [
						{
							Email: 'christian@mersol.se',
							Name: 'Mersol Christian',
						},
						{
							Email: 'nikollanik17@gmail.com',
							Name: 'Nikola [Debugging]',
						},
					],
					Subject: subject,
					HTMLPart: html,
					CustomID: 'MersolWebsite',
					Attachments: Attachments,
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

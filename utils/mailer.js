const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

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

exports.sendEmail = async ({ subject = '', html = '' }) => {
	try {
		const { result } = await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'info@putso.nu',
						Name: 'Putso Website',
					},
					To: [
						{
							Email: 'info@putso.nu',
							Name: 'Putso',
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
		console.log('Result:', result);

		return 'Successfully sent!';
	} catch (err) {
		console.log(err);

		return 'Error while sending!';
	}
};

exports.sendEmailCV = async ({ subject = '', html = '', file }) => {
	const Attachment = null;

	if (file && file.type && file.name && file.base64) {
		Attachment = {
			ContentType: file.type,
			Filename: file.name,
			Base64Content: file.base64.split('base64,')[1],
		};
	}

	try {
		const { result } = await mailjet.post('send', { version: 'v3.1' }).request({
			Messages: [
				{
					From: {
						Email: 'info@putso.nu',
						Name: 'Putso Website | Job Apply',
					},
					To: [
						{
							Email: 'info@putso.nu',
							Name: 'Putso Job Apply',
						},
						{
							Email: 'kitanovicandrej213@gmail.com',
							Name: 'Andrej [Debugging]',
						},
					],
					Subject: subject,
					HTMLPart: html,
					CustomID: 'JobApply',
					Attachments: [Attachment],
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

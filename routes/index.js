module.exports = (app) => {
	const mailRotues = require('./mail');

	// API routes
	app.use('/api/mail', mailRotues);
};

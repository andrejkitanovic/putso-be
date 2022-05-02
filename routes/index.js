module.exports = (app) => {
	const mailRotues = require('./mail');
	const dreamcleanMailRotues = require('./dreamclean/mail');

	// API routes
	app.use('/api/mail', mailRotues);
	app.use('/api/dreamclean/mail', dreamcleanMailRotues);
};

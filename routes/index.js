module.exports = (app) => {
	const mailRotues = require('./mail');
	const dreamcleanMailRoutes = require('./dreamclean/mail');
	const bildagroupMailRoutes = require('./bildagroup/mail');
	const mersolMailRoutes = require("./mersol/mail");

	// API routes
	app.use('/api/mail', mailRotues);
	app.use('/api/dreamclean/mail', dreamcleanMailRoutes);
	app.use('/api/bildagroup/mail', bildagroupMailRoutes);
	app.use('/api/mersol/mail', mersolMailRoutes);

};

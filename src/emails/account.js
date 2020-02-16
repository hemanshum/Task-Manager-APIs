const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SG_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'hemanshu.mahajan175@gmail.com',
		subject: 'Thanks for Joining in!',
		text: `Welcome to the Task Manager App, ${name}.`
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'hemanshu.mahajan175@gmail.com',
		subject: 'Sad to see you  going 😟',
		text: `What went wrong, ${name}. Can you send me 2 lines that what could I have done to retain you?`
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
};

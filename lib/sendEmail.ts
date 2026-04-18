import nodemailer from 'nodemailer';

export async function sendContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
	console.log("pass: ",process.env.GMAIL_PASS);
	console.log("user: ",process.env.GMAIL_USER);
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_USER, // set in your environment
			pass: process.env.GMAIL_PASS, // set in your environment
		},
	});
	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: 'ankitseal2021@gmail.com',
		subject: 'New Contact Message',
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		return info;
	} catch (err) {
		console.error('sendContactEmail failed:', err);
		throw err; // caller (API route) can translate this into a 500 response
	}
}

import connectDB from "../../../../lib/mongodb";
import User from "../../../../models/User";

import { Resend } from "resend";

let resend_ENV = process.env.RESEND_API_KEY;
let contact_EMAIL = process.env.CONTACT_EMAIL;

export async function POST(req: Request) {
	const resend = new Resend(resend_ENV);

	await connectDB(); // ensures one connection globally

	const body = await req.json();

	try {
		const user = await User.create({
			name: body.name,
			email: body.email,
			message: body.message,
		});
		if (contact_EMAIL) {
			try {
				const emailRes = await resend.emails.send({
					from: "onboarding@resend.dev",
					to: contact_EMAIL,
					subject: `${body.name} sent you a message on your portfolio site`,
					html: `<p>${body.message}</p>`,
				});

				if (emailRes.error) {
					console.error("Failed to send email:", emailRes.error);
				} else {
					console.log("Email sent successfully:", emailRes);
				}
			} catch (emailErr) {
				console.error("Error sending email:", emailErr);
			}
		}

		return new Response(JSON.stringify({ user }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (err: any) {
		if (err?.code === 11000) {
			return new Response(
				JSON.stringify({
					error: "Duplicate key error",
					details: err.keyValue || err.message,
				}),
				{
					status: 409,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		console.error("Failed to create user", err);
		return new Response(
			JSON.stringify({ error: "Internal Server Error" }),
			{ status: 500, headers: { "Content-Type": "application/json" } },
		);
	}
}

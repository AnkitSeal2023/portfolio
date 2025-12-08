import connectDB from "../../../../lib/mongodb";
import User from "../../../../models/User";

export async function POST(req: Request) {
	await connectDB(); // ensures one connection globally

	const body = await req.json();

	try {
		const user = await User.create({
			name: body.name,
			email: body.email,
			message: body.message,
		});

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

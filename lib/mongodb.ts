import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
	throw new Error("Missing MONGODB_URI environment variable");
}

// Global is used here to maintain a cached connection across hot reloads in dev
let cached = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
	if (cached.conn) {
		return cached.conn;
	}

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI, {
				serverApi: {
					version: "1",
					strict: true,
					deprecationErrors: true,
				},
			})
			.then((mongoose) => mongoose);
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

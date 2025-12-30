import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	trailingSlash: false, // Enforce no trailing slashes (Google prefers consistency)
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
			},
			{
				protocol: "https",
				hostname: "zed.dev",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;

import { ImageResponse } from "next/og";

// Utility to fetch Google Fonts as ArrayBuffer for Edge
async function loadGoogleFont(font: string, text: string) {
	const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
	const css = await (await fetch(url)).text();
	const resource = css.match(
		/src: url\((.+)\) format\('(opentype|truetype)'\)/,
	);

	if (resource) {
		const response = await fetch(resource[1]);
		if (response.status === 200) {
			return await response.arrayBuffer();
		}
	}
	throw new Error(`Failed to load font: ${font}`);
}

export const config = {
	runtime: "edge",
};

export async function GET() {
	const interFont = await loadGoogleFont("Inter", "Ankit Seal");
	const imageUrl = "https://github.com/AnkitSeal2023.png"; // Your profile picture URL
	const title = "Ankit Seal";
	const description =
		"Portfolio of Ankit Seal, a full-stack developer specializing in frontend, backend, and DevOps. View my projects, resume, and get in touch.";

	return new ImageResponse(
		<img
			src={`https://raw.githubusercontent.com/AnkitSeal2023/AnkitSeal2023/refs/heads/main/og_page.png`}
			width={1200}
			height={630}
			style={{
				objectFit: "cover",
			}}
		/>,
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Inter",
					data: interFont,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}

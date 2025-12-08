"use client";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("/contact/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			// Reset form on successful submission
			setFormData({ name: "", email: "", message: "" });
			alert("Message sent successfully!");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert(
				"There was an error sending your message. Please try again later.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="relative flex w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950 min-h-screen">
			{/* Grid background */}
			<div
				className={cn(
					"absolute inset-0",
					"z-0",
					"bg-size-[20px_20px]",
					"bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]",
					"dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
				)}
			/>
			<div className="z-0 pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

			<Navbar isSubPage={true} />

			<div className="z-10 h-full max-w-3xl w-full px-5 py-24">
				{/* Header */}
				<section id="contact" className="section-container mt-10">
					<h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
						Let's Connect
					</h4>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
								placeholder="your.email@example.com"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								value={formData.message}
								onChange={handleChange}
								rows={6}
								className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all resize-none"
								placeholder="Tell me about your project or idea..."
							/>
						</div>

						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full md:w-auto px-8 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{isSubmitting ? (
								<>
									<div className="size-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
									Sending...
								</>
							) : (
								<>
									<Send className="size-4" />
									Send Message
								</>
							)}
						</Button>
					</form>
				</section>
			</div>
		</div>
	);
}

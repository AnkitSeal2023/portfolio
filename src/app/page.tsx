'use client';
import Lenis from 'lenis'
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { FileTextIcon, Send } from 'lucide-react';
import ThemeToggle from '@/components/theme-toggle';
import Navbar from '@/components/navbar';
import AboutList from '@/components/about';
import { AnimatedTooltipPreview } from '@/components/mylinks';
import { ResumeCard } from '@/components/click-button';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
export default function Page() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
			smoothWheel: true,
		});
		let rafId = 0;
		function raf(time: number) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			// cancel the animation frame loop before destroying Lenis
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
	const resumeControls = useAnimation();
	const contactControls = useAnimation();
	const [isResumeAnimating, setIsResumeAnimating] = useState(false);
	const [isContactAnimating, setIsContactAnimating] = useState(false);

	const triggerResumeAnimation = () => {
		if (isResumeAnimating) return;
		setIsResumeAnimating(true);

		resumeControls
			.start({
				rotate: [0, 25, 0],
				transition: { duration: 0.5, ease: "easeInOut" },
			})
			.then(() => setIsResumeAnimating(false));
	};

	const triggerContactAnimation = () => {
		if (isContactAnimating) return;
		setIsContactAnimating(true);

		contactControls
			.start({
				rotate: [0, 25, 0],
				transition: { duration: 0.5, ease: "easeInOut" },
			})
			.then(() => setIsContactAnimating(false));
	};
	const { scrollYProgress } = useScroll(); // 0 → 1 a user scrolls the whole page
	const x = useTransform(scrollYProgress, [0, 0.18], [0, -54]);
	const y = useTransform(scrollYProgress, [0, 0.15], [0, -115]);
	return (
		<div className='relative flex w-full items-center justify-center bg-neutral-50 dark:bg-neutral-950'>
			<div
				className={cn(
					"absolute inset-0",
					"z-0",
					"[background-size:20px_20px]",
					"[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
					"dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
				)} />
			<div className="z-0 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
			<Navbar />

			<div className="z-10 h-full max-w-3xl w-full px-5 py-18 ">
				<div className='flex items-center w-full'></div>
				<div >
					<div className='flex flex-col md:flex-row pt-40 text-neutral-900 dark:text-neutral-200 text-3xl overflow-visible'>
						<div className="font-semibold mr-2">
							Hi, I'm Ankit —
						</div>
						<AboutList />
					</div>
					<div className='text-neutral-700 dark:text-neutral-400 font-normal py-7'>
						I do the whole stack—frontend polish, backend brains, and the glue that holds them together on a good day.
					</div>
					<div className="flex space-x-3">
						<ResumeCard />
						<div className="flex justify-center h-9 text-center text-sm">
							<div
								onMouseEnter={triggerContactAnimation}
								onTouchStartCapture={triggerContactAnimation}
							>
								<HoverBorderGradient
									containerClassName="rounded-md"
									as="button"
									className="flex items-center space-x-2 h-8 cursor-pointer
                       bg-neutral-900 text-neutral-100
                       dark:bg-neutral-100 dark:text-neutral-900
                       py-4.5 rounded-md"
								>
									<motion.div animate={contactControls} className="rotate-10">
										<Send className="size-4 mr-1 stroke-[1.7]" />
									</motion.div>

									<div className="text-xs font-medium">
										Get in touch
									</div>
								</HoverBorderGradient>
							</div>
						</div>

					</div>
					<AnimatedTooltipPreview />
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum quam ea odit eveniet nam! Maxime, aspernatur cumque hic possimus voluptate laudantium ratione perspiciatis iusto, magni eius et earum officiis?
						Incidunt ullam magni aut dicta adipisci maxime perferendis impedit, similique, aperiam minus error maiores totam cum. Eius aspernatur distinctio culpa, perspiciatis deleniti accusantium assumenda sapiente sit atque fuga nisi alias.
						Ipsa tenetur officiis necessitatibus voluptatum earum fuga veritatis quibusdam quo delectus reprehenderit, architecto voluptates dolorem maxime voluptas sed quae tempora perspiciatis. Dolorum dolores ad error, saepe ex quam veniam obcaecati.
						Natus labore facilis tempore odio cupiditate earum voluptas totam dicta exercitationem. Excepturi explicabo possimus consequuntur optio iste deleniti odio temporibus sed expedita, consequatur inventore, mollitia tempore natus quo impedit saepe!
						Incidunt exercitationem quas odio voluptatum et eius odit esse reprehenderit atque fuga vero nobis distinctio, animi quo officia eaque culpa consequuntur deleniti magni molestias? Minima recusandae laudantium libero numquam consequuntur?
						Assumenda accusamus at sunt quo, atque voluptatem omnis quia magnam nobis repudiandae expedita iusto natus velit, ducimus porro vel aliquam qui odio sequi, voluptatibus culpa! Recusandae vitae quas eveniet porro!
						Voluptatem, nihil provident rerum maiores, corrupti perferendis dolorum sed minima itaque necessitatibus ipsam amet harum praesentium consectetur nam quia quaerat placeat saepe deserunt est. Repudiandae tempora omnis ullam minus error!
						Quae quo dignissimos id delectus corrupti dolor labore eligendi maiores, a odit sunt hic ex veritatis assumenda sapiente beatae itaque et, animi est eaque quia? Suscipit est repellat iure blanditiis?
						Labore quas, amet nisi tempore repellat sed? Mollitia autem dolorem, at obcaecati nihil, optio saepe iste aspernatur nesciunt omnis ad voluptatum nostrum tenetur, distinctio ex delectus aut vel porro iusto!
						Commodi deserunt dolore autem alias, beatae animi et reprehenderit soluta qui harum? Expedita hic dignissimos vel eum vitae! Explicabo nostrum magnam qui doloribus minima voluptates, rerum assumenda ratione minus commodi.
						Ratione fugiat dolorem doloremque facilis cupiditate ipsam et provident voluptate reprehenderit amet quo blanditiis dolore architecto, laudantium molestiae! Quod vel dolorem quos, possimus assumenda commodi placeat consequatur! Maxime, rem id!
						Voluptatem molestias dolor id. Expedita reprehenderit corrupti doloremque, beatae quo fuga magnam sint cum minima alias perspiciatis. Autem mollitia porro, quod nisi debitis, quia laborum provident similique soluta, esse ullam?
						Error ratione perspiciatis vel velit culpa magnam magni accusamus sed atque aliquid quod suscipit, tenetur eum harum! Explicabo dolor deserunt nam minima aliquam quam? Ex ut eum minus modi incidunt.
						Laudantium, corporis, vel amet unde omnis iure nisi, blanditiis expedita sint consequatur odit? Tenetur laboriosam assumenda odit id quam quisquam cumque ipsa aliquid maxime, et corporis, unde sed molestias soluta!
						Asperiores in quod exercitationem culpa? Aliquam eos velit consectetur illum a sit quaerat iste expedita eaque ipsa numquam, voluptate, vitae accusantium nihil enim hic veritatis nostrum ea, explicabo eum. Maxime.
						Reprehenderit dolores ducimus in a deleniti perspiciatis officiis maiores rem exercitationem quibusdam omnis illum placeat voluptatibus qui quis porro, unde doloribus nihil facilis. Dolores repellat sequi laboriosam possimus consequuntur voluptates.
						Autem saepe inventore fugiat facilis voluptas quidem voluptate, nisi magni sed at vel illo vero, nulla velit aperiam libero minima aliquam doloremque eum, facere voluptatibus eveniet nobis. Dolorem, minima earum?
						Laudantium, eius voluptatem. Nesciunt porro harum reiciendis quasi veritatis? Nisi rerum quasi ratione nostrum illo. Autem quae necessitatibus recusandae, quasi tempora excepturi saepe accusamus a, nulla quos consequatur perferendis non.
						Vitae neque iure expedita rerum minima. Inventore libero consectetur suscipit perspiciatis, blanditiis nesciunt est officia magnam totam. A doloremque totam eum in, quod optio debitis molestiae nihil sint nemo deserunt.
						Minus, facere totam eius labore reprehenderit quam esse corporis laborum, molestiae nostrum atque nobis minima, eum quasi voluptate sit. Illo iste autem maiores consectetur, suscipit ducimus quia ipsa non sit.
						Provident, iure eos aut ut, consectetur laborum dignissimos qui non quia numquam atque nobis odio, repudiandae debitis voluptatem facilis architecto neque consequuntur? Distinctio explicabo, rerum veritatis earum esse est deserunt?
						Omnis aperiam neque temporibus a delectus quidem officiis, voluptate dolores voluptas vel ducimus quisquam recusandae expedita, enim dolorum eveniet in asperiores fugiat? Voluptates voluptate dicta tenetur aspernatur iusto aliquid porro.
						Odit aliquid adipisci sunt eveniet quis nisi ullam est obcaecati enim unde maiores vel commodi aut provident quaerat qui reiciendis, ab tempore aperiam quas necessitatibus sed eos praesentium atque. Amet.
						Corrupti sit corporis unde ratione cupiditate ad nesciunt quasi magnam. Nulla facilis magnam quidem perspiciatis quibusdam porro et quisquam, corrupti in quos, totam expedita. Ipsam molestiae fugit deserunt modi eveniet.
						Quibusdam minima ut, facilis magnam modi laudantium fugit quos corrupti libero. Quasi perspiciatis, excepturi nam, sequi voluptate ipsam temporibus minima sunt aspernatur cupiditate natus qui expedita dignissimos beatae laudantium rem?
						Provident eaque ab numquam at ut dignissimos sit eius, nobis dolores ratione deserunt voluptate, doloribus omnis distinctio asperiores voluptates debitis magnam architecto corporis exercitationem, ea a. Atque exercitationem distinctio quia.
						Recusandae ipsam fugit aut facere enim, iure soluta autem et velit, ea nisi dolores architecto doloremque, iusto dignissimos nemo a. Exercitationem optio nostrum corporis libero quasi tenetur nihil voluptatem necessitatibus!
						Sequi, illo provident nulla voluptate nostrum accusantium libero error neque omnis ex officia expedita aliquid at amet, et iure natus animi totam explicabo harum vitae veniam eum temporibus. Quis, iusto?
						Quisquam, minus! Exercitationem quae, tenetur delectus molestias voluptatum repudiandae cumque incidunt natus praesentium maiores ab facere sequi amet eligendi! Beatae dolorum omnis sit nesciunt, accusantium deleniti fugiat vero cumque illo.
						Delectus temporibus ipsum ratione ipsa ea excepturi sed in ex, asperiores placeat veniam perferendis dolorem nulla tempora tenetur veritatis nemo! Magni suscipit architecto voluptates temporibus nam modi explicabo cum cupiditate!
					</div>
				</div>
			</div>
		</div >
	);
}

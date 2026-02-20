import { useTranslation } from "react-i18next";

interface Work {
	client: string;
	product: string;
	url: string;
	img: string;
}

export function PreviousWork() {
	const { t } = useTranslation();

	const works: Work[] = [
		{
			client: t("previousWork.clients.0"),
			product: t("previousWork.products.0"),
			url: "https://fisioterapeuta-ep.vercel.app",
			img: "/Assets/work/selena-ss.webp",
		},
	];

	return (
		<section id="works" className="py-16 px-4 sm:px-8 lg:px-16">
			<div className="max-w-7xl mx-auto">
				<p className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500 mb-3">
					{t("previousWork.header")}
				</p>
				<h4 className="text-4xl sm:text-5xl font-black  leading-tight mb-12">
					{t("previousWork.title")}
				</h4>

				<div className="flex flex-col">
					{works.map((work, i) => (
						<div key={i} className="border-t-2 border-gray-900 last:border-b-2">
							<div className="flex items-center justify-between py-6 gap-4">
								<div className="flex items-center gap-6">
									<span className="text-xs font-black tracking-widest text-gray-300 select-none w-6">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400">
										{work.client}
									</span>
								</div>

								<a
									href={work.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 group"
								>
									<span className="text-2xl sm:text-3xl font-black tracking-tight group-hover:text-amber-500 transition-colors duration-200">
										{work.product}
									</span>
									<svg
										viewBox="0 0 16 16"
										className="w-5 h-5 text-gray-300 group-hover:text-amber-500 transition-colors duration-200"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="3" y1="13" x2="13" y2="3" />
										<polyline points="6,3 13,3 13,10" />
									</svg>
								</a>
							</div>

							<div className="pb-8">
								<div className="relative border-2 border-gray-900 overflow-hidden shadow-[6px_6px_0px_#1a1a1a]">
									<div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-gray-900 bg-gray-100">
										<div className="w-3 h-3 rounded-full bg-red-400 border border-gray-700" />
										<div className="w-3 h-3 rounded-full bg-yellow-400 border border-gray-700" />
										<div className="w-3 h-3 rounded-full bg-green-400 border border-gray-700" />
										<span className="ml-3 text-[10px] font-mono text-gray-400 tracking-widest">
											{work.url.replace("https://", "")}
										</span>
									</div>
									<img
										src={work.img}
										loading="lazy"
										className="w-full max-h-[520px] object-cover"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

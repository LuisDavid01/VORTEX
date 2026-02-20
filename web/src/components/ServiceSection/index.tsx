import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


export function ServiceSection() {
	const [isVisible, setIsVisible] = useState(false);
	const imageRef = useRef<HTMLDivElement | null>(null);
	const { t } = useTranslation();

	useEffect(() => {
		const checkRef = setInterval(() => {
			if (imageRef.current) {
				clearInterval(checkRef);
				const observer = new IntersectionObserver(
					([entry]) => {
						setIsVisible(entry.isIntersecting);
					},
					{ threshold: 0.3 },
				);

				observer.observe(imageRef.current);

				return () => observer.disconnect();
			}
		}, 100);

		return () => clearInterval(checkRef);
	}, []);

	const servicios = [
		{
			title: t("services.section3.services.landing.title"),
			img: "/Assets/ServicesImg/landingImg.webp",
			descripcion: t("services.section3.services.landing.description"),
		},
		{
			title: t("services.section3.services.comerce.title"),
			img: "/Assets/ServicesImg/ecommerce.webp",
			descripcion: t("services.section3.services.comerce.description"),
		},
		{
			title: t("services.section3.services.corporative.title"),
			img: "/Assets/ServicesImg/dashboard.webp",
			descripcion: t("services.section3.services.corporative.description"),
		},
		{
			title: t("services.section3.services.micro.title"),
			img: "/Assets/ServicesImg/microservice.webp",
			descripcion: t("services.section3.services.micro.description"),
		},
		{
			title: t("services.section3.services.database.title"),
			img: "/Assets/ServicesImg/database.webp",
			descripcion: t("services.section3.services.database.description"),
		},
		{
			title: t("services.section3.services.api.title"),
			img: "/Assets/ServicesImg/api.webp",
			descripcion: t("services.section3.services.api.description"),
		},
	];

	return (
		<section
			id="services"
			className="container mx-auto text-center justify-items-center"
		>
			<h4 className="text-4xl pt-5 font-extrabold pb-6  ">
				{t("services.section1.titleLine1")}
				<br />
				{t("services.section1.titleLine2")}
			</h4>
			<div className="container mx-auto">
				<div className="prose dark:prose-invert lg:prose-lg mx-auto text-center lg:text-left max-w-3xl">
					<p>{t("services.section1.description1")}</p>
				</div>

				<div className="prose dark:prose-invert lg:prose-lg mx-auto text-center lg:text-left max-w-3xl mt-6">
					<p>{t("services.section1.description2")}</p>
				</div>
			</div>

			<section className="py-8 px-6 lg:px-16">
				<div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12">
					<div className="lg:w-1/2 text-center lg:text-left">
						<h2 className="text-4xl md:text-5xl font-bold ">
							{t("services.section2.title")}
						</h2>
						<p className="prose dark:prose-invert lg:prose-lg leading-relaxed  mt-4">
							{t("services.section2.description")}
						</p>
					</div>
					<div
						ref={imageRef}
						className={`lg:w-1/2  aspect-[4/3] flex justify-center transform transition-all duration-1000 ease-in-out ${isVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-10"
							}`}
					>
						<img
							className="w-full  object-fill  md:object-cover rounded-xl shadow-lg"
							src={"/Assets/ServicesImg/whyus.webp"}
							alt="Why choose us"
							width={800}
							height={600}
							loading="eager"
							fetchPriority="high"
							decoding="async"
						/>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-12 ">
						{t("services.section3.title")}
					</h2>
					<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-1 border-gray-900">
						{servicios.map((servicio, index) => (
							<div
								key={index}
								className="relative flex flex-col  justify-between  border-1 border-gray-900
                transition-colors duration-200"
							>
								<div className="p-6 pb-4">
									<h3
										className={`text-lg  mb-3 leading-tight `}
									>
										{servicio.title}
									</h3>
									<p
										className={`text-sm leading-relaxed  
                  }`}
									>
										{servicio.descripcion}
									</p>
								</div>
								{/* Mockup imagen — estilo recuadro con borde */}
								<div
									className={`
                  mx-4 mb-4 mt-6 border-2 border-gray-900 overflow-hidden
                  ${"shadow-[4px_4px_0px_#d1d5db]"}
                `}
								>
									{/* Barra de "ventana" */}
									<div
										className={`flex items-center gap-1.5 px-3 py-2 border-b-2 border-gray-900 ${"bg-gray-900"}`}
									>
										<div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-gray-700" />
										<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-gray-700" />
										<div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-gray-700" />
									</div>
									{/* Imagen del servicio */}
									<img
										src={servicio.img}
										alt={servicio.title}
										className="w-full h-40 object-cover"
										loading="lazy"
									/>
								</div>
							</div>

						))}
					</div>
				</div>
			</section>
		</section>
	);
}

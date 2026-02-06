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
					{ threshold: 0.3 }
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
		<div className="container mx-auto text-center justify-items-center">
			<h4 className="text-4xl pt-5 font-extrabold pb-6 text-gray-900 ">
				{t("services.section1.titleLine1")}
				<br />
				{t("services.section1.titleLine2")}
			</h4>
			<div className="container mx-auto">
				<div className="prose prose-neutral lg:prose-lg mx-auto text-center lg:text-left max-w-3xl">
					<p>
						{t("services.section1.description1")}
					</p>
				</div>

				<div className="prose prose-neutral lg:prose-lg mx-auto text-center lg:text-left max-w-3xl mt-6">
					<p>
						{t("services.section1.description2")}
					</p>
				</div>
			</div>

			<section className="bg-white pt-8 px-6 lg:px-16">
				<div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12">
					<div className="lg:w-1/2 text-center lg:text-left">
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800">
							{t("services.section2.title")}
						</h2>
						<p className="prose lg:prose-lg leading-relaxed text-gray-700 mt-4">
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
							src={'/Assets/ServicesImg/whyus.webp'}
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

			<section className="bg-white py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-12 text-gray-800">
						{t("services.section3.title")}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
						{servicios.map((servicio, index) => (
							<div
								key={index}
								className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
							>
								<div className="w-full aspect-[16/9] overflow-hidden rounded-md  flex items-center justify-center mb-4">
									<img
										className="w-full  object-fill md:object-cover"
										loading="lazy"
										width={800}
										height={600}
										src={servicio.img}
										alt="image servicio"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-4">{servicio.title}</h3>
								<p className="text-gray-600 prose  pb-3">
									{servicio.descripcion}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);


}

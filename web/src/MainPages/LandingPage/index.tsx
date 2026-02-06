import { useState, useEffect } from "react";
import {
	Check,
	Globe,
	Code,
	Zap,
	Lightbulb,
	Database,
	ChartNoAxesCombined,
	HelpCircle,
	ChevronUp,
	ChevronDown,
} from "lucide-react";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import Modal from "../../Components/Modal";
import PriceCalculator from "../../Components/PriceCalculator";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ServiceSection } from "@/Components/ServiceSection";
import { Toast } from "@/Components/Toast";

const WebServiceLanding = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const { t } = useTranslation();
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [showToast, setShowToast] = useState(false);

	function handleCopyClipboard() {
		navigator.clipboard.writeText("vrtxai@protonmail.com");
		setShowToast(true);
	}

	const faqs = t("faqs.items", { returnObjects: true }) as Array<{
		question: string;
		answer: string;
	}>;

	const toggleFAQ = (index: number) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const features = [
		{
			icon: <Globe className="w-10 h-10 text-blue-500" />,
			title: t("landing.features.responsive.title"),
			description: t("landing.features.responsive.description"),
		},
		{
			icon: <Code className="w-10 h-10 text-black-500" />,
			title: t("landing.features.cleanCode.title"),
			description: t("landing.features.cleanCode.description"),
		},
		{
			icon: <Zap className="w-10 h-10 text-purple-500" />,
			title: t("landing.features.fastDelivery.title"),
			description: t("landing.features.fastDelivery.description"),
		},
		{
			icon: <ChartNoAxesCombined className="w-10 h-10 text-green-500" />,
			title: t("landing.features.highPerfomance.title"),
			description: t("landing.features.highPerfomance.description"),
		},
		{
			icon: <Database className="w-10 h-10 text-red-500" />,
			title: t("landing.features.dataBase.title"),
			description: t("landing.features.dataBase.description"),
		},
		{
			icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
			title: t("landing.features.custom.title"),
			description: t("landing.features.custom.description"),
		},
	];

	const handleOpenModal = (modal: boolean) => {
		setModalOpen(modal);
	};



	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Header />
			<main className="flex-grow container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 py-16">
				<div>
					<h1 className="text-5xl font-bold text-gray-800 mb-6">
						{t("landing.title")}
					</h1>
					<p className="text-xl text-gray-600 mb-8">
						{t("landing.description")}
					</p>
					<div className="flex items-center mb-6">
						<Check className="w-6 h-6 text-green-500 mr-2" />
						<span>{t("landing.professionalDesign")}</span>
					</div>
					<div className="flex items-center mb-6">
						<Check className="w-6 h-6 text-green-500 mr-2" />
						<span>{t("landing.responsive")}</span>
					</div>
					<div className="flex items-center mb-8">
						<Check className="w-6 h-6 text-green-500 mr-2" />
						<span>{t("landing.seo")}</span>
					</div>
					<Button
						handleClick={handleCopyClipboard}
						buttonClass="mb-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-10 py-4 rounded-full transition-all duration-300 text-xl font-bold shadow-lg transform hover:scale-102"
					>
						{t("landing.btnContact")}
					</Button>

					<Button
						handleClick={handleOpenModal}
						buttonClass="mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 text-white px-10 py-4 rounded-full transition-all duration-300 text-xl font-bold shadow-lg transform hover:scale-102"
					>
						{t("landing.quote")}
					</Button>

				</div>
				{showToast && (
					<Toast
						message={t("landing.toastMessage")}
						onClose={() => setShowToast(false)}
					/>
				)}

				<div className="hidden md:block aspect-[16/9]">
					<img src={"/hero.webp"}
						alt="Diseño web"
						width={800}
						height={600}
						loading="eager"
						fetchPriority="high"
						decoding="async"
						className="w-full  object-fill  md:object-cover rounded-xl shadow-2xl" />
				</div>
			</main>

			<section className="bg-white py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-12 text-gray-800">
						{t("landing.featuresTitle")}
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
								<div className="flex justify-center mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="faq" className="container mx-auto py-16">
				<h4 className="text-4xl font-bold text-gray-800 mb-12 text-center">
					{t("faqs.title")}
				</h4>
				<div className="grid md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
					{faqs.map((faq, index) => (
						<div
							key={`${faq.question}${index}`}
							className={`bg-gray-100 p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 transition-all duration-300 hover:shadow-xl ${openIndex === index
								? "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-300"
								: ""
								}`}
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex items-center text-left focus:outline-none"
							>
								<HelpCircle
									className={`w-6 h-6 mr-3 flex-shrink-0 ${openIndex === index ? "text-emerald-500" : "text-gray-500"
										}`}
								/>
								<h3
									className={`text-xl font-semibold flex-1 pr-4 ${openIndex === index ? "text-emerald-600" : "text-gray-800"
										}`}
								>
									{faq.question}
								</h3>
								{openIndex === index ? (
									<ChevronUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
								) : (
									<ChevronDown className="w-6 h-6 text-emerald-400 flex-shrink-0" />
								)}
							</button>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
										className="overflow-hidden"
									>
										<div className="mt-4">
											<p className="text-gray-600">{faq.answer}</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</section>

			<ServiceSection />


			<Footer />

			{modalOpen && (
				<Modal
					handleClick={() => handleOpenModal(false)}
					body={
						<div className="container mx-auto px-4">
							<PriceCalculator />
						</div>
					}
				/>
			)}
		</div>
	);
};

export default WebServiceLanding;

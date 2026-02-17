import { useState } from "react";
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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import PriceCalculator from "../../components/PriceCalculator";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ServiceSection } from "@/components/ServiceSection";
import { Toast } from "@/components/Toast";
import { Button } from "@/components/ui/button";
import { ComparisonTable } from "@/components/ComparasionTable";
import { PreviousWork } from "@/components/PreviousWork";

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

			<main
				id="home"
				className="relative min-h-screen flex flex-col overflow-hidden"
			>
				{/* Subtle grid texture */}
				<div
					className="absolute inset-0 opacity-[0.04] pointer-events-none"
					style={{
						backgroundImage:
							"linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",

						backgroundSize: "60px 60px",
					}}
				/>

				{/* Main hero content */}
				<div className="flex-1 flex items-center w-full px-5 sm:px-12 lg:px-20 pt-20 md:pt-24 pb-8 md:pb-16">
					<div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

						{/* Left — decorative / brand mark (desktop only) */}
						<div className="hidden md:flex items-center justify-center">

						</div>

						{/* Right — copy + CTA */}
						<div className="flex flex-col w-full min-w-0">

							<h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-5 md:mb-8 break-words">
								{t("landing.title")}
							</h1>
							<p className="text-base md:text-lg  mb-6 md:mb-8 leading-relaxed max-w-sm">
								{t("landing.description")}
							</p>

							{/* Checks */}
							<div className="flex flex-col gap-3 mb-8 md:mb-10">
								{[
									t("landing.professionalDesign"),
									t("landing.responsive"),
									t("landing.seo"),
								].map((item) => (
									<div key={item} className="flex items-center gap-3">
										<div className="w-5 h-5 rounded-full bg-blue-400/10 border border-blue-400/30 flex items-center justify-center shrink-0">
											<Check className="w-3 h-3 text-blue-400" />
										</div>
										<span className="text-sm ">{item}</span>
									</div>
								))}
							</div>

							{/* Buttons */}
							<div className="flex flex-wrap gap-3 md:gap-4">
								<Button
									onClick={handleCopyClipboard}
									className="bg-blue-400 hover:bg-blue-300 text-gray-950 font-bold px-6 md:px-8 py-3 text-sm md:text-base rounded-none transition-all duration-200"
								>
									{t("landing.btnContact")}
								</Button>
								<Button
									onClick={() => handleOpenModal(true)}
									variant="outline"
									className="  font-bold px-6 md:px-8 py-3 text-sm md:text-base rounded-none transition-all duration-200"
								>
									{t("landing.quote")}
								</Button>
							</div>

												</div>
					</div>
				</div>



				{showToast && (
					<Toast
						message={t("landing.toastMessage")}
						onClose={() => setShowToast(false)}
					/>
				)}
			</main>

			{/* Features Section */}

			<section id="features" className="bg-white py-16">
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
				<div>
				</div>
				<div className="flex-col justify-start align-start">

				</div>
			</section>
					<ComparisonTable />
			{/* Services Section */}
			<ServiceSection  />
			<PreviousWork />
				{/* FAQ Section */}
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

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
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ServiceSection } from "@/components/ServiceSection";
import { ComparisonTable } from "@/components/ComparasionTable";
import { PreviousWork } from "@/components/PreviousWork";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { HeroSection } from "@/components/Hero-section";
import Aurora from "@/components/Aurora";

const WebServiceLanding = () => {
	const { t } = useTranslation();
	const [openIndex, setOpenIndex] = useState<number | null>(null);


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



	return (
		<div className="min-h-screen bg-background flex flex-col">
			<div className=" absolute inset-0 w-full h-full">
				<Aurora colorStops={["#3a4fee", "#a1fb93", "#5e85f7"]}
					amplitude={0.5}
					blend={0.55} />
			</div>
			<main>
				<FloatingNavbar />


				<HeroSection />





				{/* Features Section */}

				<section id="features" className="py-16">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-12 ">
							{t("landing.featuresTitle")}
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div key={index} className="p-6 rounded-xl shadow-md">
									<div className="flex justify-center mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
									<p className="">{feature.description}</p>
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
				<ServiceSection />
				<PreviousWork />
				{/* FAQ Section */}
				<section id="faq" className="container mx-auto py-16">
					<h4 className="text-4xl font-bold  mb-12 text-center">
						{t("faqs.title")}
					</h4>
					<div className="grid md:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
						{faqs.map((faq, index) => (
							<div
								key={`${faq.question}${index}`}
								className={`bg-gray-100 dark:bg-neutral-950 p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 transition-all duration-300 hover:shadow-xl`}
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full flex items-center text-left focus:outline-none"
								>
									<HelpCircle
										className={`w-6 h-6 mr-3 flex-shrink-0 ${openIndex === index ? "text-emerald-500" : ""
											}`}
									/>
									<h3
										className={`text-xl font-semibold flex-1 pr-4 ${openIndex === index ? "text-emerald-600" : ""
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
												<p className="">{faq.answer}</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</section>

				<Footer />
			</main>
		</div>
	);
};

export default WebServiceLanding;

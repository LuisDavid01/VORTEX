import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Toast } from "../Toast";
import Modal from "../Modal";
import PriceCalculator from "../PriceCalculator";

const ArrowRight = () => (
	<svg
		className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
	</svg>
)

const Play = () => (
	<svg
		className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z"
		/>
	</svg>
)

export function HeroSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [showToast, setShowToast] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const { t } = useTranslation();

	const handleOpenModal = (modal: boolean) => {
		setModalOpen(modal);
	};
	function handleCopyClipboard() {
		navigator.clipboard.writeText("vrtxai@protonmail.com");
		setShowToast(true);
	}
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20 relative" id="home">
			<div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
				{/* Main Heading */}
				<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
					<span className="text-foreground">{t("landing.title")}</span>

				</h1>

				{/* Subheading */}
				<p className="text-black dark:text-white sm:text-xl md:text-2xl  text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
					{t("landing.description")}
				</p>

				{/* Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
					<Button
						onClick={handleCopyClipboard}
					>
						{t("landing.btnContact")}
					</Button>
					<Button
						onClick={() => handleOpenModal(true)}
						variant="outline"
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
			</div>
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
		</section>
	)
}


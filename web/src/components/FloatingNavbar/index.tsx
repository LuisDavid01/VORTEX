
import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { ThemeToggle } from "../ThemeToggle"
import { useTranslation } from "react-i18next";


export function FloatingNavbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(true)
	const [hasLoaded, setHasLoaded] = useState(false)
	const lastScrollY = useRef(0)
	const { t, i18n } = useTranslation();

	const navigation = [
		{ name: t("nav.home"), href: "#home" },
		{ name: t("nav.features"), href: "#features" },
		{ name: t("nav.faq"), href: "#faq" },
		{ name: t("nav.services"), href: "#services" },
	]
	useEffect(() => {
		const timer = setTimeout(() => {
			setHasLoaded(true)
		}, 100)

		const controlNavbar = () => {
			if (typeof window !== "undefined") {
				const currentScrollY = window.scrollY


				// Only hide/show after scrolling past 50px to avoid flickering at top
				if (currentScrollY > 50) {
					if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
						// Scrolling down - hide navbar
						setIsVisible(false)
					} else if (lastScrollY.current - currentScrollY > 5) {
						// Scrolling up - show navbar
						setIsVisible(true)
					}
				} else {
					setIsVisible(true)
				}

				lastScrollY.current = currentScrollY
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar, { passive: true })
			console.log("[v0] Scroll listener added")

			return () => {
				window.removeEventListener("scroll", controlNavbar)
				clearTimeout(timer)
				console.log("[v0] Scroll listener removed")
			}
		}

		return () => clearTimeout(timer)
	}, []) // Removed lastScrollY dependency to prevent infinite re-renders

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const scrollToSection = (href: string) => {
		if (href.startsWith("/")) {
			return
		}

		const element = document.querySelector(href)
		if (element) {

			const rect = element.getBoundingClientRect()
			const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
			const elementAbsoluteTop = rect.top + currentScrollY
			const navbarHeight = 100
			const targetPosition = Math.max(0, elementAbsoluteTop - navbarHeight)


			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			})
		} else {
		}
		setIsOpen(false)
	}

	return (
		<>
			<nav
				className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 md:-translate-y-24 opacity-0"
					} ${hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
				style={{
					transition: hasLoaded ? "all 0.5s ease-out" : "opacity 0.8s ease-out, transform 0.8s ease-out",
				}}
			>
				{/* Main Navigation */}
				<div className="w-[90vw] max-w-xs md:max-w-4xl mx-auto">
					<div className="dark:bg-black/40 bg-white/50 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 md:px-6 md:py-2">
						<div className="flex items-center justify-between gap-4">
							{/* Logo */}
							<a
								href="/"
								className="flex items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
							>
								<div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
									<img
										src="/vortex.svg"
										alt="Cliste"
										width={40}
										height={40}
										className="w-full h-full object-contain"
									/>
								</div>
							</a>

							{/* Desktop Navigation */}
							<div className="hidden md:flex items-center space-x-8">
								{navigation.map((item) =>
									item.href.startsWith("/") ? (
										<a
											key={item.name}
											href={item.href}
											className=" hover:scale-105 transition-all duration-200 font-medium cursor-pointer"
										>
											{item.name}
										</a>
									) : (
										<button
											key={item.name}
											onClick={() => scrollToSection(item.href)}
											className=" hover:scale-105 transition-all duration-200 font-medium cursor-pointer"
										>
											{item.name}
										</button>
									),
								)}
							</div>


							<div className="hidden md:ml-3 md:block">
								<ThemeToggle />
							</div>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="md:hidden dark:text-white text-black hover:scale-110 transition-transform duration-200 cursor-pointer"
							>
								<div className="relative w-6 h-6">
									<Menu
										size={24}
										className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
											}`}
									/>
									<X
										size={24}
										className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
											}`}
									/>
								</div>
							</button>

						</div>
					</div>
				</div>

				<div className="md:hidden relative">
					{/* Backdrop overlay */}
					<div
						className={`fixed inset-0  backdrop-blur-sm transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
							}`}
						onClick={() => setIsOpen(false)}
						style={{ top: "0", left: "0", right: "0", bottom: "0", zIndex: -1 }}
					/>

					{/* Menu container */}
					<div
						className={`mt-2 w-[90vw] max-w-xs mx-auto transition-all duration-500 ease-out transform-gpu ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
							}`}
					>
						<div className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl">
							<div className="flex flex-col space-y-1">
								{navigation.map((item, index) =>
									item.href.startsWith("/") ? (
										<a
											key={item.name}
											href={item.href}
											className={` hover:bg-white/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${isOpen ? "animate-mobile-menu-item" : ""
												}`}
											style={{
												animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
											}}
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</a>
									) : (
										<button
											key={item.name}
											onClick={() => scrollToSection(item.href)}
											className={`hover:bg-white/10 rounded-lg px-3 py-3 text-left transition-all duration-300 font-medium cursor-pointer transform hover:scale-[1.02] hover:translate-x-1 ${isOpen ? "animate-mobile-menu-item" : ""
												}`}
											style={{
												animationDelay: isOpen ? `${index * 80 + 100}ms` : "0ms",
											}}
										>
											{item.name}
										</button>
									),
								)}
								<ThemeToggle />
								<div className="h-px bg-white/10 my-2" />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}


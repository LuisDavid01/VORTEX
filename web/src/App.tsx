import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import WebServiceLanding from "./MainPages/LandingPage";
import ShakeQR from "./MainPages/ShakeQR";
import { ThemeProvider } from "./components/ThemeProvider";

const App = () => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<WebServiceLanding />} />
					</Routes>
					<ShakeQR />
				</BrowserRouter>
			</I18nextProvider>
		</ThemeProvider>
	);
};

export default App;

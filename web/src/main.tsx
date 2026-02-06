import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/fonts.css"
import "./styles/main.css"
import "../i18n";

createRoot(document.getElementById("root")!).render(<App />);

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>{t("footer.vortex")}</p> 
		<button 
		onClick={async () =>{
			await navigator.clipboard.writeText("vrtxai@protonmail.com");
		}}
		className="underline cursor-pointer hover:underline-offset-2 hover:text-blue-500"
		>
		vrtxai@protonmail.com
		</button>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable react-hooks/exhaustive-deps */
//React
import React, {
  useState,
  useRef,
  FormEvent,
  useCallback,
  useEffect,
} from "react";

//External libraries
import emailjs from "@emailjs/browser";
import { MailCheck } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

//Interfaces
import { IContactFormData } from "../../Interfaces/IContactFormData";
import { IReCaptchaData } from "../../Interfaces/IReCaptchaData";
import { IReCaptchaResponse } from "../../Interfaces/IReCaptchaResponse";
//Internal Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Spinner from "../../Components/Spinner";
import Modal from "../../Components/Modal";

//Styles
import "./ContactPage.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  //UseStates
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submitErrorStatus, setSubmitErrorStatus] = useState<string>("");
  const [, setSubmitSuccessStatus] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();

  //UseRef

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  //UseEffect

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (submitErrorStatus) {
      setSubmitErrorStatus("");
    }
  }, [formData, recaptchaToken]);

  //Handlers

  const handleRecaptcha = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
//llamada al api para verificar el reCaptcha
	const verifyReCaptcha = async (data: IReCaptchaData) => {
		try{
			const response = await fetch('https://vortexsecurity.vercel.app/VerifyReCaptcha',{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',

				},
				body: JSON.stringify(data)
			}); 
			if(!response.ok){
				return false;
			}
			const result: IReCaptchaResponse = await response.json();
			if(result.success != null && result.success == true) return true
			return false;
		}catch(error){
			console.error('Error de google al verificar ReCaptcha');
			throw error;
		
		}
	}
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitErrorStatus("");
    setSubmitSuccessStatus("");

    if (!formRef.current || !recaptchaToken) {
      setSubmitErrorStatus("Verifica el captcha");
      return;
    }

		//se crea el objeto de data para enviarselo al api de google
	const data: IReCaptchaData = {
		response: recaptchaToken
		};
		//Se llama al metodo para verificar el captcha
	const tokenVerify = await verifyReCaptcha(data);
  if(!tokenVerify || tokenVerify === null){
    setSubmitErrorStatus("token no valido");
    return;
  }
    setSubmitting(true);

    emailjs
      .sendForm("service_p3fiwx9", "template_va5npil", formRef.current, {
        publicKey: "16_baQabeZgxwaKgu",
      })
      .then(
        () => {
          setModal(true);
          setFormData({ name: "", email: "", message: "" });
          setRecaptchaToken(null);
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
        },
        (error) => {
          setSubmitErrorStatus("Error al enviar el mensaje");
          console.error("Error:", error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });

    setTimeout(() => {
      setSubmitSuccessStatus("");
    }, 3000);
  };

  const handleOpenModal = (modal: boolean) => {
    setModal(modal);
  };

  if (loading) {
    return <Spinner overlay bgColor="bg-white" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("contact.title")}
          </h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                {t("contact.nameLabel")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                {t("contact.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-4 w-full">
              <div className="flex justify-center">
                <div className="captcha-container">
                  <ReCAPTCHA
                    hl="en"
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_KEY}
                    onChange={handleRecaptcha}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={submitting}
            >
              {t("contact.submitButton")}
            </button>
          </form>
        </div>
      </main>
      <Footer />
      {submitErrorStatus && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {submitErrorStatus}
        </div>
      )}
      {modal && (
        <Modal
          handleClick={() => handleOpenModal(false)}
          body={
            <div className="container mx-auto p-4">
              <div className="bg-gray-100 p-8 rounded flex-col flex items-center gap-5">
                <MailCheck className="text-green-400 w-15 h-15 " />
                <div className="flex justify-center">
                  {t("contact.succesMessage")}
                </div>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default ContactPage;

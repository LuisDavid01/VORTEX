import React, {
  useState,
  useRef,
  FormEvent,
  useCallback,
  useEffect,
} from "react";
import emailjs from "@emailjs/browser";
import Header from "../../Components/Header";
import { IContactFormData } from "../../Interfaces/IContactFormData";
import Footer from "../../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactPage.css";
import Spinner from "../../Components/Spinner";
import Modal from "../../Components/Modal";
import { MailCheck } from "lucide-react";

const ContactPage = () => {
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

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitErrorStatus("");
    setSubmitSuccessStatus("");

    if (!formRef.current || !recaptchaToken) {
      setSubmitErrorStatus("Verifica el captcha");
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
          <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>

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
                      Su correo ha sido enviado exitosamente
                    </div>
                  </div>
                </div>
              }
            />
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Nombre
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
                Correo Electrónico
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
                Mensaje
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
              Enviar Mensaje
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

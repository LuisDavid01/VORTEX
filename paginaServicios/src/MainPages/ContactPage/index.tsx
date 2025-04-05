import React, { useState, useRef, FormEvent, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../Components/Header";
import { IContactFormData } from "../../Interfaces/IContactFormData";
import Footer from "../../Components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
const ContactPage = () => {
  const [formData, setFormData] = useState<IContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
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

    if (!formRef.current || !recaptchaToken){
      return setSubmitStatus("Verifica el captcha");
    } 

    emailjs
      .sendForm("service_p3fiwx9", "template_va5npil", formRef.current, {
        publicKey: "16_baQabeZgxwaKgu",
      })
      .then(
        () => {
          setSubmitStatus("Mensaje enviado exitosamente");

          setFormData({ name: "", email: "", message: "" });
          setRecaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        } ,
        (error) => {
          setSubmitStatus("Error al enviar el mensaje");
          console.error("Error:", error.text);
        }
      );

    setTimeout(() => {
      setSubmitStatus("");
    }, 3000);
  };

  const handleRecaptcha = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>

          {submitStatus && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {submitStatus}
            </div>
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

            <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_KEY} 
                onChange={handleRecaptcha}
              />
            </div>

            <button
              type="submit"
              disabled={!recaptchaToken}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
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

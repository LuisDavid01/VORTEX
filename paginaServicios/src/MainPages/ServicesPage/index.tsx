import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import midImage from "../../Assets/ServicesImg/midImage.jpg";
import dashboard from "../../Assets/ServicesImg/dashboard.jpg";
import databaseImg from "../../Assets/ServicesImg/database.jpg";
import landingPageImg from "../../Assets/ServicesImg/landingImg.jpg";
import ecommerceImg from "../../Assets/ServicesImg/ecommerce.jpg";
import microServiceImg from "../../Assets/ServicesImg/microservice.jpg";
import apiImg from "../../Assets/ServicesImg/api.jpg";
import whyUsImg from "../../Assets/ServicesImg/whyus.jpg";
//import Lucide from "lucide-react";
const ServicePage = () => {

    const servicios = [
        {
            title: "Landing pages",
            img: landingPageImg,
            descripcion: "Construimos landing pages centrada en conseguir leads para su empresa,\n optimizada para altas tasas de conversion."

        },

        {
            title: "Comercio electronico",
            img: ecommerceImg,
            descripcion: "Ofrecemos servicios a emprendedores que quieran modernizar sus sitemas de comercio, te ayudamos a explorar la casi inifita posibilidad de crecimiento que ofrece internet. Soportamos metodos de pago modernos y buenas practicas para mantener a tu negocio y tus clientes seguros en linea."

        },

        {
            title: "Paginas coorporativas",
            img: dashboard,
            descripcion: "Desarrollamos aplicaciones corporativas principalmente dedicadas a dashboards, recursos humanos y analisis de datos."

        },
        {
            title: "Microservicios",
            img: microServiceImg,
            descripcion: "¿Hay partes de su aplicación que requieren ser reutilizadas en varios sectores? ¿Necesita escalar una parte especifica de su aplicación pero resulta muy cara hacer cambios en el mismo monolito? ¿Tiene un sistema de legado que necesita actualizarce? Lo que necesita es implementar microservicios"

        },

        {
            title: "Desarrollo de bases de datos",
            img: databaseImg,
            descripcion: "Diseñamos el diseño y arquitectura de bases de datos relacionales y no relacionales utlizando tecnologias populares en la nube."

        },

        {
            title: "Desarrollo de APIs robustas para alta carga de usuarios.",
            img: apiImg,
            descripcion: "Creamos APIs que mantienen tu logica de negocio segura y mantiendo rendimiento excelente a altas cargas de trabajo."

        },
    ];



    
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="text-center justify-items-center">
            <h2 className="lg:text-7xl md:text-4xl sm:text-4xl font-extrabold pb-6 text-gray-900 tracking-tight">Desarollo de software y<br /> aplicaciones</h2>
            <div className="container w-240 sm:w-240 ">
                <p className="lg:text-xl md:text-xl sm:text-lg px-6 mx-16 leading-relaxed text-gray-700">
                    En vortex, nos centramos en ofrecer soluciones seguras, eficientes, versatiles y escalables. trabajamos con pequeñas paginas 
                    de nicho que requiren una pagina sencilla para crear su funnel, empresas en crecimiento que requiren de dashboards y manejo de recursos humanos,
                    hasta comercios con una base de clientes que necesita una pagina rapida y robusta.
                </p>
            </div>

            </main>
            <section className="bg-white pt-8 pb-20 text-center justify-items-center">
            
                <img className="w-full h-100 object-cover object-bottom mb-8" src={midImage} alt="mid image"/>
                <div className="container w-250 pt-8">
                    <p className="lg:text-xl md:text-xl sm:text-lg px-6 mx-16 leading-relaxed text-gray-700">
                        Disponemos de poderosas herramientas digitales basadas en IA que cubren el front-end , back-end, aplicaciones web y el contenido.
                        Nos encargamos de desarrollar la infraestructura y la arquitectura de su aplicación utlizando los nuevos y modernos estandares de la industria 
                        desplegando su aplicación totalmente en la nube con precios asequibles para su emprendimiento.
                    </p>
                </div>
            </section>
            <section className="bg-white pt-8 mx-30 px-16">
            <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                    <h2 className="text-6xl font-bold  text-gray-800">¿Porque elegirnos a nosotros?</h2>
                
                    <div className="container w-180  pt-8">
                        <p className="lg:text-xl md:text-xl sm:text-lg px-6 leading-relaxed text-gray-700">
                            Lo que nos diferencia es nuestra capacidad para entregar productos solidos, escalables y utilizando las ultimas tecnologias adaptadas a estandares
                            actuales de diseño y arquitectura. Nuestros servicios estan centrados para consumir la menor cantidad costos de consumo de recursos requeridos
                            haciendonos una excelente opcion para trabajar con servicios en la nube. 
                            Adaptandonos a las necesitades de nuestros cliente y sobrepasando expectativas es como queremos ser recordados. 
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img
                        className="w-full h-64 lg:h-96 object-contain rounded shadow-md"
                        src={whyUsImg}
                        alt="Why choose us"
                    />
                </div>
            </div>
            </section>
            
            <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800">
                        Nuestros servicios
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {servicios.map((servicios, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                        <div className="flex justify-center overflow-hidden rounded mb-4">
                            <img className="w-full h-64 object-fill lg:object-fill md:object-cover " src={servicios.img} alt="image servicio"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{servicios.title}</h3>
                        <p className="text-gray-600 font-medium pb-3">{servicios.descripcion}</p>
                </div>
                ))}
                </div>

                </div>

            </section>

            <Footer/>
        </div>
    );
}

export default ServicePage;

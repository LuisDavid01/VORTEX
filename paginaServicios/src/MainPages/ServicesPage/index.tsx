import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import midImage from "../../Assets/ServicesImg/midImage.jpg";
import dashboard from "../../Assets/ServicesImg/dashboard.jpg";
import databaseImg from "../../Assets/ServicesImg/database.jpg";
import landingPageImg from "../../Assets/ServicesImg/landingImg.jpg";
import ecommerceImg from "../../Assets/ServicesImg/ecommerce.jpg";
import microServiceImg from "../../Assets/ServicesImg/microservice.jpg"
import apiImg from "../../Assets/ServicesImg/api.jpg"
//import Lucide from "lucide-react";
const ServicePage = () => {

    const servicios = [
        {
            title: "Landing pages",
            img: landingPageImg,
            descripcion: "Construimos landing pages centrada en conseguir leads para su empresa,\n optimizada para altas tasas de conversion "

        },

        {
            title: "Comercio electronico",
            img: ecommerceImg,
            descripcion: "Soportamos metodos de pago modernos"

        },

        {
            title: "Paginas coorporativas",
            img: dashboard,
            descripcion: "Desarrollamos aplicaciones corporativas principalmente dedicadas al analisis de datos"

        },
        {
            title: "Microservicios",
            img: microServiceImg,
            descripcion: "descripcion testeo"

        },

        {
            title: "Desarrollo de bases de datos",
            img: databaseImg,
            descripcion: "Diseño y creacion de bases de datos utlizando tecnologias populares en local o cloud"

        },

        {
            title: "Desarrollo de APIs optimizada para alta carga de usuarios",
            img: apiImg,
            descripcion: "descripcion testeo"

        },
    ];



    
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header isBackActive={true}/>
            <main className="text-center justify-items-center">
            <h2 className="lg:text-6xl md:text-4xl sm:text-4xl  font-bold  py-6">Desarollo de software y<br /> aplicaciones</h2>
            <div className="container w-240 sm:w-240 ">
                <p className="lg:text-lg md:text-md  sm:text-sm  px-6 mx-16">
                    En vortex, nos centramos en ofrecer soluciones seguras, eficientes, versatiles y escalables. trabajamos con pequeñas paginas 
                    de nicho que requiren una pagina sencilla para crear su funnel, empresas en crecimiento que requiren de dashboards y manejo de recursos humanos,
                    hasta comercios con una base de clientes que necesita una pagina rapida y robusta.
                </p>
            </div>

            </main>
            <section className="bg-white py-8 text-center justify-items-center">
            
                <img className="w-full h-90 object-cover object-bottom" src={midImage} alt="mid image"/>
                <div className="container w-250 pt-8">
                <p className="text-md lg:text-lg sm:text-base pt-3 px-6 mx-16">
                    Disponemos de poderosas herramientas digitales basadas en IA que cubren el front-end , back-end, aplicaciones web y el contenido.
                    Nos encargamos de desarrollar la infraestructura y la arquitectura de su aplicación utlizando los nuevos y modernos estandares de la industria 
                    desplegando su aplicación totalmente en la nube con precios asequibles para su bolsillo.
                </p>
            </div>
            </section>
            <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-gray-800">
                        Nuestros servicios
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {servicios.map((servicios, index) => (
                    <div key={index} className="bg-gray-50  rounded-xl ">
                        <div className="flex justify-center overflow-hidden rounded mb-4">
                            <img className="w-full h-64 object-fill lg:object-fill md:object-cover " src={servicios.img} alt="image servicio"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{servicios.title}</h3>
                        <p className="text-gray-600">{servicios.descripcion}</p>
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

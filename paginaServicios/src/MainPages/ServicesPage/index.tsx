import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import microServicios from "../../Assets/Monolítica-vs-microservicios.jpg"
//import Lucide from "lucide-react";
const ServicePage = () => {

    const servicioFrontEnd = [
        {
            title: "Landing pages",
            img: "image.png",
            descripcion: "descripcion testeo"

        },

        {
            title: "Comercio electronico",
            img: microServicios,
            descripcion: "descripcion testeo"

        },

        {
            title: "Paginas coorporativa",
            img: "image.png",
            descripcion: "descripcion testeo"

        },
    ];

    const servicioBackEnd = [
        {
            title: "Micro sercivios",
            img: microServicios,
            descripcion: "descripcion testeo"

        },

        {
            title: "Desarrollo de bases de datos",
            img: "image.png",
            descripcion: "descripcion testeo"

        },

        {
            title: "Desarrollo de APIs optimizada para alta carga de usuarios",
            img: "image.png",
            descripcion: "descripcion testeo"

        },
    ];

    
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header isBackActive={true}/>
            <main className="text-center">
            <h2 className="text-5xl font-bold text-gray-800 py-6">Nuestros servicios</h2>
            </main>
            <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">
                        Servicio Front end
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {servicioFrontEnd.map((servicioBackEnd, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <div className="flex justify-center mb-4"><p>{servicioBackEnd.img}</p></div>
                        <h3 className="text-xl font-semibold mb-4">{servicioBackEnd.title}</h3>
                        <p className="text-gray-600">{servicioBackEnd.descripcion}</p>
                </div>
                ))}
                </div>

                </div>

            </section>
            <section className="bg-white py-16">
            <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">
                        Servicio backend
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    {servicioBackEnd.map((servicioBackEnd, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
                        <div className="flex justify-center mb-4">
                            <img className="w-64 h-64 object-contain md:object-cover" src={servicioBackEnd.img} alt="image backend"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{servicioBackEnd.title}</h3>
                        <p className="text-gray-600">{servicioBackEnd.descripcion}</p>
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

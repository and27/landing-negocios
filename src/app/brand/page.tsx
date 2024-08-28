import VideoComponent from "@/components/Video";
import Image from "next/image";
import Link from "next/link";

const Brand5DaysPage: React.FC = () => {
  return (
    <>
      <section
        className="bg-emerald-800 text-neutral-100 py-20 px-3"
        style={{ background: "#000D14" }}
      >
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-semibold text-black text-center py-3 z-50 px-2">
          ¡Última oportunidad! El acceso gratuito a nuestro reto termina hoy.{" "}
          <a
            className="underline font-bold"
            href="https://wa.me/+593997019475?text=Hola%2C%20quiero%20unirme%20al%20reto%20de%20los%205%20d%C3%ADas"
          >
            ¡Inscríbete ya!
          </a>
        </div>

        <div className="container mx-auto mt-10 md:mt-20 max-w-4xl flex flex-col items-center">
          <div className="text-center mb-6">
            <Image
              src="/logo.png"
              alt="Brand 5 Days"
              width={50}
              height={50}
              className="rounded-lg md:w-16 md:h-16 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-center mx-auto tracking-tight mb-5 md:mb-10">
            <span className="bg-neutral-800/50 px-5 py-1 rounded-md text-3xl md:text-5xl leading-snug">
              Transforma tu Marca en 5 Días
            </span>
            <br /> Crea Contenido Irresistible que Conecte y Venda
          </h1>
          <p className="text-center mt-5 md:text-xl max-w-3xl mx-auto">
            Únete a nuestro reto y descubre cómo aumentar la interacción y
            ventas de tu marca en solo 5 días.
          </p>
          <div className="flex justify-center mt-10">
            <Link
              href="https://wa.me/+593997019475?text=Hola%2C%20quiero%20unirme%20al%20reto%20de%20los%205%20d%C3%ADas"
              className="bg-green-500 text-neutral-900 font-semibold py-3 px-8 
              rounded-md text-xl hover:bg-green-600 transition-transform hover:scale-110 transform duration-300 ease-in-out"
            >
              {`QUIERO UNIRME >>`}
            </Link>
          </div>
          <VideoComponent />
        </div>
      </section>
    </>
  );
};

export default Brand5DaysPage;

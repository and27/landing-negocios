import Image from "next/image";
import Link from "next/link";

const Brand5DaysPage: React.FC = () => {
  return (
    <>
      <section className="bg-emerald-800 text-neutral-100 py-20 px-2">
        <div className="fixed top-0 left-0 right-0 bg-neutral-800 text-white text-center py-3 z-50">
          ¡Última oportunidad! El acceso gratuito al reto termina en pocos días.{" "}
          <a href="#cta" className="underline font-bold">
            ¡Inscríbete ya!
          </a>
        </div>

        <div className="container mx-auto mt-20 max-w-4xl flex flex-col items-center">
          <div className="text-center mb-6">
            <Image
              src="/logo.png"
              alt="Brand 5 Days"
              width={70}
              height={70}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center mx-auto tracking-tight mb-10">
            <span className="bg-emerald-900/70 px-5 py-1 rounded-md text-4xl md:text-5xl leading-snug">
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
              href="https://wa.me/5212345678901?text=Hola%2C%20quiero%20unirme%20al%20reto%20Brand%205%20Days"
              className="bg-neutral-800 border-2 border-neutral-100 
            text-neutral-100 font-semibold py-2 px-8 rounded-md text-xl hover:bg-neutral-900 hover:border-neutral-900"
            >
              {`QUIERO UNIRME >>`}
            </Link>
          </div>
          <video className="mt-10 w-full" controls>
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5
          </video>
        </div>
      </section>
    </>
  );
};

export default Brand5DaysPage;

import Image from "next/image";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] mx-auto h-screen items-center">
        <div className="flex flex-col gap-6">
          <p className="uppercase">Academia de negocios</p>
          <h1 className="text-5xl font-bold">
            Descubre los Secretos para Convertir tu Idea en un{" "}
            <span className="text-red-700 underline bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Negocio Exitoso
            </span>
          </h1>
          <p className="text-lg">
            Bienvenido al Taller de Emprendimiento Estratégico, donde aprenderás
            los 7 pasos clave para lanzar y hacer crecer tu propio negocio de
            manera efectiva.
          </p>
          <div className="flex gap-10 mt-8">
            <a
              className="bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-800"
              href="https://wa.me/+593997019475?text=Hola%20quiero%20más%20información%20sobre%20el%20taller"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Quiero registrarme ahora!
            </a>
            <InfoCard number={"100+"} description="Estudiantes" />
            <InfoCard number={"4.7"} description="Ranking promedio" />
          </div>
        </div>
        <Image
          src="/heroImage.jpg"
          width={700}
          height={700}
          alt="Hero"
          className="absolute right-0"
        />
        {/* <video autoPlay muted loop className="absolute right-0 h-full">
          <source src="/videopromo.mp4" type="video/mp4" />
        </video> */}
      </main>
    </div>
  );
};

export default Hero;

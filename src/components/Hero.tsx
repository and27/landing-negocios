import Image from "next/image";
import InfoCard from "./InfoCard";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-[1280px] mx-auto h-screen items-center">
        <div className="flex flex-col gap-6">
          <p className="uppercase">Academia de negocios</p>
          <h1 className="text-5xl font-bold">
            Descubre los Secretos para Convertir tu Idea en un Negocio Exitoso
          </h1>
          <p className="text-lg">
            Bienvenido al Taller de Emprendimiento Estratégico, donde aprenderás
            los pasos clave para lanzar y hacer crecer tu propio negocio de
            manera efectiva.
          </p>
          <div className="flex gap-10 mt-8">
            <button className="bg-red-700 text-white px-6 rounded-lg text-lg font-semibold">
              ¡Quiero registrarme ahora!
            </button>
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
      </main>
    </div>
  );
};

export default Hero;

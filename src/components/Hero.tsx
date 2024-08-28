import Image from "next/image";
import InfoCard from "./InfoCard";
import ButtomLink from "./ButtonLink";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="grid grid-cols-1 lg:grid-cols-2 max-w-[1280px] mx-auto h-screen items-center p-5">
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-center">
            <Image
              src="/logo.png"
              alt="Brand 5 Days"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <p className="uppercase text-sm md:text-base text-neutral-400">
              Programa de negocios de alto impacto
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Descubre los Secretos para hacer crecer tu{" "}
            <span className="text-red-700 underline bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Negocio
            </span>
          </h1>
          <p className="md:text-lg">
            Aprenderás los 7 pasos clave para lanzar y hacer crecer tu propio
            negocio de manera exponencial.
          </p>
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            <ButtomLink
              className="uppercase"
              href="https://wa.me/+593997019475?text=Hola%20quiero%20más%20información%20sobre%20el%20taller"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Quiero registrarme >>`}
            </ButtomLink>
            <div className="flex gap-6 justify-between">
              <InfoCard number={"100+"} description="Estudiantes" />
              <InfoCard number={"4.7"} description="Ranking promedio" />
            </div>
          </div>
        </div>
        {/* <Image
          src="/heroImage.jpg"
          width={700}
          height={700}
          alt="Hero"
          className="absolute right-0 hidden lg:block"
        /> */}
        <video autoPlay muted loop className="absolute right-10 h-full">
          <source src="/videopromo2.mp4" type="video/mp4" />
        </video>
      </main>
    </div>
  );
};

export default Hero;

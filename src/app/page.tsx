import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Scurve from "@/components/Scurve";
import TimerBanner from "@/components/TimerBanner";

export default function Home() {
  return (
    <>
      <TimerBanner />
      <Hero />
      <Benefits />
      <Scurve
        title="Garantía: 100% de satisfacción"
        description="Únete a nuestro exclusivo taller donde te guiaré paso a paso. ¡Reserva tu lugar ahora y asegura tu acceso! Estamos tan seguros de la calidad del taller que garantizamos tu satisfacción total o te devolvemos tu inversión."
        cta="¡Quiero ser parte!"
        image="/person.jpg"
      />
    </>
  );
}

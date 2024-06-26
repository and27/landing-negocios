import Benefits from "@/components/Benefits";
import Date from "@/components/Date";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Scurve from "@/components/Scurve";
import Temario from "@/components/Temario";
import TestimonialSection from "@/components/TestimonialSection";
import TimerBanner from "@/components/TimerBanner";

export default function Home() {
  return (
    <>
      <TimerBanner />
      <Hero />
      <Date />
      <Benefits />
      <Temario />
      <TestimonialSection />
      <Scurve
        title="Garantía: 100% de satisfacción"
        description="Únete a nuestro exclusivo taller donde te guiaré paso a paso. ¡Reserva tu lugar ahora y asegura tu acceso! Estamos tan seguros de la calidad del taller que garantizamos tu satisfacción total o te devolvemos tu inversión."
        cta="¡Quiero ser parte!"
        image="/person.jpg"
      />
      <Footer />
    </>
  );
}

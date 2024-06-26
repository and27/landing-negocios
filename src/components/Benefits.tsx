interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-4xl mb-4 text-left">{icon}</p>
      <h3 className="text-xl font-semibold text-left">{title}</h3>
      <p className="text-lg text-neutral-300 text-left">{description}</p>
    </div>
  );
};

const BenefitsList = [
  {
    title: "Descubre",
    icon: "🌊",
    description:
      "Descubre cómo surgieron ideas innovadoras en 'océanos azules'.",
  },
  {
    title: "Aprende",
    icon: "🎓",
    description:
      "Aprende a identificar y validar oportunidades de mercado para asegurar un lanzamiento exitoso.",
  },
  {
    title: "Desarrolla",
    icon: "🛠",
    description:
      "Desarrolla un Producto Mínimo Viable (MVP) eficiente sin desperdiciar recursos.",
  },
  {
    title: "Diseña",
    icon: "🎨",
    description:
      "Diseña modelos de negocio innovadores que maximicen tu impacto.",
  },
  // {
  //   title: "Domina",
  //   icon: "💡",
  //   description:
  //     "Domina estrategias financieras inteligentes para impulsar el crecimiento de tu negocio desde el principio.",
  // },
  // {
  //   title: "Construye",
  //   icon: "🏗",
  //   description:
  //     "Construye un plan de marketing efectivo y crea una marca sólida que conecte con tu audiencia.",
  // },
  // {
  //   title: "Lanza",
  //   icon: "🚀",
  //   description:
  //     "Lanza tu producto con una estrategia que no solo genere interés, sino que también impulse un impacto global positivo.",
  // },
];

const Benefits = () => {
  return (
    <section className="max-w-[1280px] mx-auto text-center py-[4rem]">
      <h2 className="text-3xl my-[4rem]  font-extrabold">
        ¿Qué vas a aprender?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {BenefitsList.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
      <p className="my-[4rem] text-xl">y mucho más...</p>
    </section>
  );
};

export default Benefits;

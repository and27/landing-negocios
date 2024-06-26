interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-4xl mb-4 text-center">{icon}</p>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <p className="text-lg text-neutral-300 text-center">{description}</p>
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
    description: "Aprende a identificar y validar oportunidades de mercado.",
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
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 my-[4rem] md:my-[8rem]">
      <h2 className="text-3xl mb-[6rem] text-center font-extrabold">
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
      <p className="mt-[4rem] text-xl text-center">y mucho más...</p>
    </section>
  );
};

export default Benefits;

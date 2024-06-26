import Image from "next/image";
interface ScurveProps {
  title: string;
  description: string;
  cta: string;
  image: string;
}

const Scurve = ({ title, description, cta, image }: ScurveProps) => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-left">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
        <div className="relative">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <a
            className="bg-red-700 text-white px-6 py-3 rounded-lg text-lg text-center font-semibold hover:bg-red-800"
            href="https://wa.me/+593997019475?text=Hola%20quiero%20más%20información%20sobre%20el%20taller"
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Scurve;

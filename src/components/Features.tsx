interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl">
      <div className="mb-8 w-12 h-12 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-base font-normal text-white mb-4 leading-6 font-poppins">
        {title}
      </h3>
      <p className="text-base text-white/80 leading-6 max-w-xs font-inter">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureCard
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12L28 20H36L29 25L32 33L24 28L16 33L19 25L12 20H20L24 12Z"
                  stroke="#FED834"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Décisions Basées sur les Données"
            description="Les agriculteurs prennent des décisions éclairées basées sur des informations en temps réel"
          />
          <FeatureCard
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24C34 18.48 29.52 14 24 14ZM24 30C20.69 30 18 27.31 18 24C18 20.69 20.69 18 24 18C27.31 18 30 20.69 30 24C30 27.31 27.31 30 24 30Z"
                  stroke="#81C784"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 20V28"
                  stroke="#81C784"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Pratiques Durables"
            description="Impact environnemental réduit grâce à l&apos;agriculture de précision"
          />
          <FeatureCard
            icon={
              <svg
                className="w-full h-full"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12H36V36H12V12Z"
                  stroke="#FED834"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 8V16"
                  stroke="#FED834"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Croissance Économique"
            description="Augmentation des revenus et accès aux services financiers"
          />
        </div>
      </div>
    </section>
  );
}


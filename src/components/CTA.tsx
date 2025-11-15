export default function CTA() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#1B5E20] to-[#4FC3F7]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-normal text-white mb-6 font-poppins">
          Rejoignez la révolution de l&apos;agriculture intelligente
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-inter">
          Transformez vos opérations agricoles avec des insights basés sur les
          données et des recommandations IA
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-[#1B5E20] rounded-2xl text-sm font-medium shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow font-poppins flex items-center">
            Demander une démo
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.33}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-2xl text-sm font-medium hover:bg-white/10 transition-colors font-poppins">
            Devenir Partenaire
          </button>
        </div>
      </div>
    </section>
  );
}


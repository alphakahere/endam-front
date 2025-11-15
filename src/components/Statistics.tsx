interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  iconBg: string;
}

function StatCard({ value, label, icon, iconBg }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_8px_10px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBg}`}
        >
          {icon}
        </div>
        <div>
          <div className="text-base font-normal text-[#1B5E20] leading-6">
            {value}
          </div>
          <div className="text-xs font-normal text-[#8C6E5A] leading-4">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-16 px-8 bg-gradient-to-br from-[#1B5E20]/5 via-[#4FC3F7]/5 to-[#81C784]/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            value="55+"
            label="Agriculteurs accompagnés"
            icon={
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconBg="bg-[#4FC3F7]"
          />
          {/* Add more stat cards as needed */}
        </div>
      </div>
    </section>
  );
}


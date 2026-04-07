"use client";

export default function FlexibleAccess2Section() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold text-[#898989] mb-4">
            Flexible Access Model
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
          >
            Fitur Unggulan Platform
          </h2>

          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-[#898989] text-sm md:text-base px-2">
            Dirancang untuk membantu pelaku usaha dan brand mengoptimalkan
            kampanye influencer secara strategis dan terukur.
          </p>
        </div>

        {/* FEATURE 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-main-blue mb-4">
              AI Influencer Matching
            </h3>
            <p className="text-black text-sm md:text-base">
              Algoritma menganalisis niche, demografi audiens, serta tingkat
              engagement untuk merekomendasikan influencer yang paling relevan.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#2A5579] rounded-xl p-4 md:p-6 shadow-2xl">
              <img
                src="/img/system-preview.png"
                alt="Feature 1"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* FEATURE 2 (REVERSE) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#2A5579] rounded-xl p-4 md:p-6 shadow-2xl">
              <img
                src="/img/system-optimation.png"
                alt="Feature 2"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-main-blue mb-4">
              Budget Simulation Engine
            </h3>
            <p className="text-black text-sm md:text-base">
              Simulasi distribusi anggaran berdasarkan estimasi performa sebelum
              kampanye dijalankan.
            </p>
          </div>
        </div>

        {/* FEATURE 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* TEXT */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-main-blue mb-4">
              Payment Tracking
            </h3>
            <p className="text-black text-sm md:text-base">
              Dashboard pembayaran untuk memantau transaksi kampanye secara
              real-time dan memastikan pengelolaan anggaran berjalan transparan
              dan terkontrol.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#2A5579] rounded-xl p-4 md:p-6 shadow-2xl">
              <img
                src="/img/system-payment-tracking.png"
                alt="Feature 3"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* BUTTON */}
      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="px-6 md:px-8 py-2 md:py-3 rounded-xl bg-main-blue text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
        >
          Jelajahi Fitur Lengkap
        </a>
      </div>
    </section>
  );
}

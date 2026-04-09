"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State & Ref untuk Features
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  // State & Ref untuk Resources
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const openFeaturesPopup = () => setFeaturesOpen(true);
  const closeFeaturesPopup = () => setFeaturesOpen(false);

  const openResourcesPopup = () => setResourcesOpen(true);
  const closeResourcesPopup = () => setResourcesOpen(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground shadow-md" : "bg-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* LOGO */}
        <Image
          src="/img/logo/logo fluensy dark.svg"
          alt="Fluensy Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* MENU CENTER - DESKTOP */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.label === "Features" ? (
                <button
                  type="button"
                  onClick={openFeaturesPopup}
                  onMouseEnter={openFeaturesPopup}
                  onMouseLeave={closeFeaturesPopup}
                  className="text-sm font-medium text-black hover:text-main-blue hover:font-semibold transition"
                >
                  {item.label}
                </button>
              ) : item.label === "Resources" ? (
                <button
                  type="button"
                  onClick={openResourcesPopup}
                  onMouseEnter={openResourcesPopup}
                  onMouseLeave={closeResourcesPopup}
                  className="text-sm font-medium text-black hover:text-main-blue hover:font-semibold transition"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium text-black hover:text-main-blue hover:font-semibold transition"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS - DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-main-blue hover:text-white hover:bg-main-blue px-5 py-2 rounded-full border border-main-blue transition"
          >
            Login
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-full bg-main-blue text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            Try for Free
          </a>
        </div>

        {/* HAMBURGER MENU - MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* POPUP FEATURES */}
      {featuresOpen && (
        <div
          className="relative z-40"
          onMouseEnter={openFeaturesPopup}
          onMouseLeave={closeFeaturesPopup}
        >
          <div className="absolute inset-x-0 top-full flex justify-center mt-2">
            <div
              ref={featuresRef}
              className="w-full max-w-screen-sm md:max-w-4xl rounded-[28px] border border-slate-200 bg-white shadow-2xl p-4 md:p-6 mx-4 md:mx-0 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="grid gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Product features
                  </p>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* FEATURE CARD 1 */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start max-w-full">
                      <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-48 object-cover bg-gray-100"
                          src="/img/navbar/feature-smart-matching.png"
                          alt="Smart Matching"
                        />
                      </a>
                      <div className="w-2/3 md:w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Smart Matching
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Temukan influencer yang paling sesuai dengan brand
                          Anda menggunakan AI yang canggih untuk hasil maksimal.
                        </p>
                      </div>
                    </div>

                    {/* FEATURE CARD 2 */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start max-w-full">
                      <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-48 object-cover bg-gray-100"
                          src="/img/navbar/feature-optimasi-budget.png"
                          alt="Budget Optimization"
                        />
                      </a>
                      <div className="w-2/3 md:w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Budget Optimization
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Optimalkan budget iklan Anda secara otomatis untuk
                          mendapatkan ROI terbaik dari setiap rupiah yang
                          diinvestasikan.
                        </p>
                      </div>
                    </div>

                    {/* FEATURE CARD 3 */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start max-w-full">
                      <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-48 object-cover bg-gray-100"
                          src="/img/navbar/feature-fake-follower.png"
                          alt="Fake Follower Detection"
                        />
                      </a>
                      <div className="w-2/3 md:w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Fake Follower Detection
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Deteksi dan hindari influencer dengan fake followers
                          menggunakan teknologi AI terdepan untuk memastikan
                          kredibilitas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP RESOURCES */}
      {resourcesOpen && (
        <div
          className="relative z-40"
          onMouseEnter={openResourcesPopup}
          onMouseLeave={closeResourcesPopup}
        >
          <div className="absolute inset-x-0 top-full flex justify-center mt-2">
            <div
              ref={resourcesRef}
              className="w-full max-w-screen-sm md:max-w-6xl rounded-[28px] border border-slate-200 bg-white shadow-2xl p-4 md:p-6 mx-4 md:mx-0 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="grid gap-6 items-start">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Resources
                  </p>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {/* BLOG CARD */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start w-full">
                      {/* Uncomment jika gambar sudah siap
                      <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-40 object-cover bg-gray-100"
                          src="/img/navbar/resource-blog.png"
                          alt="Blog"
                        />
                      </a>
                      */}
                      <div className="w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Blog
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Konten tulisan panjang mengenai program influencer
                          B2C, termasuk riset orisinal, panduan praktis, dan
                          banyak lagi.
                        </p>
                      </div>
                    </div>

                    {/* NEWSLETTER CARD */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start w-full h-full">
                      {/* <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-40 object-cover bg-gray-100"
                          src="/img/navbar/resource-newsletter.png"
                          alt="Newsletter"
                        />
                      </a>
                      */}
                      <div className="w-full flex flex-col flex-grow">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Newsletter
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body flex-grow">
                          Berlangganan email singkat, rutin, dan inspiratif
                          seputar topik influencer marketing.
                        </p>
                      </div>
                    </div>

                    {/* WEBINARS CARD */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start w-full">
                      {/* <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-40 object-cover bg-gray-100"
                          src="/img/navbar/resource-webinars.png"
                          alt="Webinars"
                        />
                      </a>
                      */}
                      <div className="w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Webinars
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Webinar live & on-demand bersama para ahli influencer
                          marketing. Bergabunglah dalam diskusi dan pelajari
                          strategi baru untuk program Anda.
                        </p>
                      </div>
                    </div>

                    {/* YOUTUBE CHANNEL CARD */}
                    <div className="bg-neutral-primary-soft flex flex-row md:flex-col gap-4 p-4 md:p-6 rounded-base shadow-xs items-center md:items-start w-full">
                      {/* <a href="#" className="w-1/3 md:w-full shrink-0">
                        <img
                          className="rounded-base w-full h-auto md:h-40 object-cover bg-gray-100"
                          src="/img/navbar/resource-youtube.png"
                          alt="YouTube channel"
                        />
                      </a>
                      */}
                      <div className="w-full">
                        <a href="#">
                          <h5 className="mb-1 md:mt-2 md:mb-2 text-base md:text-lg text-gray-800 font-semibold tracking-tight text-heading">
                            Instagram & Tiktok
                          </h5>
                        </a>
                        <p className="text-xs md:text-sm text-gray-800 text-body">
                          Tips, trik, dan bedah tuntas yang akan membantu Anda
                          memulai dan mengembangkan kemitraan influencer Anda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-foreground border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) =>
              item.label === "Features" ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    openFeaturesPopup();
                  }}
                  className="text-left text-sm font-medium text-black hover:text-main-blue transition"
                >
                  {item.label}
                </button>
              ) : item.label === "Resources" ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    openResourcesPopup();
                  }}
                  className="text-left text-sm font-medium text-black hover:text-main-blue transition"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-sm font-medium text-black hover:text-main-blue transition"
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
              <a
                href="/login"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-main-blue hover:text-white hover:bg-main-blue px-5 py-2 rounded-full border border-main-blue transition text-center"
              >
                Login
              </a>

              <a
                href="#"
                onClick={closeMobileMenu}
                className="px-5 py-2 rounded-full bg-main-blue text-white text-sm font-semibold hover:bg-blue-700 transition text-center"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

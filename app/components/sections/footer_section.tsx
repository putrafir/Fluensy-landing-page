"use client";
import { FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#10324F] text-white pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* KOLOM 1 (LEBIH LEBAR) */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/img/logo/logo fluensy white.svg"
              alt="Fluensy Logo"
              width={140}
              height={40}
              className="mb-4 md:mb-6"
            />
            <p className="text-[#83AAC6] max-w-md text-sm md:text-base">
              Platform analitik influencer berbasis AI untuk kampanye yang lebih
              terukur dan strategis.
            </p>
          </div>

          {/* KOLOM 2 */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Platform
            </h4>
            <ul className="space-y-2 text-[#83AAC6] text-sm md:text-base">
              <li>Fitur</li>
              <li>Cara Kerja</li>
              <li>Model Akses</li>
              <li>Explore Features</li>
            </ul>
          </div>

          {/* KOLOM 3 */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Resources
            </h4>
            <ul className="space-y-2 text-[#83AAC6] text-sm md:text-base">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Dokumentasi</li>
            </ul>
          </div>

          {/* KOLOM 4 */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">
              Contact
            </h4>
            <ul className="space-y-2 text-[#83AAC6] text-sm md:text-base">
              <li className="flex items-center">
                <span className="mr-2 text-white text-base">
                  <FaEnvelope />
                </span>
                Email
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white text-base">
                  <FaYoutube />
                </span>
                YouTube
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white text-base">
                  <FaInstagram />
                </span>
                Instagram
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-white text-base">
                  <FaTiktok />
                </span>
                TikTok
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 border-t border-[#1e4b6f] pt-6">
          {/* LEFT */}
          <p className="text-xs md:text-sm text-white">
            © 2026 Fluensy. All rights reserved.
          </p>

          {/* RIGHT */}
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-white">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

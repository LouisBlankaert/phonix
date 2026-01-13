"use client";

import Link from "next/link";
import Image from "next/image";
import { Smartphone, Battery, ShieldCheck, Camera, MapPin, Truck } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { iphonePricing, samsungPricing, xiaomiPricing, huaweiPricing, serviceFeatures } from "@/data/pricing";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<"iphone" | "samsung" | "xiaomi" | "huawei" | null>(null);
  
  const pricingData = selectedBrand === "iphone" ? iphonePricing : 
                      selectedBrand === "samsung" ? samsungPricing : 
                      selectedBrand === "xiaomi" ? xiaomiPricing :
                      selectedBrand === "huawei" ? huaweiPricing : [];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Réparation de Téléphones Professionnelle
          </h1>
          <p className="text-base md:text-lg font-light text-neutral-600 max-w-3xl mx-auto mb-8">
            Écrans OLED, batteries, caméras et vitres arrière
          </p>

          {!selectedBrand && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mb-12">
              <button
                onClick={() => setSelectedBrand("iphone")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-8 md:p-12 w-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transform"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 relative">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">iPhone</h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light">Voir les tarifs</p>
              </button>
              <button
                onClick={() => setSelectedBrand("samsung")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-8 md:p-12 w-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transform"
              >
                <div className="h-16 w-24 md:h-20 md:w-32 mx-auto mb-3 md:mb-4 relative">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg"
                    alt="Samsung Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">Samsung</h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light">Voir les tarifs</p>
              </button>
              <button
                onClick={() => setSelectedBrand("xiaomi")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-8 md:p-12 w-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transform"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 relative">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg"
                    alt="Xiaomi Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">Xiaomi</h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light">Voir les tarifs</p>
              </button>
              <button
                onClick={() => setSelectedBrand("huawei")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300 p-8 md:p-12 w-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transform"
              >
                <div className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <div className="text-2xl md:text-4xl font-bold text-red-600">HUAWEI</div>
                </div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-900 mb-2">Huawei</h3>
                <p className="text-xs md:text-sm text-neutral-600 font-light">Voir les tarifs</p>
              </button>
            </div>
          )}

          {selectedBrand && (
            <div className="mb-8">
              <button
                onClick={() => setSelectedBrand(null)}
                className="inline-block px-8 py-3 text-sm font-normal bg-neutral-900 text-white hover:bg-neutral-700 transition-colors uppercase tracking-wide cursor-pointer"
              >
                ← Retour à la sélection
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-white border border-neutral-200 p-6 md:p-8 hover:border-neutral-900 transition-all duration-300 hover:shadow-md">
              <MapPin className="h-8 w-8 text-neutral-900 mx-auto mb-4" />
              <div className="font-light text-neutral-900 mb-2 text-lg">{serviceFeatures[0].title}</div>
              <div className="text-sm text-neutral-600 space-y-1">
                {serviceFeatures[0].locations?.map((location, index) => (
                  <div key={index}>{location}</div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-6 md:p-8 hover:border-neutral-900 transition-all duration-300 hover:shadow-md">
              <Truck className="h-8 w-8 text-neutral-900 mx-auto mb-4" />
              <div className="font-light text-neutral-900 mb-2 text-lg">{serviceFeatures[1].title}</div>
              <div className="text-sm text-neutral-600">
                {serviceFeatures[1].description}
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-6 md:p-8 hover:border-neutral-900 transition-all duration-300 hover:shadow-md">
              <ShieldCheck className="h-8 w-8 text-neutral-900 mx-auto mb-4" />
              <div className="font-light text-neutral-900 mb-2 text-lg">{serviceFeatures[2].title}</div>
              <div className="text-sm text-neutral-600">
                {serviceFeatures[2].description}
              </div>
            </div>
          </div>
        </div>

        {selectedBrand && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 mb-2 tracking-tight">
                Tarifs {selectedBrand === "iphone" ? "iPhone" : 
                        selectedBrand === "samsung" ? "Samsung" : 
                        selectedBrand === "xiaomi" ? "Xiaomi" : "Huawei"}
              </h2>
            </div>

            <div className="bg-white border border-neutral-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-left font-light text-xs md:text-sm tracking-wide uppercase">Modèle</th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-center font-light text-xs md:text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <Smartphone className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="hidden sm:inline">Écran OLED</span>
                      <span className="sm:hidden">Écran</span>
                    </div>
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-center font-light text-xs md:text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <Battery className="h-3 w-3 md:h-4 md:w-4" />
                      <span>Batterie</span>
                    </div>
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-center font-light text-xs md:text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <Camera className="h-3 w-3 md:h-4 md:w-4" />
                      <span>Caméra</span>
                    </div>
                  </th>
                  <th className="px-3 md:px-6 py-4 md:py-5 text-center font-light text-xs md:text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-1 md:gap-2">
                      <ShieldCheck className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="hidden sm:inline">Vitre arrière</span>
                      <span className="sm:hidden">Vitre</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {pricingData.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-neutral-50 transition-all duration-200"
                  >
                    <td className="px-3 md:px-6 py-3 md:py-4 font-light text-neutral-900 text-sm md:text-base">{item.model}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center text-neutral-900 font-normal text-sm md:text-base">{item.screen}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center text-neutral-900 font-normal text-sm md:text-base">{item.battery}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center text-neutral-900 font-normal text-sm md:text-base">{item.camera}</td>
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center text-neutral-900 font-normal text-sm md:text-base">{item.backGlass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </div>
          </>
        )}

        <div className="bg-neutral-900 p-8 md:p-16 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">Besoin d&apos;une réparation ?</h2>
          <p className="text-base md:text-lg font-light text-neutral-300 mb-8 max-w-2xl mx-auto">
            Visitez nos ateliers à Bruxelles ou Geraardsbergen, ou demandez un déplacement
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 md:px-10 py-3 md:py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-all duration-300 font-light text-xs md:text-sm tracking-wide uppercase hover:shadow-lg hover:scale-105 transform"
          >
            Nous contacter
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

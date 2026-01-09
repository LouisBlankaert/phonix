"use client";

import Link from "next/link";
import { Smartphone, Battery, ShieldCheck, Camera, MapPin, Truck } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { iphonePricing, samsungPricing, serviceFeatures } from "@/data/pricing";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<"iphone" | "samsung" | null>(null);
  
  const pricingData = selectedBrand === "iphone" ? iphonePricing : selectedBrand === "samsung" ? samsungPricing : [];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Réparation de Téléphones Professionnelle
          </h1>
          <p className="text-lg font-light text-neutral-600 max-w-3xl mx-auto mb-8">
            Écrans compatibles OLED, batteries, caméras et vitres arrière
          </p>

          {!selectedBrand && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={() => setSelectedBrand("iphone")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all p-12 w-full sm:w-80 cursor-pointer"
              >
                <Smartphone className="h-16 w-16 text-neutral-900 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-neutral-900 mb-2">iPhone</h3>
                <p className="text-sm text-neutral-600 font-light">Voir les tarifs iPhone</p>
              </button>
              <button
                onClick={() => setSelectedBrand("samsung")}
                className="group relative bg-white border-2 border-neutral-200 hover:border-neutral-900 transition-all p-12 w-full sm:w-80 cursor-pointer"
              >
                <Smartphone className="h-16 w-16 text-neutral-900 mx-auto mb-4" />
                <h3 className="text-2xl font-light text-neutral-900 mb-2">Samsung</h3>
                <p className="text-sm text-neutral-600 font-light">Voir les tarifs Samsung</p>
              </button>
            </div>
          )}

          {selectedBrand && (
            <div className="mb-8">
              <button
                onClick={() => setSelectedBrand(null)}
                className="inline-block px-6 py-2 text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors uppercase tracking-wide cursor-pointer"
              >
                ← Retour à la sélection
              </button>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-colors">
              <MapPin className="h-8 w-8 text-neutral-900 mx-auto mb-4" />
              <div className="font-light text-neutral-900 mb-2 text-lg">{serviceFeatures[0].title}</div>
              <div className="text-sm text-neutral-600 space-y-1">
                {serviceFeatures[0].locations?.map((location, index) => (
                  <div key={index}>{location}</div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-colors">
              <Truck className="h-8 w-8 text-neutral-900 mx-auto mb-4" />
              <div className="font-light text-neutral-900 mb-2 text-lg">{serviceFeatures[1].title}</div>
              <div className="text-sm text-neutral-600">
                {serviceFeatures[1].description}
              </div>
            </div>
            <div className="bg-white border border-neutral-200 p-8 hover:border-neutral-900 transition-colors">
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
              <h2 className="text-3xl font-light text-neutral-900 mb-2 tracking-tight">
                Tarifs {selectedBrand === "iphone" ? "iPhone" : "Samsung"}
              </h2>
            </div>

            <div className="bg-white border border-neutral-200 overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-900 text-white">
                <tr>
                  <th className="px-6 py-5 text-left font-light text-sm tracking-wide uppercase">Modèle</th>
                  <th className="px-6 py-5 text-center font-light text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Écran OLED</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center font-light text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-2">
                      <Battery className="h-4 w-4" />
                      <span>Batterie</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center font-light text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-2">
                      <Camera className="h-4 w-4" />
                      <span>Caméra</span>
                    </div>
                  </th>
                  <th className="px-6 py-5 text-center font-light text-sm tracking-wide uppercase">
                    <div className="flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Vitre arrière</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {pricingData.map((item, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-light text-neutral-900">{item.model}</td>
                    <td className="px-6 py-4 text-center text-neutral-900 font-normal">{item.screen}</td>
                    <td className="px-6 py-4 text-center text-neutral-900 font-normal">{item.battery}</td>
                    <td className="px-6 py-4 text-center text-neutral-900 font-normal">{item.camera}</td>
                    <td className="px-6 py-4 text-center text-neutral-900 font-normal">{item.backGlass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </div>

            <div className="bg-neutral-100 border-l-2 border-neutral-900 p-8 mb-16">
          <h2 className="text-xl font-light text-neutral-900 mb-3 tracking-tight">Pièces de qualité premium</h2>
          <p className="text-neutral-700 leading-relaxed font-light">
            Tous nos écrans sont des <strong className="font-normal">écrans compatibles OLED de haute qualité</strong>, offrant une excellente qualité d&apos;image 
            et une durabilité optimale. Nous utilisons uniquement des pièces testées et certifiées pour garantir 
            la meilleure expérience possible à nos clients.
          </p>
            </div>
          </>
        )}

        <div className="bg-neutral-900 p-16 text-center text-white">
          <h2 className="text-3xl font-light tracking-tight mb-4">Besoin d&apos;une réparation ?</h2>
          <p className="text-lg font-light text-neutral-300 mb-8 max-w-2xl mx-auto">
            Visitez nos ateliers à Bruxelles ou Geraardsbergen, ou demandez un déplacement
          </p>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors font-light text-sm tracking-wide uppercase"
          >
            Nous contacter
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Avis() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl w-full text-center">
          <div className="bg-white border-2 border-neutral-200 p-12 md:p-16 shadow-lg">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 mb-6">
              Section Avis Clients
            </h1>
            <p className="text-xl md:text-2xl font-light text-neutral-600 mb-8">
              Cette page n&apos;est pas encore disponible
            </p>
            <p className="text-base text-neutral-500 font-light mb-8">
              Nous travaillons actuellement sur cette section pour vous offrir la meilleure expérience possible.
            </p>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-6 mb-8">
            <p className="text-sm text-neutral-600 font-light mb-2">
              Redirection automatique dans
            </p>
            <div className="text-6xl font-light text-neutral-900 mb-2">
              {countdown}
            </div>
            <p className="text-sm text-neutral-500 font-light">
              seconde{countdown > 1 ? 's' : ''}
            </p>
          </div>

          <button
            onClick={() => router.push("/")}
            className="inline-block px-10 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 hover:shadow-lg hover:scale-105 transform font-light text-sm tracking-wide uppercase"
          >
            Retour à l&apos;accueil
          </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

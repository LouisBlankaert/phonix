import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Photos() {
  const repairGalleries = [
    {
      category: "Réparations d'écrans",
      description: "Survolez les images pour voir le résultat",
      repairs: [
        { 
          model: "iPhone 16 Pro Max",
          before: "Écran cassé",
          after: "Écran OLED neuf"
        },
        { 
          model: "iPhone 15 Pro",
          before: "Écran fissuré",
          after: "Réparation parfaite"
        },
        { 
          model: "iPhone 14 Pro Max",
          before: "Écran brisé",
          after: "Comme neuf"
        },
      ]
    },
    {
      category: "Vitre arrière",
      description: "Survolez les images pour voir le résultat",
      repairs: [
        { 
          model: "iPhone 16 Pro",
          before: "Vitre cassée",
          after: "Vitre remplacée"
        },
        { 
          model: "iPhone 15",
          before: "Vitre endommagée",
          after: "État neuf"
        },
        { 
          model: "iPhone 14 Plus",
          before: "Vitre fissurée",
          after: "Réparation complète"
        },
      ]
    },
  ];

  const atelierPhotos = [
    { title: "Poste de réparation équipé" },
    { title: "Outils professionnels" },
    { title: "Zone de diagnostic" },
    { title: "Stock de pièces détachées" },
    { title: "Espace d'accueil clients" },
    { title: "Équipement de précision" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Galerie Photos
          </h1>
          <p className="text-lg font-light text-neutral-600 max-w-2xl mx-auto">
            Découvrez nos réparations et notre atelier professionnel
          </p>
        </div>

        {repairGalleries.map((gallery, galleryIndex) => (
          <div key={galleryIndex} className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-light text-neutral-900 mb-2 tracking-tight">{gallery.category}</h2>
              <p className="text-lg text-neutral-600 font-light">{gallery.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.repairs.map((repair, repairIndex) => (
                <div 
                  key={repairIndex}
                  className="group relative bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 transition-colors"
                >
                  <div className="aspect-4/3 bg-neutral-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                      <div className="text-center px-4">
                        <ImageIcon className="h-16 w-16 text-neutral-400 mx-auto mb-3" />
                        <div className="text-sm text-neutral-600 font-light">{repair.before}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-neutral-50">
                      <div className="text-center px-4">
                        <ImageIcon className="h-16 w-16 text-neutral-900 mx-auto mb-3" />
                        <div className="text-sm text-neutral-900 font-normal">{repair.after}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-light tracking-wide uppercase bg-neutral-900 text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                        Avant
                      </span>
                      <span className="absolute top-0 left-0 px-3 py-1 text-xs font-light tracking-wide uppercase bg-neutral-900 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Après
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-light text-neutral-900">{repair.model}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-light text-neutral-900 mb-2 tracking-tight">Notre atelier</h2>
            <p className="text-lg text-neutral-600 font-light">Découvrez notre espace de travail professionnel</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atelierPhotos.map((photo, photoIndex) => (
              <div 
                key={photoIndex}
                className="group relative bg-white border border-neutral-200 overflow-hidden hover:border-neutral-900 transition-colors"
              >
                <div className="aspect-4/3 bg-neutral-100 flex items-center justify-center relative overflow-hidden">
                  <ImageIcon className="h-24 w-24 text-neutral-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-light text-neutral-900">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-900 p-16 text-center text-white">
          <h2 className="text-3xl font-light tracking-tight mb-4">Besoin d&apos;une réparation ?</h2>
          <p className="text-lg font-light text-neutral-300 mb-8 max-w-2xl mx-auto">
            Visitez nos ateliers à Bruxelles ou Geraardsbergen, ou demandez un déplacement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors font-light text-sm tracking-wide uppercase"
            >
              Nous contacter
            </Link>
            <Link 
              href="/avis"
              className="inline-block px-10 py-4 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-light text-sm tracking-wide uppercase"
            >
              Voir les avis
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

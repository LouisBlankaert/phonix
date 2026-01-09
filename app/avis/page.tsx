import Link from "next/link";
import { Star, StarHalf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Avis() {
  const reviews = [
    {
      name: "Sophie Martin",
      date: "Il y a 2 jours",
      rating: 5,
      device: "iPhone 17 Pro",
      repair: "Écran",
      comment: "Service impeccable ! Mon écran a été remplacé en 25 minutes. Le technicien était très professionnel et m'a expliqué toute la procédure. Le prix est correct et la qualité est au rendez-vous. Je recommande vivement !",
      avatar: "SM"
    },
    {
      name: "Thomas Dubois",
      date: "Il y a 5 jours",
      rating: 5,
      device: "Samsung Galaxy S25 Ultra",
      repair: "Batterie",
      comment: "Excellente expérience ! Ma batterie ne tenait plus la journée, maintenant c'est comme neuf. Équipe sympathique et rapide. Prix très compétitif par rapport à la concurrence.",
      avatar: "TD"
    },
    {
      name: "Marie Lefebvre",
      date: "Il y a 1 semaine",
      rating: 5,
      device: "iPhone 16 Pro Max",
      repair: "Vitre arrière",
      comment: "Très satisfaite de la réparation de ma vitre arrière. Le résultat est parfait, on ne voit même pas qu'elle a été changée. Service rapide et professionnel. Merci !",
      avatar: "ML"
    },
    {
      name: "Lucas Bernard",
      date: "Il y a 1 semaine",
      rating: 4.5,
      device: "Google Pixel 9 Pro",
      repair: "Écran",
      comment: "Très bon service, réparation rapide et soignée. Petit bémol sur le temps d'attente (45 min au lieu de 30) car il y avait du monde, mais le résultat est nickel. Je reviendrai sans hésiter.",
      avatar: "LB"
    },
    {
      name: "Emma Rousseau",
      date: "Il y a 2 semaines",
      rating: 5,
      device: "iPhone 15 Pro",
      repair: "Batterie",
      comment: "Super service ! Mon iPhone retrouve une seconde jeunesse avec cette nouvelle batterie. L'accueil est chaleureux et les tarifs sont honnêtes. Je recommande à 100% !",
      avatar: "ER"
    },
    {
      name: "Alexandre Petit",
      date: "Il y a 2 semaines",
      rating: 5,
      device: "Samsung Galaxy S24 Ultra",
      repair: "Écran",
      comment: "Réparation parfaite ! L'écran fonctionne comme au premier jour. Le technicien a pris le temps de bien nettoyer l'appareil. Très professionnel, je recommande.",
      avatar: "AP"
    },
    {
      name: "Chloé Moreau",
      date: "Il y a 3 semaines",
      rating: 5,
      device: "iPhone 17 Pro Max",
      repair: "Vitre arrière",
      comment: "J'avais cassé ma vitre arrière et j'appréhendais le prix. Finalement, c'est très raisonnable et le travail est impeccable. Merci pour votre professionnalisme !",
      avatar: "CM"
    },
    {
      name: "Julien Garnier",
      date: "Il y a 3 semaines",
      rating: 4.5,
      device: "iPhone 16 Pro",
      repair: "Batterie",
      comment: "Bon rapport qualité/prix. La batterie tient bien mieux qu'avant. Service efficace, peut-être un peu d'attente mais ça vaut le coup.",
      avatar: "JG"
    },
    {
      name: "Léa Fontaine",
      date: "Il y a 1 mois",
      rating: 5,
      device: "Google Pixel 9 Pro",
      repair: "Écran",
      comment: "Parfait du début à la fin ! Prise en charge rapide, réparation soignée et garantie de 6 mois. C'est rassurant. Je n'hésiterai pas à revenir si besoin.",
      avatar: "LF"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }
    return stars;
  };

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight text-neutral-900 mb-6">
            Avis Clients
          </h1>
          <p className="text-lg font-light text-neutral-600 max-w-2xl mx-auto mb-8">
            Découvrez ce que nos clients pensent de nos services
          </p>
          
          <div className="inline-flex items-center gap-4 bg-white border border-neutral-200 px-8 py-6">
            <div className="text-left">
              <div className="text-4xl font-light text-neutral-900">{averageRating}</div>
              <div className="flex gap-1 my-2">
                {renderStars(parseFloat(averageRating))}
              </div>
              <div className="text-sm text-neutral-600 font-light">{reviews.length} avis</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white border border-neutral-200 p-6 hover:border-neutral-900 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-white font-light shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-normal text-neutral-900">{review.name}</h3>
                  <p className="text-sm text-neutral-500 font-light">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {renderStars(review.rating)}
              </div>

              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-light tracking-wide uppercase mr-2">
                  {review.device}
                </span>
                <span className="inline-block px-3 py-1 bg-neutral-900 text-white text-xs font-light tracking-wide uppercase">
                  {review.repair}
                </span>
              </div>

              <p className="text-neutral-700 leading-relaxed font-light">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-900 p-16 text-center text-white">
          <h2 className="text-3xl font-light tracking-tight mb-4">Vous aussi, partagez votre expérience !</h2>
          <p className="text-lg font-light text-neutral-300 mb-8">
            Votre avis nous aide à améliorer nos services
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
